# 自定义学习路线工作室

公开包提供一条项目原创的“我的学习计划”示例、6 个节点，以及保存在本机的学习状态和笔记。页面支持学习进度的 JSON 导入与导出。

本仓库根目录可通过 Git URL 安装。先启用 [工作室容器与共享运行时](https://github.com/1997liuyh-boop/dsh-studio-library)，再启用本插件。Git 安装使用已经提交的 lib/ 与 static/。

## 配置自己的路线

公开包不附带外站路线内容。“导入进度”仅导入状态和笔记，不会导入路线。用户需自行提供有权使用的路线内容，编辑 `studios/knowledge/src/roadmaps.ts` 的 `roadmaps` 数组，再执行 `npm install --include=dev --legacy-peer-deps`、`npm run build`、`npm run check`。构建不依赖相邻工作库。

每条路线需要唯一 id、标题、描述、资源链接（无链接时设为空字符串）和 sections；每个阶段需要标题与 topics 字符串列表。请使用不同的路线 id，避免与已有进度混淆。进度按路线 id、阶段序号与节点标题关联；改动前先在页面导出进度备份，原始数据不会因配置变化而自动删除。

## 来源与许可

AI Roadmap 仅作历史来源参考；其路线内容许可未核实，因此已从公开源码及构建资源排除。MIT 覆盖本项目原创代码和原创示例，不替外站内容授予许可。详情见 UPSTREAM.json。
