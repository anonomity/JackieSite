import React, { FunctionComponent } from "react";
import classes from "./Tallpic.module.css";

type TallpicProps = {
  img: any;
  alt: string;
};

export const Tallpic: FunctionComponent<TallpicProps> = ({ img, alt }) => (
  <React.Fragment>
    <img src={img} alt={alt} className={classes.image} />
  </React.Fragment>
);

export default Tallpic;
