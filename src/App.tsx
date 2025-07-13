import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar, Sidebar1, Sidebar2, Footer } from './components';
import { ContactPage, HomePage, NotFoundPage, ServicePage } from './pages';

function App() {
  return (
    <Router>
      <div className="flex w-full h-screen">
        <aside className="hidden xl:w-[225px] xl:h-screen xl:flex xl:flex-col">
          <Sidebar1 />
        </aside>

        <main className="flex flex-col items-center flex-1 scrollbar-hide overflow-y-auto border-l border-r border-[rgb(32,32,33)] min-h-0">
          <div className="w-full flex-shrink-0 h-[60px]">
            <Navbar />
          </div>

          <div className="max-w-[750px] w-full flex items-center justify-center flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <div className="w-full flex justify-center items-center border-t border-[rgb(32,32,33)]">
            <Footer />
          </div>
        </main>

        <aside className="hidden xl:w-[225px] xl:h-screen xl:flex xl:flex-col">
          <Sidebar2 />
        </aside>
      </div>
    </Router>
  );
}

export default App;
