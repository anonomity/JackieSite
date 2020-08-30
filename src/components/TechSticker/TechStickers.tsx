import React, { FunctionComponent } from "react";
import classes from "./TechSticker.module.css"
type TechStickersProps = {
    title: Array<string>
}


export const TechStickers: FunctionComponent<TechStickersProps> = ({ title  }) => (
    <React.Fragment>
    {title.map((t: string) => (
       <p className={classes.sticker} key={t}>
       {t}
   </p>
      ))}
        </ React.Fragment>
)

