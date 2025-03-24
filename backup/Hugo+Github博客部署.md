## 环境准备
### 下载Hugo

- 网址：[Hugo官网](https://gohugo.io/)

- Github地址:[gohugoio/hugo](https://github.com/gohugoio/hugo)

 ![image1.png](https://imgbed.worhllo.us.kg/file/1731302389412_image1.png)

- 选择合适的版本下载。



### 下载git

- 点击[Git官网](https://git-scm.com/)

  ![Git官网.png](https://imgbed.worhllo.us.kg/file/1731302674605_Git官网.png)

- 点击 **Download for Windows** 按照[指引](https://blog.csdn.net/weixin_42242910/article/details/136297201)安装即可。



## 搭建博客

### 创建Blog

- 解压`hugo_extended_0.134.2_windows-amd64.zip`文件，在`dev`文件夹下进入cmd命令窗口（**全选文件路径，输入cmd后回车**），输入`hugo new site xxxx`创建文件（**xxx任意命名，此处以dev为例**），代码输入无误之后就会生成一个你命名的文件夹。（**注意不要急着关闭cmd命令窗口，后面接着要用到**）

  ![555.png](https://imgbed.worhllo.us.kg/file/1731306688619_555.png)
  
  ![file截图.png](https://imgbed.worhllo.us.kg/file/1731302868323_file截图.png)
  
- 再次打开cmd命令窗口，输入`cd dev`

- 将上图页面中的`hugo.exe`文件复制到`dev`文件内。

  ![111.png](https://imgbed.worhllo.us.kg/file/1731303239677_111.png)

- 在cmd命令行中输入`hugo server -D`，运行成功后会出现以下界面：

  ![hugo.png](https://imgbed.worhllo.us.kg/file/1731310888077_hugo.png)

- 此时，在浏览器中输入命令窗口中出现的链接，即`http://localhost:1313/`，如果操作无误，则会提示`Page Not Found`



### 下载主题

- 再次进入[**Hugo官网**](https://gohugo.io/)。

- 点击`Themes`选择一款适合的主题，这里以`Stack`这款主题为例。

  ![Stack.png](https://imgbed.worhllo.us.kg/file/1731303957330_Stack.png)

- 点击`Download`，下滑至`Assets`界面，并选择适当的版本，将源码下载下来。

  ![image9.png](https://imgbed.worhllo.us.kg/file/1731304063587_image9.png)

- 将文件解压，将其命名为`hugo-theme-stack`，移动至`dev\themes`文件下，接着打开`exampleSite`文件夹，复制其中的` Content` 和 `hugo.yaml` 复制到主文件夹`dev`中，然后删掉`hugo.toml`。

  ![999.png](https://imgbed.worhllo.us.kg/file/1731310967811_999.png)

- 再次打开cmd命令窗口，输入`hugo server -D`，打开浏览器输入`http://localhost:1313/`，若操作无误则主题会正常显示，并出现出相关范例文章。

  ![111.png](https://imgbed.worhllo.us.kg/file/1731304629655_111.png)



## Github部署
### 常规部署

- 前提条件：拥有一个属于自己的github账号，没有请自行注册。

- 新建仓库，命名任意，但是最好命名为`xxx(你的gitub用户名).github.io`，（**后续生成的链接短，访问博客很方便**）选择`Public`，最后点击`Creat respository`

  ![222.png](https://imgbed.worhllo.us.kg/file/1731304995863_222.png)

  ![333.png](https://imgbed.worhllo.us.kg/file/1731304991297_333.png)

- 进入到刚创建好的仓库后，前往`setting -> Pages -> Branch`选择main分支，点击`Save`，等待一会儿，就会出现`https://{github用户名}.github.io` 的地址，该地址即为博客的访问地址。

  ![1213.png](https://imgbed.worhllo.us.kg/file/1731311033715_1213.png)

- 此时，原来的cmd命令窗口终于能关掉了，接着，在`public`文件夹（**跟之前不一样了，注意**）下进入cmd命令窗口，依次以下命令，操作无误后刷新新建仓库，就会发现文件都上传到github仓库上面了。至此，hugo博客的基本搭建已经结束。

  | `cmd命令` |
  | ------ |
  | `git init` |
  | `git add` . |
  | `git commit -m "first commit"` |
  | `git branch -M main` |
  | `git remote add origin {你的github仓库地址}` |
  | `git push -u origin main` |




### Github Action自动部署

> ​       Github Actions是Github上一个类似于持续集成的功能，它允许你在一些节点上（如提交代码，特定时间等）触发一些操作，用到博客上之后，每次只需要在cmd命令行中提交3行简单代码， 就能实现上文将`publish`上传至github的繁琐操作，实现自动部署。

- 在Github上面再次新建一个仓库，用于存放Hugo的主文件，名称任意设置，安全起见，建议将状态设置为`private`，接着点击`Creat respository`

- 前往`settings -> Developer Settings -> Personal access tokens`，创建一个`token(classic)`。

- token选择永不过期，并且勾选**repo**和**workflow**选项，最后点击`generate`，复制生成的token（**只会显示一次，注意保存**）

  ![202409181729591.png](https://imgbed.worhllo.us.kg/file/1731307583975_202409181729591.png)

- 为保证安全，可以将生成的token，保存的仓库的变量中，前往`Settings -> Secrets and variables -> Actions`中设置，任意命名，粘贴生成的token。

  ![202409181730141.png](https://imgbed.worhllo.us.kg/file/1731307761567_202409181730141.png)

- 回到hugo主文件`dev`，创建一个`.github/workflows/xxxx.yaml`文件，将下面的代码复制至`xxxx.yaml`文件中。**（若出现`必须键入文件名`的提示，方法如下）**

  ```
  解决方法
  1、首先创建一个123.github的文件
  
  2、在该文件所在目录上打开cmd命令窗口，输入rename 123.github .gitub
  
  3、点击回车即可完成修改
  
  ```
  
  ```
  name: deploy
  
  # 代码提交到main分支时触发github action
  on:
    push:
      branches:
        - main
  
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
          - name: Checkout
            uses: actions/checkout@v4
            with:
                fetch-depth: 0
  
          - name: Setup Hugo
            uses: peaceiris/actions-hugo@v3
            with:
                hugo-version: "latest"
                extended: true
  
          - name: Build Web
            run: hugo -D
  
        - name: Deploy Web
            uses: peaceiris/actions-gh-pages@v4
            with:
                PERSONAL_TOKEN: ${{ secrets.你的token变量名 }}
                EXTERNAL_REPOSITORY: 你的github名/你的仓库名
                PUBLISH_BRANCH: main
                PUBLISH_DIR: ./public
                commit_message: auto deploy
  
  ```
  
- 接着在hugo主文件`dev`中创建`.gitignore`文件，来避免提交不必要的文件（**不需要`hugo.exe，public，resources，.hugo_build.lock`**），文件内容如下

  ![888.png](https://imgbed.worhllo.us.kg/file/1731310348318_888.png)

- 在`dev`文件夹（**又不一样了，注意**）下进入cmd命令窗口，依次输入以下命令，操作无误后刷新，就会发现大部分文件都上传到github仓库上面了（**不必要的文件上一步已经排除掉了**）至此，hugo博客的自动部署也已经结束。

  | cmd命令 |
  | ------ |
  | `git init` |
  | `git add` . |
  | `git commit -m "first commit"` |
  | `git branch -M main` |
  | `git remote add origin {你的github仓库地址}` |
  | `git push -u origin main` |
  
  ![777.png](https://imgbed.worhllo.us.kg/file/1731308860942_777.png)


## 后续新文章写作与上传

- 后续撰写新文章的话，按`三步走`就能实现本地撰写和线上同步

  1.  在`dev`文件夹下进入cmd命令窗口,输入`hugo new content post/xxxx/index.md`（**xxx名字自定**)

  2. 在新创建的文件夹中会有`index.md`文件，在该文件中撰写文章

  3. 在`dev`文件夹下再次进入cmd命令窗口，依次输入以下命令即可

     | cmd命令                  |
     | ------------------------ |
     | `git add` .              |
     | `git commit -m "update"` |
     | `git push`               |

  4. 当然，为了更加方便快捷，你可以利用.bat批处理文件完成以上操作，具体教程如下
  {{< details title="分别创建两个.bat文件，代码分别如下" >}}
* 输入文章标题并创建文章
```
@echo off
echo 【创建文章】
set /p input= 请输入Slug: 

echo 正在切换到 D:\hugo\dev 目录...
cd /d D:\hugo\dev

echo 请按回车键继续...
pause

echo.
echo 执行 hugo new post/%input%/index.md
hugo new post/%input%/index.md
echo 完成！请按回车退出...
pause

```
* 上传至github实现同步
```
@echo off
echo 正在切换到 D:\hugo\dev 目录...
cd /d D:\hugo\dev

echo 请按回车键继续...
pause

echo.
echo 第一步：执行 git add .
git add .
echo 请按回车键继续...
pause

echo.
echo 第二步：执行 git commit -m "update"
git commit -m "update"
echo 请按回车键继续...
pause

echo.
echo 第三步：执行 git push
git push
echo 完成！请按回车退出...
pause

```
 {{< /details >}}

  
