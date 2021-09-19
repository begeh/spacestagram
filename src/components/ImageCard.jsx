import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import { getAPOD } from "../helpers";

export default function ImageCard() {
  const [data, setData] = useState();
  const { hdurl, explanation, title, date } = data || {};

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // Retrieve date from NASA api
  const fetchData = async () => {
    const response = await getAPOD();
    setData(response.data);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {data && (
        <>
          <CardMedia component="img" image={hdurl} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{
                margin: "10px 0px",
              }}
            >
              {date}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="left">
              {explanation}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              style={{ textTransform: "none", fontSize: "16px" }}
              color={liked ? "primary" : "inherit"}
              onClick={() => setLiked(!liked)}
            >
              Like
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}
