import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          Hi, I’m <span className="text-amber-600">Harsh Bamaniya</span> 👋
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Frontend Developer passionate about building scalable, performant web
          applications using <strong>React</strong>, modern JavaScript, and
          clean UI principles.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <UserClass />

        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            My Journey 🚀
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            I am an aspiring Frontend Developer currently working in an IT
            environment and continuously improving my skills through hands-on
            projects and deep learning.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            I am learning React in depth from{" "}
            <span className="font-semibold text-slate-800">
              Namaste React by Akshay Saini
            </span>
            , focusing on how React works internally — reconciliation, hooks,
            performance optimization, and scalable architecture.
          </p>

          <p className="text-slate-600 leading-relaxed">
            My goal is to become a strong software engineer who writes
            maintainable code and delivers delightful user experiences.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Skills & Tools 🛠️
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "JavaScript (ES6+)",
            "Redux Toolkit",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "Git & GitHub",
            "REST APIs",
            "JEST",
          ].map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2 
                bg-slate-100 
                text-slate-700 
                rounded-full 
                font-medium 
                shadow-sm
                hover:bg-amber-100
                transition
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-3">
          Let’s Build Something Amazing 💡
        </h3>

        <p className="text-slate-600 mb-6">
          I love collaborating, learning, and building real-world projects.
        </p>

        <a
          href="https://www.linkedin.com/in/harsh-bamaniya-b2b81b218/"
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            bg-amber-600 
            text-white 
            px-6 py-3 
            rounded-xl 
            font-semibold 
            shadow-lg
            hover:bg-amber-700
            transition
          "
        >
          Connect on LinkedIn
        </a>
      </section>
    </div>
  );
};

export default About;
