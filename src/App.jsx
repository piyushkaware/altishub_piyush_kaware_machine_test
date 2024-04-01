
// import { useGlobal } from "./context/GlobalContext";
// import { Route, Routes } from "react-router-dom";
// import Layouts from "./page/layouts";
import InvoiceTable from "./components/InvoiceTable";
function App() {

  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Layouts/>} />
    </Routes> */}
   <div>
    <InvoiceTable/>
   </div>
    </>
  );
}

export default App;
