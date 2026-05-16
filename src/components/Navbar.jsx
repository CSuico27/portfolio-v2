import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const navLinks = [
    { label: 'home', href: '#' },
    { label: 'about', href: '#about' },
    { label: 'project', href: '#project' },
    { label: 'contact', href: '#contact' },
]

const NavItem = ({ label, href, isActive }) => {
    const itemRef = useRef(null)
    const activeItemRef = useRef(null)

    useEffect(() => {
        if (!itemRef.current || !activeItemRef.current) return

        gsap.set(itemRef.current, { yPercent: 0 })
        gsap.set(activeItemRef.current, { yPercent: 100 })

        const handleMouseEnter = () => {
            gsap.to(itemRef.current, { yPercent: -100, duration: 0.3, ease: 'sine.inOut' })
            gsap.to(activeItemRef.current, { yPercent: -100, duration: 0.3, ease: 'sine.inOut' })
        }

        const handleMouseLeave = () => {
            gsap.to(itemRef.current, { yPercent: 0, duration: 0.3, ease: 'sine.inOut' })
            gsap.to(activeItemRef.current, { yPercent: 100, duration: 0.3, ease: 'sine.inOut' })
        }

        const logoArea = itemRef.current.parentElement
        if (logoArea) {
            logoArea.addEventListener('mouseenter', handleMouseEnter)
            logoArea.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (logoArea) {
                logoArea.removeEventListener('mouseenter', handleMouseEnter)
                logoArea.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if (href === '#') {
            gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power3.inOut' })
            return
        }
        const target = document.querySelector(href)
        if (!target) return
        gsap.to(window, { duration: 1, scrollTo: target, ease: 'power3.inOut' })
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className="flex flex-col items-center justify-center h-[1.5rem] overflow-hidden cursor-pointer"
        >
            <span
                ref={itemRef}
                className={`menu-item mt-5 transition-colors duration-300 ${isActive ? 'text-[#e94f37]' : 'text-[#1e1e1e]'}`}
            >
                {label}
            </span>
            <span ref={activeItemRef} aria-hidden="true" className='text-[#e94f37]'>{label}</span>
        </a>
    )
}

const MobileNavItem = ({ label, href, isActive, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault()
        onClick() 
        if (href === '#') {
            gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power3.inOut' })
            return
        }
        const target = document.querySelector(href)
        if (!target) return
        gsap.to(window, { duration: 1, scrollTo: target, ease: 'power3.inOut' })
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`text-2xl font-bold tracking-tight transition-colors duration-200 ${isActive ? 'text-[#e94f37]' : 'text-[#1e1e1e]'}`}
        >
            {label}
        </a>
    )
}

const Navbar = () => {
    const starRef = useRef(null)
    const mobileMenuRef = useRef(null)
    const menuItemsRef = useRef([])
    const [activeHref, setActiveHref] = useState('#')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const sections = [
            { id: 'contact', href: '#contact' },
            { id: 'project', href: '#project' },
            { id: 'about', href: '#about' },
        ]

        const triggers = sections.map(({ id, href }) => {
            const el = document.getElementById(id)
            if (!el) return null
            return ScrollTrigger.create({
                trigger: el,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => setActiveHref(href),
                onEnterBack: () => setActiveHref(href),
                onLeaveBack: () => {
                    if (id === 'about') setActiveHref('#')
                },
            })
        })

        return () => triggers.forEach(t => t?.kill())
    }, [])

    useEffect(() => {
        if (!mobileMenuRef.current) return

        if (menuOpen) {
            gsap.to(mobileMenuRef.current, {
                x: 0,
                duration: 0.4,
                ease: 'power3.out',
            })
            gsap.fromTo(
                menuItemsRef.current,
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.35, stagger: 0.07, ease: 'power3.out', delay: 0.15 }
            )
        } else {
            gsap.to(mobileMenuRef.current, {
                x: '100%',
                duration: 0.35,
                ease: 'power3.in',
            })
        }
    }, [menuOpen])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleHover = () => {
        gsap.fromTo(starRef.current, { rotate: 0 }, { rotation: 360, duration: 0.6, ease: 'power2.out' })
    }

    const handleMouseLeave = () => {
        gsap.to(starRef.current, { rotate: 0, duration: 0.6, ease: 'power2.out' })
    }

    const toggleMenu = () => setMenuOpen(prev => !prev)

    return (
        <>  
            {/* Logo — fixed independently */}
            <a
                href='#'
                className={`fixed top-3 left-10 z-10 flex flex-row justify-center items-center cursor-pointer transition-all duration-300`}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                <h1 className='text-2xl font-bold text-[#1e1e1e]'>ciel</h1>
                <div className="relative h-4 w-4 flex justify-center items-center ml-0.5">
                    <div className="absolute inset-0 bg-black rounded-lg rounded-tl-none rounded-br-none rotate-90 origin-center" />
                    <span ref={starRef} className="relative inline-block text-white h-[12px] w-[12px]">
                        <img src="/flower.png" alt="Star" />
                    </span>
                </div>
            </a>
            <section className='fixed top-0 left-0 right-0 z-20 p-2 font-poppins'>
                <div className='container mx-auto h-full flex items-center justify-end px-8'>
                    {/* Logo */}
                    {/* <a href='#' className='flex flex-row justify-center items-center cursor-pointer'
                        onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                        <h1 className='text-2xl font-bold text-[#1e1e1e]'>ciel</h1>
                        <div className="relative h-4 w-4 flex justify-center items-center ml-0.5">
                            <div className="absolute inset-0 bg-black rounded-lg rounded-tl-none rounded-br-none rotate-90 origin-center" />
                            <span ref={starRef} className="relative inline-block text-white h-[12px] w-[12px]">
                                <img src="/flower.png" alt="Star" />
                            </span>
                        </div>
                    </a> */}

                    {/* Desktop nav */}
                    <nav className='hidden lg:block'>
                        <ul className='flex text-md space-x-4 gap-4 font-semibold'>
                            {navLinks.map(({ label, href }) => (
                                <li key={href} className='mt-2'>
                                    <NavItem label={label} href={href} isActive={activeHref === href} />
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Hamburger button mobile */}
                    <button
                        onClick={toggleMenu}
                        className='lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-30 relative'
                        aria-label='Toggle menu'
                    >
                        <span className={`block h-0.5 w-6 bg-[#1e1e1e] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-[#1e1e1e] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-[#1e1e1e] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </section>

            {/* Mobile menu overlay */}
            <div
                ref={mobileMenuRef}
                className='fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-10 flex flex-col justify-center px-10 gap-8 shadow-2xl lg:hidden'
                style={{ transform: 'translateX(100%)' }}
            >
                {navLinks.map(({ label, href }, i) => (
                    <div key={href} ref={el => menuItemsRef.current[i] = el}>
                        <MobileNavItem
                            label={label}
                            href={href}
                            isActive={activeHref === href}
                            onClick={() => setMenuOpen(false)}
                        />
                    </div>
                ))}

                {/* Optional: social links or footer at bottom */}
                {/* <div className='absolute bottom-10 left-10'>
                    <p className='text-xs text-gray-400 font-inter'>© 2025 Cielo Mae</p>
                </div> */}
            </div>

            {menuOpen && (
                <div
                    className='fixed inset-0 bg-black/20 backdrop-blur-sm z-[9] lg:hidden'
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    )
}

export default Navbar