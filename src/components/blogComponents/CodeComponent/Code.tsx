import React from "react";

import classes from "./Code.module.css";
interface CodeProps {
  text: string;
}

export const Code: React.FC<CodeProps> = ({ text }) => {
  return (
    <pre className={classes.background}>
      <p>{text}</p>
    </pre>
  );
};

export default Code;
