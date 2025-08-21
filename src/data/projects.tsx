import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiChartdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiReacthookform, 
  SiZod, 
  SiArduino,
} from "react-icons/si";
import { TbTopologyStar3 } from "react-icons/tb";  
import { Blocks, Brain, Code, Cpu } from "lucide-react";
import { VscSymbolNamespace } from "react-icons/vsc"; // example fallback
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
    streamlit: {
    title: "Streamlit",
    bg: "#FF4B4B",
    fg: "#fff",
    icon: <Blocks size={18} />,
  },
  langchain: {
    title: "LangChain",
    bg: "#2B2B2B",
    fg: "#fff",
    icon: <Brain size={18} />,
  },
    geminiAPI: {
    title: "Gemini API",
    bg: "#4285F4",
    fg: "#fff",
    icon: <Cpu size={18} />,
  },
    // ✅ Add Chart.js here
  chartjs: {
    title: "Chart.js",
    bg: "black",
    fg: "white",
    icon: <SiChartdotjs />, // from react-icons/si
  },
  // ✅ Add MongoDB (alias for consistency with your usage)
  mongodb: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },

 zustand: {
    title: "Zustand",
    bg: "#3E3E3E",   // or pick a nice color for background
    fg: "white",
    icon: <VscSymbolNamespace />,
  },
  nextAuth: {
    title: "NextAuth.js",
    bg: "#000000",   // NextAuth doesn't have official brand color, black works
    fg: "white",
    icon: <VscSymbolNamespace />,
  },
  api: {
    title: "Next.js API Routes",
    bg: "#000000",   // matches Next.js
    fg: "white",
    icon: <VscSymbolNamespace />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  reactFlow: {
  title: "React Flow",
  bg: "blue",
  fg: "white",
  icon: <TbTopologyStar3 />,
},
 reactHookForm: {
    title: "React Hook Form",
    bg: "navy",
    fg: "white",
    icon: <SiReacthookform />,
  },
  zod: {
    title: "Zod",
    bg: "yellow",
    fg: "black",
    icon: <SiZod />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
 
  // +
{ // 01. HR Dashboard Project
  id: "hrdashboard",
  category: "Web Development",
  title: "HR Dashboard",
  src: "/assets/projects-screenshots/hrdashboard/1.png",
  screenshots: ["1.png", "2.png", "3.png","4.png","5.png"],
  live: "https://your-hr-dashboard-link.vercel.app/", // replace with your live demo
  github:"https://github.com/MihirRajChowdhury/hr-dashboard", // replace with your repo
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.chartjs, // or recharts if you used that
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.mongodb, // adjust to your stack
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          A feature-rich HR Dashboard designed to streamline employee management and performance
          tracking for organizations. 📊👥  
          It includes role-based authentication, interactive charts for HR analytics, and
          a responsive design for seamless use across devices.  
          Built with modern tools like React, Tailwind, and Chart.js, this project highlights
          strong skills in frontend engineering and data visualization. ⚡  
          Perfect for showcasing my ability to solve real business problems with technology. 🚀
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `${BASE_PATH}/hrdashboard/1.png`,
            `${BASE_PATH}/hrdashboard/2.png`,
            `${BASE_PATH}/hrdashboard/3.png`,
            `${BASE_PATH}/hrdashboard/4.png`,
            `${BASE_PATH}/hrdashboard/5.png`,
          ]}
        />
      </div>
    );
  },
},

{ //  02. Trinoro project
  id: "trinoro",
  category: "Meditation & Wellness",
  title: "Trinoro: Meditation & Wellness Platform",
  src: "/assets/projects-screenshots/trinoro/1.png",
  screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"], // update with actual screenshot files
  skills: {
    frontend: [
      PROJECT_SKILLS.next,          // Next.js
      PROJECT_SKILLS.ts,            // TypeScript
      PROJECT_SKILLS.react,         // React
      PROJECT_SKILLS.tailwind,      // Tailwind CSS
      PROJECT_SKILLS.zustand,
      PROJECT_SKILLS.html,          // HTML5 (via icons)
      PROJECT_SKILLS.css,           // CSS3
    ],
    backend: [
      PROJECT_SKILLS.nextAuth,      // NextAuth.js (add to PROJECT_SKILLS)
      PROJECT_SKILLS.mongo,         // MongoDB
      PROJECT_SKILLS.api,           // Custom Next.js API routes (album icon maybe)
    ],
  },
  live: "https://trinoro.vercel.app/",
  github: "https://github.com/MihirRajChowdhury/Trinoro",
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Trinoro: A sleek, wellness-focused meditation platform with journaling, ambient sound, streak tracking, and authentication.
        </TypographyP>
        <TypographyP className="font-mono">
          Designed for mindful living, Trinoro blends immersive UX with essential wellness tools—set meditation timers, create ambient sound mixes, track your mental health with mood journals, monitor streaks, and log in securely.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
        <p className="font-mono mb-2">
          • Custom meditation timer with animations<br />
          • Ambient sound mixer integrated via Freesound API<br />
          • Journaling interface with mood tracking, tagging & search<br />
          • Meditation streak dashboard and achievement badges<br />
          • Secure user login via Google OAuth and protected routes
        </p>

        <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
        <p className="font-mono mb-2">
          • Next.js & React (TS) • Tailwind CSS • Zustand • Lucide Icons<br />
          • NextAuth.js for authentication • MongoDB for data persistence<br />
          • Audio mixing with HTML5 & Freesound API
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/trinoro/1.png`,
            `${BASE_PATH}/trinoro/2.png`,
            `${BASE_PATH}/trinoro/3.png`,
            `${BASE_PATH}/trinoro/4.png`,
            `${BASE_PATH}/trinoro/5.png`,
            `${BASE_PATH}/trinoro/6.png`,
          ]}
        />
      </div>
    );
  },
},

{ // 03: Chatbot Flow Builder project
  id: "chatbotflowbuilder",
  category: "Visual Flow Designer",
  title: "Chatbot Flow Builder",
  src: "/assets/projects-screenshots/chatbotflowbuilder/1.png", // update with your screenshot path
  screenshots: [
    "1.png",
    "2.png",
    "3.png"
  ],
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.reactFlow,    // add to PROJECT_SKILLS
    ],
    backend: [],
  },
  live: "https://chatbot-flow-builder-eta-two.vercel.app/",
  github: "https://github.com/MihirRajChowdhury/Trinoro/", // replace with actual Chatbot Flow Builder repo if different
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Chatbot Flow Builder — a drag-and-drop visual interface for designing chatbot conversation flows.
        </TypographyP>
        <TypographyP className="font-mono">
          This tool helps you effortlessly craft intricate chatbot paths with an intuitive canvas powered by React Flow. Create, connect, and customize nodes with ease—then save or retrieve your flows seamlessly.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">
          • Build conversation flows visually using drag-and-drop nodes<br />
          • Customize different node types (messages, questions, API actions)<br />
          • Save and load flows to local storage for easy reuse
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/chatbotflowbuilder/1.png`,
            `${BASE_PATH}/chatbotflowbuilder/2.png`,
            `${BASE_PATH}/chatbotflowbuilder/3.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
        <p className="font-mono mb-2">
          • React + React Flow • JavaScript • Tailwind CSS • Local Storage for persistence
        </p>
      </div>
    );
  },
},

{ // 04: Form Builder project
  id: "formbuilder",
  category: "Form Creation Tool",
  title: "Form Builder",
  src: "/assets/projects-screenshots/formbuilder/1.png", // update with actual path
  screenshots: [
    "1.png",
    "2.png",
    "3.png"
  ],
  skills: {
    frontend: [
      PROJECT_SKILLS.next,        // Assuming Next.js
      PROJECT_SKILLS.react,       // React.js
      PROJECT_SKILLS.ts,          // TypeScript if used
      PROJECT_SKILLS.tailwind,    // Tailwind CSS
      PROJECT_SKILLS.reactHookForm, // add this to PROJECT_SKILLS
      PROJECT_SKILLS.zod,         // add this to PROJECT_SKILLS
    ],
    backend: [
      PROJECT_SKILLS.api,         // If using API routes or similar
    ],
  },
  live: "https://your-formbuilder-live-link.vercel.app/",  // replace with actual deployed URL
  github: "https://github.com/MihirRajChowdhury/Form-Builder",
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Form Builder — Drag-and-build interface for creating custom forms with real-time validation.
        </TypographyP>
        <TypographyP className="font-mono">
          Build forms effortlessly using a visual interface. Define fields, configure validation rules with Zod, integrate with React Hook Form, and preview your form live—all tailored for clean developer experience and high usability.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
        <p className="font-mono mb-2">
          • Add multiple field types (text, select, checkbox, etc.)<br />
          • Live form validation powered by Zod<br />
          • Preview form and output JSON for easy integration<br />
          • Responsive layout with Tailwind styling<br />
          • Seamless data handling via React Hook Form
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/formbuilder/1.png`,
            `${BASE_PATH}/formbuilder/2.png`,
            `${BASE_PATH}/formbuilder/3.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
        <p className="font-mono mb-2">
          • Next.js & React (TypeScript) • Tailwind CSS • React Hook Form • Zod for validation • Next.js API Routes (if applicable)
        </p>
      </div>
    );
  },
},

{ // 05: AI-Powered Text Rewriter
  id: "jubilant-doodle-ai",
  category: "AI Text Tools",
  title: "AI-Powered Text Rewriter",
  src: "/assets/projects-screenshots/jubilant-doodle-ai/1.png", // update accordingly
  screenshots: ["1.png"], // actual snapshot filenames
  skills: {
    frontend: [
      PROJECT_SKILLS.streamlit,  // needs addition
      PROJECT_SKILLS.langchain,  // needs addition
      PROJECT_SKILLS.python,     // already present
    ],
    backend: [
      PROJECT_SKILLS.geminiAPI,  // needs addition (Gemini model)
    ],
  },
  live: "https://jubilant-doodle-ai.streamlit.app/",
  github: "https://github.com/MihirRajChowdhury/jubilant-doodle-AI",
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          AI-Powered Text Rewriter – instantly rewrite your drafts into different tones or dialects.
        </TypographyP>
        <TypographyP className="font-mono">
          Paste your text, pick a tone (Formal, Bold, Geeky, etc.) or dialect (American, Indian, British), and this tool, powered by Gemini via LangChain, generates a polished version—securely, via Streamlit inputs.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
        <p className="font-mono mb-2">
          • Multiple tones & dialects<br />
          • Powered by Gemini 2.0 Flash via LangChain<br />
          • Secure API key input via Streamlit UI
        </p>

        <SlideShow images={[
          `${BASE_PATH}/jubilant-doodle-ai/1.png`
        ]} />
      </div>
    );
  },
},

{ //06: Blog Post Generator
  id: "blog-post-generator",
  category: "AI Content Creation",
  title: "Blog Post Generator",
  src: "/assets/projects-screenshots/blog-post-generator/1.png", // update accordingly
  screenshots: ["1.png"],
  skills: {
    frontend: [
      PROJECT_SKILLS.streamlit,
      PROJECT_SKILLS.langchain,
      PROJECT_SKILLS.python,
    ],
    backend: [
      PROJECT_SKILLS.geminiAPI,
    ],
  },
  live: "https://blog-posts-here.streamlit.app/", // if deployed
  github: "https://github.com/MihirRajChowdhury/blog-post-generator",
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Blog Post Generator – generate polished 400-word blog posts in startup & VC tone.
        </TypographyP>
        <TypographyP className="font-mono">
          Built with Streamlit and LangChain using Gemini 2.0, this app lets you input a topic, then returns a formatted blog post with word count—delivered in a clean, minimal interface.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
        <p className="font-mono mb-2">
          • 400-word posts generated automatically<br />
          • Startup/VC tone targeting<br />
          • Word count automatically displayed<br />
          • Gemini model via LangChain backend
        </p>

        <SlideShow images={[
          `${BASE_PATH}/blog-post-generator/1.png`
        ]} />
      </div>
    );
  },
},

];
export default projects;
