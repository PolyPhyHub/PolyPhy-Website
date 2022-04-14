import "./App.css";
import "./sass/index.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Visualizations from "./Components/Visualizations";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Hero />
        <About />
        <Visualizations />
      </div>
    </ThemeProvider>
  );
}

export default App;
