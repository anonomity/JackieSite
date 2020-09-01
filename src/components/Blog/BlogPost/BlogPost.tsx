import React from "react"
import styled from 'styled-components';
import './BlogPost.scss';
const Wrapper = styled.section`
  margin-bottom: 10px;
  padding: 10px 50px;
  background: lightslategray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;



const HeaderText = styled.h2`
    margin-bottom: 5px;
    color: white;
    
`;
const HeaderDate = styled.h2`
    color:white;
`;

const Text = styled.p`
    color: white;
`;


type IHeadingProps = {
    name: string,
    text: string,
    sticker: object,
    text2: string,
    date: string,
}

export default function BlogPost({ name, text, sticker, text2, date }: IHeadingProps) {
    return (
        <Wrapper >
            <div className="HeaderText">

                <HeaderText>{name}</HeaderText>
                <HeaderDate>{date}</HeaderDate>
            </div>
            <Text>{text}</Text>
            <div>{sticker}</div>
            <Text>{text2}</Text>


        </Wrapper>
    )

}