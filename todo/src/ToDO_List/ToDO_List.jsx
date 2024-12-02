import React, { useState, useEffect } from 'react';
// import { Input } from '../Input/input'
import s from './ToDO_List.module.css'
import Tasks from '../Tasks/Tasks';

const ToDO_List = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
    // const addItem = () => {
    //     if (inputValue) {
    //         setItems([...items, { text: inputValue, completed: false }]);
    //         setInputValue('');
    //     }
    // };
    const addTodo = () => {
        if (inputValue.trim()) {
          const newTodos = [...todos, { text: inputValue.trim(), completed: false }];
          setTodos(newTodos);
          localStorage.setItem('todos', JSON.stringify(newTodos));
          setInputValue('');
        }
      };


    const toggleComplete = (index) => {                                   // Создает копию массива todos с помощью оператора spread [...todos]. Инвертирует значение свойства completed у элемента массива с индексом index если у элемента было значение true, то оно станет false, и наоборот.Обновляет состояние todos, присваивая ему новое значение newTodos. Сохраняет новое значение todos в локальное хранилище браузера, преобразуя его в строку с помощью метода JSON.stringify. Таким образом, данная функция используется для изменения состояния завершенности (completed) определенного элемента массива todos и сохранения обновленного состояния в локальном хранилище.
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEditValue(todos[index].text);
    };

    const saveEdit = (index) => {
        const newTodos = [...todos];
        newTodos[index].text = editValue.trim();
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setEditIndex(null);
        setEditValue('');
    };

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);
    return (

        <div className="todo-container">
            <h1>TODO LIST</h1>
            <div className='input-container'>
                <input defaultValue={inputValue} onChange={(e) => setInputValue(e.target.value.toUpperCase())} className={s.input} placeholder='Создать новую заметку...' type="text" />
               
                
                <button onClick={addTodo} className="create-button">СОЗДАТЬ</button>
                </div>
            <Tasks
                todos={todos}
                toggleComplete={toggleComplete}
                startEditing={startEditing}
                deleteTodo={deleteTodo}
                editIndex={editIndex}
                editValue={editValue}
                setEditValue={setEditValue}
                saveEdit={saveEdit}
            />


        </div>
    );

}
export let loader = async () => {
    let arr = JSON.parse(localStorage.getItem('todos'))
    if (arr) {
        return arr
    } 
    return []
}

export default ToDO_List;  