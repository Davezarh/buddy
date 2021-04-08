import React, { useState } from 'react';
import { users as usersData } from 'data/data';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/Styles/globalStyle';
import { theme } from 'assets/Styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Wrapper } from './Root.styled';
import AddUser from './AddUser';
import Dashboard from './DashBoard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
              </Route>
              <Route path="/settings"></Route>
              <Route path="/logout"></Route>
              <Route path="/">
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
