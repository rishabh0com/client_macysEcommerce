import { useState , useContext, useEffect} from "react";
import styles from "./App.module.css";
import AllRoutes from "./routes/AllRoutes.jsx";
import { UserContext } from "./contexts/detail.user.jsx";
import Loader from "./components/subComponents/Loader.jsx";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);
  const {loading,setLoading}  = useContext(UserContext);
  const location = useLocation();
  console.log("in app location",location.pathname);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 250);
  }, [location]);
  return (
    <div className={styles.app}>
    <Navbar/>
          {loading ? <Loader/> : <AllRoutes/>}
     <Footer/>

    </div>
  );
}

export default App;
