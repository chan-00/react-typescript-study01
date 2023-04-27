import styled from "styled-components";
import {Img} from "../atoms/img";
import CoffeeSrc from "../images/coffee.jpg";

interface CoffeeTabType {
    className?: string,
}

const CoffeeTabBox = styled.div`
  width: 100%;
  height: 100%;
`;

const CoffeeTab = ({ className }: CoffeeTabType) => {

    return (
        <CoffeeTabBox className={className}>
            <Img imgSrc={CoffeeSrc} imgAlt="커피 이미지입니다" width="100%" height="100%" />
        </CoffeeTabBox>
    )
}

export default CoffeeTab;