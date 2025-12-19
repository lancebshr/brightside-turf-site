import { Search, HeartHandshake, Trophy, ArrowRight } from 'lucide-react'

type CoreValuesProps = {
  heading?: string;
};

export function CoreValues({ heading }: CoreValuesProps) {
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
    <section className="relative z-0 w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-emerald-500 border-4 border-black px-4 py-2 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <span className="text-xl font-black text-white uppercase tracking-tight">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-black drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)] leading-none mb-8">
            Our values that guide{' '}
            <span className="text-emerald-500 underline decoration-4 underline-offset-8 decoration-black">
              every job
            </span>{' '}
            we do
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value) => (
            <div
              key={value.id}
              className="group relative bg-white border-4 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform duration-300 flex flex-col items-start"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-black text-white border-4 border-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] z-20">
                <span className="font-black text-xl">{value.id}</span>
              </div>

              {/* Icon Container */}
              <div className="mb-8 relative">
                <div className="w-24 h-24 bg-emerald-500 rounded-full border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white stroke-[2.5]" />
                </div>
                {/* Decorative line connecting icon to text */}
                <div className="absolute left-1/2 bottom-0 w-1 h-8 bg-black transform -translate-x-1/2 translate-y-full" />
              </div>

              {/* Content */}
              <div className="mt-8 pt-4 border-t-4 border-black w-full">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-4 leading-tight">
                  {value.title}
                </h3>
                <p className="text-lg font-bold text-black leading-relaxed">
                  {value.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA or Closing Graphic */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-black text-white border-4 border-black px-8 py-4 shadow-[4px_4px_0px_0px_rgba(74,222,128,1)] hover:bg-emerald-500 hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <span className="text-xl font-black uppercase tracking-wide">
              Experience the difference
            </span>
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </div>
        </div>
      </div>
    </section>
  )
}
