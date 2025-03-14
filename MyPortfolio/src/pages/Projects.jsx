import React from 'react';

const Projects = () => {
    const projects = [
        { title: "SafeDating (3D Game)", description: "Created a safe, kid-friendly 3D open-world dating game at DPL Studios, where players explore diverse \n" +
                "locations and engage in conversations with characters, utilizing Unity and Blender across three levels. ", tech: "C#, Unity, Blender, Git, JIRA, Confluence, Teamwork" },
        { title: "Knights Divide (2D Game)", description: "Designed and developed a 2D action RPG with roguelike elements. Implemented dual-character gameplay \n" +
                "with unique melee and ranged combat mechanics, progression systems, and pixelated medieval art.", tech: " C#, Unity, Blender, Git, PLASTIC SCM,  Teamwork" },
        { title: "Community@Dal (Social Media App)", description: "Developed a social media application for Dalhousie University students, enabling features such as posting \n" +
                "updates, commenting, adding/removing friends, joining groups, searching for names and groups, editing \n" +
                "profiles, and setting status. \n", tech: "React, SpringBoot, MySQL, Git, CI/CD, Docker, Postman" }
    ];

    return (
        <div className="container">
            <h1 className="mb-4">My Projects</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <small className="text-muted">{project.tech}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;