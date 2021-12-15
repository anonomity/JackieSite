import React, { FunctionComponent } from "react";
import classes from "../Tallpic.module.css";

type MediumPicProps = {
  img: any;
  alt: string;
  size: number;
};

export const MediumPic: FunctionComponent<MediumPicProps> = ({
  img,
  alt,
  size,
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
  </React.Fragment>
);

export default MediumPic;
