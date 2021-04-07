import React, { useState } from 'react';
import { users as usersData } from 'data/data';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FormsField/FormField';
import Button from 'components/atoms/Button/Button';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};
const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value, //Klucz w obiekcie "e.target.name" jeżeli nastąpi zmiana to zostanie przypisane do naszego klucz w obiekcie.
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <h1>Add new student</h1>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}></FormField>
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange}></FormField>
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange}></FormField>
        <Button type="submit">Add</Button>
      </Wrapper>
      <Wrapper>
        <h1>Users List</h1>
        <ul>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};
export default UsersList;
