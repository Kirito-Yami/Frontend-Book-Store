import {useState} from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState('');

    const {addNewTodo} = props;

    const handleOnClick = () => {
        addNewTodo(valueInput);
    }

    const handleOnChange = (event) => {
        setValueInput(event);
    }

    return (
        <>
            <div className='todo-new'>
                <input
                    type="text"
                    onChange={(event) => handleOnChange(event.target.value)}
                />
                <button
                    onClick={() => handleOnClick()}
                >
                    Add
                </button>
            </div>
            <div style={{paddingTop: '20px'}}>
                My name is: {valueInput}
            </div>
        </>
    )
}
export default TodoNew;