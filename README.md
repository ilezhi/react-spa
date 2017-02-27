# L3

L3 with react, redux, react-router, webpack, es6, sass, css-module ...

## 环境准备

先安装依赖
进入与webpack.config.js同级目录

```bash
$ npm install
```

## 启动调试
// 纯前端环境

```bash
$ npm start
```

// 并入php目录后

```bash
$ webpack
```

## 构建代码
windows

```bash
SET NODE_ENV=production
webpack
```

mac、linux
```bash
$ export NODE_ENV=production
$ webpack
```

// 构建但不压缩

```bash
$ webpack
```

## 目录结构
```
·
|—— /bin/                         # 前端开发环境服务器启动入口
|—— /build/                       # webpack配置
| |—— /webpack/                   # 开发环境、生产环境配置
| |—— webpack-dev-server.js       # webpack-dev-server 配置
|—— /config/                      # 扩展webpack配置
|—— /dist/                        # 构建输出的文件会在这里
|—— /node_modules/                # 第三方类库和工具
|—— /src/                         # 应用源码
| |—— /actions/                   # action creator 信息
| |—— /common/                    # 通用接口
| |—— /components/                # React components
| |—— /constant/                  # 常量 action.type 信息
| |—— /containers/                # 容器 用于react与redux连接
| |—— /layout/                    # 布局信息
| |—— /middleware/                # 自定义redux中间件
| |—— /reducers/                  # reducers
| |—— /routes/                    # 路由信息
| |—— /store/                     # store 信息
| |—— /styles/                    # 样式文件
| |—— index.html                  # 入口页面
| |—— index.js                    # 入口文件
|—— package.json                  # 配置入口文件、依赖scripts
|—— webpack.config.js             # webpack入口文件
```

## 内置类库
- [react]()
- [redux]()
- [react-redux]()
- [react-router]()
- [react-router-redux]()
- [react-toolbox]()
- [material-ui]()
- [normalizr]()
- [echarts]()
- [immutable]()
- [isomorphic-fetch]()
- [classnames]()


### 工具特性

热替换

> 基于[webpack-dev-server]()  支持 `components`, `reducers`, `routers`, `layouts` 目录的热替换，其余目录修改后会自动涮新

css-module
>  所有sass文件会解析为css-module

## license

MIT
