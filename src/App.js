import { Provider } from "react-redux";
import { store } from "./context/store/store";
import Routes from "./routes/Routes";
import "./app.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
