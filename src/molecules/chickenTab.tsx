import styled from "styled-components";
import {Img} from "../atoms/img";
import ChickenSrc from "../images/chicken.jpg";

interface ChickenTabType {
    className?: string,
}

const ChickenTabBox = styled.div`
  width: 100%;
  height: 100%;
`;

const ChickenTab = ({ className }: ChickenTabType) => {

    return (
        <ChickenTabBox className={className}>
            <Img imgSrc={ChickenSrc} imgAlt="치킨 이미지입니다" width="100%" height="100%" />
        </ChickenTabBox>
    )
}

export default ChickenTab;