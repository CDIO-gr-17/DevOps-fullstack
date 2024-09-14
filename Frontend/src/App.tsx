import "./App.css";
import NavigationMenu from "./components/navigation-menu.tsx";
import Footer from "./views/footer.tsx";
import SupportPage from "./views/support-page.tsx";

function App() {
  return (
    <>
      <NavigationMenu />
      <SupportPage />
      <Footer />
    </>
  );
}

export default App;
