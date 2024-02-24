import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/container/AppLayout";

import AddingForm from "../pages/AddingForm";
import List from "../pages/List";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<List />} />
        <Route path="/add" element={<AddingForm />} />
        {/* <Route path="*" element={<h1>404</h1>} /> */}
      </Route>
    </Routes>
  );
}

export default AppRoute;
