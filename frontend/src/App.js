import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <h1> Welcome to Pencil Publications </h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
