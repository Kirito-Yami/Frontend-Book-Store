import {useState} from "react";
import TodoNew from "./new.jsx";
import TodoData from "./data.jsx";
import reactLogo from "../../assets/react.svg";
import './style.css';

const TodoHome = ()=>{
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

    const deleteList = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
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
                    deleteList={deleteList}
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
export default TodoHome;