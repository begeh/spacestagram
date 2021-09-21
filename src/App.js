import "./fonts/style.css";
import "./App.css";
import MainPage from "./pages/MainPage";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="container">
      <header className="header">
        <Typography className="title" variant="h3" component="div">
          Spacestagram
        </Typography>
        <Typography className="subtitle" variant="h6">
          Powered By NASA's Image API
        </Typography>
      </header>
      <MainPage />
    </div>
  );
}

export default App;
