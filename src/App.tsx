import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TechnologyCard from './components/TechnologyCard'
import YourStackPanel from './components/YourStackPanel'
import Footer from './components/Footer'
import type { Technology } from './components/type'

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Now a flat array of selected technologies — no per-category limit
  const [selected, setSelected] = useState<Technology[]>([])

  useEffect(() => {
    const controller = new AbortController()

    async function loadTechnologies() {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/data/technologies.json', { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data: Technology[] = await response.json()
        setTechnologies(data)

        // Default selections (optional) — now just items in the array
        const defaults = data.filter((t) => t.id === 'svelte' || t.id === 'redis')
        // setSelected(defaults)
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError((err as Error).message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadTechnologies()
    return () => controller.abort()
  }, [])

  const selectedList = useMemo(() => selected, [selected])

  // Toggle: add if not selected, remove if already selected — no per-category limit
  function toggleTechnology(tech: Technology) {
    setSelected((prev) => {
      const isCurrentlySelected = prev.some((t) => t.id === tech.id)
      if (isCurrentlySelected) {
        return prev.filter((t) => t.id !== tech.id)
      }
      return [...prev, tech]
    })
  }

  function removeById(id: string) {
    setSelected((prev) => prev.filter((t) => t.id !== id))
  }

  function removeAll() {
    setSelected([])
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <p className="text-slate-500">Loading technologies…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <p className="text-red-500">Failed to load technologies: {error}</p>
      </div>
    )
  }
  // function removeAll() {
  //   selectedList}({})
  // }
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore the <span className="text-brand-pink">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">Pick as many technologies as you like to build your ideal stack.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isSelected={selected.some((t) => t.id === tech.id)}
                onToggle={toggleTechnology}
              />
            ))}
          </div>

          <YourStackPanel selected={selectedList} onRemove={removeById} onRemoveAll={removeAll} />
        </div>
      </section>

      <Footer />
    </div>
  )
}