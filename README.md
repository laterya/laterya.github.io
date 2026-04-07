# Laterya Notes

一个部署到 GitHub Pages 的 Astro 个人博客，内容以 Markdown / MDX 为主，使用 GitHub Actions 自动构建发布。

## 本地开发

```sh
npm install
npm run dev
```

如果网络环境较慢，可以临时挂代理再安装依赖：

```sh
HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
ALL_PROXY=socks5://127.0.0.1:7897 \
npm install
```

## 常用命令

```sh
npm run dev
npm run build
npm run preview
npm run astro -- --help
```

## 内容结构

- `src/content/blog/`: 博客文章，支持 `.md` 和 `.mdx`
- `src/pages/`: 页面入口
- `src/components/`: 公共组件
- `src/layouts/`: 文章布局
- `.github/workflows/deploy.yml`: GitHub Pages 自动部署工作流

## 部署说明

这个项目默认配置成 GitHub 用户站点仓库：

- 仓库名：`laterya.github.io`
- 站点地址：`https://laterya.github.io`

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。
