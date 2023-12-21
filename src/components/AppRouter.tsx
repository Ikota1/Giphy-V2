import { Route, Routes } from 'react-router-dom';
import { About } from '@/pages/About';
import { Home } from '@/pages/Home';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/' element={<About />} />
  </Routes>
);
