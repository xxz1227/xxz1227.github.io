import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import DiaryDetail from "@/pages/DiaryDetail";
import WorkDetail from "@/pages/WorkDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diary/:slug" component={DiaryDetail} />
      <Route path="/work/:slug" component={WorkDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    
  );
}

export default App;
