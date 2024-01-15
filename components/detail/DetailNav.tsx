'use client';

import { BackButtonIcon, BookmarkIcon, MainLogoIcon } from '@/public/icons';
import { MainLogoIconPng } from '@/public/images';
import styled from '@emotion/styled';
import Image from 'next/image';

function DetailNav() {
  return (
    <NavContainer>
      <BackButton />
      <Image src={MainLogoIconPng} alt="로고" />
      <Bookmark />
    </NavContainer>
  );
}

export default DetailNav;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BackButton = styled(BackButtonIcon)`
  margin-top: 0.8rem;
`;

const Bookmark = styled(BookmarkIcon)`
  margin-top: 1.1rem;
`;
