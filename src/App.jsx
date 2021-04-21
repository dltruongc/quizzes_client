import "./App.scss";
import BodyContainer from "./components/BodyContainer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
// import Explore from "./pages/Explore";
import MyLibrary from "./pages/MyLibrary";

function App() {
  return (
    <>
      <Header />
      <BodyContainer>
        <SideBar />
        {/* <Explore /> */}
        <MyLibrary />
      </BodyContainer>
    </>
  );
}

export default App;
