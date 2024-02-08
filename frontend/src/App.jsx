import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import CallUsTopBar from "./components/CallUsTopBar";
import Product from "./pages/product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Store from "./pages/store/Store";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="text-right relative min-h-screen">
      <QueryClientProvider client={queryClient}>
        <CallUsTopBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path=":product_name/:product_id" element={<Product />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
