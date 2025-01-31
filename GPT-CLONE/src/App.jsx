
import "./index.css";
import ContextProvider from "./contexts/ContextProvider";
import Landing from "./pages/Container/MobileContainer";
import Main from "./pages/Main/Main";

function App() {
  return (
    <ContextProvider>
      <Landing/>
      <div>
        <Main/>
      </div>
    </ContextProvider>
  );
}

export default App;
