/** 用户路线文档；公开包只附带项目原创示例。 */
export interface Roadmap { id: string; title: string; description: string; source: string; sections: { title: string; topics: string[] }[] }
export const roadmaps: Roadmap[] = [{
  id: 'my-learning-plan', title: '我的学习计划（原创示例）', description: '从一个具体目标开始，记录练习过程与回顾结果。请在源码中配置自己的学习路线，再重新构建插件。', source: '',
  sections: [
    { title: '准备学习', topics: ['写下本次学习目标', '列出自己已有的知识', '选择一个可以完成的小练习'] },
    { title: '练习与回顾', topics: ['完成练习并记录问题', '用自己的话解释结果', '安排下一次复习'] },
  ],
}]
