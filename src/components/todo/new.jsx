const TodoNew = () => {
    const handleOnClick = (name) => {
        alert(`Hello! ${name}`);
    }

    const handleOnChange = (event) => {
        console.log("Check event", event);
    }

    return (
        <div className='todo-new'>
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                onClick={() => handleOnClick("Edan")}
            >
                Add
            </button>
        </div>
    )
}
export default TodoNew;