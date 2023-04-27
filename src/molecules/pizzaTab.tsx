import styled from "styled-components";
import {Img} from "../atoms/img";
import PizzaSrc from "../images/pizza.jpg";

interface PizzaTabType {
    className?: string,
}

const PizzaTabBox = styled.div`
  width: 100%;
  height: 100%;
`;

const PizzaTab = ({ className }: PizzaTabType) => {

    return (
        <PizzaTabBox className={className}>
            <Img imgSrc={PizzaSrc} imgAlt="피자 이미지입니다" width="100%" height="100%" />
        </PizzaTabBox>
    )
}

export default PizzaTab;