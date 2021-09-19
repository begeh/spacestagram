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
import { CircularProgress } from "@mui/material";
import "./index.css";

const ImageCard = (props) => {
  const { hdurl, explanation, title, date } = props.photo || {};

  const [liked, setLiked] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={hdurl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          className="image-date"
          variant="body1"
          color="text.secondary"
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
          className="like-button"
          size="small"
          color={liked ? "primary" : "inherit"}
          onClick={() => setLiked(!liked)}
        >
          Like
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
