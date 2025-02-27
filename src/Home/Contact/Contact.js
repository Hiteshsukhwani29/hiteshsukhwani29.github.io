import "./Contact.css";
import Socials from "../../Data/Socials";

function Contact(){
        return (
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <h1 className="contact-title">Contact Me</h1>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <p className="contact-text">Feel like we can create something schwag worthy? Just hit me up on any of your favorite communications platform.</p>
                        </div>
                    </div>
                    <br /><br />
                    <Socials themeMode="dark" />
                </div>
            </div>
        );
    }

export default Contact;