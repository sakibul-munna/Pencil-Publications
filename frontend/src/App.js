import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import FooterPage from "./components/FooterPage";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <FooterPage />
    </>
  );
};

export default App;
