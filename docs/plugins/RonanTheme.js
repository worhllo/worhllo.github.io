document.addEventListener('DOMContentLoaded', function() {    
    // 获取完整的URL信息
    const currentPath = window.location.pathname;
    const currentHost = window.location.hostname;
    const currentUrl = window.location.href;

    // 定义目标域名和需要匹配的路径
    const targetDomain = 'note.142588.xyz';
    const isTargetDomain = currentHost === targetDomain || currentHost === `www.${targetDomain}`;
    
    // 路径匹配：主页(带或不带斜杠)、index.html页面、包含/page的页面
    const isHomePage = currentPath === '/' || currentPath === '';
    const isIndexPage = currentPath.includes('/index.html');
    const isPagePath = currentPath.includes('/page');

    // 综合判断条件
    if (isTargetDomain && (isHomePage || isIndexPage || isPagePath)) {
        console.log('应用主页主题 - 条件匹配成功');
        let style = document.createElement("style");
        style.innerHTML = `
        .blogTitle {
            display: unset !important;
        }

        #header {
            height: 300px !important;
        }

        #header h1 {
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
        }

        .avatar {
            width: 200px !important;
            height: 200px !important;
        }

        #header h1 a {
            margin-top: 30px !important;
            font-family: fantasy !important;
            margin-left: unset !important;
        }

        html {    
            background: url('https://note.142588.xyz/background.webp') no-repeat center center fixed !important;
            background-size: cover !important;
        }
        `;
        // 将样式添加到页面头部
        document.head.appendChild(style);
    } else {
        // 调试信息，帮助排查问题
        console.log('不应用主页主题 - 条件不匹配');
        console.log('当前域名:', currentHost);
        console.log('当前路径:', currentPath);
        console.log('是否目标域名:', isTargetDomain);
        console.log('是否主页:', isHomePage);
    }
});


        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;   /*设置所有外边距离 */
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(237, 239, 233, 0.84); 
            border-radius: 10px; /* 圆角边框 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影 */
            overflow: auto;
        }

        /* 主页博客列表圆角边框 */
        .SideNav {
            background: rgba(255, 255, 255, 0.6); /* 白色背景，透明度60% */
            border-radius: 10px; /* 圆角边框 */
            min-width: unset;
        }

        /* 鼠标放到博客标题后会高亮 */
        .SideNav-item:hover {
            background-color: #c3e4e3;
            border-radius: 10px;
            transform: scale(1.04);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .SideNav-item {
            transition: 0.1s;
        }

        /* 分页条 */
        .pagination a:hover, .pagination a:focus, .pagination span:hover, .pagination span:focus, .pagination em:hover, .pagination em:focus {
            border-color: rebeccapurple;
        }


    //文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        let style = document.createElement("style");
        style.innerHTML = `

        html {    
            background: url('https://note.142588.xyz/background.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;   /*设置所有外边距离 */
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(237, 239, 233, 0.84); 
            border-radius: 10px; /* 圆角边框 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影 */
            overflow: auto;
        }

        /* markdown内容 */
        /* 图片圆角 */
        .markdown-body img {
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.78); 
        }
        
        /* notice、caution、warning等提示信息的圆角 */
        .markdown-alert {
            border-radius: 8px;
        }
        
        /* 代码块 */
        .markdown-body .highlight pre, .markdown-body pre {
            color: rgb(0, 0, 0);          /* 代码块内代码颜色 */
            background-color: rgba(243, 244, 243, 0.967);       /* 代码块内框颜色 */
            box-shadow: 0 10px 30px 0 rgba(222, 217, 217, 0.4);
            padding-top: 20px; 
            border-radius: 8px;
        }

        /* 行内代码 */
        .markdown-body code, .markdown-body tt {
            background-color: #c9daf8;
        }
        
     /* 标题橙色包裹 */
.markdown-body h1{
    display: inline-block;
    font-size: 1.3rem;
    font-weight: bold;
    background: rgb(239, 112, 96);
    color: #ffffff;
    padding: 3px 10px 1px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-right: 2px;
    margin-top: 1.8rem; 
}   
`;
document.head.appendChild(style);
}


    // 搜索页主题--------------------------------------------------------------------
    
    else if (currentUrl.includes('/tag')) {
        console.log('应用搜索页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        
        html {    
            background: url('https://note.142588.xyz/background.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;   /*设置所有外边距离 */
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(237, 239, 233, 0.84); 
            border-radius: 10px; /* 圆角边框 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影 */
            overflow: auto;
        }
        
        .SideNav {
            background: rgba(255, 255, 255, 0.6); /* 白色背景，透明度60% */
            border-radius: 10px; /* 圆角边框 */
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background-color: #c3e4e3;
            border-radius: 10px;
            transform: scale(1.02);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        
        .SideNav-item {
            transition: 0.1s;
        }
        
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
        }
        
        .subnav-search-icon {
            top: 9px;
        }
        
        button.btn.float-left {
            display: none;
        }
        
        .subnav-search {
            width: unset; 
            height: 36px;
        }
        `;
        document.head.appendChild(style);
    
        // 搜索框回车触发
        let input = document.getElementsByClassName("form-control subnav-search-input float-left")[0];
        let button = document.getElementsByClassName("btn float-left")[0];
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                button.click();
            }
        });
    }
})
