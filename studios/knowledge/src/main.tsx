import { createRoot } from 'react-dom/client'
import { useEffect, useRef, useState } from 'react'
import { roadmaps } from './roadmaps'
import { parseProgress, progressKey, type ProgressDocument, type TopicProgress } from './progress'

const topicId = (roadmap: string, section: number, title: string) => `${roadmap}/${section}/${title}`
const ids = new Set(roadmaps.flatMap(roadmap => roadmap.sections.flatMap((section, index) => section.topics.map(title => topicId(roadmap.id, index, title)))))
const empty: ProgressDocument = { format: 'dsh-ai-roadmaps', version: 1, topics: {} }
const button = 'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800'

function initial() {
  try {
    const raw = localStorage.getItem(progressKey)
    return { data: raw ? parseProgress(raw, ids) : empty, error: '' }
  } catch (error) { return { data: empty, error: '本地学习进度读取失败，请先导出原始数据排查，当前不会覆盖保存。' } }
}

function download(text: string, name: string) {
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }))
  const link = document.createElement('a'); link.href = url; link.download = name; link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

/** 按参考站点真实阶段和节点组织学习，进度与笔记独立保存在本机。 */
function LearningApp() {
  const [stored, setStored] = useState(initial)
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState(roadmaps[0].id)
  const [selected, setSelected] = useState('')
  const [notice, setNotice] = useState('')
  const importFile = useRef<HTMLInputElement>(null)
  const active = roadmaps.find(item => item.id === activeId) ?? roadmaps[0]
  const activeTopics = active.sections.flatMap((section, index) => section.topics.map(title => ({ id: topicId(active.id, index, title), title })))
  const current = activeTopics.find(topic => topic.id === selected) ?? activeTopics[0]
  const currentProgress = stored.data.topics[current.id]
  const completed = activeTopics.filter(topic => stored.data.topics[topic.id]?.status === 'done').length
  const visible = roadmaps.filter(item => [item.title, ...item.sections.flatMap(section => section.topics)].join(' ').toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  useEffect(() => {
    const refresh = (event: StorageEvent) => { if (event.key === progressKey || event.key === null) setStored(initial()) }
    window.addEventListener('storage', refresh)
    return () => window.removeEventListener('storage', refresh)
  }, [])
  function persist(data: ProgressDocument) {
    try { localStorage.setItem(progressKey, JSON.stringify(data)); setStored({ data, error: '' }); setNotice('已保存到本机') }
    catch (error) { setNotice('保存失败，请导出进度备份后检查浏览器存储空间。') }
  }
  function update(id: string, status: TopicProgress['status'] | '', notes: string) {
    if (stored.error) return
    const topics = { ...stored.data.topics }
    if (status) topics[id] = { status, notes }
    else if (notes) topics[id] = { status: 'learning', notes }
    else delete topics[id]
    persist({ ...stored.data, topics })
  }
  async function importProgress(file?: File) {
    if (!file) return
    try {
      const data = parseProgress(await file.text(), ids)
      if (window.confirm('导入将替换当前学习进度。是否先确认已导出备份，并继续导入？')) persist(data)
    } catch (error) { setNotice(error instanceof Error ? error.message : '导入失败') }
    if (importFile.current) importFile.current.value = ''
  }
  return <div className="min-h-screen">
    <header className="border-b border-slate-200 bg-white px-5 py-5 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4"><div><p className="text-xs font-semibold tracking-widest text-indigo-500">AI ROADMAPS</p><h1 className="mt-1 text-2xl font-semibold">AI学习路线</h1><p className="mt-1 text-sm text-slate-500">8 个学习方向 · {ids.size} 个知识节点 · 按阶段记录学习进度</p></div>
        <div className="flex flex-wrap gap-2"><button className={button} onClick={() => download(JSON.stringify(stored.data, null, 2), 'AI学习进度.json')}>导出进度</button><button className={button} onClick={() => importFile.current?.click()}>导入进度</button><a className={button} href="/studio-projects/knowledge?legacy=1">旧知识笔记</a></div>
      </div><input ref={importFile} type="file" accept="application/json,.json" hidden onChange={event => { void importProgress(event.target.files?.[0]) }} />
    </header>
    {(stored.error || notice) && <div className="mx-auto max-w-7xl px-5 pt-3 text-sm" role={stored.error ? 'alert' : 'status'}>{stored.error || notice}{stored.error && <button className={button + ' ml-3'} onClick={() => { try { download(localStorage.getItem(progressKey) ?? '', 'AI学习进度-原始数据.json') } catch (error) { setNotice('存储暂时不可读取。') } }}>导出原始数据</button>}</div>}
    <div className="mx-auto grid max-w-7xl gap-5 p-5 lg:grid-cols-[15rem_minmax(0,1fr)]">
      <aside><label className="mb-2 block text-sm font-medium" htmlFor="roadmap-search">查找学习方向</label><input id="roadmap-search" placeholder="搜索路线或知识点" value={query} onChange={event => setQuery(event.target.value)} /><nav className="mt-4 grid gap-2" aria-label="学习路线">
        {visible.map(roadmap => { const topics = roadmap.sections.flatMap((section, index) => section.topics.map(title => topicId(roadmap.id, index, title))); const done = topics.filter(id => stored.data.topics[id]?.status === 'done').length; return <button key={roadmap.id} className={'rounded-xl border p-3 text-left transition ' + (roadmap.id === active.id ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-700 dark:bg-indigo-950' : 'border-slate-200 bg-white hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900')} aria-current={roadmap.id === active.id ? 'page' : undefined} onClick={() => { setActiveId(roadmap.id); setSelected('') }}><span className="block text-sm font-semibold">{roadmap.title}</span><span className="mt-2 block text-xs text-slate-500">{done} / {topics.length} 已完成 · {roadmap.sections.length} 个阶段</span><progress className="mt-2 h-1 w-full accent-indigo-500" value={done} max={topics.length} aria-label={roadmap.title + '进度'} /></button> })}
        {!visible.length && <p className="text-sm text-slate-500">没有匹配的路线或知识点。</p>}</nav><p className="mt-5 text-xs leading-6 text-slate-500">路线目录与节点参考 <a className="underline" href="https://www.airoadmaps.org/roadmaps" target="_blank" rel="noreferrer">AI Roadmap</a>。原站提供详细课程与资源；本页保存个人学习状态和笔记。</p>
      </aside>
      <main className="min-w-0"><section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><div className="flex flex-wrap justify-between gap-3"><h2 className="text-xl font-semibold">{active.title}</h2><a href={active.source} target="_blank" rel="noreferrer" className="text-sm text-indigo-500 underline">查看原站路线与资源 ↗</a></div><p className="mt-3 text-sm leading-7 text-slate-500">{active.description}</p><div className="mt-4 flex items-center gap-3"><progress className="h-2 min-w-0 flex-1 accent-indigo-500" value={completed} max={activeTopics.length} aria-label="当前路线完成进度" /><span className="shrink-0 text-sm">{completed} / {activeTopics.length}</span></div></section>
        <div className="mt-5 grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_18rem]"><div className="min-w-0 space-y-5">{active.sections.map((section, index) => <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><h3 className="flex items-center gap-3 font-semibold"><span className="flex size-7 items-center justify-center rounded-full bg-indigo-100 text-xs text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">{index + 1}</span>{section.title}</h3><div className="ml-3 mt-4 grid gap-2 border-l border-dashed border-slate-300 pl-4 dark:border-slate-700">{section.topics.map(title => { const id = topicId(active.id, index, title); const status = stored.data.topics[id]?.status; return <button key={id} className={'flex items-center justify-between gap-3 rounded-lg border px-3 py-3 text-left text-sm ' + (id === current.id ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-950' : 'border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800')} onClick={() => setSelected(id)}><span>{title}</span><span className={'shrink-0 text-xs ' + (status === 'done' ? 'text-emerald-600' : 'text-slate-500')}>{status === 'done' ? '已完成 ✓' : status === 'learning' ? '学习中' : status === 'skipped' ? '已跳过' : '待学习'}</span></button> })}</div></section>)}</div>
          <section className="rounded-2xl border border-slate-200 bg-white p-4 xl:sticky xl:top-5 dark:border-slate-800 dark:bg-slate-900"><h3 className="font-semibold">{current.title}</h3><label className="mb-2 mt-5 block text-sm" htmlFor="topic-status">学习状态</label><select id="topic-status" value={currentProgress?.status ?? ''} disabled={Boolean(stored.error)} onChange={event => update(current.id, event.target.value as TopicProgress['status'] | '', currentProgress?.notes ?? '')}><option value="">待学习</option><option value="learning">学习中</option><option value="done">已完成</option><option value="skipped">已跳过</option></select><label className="mb-2 mt-5 block text-sm" htmlFor="topic-notes">学习笔记</label><textarea id="topic-notes" className="min-h-48 resize-y" placeholder="记录理解、问题和练习心得" value={currentProgress?.notes ?? ''} disabled={Boolean(stored.error)} maxLength={100000} onChange={event => update(current.id, currentProgress?.status ?? 'learning', event.target.value)} /><a href={active.source} className="mt-4 block text-sm text-indigo-500 underline" target="_blank" rel="noreferrer">打开对应路线的学习资源 ↗</a><p className="mt-3 text-xs leading-6 text-slate-500">保存成功后可刷新恢复。进度保存在当前设备，建议定期导出备份。</p></section>
        </div>
      </main>
    </div>
  </div>
}
createRoot(document.getElementById('root')!).render(<LearningApp />)
