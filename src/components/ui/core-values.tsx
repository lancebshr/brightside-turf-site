import Image from 'next/image'
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
    <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-pine tracking-tight leading-[1.1] drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
            Our values that guide <span className="text-[#45D1B7]">every job</span> we do
          </h2>
        </div>

        {/* Large Image */}
        <div className="relative mb-12 h-[240px] w-full overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:h-[300px]">
          <Image
            src="/team-truck.jpg"
            alt="Brightside team"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Values Row */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={cn(
                "py-6 md:py-0 md:px-8",
                index < values.length - 1 && "border-b md:border-b-0 md:border-r border-slate-200",
                index === 0 && "md:pl-0",
                index === values.length - 1 && "md:pr-0"
              )}
            >
              <h3 className="mb-4 text-2xl font-extrabold text-pine leading-tight">
                {value.title}
              </h3>
              <p className="text-base font-medium leading-relaxed text-slate-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
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
