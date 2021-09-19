import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "../App.css";
import ImageCard from "../components/ImageCard";
import Typography from "@mui/material/Typography";
import { getImages } from "../helpers";

export default function MainPage() {
  const [photos, setPhotos] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    fetchPhotos();
  }, []);

  // Retrieve date from NASA api
  const fetchPhotos = async () => {
    setState("loading");
    const response = await getImages();
    if (response.status === 200) {
      setPhotos(response.data);
      setState("retrieved");
    } else {
      alert(response.message);
      setState("error");
    }
  };

  const PageView = () => {
    switch (state) {
      case "loading":
        return (
          <div className="loading-container">
            <CircularProgress />
          </div>
        );
      case "retrieved":
        return (
          <>
            {photos.map((photo) => (
              <ImageCard photo={photo} />
            ))}
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="main-page">
      <header className="main-header">
        <Typography variant="h3" component="div">
          Spacestagram
        </Typography>
        <Typography variant="h6">Powered By NASA's Image API</Typography>
      </header>
      <body className="main-body">
        <PageView />
      </body>
    </div>
  );
}
