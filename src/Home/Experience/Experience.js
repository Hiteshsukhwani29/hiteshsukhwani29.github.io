import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience(){
        let experienceRows = [];
        let experienceDetailsArr = [
            {
                title: "Core Team Member",
                startDate: "October 2019",
                endDate: "Present",
                organisation: "GDSC BVP Pune",
                orgUrl: "https://gdsc.community.dev/bharati-vidyapeeth-deemed-university-college-of-engineering-pune/"
            },
            {
                title: "Technical Team Member",
                startDate: "August 2021",
                endDate: "Present",
                organisation: "GFG BVUCOEP",
                orgUrl: "https://www.linkedin.com/company/geeksforgeeks-bvp/"
            },
            {
                title: "Campus Captain",
                startDate: "July 2021",
                endDate: "Present",
                organisation: "Coding Minutes",
                orgUrl: "https://codingminutes.com/"
            },
            {
                title: "Mobile Application Developer",
                startDate: "June 2021",
                endDate: "July 2021",
                organisation: "The Sparks Foundation",
                orgUrl: "https://www.thesparksfoundationsingapore.org/"
            },
            {
                title: "Android App Developer",
                startDate: "September 2021",
                endDate: "Present",
                organisation: "Lets Grow More",
                orgUrl: "https://letsgrowmore.in/"
            },
            {
                title: "Open Source Contributor",
                startDate: "July 2021",
                endDate: "August 2020",
                organisation: "DevIncept",
                orgUrl: "https://devincept.com/"
            }
        ];
        experienceDetailsArr.forEach(element => {
            let newExperienceCard = <ExperienceCard key={element.title} {...element} theme="light" />;
            experienceRows.push(newExperienceCard);
        });
        return (
            <div className="experience">
                <div className="container">
                <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <h1 className="experience-title">Experience</h1>
                        </div>
                    </div>
                    <br />
                    {/* <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <p className="experience-text">I am a great team player. From a Website designer writing code in HTML, to being a mobile app developer designing Flutter apps, to writing robust backend structure's in Django, I have been responsible for handling work in a lot of different teams. From being a team player to bring a team leader, I have worked on a lot.</p>
                        </div>
                    </div> */}
                    <br /><br />
                    {experienceRows}
                </div>
            </div>
        );
    
}

export default Experience;