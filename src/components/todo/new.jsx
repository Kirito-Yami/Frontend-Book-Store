const TodoNew = (props) => {
    const {addNewData} = props;
    return (
        <div className='todo-new'>
            <input type="text"/>
            <button onClick={() => addNewData("Ahihihih")}>Add</button>
        </div>
    )
}
export default TodoNew;