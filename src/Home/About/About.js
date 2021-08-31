import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About(props) {
    let details = props.details;

    function downloadCV() {
            window.open("https://firebasestorage.googleapis.com/v0/b/portfolio-12073.appspot.com/o/Hitesh's%20Resume%20(2).pdf?alt=media&token=816b194f-3686-444f-abd5-a68056323cd4");
    }

        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <h1 className="about-title">
                                About Me
                            </h1>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <p className="about-text">
                                I am a third year undergrad student pursuing my career in Information Technology. I am the Core Team Member of Google Developers Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering, Pune.
                                <br /><br />
                                I love to innovate, ideate and build technical solutions to solve common daily life problems. I have worked with Android Studio, Angular, React js and many more.
                                <br /><br />
                                Wanna know more about me? Check out my CV.
                            </p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <center>
                                <span className="download-cv-bttn" onClick={downloadCV}>
                                    <FontAwesomeIcon icon={faDownload} /> My CV
                                </span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default About;