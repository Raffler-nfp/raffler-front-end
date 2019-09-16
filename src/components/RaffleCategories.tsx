import React from "react";
import CategoryCard from "./CategoryCard";
import ContentLayout from "./ContentLayout";
import { Grid, Typography, Avatar } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ArrowForward } from "@material-ui/icons";

import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";

import rafflerBackground from "../assets/background_bottom.png";
const content = [
  {
    id: "1",
    title: "Win v-bucks",
    image: `${category1}`,
    text: "something",
    action: "comingsoon"
  },
  {
    id: "2",
    title: "Win shark cards",
    image: `${category2}`,
    text: "something",
    action: "comingsoon"
  },
  {
    id: "3",
    title: "Raffler Original",
    image: `${category3}`,
    text: "something",
    action: "comingsoon"
  },
  {
    id: "4",
    title: "More to come",
    image: `${category4}`,
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
    border: "8px solid #ac4da0",
    background: "#fff",
    padding: theme.spacing(4)
  },
  viewMore: {
    minWidth: 180,
    alignSelf: "center",
    display: "flex"
  },
  cardContainer: {
    backgroundColor: "#ac4da0",
    color: "#fff"
  },
  avatar: {
    backgroundColor: "#ac4da0"
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
            <Typography variant="h6" align="center">
              Raffler has an ever growing list of raffle categories to suit your
              needs and want. On account links all.
            </Typography>
            <Grid container spacing={2}>
              {content.map(el => {
                return (
                  <Grid item md="auto" key={el.id}>
                    <CategoryCard info={el} />
                  </Grid>
                );
              })}
              <Grid item className={classes.viewMore} md="auto">
                View all <br /> categories{" "}
                <Avatar className={classes.avatar}>
                  <ArrowForward />
                </Avatar>
              </Grid>
            </Grid>
          </div>
        </div>
      </ContentLayout>
    </React.Fragment>
  );
}
