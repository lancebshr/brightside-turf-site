import { Search, HeartHandshake, Trophy } from 'lucide-react'

export function CoreValues() {
  const values = [
    {
      id: '01',
      title: "The Little Things Aren't Little to Us",
      description:
        'We care about the small details because we love what we do and want you to love it too.',
      icon: Search,
    },
    {
      id: '02',
      title: 'We Make It Personal',
      description:
        'Friendly techs, proactive updates, and quick follow-ups if anything feels off.',
      icon: HeartHandshake,
    },
    {
      id: '03',
      title: '"Good Enough" Isn\'t Good Enough',
      description:
        "We hold ourselves to a higher standard because that's what Omaha families deserve.",
      icon: Trophy,
    },
  ]

  return (
    <section className="w-full bg-transparent py-24 px-4 md:px-8">
      <div className="mx-auto mb-16 h-px w-full max-w-7xl bg-pine/30" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-black text-pine tracking-tight leading-[1.1] drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)] mb-8">
            Our values that guide <br />
            <span className="text-[#45D1B7]">every job</span> we do
          </h2>
          <div className="h-px w-32 bg-[#45D1B7]/60" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value) => (
            <div key={value.id} className="group flex flex-col items-start">
              {/* Icon & Number Row */}
              <div className="flex items-center justify-between w-full mb-8 pb-6 border-b border-gray-100 group-hover:border-[#45D1B7]/30 transition-colors duration-500">
                <div className="relative">
                  <value.icon className="w-10 h-10 text-pine stroke-[1.5] group-hover:text-[#45D1B7] transition-colors duration-300" />
                </div>
                <span className="text-base font-semibold text-[#45D1B7]">
                  {value.id}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pine leading-tight group-hover:text-ink transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
