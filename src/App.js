import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Home,
  ExerciseDetail,
  NotMatch,
  Footer,
  Navbar,
} from "./Components/CompContainer";
import { Routes, Route } from "react-router-dom";
const App = () => {
  console.log(process.env);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exercises/:exerciseID" element={<ExerciseDetail />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
