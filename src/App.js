import React, {Fragment} from 'react';
// Components
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import RegisterForm from './components/Register/RegisterForm';

import styled from 'styled-components';

const Main = styled.div`
  padding: 10px;
`;

function App() {

  return (
    <Fragment>
      <Header />
      <Main>
        <RegisterForm />
      </Main>
      <Footer />
    </Fragment>
  );
}

export default App;
