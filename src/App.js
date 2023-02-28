import MenuTitle from "./components/MenuTitle";
import "./styles/styles.scss";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper"></div>
      <div className="rectangleLessPurple"></div>
      <div className="rectanglePurple"></div>

      {/* <MenuTitle /> */}
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
