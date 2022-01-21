import "./App.css";
import AllInOne from "./components/AllInOne/AllInOne";
import ClassManagment from "./components/classManagment/ClassManagment";
import Featured from "./components/fetured/Featured";
import Footer from "./components/footer/Footer";
import HomeAbout from "./components/homeAbout/HomeAbout";
import Integrations from "./components/integrations/Integrations";
import Navbar from "./components/navbar/Navbar";
import One from "./components/one/One";
import Quizzes from "./components/quizzes/Quizzes";
import Resources from "./components/resources/Resources";
import Skilline from "./components/skilline/Skilline";
import Testimonial from "./components/testimonial/Testimonial";
import Tools from "./components/tools/Tools";

function App() {
  return (
    <div className="home">
      <div className="home_about">
        <Navbar />
        <HomeAbout />
      </div>
      <div className="home_about_info_all">
        <AllInOne />
        <Skilline />
      </div>

      <div className="home_about_featured">
        <Featured />
        <Tools />
        <Quizzes />
        <ClassManagment />
        <One />
      </div>

      <div className="home_about_integrations">
        <Integrations />
        <Testimonial />
        <Resources />
        <Footer />
      </div>
    </div>
  );
}

export default App;
