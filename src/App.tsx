import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoApp from './components/TodoApp'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <TodoApp />
      <Footer />
    </div>
  )
}

export default App
