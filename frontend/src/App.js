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
          exact
          element={
            <BooksScreen
              headerText={"অমর একুশে গ্রন্থমেলা ২০১৯"}
              selectedYear={"2019"}
            />
          }
        />
        <Route
          path="/books/2020"
          exact
          element={
            <BooksScreen
              headerText={"অমর একুশে গ্রন্থমেলা ২০২০"}
              selectedYear={"2020"}
            />
          }
        />
        <Route
          path="/books/2021"
          exact
          element={
            <BooksScreen
              headerText={"অমর একুশে গ্রন্থমেলা ২০২১"}
              selectedYear={"2021"}
            />
          }
        />
        <Route
          path="/books/2022"
          exact
          element={
            <BooksScreen
              headerText={"অমর একুশে গ্রন্থমেলা ২০২২"}
              selectedYear={"2022"}
            />
          }
        />
        <Route
          path="subject/novels"
          exact
          element={<BooksScreen headerText={"উপন্যাস"} selectedYear={"0"} />}
        />
        <Route
          path="subject/stories"
          exact
          element={<BooksScreen headerText={"গল্প"} selectedYear={"0"} />}
        />
        <Route
          path="subject/poems"
          exact
          element={<BooksScreen headerText={"কবিতা"} selectedYear={"0"} />}
        />
        <Route
          path="subject/childish"
          exact
          element={<BooksScreen headerText={"শিশুতোষ"} selectedYear={"0"} />}
        />
        <Route
          path="subject/comics"
          exact
          element={<BooksScreen headerText={"রম্য"} selectedYear={"0"} />}
        />
        <Route
          path="subject/travelStories"
          exact
          element={
            <BooksScreen headerText={"ভ্রমণকাহিণী"} selectedYear={"0"} />
          }
        />
        <Route
          path="subject/essays"
          exact
          element={<BooksScreen headerText={"প্রবন্ধ"} selectedYear={"0"} />}
        />
        <Route
          path="subject/sports"
          exact
          element={<BooksScreen headerText={"খেলাধুলা"} selectedYear={"0"} />}
        />
      </Routes>
      {location.pathname.match(/admin/) === null && <Footer />}
    </Container>
  );
};

export default App;
