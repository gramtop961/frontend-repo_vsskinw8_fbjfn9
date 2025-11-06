import { Star, Sparkles, Settings } from 'lucide-react'

const features = [
  {
    icon: Star,
    title: 'Fast by default',
    description: 'Vite + React + Tailwind gives you a snappy developer experience.',
  },
  {
    icon: Sparkles,
    title: 'Clean UI',
    description: 'A modern, accessible layout with subtle gradients and spacing.',
  },
  {
    icon: Settings,
    title: 'Composable',
    description: 'Simple, focused components you can extend and reorganize.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Features</h2>
        <p className="mt-2 text-gray-600">A tiny but thoughtful hello world experience.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition-shadow">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
