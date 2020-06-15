import React, { PureComponent } from 'react';
import classes from "./Cryptography.module.css"

const alphabet: Array<string> = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]
export interface ICryptographydProps {

}

export interface ICryptographydState {
    encrypt: string,
    vEncrypt: string,
    plaintText: string
}

export interface ISquareProps {
    letter: string;
}

const Square = (props: ISquareProps) => {
    if (props.letter !== " ") {
        return (
            <div className={classes.Red}>
                <p className={classes.letters}>
                    <strong>{props.letter.toUpperCase()}</strong>
                </p>

            </div>
        )
    } else {
        return <div className={classes.space}></div>
    }
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

    Encrypt = (text: string) => {
        let amount = 3;
        this.setState({
            plaintText: text,
        });
        //change arr to number
        let str = text.split("");
        let numArr: Array<number> = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (str[i].toUpperCase() === alphabet[j]) {
                    numArr = [...numArr, j];
                }
            }
        }
        let shiftedArr: Array<number> = [];
        //shift by specified number

        for (let p = 0; p < numArr.length; p++) {
            if (numArr[p] + amount < alphabet.length) {
                shiftedArr = [...shiftedArr, numArr[p] + amount];
            } else if (numArr[p] + amount >= alphabet.length) {
                shiftedArr = [...shiftedArr, numArr[p] - alphabet.length + amount];
            }
        }
        //convert back to letters
        let encryStr: string = "";
        for (let z = 0; z < shiftedArr.length; z++) {
            encryStr = encryStr + alphabet[shiftedArr[z]];
        }
        this.setState({
            vEncrypt: encryStr,
        });
    };


    onChangeInput = (event: { target: { value: any; }; }) => {
        this.setState({
            encrypt: event.target.value,
        });
    };
    submitText = () => {
        this.Encrypt(this.state.encrypt);
        this.setState({
            vEncrypt: this.state.encrypt,
            encrypt: "",
        });
    };
    decryptText = () => {
        console.log(this.state.plaintText);
        let plainttext = this.state.plaintText;
        this.setState({
            vEncrypt: plainttext,
        });
    };
    render() {
        let Encryption = null;
        if (this.state.vEncrypt.length > 0) {
            Encryption = this.state.vEncrypt.split("").map((letter) => {
                return <Square letter={letter} />
            })
        }
        return (
            <div className={classes.App}>
                <input className={classes.Input}
                    value={this.state.encrypt}
                    onChange={this.onChangeInput}
                    placeholder="Insert Text Here"
                    
                />
                <div className={classes.btnbox}>
                    <button className={classes.btn} onClick={this.submitText}>Submit Text </ button>
                    <button className={classes.btn} onClick={() => this.Encrypt(this.state.vEncrypt)}>Encrypt</ button>
                    <button className={classes.btn} onClick={this.decryptText}>Decrypt Text</ button>
                </div>
                <div className={classes.Matrix}>
                    {Encryption}
                </div>
            </div>
        );
    }
}

export default Cryptography;
