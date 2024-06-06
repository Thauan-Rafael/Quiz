import Quiz from './components/Quiz'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Quiz/>
      <ToastContainer/>
    </>
  )
}

export default App
