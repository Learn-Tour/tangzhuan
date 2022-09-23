// 图片切换

let myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site-scripted/images/firefox-icon.png') {
        myImage.setAttribute('src', "https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site-scripted/images/firefox2.png");
    } else {
        myImage.setAttribute('src', "https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site-scripted/images/firefox-icon.png");
    }
})

// myImage.onclick = ()=>{
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc == 'https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site-scripted/images/firefox-icon.png'){
//         myImage.setAttribute('src',"https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site-scripted/images/firefox2.png");
//     } else {
//         myImage.setAttribute('src',"https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site-scripted/images/firefox-icon.png");
//     }
// };

// 用户名称实现
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    // 避免 null
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('sb', myName);
        myHeading.textContent = "MorFans 酷毙了，" + myName;
    }
}

// 初始化页面提示输出名称
let storeName = localStorage.getItem('sb');

if (!storeName) {
    setUserName();
} else {
    myHeading.textContent = "MorFans 酷毙了，" + storeName;
}

// 按钮点击实现
myButton.addEventListener('click', () => setUserName());