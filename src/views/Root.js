import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/Styles/globalStyle';
import { theme } from 'assets/Styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Wrapper } from './Root.styled';
import AddUser from './AddUser';
import Dashboard from './DashBoard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import UsersProvider from '../providers/UsersProviders';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/settings"></Route>
                <Route path="/logout"></Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
