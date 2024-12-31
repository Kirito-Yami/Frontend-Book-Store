import './components/todo/style.css';
import TodoData from "./components/todo/data.jsx";
import TodoNew from "./components/todo/new.jsx";
import reactLogo from './assets/react.svg';
import {useState} from "react";

const App = () => {
    const [list, setList] = useState([]);

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
            {list.length > 0 ?
                <TodoData
                    list={list}
                />
                :
                <div className='todo-image'>
                    <img src={reactLogo} className='logo' alt="hmm"/>
                    <h3>React with Kirito Nguyễn</h3>
                </div>
            }
        </div>
    )
}

export default App
