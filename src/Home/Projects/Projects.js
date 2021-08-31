import "./Projects.css";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";

function ProjectRow(props){
    let {projects} = props;
    return (
        <>
            <div className="row">
                {projects}
            </div>
            <br /><br />
        </>
    );
}

function Projects(props) {
    let { projectData } = props;
    if(projectData == null){
        let featuredProjects = [
            {
                projectTitle: "eStudier",
                projectTagline: "Pen down your daily thoughts in a more accessible way!",
                projectDetails: "Thoughts aim to provide you a platform to write down about your day. Write down your thoughts and write about your experiences.",
                projectThumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-12073.appspot.com/o/WhatsApp%20Image%202021-06-27%20at%2015.47.33_google-pixel4-ohsoorange-portrait.png?alt=media&token=0c1b9ec0-76a8-48be-9898-b18e8e0020cc",
                website: "https://youtu.be/ov1BuNFTgw8"
            },
            {
                projectTitle: "AgroTech (In process)",
                projectTagline: "Reshaping the way modern India cooks!",
                projectDetails: "Cuisinier is a smart platform where the app suggests the most optimum usage of the ingredients being used to prepare a particular dish.",
                projectThumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-12073.appspot.com/o/Homepage_google-pixel4-ohsoorange-portrait.png?alt=media&token=5d56e610-6439-4023-afc8-b1f92ab3c13b",
                website: "https://the-cuisinier.co/"
            },
            {
                projectTitle: "Niche (In process)",
                projectTagline: "A mobile app to play rock paper scissors online!",
                projectDetails: "The idea was to build a Mobile game purely based on stream data events, state management techniques and database operations.",
                projectThumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-12073.appspot.com/o/NEW_Home_google-pixel4-ohsoorange-portrait.png?alt=media&token=f0ff3f0e-011b-438b-bb1b-6d53cfa62d86",
                website: "https://devfolio.co/submissions/rock-paper-scissors-4"
            }
        ];
        let projectRowsList = [];
        let projectRow = [];

        for (let index = 0; index < featuredProjects.length; index++) {
            let projectDetails = featuredProjects[index];
            let featuredProjectCard = <FeaturedProjectCard key={projectDetails.projectTitle} {...projectDetails} />;
            projectRow.push(featuredProjectCard);
            if (index % 2 === 1){
                let newProjectRow = <ProjectRow key={(index / 2) - 1} projects={projectRow} />;
                projectRow = [];
                projectRowsList.push(newProjectRow);
            }
        }
        if(projectRow.length !== 0){
            let newProjectRow = <ProjectRow key={featuredProjects.length - 1} projects={projectRow} />;
            projectRow = [];
            projectRowsList.push(newProjectRow);
        }
        
        // let otherProjectRowsList = [];
        // for (let index = 0; index < projects.length; index++) {
        //     const element = projects[index];
        //     let newProjectCard = <ProjectCard key={index} {...element} />;
        //     otherProjectRowsList.push(newProjectCard);
        // }
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <h1 className="projects-title">Projects</h1>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <p className="projects-text">Welcome to the tinker lab. I keep on building stuff, trying to solve any modern day life problem I feel can be solved using code. These are a few projects that i have made!</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            {/* <h3 className="projects-subtitle">Featured Projects</h3> */}
                        </div>
                    </div>
                    <br /><br />
                    {projectRowsList}
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            {/* <h3 className="projects-subtitle">Other Projects</h3> */}
                        </div>
                    </div>
                    <br /><br />
                    {/* <div className="row">
                        {otherProjectRowsList}
                    </div> */}
                </div>
            </div>
        );
    }
    else{
        let featuredProjects = projectData["featured-projects"];
        let projectRowsList = [];
        let projectRow = [];
        for (let index = 0; index < featuredProjects.length; index++) {
            let projectDetails = featuredProjects[index];
            let featuredProjectCard = <FeaturedProjectCard key={projectDetails.projectTitle} {...projectDetails} />;
            projectRow.push(featuredProjectCard);
            if (index % 2 === 1){
                let newProjectRow = <ProjectRow key={(index / 2) - 1} projects={projectRow} />;
                projectRow = [];
                projectRowsList.push(newProjectRow);
            }
        }
        if(projectRow.length !== 0){
            let newProjectRow = <ProjectRow key={featuredProjects.length - 1} projects={projectRow} />;
            projectRow = [];
            projectRowsList.push(newProjectRow);
        }
        let projects = projectData["projects"];
        let otherProjectRowsList = [];
        for (let index = 0; index < projects.length; index++) {
            const element = projects[index];
            let newProjectCard = <ProjectCard key={index} {...element} />;
            otherProjectRowsList.push(newProjectCard);
        }
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <h1 className="projects-title">Projects</h1>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <p className="projects-text">Welcome to the tinker lab. I keep on building stuff, trying to solve any modern day life problem I feel can be solved using code. These are my few projects that i have builded</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h3 className="projects-subtitle">Projects</h3>
                        </div>
                    </div>
                    <br /><br />
                    {projectRowsList}
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h3 className="projects-subtitle">Other Projects</h3>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        {otherProjectRowsList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;