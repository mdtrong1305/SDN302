import { BrowserRouter, Routes } from 'react-router-dom'
import { routes, generateRoutes } from './router/router.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.tsx'
import { ToastContainer } from './components/Toast/Toast.tsx'

function App() {
  return (
    <Provider store={store}> 
      <BrowserRouter>
        <Routes>
          {generateRoutes(routes)}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
