import React, { useEffect, useRef } from 'react';

const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let time = 0;
    let animationFrameId;

    const config = {
      connectionDistance: 120,
      mouseDistance: 250,
      particleSize: 4.0,
      speed: 0.8,
      introDuration: 120 // ~2 seconds at 60fps
    };

    let mouse = { x: null, y: null };

    class Particle {
      constructor() {
        this.tx = Math.random() * width;
        this.ty = Math.random() * height;
        this.x = width / 2;
        this.y = height / 2;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.size = Math.random() * config.particleSize + 1;
        this.baseAlpha = Math.random() * 0.5 + 0.3;
      }

      update(progress) {
        if (progress < 1) {
          const ease = 1 - Math.pow(1 - progress, 3);
          this.x = width / 2 + (this.tx - width / 2) * ease;
          this.y = height / 2 + (this.ty - height / 2) * ease;
        } else {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;

          if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < config.mouseDistance) {
              const forceDirectionX = dx / distance;
              const forceDirectionY = dy / distance;
              const force = (config.mouseDistance - distance) / config.mouseDistance;
              this.vx -= forceDirectionX * force;
              this.vy -= forceDirectionY * force;
            }
          }

          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > config.speed * 2) {
            this.vx = (this.vx / speed) * config.speed * 2;
            this.vy = (this.vy / speed) * config.speed * 2;
          }
        }
      }

      draw() {
        const isDark = document.documentElement.classList.contains('dark');
        const r = 0;
        const g = isDark ? 191 : 101;
        const b = isDark ? 255 : 189;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.min(200, Math.floor((width * height) / 9000));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      time = 0;
      initParticles();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      time++;
      const progress = Math.min(1, time / config.introDuration);

      const isDark = document.documentElement.classList.contains('dark');
      const r = 0;
      const g = isDark ? 191 : 101;
      const b = isDark ? 255 : 189;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < config.connectionDistance) {
            ctx.beginPath();
            let opacity = 1 - (distance / config.connectionDistance);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity * (isDark ? 0.6 : 0.4)})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
          
          if (mouse.x != null && progress >= 1) {
            let mdx = particles[i].x - mouse.x;
            let mdy = particles[i].y - mouse.y;
            let mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < config.mouseDistance && mDist > 50) {
              ctx.beginPath();
              let mOpacity = 1 - (mDist / config.mouseDistance);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${mOpacity * (isDark ? 0.4 : 0.2)})`;
              ctx.lineWidth = 1.0;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(progress);
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="neural-canvas" ref={canvasRef}></canvas>;
};

export default NeuralCanvas;
