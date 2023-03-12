import { BsFillPencilFill, BsFillBucketFill } from "react-icons/bs";


import './style.css';


const TodoItem = ({ item, deleItem, setEdit, setItemAsDoneOrNot }) => {
   
    return <li ><span className={item.done ? 'line_through' : 'line'} onClick={(event) => setItemAsDoneOrNot(event,item.id,item.done)}>{item.name}</span> <BsFillPencilFill onClick={() => setEdit(item.name, item.id)} /><BsFillBucketFill onClick={(event) => deleItem(event,item.id)} /></li> 
}

export default TodoItem;