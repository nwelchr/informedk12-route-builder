import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import FormContainer from "./components/formContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <FormContainer />
      </div>
    </Provider>
  );
}

export default App;
