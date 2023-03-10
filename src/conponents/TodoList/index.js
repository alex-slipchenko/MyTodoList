// import './style.css';
import TodoItem from '../TodoItem';

const TodoList = ({todos}) => {
    return <ul>
        {todos.map((todoItem) => <TodoItem nameOfItem={todoItem} />)}
    </ul>


}

export default TodoList;