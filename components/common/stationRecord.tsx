import styled from '@emotion/styled';
import { DeleteIcon } from '@/public/icons';

function StationRecord() {
  return (
    <Main>
      <StationTags>
        <StationTag>역삼역</StationTag>
        <StationTag>디지털미디어시티역</StationTag>
        <StationTag>답십리역</StationTag>
      </StationTags>
      <RecordDeletion>
        <DeleteIcon />
        기록삭제
      </RecordDeletion>
    </Main>
  );
}

export default StationRecord;

const Main = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  width: 100%;
`;

const RecordDeletion = styled.div`
  display: flex;
  width: 20%;
  font: ${({ theme }) => theme.fonts.R13_2};
  color: ${({ theme }) => theme.colors.grayD9};
`;

const StationTags = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 80%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StationTag = styled.div`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background: ${({ theme }) => theme.colors.grayF7};
  color: ${({ theme }) => theme.colors.gray91};
  font: ${({ theme }) => theme.fonts.R13_2};
`;
