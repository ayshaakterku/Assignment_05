import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
      <div>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
          Build Your Ideal
          <br />
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="rounded-full bg-brand-gradient px-7 py-3 text-sm font-semibold text-white shadow-md shadow-pink-200 transition hover:opacity-90"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end" aria-hidden="true">
        <img src={banner} alt="" />
      </div>
    </section>
  )
}