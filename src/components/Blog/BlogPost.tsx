import React from "react"
import styled from 'styled-components';

const Wrapper = styled.section`
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
const Text = styled.p`
    color: white;
`;


type IHeadingProps = {
    name: string,
    text: string,
    sticker: object,    
    text2: string
}

export default function BlogPost({name, text, sticker, text2} : IHeadingProps){
    return (
        <Wrapper >
            <HeaderText>{name}</HeaderText>
            <Text>{text}</Text>
           <div>{sticker}</div> 
           <Text>{text2}</Text>
            

        </Wrapper>
    )

}