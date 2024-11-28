import "./App.css";
import Fifth from "./components/Fifth";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import Fourth from "./components/Fourth";
import Header from "./components/Header";
import Last from "./components/Last";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  return (
    <div style={{fontFamily:"Inter"}}>
      <Header></Header>
      <FirstSection></FirstSection>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
      <Last></Last>
      <Footer></Footer>
    </div>
  );
}

export default App;
