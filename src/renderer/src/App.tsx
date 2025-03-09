import { Routes, HashRouter, Route } from 'react-router-dom'
import { Pending } from './views/Pending'
import { Settings } from './views/Settings'

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Pending />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  )
}
export default App
