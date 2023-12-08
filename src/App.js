import Home from "./pages/home";
import House from "./pages/singleHouse";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/house/:id" element={<House />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <div className="container mx-auto p-8 max-w-6xl space-y-4 bg-white">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
