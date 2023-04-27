import styled from "styled-components";
import {Img} from "../atoms/img";
import MaraSrc from "../images/mara.jpg";

interface MaraTabType {
    className?: string,
}

const MaraTabBox = styled.div`
  width: 100%;
  height: 100%;
`;

const MaraTab = ({ className }: MaraTabType) => {

    return (
        <MaraTabBox className={className}>
            <Img imgSrc={MaraSrc} imgAlt="마라탕 이미지입니다" width="100%" height="100%" />
        </MaraTabBox>
    )
}

export default MaraTab;