import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TravelMood from "./components/TravelMood";
import WhyWanderly from "./components/WhyWanderly";
import About from "./components/About";
import ContactPlanner from "./components/ContactPlanner";
import Footer from "./components/Footer";
import AITravelPlanner from "./components/AITravelPlanner";
import WanderlyAIAssistant from "./components/WanderlyAIAssistant";


function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AITravelPlanner/>
      <TravelMood />
      <WhyWanderly />
      <About />
      <ContactPlanner />
      <Footer/>

      <WanderlyAIAssistant />
    </main>
  );
}

export default App;