import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function SpaceGram() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const { hdurl, explanation, title } = data;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (set) => {
    setLoading(true);
    await axios
      .get(`https://api.nasa.gov/planetary/apod`, {
        params: { api_key: process.env.REACT_APP_NASA_API_KEY },
      })
      .then((res) => setData(res.data));
    setLoading(false);
  };
  return (
    data && (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image={hdurl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            {explanation}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
        </CardActions>
      </Card>
    )
  );
}