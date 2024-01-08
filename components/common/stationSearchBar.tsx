import { MapPinIcon } from '@/public/icons';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

function StationSearchBar({ cntPage }: { cntPage: string }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (cntPage == 'search' && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <SearchContainer>
      <SearchBar
        ref={inputRef}
        placeholder={cntPage == 'search' ? '지하철 역 이름을 입력해주세요.' : '지하철역'}
        onClick={cntPage == 'home' ? () => router.push('/search') : undefined}
      ></SearchBar>
      <MapIconWrapper>
        <MapPinIcon />
      </MapIconWrapper>
    </SearchContainer>
  );
}

export default StationSearchBar;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchBar = styled.input`
  display: flex;
  gap: 1rem;
  outline: none;
  border: none;
  align-items: center;
  margin: 1.6rem 0rem;
  height: 4.6rem;
  width: 36rem;
  border-radius: 40px;
  padding-left: 4rem;
  background: ${({ theme }) => theme.colors.pink_pale};
  box-shadow: 0px 1px 4px 0px rgba(255, 103, 176, 0.16) inset;
  color: ${({ theme }) => theme.colors.pink_warm};
  font: ${({ theme }) => theme.fonts.M15_2};

  &::placeholder {
    color: ${({ theme }) => theme.colors.pink_light};
    font: ${({ theme }) => theme.fonts.M15_2};
  }
`;

const MapIconWrapper = styled.div`
  position: absolute;
  left: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
