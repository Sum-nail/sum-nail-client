import theme from '@/styles/theme';
import { SubwayType } from '@/types';
import { line_color } from '@/utils/subway_line_color';
import styled from '@emotion/styled';

const DEFAULT_COLOR = '#666699';

function StationLine({ stationLine }: Pick<SubwayType, 'stationLine'>) {
  const deleteFirstZero = (stationLine: string) => {
    if (stationLine[0] == '0') return stationLine.slice(1);
    return stationLine;
  };

  const deleteLineString = (stationLine: string) => {
    if (stationLine[0] == '0') stationLine = stationLine.slice(1);
    if (stationLine.includes('호선')) return stationLine.replace('호선', '');
    if (stationLine.at(-1) === '선') return stationLine.slice(0, -1);
    return stationLine;
  };

  return (
    <>
      {Array.isArray(stationLine) ? (
        stationLine.map((num, index) => (
          <StationLineIcon key={index} borderColor={line_color[deleteFirstZero(num)] || DEFAULT_COLOR}>
            <p className="font-system5_medium text-system5_medium text-white ">{deleteLineString(num)}</p>
          </StationLineIcon>
        ))
      ) : (
        <StationLineIcon borderColor={line_color[deleteFirstZero(stationLine)] || DEFAULT_COLOR}>
          {deleteLineString(stationLine)}
        </StationLineIcon>
      )}
    </>
  );
}

export default StationLine;

const StationLineIcon = styled.div<{ borderColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.2rem;
  /* color: ${(props) => props.borderColor}; */
  font: ${theme.fonts.M13_2};
  /* background-color: white; */

  color: white;
  background-color: ${(props) => props.borderColor};
  /* border: 1.5px solid ${(props) => props.borderColor}; */
  border-radius: 2rem;
  margin-right: 0.8rem;
`;
