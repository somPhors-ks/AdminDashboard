import Sidebar from "./Component/Sidebar/Sidebar";
import "./App.css";
import MainContent from "./Component/MainContent";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <div className="body">
        <div className="sidbar">
          <Sidebar />
        </div>
        <div className="main">
          <Header />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
