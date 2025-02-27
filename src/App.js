import Hero from "./Home/Hero/Hero";
import About from "./Home/About/About";
import Projects from "./Home/Projects/Projects";
import Experience from "./Home/Experience/Experience";
import Contact from "./Home/Contact/Contact";
import Footer from "./Home/Footer/Footer";


function App() {

  // const [details, setDetails] = useState();
  // const [projects, getProjects] = useState();
  // const [experience, fetchExperience] = useState();
  // const [voluntaryExperience, fetchVoluntaryExperience] = useState();

  // useEffect(() => {
  //   if(details === undefined || projects === undefined || experience === undefined || voluntaryExperience === undefined){
  //     firebaseServices.getDetails().then(details => {
  //       setDetails(details);
  //     });
  //     firebaseServices.getProjects().then(projects => {
  //       getProjects(projects);
  //     });
  //     firebaseServices.getExperience().then(experience => {
  //       fetchExperience(experience);
  //     });
  //     firebaseServices.getVoluntaryExperience().then(voluntaryExperience => {
  //       fetchVoluntaryExperience(voluntaryExperience);
  //     })
  //   }
  // })

  // if(details == null || projects == null || experience == null){
    return (
      <div>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    );
  }
//   else{
//     return (
//       <div>
//         <Hero details={details} />
//         <About details={details} />
//         <Projects projectData={projects} />
//         <Experience experienceDetails={experience} />
//         <VoluntaryExperience experienceDetails={voluntaryExperience} />
//         <Support />
//         <Contact details={details} />
//         <Footer />
//       </div>
//     );
//   }
// }

export default App;
