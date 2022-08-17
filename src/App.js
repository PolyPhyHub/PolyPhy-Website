import "./App.css";
import "./sass/index.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Publications from "./Components/Publications";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import PublicationRoute from "./Components/PublicationRoute";
import News from "./Components/News";
import TeamRooute from "./Components/TeamRoute";
import Usecases from "./Components/Usecases";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <News />
      <About />
      <Publications />
    </div>
  );
};

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/research", element: <PublicationRoute /> },
    { path: "/team", element: <TeamRooute /> },
    { path: "/usecases", element: <Usecases /> },
    // ...
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <div className="App">
          <AppRoutes />
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
