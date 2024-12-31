import './components/todo/style.css';
import TodoData from "./components/todo/data.jsx";
import TodoNew from "./components/todo/new.jsx";
import reactLogo from './assets/react.svg';

const App = () => {
    const name = "Kirito Nguyễn";
    const age = 25;
    const data = {
        address: "Hà Nội",
        country: "Việt Nam"
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew/>
            <TodoData
                name={name}
                age={age}
                data={data}
            />
            <div className='todo-image'>
                <img src={reactLogo} className='logo' alt="hmm"/>
            </div>
        </div>
    )
}

export default App
