export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Build. Preview. Ship.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A minimal hello world starter with a clean layout and tasteful motion.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white font-medium shadow hover:bg-gray-800 transition-colors">Explore Features</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 font-medium shadow ring-1 ring-gray-200 hover:ring-gray-300 transition-colors">Learn More</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-100 via-blue-100 to-sky-100 p-1">
            <div className="h-full w-full rounded-2xl bg-white/60 backdrop-blur-xl shadow-inner flex items-center justify-center text-gray-700 font-semibold">
              Hello World
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/60" />
    </section>
  )
}
