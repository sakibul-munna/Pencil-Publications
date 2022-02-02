import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import AuthorScreen from "./screens/AuthorScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container fluid className="gx-0">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/about" element={<AboutScreen />} />
        <Route exact path="/contact" element={<ContactScreen />} />
        <Route exact path="/authors" element={<AuthorScreen />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
