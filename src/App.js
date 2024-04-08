import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/userview/HomePage";
import AdminDashboard from "./pages/adminview/AdminDashboard";

const App = () => {
  const loggedIdUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {loggedIdUser && !loggedIdUser.isAdmin && <HomePage />}
          {loggedIdUser && loggedIdUser.isAdmin && <AdminDashboard />}
          {!loggedIdUser && <LoginPage />}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
