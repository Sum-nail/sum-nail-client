import { MapPinIcon, NaviIcon } from '@/public/icons';
import styled from '@emotion/styled';
import React from 'react';

function StoreMap() {
  return (
    <StoreMapContainer>
      <MapTitleContainer>
        <MapPinIcon />
        <MapTitle>네일샵 위치</MapTitle>
      </MapTitleContainer>
      <Map>지도자리</Map>
      <ButtonContainer>
        <NaviButton>
          <NaviIcon />
          <NaviButtonText>네이버 지도로 길 찾기</NaviButtonText>
        </NaviButton>
      </ButtonContainer>
    </StoreMapContainer>
  );
}

export default StoreMap;

const StoreMapContainer = styled.div`
  border-bottom: 0.8rem solid ${({ theme }) => theme.colors.grayF7};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.8rem 0 2.4rem 0;
`;

const NaviButtonText = styled.h2`
  color: ${({ theme }) => theme.colors.pink_pop};
  ${({ theme }) => theme.fonts.T16_500};
`;

const NaviButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35.8rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.pink_light_button};
`;

//얘는 지울 스타일 !! 위치 표시만 할라구요!!
const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  border: 1px solid black;
  margin: 0 auto;
`;

const MapTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3.3rem 0 1.6rem 2rem;
`;

const MapTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.T16_600};
  margin-left: 0.4rem;
`;
