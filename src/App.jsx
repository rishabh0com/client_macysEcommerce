import { useState } from "react";
import "./App.css";
import AllRoutes from "./routes/AllRoutes.jsx";
import { UserProvider } from "./contexts/detail.user.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <AllRoutes />
    </UserProvider>
  );
}

export default App;
