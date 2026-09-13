import type { Technology } from "./type"


interface Props {
  tech: Technology
  isSelected: boolean
  onToggle: (tech: Technology) => void
}

export default function TechnologyCard({ tech, isSelected, onToggle }: Props) {
  return (
    <article
      className={`flex flex-col rounded-2xl border bg-white p-6 transition ${
        isSelected ? 'border-brand-pink shadow-md shadow-pink-100' : 'border-slate-200'
      }`}
    >
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt="" className="text-3xl h-[40px] w-[40px]" aria-hidden="true"/>


        <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: `color-mix(in srgb, ${tech.badgeColor} 50%, transparent)`,}}>
          {tech.badge}
        </span>

      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
          <span className="text-amber-400">★</span>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        onClick={() => onToggle(tech)}
        aria-pressed={isSelected}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
          isSelected
            ? 'border  border-rose-200 bg-white text-rose-500 hover:bg-rose-50'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {isSelected ? 'Remove from Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
