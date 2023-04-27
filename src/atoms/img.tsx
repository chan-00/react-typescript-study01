import styled from "styled-components";
import React from "react";

interface ImgType {
    imgSrc: string,
    className?: string,
    imgAlt?: string,
    width?: string,
    height?: string,
}

interface ImgStyledType {
    width?: string,
    height?: string,
}

const ImgBox = styled.img<ImgStyledType>`
    width: ${props => props.width};
    height: ${props => props.height};
`;

const Img = ({ imgSrc, className, imgAlt, width, height }: ImgType) => {

    return (
        <ImgBox className={className} src={imgSrc} alt={imgAlt} width={width} height={height} />
    )
}

export {Img};