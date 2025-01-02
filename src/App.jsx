import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Pricing from "./components/pricing/Pricing";
import Layout from "./pages/Layout";
import InputForm from "./pages/form/InputForm";
import Main from "./components/pricing/Main";
import { useState } from "react";

const initialState = {
  name: "",
  description: "",
  price: 0,
  img: null,
  category: "",
  stock: 0,
  list:[],
};
export default function App() {
  const [state, setState] = useState(initialState);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<Pricing />} /> */}
            <Route path="/" element={<Main state={state} setState={setState} />}/>
            <Route path="/create-product" element={<InputForm state={state} setState={setState} />} />
            

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
