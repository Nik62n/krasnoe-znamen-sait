import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import General from "./pages/General";
import Vacancies from "./pages/Vacancies";
import Benefits from "./pages/Benefits";
import Events from "./pages/Events";
import Forums from "./pages/Forums";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<General />} />
            <Route path="vacancies" element={<Vacancies />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="events" element={<Events />} />
            <Route path="forums" element={<Forums />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* Футер более компактный */}
      <footer className="bg-[#e32417] text-white py-2 px-4 w-full">
        <div className="container mx-auto text-center">
          <p className="text-white text-xs">
            Адрес: г. Рязань, пр. Шабулина, 2А | Телефон: +7 (495) 123-45-67 |
            Email: info@krasnoe-znamya.ru
          </p>
        </div>
      </footer>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
