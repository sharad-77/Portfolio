import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar, Sidebar1, Sidebar2 } from './components';
import { ContactPage, HomePage, NotFoundPage, ServicePage } from './pages';

function App() {
  return (
    <Router>
      <div className="flex w-full">
        <aside className="w-[225px] h-screen flex flex-col">
          <Sidebar1 />
        </aside>

        <main
          id="main-content"
          className="flex flex-col items-center flex-1 h-screen scrollbar-hide overflow-y-auto border border-[rgb(32,32,33)]"
        >
          <div className="w-full flex-shrink-0 h-[60px]">
            <Navbar />
          </div>
          <div className="max-w-[750px] py-[80px] w-full flex items-center justify-center">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>

        <aside className="w-[225px] h-screen flex flex-col">
          <Sidebar2 />
        </aside>
      </div>
    </Router>
  );
}

export default App;
