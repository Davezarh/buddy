import styled from 'styled-components';
export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  &::not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
export const Average = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: none;
  background-color: ${(users) =>
    users.children < 3
      ? users.theme.colors.error
      : users.children <= 4
      ? users.theme.colors.warning
      : users.children > 4
      ? users.theme.colors.success
      : ''};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
`;
export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 25px;
`;
export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;
export const Attendace = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
