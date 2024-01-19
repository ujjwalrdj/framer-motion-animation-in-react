import "./App.css";
import Tab from "./component/Tab";




function App() {
  
  return (
    <>
      <div className="main-container">
        <h1 style={{ textAlign: "center", marginBlock: "1rem" }}>
          Chose your pet!
        </h1>
       <Tab/>
      </div>
    </>
  );
}

export default App;
