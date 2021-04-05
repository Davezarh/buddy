import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Average, Name, Attendace, Paragraph } from './UsersListItem.styles';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance } }) => (
  <Wrapper>
    <Average>{average}</Average>
    <Paragraph>
      <Name>{name}</Name>
      <Attendace>attendance:{attendance}</Attendace>
    </Paragraph>
    <DeleteButton onClick={() => deleteUser(name)}></DeleteButton>
  </Wrapper>
);
UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};
export default UsersListItem;
