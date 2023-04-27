import styled from "styled-components";
import React, {useState} from "react";
import {ButtonBar} from "../molecules/buttonBar";
import {Button} from "../atoms/button";
import {Img} from "../atoms/img";

const ButtonImageContainerBox = styled.div`
  width: 100%;
`;

const ButtonBarBox = styled(ButtonBar)`
  width: 100%;
`;

const ButtonImageContainer = () => {

    const imageSrc = useState<string>();

    return (
        <ButtonImageContainerBox>
            <ButtonBarBox>

            </ButtonBarBox>
        </ButtonImageContainerBox>
    )
}

export {ButtonImageContainer};