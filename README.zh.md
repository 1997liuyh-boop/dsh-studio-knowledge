# dsh-studio-knowledge

[English](README.md)

## 仓库信息

- 仓库名称：`dsh-studio-knowledge`
- 仓库描述：个人学习路线工作室，提供阶段主题、进度、笔记和本地知识图谱。
- 仓库地址：`https://github.com/1997liuyh-boop/dsh-studio-knowledge`

## 功能与特性

- 内置六阶段“我的学习计划”示例。
- 按阶段浏览主题、完成状态和笔记，并用图谱查看节点连接。
- 以 JSON 导入导出进度和笔记，不会偷偷导入路线定义。
- 在源码中添加具有唯一 ID、描述、资源链接和主题列表的路线。
- 进度按路线、阶段和节点保存，与其他工作室和项目隔离。

## 安装

请先安装控制组合包，再完整退出 Desktop，通过官方插件管理器安装本工作室精确 tag：

```powershell
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-library#v0.1.3"
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-knowledge#v0.2.3"
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop list
```

验证安装包包含 `main: lib/index.js`、`exports./client: lib/client.js`、`dsh.bundle.patch: ./cordis.patch.yml` 和已构建的 `static` 入口。重新启动 Desktop 后打开“知识学习工作室”。

## 要求与限制

源码构建需要 Node.js 22 和 npm。编辑 `studios/knowledge/src/roadmaps.ts` 中的路线后重新构建。进度和笔记保存在本地；清理 DSH 数据前请导出 JSON。外部链接和路线内容必须确认使用权限。

## 许可与来源

本项目使用 MIT 许可，许可只覆盖本项目和原创示例；外部路线内容仍遵循其原有权利。来源见 `UPSTREAM.json`。
