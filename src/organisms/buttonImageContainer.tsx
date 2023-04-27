import styled from "styled-components";
import React, {useState, Suspense} from "react";
import {ButtonBar} from "../molecules/buttonBar";
import {Button} from "../atoms/button";
//dynamic import



const ButtonImageContainerBox = styled.div`
  width: 1000px;
  height: 500px;
  border: 1px solid black;
  
  margin: 50px auto;
`;

const ButtonBarBox = styled(ButtonBar)`
  width: 100%;
`;

const ButtonImageContainer = () => {

    const [ tabDivd, setTabDivd ] = useState<string>("chicken");

    //button 클릭 시 클릭 css와 이미지 변경 처리를 위한 이벤트
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const eventTarget = e.target as HTMLButtonElement;
        setTabDivd(eventTarget.innerText);
    }

    return (
        <ButtonImageContainerBox>
            <ButtonBarBox>
                <Button text="chicken" onClick={handleButtonClick} />
                <Button text="coffee" onClick={handleButtonClick} />
                <Button text="creeme" onClick={handleButtonClick} />
                <Button text="mara" onClick={handleButtonClick} />
                <Button text="pizza" onClick={handleButtonClick} />
                <Button text="tteokbokki" onClick={handleButtonClick} />
            </ButtonBarBox>
        </ButtonImageContainerBox>
    )
}

export {ButtonImageContainer};