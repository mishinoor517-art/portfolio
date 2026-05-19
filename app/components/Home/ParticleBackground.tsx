// @ts-nocheck
"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    devicePixelRatio: number
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }[] = []

    const particleCount = 85
    const lineDistance = 140
    const mouse = { x: -1000, y: -1000 }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1

      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const initParticles = () => {
      particles.length = 0

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: 1.5 + Math.random() * 1.8,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      ctx.fillStyle = "rgba(255,255,255,0.85)"

      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x <= 0 || particle.x >= window.innerWidth)
          particle.vx *= -1

        if (particle.y <= 0 || particle.y >= window.innerHeight)
          particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.strokeStyle = "rgba(255,255,255,0.18)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.hypot(dx, dy)

          if (distance < lineDistance) {
            ctx.globalAlpha = 1 - distance / lineDistance

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1

      const mouseRadius = 120

      for (const particle of particles) {
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.hypot(dx, dy)

        if (distance < mouseRadius && distance > 0) {
          const force = (mouseRadius - distance) / mouseRadius

          particle.vx += (dx / distance) * force * 0.02
          particle.vy += (dy / distance) * force * 0.02
        }
      }
    }

    const animate = () => {
      draw()
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)

      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-70 z-0"
    />
  )
}

export default ParticleBackground