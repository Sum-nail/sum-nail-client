import styled from '@emotion/styled';
import { ProfileDefault } from '@/public/icons';
import { useMemo } from 'react';
import theme from '@/styles/theme';
interface ProfileCardProps {
  nickname?: string;
  email?: string;
  profileImg?: string;
}
function ProfileCard({ nickname, email, profileImg }: ProfileCardProps) {
  const nameTxt = useMemo(() => (nickname ? `${nickname} 님` : '로그인하세요'), [nickname]);

  return (
    <ProfileCardContainer>
      {profileImg ? <Profile imgSrc={profileImg} /> : <ProfileDefault />}
      <NickName color={nickname && theme.colors.black}>{nameTxt}</NickName>
      {email && <Email>{email}</Email>}
    </ProfileCardContainer>
  );
}

export default ProfileCard;

interface ProfileProps {
  imgSrc: string;
}

const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.6rem;
  height: 23.6rem;
`;

const Profile = styled.div<ProfileProps>`
  background: ${({ imgSrc }) => `url(${imgSrc})`};
  background-size: 'cover';
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
`;

const NickName = styled.h2`
  margin-top: 1.6rem;
  color: ${({ color }) => color || theme.colors.gray91};
  font: ${({ theme }) => theme.fonts.B24};
`;

const Email = styled.p`
  color: ${({ theme }) => theme.colors.gray91};
  font: ${({ theme }) => theme.fonts.R14};
`;
