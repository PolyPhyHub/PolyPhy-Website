import "./App.css";
import "./sass/index.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Publications from "./Components/Publications";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <div className="App">
        <Hero />
        <About />
        <Publications />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
