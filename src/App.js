import "./App.css";
import "./sass/index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, useRoutes } from "react-router-dom";
import PublicationRoute from "./Pages/PublicationRoute";
import TeamRooute from "./Pages/TeamRoute";
import Usecases from "./Pages/Usecases";
import Creatives from "./Pages/Creatives";
import Story from "./Pages/Story";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Opportunities from "./Pages/Opportunities";
import Tutorials from "./Pages/Tutorials";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppRoutes = () => {
  let routes = useRoutes([
    { path: process.env.PUBLIC_URL+"/", element: <Home /> },
    { path: process.env.PUBLIC_URL+"/research", element: <PublicationRoute /> },
    { path: process.env.PUBLIC_URL+"/team", element: <TeamRooute /> },
    { path: process.env.PUBLIC_URL+"/usecases", element: <Usecases /> },
    { path: process.env.PUBLIC_URL+"/creatives", element: <Creatives /> },
    { path: process.env.PUBLIC_URL+"/tutorials", element: <Tutorials /> },
    { path: process.env.PUBLIC_URL+"/story", element: <Story /> },
    { path: process.env.PUBLIC_URL+"/opportunities", element: <Opportunities /> },
    { path: "*", element: <ErrorPage /> },
    // ...
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <div className="App">
          <AppRoutes />
        </div>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
