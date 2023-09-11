import "./styles.css";
import logo from "./assets/font.png";

export default function App() {
  return (
    <div className="Background">
      <form>
        <img src={logo} alt="Logo" width="200px" />
        <div className="input">
          <label htmlFor="fname">Name:</label>
          <input type="text" id="fname" required />
        </div>
        <div className="input">
          <label htmlFor="femail">Email:</label>
          <input type="text" id="femail" required />
        </div>
        <div className="input">
          <label htmlFor="fcontact">Contact:</label>
          <input type="text" id="fcontact" required />
        </div>
        <div className="input">
          <label htmlFor="fcontact">College:</label>
          <input type="text" id="fcontact" />
        </div>
        <button>
          Make Payment
        </button>
      </form>
    </div>
  );
}
