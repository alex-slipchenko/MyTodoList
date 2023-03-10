
//libraries=======================================
import { useEffect, useState } from 'react';

//style css=========================================
import './style.css';

//components=======================================
import TodoList from '../../conponents/TodoList';
import Form from '../../conponents/Form';
import { API_URL } from '../../constants'

//==================================================
const Main = () => {
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');
    // const [name, setName] = useState([]);
    // const [name, setName] = useState([]);

    useEffect(() => {
        getTodos();

    }, [])

    const getTodos = async () => {
      
        const response = await fetch(`${API_URL}/todos`);
        const data = await response.json();
        setTodos(data);

    }

    const addItem = async (event) => {
        event.preventDefault();
        await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({name:name,done:false})
            // body: JSON.stringify({ name, done: false })
        });
    }

    return (
        <div>
            Todo List
            <TodoList todos={todos} />
            <Form name={name} setName={setName} submitForm={addItem} />
        </div>
    );

}

export default Main;