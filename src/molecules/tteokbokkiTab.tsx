import styled from "styled-components";
import {Img} from "../atoms/img";
import TteokbokkiSrc from "../images/tteokbokki.jpg";

interface TteokbokkiTabType {
    className?: string,
}

const TteokbokkiTabBox = styled.div`
  width: 100%;
  height: 100%;
`;

const TteokbokkiTab = ({ className }: TteokbokkiTabType) => {

    return (
        <TteokbokkiTabBox className={className}>
            <Img imgSrc={TteokbokkiSrc} imgAlt="떡볶이 이미지입니다" width="100%" height="100%" />
        </TteokbokkiTabBox>
    )
}

export default TteokbokkiTab;