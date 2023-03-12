// import './style.css';
import TodoItem from '../TodoItem';

const TodoList = ({ deleItem, setEdit, todos }) => {
    return <ul>
        {todos.map((todoItem) => <TodoItem item={todoItem} key={todoItem.id} setEdit={setEdit} deleItem={deleItem} />)}
    </ul>
}

export default TodoList;