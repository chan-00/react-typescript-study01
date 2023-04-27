import styled from "styled-components";
import {Img} from "../atoms/img";
import CreemeSrc from "../images/creeme.jpg";

interface CreemeTabType {
    className?: string,
}

const CreemeTabBox = styled.div`
  width: 100%;
  height: 100%;
`;

const CreemeTab = ({ className }: CreemeTabType) => {

    return (
        <CreemeTabBox className={className}>
            <Img imgSrc={CreemeSrc} imgAlt="크리미빵 이미지입니다" width="100%" height="100%" />
        </CreemeTabBox>
    )
}

export default CreemeTab;