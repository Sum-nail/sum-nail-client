//마이페이지 입니다!
'use client';
import { BackIcon } from '@/public/icons';
import { ProfileDefault } from '@/public/icons';
import { NailArtGray } from '@/public/icons';
import { FlowerColored } from '@/public/icons';
import SocialLoginBtn from '@/components/myPage/SocialLoginBtn';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Container>
      <Heading>
        <IconWrapper>
          <BackIcon />
        </IconWrapper>
      </Heading>
      <MainContainer>
        <ProfileContainer>
          <ProfileDefault />
          <ProfileTxt>로그인하세요</ProfileTxt>
        </ProfileContainer>
        <ContentContainer>
          <StoredTxtContainer>
            <FlowerColored />
            <StoredTitle>저장</StoredTitle>
          </StoredTxtContainer>
          <StoredEmpty>
            <NailArtGray />
            <EmptyTxt>로그인하면 네일샵을 저장할 수 있어요.</EmptyTxt>
            <SocialBtnContainer>
              <SocialLoginBtn social="google" txt="Google 계정으로 로그인" />
              <SocialLoginBtn social="kakao" txt="카카오 계정으로 로그인" />
            </SocialBtnContainer>
          </StoredEmpty>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Heading = styled.h1`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 6rem;
  padding: 1.9rem 1.6rem;
`;
const IconWrapper = styled.div`
  margin-left: auto;
  width: fit-content;
`;

const MainContainer = styled.main`
  padding: 0 1.5rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 23.6rem;
`;

const ProfileTxt = styled.h2`
  ${theme.fonts.B24}
  color: ${({ theme }) => theme.colors.gray91};
  text-align: center;
  letter-spacing: -0.1rem;
  margin-top: 1.6rem;
`;

const ContentContainer = styled.section`
  padding-top: 1.7rem;
`;

const StoredTxtContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const StoredTitle = styled.h3`
  ${theme.fonts.B18}
`;

const StoredEmpty = styled.div`
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyTxt = styled.h3`
  color: ${theme.colors.gray91};
  ${theme.fonts.R11_2}
  margin-top: 1rem;
`;

const SocialBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-top: 7.4rem;
`;
