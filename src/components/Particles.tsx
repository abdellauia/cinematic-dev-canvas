
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ParticlesProps {
  className?: string;
}

const Particles: React.FC<ParticlesProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fit window
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Initial resize
    resizeCanvas();

    // Resize on window resize
    window.addEventListener('resize', resizeCanvas);

    // Particle properties
    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive particle count
    const colors = ['#8B5CF6', '#D946EF', '#1EAEDB', '#FFFFFF'];
    
    // Mouse position
    let mousePosition = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    // Update mouse position
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', updateMousePosition);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulseDirection: boolean;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulseDirection = Math.random() > 0.5;
      }

      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;

        // Subtle "breathing" effect
        if (this.pulseDirection) {
          this.opacity += 0.003;
          if (this.opacity >= 0.8) this.pulseDirection = false;
        } else {
          this.opacity -= 0.003;
          if (this.opacity <= 0.1) this.pulseDirection = true;
        }

        // Mouse interaction
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          // Move away from mouse with a slight acceleration
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * 0.5;
          const pushY = Math.sin(angle) * 0.5;
          
          this.speedX -= pushX * 0.02;
          this.speedY -= pushY * 0.02;
        }
        
        // Apply some drag to slow down particles
        this.speedX *= 0.99;
        this.speedY *= 0.99;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles with lines if they are close enough
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            if (!ctx) return;
            // Calculate opacity based on distance
            const opacity = 1 - distance / 120;
            
            ctx.globalAlpha = opacity * 0.2;
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw all particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      
      // Connect particles with lines
      connectParticles();
      
      requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0', className)}
    />
  );
};

export default Particles;
