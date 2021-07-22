import { useState } from 'react';

import Navbar from "./components/Navbar"
import Home from "./pages/Home.js"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
