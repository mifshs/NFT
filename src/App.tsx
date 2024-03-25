import Header from "./components/header/header";
import Started from "./components/header/pages/front/started";
import Trending from "./components/header/pages/front/trending"


function App() {
  return (
    <div className="App">
     
      <Header/>
      <Started/>
      <Trending/>
    </div>
  );
}

export default App;
