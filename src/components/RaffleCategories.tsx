import React from "react";
import CategoryCard from "./CategoryCard";
import ContentLayout from "./ContentLayout";
import { Grid, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import rafflerBackground from "../assets/background_bottom.png";
const content = [
  {
    id: "1",
    title: "Win v-bucks",
    image: "something",
    text: "something",
    action: "comingsoon"
  },
  {
    id: "2",
    title: "Win shark cards",
    image: "something",
    text: "something",
    action: "comingsoon"
  },
  {
    id: "3",
    title: "Raffler Original",
    image: "something",
    text: "something",
    action: "comingsoon"
  },
  {
    id: "4",
    title: "More to come",
    image: "something",
    text: "something",
    action: "comingsoon"
  }
];

const useStyles = makeStyles((theme: Theme) => ({
  categoryContainer: {
    marginTop: theme.spacing(4),
    background: `url(${rafflerBackground})`,
    backgroundSize: "cover"
  },
  categoryWrapper: {
    padding: theme.spacing(6)
  },
  categoryInner: {
    border: "4px solid #ac4da0",
    background: "#fff",
    padding: theme.spacing(4)
  },
  viewMore: {
    minWidth: 180
  }
}));

export default function RaffleCategories() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ContentLayout className={classes.categoryContainer}>
        <div className={classes.categoryWrapper}>
          <div className={classes.categoryInner}>
            <Typography variant="h5" align="center">
              Raffle Categories
            </Typography>
            <Grid container spacing={2}>
              {content.map(el => {
                return (
                  <Grid item md="auto">
                    <CategoryCard info={el} />
                  </Grid>
                );
              })}
              <Grid item className={classes.viewMore} md="auto">
                View More
              </Grid>
            </Grid>
          </div>
        </div>
      </ContentLayout>
    </React.Fragment>
  );
}
