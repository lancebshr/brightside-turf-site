import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GET_QUOTE_BUTTON_CLASSNAME, GET_QUOTE_BUTTON_STYLE, cn } from '@/lib/utils'

export function CoreValues() {
  const values = [
    {
      title: "The Little Things Aren't Little to Us",
      description:
        'We care about the small details because we love what we do and want you to love it too.',
    },
    {
      title: 'We Make It Personal',
      description:
        'Friendly techs, proactive updates, and quick follow-ups if anything feels off.',
    },
    {
      title: '"Good Enough" Isn\'t Good Enough',
      description:
        "We hold ourselves to a higher standard because that's what Omaha families deserve.",
    },
  ]

  return (
    <section className="w-full bg-transparent pt-10 pb-24 px-4 md:px-8">
      <div className="mx-auto mb-12 h-px w-full max-w-7xl bg-pine/30" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 max-w-full">
          <h2 className="text-5xl md:text-6xl font-black text-pine tracking-tight leading-[1.1] drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)] mb-8">
            Our values that guide <span className="text-[#45D1B7]">every job</span> we do
          </h2>
          <div className="h-px w-32 bg-[#45D1B7]/60" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value) => (
            <div key={value.title} className="group flex flex-col items-start">
              {/* Title Row */}
              <div className="w-full mb-6 pb-6 border-b border-gray-100 group-hover:border-[#45D1B7]/30 transition-colors duration-500">
                <h3 className="text-2xl font-bold text-pine leading-tight group-hover:text-ink transition-colors duration-300">
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            style={GET_QUOTE_BUTTON_STYLE}
            className={cn(GET_QUOTE_BUTTON_CLASSNAME, "px-12 py-7 text-xl")}
          >
            <Link href="/get-quote">GET YOUR QUOTE</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
