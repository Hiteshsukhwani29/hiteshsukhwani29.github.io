import "./Hero.css";
import Socials from "../../Data/Socials";

function Hero () {
        return (
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <center>
                                <img width="400" className="img-responsive img-circle img-laptop" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/hitesh_sukhwani_YAs97gN.jpg" alt="Dewansh Rawat" />
                                <img width="300" className="img-responsive img-circle img-mobile" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/hitesh_sukhwani_YAs97gN.jpg" alt="Dewansh Rawat" />
                            </center>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h1 className="hero-title">Hitesh Sukhwani</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <p className="hero-position">Core Team Member at GDSC BVP Pune</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <p className="hero-position-location">Bharati Vidyapeeth Deemed University College of Engineering Pune</p>
                        </div>
                    </div>
                    <br />
                    <Socials />
                </div>
            </div>
        );
}
    
export default Hero;