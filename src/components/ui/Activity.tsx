/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import classes from "./Activity.module.css";
const Activity = (props: any) => {
  return (
    <div className={classes.activityBox}>
      <h2 className={classes.title} {...props} />
    </div>
  );
};

export default Activity;
