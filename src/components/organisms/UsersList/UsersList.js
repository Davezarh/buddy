import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <StyledList>
        <h1>Users List</h1>
        <ul>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} userData={userData} />
          ))}
        </ul>
      </StyledList>
    </>
  );
};
export default UsersList;
