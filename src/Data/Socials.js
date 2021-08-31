import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faFacebook, faTwitter, faSpotify, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Socials(props) {
    let socials = props.socials;
    function triggerSocialLink(platform){
            switch (platform) {
                case "mail":
                    window.open("mailto:hiteshsukhwani29@gmail.com")
                    break;
                case "github":
                    window.open("https://github.com/Hiteshsukhwani29")
                    break;
                case "facebook":
                    window.open("https://www.facebook.com/hitesh.sukhwani.12")
                    break;
                case "instagram":
                    window.open("https://www.instagram.com/sukhwanihitesh_/")
                    break;
                case "linkedin":
                    window.open("https://www.linkedin.com/in/hitesh-sukhwani-14b722135/")
                    break;
                case "twitter":
                    window.open("https://twitter.com/hiteshsukhwani6")
                    break;
                default:
                    break;
            }
       
      }
    

    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <center>
                    <ul className="list-inline">
                        <li>
                            <FontAwesomeIcon onClick={() => triggerSocialLink('mail')} className="socials-icon-dark" icon={faEnvelope} />
                        </li>
                        <li>
                            <FontAwesomeIcon onClick={() => triggerSocialLink('github')} className="socials-icon-dark" icon={faGithub} />
                        </li>
                        <li>
                            <FontAwesomeIcon onClick={() => triggerSocialLink('linkedin')} className="socials-icon-dark" icon={faLinkedin} />
                        </li>
                        <li>
                            <FontAwesomeIcon onClick={() => triggerSocialLink('facebook')} className="socials-icon-dark" icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon onClick={() => triggerSocialLink('instagram')} className="socials-icon-dark" icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon onClick={() => triggerSocialLink('twitter')} className="socials-icon-dark" icon={faTwitter} />
                        </li>
                    </ul>
                </center>
            </div>
        </div>
    );
    }

export default Socials;