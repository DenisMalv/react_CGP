import { Container, MainContentWraper } from 'components/App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Header, Footer, MainContent } from './Layout.styled';
// import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

import { LeftSide } from 'components/LeftSide/LeftSide';
import { CenterSide } from 'components/CenterSide/CenterSide';
import { RightSide } from 'components/RightSide/RightSide';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <MainContent>
        <Container>
          <MainContentWraper>
            <Suspense fallback={<Loader />}>
              <LeftSide />
              <CenterSide />
              <RightSide />
            </Suspense>
          </MainContentWraper>
        </Container>
      </MainContent>
      <Footer>
        <Container></Container>
      </Footer>
    </>
  );
};

export default Layout;
