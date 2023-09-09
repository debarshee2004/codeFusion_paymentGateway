import "./styles.css";
import logo from "./assets/font.png";

export default function App() {
  return (
    <div className="Background">
      <form>
        <img src={logo} alt="Logo" width="200px" />
        <div className="input">
          <label>Name:</label>
          <input type="text" id="fname" />
        </div>
        <div className="input">
          <label>Email:</label>
          <input type="text" id="fname" />
        </div>
        <div className="input">
          <label>Contact:</label>
          <input type="text" id="fname" />
        </div>
        <button>
          Make Payment
        </button>
      </form>
    </div>
  );
}
