import CanteenSelection from "./canteen-selection/CanteenSelection";
import DaySelection from "./day-selection/DaySelection";
import DietSelection from "./diet-selection/DietSelection";

import "./Header.css";

function Header() {
  return (
    <header>
      <div className="row">
        <h1>
          <a href="#">UUlm Mensa</a>
        </h1>
        <nav style={{marginLeft: "auto"}}>
          <CanteenSelection />
          <span style={{margin: ".7em"}} />
          <DietSelection />
        </nav>
      </div>
      <DaySelection />
    </header>
  );
}

export default Header;
