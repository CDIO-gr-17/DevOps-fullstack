import "./App.css";
import NavigationMenu from "./components/navigation-menu.tsx";
import Footer from "./components/footer.tsx";
import SupportPage from "./views/support/support-page.tsx";

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
