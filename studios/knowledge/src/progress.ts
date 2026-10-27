export interface TopicProgress { status: 'learning' | 'done' | 'skipped'; notes: string }
export interface ProgressDocument { format: 'dsh-ai-roadmaps'; version: 1; topics: Record<string, TopicProgress> }
export const progressKey = 'dsh.studio-roadmaps.v1'

/** 导入和读取时校验学习节点，损坏的数据不会被空进度覆盖。 */
export function parseProgress(raw: string, ids: ReadonlySet<string>): ProgressDocument {
  const value: unknown = JSON.parse(raw)
  if (!value || typeof value !== 'object' || !('format' in value) || value.format !== 'dsh-ai-roadmaps' || !('version' in value) || value.version !== 1 || !('topics' in value) || !value.topics || typeof value.topics !== 'object' || Array.isArray(value.topics)) throw new Error('学习进度文件格式无效。')
  for (const [id, topic] of Object.entries(value.topics)) {
    if (!ids.has(id) || !topic || typeof topic !== 'object' || !['learning', 'done', 'skipped'].includes(topic.status) || typeof topic.notes !== 'string' || topic.notes.length > 100000) throw new Error('学习进度含未知节点或无效内容。')
  }
  return value as ProgressDocument
}
