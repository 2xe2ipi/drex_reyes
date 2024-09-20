  import Navbar from "./components/NavBar/navv";
  import Intro from "./components/intro/intro";
  import About from "./components/AboutSection/about";
  import Works from "./components/MyWorks/works";
  import Contact from "./components/Contact/cont";
  import Footer from "./components/Footer/footer";

  function App() {
    return (
      <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
    );
  }

  export default App;