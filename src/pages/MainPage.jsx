import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "../App.css";
import ImageCard from "../components/ImageCard";
import Typography from "@mui/material/Typography";
import { getPicOfTheDay } from "../helpers";

export default function MainPage() {
  const [photo, setPhoto] = useState();
  const [state, setState] = useState("");

  useEffect(() => {
    fetchPhoto();
  }, []);

  // Retrieve date from NASA api
  const fetchPhoto = async () => {
    setState("loading");
    const response = await getPicOfTheDay();
    if (response.status === 200) {
      setPhoto(response.data);
      setState("retrieved");
    } else {
      alert(response.message);
      setState("error");
    }
  };

  // Create an array of the same photo 3 times.
  const photos = [];
  for (let i = 0; i < 3; i++) {
    photos.push(<ImageCard photo={photo} />);
  }

  const PageView = () => {
    switch (state) {
      case "loading":
        return (
          <div className="loading-container">
            <CircularProgress />
          </div>
        );
      case "retrieved":
        return photos;
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
      <body className='main-body'>
        <PageView />
      </body>
    </div>
  );
}
