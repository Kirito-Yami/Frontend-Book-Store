const TodoData = (props) => {
    const {todoList} = props;

    return (
        <div className='todo-data'>
            <div>My name is {todoList.name}</div>
            <div>I'm {todoList.age}</div>
            <div>I live at {todoList.data.address}</div>
            <div>I come from {todoList.data.country}</div>
        </div>
    )
}
export default TodoData;