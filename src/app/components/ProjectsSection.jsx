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
<<<<<<< HEAD
        description: "Done for my Highschool Project, iTestic is a gamified learning tool for kids with Autism that struggles with focus",
        image: "/images/projects/iTestic.png",
        tag: ["All", "Software Development"],
=======
        description: "First Ever Game I've created, pokemon inspired",
        image: "/images/projects/iTestic.png",
        tag: ["All", "Game"],
>>>>>>> 2c9fcdfab3f54911ae4caf569433849229d5ddb1
    },
    {
        id: 3,
        title: "Damuhal's Cafe",
<<<<<<< HEAD
        description: "Cafe website created for Web Dev course",
=======
        description: "Website we collectively created for Web Dev course",
>>>>>>> 2c9fcdfab3f54911ae4caf569433849229d5ddb1
        image: "/images/projects/CoffeeShop.png",
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "Sur",
<<<<<<< HEAD
        description: "Rogue-like game created as a startup project (WIP)",
        image: "/images/projects/Sur.png",
        tag: ["All", "Software Development"],
    },
    {
        id: 5,
        title: "SmartSense",
        description: "Thesis Project, utilizing AR to aid hearing-impaired individuals.",
        image: "/images/projects/SmartSense.png",
        tag: ["All", "Software Development"],
=======
        description: "Rogue-like game created as a startup project",
        image: "/images/projects/Sur.png",
        tag: ["All", "Game"],
>>>>>>> 2c9fcdfab3f54911ae4caf569433849229d5ddb1
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
<<<<<<< HEAD
                <ProjectTag onClick={handleTagChange} name="Web Development" isSelected={tag === "Web"}/>
                <ProjectTag onClick={handleTagChange} name="Software Development" isSelected={tag === "Software Development"}/>
=======
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
                <ProjectTag onClick={handleTagChange} name="Game" isSelected={tag === "Game"}/>
>>>>>>> 2c9fcdfab3f54911ae4caf569433849229d5ddb1
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