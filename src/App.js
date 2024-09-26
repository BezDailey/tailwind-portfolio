import React, {useState} from "react";
function App() {
  const [visibleSection, setVisibleSection] = useState("About");

  const changeVisibleSection = (section) => {
    setVisibleSection(section);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="min-h-screen flex flex-col lg:w-10/12 mx-auto">
        <header className="flex flex-col bg-slate-200 text-center p-8 gap-4 lg:flex-row lg:py-2 lg:justify-between lg:items-center">
          <div className="lg:flex lg:flex-row lg:gap-3 lg:justify-center lg:items-center">
            <h1 className="text-slate-700 text-3xl lg:text-xl">Jabez Dailey</h1>
            <p className="text-slate-800 lg:text-xs lg:font-light lg:mt-0.5">Solutions Engineering Analyst @ Deloitte</p>
          </div>
          <nav className="">
            <ul className="flex flex-row text-xs gap-1 hover:*:text-blue-500 hover:*:cursor-pointer mx-auto w-max *:text-slate-600 lg:*:text-sm lg:gap-2">
              <li><a onClick={() => changeVisibleSection('About')}>About</a></li>
              <li><a onClick={() => changeVisibleSection('Experience')}>Experience</a></li>
              <li><a onClick={() => changeVisibleSection('Education')}>Education</a></li>
              <li><a onClick={() => changeVisibleSection('Projects')}>Projects</a></li>
              <li><a onClick={() => changeVisibleSection('Blog')}>Blog</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">
          {visibleSection === "About" && (
            <section className="flex flex-col p-8 gap-9 text-lg">
              <section className="lg:grid lg:grid-cols-[1fr_3fr]">
                <h2 className="mb-3 text-2xl text-slate-700">About Me</h2>
                <div>
                  <p className="text-slate-600 mb-2">Hi, I'm Jabez Dailey. I recently graduated from Morehouse College with a degree in Computer Science and a minor in Mathematics. I have a deep passion for software engineering and data science, and I'm always looking for ways to innovate and create impactful projects.</p>
                  <p className="text-slate-600">Currently, I'm an solution's engineering analyst at Deloitte GPS, where I work with a talented team to solve complex problems for government clients. In addition to my professional work, I'm also developing a budgeting app designed to help people manage their finances effectively.</p>
                </div>
              </section>

              <section className="lg:grid lg:grid-cols-[3fr_1fr]">
                <h2 className="mb-3 text-2xl text-slate-700 lg:float-left lg:order-2">What I Enjoy</h2>
                <div>
                  <p className="text-slate-600 mb-2">Outside of my work, I have a passion for technology and personal growth. I love experimenting with new tech, exploring different coding techniques, and staying updated on trends in Artificial Intelligence and Machine Learning.</p>
                  <p className="text-slate-600">When I'm not coding or learning something new, you'll likely find me weight training, reading a good book, or listening to music to unwind.</p>
                </div>
              </section>
              <section className="lg:grid lg:grid-cols-[1fr_3fr]">
                <h2 className="mb-3 text-2xl text-slate-700">Professional Skills</h2>
                <div className="lg:flex lg:flex-col lg:gap-3">
                  <p className="text-slate-600">Programming Languages</p>
                  <div className="flex flex-wrap gap-1 *:px-4 *px-2 *:bg-slate-300 *:rounded-xl">
                    <p>Python</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>SQL</p>
                    <p>HTML</p>
                    <p>C</p>
                    <p>PHP</p>
                    <p>Hacklang</p>
                    <p>Vim Script</p>
                    <p>CSS</p>
                  </div>
                  <p className="text-slate-600">Tools & Technologies</p>
                  <div className="flex flex-wrap gap-1 *:px-4 *px-2 *:bg-slate-300 *:rounded-xl">
                    <p>React</p>
                    <p>Flask</p>
                    <p>RESTful API Development</p>
                    <p>MySQL</p>
                    <p>phpMyAdmin</p>
                    <p>Docker</p>
                    <p>Git</p>
                    <p>PHPMailer</p>
                  </div>
                </div>
              </section>
            </section>
          )}


          {visibleSection === "Experience" && (
            <section>
              <h1>Experience</h1>
            </section>
          )}

          {visibleSection === "Education" && (
            <section>
              <h1>Education</h1>
            </section>)}

          {visibleSection === "Project" && (
            <section>
              <h1>Projects</h1>
            </section>)}

          {visibleSection === "Blog" && (
            <section>
              <h1>Blog</h1>
            </section>)}

        </main>
        <footer className="min-w-full h-20 bg-slate-500"></footer>
      </div>
    </div>
  );
}

export default App;
