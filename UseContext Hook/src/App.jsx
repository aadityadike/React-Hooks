import { ThemeProvider } from './ThemeContext'
import FunctionContextComponent from './FunctionContextComponent'

const App = () => {
  return (
    <ThemeProvider>
        <FunctionContextComponent />
    </ThemeProvider>
  )
}

export default App