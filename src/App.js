import Header from "./components/header";
import Slider from "./components/Slider";
import  Card from "./components/Card";
import Footer from "./components/Footer";
import "./style/header.scss";
import "./style/main.scss";
import "./style/footer.scss"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="rentg1"></div>
        <Slider />
        <div className="rentg"></div>
         <Card indexphoto={0}/>  
         <div className="rentg"></div>
         <Card indexphoto={1}/>  
        <Footer/>

      </main>
    </>
  );
}

export default App;
