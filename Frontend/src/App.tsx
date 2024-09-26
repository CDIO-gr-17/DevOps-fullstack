import "./App.css";
import profilePlaceholder from "./assets/profile_picture.png";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <>
      <div className="personalCard">
        <img
          className="profilePicture"
          src={profilePlaceholder}
          alt="Profile picture"
        />
        <h1>John Doe</h1>
        <h2>johndoe@mail.com</h2>
        <h2>+45 12345678</h2>
      </div>
      <hr className="rounded"></hr>
      <div className="profileButtons">
        <button className="button">Favorit auktioner</button>
        <br />
        <button className="button">Mine auktioner</button>
        <br />
        <button className="button">Rediger profil</button>
      </div>
      <hr className="rounded"></hr>
      <div className="auctions">
        <h1>Igangværende auktioner</h1>
        <ImageCarousel />
      </div>
    </>
  );
}

export default App;
