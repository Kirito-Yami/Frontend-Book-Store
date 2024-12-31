import './components/todo/style.css';
import TodoData from "./components/todo/data.jsx";
import TodoNew from "./components/todo/new.jsx";
import reactLogo from './assets/react.svg';
import {useState} from "react";

const App = () => {
    const [todoList, setTodoList] = useState(
        {
            name: "Kirito Nguyễn",
            age: 25,
            data: {
                address: "Hà Nội",
                country: "Việt Nam"
            }
        }
    )

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew/>
            <TodoData
                todoList={todoList}
            />
            <div className='todo-image'>
                <img src={reactLogo} className='logo' alt="hmm"/>
            </div>
        </div>
    )
}

export default App
