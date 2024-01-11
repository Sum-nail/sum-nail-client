//마이페이지 입니다!
'use client';
import { LogoIcon } from '@/public/icons';
import { BackIcon } from '@/public/icons';
import Image from 'next/image';
import ProfileCard from '@/app/mypage/ProfileCard';
import SocialLoginBtn from '@/components/myPage/SocialLoginBtn';
import styled from '@emotion/styled';
import { useState } from 'react';
import StoredList from './StoredList';

export default function Home() {
  const [userId, setUserId] = useState('hello');
  return (
    <Container>
      <Heading>
        <Image src={LogoIcon} alt="image" width={80} height={20} />
        <BackIcon />
      </Heading>
      <MainContainer>
        <ProfileCard nickname={'고윤정'} email="sumnail@kakao.com" profileImg="https://picsum.photos/200/300" />
        <StoredList userId={userId} />
        {!userId && (
          <SocialBtnContainer>
            <SocialLoginBtn social="google" txt="Google 계정으로 로그인" />
            <SocialLoginBtn social="kakao" txt="카카오 계정으로 로그인" />
          </SocialBtnContainer>
        )}
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.section`
  padding: 0 1.5rem;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 6rem;
  padding: 1.9rem 1.6rem;
`;

const SocialBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-top: 7.4rem;
`;
