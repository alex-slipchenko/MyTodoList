import { BsFillPencilFill, BsFillBucketFill } from "react-icons/bs";


import './style.css';


const TodoItem = ({ item, deleItem,setEdit }) => {
    
    return <li >{item.name} <BsFillPencilFill onClick={() => setEdit(item.name, item.id)} /><BsFillBucketFill onClick={(event) => deleItem(event,item.id)} /></li> 
}

export default TodoItem;