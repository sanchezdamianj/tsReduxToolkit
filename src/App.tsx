import "./App.css";
import { NavBar } from "./components";
import Home from "./pages/Home/Home";
import store from "./redux/store";
import { Provider } from 'react-redux'
import { LayoutContainer } from "./styled-components";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
      </Provider>
    </>
  );
}

export default App;
