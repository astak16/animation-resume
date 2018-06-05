/*把code写到#code和style标签里面*/
function writeCode(prefix,code,fn){

    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1;
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0,n)
        domCode.scrollTop = 10000
        if(n >= code.length){
            window.clearInterval(id)
            fn.call()
        }
    },10)
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper >.content')
    let n = 0
    let id = setInterval(() => {
        n += 1;
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if(n >= markdown.length){
            window.clearInterval(id)
            fn.call()
        }
    },100)
}

var result = `/*
* 面试官你好，我是XXX
* 我将以动画的形式来介绍我自己
* 只用文字介绍太单调了
* 我就用代码来介绍
* 首先准备一些样式
*/

*{
    transition:all 1s
}
html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    padding: .5em;
    border: 1px solid;
    margin: .5em;
    overflow: auto;
    width: 45vw; height: 90vh;
}

/*我需要一点高亮*/

.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}

/*加点3D效果*/
.codeContainer{
    perspective:1000px;
}
#code{
    position: fixed; left: 0; top: 0;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
width: 200px;
   height: 200px;
   margin: 75px 0 0 75px;
   border: none;
}

/*不玩了,我来介绍一下我自己*/
/*我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper > .content{
    background:white;
    height:100%;
    width:100%;
}
`
var result2 =`
#paper{
    
}
`
var md = `
# 自我介绍

我叫xxx
1994 年 5 月出生
xxx 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

1. xxx 轮播
2. xxx 简历
3. xxx 画板

# 联系方式

QQ xxxxxxxx
Email xxxxxxx
手机 xxxxxxxx
`



// writeCode('',result,createPaper(writeCode(result,result2)))


writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })
})


function createPaper(fn){
    let paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    let content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    fn.call()
}














