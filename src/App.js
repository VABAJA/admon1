import './assets/css/App.css';
import NV_Container from './components/NavBar/NavBarContainer';
import SB_Container from './components/SideBar/SideBarContainer';

function App() {
  return (
    <div className="App">
      <NV_Container />
      {/* NavBar  */}
      <SB_Container />
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
