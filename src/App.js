import { GlobalProvider } from './context/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceView from './pages/InvoiceView';
import Home from './pages/Home';
import CreateInvoiceForm from './components/Form/CreateInvoiceForm';
import Header from './components/Layout/Header';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="min-h-screen overflow-hidden bg-[#fafafa]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateInvoiceForm />} />
            <Route path="/invoice/:id" element={<InvoiceView />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
