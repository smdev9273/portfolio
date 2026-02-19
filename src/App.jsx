import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

/** Variables */
const FIRST_NAME = "Sergii";
const LAST_NAME = "Minchuk";
const TITLE1 = "Senior Web Developer";
const TITLE2 = "Blockchain / Web3 Engineer";
const LOCATION = "Pidvolochysk, Ternopil, Ukraine"
const ABOUT = `Senior Web Developer with <b>8+ years of experience</b> building modern, scalable and high-performance web applications and Web3/blockchain-based platforms.<br/>
                Strong background in frontend and backend development, smart contract development and integration, decentralized applications (dApps), and performance optimization.<br/>
                Skilled in modern frameworks, cloud deployment, and secure blockchain development.`
const EMAIL_ADDR = "smdev9273@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/smdev9273";
const GITHUB_URL = "https://github.com/smdev9273";
const EXPERIENCES = [
  {
    title: "Full Stack Web Developer",
    company: "Advanced Practice Provider Executives, Inc. (APPex)",
    date: "May 2017 - Dec 2025",
    description: [
      "Built scalable Wordpress websites used by 200k+ users.",
      "Designed REST APIs with PHP and MySQL.",
      "Created custom Wordpress plugins",
      "Integrated with various of Third-party services such as SurveyMonkey, ProtorFree and so on.",
      "Improved system performance by 40% via caching & optimization.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Expensify",
    date: "May 2022 - Dec 2022",
    description: [
      "Updated a mobile application with React Native.",
      "Fixed the bugs in PHP Backend & REST APIs.",
      "Implemented CI/CD pipelines for automated deployments.",
    ],
  },
  {
    title: "Blockchain/Web3 Developer",
    company: "Samurai Cats by Hiro Ando",
    date: "Jun 2019 - Feb 2022",
    description: [
      "Created the smart contract for NFT and deployed on Ethereum network",
      "Listed in Opensea",
      "Built the NFT website with Metaverse",
    ],
  },
  {
    title: "Web Developer",
    company: "Web Development Studio",
    date: "Jan 2015 - May 2018",
    description: [
      "Developed SaaS platform with React + Node.js.",
      "Deployed production systems using Docker + AWS.",
      "Worked on frontend UI development using React.",
      "Built reusable UI components for multiple client projects.",
      "Built scalable Backend and REST APIs with Node.js and PHP",
    ],
  },
];
const SKILLS = [
  {
    title: "Frontend",
    items: [
      "React.js, Next.js, Vue.js",
      "TypeScript, JavaScript (ES6+)",
      "Tailwind CSS, Material UI, Bootstrap",
      "Redux, Zustand, Context API",
      "Web3.js, Ethers.js, Wagmi, RainbowKit"
    ]
  },
  {
    title: "Backend & CMS",
    items: [
      "Node.js, Express.js, NestJS",
      "PHP, Laravel, Wordpress",
      "Python (FastAPI / Django) (optional)",
      "REST APIs, GraphQL",
      "Microservices Architecture",
    ]
  },
  {
    title: "Blockchain / Web3",
    items: [
      "Ethereum, Polygon, BSC",
      "Smart Contracts (Solidity)",
      "Hardhat, Truffle, Foundry",
      "NFT Minting, ERC-20, ERC-721, ERC-1155",
      "DeFi Integrations (staking, liquidity pools)",
      "MetaMask, WalletConnect Integration",
    ]
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL, MySQL, MongoDB",
      "Redis, Firebase",
      "IPFS, Pinata",
    ]
  },
  {
    title: "Cloud / DevOps",
    items: [
      "AWS (EC2, S3, Lambda, RDS), DigialOcean, Google Cloud",
      "Docker, Kubernetes",
      "CI/CD (GitHub Actions, GitLab CI, Jenkins)",
      "Vercel, Netlify, Heroku",
    ]
  },
  {
    title: "Other",
    items: [
      "Agile/Scrum, Jira",
      "Unit Testing (Jest, Mocha, Cypress)",
      "Security & Performance Optimization",
      "Clean Architecture, Design Patterns",
    ]
  },
];
const PROJECTS = [
  {
    title: "Portfolio",
    desc: "My modern portfolio built with React + Tailwind.",
    link: "https://github.com/smdev9273/portfolio",
  },
  {
    title: "APPex",
    desc: "Official website of Advanced Practice Provider Executives, Inc built with WordPress",
    link: "https://appexecutives.org",
  },
  {
    title: "SamuraiCats",
    desc: "NFT art project called Samurai Cats - created website, NFT smart contract and Metaverse platform",
    link: "https://samuraicats.io",
  },
]

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDarkMode(saved === "dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#0b0f19] dark:text-gray-100 transition-colors duration-300">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-bold text-lg tracking-wide">
            {FIRST_NAME}<span className="text-blue-500"> {LAST_NAME}</span>
          </h1>

          <div className="flex items-center gap-4">
            <a href="#about" className="text-sm hover:text-blue-500 transition">
              About
            </a>
            <a href="#skills" className="text-sm hover:text-blue-500 transition">
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-blue-500 transition"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-blue-500 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-blue-500 transition"
            >
              Contact
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-2 rounded-xl bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-10"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {TITLE1} <br />
              <span className="text-blue-500">{TITLE2}</span>
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
              I build scalable web systems, lead engineering teams, and deliver
              modern UI experiences with clean architecture and high performance.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-5 py-3 rounded-2xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
              >
                Contact Me
              </a>

              <a
                href="#projects"
                className="px-5 py-3 rounded-2xl border border-gray-300 dark:border-white/10 hover:border-blue-500 hover:text-blue-500 transition"
              >
                View Projects
              </a>

              <a
                href="/sm_resume.pdf"
                target="_blank"
                className="px-5 py-3 rounded-2xl border border-gray-300 dark:border-white/10 hover:border-blue-500 hover:text-blue-500 transition"
              >
                Download CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>📍 {LOCATION}</span>
              <span>💼 Open to Remote</span>
              <span>🚀 Available Now</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-40 h-40 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-blue-500/30">
              SM
            </div>
          </div>
        </motion.div>
      </header>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-4 pb-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-bold">ABOUT</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{__html: ABOUT}} />
        </motion.div>
      </section>

      {/* SKILLS */}
      {/* <section className="max-w-5xl mx-auto px-4 pb-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-bold">SKILLS</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Tools and technologies I use daily.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
              "Tailwind",
              "AWS",
              "Docker",
              "PostgreSQL",
              "Microservices",
              "System Design",
              "Leadership",
              "CI/CD",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* CORE SKILLS */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-4 pb-14"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-bold">CORE SKILLS</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Tools and technologies I use daily.
          </p>

          {/* <div className="mt-10 relative space-y-10"> */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                {/* <div className="absolute -left-[37px] top-2 w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40"></div> */}

                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <h4 className="text-lg text-blue-500 font-semibold">{skill.title}</h4>
                  </div>

                  {/* <p className="mt-1 text-blue-500 font-medium">
                    {job.company}
                  </p> */}

                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="max-w-5xl mx-auto px-4 pb-14"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-bold">PROFESSIONAL EXPERIENCE</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Career growth and leadership journey.
          </p>

          <div className="mt-10 relative border-l-2 border-blue-500/40 pl-6 space-y-10">
            {EXPERIENCES.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] top-2 w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40"></div>

                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <h4 className="text-lg font-semibold">{job.title}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {job.date}
                    </span>
                  </div>

                  <p className="mt-1 text-blue-500 font-medium">
                    {job.company}
                  </p>

                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                    {job.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-4 pb-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-bold">PROJECTS</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Some of my best engineering work.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 hover:border-blue-500 hover:-translate-y-1 transition transform duration-200"
              >
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {p.desc}
                </p>
                <p className="mt-4 text-blue-500 font-medium text-sm">
                  View Project →
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-4 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-bold">CONTACT</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Let’s connect and build something great.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <a
              href={`mailto:${EMAIL_ADDR}`}
              className="flex-1 text-center px-6 py-4 rounded-2xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
            >
              📧 Email
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              className="flex-1 text-center px-6 py-4 rounded-2xl border border-gray-300 dark:border-white/10 hover:border-blue-500 hover:text-blue-500 transition"
            >
              🔗 LinkedIn
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              className="flex-1 text-center px-6 py-4 rounded-2xl border border-gray-300 dark:border-white/10 hover:border-blue-500 hover:text-blue-500 transition"
            >
              💻 GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 dark:border-white/10 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} {FIRST_NAME} {LAST_NAME} | ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
