import Button from "./components/Button.js";
import "./App.css";
import Button2 from "./components/Button2.js";


function App() {
  return (
   <div className="container">
   <h1 className="title">
      👑 Burger Queen <span aria-label="emoji" role="img">🍔</span>
   </h1>
      <Button>Pedidos</Button>
      <Button2>Cocina</Button2>
</div>
  );
}

export default App;
