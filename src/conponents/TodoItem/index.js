const TodoItem = ({ nameOfItem }) => {
    console.log(nameOfItem.createdAt);
    return <li key={nameOfItem.id}>{nameOfItem.name}</li> 
}

export default TodoItem;