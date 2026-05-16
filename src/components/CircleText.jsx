import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CircleText = ({ text = "REACT✳HTML✳CSS✳JAVASCRIPT✳", radius = 80, fontSize = 20 }) => {
    const circleRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
    const chars = text.split('')
    const total = chars.length
    const container = circleRef.current
    container.innerHTML = ''

    const size = radius * 2 + 60
     
    chars.forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      const angle = (360 / total) * i
      const rad = (angle * Math.PI) / 180
      const x = size / 2 + radius * Math.sin(rad)
      const y = size / 2 - radius * Math.cos(rad)
      span.style.cssText = `
        position: absolute;
        top: ${y}px;
        left: ${x}px;
        font-size: ${fontSize}px; 
        transform: translate(-50%, -50%) rotate(${angle}deg);
        color: #000000;
        font-family: Poppins, sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
      `
      container.appendChild(span)
    })

    // GSAP spin animation
    // gsap.to(container, {
    //   rotation: 360,
    //   duration: 10,
    //   repeat: -1,
    //   ease: 'none',
    //   transformOrigin: '50% 50%',
    // })

  }, [text, radius, fontSize])

  const size = radius * 2 + 60

  return (
    <div ref={containerRef} style={{ position: 'relative', width: size, height: size }}>
      
      {/* Spinning text */}
      <div ref={circleRef} style={{ position: 'absolute', inset: 0 }} />

      {/* Center symbol */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '24px',
        color: '#e8a0bf',
      }}>
        ✦
      </div>

    </div>
  )
}

export default CircleText