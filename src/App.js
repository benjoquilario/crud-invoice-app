import { GlobalProvider } from './context/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceView from './pages/InvoiceView';
import Home from './pages/Home';
import CreateInvoice from './pages/CreateInvoice';
import Header from './components/Layout/Header';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="min-h-screen overflow-hidden bg-[#fafafa]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateInvoice />} />
            <Route path="/invoice/:id" element={<InvoiceView />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
