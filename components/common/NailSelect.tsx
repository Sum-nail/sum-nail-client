import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@/styles/theme';
interface NailSelectProps {
  items: string[];
  handler: (item: string) => void;
  selected: string;
}
function NailSelect({ items, selected, handler }: NailSelectProps) {
  return (
    <Container>
      {items.map((item) => (
        <RadioItem selected={item === selected} onClick={() => handler(item)}>
          {item}
        </RadioItem>
      ))}
    </Container>
  );
}

export default NailSelect;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
interface ItemProps {
  selected: boolean;
}

const RadioItem = styled.div<ItemProps>`
  display: flex;
  padding: 1.1rem 1.4rem;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  ${({ selected }) =>
    selected
      ? css`
          border-radius: 4rem;
          color: ${theme.colors.white};
          ${theme.fonts.B15_1};
          border: 0.1rem solid ${theme.colors.pinkFF};
          background: linear-gradient(
            102deg,
            rgba(255, 153, 214, 0.62) 14.29%,
            #ff95c8 57.89%,
            rgba(255, 153, 165, 0.44) 93.26%,
            #ff99d6
          );
          box-shadow: 0rem 0rem 0.4rem 0.2rem rgba(255, 97, 115, 0.5);
        `
      : css`
          border-radius: 3rem;
          border: 0.1rem solid ${theme.colors.grayE5};
          background: ${theme.colors.white};
          color: ${theme.colors.gray69};
          ${theme.fonts.R15_2}
        `}
`;
