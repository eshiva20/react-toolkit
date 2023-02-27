import "./App.css";
import Cakeview from "./features/cake/cakeView";
import Tofeeview from "./features/tofee/toffeView";
import Icecreamview from "./features/icecream/icecreamView";
import Userview from "./features/user/userView";

function App() {
  return (
    <div className="App">
      <Cakeview />
      <Icecreamview />
      <Tofeeview />
      <Userview />
    </div>
  );
}

export default App;
