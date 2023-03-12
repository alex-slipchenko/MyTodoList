
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
    const [todos, setTodos] = useState([]);//(1)
    const [name, setName] = useState('');//(2)
    const [isLoaded, setIsLoaded] = useState(false);//(3)
    const [editId, setEditId] = useState(null);//(4)

    // const sendRequest = async(method, body, id = null) => {
    //     await fetch(id ? `${API_URL}/todos/${id}` :` ${ API_URL } / todos`, {
    //         method,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ body })
    //     });
    // }

    useEffect(() => {
        if (!isLoaded) {
            getTodos();
        }

    }, [isLoaded])

    const getTodos = async () => {//получає Айтем(лішку(<li/>)) в сетТуду стейта(1) в цій функціЇ
        const response = await fetch(`${API_URL}/todos`);
        const data = await response.json();
        setTodos(data);//наповнює пустий стейт[](1)
        setIsLoaded(true);//міняє ЮсЕфект на тру(ДЕФОЛТ ФАЛЬС) після цієї загрузки щоб спрацьовував(Юзефект)один раз
    }

    const addItem = async (event) => {//отправляю для додавання в  мокАпі з інпута велью який записався в стейт(2).
        event.preventDefault();
        await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, done: false })
        });
        setIsLoaded(false);//перезаписую знов на фальс стейт(3).
        setName('');//очищую валью інпута після отправки данних на апдейт
    }

    const editItem = async (event) => {//отправляю для редагування в мокАпі  інпут в якому ми нажали на ручку
        event.preventDefault();
        await fetch(`${API_URL}/todos/${editId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, done: false })
        });
        setIsLoaded(false);//перезаписую знов на фальс стейт(3).
        setName('');//очищую валью інпута після отправки данних на апдейт
        setEditId(null);//очищую сет(4)
    }



    const setEdit = (name, id) => {//прокидую цю ф-цію через пропси в айтем(лішку<li>),для редагування на мокАпі
        setName(name);
        setEditId(id)
    }

    const deleItem = async (event, id) => {//отправляю для видалення в  мокАпі натискаючи на відерце отправляю айди
        event.preventDefault();
        await fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        setIsLoaded(false);//перезаписую знов на фальс стейт(3).

    }




    const setItemAsDoneOrNot = async (event, id, isDone) => {//отправляю для редагування в мокАпі  і на сторінкці зачеркую або на оборот
        event.preventDefault();
        await fetch(`${API_URL}/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ done: !isDone })
        });
        setIsLoaded(false);//перезаписую знов на фальс стейт(3).

    }
    return (
        <div>
            Todo List
            <TodoList todos={todos} setEdit={setEdit} deleItem={deleItem} setItemAsDoneOrNot={setItemAsDoneOrNot} />
            <Form name={name} setName={setName} submitForm={editId ? editItem : addItem} />
        </div>
    );

}

export default Main;