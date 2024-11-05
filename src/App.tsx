// Components
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@/components/Router.tsx";
import { Navbar } from "@/components/Navbar.tsx";

function App() {
  return (
    <Router>
      <main className="container max-w-4xl mx-auto px-4 relative">
        <Navbar />
        <AppRouter />
      </main>
    </Router>
  )
}

export default App;
