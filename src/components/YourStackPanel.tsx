import type { Technology } from './type'

interface Props {
  selected: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStackPanel({ selected, onRemove, onRemoveAll }: Props) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">
        {selected.length} Technolog{selected.length === 1 ? 'y' : 'ies'} Selected
      </p>

      <div className="mt-4 flex flex-col gap-2">
        {selected.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-200 p-4 text-sm text-slate-400">
            Add technologies below to start building your stack.
          </p>
        )}

        {selected.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-2"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-lg" aria-hidden="true">
                {tech.icon}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">{tech.name}</p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(tech.id)}
              aria-label={`Remove ${tech.name} from stack`}
              className="shrink-0 text-slate-400 transition hover:text-slate-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {selected.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-50" 
        >
          Remove All
        </button>
      )}
    </aside>
  )
}
