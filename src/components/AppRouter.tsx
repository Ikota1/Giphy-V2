import { About } from '@/pages/About'
import { Home } from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/' element={<About />} />
  </Routes>
)

