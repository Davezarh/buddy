import React, { useState, useEffect } from 'react';
import { users } from 'data/data';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };
  return (
    <Wrapper>
      <h1>{isloading ? 'Loading...' : 'Users List'}</h1>
      <ul>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};
export default UsersList;
