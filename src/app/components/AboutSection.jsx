"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 grid grid-cols-2 gap-x-8 gap-y-2">
        <li>Python</li>
        <li>C++</li>
        <li>C#</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Unity Engine</li>
        <li>GoDot</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Iloilo National High School, STEM</li>
        <li>West Visayas State University, BS in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Internship: TBA</li>
        <li>Worked on various projects using Python and C++</li>
        <li>Developed games using Unity Engine</li>
      </ul>
    ),
  },
];

const SKILLS_ICONS = [
  { name: "Python", src: "images/skills_icon/python.png" },
  { name: "C++", src: "images/skills_icon/c++.png" },
  { name: "C#", src: "images/skills_icon/C.png" },
  { name: "HTML", src: "images/skills_icon/HTML.png" },
  { name: "CSS", src: "images/skills_icon/CSS.png" },
  { name: "JavaScript", src: "images/skills_icon/JS.png" },
  { name: "Unity", src: "images/skills_icon/unity.png" },
  { name: "GoDot", src: "images/skills_icon/godot.png" },
];

const SkillCarousel = ({ position }) => {
  return (
    <div className={`w-full overflow-hidden ${position === "top" ? "mb-12" : "mt-12"}`}>
      <div
        className={`flex animate-scroll-${position}`}
        style={{ width: "calc(104px * 24)" }}
      >
        {[...SKILLS_ICONS, ...SKILLS_ICONS, ...SKILLS_ICONS].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 w-24 h-24 bg-white/10 rounded-xl p-3 flex items-center justify-center mx-1"
          >
            <img src={skill.src} alt={skill.name} className="w-16 h-16 object-contain" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-104px * 8));
          }
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(calc(-104px * 8));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-top {
          animation: scroll-right 15s linear infinite;
        }
        .animate-scroll-bottom {
          animation: scroll-left 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-20 px-6 bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-400 rounded-xl mt-5">
      <div className="max-w-7xl mx-auto space-y-16">
        <SkillCarousel position="top" />

        <div className="md:grid md:grid-cols-2 gap-16 items-start">
          {/* About Me */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">
              I am a Game Developer and Back-End programmer with a passion for solving
              problems and creating meaningful experiences. I’ve worked with Python, C++,
              C#, HTML, CSS, JavaScript, Unity, and GoDot. I also use platforms like GitHub
              and HuggingFace for collaboration. I'm always eager to learn and expand my
              skills.
            </p>
          </div>

          {/* Tabs: Skills / Education / Experience */}
          <div>
            <div className="flex space-x-4 mb-6">
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                Skills
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                Education
              </TabButton>
              <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                Experience
              </TabButton>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>

        <SkillCarousel position="bottom" />
      </div>
    </section>
  );
};

export default AboutSection;
