import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'LawScheduler',
    category: 'Legal Appointment Scheduler',
    description: 'Smart scheduling solution for legal professionals and clients. Manage appointments, reminders and case meetings in one powerful platform.',
    tags: ['Laravel', 'FilamentPHP', 'Tailwind CSS'],
    image: '/lawsched.png',
    href: 'https://github.com/CSuico27/LawScheduler',
  },
  {
    title: 'iLend',
    category: 'Loan & Application Management System',
    description: 'Streamlined loan processing and member management system for cooperative organizations.',
    image: '/ilend.png',
    href: 'https://github.com/CSuico27/iLend',
  },
  {
    title: 'Carsell',
    category: 'Car Rental System',
    description: 'Modern car rental platform with advanced booking, vehicle management and customer experience.',
    image: '/carsell.png',
    href: 'https://github.com/CSuico27/Carsell',
  },
]

const techStack = [
  { name: 'HTML5', icon: '/html.png' },
  { name: 'Tailwind CSS', icon: '/tailwind.png' },
  { name: 'JavaScript', icon: '/javascript.png' },
  { name: 'Git', icon: '/git.png' },
  { name: 'Laravel', icon: '/laravel.png' },
  { name: 'React', icon: '/reactjs.png' },
]

const TabletImage = ({ image, alt }) => (
  <div className='flex-1 relative min-h-[180px] overflow-hidden flex items-center justify-center'>
    <div className='relative w-[85%] rotate-[2deg] skew-x-[-6deg]'>
      <div
        className='relative rounded-2xl overflow-hidden transition-all duration-500'
        style={{
          boxShadow: `
            6px 6px 0px 0px rgba(0,0,0,0.5),
            10px 10px 0px 0px rgba(0,0,0,0.25),
            14px 14px 0px 0px rgba(0,0,0,0.1),
            18px 18px 32px 0px rgba(0,0,0,0.3),
            -2px -2px 12px 0px rgba(255,255,255,0.6)
          `
        }}
      >
        <img src={image} alt={alt} className='w-full h-full object-cover' />
        <div className='absolute top-0 right-0 w-[6px] h-full bg-gradient-to-l from-[#5a8ab0]/60 to-transparent pointer-events-none' />
        <div className='absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-t from-[#5a8ab0]/60 to-transparent pointer-events-none' />
        <div className='absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-violet-400/10 pointer-events-none' />
        <div className='absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-white/20 to-transparent pointer-events-none rounded-tl-2xl' />
      </div>
      <div
        className='absolute -bottom-4 left-[8%] right-[4%] h-6 rounded-full blur-md'
        style={{ background: 'rgba(80,120,160,0.25)' }}
      />
    </div>
  </div>
)

const Project = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const featuredRef = useRef(null)
  const smallCardsRef = useRef([])
  const skillsHeadingRef = useRef(null)
  const techCardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        x: -40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from(featuredRef.current, {
        scrollTrigger: { trigger: featuredRef.current, start: 'top 85%' },
        y: 50, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from(smallCardsRef.current, {
        scrollTrigger: { trigger: smallCardsRef.current[0], start: 'top 88%' },
        y: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
      })
      gsap.from(skillsHeadingRef.current, {
        scrollTrigger: { trigger: skillsHeadingRef.current, start: 'top 85%' },
        x: -40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from(techCardsRef.current, {
        scrollTrigger: { trigger: techCardsRef.current[0], start: 'top 90%' },
        scale: 0.85, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const [featured, ...rest] = projects

  return (
    <section ref={sectionRef} id='project' className='w-full bg-[#f9f6fd] px-6 sm:px-16 py-20 flex flex-col gap-16'>

      {/* Featured Projects */}
      <div className='flex flex-col gap-8'>
        <div ref={headingRef} className='flex flex-col gap-1'>
          <p className='text-xs font-semibold tracking-widest text-[#6c63ff] uppercase'>Featured Projects</p>
          <h2 className='text-4xl font-bold text-[#1e1e1e] font-inter'>Selected works.</h2>
        </div>

        {/* Featured large card */}
        <div
          ref={featuredRef}
          className='flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300'
        >
          {/* Left: info */}
          <div className='flex flex-col justify-between gap-5 p-8 md:w-[42%] shrink-0'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <div className='w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0'>
                  <img
                    src='/lawSched-logo.png'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <p className='text-xl font-bold text-[#1e1e1e] font-inter leading-tight'>{featured.title}</p>
                  <p className='text-sm font-semibold text-[#749dbd]'>{featured.category}</p>
                </div>
              </div>

              <p className='text-sm text-gray-500 leading-relaxed'>{featured.description}</p>

              <div className='flex flex-wrap gap-2'>
                {featured.tags.map(tag => (
                  <span key={tag} className='flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-3 py-1'>
                    <span className='w-1.5 h-1.5 rounded-full inline-block' />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={featured.href}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 text-sm font-semibold text-[#1e1e1e] bg-[#f0f7ff] border border-blue-200 rounded-xl px-4 py-2.5 w-fit hover:bg-[#dbeafe] transition-colors duration-200'
            >
              View Project
              <span className='w-5 h-5 rounded-full bg-[#749dbd] text-white flex items-center justify-center text-xs'>↗</span>
            </a>
          </div>

          {/* Right: featured tablet image */}
          <div className='flex-1 relative min-h-[260px] overflow-hidden rounded-3xl flex items-center justify-center'>
            <div className='relative w-[75%] rotate-[2deg] skew-x-[-6deg]'>
              <div
                className='relative rounded-2xl overflow-hidden transition-all duration-500'
                style={{
                  boxShadow: `
                    6px 6px 0px 0px rgba(0, 0, 0, 0.5),
                    10px 10px 0px 0px rgba(0, 0, 0, 0.25),
                    14px 14px 0px 0px rgba(0, 0, 0, 0.1),
                    18px 18px 32px 0px rgba(0,0,0,0.3),
                    -2px -2px 12px 0px rgba(255,255,255,0.6)
                  `
                }}
              >
                <img src={featured.image} alt={featured.title} className='w-full h-full object-cover' />
                <div className='absolute top-0 right-0 w-[6px] h-full bg-gradient-to-l from-[#5a8ab0]/60 to-transparent pointer-events-none' />
                <div className='absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-t from-[#5a8ab0]/60 to-transparent pointer-events-none' />
                <div className='absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-violet-400/10 pointer-events-none' />
                <div className='absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-white/20 to-transparent pointer-events-none rounded-tl-2xl' />
              </div>
              <div
                className='absolute -bottom-4 left-[8%] right-[4%] h-6 rounded-full blur-md'
                style={{ background: 'rgba(80,120,160,0.25)' }}
              />
            </div>
          </div>
        </div>

        {/* Two smaller cards — info left, image right */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {rest.map((project, i) => (
            <div
              key={project.title}
              ref={el => smallCardsRef.current[i] = el}
              className='flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 min-h-[200px]'
            >
              {/* Left: info */}
              <div className='flex flex-col justify-between gap-4 p-6 w-full md:w-[38%] shrink-0'>
                <div className='flex flex-col gap-3'>
                  <div className='flex items-center gap-2'>
                    <div className='w-9 h-9 rounded-xl flex items-center justify-center text-sm shrink-0'>
                      <img
                        src={i === 0 ? '/ilend-logo.png' : '/logo.svg'}
                        alt={project.title}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div>
                      <p className='text-base font-bold text-[#1e1e1e] font-inter leading-tight'>{project.title}</p>
                      <p className='text-[11px] font-semibold text-[#749dbd] leading-tight'>{project.category}</p>
                    </div>
                  </div>

                  <p className='text-xs text-gray-500 leading-relaxed'>{project.description}</p>
                </div>

                <a
                  href={project.href}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e1e1e] bg-[#f0f7ff] border border-blue-200 rounded-xl px-3 py-2 w-fit hover:bg-[#dbeafe] transition-colors duration-200'
                >
                  View Project
                  <span className='w-4 h-4 rounded-full bg-[#749dbd] text-white flex items-center justify-center text-[10px]'>↗</span>
                </a>
              </div>

              {/* Right: tablet image */}
              <TabletImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Technologies */}
      <div className='flex flex-col gap-8'>
        <div ref={skillsHeadingRef} className='flex flex-col gap-1'>
          <p className='text-xs font-semibold tracking-widest text-[#6c63ff] uppercase'>Technologies most used</p>
          <h2 className='text-4xl font-bold text-[#1e1e1e] font-inter'>Technologies.</h2>
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4'>
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              ref={el => techCardsRef.current[i] = el}
              className='flex flex-col items-center justify-center gap-3 bg-white rounded-2xl py-6 px-4 hover:shadow-md transition-shadow duration-200'
            >
              <img src={tech.icon} alt={tech.name} className='w-10 h-10 object-contain' />
              <p className='text-xs text-gray-500 font-inter text-center'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project