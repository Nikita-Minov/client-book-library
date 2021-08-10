import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import styled from 'styled-components';
import Main from './pages/Main.jsx';
import {getBooks, getUserBooks} from './redux/books-reducer';
import { getUser } from './redux/user-reducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterContainer from './pages/Register.jsx';
import { connect } from 'react-redux';
import ProfileContainer from "./pages/Profile";
import Container from '@material-ui/core/Container';
import MyLibrary from "./pages/MyLibrary";
import LoginContainer from "./pages/Login.jsx";

function App(props) {
  useEffect( () => {
    Promise.all([props.getBooks(), props.getUser(), props.getUserBooks(props.userId)]).then(() => {
      console.log('ok')
    });
  });

  const [openLoginForm, setOpenLoginForm] = React.useState(false);
  const [openRegisterForm, setOpenRegisterForm] = React.useState(false);

  const handleClickOpenLoginForm = () => {
    setOpenLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setOpenLoginForm(false);
  };


  const handleClickOpenRegisterForm = () => {
    setOpenRegisterForm(true);
  };

  const handleCloseRegisterForm = () => {
    setOpenRegisterForm(false);
  };



  return (
    <AppWrapper>
      <Router>
        <Header handleClickOpenLoginForm={handleClickOpenLoginForm} handleClickOpenRegisterForm={handleClickOpenRegisterForm} />
        <Container>
          <MainSectionWrapper>
            <BooksWrapper>
              <Route path="/" exact render={() => <Main />} />
              <Route path="/profile" render={() => <ProfileContainer />} />
              <Route path="/my-library" render={() => <MyLibrary />} />
            </BooksWrapper>
            <LoginContainer handleCloseLoginForm={handleCloseLoginForm} openLoginForm={openLoginForm}/>
            <RegisterContainer handleCloseRegisterForm={handleCloseRegisterForm} openRegisterForm={openRegisterForm}/>
          </MainSectionWrapper>
        </Container>
      </Router>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  background-color: #61b7cf;
`;

const MainSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  align-content: stretch;
`;

const BooksWrapper = styled.div`
  width: 100%;
`;

const MapStateToProps = (state) => (
  {
   userId: state.user.user.id
  }
)

const AppContainer = connect(MapStateToProps, {
  getBooks,
  getUser,
  getUserBooks
})(App);

export default AppContainer;
