export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 px-6 font-light" style={{
      background: `linear-gradient(135deg, #0f172a 0%, #1a1f3a 25%, #141e2e 50%, #0f1419 75%, #1a1f35 100%)`,
      backgroundAttachment: 'fixed'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animation-delay-1 { animation-delay: 0.1s; }
        .animation-delay-2 { animation-delay: 0.2s; }
        .animation-delay-3 { animation-delay: 0.3s; }
        .animation-delay-4 { animation-delay: 0.4s; }
      `}</style>
      <section className="max-w-5xl mx-auto py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          {/* Hero Text */}
          <div className="flex-1">
            <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-4 text-slate-50 animate-fade-in-up">
              Vincent Tran
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light mb-4 animate-fade-in-up animation-delay-1">
              Software Engineer
            </p>

            <p className="text-slate-400 max-w-2xl mb-10 leading-relaxed text-base md:text-lg font-light animate-fade-in-up animation-delay-2">
              Computer Science Student at Georgia Tech building scalable and viable software. Passionate about crafting elegant solutions to complex problems.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-3">
              <a
                href="https://drive.google.com/file/d/1Os8o5-WL3pL9kh3Ycz9YlbIcme4Bh_1G/view?usp=sharing"
                className="px-7 py-3 rounded-lg bg-slate-100 text-slate-900 font-medium hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Resume
              </a>

              <a
                href="https://github.com/vtran8928"
                className="px-7 py-3 rounded-lg border-2 border-slate-700 text-slate-200 font-light hover:border-slate-500 hover:bg-slate-900 transition-all duration-300 hover:shadow-md"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vincent-tran-789440381"
                className="px-7 py-3 rounded-lg border-2 border-slate-700 text-slate-200 font-light hover:border-slate-500 hover:bg-slate-900 transition-all duration-300 hover:shadow-md"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image Box */}
          <div className="flex-shrink-0 animate-fade-in-up animation-delay-4">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="relative w-full h-full bg-slate-800 rounded-2xl border border-slate-700 p-1 overflow-hidden hover:shadow-lg hover:border-slate-600 transition-all duration-300">
                <img
                  src="/profile.jpg"
                  alt="Vincent Tran"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Coursework Section */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-slate-50">Education</h2>
            <div className="border-l-2 border-slate-700 pl-6">
              <h3 className="text-lg font-light text-slate-100 mb-1">Bachelor of Science in Computer Science</h3>
              <p className="text-slate-300 font-light text-sm mb-3">Georgia Institute of Technology, College of Computing</p>
              <p className="text-slate-400 font-light text-sm mb-2">Atlanta, Georgia</p>
              <p className="text-slate-400 font-light text-sm mb-1">Graduation: December 2025</p>
              <p className="text-slate-400 font-light text-sm">GPA: 3.5 </p>
            </div>
          </div>

          {/* Coursework */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-slate-50">Coursework</h2>
            <div className="grid grid-cols-1 gap-3">
              {['Data Structures & Algorithms', 'Object-Oriented Design', 'Databases', 'Machine Learning', 'Artificial Intelligence', 'Data Visualization', 'Computer Graphics', 'UI/UX', 'Media/Device Architecture'].map((course) => (
                <div key={course} className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 font-light text-sm hover:bg-slate-800 hover:border-slate-600 hover:shadow-sm transition-all duration-300">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 border-t border-slate-800">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-slate-50">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-1">Software Developer</h3>
              <p className="text-slate-300 font-light text-sm mb-1">CREATE-X Startup Launch — Georgia Tech</p>
              <p className="text-slate-400 font-light text-sm">May 2025 – Dec 2025</p>
            </div>
            <ul className="space-y-2">
              {[
                'Led full-stack development of a home maintenance SaaS through CREATE-X, building a cross-platform React Native app with Node.js backend from ideation to MVP',
                'Validated product-market fit through customer discovery interviews, iterating on features including RAG-powered appliance troubleshooting and proximity-based service provider search'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-1">Student Assistant</h3>
              <p className="text-slate-300 font-light text-sm mb-1">Georgia Tech Tutoring and Academic Support</p>
              <p className="text-slate-400 font-light text-sm">Dec 2024 – Dec 2025</p>
            </div>
            <ul className="space-y-2">
              {[
                'Facilitated access to campus assistive services for 5,500+ students weekly using internal software systems',
                'Analyzed 1,650 data points to quantify impact and enhance operational efficiency',
                'Scheduled and managed 70+ tutoring sessions, overseeing 100+ hours of operations'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-1">Software Developer</h3>
              <p className="text-slate-300 font-light text-sm mb-1">LinguaConnect</p>
              <p className="text-slate-400 font-light text-sm">Jan 2026 – Present</p>
            </div>
            <ul className="space-y-2">
              {[
                'Building a language tutoring marketplace connecting students with independent teachers for live sessions, featuring booking, scheduling, and commission-based payments',
                'Developing full-stack platform with React frontend and Node.js/Express backend with integrated video conferencing and interactive learning tools'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-1">Tutor</h3>
              <p className="text-slate-300 font-light text-sm mb-1">ACE Academy</p>
              <p className="text-slate-400 font-light text-sm">Dec 2025 – Present</p>
            </div>
            <ul className="space-y-2">
              {[
                'Delivered individualized instruction in math, reading, and writing to students across multiple grade levels'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 border-t border-slate-800">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-slate-50">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-2">
                Spotify Analytics Dashboard
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'OpenAI API', 'Firebase', 'Spotify API', 'Android Studio'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-200 text-xs font-light rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Developed a music analytics application displaying personalized listening statistics using Progressive Disclosure UI patterns',
                'Implemented OAuth 2.0 authentication and retrieved user listening data via Spotify Web API',
                'Generated personalized artist recommendations and lifestyle insights using OpenAI API with CoT prompting',
                'Integrated Firebase Cloud Storage for cross-device data synchronization across user sessions'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://sites.google.com/view/cs-2340-team-5-spotify-wrapped/project-description-and-process?authuser=0" className="inline-flex items-center gap-2 text-slate-200 font-light hover:text-slate-100 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-2">
                Smart Home Maintenance App
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React Native', 'Node.js', 'SQL', 'OpenAI API', 'Google Maps API'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-200 text-xs font-light rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Built cross-platform mobile application for appliance tracking and maintenance scheduling, integrating Google Maps API for proximity-based service provider discovery',
                'Designed normalized MySQL database with ACID transactions on Google Cloud SQL for tracking and task scheduling',
                'Developed RESTful API with Express.js handling CRUD operations for tasks, appliances, and user schedules',
                'Implemented RAG chatbot providing appliance-specific troubleshooting using user manuals and OpenAI API'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://docs.google.com/presentation/d/1Oa_wFP8EjcpmFjLrQhA4Yc2AlGI-frKPavw7rBqI_8M/edit?usp=sharing" className="inline-flex items-center gap-2 text-slate-200 font-light hover:text-slate-100 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 3 */}
          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-2">
                AWS-Powered Photo Hub
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AWS S3', 'AWS Lambda', 'AWS CloudFront', 'Python', 'Flask', 'React', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-200 text-xs font-light rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Built a scalable photo storage platform using AWS S3 for object storage and CloudFront CDN for low-latency global content delivery via edge caching',
                'Implemented serverless image processing pipelines with AWS Lambda, enabling automatic scaling to handle concurrent uploads without manual infrastructure management',
                'Developed React frontend with Flask REST API backend, using pre-signed S3 URLs for secure direct client-to-storage uploads while minimizing server overhead'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project 4 */}
          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-2">
                Cosmic Voyage – Interactive 3D Space Rendering
              </h3>
              <div className="flex flex-wrap gap-2">
                {['C++', 'OpenGL', 'GLSL'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-200 text-xs font-light rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Developed interactive 3D space environment with orbiting planets, rotating asteroids, animated starfields, and particle effects',
                'Wrote custom GLSL shaders implementing Phong lighting model for realistic lighting and atmospheric glow effects',
                'Optimized rendering to maintain 60+ FPS with 300+ moving objects using object pooling and frame-rate independence'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://www.youtube.com/watch?v=vvPgb1zU2Po" className="inline-flex items-center gap-2 text-slate-200 font-light hover:text-slate-100 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 5 */}
          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-2">
                Potato Panic – Retro Gameboy Advance Survival Game
              </h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'GBA SDK'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-200 text-xs font-light rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Developed a wave-based survival game for the GameBoy Advance with animated sprites, parallax scrolling, and dynamic visual effects',
                'Implemented enemy AI pathfinding, boss combat mechanics, and real-time VRAM manipulation using Mode 0 graphics'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://vincenttran8928.wixsite.com/potato-panic-1" className="inline-flex items-center gap-2 text-slate-200 font-light hover:text-slate-100 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 6 */}
          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-2">
                Interactive Data Story – Web Visualization
              </h3>
              <div className="flex flex-wrap gap-2">
                {['D3.js', 'JavaScript', 'HTML/CSS', 'GitHub Pages'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-200 text-xs font-light rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Created narrative-driven web visualization exploring insights from real-world datasets, hosted via GitHub Pages',
                'Implemented interactive charts with filtering, brushing, and smooth animation transitions for enhanced user engagement'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://auddin8git.github.io/CS4460FinalTeamWe-3InfoVis/" className="inline-flex items-center gap-2 text-slate-200 font-light hover:text-slate-100 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 7 */}
          <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-slate-50 group-hover:text-slate-200 transition-colors mb-2">
                Nomadic Radio – Adaptive Auditory Notification Simulator
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Processing'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-200 text-xs font-light rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Real-time auditory notification simulator adapting sound output based on user context and alert priority',
                'Built a priority-based audio pipeline combining earcons and text-to-speech',
                'Dynamically adjusts pitch and volume to suppress low-priority alerts in focus-critical scenarios'
              ].map((item, i) => (
                <li key={i} className="text-slate-300 font-light text-sm flex gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://drive.google.com/file/d/1p38nKnL21Jcq92YNST9LMyNuoyo7MQWq/view?usp=sharing" className="inline-flex items-center gap-2 text-slate-200 font-light hover:text-slate-100 transition-colors text-sm">
              View Project →
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-12 md:py-16 border-t border-slate-800">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-slate-50">Contact</h2>
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-slate-300 font-light text-sm mb-2">Email</p>
            <a href="mailto:vincenttran8928@gmail.com" className="text-slate-100 font-light hover:text-slate-300 transition-colors">
              vincenttran8928@gmail.com
            </a>
          </div>
          <div>
            <p className="text-slate-300 font-light text-sm mb-2">Location</p>
            <p className="text-slate-100 font-light">Atlanta, GA</p>
          </div>
        </div>
      </section>

    </main>
  );
}
