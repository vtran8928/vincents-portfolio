export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-gray-50 px-6 font-light">
      <section className="max-w-5xl mx-auto py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          {/* Hero Text */}
          <div className="flex-1">
            <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-4 text-gray-50">
              Vincent Tran
            </h1>

            <p className="text-lg md:text-xl text-emerald-400 font-light mb-4">
              Software Engineer · Backend · Mobile · Systems
            </p>

            <p className="text-gray-400 max-w-2xl mb-10 leading-relaxed text-base md:text-lg font-light">
              Computer Science Student at Georgia Tech building scalable and viable software. Passionate about crafting elegant solutions to complex problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1IzwYZ5Bw6h5DYLmJZHjn0lQ8VxuZayCG/view?usp=sharing"
                className="px-7 py-3 rounded-lg bg-emerald-600 text-neutral-950 font-medium hover:bg-emerald-500 transition-colors duration-300"
              >
                Resume
              </a>

              <a
                href="https://github.com/vtran8928"
                className="px-7 py-3 rounded-lg border-2 border-emerald-500/50 text-emerald-400 font-light hover:border-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vincent-tran-789440381"
                className="px-7 py-3 rounded-lg border-2 border-emerald-500/50 text-emerald-400 font-light hover:border-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image Box */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="relative w-full h-full bg-neutral-900 rounded-2xl border border-emerald-500/30 p-1 overflow-hidden">
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

      {/* Contact Section */}
      {/* Education & Coursework Section */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 border-t border-emerald-500/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-gray-50">Education</h2>
            <div className="border-l-2 border-emerald-500/30 pl-6">
              <h3 className="text-lg font-light text-gray-100 mb-1">Bachelor of Science in Computer Science</h3>
              <p className="text-emerald-400 font-light text-sm mb-3">Georgia Institute of Technology, College of Computing</p>
              <p className="text-gray-400 font-light text-sm mb-2">Atlanta, Georgia</p>
              <p className="text-gray-400 font-light text-sm mb-1">Graduation: December 2025</p>
              <p className="text-gray-400 font-light text-sm">GPA: 3.47 (major)</p>
            </div>
          </div>

          {/* Coursework */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-gray-50">Coursework</h2>
            <div className="grid grid-cols-1 gap-3">
              {['Data Structures & Algorithms', 'Object-Oriented Design', 'Databases', 'Machine Learning', 'Artificial Intelligence', 'Data Visualization', 'Computer Graphics', 'UI/UX', 'Media/Device Architecture'].map((course) => (
                <div key={course} className="bg-neutral-900/50 border border-emerald-500/20 rounded-lg px-4 py-2 text-gray-300 font-light text-sm">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 border-t border-emerald-500/10">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-gray-50">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-neutral-900/50 border border-emerald-500/20 rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-lg font-light text-gray-100 group-hover:text-emerald-400 transition-colors mb-1">Student Assistant</h3>
              <p className="text-emerald-400 font-light text-sm mb-1">Georgia Tech Tutoring and Academic Support</p>
              <p className="text-gray-500 font-light text-sm">Dec 2024 - Dec 2025</p>
            </div>
            <ul className="space-y-2">
              {[
                'Facilitated access to campus assistive services for 5,500+ students weekly using internal software systems',
                'Analyzed 1500 data points to quantify impact and enhance efficiency',
                'Scheduled and managed 90+ tutoring sessions, overseeing 110+ hours of operations'
              ].map((item, i) => (
                <li key={i} className="text-gray-400 font-light text-sm flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group bg-neutral-900/50 border border-emerald-500/20 rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-lg font-light text-gray-100 group-hover:text-emerald-400 transition-colors mb-1">Restaurant Waiter/Cashier</h3>
              <p className="text-emerald-400 font-light text-sm mb-1">Super Pho</p>
              <p className="text-gray-500 font-light text-sm">Dec 2019 - Aug 2023</p>
            </div>
            <ul className="space-y-2">
              {[
                'Operated POS systems to manage high-volume transactions with speed and accuracy',
                'Communicated detailed menu knowledge and dietary information to customers',
                'Resolved customer issues with professionalism and efficiency',
                'Upsold featured items through tailored recommendations'
              ].map((item, i) => (
                <li key={i} className="text-gray-400 font-light text-sm flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 border-t border-emerald-500/10">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-gray-50">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="group bg-neutral-900/50 border border-emerald-500/20 rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-gray-100 group-hover:text-emerald-400 transition-colors mb-2">
                Spotify Analytics Dashboard
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spotify API', 'Firebase', 'OpenAI'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-light rounded-full border border-emerald-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Developed a backend-driven music analytics application similar to Spotify Wrapped',
                'Implemented OAuth authentication and Spotify API integrations to securely retrieve and process user data',
                'Integrated OpenAI APIs to generate artist recommendations and AI-driven listening insights',
                'Utilized Firebase Cloud Storage to persist user data and support cross-device synchronization'
              ].map((item, i) => (
                <li key={i} className="text-gray-400 font-light text-sm flex gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://sites.google.com/view/cs-2340-team-5-spotify-wrapped/project-description-and-process?authuser=0" className="inline-flex items-center gap-2 text-emerald-400 font-light hover:text-emerald-300 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="group bg-neutral-900/50 border border-emerald-500/20 rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-gray-100 group-hover:text-emerald-400 transition-colors mb-2">
                Smart Home Maintenance App
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React Native', 'Node.js', 'MySQL', 'Google Cloud', 'OpenAI'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-light rounded-full border border-emerald-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Designed and implemented RESTful backend services using Express.js and MySQL for task scheduling',
                'Integrated Google Maps API and OpenAI APIs for location-based services and AI maintenance guidance',
                'Deployed and managed relational data using Google Cloud SQL for reliability and scalability',
                'Connected backend services to React Native frontend supporting cross-platform mobile clients'
              ].map((item, i) => (
                <li key={i} className="text-gray-400 font-light text-sm flex gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://docs.google.com/presentation/d/1Oa_wFP8EjcpmFjLrQhA4Yc2AlGI-frKPavw7rBqI_8M/edit?usp=sharing" className="inline-flex items-center gap-2 text-emerald-400 font-light hover:text-emerald-300 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 3 */}
          <div className="group bg-neutral-900/50 border border-emerald-500/20 rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-gray-100 group-hover:text-emerald-400 transition-colors mb-2">
                Cosmic Voyage – Interactive 3D Space Rendering
              </h3>
              <div className="flex flex-wrap gap-2">
                {['C++', 'OpenGL', 'GLSL'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-light rounded-full border border-emerald-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Engineered a real-time rendering system with procedural environments and animation pipelines',
                'Implemented GPU shaders and multi-octave noise functions for dynamic visual effects',
                'Built particle systems and orbital mechanics with correct depth sorting and transparency handling',
                'Optimized performance using instanced rendering and object pooling to sustain 60+ FPS'
              ].map((item, i) => (
                <li key={i} className="text-gray-400 font-light text-sm flex gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://www.youtube.com/watch?v=vvPgb1zU2Po" className="inline-flex items-center gap-2 text-emerald-400 font-light hover:text-emerald-300 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 4 */}
          <div className="group bg-neutral-900/50 border border-emerald-500/20 rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-gray-100 group-hover:text-emerald-400 transition-colors mb-2">
                Potato Panic – Retro Gameboy Advance Survival Game
              </h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'GBA SDK'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-light rounded-full border border-emerald-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Designed and developed a wave-based action game for the GBA featuring animated sprites and parallax scrolling',
                'Implemented enemy AI, boss battles, and custom cheat code mechanics that enhanced special attacks',
                'Integrated tile/palette manipulation, real-time audio mixing, and multiple game states using Mode 0 graphics'
              ].map((item, i) => (
                <li key={i} className="text-gray-400 font-light text-sm flex gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://vincenttran8928.wixsite.com/potato-panic-1" className="inline-flex items-center gap-2 text-emerald-400 font-light hover:text-emerald-300 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 5 */}
          <div className="group bg-neutral-900/50 border border-emerald-500/20 rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-gray-100 group-hover:text-emerald-400 transition-colors mb-2">
                Interactive Data Story – Web Visualization
              </h3>
              <div className="flex flex-wrap gap-2">
                {['D3.js', 'JavaScript', 'HTML/CSS', 'GitHub Pages'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-light rounded-full border border-emerald-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Designed and developed an interactive, narrative-driven web visualization using D3.js',
                'Implemented dynamic charts with filtering, brushing, and animation techniques',
                'Explored and communicated insights from real-world datasets',
                'Hosted as a public site via GitHub Pages'
              ].map((item, i) => (
                <li key={i} className="text-gray-400 font-light text-sm flex gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://auddin8git.github.io/CS4460FinalTeamWe-3InfoVis/" className="inline-flex items-center gap-2 text-emerald-400 font-light hover:text-emerald-300 transition-colors text-sm">
              View Project →
            </a>
          </div>

          {/* Project 6 */}
          <div className="group bg-neutral-900/50 border border-emerald-500/20 rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg font-light text-gray-100 group-hover:text-emerald-400 transition-colors mb-2">
                Nomadic Radio – Adaptive Auditory Notification Simulator
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Processing'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-light rounded-full border border-emerald-500/20">
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
                <li key={i} className="text-gray-400 font-light text-sm flex gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://drive.google.com/file/d/1p38nKnL21Jcq92YNST9LMyNuoyo7MQWq/view?usp=sharing" className="inline-flex items-center gap-2 text-emerald-400 font-light hover:text-emerald-300 transition-colors text-sm">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-12 md:py-16 border-t border-emerald-500/10">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-gray-50">Contact</h2>
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-emerald-400 font-light text-sm mb-2">Email</p>
            <a href="mailto:vincenttran8928@gmail.com" className="text-gray-300 font-light hover:text-emerald-400 transition-colors">
              vincenttran8928@gmail.com
            </a>
          </div>
          <div>
            <p className="text-emerald-400 font-light text-sm mb-2">Location</p>
            <p className="text-gray-300 font-light">Atlanta, GA</p>
          </div>
        </div>
      </section>

    </main>
  );
}
