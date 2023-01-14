import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logincomponent from "./components/login";
import Codescomponent from "./components/Codes";
import Graphcomponent from "./components/Graph";
import Gridcomponent from "./components/Grids";
import Layout from "./components/Layout";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Logincomponent />} />
      <Route path="/home" element={<Layout />}>
        <Route path="/home/codes" element={<Codescomponent />} />
        <Route path="/home/graph" element={<Graphcomponent />} />
        <Route path="/home/grid" element={<Gridcomponent />} />
      </Route>
    </Routes>
  );
}
