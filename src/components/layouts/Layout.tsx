import Footer from "@components/layouts/Footer";
import Header from "@components/layouts/Header";
import { Outlet } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Contents = styled.main`
  min-height: calc(100vh - 120px);
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <Contents>
        <Outlet />
      </Contents>
      <Footer />
    </Container>
  );
};

export default Layout;
