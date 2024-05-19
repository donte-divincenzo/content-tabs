/* eslint-disable react/prop-types */
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {

  const leftLinks = [
    { href: "#", text: "ABOUT US" },
    { href: "#", text: "WHY US" },
    { href: "#", text: "CATALOG" },
  ];

  const rightLinks = [
    { href: "#", text: "PINTEREST" },
    { href: "#", text: "CATALOG" },
    { href: "#", text: "CONTACT US" },
  ];

  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <Header links={leftLinks} />
          <img src="/vite.svg" alt="LOGO" />
          <Header links={rightLinks} />
        </div>
      </header>
    </div>
  );
};

export default App;
