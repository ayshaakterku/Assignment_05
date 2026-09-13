import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import YourStackPanel from './components/YourStackPanel';
import Footer from './components/Footer';
import type { Technology } from './components/type';
import { toast, Bounce } from 'react-toastify';

const toastOptions = {
  position: 'top-center' as const,
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light' as const,
  transition: Bounce,
}



function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Now a flat array of selected technologies — no per-category limit
  const [selected, setSelected] = useState<Technology[]>([])

// Now a flat array of selected technologies — no per-category
  useEffect(() => {
  fetch('/data/technologies.json')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to load data')
      return res.json()
    })
    .then((data: Technology[]) => setTechnologies(data))
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(false))
}, []);

  const selectedList = useMemo(() => selected, [selected]);

  function toggleTechnology(tech: Technology) {
    const isCurrentlySelected = selected.some((t) => t.id === tech.id)

    if (isCurrentlySelected) {
      toast.success(`${tech.name} removed from your stack`, toastOptions)
      setSelected((prev) => prev.filter((t) => t.id !== tech.id))
    } else {
      toast.success(`${tech.name} added to your stack`, toastOptions)
      setSelected((prev) => [...prev, tech])
    }
  }

// Individual Id removed from stack list
  function removeById(id: string) {
    const tech = selected.find((t) => t.id === id)
    if (tech) {
      toast.success(`${tech.name} removed from your stack`, toastOptions)
    }
    setSelected((prev) => prev.filter((t) => t.id !== id))
  }

// All Id removed from stack list
  function removeAll() {
    toast.success('All technologies removed from your stack', toastOptions)
    setSelected([])
  }


  // Loading  message show when page will be loaded
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <p className="text-slate-500">Loading Technologies…</p>
      </div>
    )
  }


  // Failed message show when data will be not loaded
  if (error) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <p className="text-red-500">Failed to load technologies: {error}</p>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore the <span className="bg-pink-violet-gradient ">Technologies</span>
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


export default App