import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Average, Name, Attendace, Paragraph } from './UsersListItem.styles';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types/index';
import { UsersContext } from '../../../providers/UsersProviders';

const UsersListItem = ({ userData: { average, name, attendance } }) => {
  const context = useContext(UsersContext);
  return (
    <Wrapper>
      <Average>{average}</Average>
      <Paragraph>
        <Name>{name}</Name>
        <Attendace>attendance:{attendance}</Attendace>
      </Paragraph>
      <DeleteButton onClick={() => context.deleteUser(name)}></DeleteButton>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};
export default UsersListItem;
