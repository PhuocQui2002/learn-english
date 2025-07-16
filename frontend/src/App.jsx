import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routers } from "./routes";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.page />} 
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
