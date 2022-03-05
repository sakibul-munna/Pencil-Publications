import { Container } from "react-bootstrap";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import AuthorScreen from "./screens/AuthorScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminDashboardScreen from "./screens/AdminDashboardScreen";
import Footer from "./components/Footer";
import BooksScreen from "./screens/BooksScreen";

const App = () => {
  let location = useLocation();
  return (
    <Container fluid className="gx-0">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/about" element={<AboutScreen />} />
        <Route exact path="/contact" element={<ContactScreen />} />
        <Route exact path="/authors" element={<AuthorScreen />} />
        <Route exact path="/admin/login" element={<AdminLoginScreen />} />
        <Route
          exact
          path="/admin/dashboard"
          element={<AdminDashboardScreen />}
        />
        <Route
          path="/books/2019"
          element={<BooksScreen headerText={"অমর একুশে গ্রন্থমেলা ২০১৯"} />}
        />
        <Route
          path="/books/2020"
          element={<BooksScreen headerText={"অমর একুশে গ্রন্থমেলা ২০২০"} />}
        />
        <Route
          path="/books/2021"
          element={<BooksScreen headerText={"অমর একুশে গ্রন্থমেলা ২০২১"} />}
        />
        <Route
          path="/books/2022"
          element={<BooksScreen headerText={"অমর একুশে গ্রন্থমেলা ২০২২"} />}
        />
      </Routes>
      {location.pathname.match(/admin/) === null && <Footer />}
    </Container>
  );
};

export default App;
