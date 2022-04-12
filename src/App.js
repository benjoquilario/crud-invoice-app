import { GlobalProvider } from './context/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceView from './pages/InvoiceView';
import Home from './pages/Home';

function App() {
   return (
      <GlobalProvider>
         <Router>
            <div className="min-h-screen overflow-hidden bg-[#121212]">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/invoice/:id" element={<InvoiceView />} />
               </Routes>
            </div>
         </Router>
      </GlobalProvider>
   );
}

export default App;
