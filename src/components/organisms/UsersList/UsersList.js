import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';

const UsersList = ({ users }) => {
  return (
    <>
      <StyledList>
        <h1>Users List</h1>
        <ul>
          {users.map((userData) => (
            <UsersListItem userData={userData} />
          ))}
        </ul>
      </StyledList>
    </>
  );
};
export default UsersList;
