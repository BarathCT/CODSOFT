import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import AtmMachine from './pages/AtmMachine';

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <Routes>
          <Route 
            path="/" 
            element={<AuthPage onAuthSuccess={setCurrentAccount} />} 
          />
          <Route 
            path="/atm" 
            element={<AtmMachine accountNumber={currentAccount} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;