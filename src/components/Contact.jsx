import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid'


gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const [sent, setSent] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
                y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
            })
            gsap.from(leftRef.current, {
                scrollTrigger: { trigger: leftRef.current, start: 'top 88%' },
                x: -40, opacity: 0, duration: 0.65, ease: 'power3.out',
            })
            gsap.from(rightRef.current, {
                scrollTrigger: { trigger: rightRef.current, start: 'top 88%' },
                x: 40, opacity: 0, duration: 0.65, delay: 0.1, ease: 'power3.out',
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const contacts = [
        {
            label: 'Email', value: 'cm.suico15@gmail.com',
            href: 'mailto:cm.suico15@gmail.com',
            icon: EnvelopeOpenIcon, bg: 'bg-[#f2f1f7]', color: 'text-[#6c63ff]',
        },
        {
            label: 'LinkedIn', value: 'linkedin.com/in/cielo-mae-suico-4829a6291/',
            href: 'https://www.linkedin.com/in/cielo-mae-suico-4829a6291/',
            icon: 'in', bg: 'bg-[#f2f1f7]', color: 'text-[#0c64c8]',
        },
        {
            label: 'GitHub', value: 'github.com/CSuico27',
            href: 'https://github.com/CSuico27',
            icon: '/github.png', bg: 'bg-[#f2f1f7]', color: 'text-[#6c63ff]',
        },
    ]

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const [sending, setSending] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const errs = {}
        if (!form.name) errs.name = true
        if (!form.email) errs.email = true
        if (!form.subject) errs.subject = true
        if (!form.message) errs.message = true
        if (Object.keys(errs).length) { setErrors(errs); return }

        setSending(true)
        try {
            await emailjs.send(
                'service_5x3rh0c',
                'template_3ek86fr',
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                '4plzjmF3pajFl2Fap'
            )
            setSent(true)
            toast.success('Message sent! I\'ll get back to you soon.')
            setForm({ name: '', email: '', subject: '', message: '' })
        } catch (err) {
            console.error('EmailJS error:', err)
            toast.error('Something went wrong. Please try again.')
        } finally {
            setSending(false)
        }
    }

    const inputClass = field =>
        `w-full border rounded-xl px-4 py-2.5 text-sm bg-gray-50 outline-none transition-colors focus:border-[#6c63ff] focus:bg-white ${errors[field] ? 'border-red-400' : 'border-gray-200'
        }`

    return (
        <section ref={sectionRef} className='w-full bg-[#f9f8fd] font-inter' id='contact'>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className='relative w-full overflow-hidden'>
                <svg
                    viewBox="0 0 900 220"
                    preserveAspectRatio="none"
                    className='absolute top-0 left-0 w-full h-full'
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="contact-bg-grad" x1="0%" y1="90%" x2="100%" y2="90%">
                            <stop offset="0%" stopColor="#d9d3f5" />
                            <stop offset="50%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#d9d3f5" />
                        </linearGradient>
                    </defs>
                    <path d="M0,0 L900,0 L900,160 Q450,240 0,160 Z" fill="url(#contact-bg-grad)" />
                </svg>

                {/* Heading content on top of the curve */}
                <div ref={headingRef} className='relative z-10 flex flex-col items-center text-center gap-3 pt-16 pb-24 px-6'>
                    <span className='inline-flex items-center gap-2 bg-[#eaf3de] text-[#3b6d11] text-xs font-semibold px-4 py-1.5 rounded-full'>
                        <span className='w-2 h-2 rounded-full bg-[#639922] animate-pulse inline-block' />
                        Available for commissions &amp; full-time work
                    </span>
                    <h2 className='text-4xl font-bold text-[#1e1e1e]'>
                        Let's work <span className='text-[#6c63ff]'>together</span>
                    </h2>
                    <p className='text-gray-500 text-sm max-w-md leading-relaxed'>
                        Have a project in mind or just want to say hi? Drop me a message and I'll get back to you soon.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-start p-10'>

                {/* Contact info card */}
                <div ref={leftRef} className='bg-white rounded-2xl border border-blue-100 shadow-sm p-6'>
                    <h3 className='text-base font-bold text-[#1e1e1e] mb-1'>Contact info</h3>
                    <p className='text-xs text-gray-400 mb-5'>Reach me directly on any of these</p>
                    <div className='flex flex-col divide-y divide-gray-50'>
                        {contacts.map(c => (
                            <div key={c.label} className='flex items-center gap-4 py-3.5 first:pt-0 last:pb-0'>
                                <div className={`w-10 h-10 rounded-md flex items-center justify-center text-lg font-bold shrink-0 ${c.bg} ${c.color}`}>
                                    {typeof c.icon === 'string' ? (
                                        c.icon.startsWith('/') ? (
                                            <img
                                                src={c.icon}
                                                alt={c.label}
                                                className='w-5 h-5 object-contain'
                                            />
                                        ) : (
                                            <span>{c.icon}</span>
                                        )
                                    ) : (
                                        <c.icon className='w-5 h-5' />
                                    )}
                                </div>
                                <div>
                                    <p className='text-[10px] font-semibold uppercase tracking-wider text-gray-400'>{c.label}</p>
                                    <a href={c.href} target='_blank' rel='noreferrer'
                                        className='text-sm font-medium text-[#6c63ff] hover:underline'>
                                        {c.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form card */}
                <div ref={rightRef} className='bg-white rounded-2xl border border-blue-100 shadow-sm p-6'>
                    <div className='flex flex-row items-center gap-3 mb-3'>
                        <div className='w-10 h-10 rounded-sm bg-[#f2f1f7] flex justify-center items-center'>
                            <PaperAirplaneIcon className='w-5 h-5 text-[#6c63ff] -rotate-45' />
                        </div>
                        <div>
                            <h3 className='text-base font-bold text-[#1e1e1e]'>Send a message</h3>
                            <p className='text-xs text-gray-400'>I typically reply within 24 hours</p>
                        </div>
                    </div>


                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <div>
                            <label className='text-xs font-semibold text-gray-500 mb-1.5 block'>Name</label>
                            <input name='name' value={form.name} onChange={handleChange}
                                placeholder='Your name' className={inputClass('name')} />
                        </div>
                        <div>
                            <label className='text-xs font-semibold text-gray-500 mb-1.5 block'>Email</label>
                            <input name='email' type='email' value={form.email} onChange={handleChange}
                                placeholder='your@email.com' className={inputClass('email')} />
                        </div>
                        <div>
                            <label className='text-xs font-semibold text-gray-500 mb-1.5 block'>Subject</label>
                            <input name='subject' value={form.subject} onChange={handleChange}
                                placeholder="What's this about?" className={inputClass('subject')} />
                        </div>
                        <div>
                            <label className='text-xs font-semibold text-gray-500 mb-1.5 block'>Message</label>
                            <textarea name='message' value={form.message} onChange={handleChange}
                                placeholder='Type your message here...'
                                rows={4} className={`${inputClass('message')} resize-none`} />
                        </div>
                        <button type='submit' disabled={sending}
                            className='mt-1 w-full py-3 bg-[#6c63ff] text-white text-sm font-semibold rounded-md hover:bg-[#5e56fa] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed'>
                            <span><PaperAirplaneIcon className='w-4 h-4 text-[#ffffff] -rotate-45' /></span>
                            {sending ? 'Sending...' : 'Send message'}

                        </button>
                    </form>
                </div>

            </div>
            <div className='text-center text-xs text-gray-500 py-6'>
                © 2026 Cielo Mae Suico. All rights reserved.
            </div>
        </section>
    )
}

export default Contact