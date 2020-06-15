import React, { PureComponent } from 'react';
import classes from "./Cryptography.module.css"
export interface ICryptographydProps {

}

export interface ICryptographydState {
    encrypt: string,
    vEncrypt: string, 
    plaintText: string
}

class Cryptography extends PureComponent<ICryptographydProps, ICryptographydState> {
    constructor(props: ICryptographydProps) {
        super(props);
        this.state = {
            encrypt: "",
            vEncrypt: "",
            plaintText: ""
        };
    }


    render() {
        return (
            <div className={classes.App}>
                <input />
                <div>
                    <button >Encrypt </ button>
                    <button >Decrypt</ button>
                    <button >?</ button>
                </div>     
                <div>
                    Encryption
                    </div>            
            </div>
        );
    }
}

export default Cryptography;
