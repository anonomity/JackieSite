import React, { FunctionComponent } from "react";
import classes from "../Tallpic.module.css";

type MediumPicProps = {
  img: any;
  alt: string;
  size: number;
  subheading: string;
};

export const MediumPic: FunctionComponent<MediumPicProps> = ({
  img,
  alt,
  size,
  subheading,
}) => (
  <React.Fragment>
    <img
      src={img}
      alt={alt}
      style={{
        width: size,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
    <p className={classes.subHeading}>{subheading}</p>
  </React.Fragment>
);

export default MediumPic;
