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

    const [list, setList] = useState([
        {id: 1, name: name},
        {id: 2, name: name}
    ])

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 100000),
            name: name,
        }
        setList([...list, newTodo]);
    }

    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            <TodoData
                todoList={todoList}
                list={list}
            />
            <div className='todo-image'>
                <img src={reactLogo} className='logo' alt="hmm"/>
            </div>
        </div>
    )
}

export default App
