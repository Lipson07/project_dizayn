import Header from "./components/header";
import Slider from "./components/Slider";
import "./style/header.scss";
import "./style/main.scss";
import home from "./assets/img/slider.json";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="rentg"></div>
        <Slider />
      </main>
    </>
  );
}

export default App;
