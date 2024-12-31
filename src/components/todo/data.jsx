const TodoData = (props) => {
    const {name, age, data} = props;

    return (
        <div className='todo-data'>
            <div>My name is: {name}</div>
            <div>I'm: {age}</div>
            <div>I live at: {data.address}</div>
            <div>I come from: {data.country}</div>
        </div>
    )
}
export default TodoData;