import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AnimalsPage from "./components/AnimalsPage";
import DonationsPage from "./components/DonationsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/animals" element={<AnimalsPage></AnimalsPage>}></Route>
      <Route path="/donations" element={<DonationsPage></DonationsPage>}></Route>
    </Routes>
  )
}

export default App