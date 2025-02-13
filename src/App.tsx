import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TodoApp from './components/TodoApp/TodoApp'
import "./App.scss"

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
