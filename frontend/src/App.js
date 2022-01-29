import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import HeaderContainer from "./components/HeaderContainer";

const App = () => {
  return (
    <>
      <Header />
      <HeaderContainer />
      <main className="py-5">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
