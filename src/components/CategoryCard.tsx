import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { CardActions } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      borderRadius: 0,
      backgroundColor: "#ac4da0",
      color: "#fff",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 200
      }
    },
    title: {
      fontSize: "1rem",
      textTransform: "uppercase",
      fontWeight: 500,
      marginBottom: theme.spacing(1)
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    },
    text: {
      color: "#fff",
      fontFamily: "Impact, sans-serif",
      textTransform: "uppercase"
    },
    content: {
      minHeight: 180
    }
  })
);

export default function CategoryCard({ info }: any) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={info.image} />
      <CardContent className={classes.content}>
        <Typography variant="h5" className={classes.title}>
          {info.title}
        </Typography>
        <Typography variant="body2" className={classes.text} component="p">
          {info.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>Coming soon</Typography>
      </CardActions>
    </Card>
  );
}
