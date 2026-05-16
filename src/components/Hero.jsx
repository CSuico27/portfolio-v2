import React from 'react'

const Hero = () => {
    return (
        <section className='h-screen bg-[#ffe7d3] flex flex-col z-50 overflow-hidden'>
            <div className='absolute grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full h-full font-inter'
                style={{
                background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6963f7 100%)",
                }}>

                {/* Left: Text */}
                <div className='flex flex-col justify-center items-center gap-4 px-10 sm:px-10 lg:px-16 py-16 md:py-0'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight w-full text-left'>
                        Crafting responsive web experiences.
                    </h1>
                    {/* <div className='flex gap-3 w-full text-left text-xl sm:text-2xl font-medium text-gray-600'>
                        <a href='' className='text-[#1e1e1e] underline-animation flex items-center gap-1'>
                            Explore
                            <ArrowDownRightIcon className="size-5 arrow-animate mb-0.5" />
                        </a>
                    </div> */}
                </div>

                {/* Right: Card */}
                <div className='relative flex justify-center items-end h-full px-6 overflow-hidden'>
                    <div className='absolute inset-0 z-0' style={{
                        backgroundImage: `
                            linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px",
                        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
                        maskImage: "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
                    }} />
                {/* <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className='absolute bottom-[-120px] right-[-50px] w-[700px] h-[700px] z-0'
                >
                    <path
                        fill="#e0c5af"
                        d="M43.1,-65.5C50.6,-62.2,47.8,-41.4,51.8,-25.7C55.8,-10,66.6,0.6,70.3,13.7C74.1,26.9,70.8,42.7,60,48.2C49.3,53.6,31.1,48.8,16.5,50.5C1.9,52.2,-9.1,60.4,-19,59.8C-28.9,59.2,-37.7,49.7,-45.8,39.9C-53.8,30.1,-61.3,20,-65.1,8C-69,-4,-69.3,-17.9,-64.8,-30.3C-60.2,-42.7,-50.8,-53.6,-39.2,-55C-27.6,-56.4,-13.8,-48.5,2,-51.5C17.8,-54.6,35.6,-68.8,43.1,-65.5Z"
                        transform="translate(100 100)"
                    />
                </svg> */}

                <img
                    src="/cieloenhanced-remove-bg-io.png"
                    alt="Cielo"
                    className='relative z-10 max-w-[400px] object-contain'
                />
            </div>

            </div>
        </section>
    )
}

export default Hero