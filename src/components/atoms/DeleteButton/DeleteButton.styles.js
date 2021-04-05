import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: ${({ isSecondary }) => (isSecondary ? '#e7e044' : '#c0c7d6')};
  svg {
    width: 100%;
    height: 100%;
  }
`;
