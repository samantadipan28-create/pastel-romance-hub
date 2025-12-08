import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Reasons from "./pages/Reasons";
import LoveLetter from "./pages/LoveLetter";
import Surprise from "./pages/Surprise";
import Ending from "./pages/Ending";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/love-letter" element={<LoveLetter />} />
          <Route path="/surprise" element={<Surprise />} />
          <Route path="/ending" element={<Ending />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
