import styled from "styled-components";
import React from "react";

interface ButtonType {
    text: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string
}

const ButtonBox = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
`;

const Button = ({ text, onClick, className }: ButtonType) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        onClick?.(e);
    }

    return (
        <ButtonBox onClick={handleClick} className={className}>
            {text}
        </ButtonBox>
    )
}

export {Button};