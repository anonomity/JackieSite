import React, { FunctionComponent }  from "react";
import classes from "./TechSticker.module.css"
type TechStickerProps = {
    title: string
}


export const TechSticker: FunctionComponent<TechStickerProps> = ({title}) => <p className={classes.sticker}>
        {title}
    </p>
    
