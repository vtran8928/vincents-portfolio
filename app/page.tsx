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
                href="https://drive.google.com/file/d/1-61T_1w71fF-S-OkJt6UX4D4MqKhrqpN/view?usp=sharing"
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
                {['Java', 'OpenAI API', 'Firebase', 'Spotify API', 'Android Studio'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-light rounded-full border border-emerald-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                'Developed a music analytics application displaying personalized listening statistics using Progressive Disclosure UI patterns',
                'Implemented OAuth 2.0 authentication and retrieved user listening data via Spotify Web API',
                'Generated personalized artist recommendations and lifestyle insights using OpenAI API with CoT prompting to improve recommendation logic',
                'Integrated Firebase Cloud Storage for cross-device data synchronization across user sessions'
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
                {['JavaScript', 'React Native', 'Node.js', 'SQL', 'OpenAI API', 'Google Maps API'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-light rounded-full border border-emerald-500/20">
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
                'Developed interactive 3D space environment with orbiting planets, rotating asteroids, animated starfields, and particle effects',
                'Wrote custom GLSL shaders implementing Phong lighting model for realistic lighting and atmospheric glow effects',
                'Optimized rendering to maintain 60+ FPS with 300+ moving objects using object pooling and frame-rate independence'
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
                'Developed a wave-based survival game for the GameBoy Advance with animated sprites, parallax scrolling, and dynamic visual effects',
                'Implemented enemy AI pathfinding, boss combat mechanics, and real-time VRAM manipulation using Mode 0 graphics'
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
                'Created narrative-driven web visualization exploring insights from real-world datasets, hosted via GitHub Pages',
                'Implemented interactive charts with filtering, brushing, and smooth animation transitions for enhanced user engagement'
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
