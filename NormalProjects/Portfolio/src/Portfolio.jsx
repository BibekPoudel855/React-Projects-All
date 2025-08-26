import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Smartphone,
  Cpu,
  Zap,
  Award,
  Terminal,
  FileCode,
  Layers,
} from "lucide-react";

const Portfolio = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Advanced wave animation system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Multiple wave layers with different colors and speeds
      const waves = [
        {
          amplitude: 60,
          frequency: 0.005,
          speed: 0.02,
          color: "rgba(16, 185, 129, 0.1)",
          offset: 0,
        },
        {
          amplitude: 80,
          frequency: 0.008,
          speed: 0.015,
          color: "rgba(59, 130, 246, 0.15)",
          offset: Math.PI / 3,
        },
        {
          amplitude: 100,
          frequency: 0.003,
          speed: 0.025,
          color: "rgba(139, 92, 246, 0.1)",
          offset: Math.PI / 2,
        },
        {
          amplitude: 40,
          frequency: 0.012,
          speed: 0.018,
          color: "rgba(236, 72, 153, 0.12)",
          offset: Math.PI,
        },
      ];

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            canvas.height / 2 +
            Math.sin(x * wave.frequency + time * wave.speed + wave.offset) *
              wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) *
              (wave.amplitude * 0.3);

          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      // Floating geometric shapes
      const shapes = 8;
      for (let i = 0; i < shapes; i++) {
        const x = (canvas.width / shapes) * i + Math.sin(time * 0.01 + i) * 100;
        const y = canvas.height * 0.3 + Math.cos(time * 0.008 + i * 2) * 150;
        const size = 20 + Math.sin(time * 0.02 + i) * 10;
        const rotation = time * 0.02 + i;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);

        // Different shapes for variety
        if (i % 3 === 0) {
          // Hexagon
          ctx.beginPath();
          for (let j = 0; j < 6; j++) {
            const angle = (j * Math.PI * 2) / 6;
            const px = Math.cos(angle) * size;
            const py = Math.sin(angle) * size;
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fillStyle = `rgba(16, 185, 129, ${
            0.1 + Math.sin(time * 0.05 + i) * 0.1
          })`;
          ctx.fill();
        } else if (i % 3 === 1) {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -size);
          ctx.lineTo(-size * 0.866, size * 0.5);
          ctx.lineTo(size * 0.866, size * 0.5);
          ctx.closePath();
          ctx.fillStyle = `rgba(59, 130, 246, ${
            0.15 + Math.sin(time * 0.03 + i) * 0.1
          })`;
          ctx.fill();
        } else {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 92, 246, ${
            0.12 + Math.sin(time * 0.04 + i) * 0.1
          })`;
          ctx.fill();
        }

        ctx.restore();
      }

      time += 1;
      animationFrameId = requestAnimationFrame(drawWaves);
    };

    resizeCanvas();
    drawWaves();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll tracking and animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);

    const observerOptions = {
      threshold: [0.1, 0.5, 0.8],
      rootMargin: "-10% 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target;

        if (entry.isIntersecting) {
          const elements = section.querySelectorAll(".animate-on-scroll");
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.transform =
                "translateY(0px) translateX(0px) rotateX(0deg) scale(1)";
              el.style.opacity = "1";
              el.style.filter = "blur(0px)";
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    const sections = [aboutRef, projectsRef, skillsRef, contactRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);

        const elements = ref.current.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => {
          el.style.transform =
            "translateY(80px) translateX(-30px) rotateX(15deg) scale(0.9)";
          el.style.opacity = "0";
          el.style.filter = "blur(8px)";
          el.style.transition = "all 1s cubic-bezier(0.23, 1, 0.32, 1)";
        });
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Inventory Management System",
      description:
        "Comprehensive solution for tracking stock levels, orders, and suppliers with real-time analytics and reporting.",
      tech: ["TypeScript", "Next.js", "SQL"],
      category: "Full Stack",
      liveUrl: "/",
      githubUrl: "https://github.com/BibekPoudel855",
      featured: true,
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "High-performance data visualization platform processing millions of events with WebSocket connections and interactive charts.",
      tech: ["TypeScript", "Next.js", "SQL"],
      category: "Data Analytics",
      liveUrl: "/",
      githubUrl: "https://github.com/BibekPoudel855",
      featured: true,
    },
  ];

  const skills = [
    {
      name: "React & Next.js",
      level: 90,
      category: "Frontend",
      icon: "⚛️",
      color: "from-emerald-400 to-cyan-400",
    },
    {
      name: "TypeScript",
      level: 90,
      category: "Language",
      icon: "🔷",
      color: "from-blue-400 to-indigo-400",
    },
    {
      name: "Python",
      level: 88,
      category: "Backend",
      icon: "🐍",
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Java",
      level: 85,
      category: "Enterprise",
      icon: "☕",
      color: "from-orange-400 to-red-400",
    },
    {
      name: "PHP",
      level: 82,
      category: "Web",
      icon: "🐘",
      color: "from-violet-400 to-purple-500",
    },
    {
      name: "C/C++",
      level: 80,
      category: "System",
      icon: "⚡",
      color: "from-slate-400 to-gray-500",
    },
    {
      name: "SQL & NoSQL",
      level: 92,
      category: "Database",
      icon: "🗄️",
      color: "from-teal-400 to-green-400",
    }
  ];

  const achievements = [
    {
      icon: "🚀",
      title: "5+ Projects",
      desc: "Successfully Delivered",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: "⭐",
      title: "5.0 Rating",
      desc: "Client Satisfaction",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: "💼",
      title: "2+ Years",
      desc: "Professional Experience",
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: "🌟",
      title: "1+ Awards",
      desc: "Recognized for Excellence",
      color: "from-yellow-400 to-orange-500",
    }
  ];

  return (
    <>
      {/* Inject CSS styles directly into the component */}
      <style>
        {`
          @keyframes orbit {
            from {
              transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg);
            }
          }

          .orbit-animation {
            animation: orbit 12s linear infinite;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          .float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(100px) rotateX(15deg) scale(0.9);
              filter: blur(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0px) rotateX(0deg) scale(1);
              filter: blur(0px);
            }
          }

          .animate-in {
            animation: slideInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(-25%);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }

          .animate-bounce {
            animation: bounce 1s infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          .animate-spin {
            animation: spin 1s linear infinite;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(30, 41, 59, 0.5);
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #10b981, #3b82f6);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #059669, #2563eb);
          }

          /* Gradient text */
          .gradient-text {
            background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          /* Mix blend mode fix */
          .mix-blend-multiply {
            mix-blend-mode: multiply;
          }

          /* Backdrop blur */
          .backdrop-blur {
            backdrop-filter: blur(12px);
          }

          .backdrop-blur-xl {
            backdrop-filter: blur(24px);
          }

          /* Button and Link Styles */
          .btn-primary {
            background: linear-gradient(135deg, #10b981, #3b82f6);
            color: white;
            padding: 1rem 3rem;
            border-radius: 1rem;
            font-weight: 600;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            transform: scale(1);
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
            border: none;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          .btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
            background: linear-gradient(135deg, #059669, #2563eb);
          }

          .btn-secondary {
            background: transparent;
            color: white;
            padding: 1rem 3rem;
            border: 2px solid #10b981;
            border-radius: 1rem;
            font-weight: 600;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            transform: scale(1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          .btn-secondary:hover {
            background: linear-gradient(135deg, #10b981, #3b82f6);
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          }

          .nav-link {
            color: #d1d5db;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.5rem 0;
            cursor: pointer;
          }

          .nav-link:hover {
            color: #10b981;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #10b981, #3b82f6);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4rem;
            height: 4rem;
            background: rgba(51, 65, 85, 0.6);
            border: 1px solid rgba(107, 114, 128, 0.5);
            border-radius: 1rem;
            transition: all 0.3s ease;
            transform: scale(1);
            backdrop-filter: blur(10px);
            cursor: pointer;
          }

          .social-link:hover {
            transform: scale(1.1) translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }

          .social-link.github:hover {
            color: #d1d5db;
          }

          .social-link.linkedin:hover {
            color: #3b82f6;
          }

          .social-link.email:hover {
            color: #10b981;
          }

          .project-card {
            background: linear-gradient(135deg, rgba(51, 65, 85, 0.6), rgba(71, 85, 105, 0.4));
            border: 1px solid rgba(107, 114, 128, 0.3);
            border-radius: 1.5rem;
            padding: 2rem;
            transition: all 0.5s ease;
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }

          .project-card:hover {
            transform: scale(1.02) translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border-color: rgba(16, 185, 129, 0.3);
          }

          .tech-tag {
            background: rgba(51, 65, 85, 0.6);
            border: 1px solid rgba(107, 114, 128, 0.3);
            color: #d1d5db;
            padding: 0.5rem 1rem;
            border-radius: 0.75rem;
            font-size: 0.875rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .tech-tag:hover {
            background: rgba(71, 85, 105, 0.6);
            border-color: rgba(16, 185, 129, 0.3);
            transform: scale(1.05) translateY(-2px);
          }

          .skill-card {
            background: linear-gradient(135deg, rgba(51, 65, 85, 0.6), rgba(71, 85, 105, 0.4));
            border: 1px solid rgba(107, 114, 128, 0.3);
            border-radius: 1rem;
            padding: 2rem;
            transition: all 0.5s ease;
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }

          .skill-card:hover {
            transform: scale(1.02) translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .contact-link {
            display: flex;
            align-items: center;
            padding: 1.5rem;
            background: linear-gradient(135deg, rgba(51, 65, 85, 0.6), rgba(71, 85, 105, 0.4));
            border: 1px solid rgba(107, 114, 128, 0.3);
            border-radius: 1rem;
            transition: all 0.5s ease;
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            text-decoration: none;
            color: white;
          }

          .contact-link:hover {
            transform: scale(1.02) translateX(8px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            border-color: rgba(16, 185, 129, 0.3);
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden relative">
        {/* Advanced Wave Animation Canvas */}
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0 mix-blend-multiply"
        />

        {/* Dynamic gradient overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 70%)`,
          }}
        />

        {/* Navigation */}
        <nav className=" z-50 bg-slate-900/80 backdrop-blur-xl border-b border-emerald-500/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold gradient-text">
                Bibek Poudel
              </div>
              <div className="hidden md:flex space-x-8">
                {["Home", "About", "Projects", "Skills", "Contact"].map(
                  (item, index) => (
                    <button
                      key={index}
                      className="nav-link"
                      style={{
                        transform: `translateY(${
                          Math.sin(scrollY * 0.01 + index) * 2
                        }px)`,
                      }}
                      onClick={() => {
                        const refs = [
                          heroRef,
                          aboutRef,
                          projectsRef,
                          skillsRef,
                          contactRef,
                        ];
                        scrollToSection(refs[index]);
                      }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Floating geometric elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-20 float"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  width: `${60 + Math.random() * 80}px`,
                  height: `${60 + Math.random() * 80}px`,
                  background: `linear-gradient(135deg, 
                    ${
                      i % 4 === 0
                        ? "rgba(16, 185, 129, 0.3)"
                        : i % 4 === 1
                        ? "rgba(59, 130, 246, 0.3)"
                        : i % 4 === 2
                        ? "rgba(139, 92, 246, 0.3)"
                        : "rgba(236, 72, 153, 0.3)"
                    }, 
                    transparent)`,
                  borderRadius: Math.random() > 0.5 ? "50%" : "20%",
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div
            className={`text-center z-10 px-6 relative ${
              isLoaded ? "animate-in" : ""
            }`}
          >
            <div className="relative mb-12">
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 relative leading-none gradient-text"
                style={{
                  textShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
                  transform: `perspective(1000px) rotateX(${
                    Math.sin(scrollY * 0.005) * 3
                  }deg)`,
                }}
              >
                BIBEK
                <br />
                <span className="text-4xl md:text-5xl lg:text-7xl">POUDEL</span>
              </h1>
            </div>

            <div className="relative mb-16">
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-gray-200 font-light tracking-wide">
                Full Stack Developer &{" "}
                <span className="text-emerald-400 font-semibold">
                  Tech Innovator
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  "React",
                  "TypeScript",
                  "Python",
                  "Java",
                  "Next.js",
                  "PHP",
                  "C++",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 bg-slate-800/60 backdrop-blur border border-emerald-500/30 rounded-full text-emerald-300 hover:bg-slate-700/60 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      boxShadow: "0 4px 20px rgba(16, 185, 129, 0.1)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="btn-primary"
              >
                Explore My Work
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="btn-secondary"
              >
                Let's Connect
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:bg-slate-700/40 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="text-sm font-semibold text-emerald-400 mb-1">
                    {achievement.title}
                  </div>
                  <div className="text-xs text-gray-400">
                    {achievement.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-8">
              {[
                {
                  icon: Github,
                  url: "https://github.com/BibekPoudel855",
                  label: "GitHub",
                  className: "social-link github",
                },
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/in/bibek-poudel-874294255/",
                  label: "LinkedIn",
                  className: "social-link linkedin",
                },
                {
                  icon: Mail,
                  url: "/",
                  label: "Email",
                  className: "social-link email",
                },
              ].map(({ icon: Icon, url, label, className }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                  title={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-sm text-gray-400 mb-2">
                Scroll to explore
              </span>
              <ChevronDown size={32} className="text-emerald-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="animate-on-scroll mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 gradient-text">
                About Me
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 animate-on-scroll">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in
                  cutting-edge technologies. I specialize in creating scalable,
                  high-performance applications that solve real-world problems.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  From React frontends to Python backends, from mobile apps to
                  cloud infrastructure, I bring ideas to life with clean code
                  and innovative solutions.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                  {[
                    {
                      icon: Code,
                      label: "Clean Code",
                      color: "text-blue-400",
                      bg: "from-blue-400/20 to-blue-600/20",
                    },
                    {
                      icon: Database,
                      label: "Scalable Systems",
                      color: "text-emerald-400",
                      bg: "from-emerald-400/20 to-emerald-600/20",
                    },
                    {
                      icon: Zap,
                      label: "Performance",
                      color: "text-yellow-400",
                      bg: "from-yellow-400/20 to-yellow-600/20",
                    },
                    {
                      icon: Server,
                      label: "Cloud Native",
                      color: "text-purple-400",
                      bg: "from-purple-400/20 to-purple-600/20",
                    },
                    {
                      icon: Smartphone,
                      label: "Mobile First",
                      color: "text-pink-400",
                      bg: "from-pink-400/20 to-pink-600/20",
                    },
                    {
                      icon: Globe,
                      label: "Global Scale",
                      color: "text-cyan-400",
                      bg: "from-cyan-400/20 to-cyan-600/20",
                    },
                  ].map(({ icon: Icon, label, color, bg }, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 bg-gradient-to-br ${bg} backdrop-blur border border-white/10 px-4 py-3 rounded-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1`}
                      style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)" }}
                    >
                      <Icon className={`${color}`} size={20} />
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-on-scroll">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Animated concentric circles */}
                  <div
                    className="absolute inset-0 border-4 border-emerald-400/30 rounded-full animate-spin"
                    style={{ animationDuration: "20s" }}
                  ></div>
                  <div
                    className="absolute inset-4 border-4 border-blue-400/30 rounded-full animate-spin"
                    style={{
                      animationDuration: "15s",
                      animationDirection: "reverse",
                    }}
                  ></div>
                  <div
                    className="absolute inset-8 border-4 border-purple-400/30 rounded-full animate-spin"
                    style={{ animationDuration: "10s" }}
                  ></div>

                  <div className="absolute inset-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-8xl shadow-2xl">
                    👨‍💻
                  </div>

                  {/* Floating tech icons */}
                  {[
                    {
                      icon: "⚛️",
                      position:
                        "top-0 left-1/2 transform -translate-x-1/2 -translate-y-8",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      icon: "🐍",
                      position:
                        "top-1/2 right-0 transform translate-x-8 -translate-y-1/2",
                      color: "from-green-400 to-emerald-400",
                    },
                    {
                      icon: "☕",
                      position: "bottom-0 right-1/4 transform translate-y-8",
                      color: "from-orange-400 to-red-400",
                    },
                    {
                      icon: "🔷",
                      position: "bottom-0 left-1/4 transform translate-y-8",
                      color: "from-blue-400 to-indigo-400",
                    },
                    {
                      icon: "🐘",
                      position:
                        "top-1/2 left-0 transform -translate-x-8 -translate-y-1/2",
                      color: "from-purple-400 to-violet-400",
                    },
                  ].map(({ icon, position, color }, index) => (
                    <div
                      key={index}
                      className={`absolute ${position} text-3xl animate-bounce bg-gradient-to-br ${color} rounded-2xl p-4 border border-white/20 shadow-lg backdrop-blur`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="animate-on-scroll mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 gradient-text">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
                Showcasing innovative solutions built with cutting-edge
                technologies
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll project-card ${
                    project.featured ? "lg:col-span-2" : ""
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-400 to-blue-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Award size={14} className="mr-1" />
                      Featured
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30 font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center space-x-2"
                      style={{ padding: "0.75rem 1.5rem", fontSize: "1rem" }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center space-x-2"
                      style={{ padding: "0.75rem 1.5rem", fontSize: "1rem" }}
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 gradient-text">
                Technical Expertise
              </h2>
              <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
                Mastering modern technologies to build tomorrow's solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="animate-on-scroll group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 transform hover:-translate-y-2"
                  style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl transform group-hover:scale-125 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {skill.name}
                        </h3>
                        <p className="text-emerald-400 text-sm font-medium">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-3xl font-black text-emerald-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`,
                        boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Icons Grid */}
            <div className="animate-on-scroll mt-20">
              <h3 className="text-3xl font-bold text-center mb-12 text-emerald-400">
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    name: "React",
                    icon: "⚛️",
                    color: "from-blue-400 to-cyan-400",
                  },
                  {
                    name: "TypeScript",
                    icon: "🔷",
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    name: "Python",
                    icon: "🐍",
                    color: "from-green-400 to-emerald-500",
                  },
                  {
                    name: "Java",
                    icon: "☕",
                    color: "from-orange-400 to-red-500",
                  },
                  {
                    name: "PHP",
                    icon: "🐘",
                    color: "from-purple-400 to-violet-500",
                  },
                  {
                    name: "Node.js",
                    icon: "🟢",
                    color: "from-green-500 to-lime-500",
                  },
                  {
                    name: "MongoDB",
                    icon: "🍃",
                    color: "from-green-400 to-teal-500",
                  },
                  {
                    name: "PostgreSQL",
                    icon: "🗄️",
                    color: "from-blue-400 to-sky-500",
                  },
                  {
                    name: "Docker",
                    icon: "🐳",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    name: "AWS",
                    icon: "☁️",
                    color: "from-orange-400 to-yellow-500",
                  },
                  {
                    name: "Git",
                    icon: "📱",
                    color: "from-gray-400 to-slate-500",
                  },
                  {
                    name: "Linux",
                    icon: "🐧",
                    color: "from-gray-500 to-slate-600",
                  },
                  {
                    name: "Redis",
                    icon: "🔴",
                    color: "from-red-400 to-pink-500",
                  },
                  {
                    name: "GraphQL",
                    icon: "💎",
                    color: "from-pink-400 to-purple-500",
                  },
                  {
                    name: "Kubernetes",
                    icon: "⚙️",
                    color: "from-blue-400 to-indigo-500",
                  },
                  {
                    name: "TensorFlow",
                    icon: "🧠",
                    color: "from-orange-400 to-red-400",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 p-4 bg-slate-800/60 backdrop-blur border border-gray-600/30 rounded-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <span className="text-3xl">{tech.icon}</span>
                    <span className="text-xs text-gray-300 text-center font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll text-center mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 gradient-text">
                Let's Build Something Amazing
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to turn your ideas into reality? Let's collaborate and
                create exceptional digital experiences together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-emerald-400 mb-8">
                    Get In Touch
                  </h3>

                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: "bibek.poudel@example.com",
                      link: "mailto:bibek.poudel@example.com",
                      color: "text-blue-400",
                      bg: "from-blue-400/20 to-blue-600/20",
                    },
                    {
                      icon: Linkedin,
                      title: "LinkedIn",
                      value: "linkedin.com/in/bibekpoudel",
                      link: "https://linkedin.com/in/bibekpoudel",
                      color: "text-blue-500",
                      bg: "from-blue-500/20 to-indigo-600/20",
                    },
                    {
                      icon: Github,
                      title: "GitHub",
                      value: "github.com/bibekpoudel",
                      link: "https://github.com/bibekpoudel",
                      color: "text-gray-400",
                      bg: "from-gray-400/20 to-slate-600/20",
                    },
                    {
                      icon: Globe,
                      title: "Portfolio",
                      value: "bibekpoudel.info.np",
                      link: "https://bibekpoudel.info.np",
                      color: "text-emerald-400",
                      bg: "from-emerald-400/20 to-green-600/20",
                    },
                  ].map(
                    ({ icon: Icon, title, value, link, color, bg }, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-6 p-6 bg-gradient-to-br ${bg} backdrop-blur-xl border border-gray-600/30 rounded-2xl hover:scale-105 transition-all duration-500 transform hover:translate-x-4 group`}
                        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
                      >
                        <div
                          className={`p-4 rounded-xl bg-slate-700/50 ${color} group-hover:scale-125 transition-transform duration-300`}
                        >
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {title}
                          </h4>
                          <p className="text-gray-400">{value}</p>
                        </div>
                        <ExternalLink
                          size={16}
                          className="ml-auto text-gray-500 group-hover:text-emerald-400 transition-colors duration-300"
                        />
                      </a>
                    )
                  )}
                </div>

                <div className="flex space-x-6 pt-8">
                  <a
                    href="mailto:bibek.poudel@example.com"
                    className="flex-1 flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    <Mail size={20} />
                    <span>Send Message</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-center space-x-3 px-8 py-4 border-2 border-emerald-500 rounded-xl font-semibold text-lg hover:bg-emerald-500 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                  >
                    <FileCode size={20} />
                    <span>Resume</span>
                  </a>
                </div>
              </div>

              <div className="animate-on-scroll relative">
                <div
                  className="relative w-full h-96 bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-3xl overflow-hidden border border-gray-600/30"
                  style={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)" }}
                >
                  {/* Animated contact visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Central node */}
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-3xl animate-pulse shadow-lg">
                        👋
                      </div>

                      {/* Orbiting elements */}
                      {[
                        {
                          icon: "💼",
                          delay: "0s",
                          color: "from-blue-400 to-cyan-400",
                        },
                        {
                          icon: "🚀",
                          delay: "2s",
                          color: "from-emerald-400 to-green-400",
                        },
                        {
                          icon: "💡",
                          delay: "4s",
                          color: "from-purple-400 to-pink-400",
                        },
                        {
                          icon: "⚡",
                          delay: "6s",
                          color: "from-yellow-400 to-orange-400",
                        },
                      ].map(({ icon, delay, color }, index) => (
                        <div
                          key={index}
                          className={`absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br ${color} backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-lg shadow-lg orbit-animation`}
                          style={{
                            transform: "translate(-50%, -50%)",
                            animationDelay: delay,
                          }}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 4}s`,
                          animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-gray-700/50 bg-slate-900/80 backdrop-blur">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2 gradient-text">
                  Bibek Poudel
                </h3>
                <p className="text-gray-400 text-lg">
                  Full Stack Developer & Tech Innovator
                </p>
              </div>

              <div className="flex items-center space-x-8">
                <span className="text-gray-400">Connect with me:</span>
                <div className="flex space-x-6">
                  {[
                    {
                      icon: Github,
                      url: "https://github.com/bibekpoudel",
                      color: "hover:text-gray-300",
                    },
                    {
                      icon: Linkedin,
                      url: "https://linkedin.com/in/bibekpoudel",
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: Mail,
                      url: "mailto:bibek.poudel@example.com",
                      color: "hover:text-emerald-400",
                    },
                  ].map(({ icon: Icon, url, color }, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-slate-800/60 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
                      style={{ boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)" }}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
              <p className="text-gray-500 text-lg">
                © 2025 Bibek Poudel. Crafted with React, TypeScript & passion.
                ✨
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
