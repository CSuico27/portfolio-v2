import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BriefcaseIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Junior Developer',
    badge: 'Work',
    badgeStyle: 'bg-[#e8fdf4] text-[#0d9488] border border-[#0d9488]',
    company: 'Intercommerce Network Services, Inc. · Makati City, Philippines',
    companyColor: '#0d9488',
    period: 'Oct 2025 – Present',
    periodColor: '#6c63ff',
    duration: 'Current',
    dotColor: '#6c63ff',
    icon: BriefcaseIcon,
    description: 'Developed and supported internal web applications, including a Customer Service system and an Order Payment System, using Laravel with secure Google OAuth authentication and external API integrations. Contributed to system enhancements based on business requirements, maintained legacy applications, handled production support and debugging, and performed database management using MSSQL and MySQL while ensuring overall system stability and reliability.',
    tags: ['Laravel', 'PHP', 'Codeigniter', 'JavaScript', 'MySQL', 'MSSQL'],
  },
  {
    role: 'Commission Project',
    badge: 'Project',
    badgeStyle: 'bg-[#fce7f3] text-[#9d174d] border border-[#ec4899]',
    company: 'iLEND',
    companyColor: '#ec4899',
    period: 'Jun – Sep 2025',
    periodColor: '#ec4899',
    duration: '3 Months',
    dotColor: '#ec4899',
    icon: CodeBracketIcon,
    description: 'Developed commission-based web applications for loan application and management, featuring borrower monitoring, payment tracking, credit score evaluation, and automated dividend computation based on members’ share capital, average shares, and interest rates to support financial reporting and member benefits processing.',
    tags: ['Laravel', 'Livewire', 'FilamentPHP', 'Tailwind CSS'],
  },
  {
    role: 'Internship',
    badge: 'Web/Mobile App Dev',
    badgeStyle: 'bg-[#fce7f3] text-[#9d174d] border border-[#ec4899]',
    company: 'Mentorspire - Tayabas City, Philippines',
    companyColor: '#ec4899',
    period: 'Mar – Jun 2025',
    periodColor: '#ec4899',
    duration: '3 Months',
    dotColor: '#ec4899',
    icon: CodeBracketIcon,
    description: 'Interned as a Mobile/Web Developer at Mentorspire IT Services, working on the DOBLIFE MOBILE app built with React Native and Laravel API. Implemented stamina point logic for user registration and feature access, integrated APIs for data retrieval and updates, and managed version control through Git/Bitbucket with pull requests for code review.',
    tags: ['Laravel', 'React Native', 'Expo', 'Git'],
  },
  {
    role: 'Education',
    badge: 'BS Information Technology',
    badgeStyle: 'bg-[#fef9c3] text-[#92400e] border border-[#d97706]',
    company: 'CSTC - College of Sciences, Technology and Communication, Inc. - Sariaya, Quezon, Philippines',
    companyColor: '#0ea5e9',
    period: '2021 – 2025',
    periodColor: '#0ea5e9',
    duration: '4 Years',
    dotColor: '#0ea5e9',
    icon: AcademicCapIcon,
    description: 'Studied programming across C++, C#, Java, Python, and VB.NET alongside web development, database management, Android app development, and UI/UX design using Figma and Adobe XD.',
    tags: ['Programming', 'Web Development', 'Database Management', 'Android Development', 'UI/UX Design'],
  },
]

const About = () => {
  const sectionRef = useRef(null)
  const introRef = useRef(null)
  const tlHeadingRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(introRef.current, {
        scrollTrigger: { trigger: introRef.current, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from(tlHeadingRef.current, {
        scrollTrigger: { trigger: tlHeadingRef.current, start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out',
      })
      itemRefs.current.forEach((el, i) => {
        const isRight = i % 2 === 0
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%' },
          x: isRight ? 50 : -50,
          opacity: 0,
          duration: 0.65,
          delay: i * 0.08,
          ease: 'power3.out',
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='w-full bg-[#f9f8fd] font-inter' id='about'>

      {/* ── Intro ── */}
      <div ref={introRef} className='px-6 sm:px-16 py-20'>
  <div className='flex flex-col items-center text-center max-w-2xl mx-auto gap-5'>
    <span className='text-xs font-semibold tracking-widest text-[#749dbd] uppercase'>About me</span>
    <h1 className='text-4xl md:text-5xl font-bold text-[#1e1e1e] font-inter leading-tight'>
      Hi, I'm <span className='text-[#6c63ff]'>Cielo</span> —<br />Web Developer
    </h1>
    <p className='text-gray-500 text-base leading-relaxed'>
      A web developer based in the Philippines who loves turning ideas into clean,
      responsive, and user-friendly websites. Passionate about both frontend craft and backend logic.
    </p>
    <div className='flex flex-wrap gap-2 justify-center'>
      {['Frontend', 'Backend', 'UI/UX Design'].map(tag => (
        <span
          key={tag}
          className='px-4 py-2 rounded-full text-sm text-[#1e1e1e] border border-gray-200 bg-[#a8d2fa] hover:bg-[#75b9ec] duration-200 cursor-pointer'
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href='/CieloMaeSuico_Resume.pdf'
      download
      className='inline-flex items-center gap-2 px-6 py-3 bg-[#1e1e1e] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-200'
    >
      <svg xmlns='http://www.w3.org/2000/svg' className='size-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4' />
      </svg>
      Download CV
    </a>
  </div>
</div>

      {/* ── Divider ── */}
      <div className='px-6 sm:px-16'>
        <hr className='border-t border-gray-200' />
      </div>

      {/* ── Timeline ── */}
      <div className='px-6 sm:px-16 py-20'>

        {/* Heading */}
        <div ref={tlHeadingRef} className='flex flex-col items-center gap-2 text-center mb-16'>
          <span className='text-xs font-semibold tracking-widest text-[#6c63ff] uppercase'>Experiences</span>
          <h2 className='text-4xl font-bold text-[#1e1e1e]'>My Experience Journey</h2>
          <p className='text-gray-500 text-sm max-w-md'>
            A timeline of my professional growth and the experiences that shaped me.
          </p>
          <div className='w-10 h-[3px] rounded-full bg-[#6c63ff] mt-1' />
        </div>

        {/* Alternating Timeline */}
        <div className='relative max-w-5xl mx-auto'>

          {/* Vertical center line */}
          <div
            className='absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full'
            style={{
              background: 'linear-gradient(to bottom, #6c63ff, #ec4899, #0ea5e9, transparent)',
            }}
          />

          <div className='flex flex-col gap-12'>
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0 // even → card on left, dot center, period on right
              return (
                <div
                  key={i}
                  ref={el => itemRefs.current[i] = el}
                  className='relative grid grid-cols-[1fr_auto_1fr] items-center gap-0'
                >
                  {/* ── LEFT SLOT ── */}
                  {isLeft ? (
                    /* Card on the left */
                    <div className='pr-8 flex justify-end'>
                      <TimelineCard exp={exp} />
                    </div>
                  ) : (
                    /* Period/duration label on the left */
                    <div className='pr-8 flex justify-end'>
                      <PeriodLabel exp={exp} align='right' />
                    </div>
                  )}

                  {/* ── CENTER DOT ── */}
                  <div
                    className='w-11 h-11 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-[#f9f8fd]'
                    style={{ backgroundColor: exp.dotColor }}
                  >
                    <exp.icon className='w-4 h-4 text-white' />
                  </div>

                  {/* ── RIGHT SLOT ── */}
                  {isLeft ? (
                    /* Period/duration label on the right */
                    <div className='pl-8 flex justify-start'>
                      <PeriodLabel exp={exp} align='left' />
                    </div>
                  ) : (
                    /* Card on the right */
                    <div className='pl-8 flex justify-start'>
                      <TimelineCard exp={exp} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile fallback note — hidden on md+ */}
        <style>{`
          @media (max-width: 767px) {
            .timeline-alt-grid {
              display: flex !important;
              flex-direction: column;
              gap: 2rem;
              padding-left: 3.5rem;
              position: relative;
            }
          }
        `}</style>
      </div>

    </section>
  )
}

/* ── Sub-components ── */

const TimelineCard = ({ exp }) => (
  <div className='w-full max-w-sm bg-white rounded-2xl border border-blue-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-300'>
    <div className='flex flex-wrap items-start justify-between gap-2 mb-1'>
      <h3 className='text-base font-bold text-[#1e1e1e]'>{exp.role}</h3>
      <span className={`text-[11px] font-semibold rounded-full px-3 py-1 ${exp.badgeStyle}`}>
        {exp.badge}
      </span>
    </div>
    <p className='text-xs font-semibold mb-3' style={{ color: exp.companyColor }}>
      {exp.company}
    </p>
    <p className='text-xs text-gray-500 leading-relaxed mb-4'>{exp.description}</p>
    <div className='flex flex-wrap gap-2'>
      {exp.tags.map(tag => (
        <span
          key={tag}
          className='text-[11px] text-gray-500 border border-gray-200 rounded-full px-3 py-1 bg-gray-50'
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const PeriodLabel = ({ exp, align }) => (
  <div className={`flex flex-col gap-0.5 ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
    <p className='text-sm font-semibold leading-tight' style={{ color: exp.periodColor }}>
      {exp.period}
    </p>
    <p className='text-xs text-gray-400'>{exp.duration}</p>
  </div>
)

export default About