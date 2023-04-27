import React from "react";
import styled from "styled-components";

interface ButtonBarType {
    children: React.ReactNode,
    className?: string,
}

interface ButtonBarStyleType {
    childrenCount: number,
}

const ButtonBarBox = styled.div<ButtonBarStyleType>`
  display: grid;
  grid-template-columns: repeat(${props => props.childrenCount}, 1fr);
`;

const ButtonBar = ({ children, className }: ButtonBarType) => {

    return (
        <ButtonBarBox className={className} childrenCount={React.Children.count(children)}>
            {children}
        </ButtonBarBox>
    )
}

export {ButtonBar};