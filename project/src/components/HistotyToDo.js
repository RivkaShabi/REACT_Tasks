const HistotyToDo = ({ myTodo }) => {
    return (<>
        <div>{myTodo.id}</div>
        <div>{myTodo.title}</div>
        <input type="checkbox" defaultChecked={myTodo.completed}/>
    </>);
}
export default HistotyToDo;
