import {useState} from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState('');

    const {addNewTodo} = props;

    const handleOnClick = () => {
        if (valueInput ===''){
            alert("Add...add...cái nịt! Thích spam không???")
        }else{
            addNewTodo(valueInput);
            setValueInput('');
        }
    }

    const handleOnChange = (event) => {
        setValueInput(event);
    }

    return (
            <div className='todo-new'>
                <input
                    className="input-new"
                    type="text"
                    value={valueInput}
                    onChange={(event) => handleOnChange(event.target.value)}
                />
                <button
                    onClick={() => handleOnClick()}
                    style={{cursor: 'pointer', padding: '5px', width: "50px"}}
                >
                    Add
                </button>
            </div>
    )
}
export default TodoNew;