import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import HeaderContainer from "./components/HeaderContainer";
import AdContainer from "./components/AdContainer";

const App = () => {
  return (
    <Container fluid className="gx-0">
      <Header />
      <HeaderContainer />
      <AdContainer />
      <main className="py-5">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </Container>
  );
};

export default App;
