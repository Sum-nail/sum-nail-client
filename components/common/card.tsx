import styled from '@emotion/styled';
import { PinkFlowerIcon, GrayFlowerIcon } from '@/public/icons';
import { useState } from 'react';

function Card() {
  const [selected, setSelected] = useState(false);
  return (
    <CardContainer>
      <Photo>
        <LikeButton onClick={() => setSelected((pre) => !pre)}>
          {selected ? <PinkFlowerIcon /> : <GrayFlowerIcon />}
        </LikeButton>
      </Photo>
      <Title>썸네일</Title>
      <div>
        <LocationText>위치</LocationText> 서울시 서초구
      </div>
      <Tags>
        <div>#심플한</div>
        <div>#귀여운</div>
        <div>#화려한</div>
      </Tags>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.R13_2};
  gap: 0.5rem;
`;

const Photo = styled.div`
  width: 17rem;
  height: 24.3rem;
  border-radius: 1.6rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.grayF7};
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.B15_1};
  margin: 0.5rem 0;
`;

const LocationText = styled.p`
  display: inline;
  font: ${({ theme }) => theme.fonts.SB13_2};
  color: #57c4d3;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  font: ${({ theme }) => theme.fonts.R11_2};
  color: ${({ theme }) => theme.colors.gray91};
`;

const LikeButton = styled.div`
  width: 3.4rem;
  height: 3.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--white, #fff);
  filter: drop-shadow(0.1rem 0.1rem 0.8rem rgba(0, 0, 0, 0.1));
`;
