import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer, Navbar, Sidebar1, Sidebar2 } from './components';
import { ContactPage, HomePage, NotFoundPage, ServicePage } from './pages';

function App() {
  return (
    <Router>
      <div className="flex h-screen w-full">
        <aside className="hidden md:flex md:h-screen md:w-[225px] md:flex-col">
          <Sidebar1 />
        </aside>

        <main className="scrollbar-hide flex min-h-0 flex-1 flex-col items-center overflow-y-auto border-r border-l border-[rgb(32,32,33)]">
          <div className="h-[60px] w-full flex-shrink-0">
            <Navbar />
          </div>

          <div className="sm:max:w-[660px] my-10 flex max-w-[468px] flex-1 items-center justify-center md:max-w-[750px]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <div className="flex w-full items-center justify-center border-t border-[rgb(32,32,33)]">
            <Footer />
          </div>
        </main>

        <aside className="hidden md:flex md:h-screen md:w-[225px] md:flex-col">
          <Sidebar2 />
        </aside>
      </div>
    </Router>
  );
}

export default App;
