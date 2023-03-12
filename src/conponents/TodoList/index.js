// import './style.css';
import TodoItem from '../TodoItem';

const TodoList = ({ deleItem, setEdit, setItemAsDoneOrNot, todos, }) => {
    return <ul>
        {todos.map((todoItem) => <TodoItem item={todoItem} key={todoItem.id} setEdit={setEdit} deleItem={deleItem} setItemAsDoneOrNot={setItemAsDoneOrNot} />)}
    </ul>
}

export default TodoList;