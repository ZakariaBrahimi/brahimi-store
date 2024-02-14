import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SanityDataProvider } from "./context/SanityDataContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <SanityDataProvider>
          <App />
        </SanityDataProvider>
      </QueryClientProvider>
    </NextUIProvider>
  </BrowserRouter>
);
