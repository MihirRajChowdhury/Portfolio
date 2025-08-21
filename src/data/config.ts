const config = {
  title: "Mihir Raj Chowdhury | Software Engineer",
  description: {
    long: "Explore the portfolio of Mihir, a Software Engineer experienced in frontend development with React, building interactive dashboards, and contributing to open-source projects. Skilled in modern web technologies, with hands-on experience from internships and personal projects. Passionate about creating impactful user experiences, solving real-world problems with technology, and continuously learning in the fast-paced tech world.",
    short:
      "Discover the portfolio of Mihir, a Software Engineer passionate about frontend development and open-source contributions.",
  },
  keywords: [
    "Mihir",
    "Mihir Raj Chowdhury",
    "mihirrajchowdhury",
    "Mihir portfolio",
    "portfolio",
    "Frontend Development",
    "React",
    "Next.js",
    "Open Source",
    "HR Dashboard project",
    "Interactive websites",
    "Software Engineer",
    "Web development",
    "UI/UX",
    "JavaScript",
    "TypeScript",
    "Langchain",
    "Python"
  ],
  author: "Mihir Raj Chowdhury",
  email: "rajmihir945@gmail.com", // replace with your real email
  site: "https://your-portfolio-link.com", // replace with your deployed portfolio link

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Rajmihir33", // your Twitter/X link
    linkedin: "https://www.linkedin.com/in/mihir-raj-chowdhury-02b339245/", // your LinkedIn link
    github: "https://github.com/MihirRajChowdhury/", // your GitHub link
  },
};
export { config };
