import React, { useState } from "react";
import Project from "../components/Project.jsx"
import { projects } from "../data/Projects.js";
import Layout from "../components/Layout.jsx"


const Projects = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Game Development", "App Development"]
    
    const filteredProjects = projects.filter((project) => 
        selectedCategory === "All" ? true : project.category === selectedCategory    
    );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };


    return <Layout>
        
        {/* Row of Filters */}
        <div className="category-filters">
            {categories.map((category) => (
                <button 
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={selectedCategory === category ? "active" : ""}
                    >
                        {category}
                    </button>
            ))}
        </div>


        {/* Projects List */}
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '20px', 
            padding: '25px 0px', 
            }}>

            {filteredProjects.map((project) => (
                <Project 
                    name={project.name}
                    tools={project.tools}
                    images={project.images}
                    description={project.description}
                    link={project.link}
                    linkName={project.linkName}
                />
            ))}
        </div>
    </Layout>

};

export default Projects;

