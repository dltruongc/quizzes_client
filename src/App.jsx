import "./App.scss";
import BodyContainer from "./components/BodyContainer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Explore from "./pages/Explore";

function App() {
  return (
    <>
      <Header />
      <BodyContainer>
        <SideBar />
        <Explore />
      </BodyContainer>
    </>
  );
}

export default App;
