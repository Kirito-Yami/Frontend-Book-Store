import './components/todo/style.css';
import TodoData from "./components/todo/data.jsx";
import TodoNew from "./components/todo/new.jsx";
import reactLogo from './assets/react.svg';

const App = () => {

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew/>
            <TodoData/>
            <div className='todo-image'>
                <img src={reactLogo} className='logo' alt="hmm"/>
            </div>
        </div>
    )
}

export default App
