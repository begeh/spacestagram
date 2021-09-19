import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "../App.css";
import ImageCard from "../components/ImageCard";
import Typography from "@mui/material/Typography";
import { getAPOD } from "../helpers";

export default function MainPage() {
  const [photo, setPhoto] = useState();
  const [state, setState] = useState("");

  useEffect(() => {
    fetchPhoto();
  }, []);

  // Retrieve date from NASA api
  const fetchPhoto = async () => {
    setState("loading");
    const response = await getAPOD();
    if (response.status === 200) {
      setPhoto(response.data);
      setState("retrieved");
    } else {
      alert(response.message);
      setState("error");
    }
  };

  const PageView = () => {
    switch (state) {
      case "loading":
        return <CircularProgress />;
      case "retrieved":
        return <ImageCard photo={photo} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" component="div">
          Spacestagram
        </Typography>
        <Typography
          className="image-date"
          variant="h6"
        >
          Powered By NASA's Image API
        </Typography>
      </header>
      <body>
        <PageView />
        <ImageCard photo={photo} />
      </body>
    </div>
  );
}