import React, { FunctionComponent } from "react";
import classes from "../Tallpic.module.css";

type MediumPicProps = {
  img: any;
  alt: string;
};

export const MediumPic: FunctionComponent<MediumPicProps> = ({ img, alt }) => (
  <React.Fragment>
    <img src={img} alt={alt} className={classes.mediumPic} />
  </React.Fragment>
);

export default MediumPic;
