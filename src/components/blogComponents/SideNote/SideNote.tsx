import React from "react";
import classes from "./SideNote.module.css";
interface SideNoteProps {
  title: string;
  text: string;
}

export const SideNote: React.FC<SideNoteProps> = ({ text, title }) => {
  return (
    <aside className={classes.SideNote}>
      <hr className={classes.hr} />
      <p className={classes.title}>{title}</p>
      <p className={classes.text}>{text}</p>
      <hr className={classes.hr} />
    </aside>
  );
};

export default SideNote;
