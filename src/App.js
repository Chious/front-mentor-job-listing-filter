import "./App.css";
import Image from "mui-image";
import header from "./images/bg-header-desktop.svg";
import CompanyInfo from "./CompanyInfo";

import data from "./data.json";
import SearchBar from "./SearchBar";

function App() {
  const infos = data.map(function (item, i) {
    return <CompanyInfo data={item} key={i} />;
  });

  return (
    <div className="App">
      <Image src={header} duration={0} />

      <div
        className="main"
        style={{ maxWidth: "100vw", background: "hsl(180, 52%, 96%)" }}
      >
        <SearchBar />
        {infos}
      </div>

      <div className="attribution">
        Challenge by{"Chiou Jia Sheng"}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">Your Name Here</a>
        .
      </div>
    </div>
  );
}

export default App;
