import React from "react";
import CategoryCard from "./CategoryCard";
import ContentLayout from "./ContentLayout";
import { Grid } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
    marginTop: theme.spacing(4)
  }
}));

export default function RaffleCategories() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ContentLayout className={classes.categoryContainer}>
        <div>Categories</div>
        <Grid container spacing={2}>
          {content.map(el => {
            return (
              <Grid item>
                <CategoryCard info={el} />
              </Grid>
            );
          })}
          <Grid item>More</Grid>
        </Grid>
      </ContentLayout>
    </React.Fragment>
  );
}
