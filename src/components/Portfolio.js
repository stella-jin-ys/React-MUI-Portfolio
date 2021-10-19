import React from "react";
import Navbar from "./Navbar";

import Carousel from "react-material-ui-carousel";

import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  maincontainer: {
    backgroundImage: `url(
               "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
             )`,
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    height: "100%",
    margin: "3rem",
    margin: "5rem auto",
  },
});

const Portfolio = (props) => {
  const classes = useStyles();

  var projects = [
    {
      name: "project 1",
      description: "Javascript 3D effect project",
      image: project1,
    },
    {
      name: "project 2",
      description: "Html, Css, Javascript laptop page project",
      image: project2,
    },
    {
      name: "project 3",
      description: "Python Django blog website project",
      image: project3,
    },
    {
      name: "project 4",
      description: "React meet up project",
      image: project4,
    },
  ];

  function Item(props) {
    return (
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.project.name}
            height="350"
            image={props.project.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {props.project.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Live Demo
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Box component="div" className={classes.maincontainer}>
      <Navbar />
      <Carousel>
        {projects.map((project, i) => (
          <Item key={project.description} project={project} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Portfolio;
