import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 30px 0;
`;
export const Logo = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-bottom: 20px;
    margin-right: 10px;
  }
`;
export const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.grey};
  margin: 15px;
`;
