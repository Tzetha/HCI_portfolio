"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Website Portfolio for HCI",
        image: "/images/projects/Portfolio.png",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "iTestic",
        description: "First Ever Game I've created, pokemon inspired",
        image: "/images/projects/iTestic.png",
        tag: ["All", "Game"],
    },
    {
        id: 3,
        title: "Damuhal's Cafe",
        description: "Website we collectively created for Web Dev course",
        image: "/images/projects/CoffeeShop.png",
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "Sur",
        description: "Rogue-like game created as a startup project",
        image: "/images/projects/Sur.png",
        tag: ["All", "Game"],
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    // Filter projects based on selected tag
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-5">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
                <ProjectTag onClick={handleTagChange} name="Game" isSelected={tag === "Game"}/>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        imgUrl={project.image} 
                        title={project.title} 
                        description={project.description}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection