import s from './ListItem.module.css'
import pen from '../img/pen.png'
import trash from '../img/trash.png'
import Checkbox from '../Checkbox/Checkbox';  


const ListItem = ({ todo, index, toggleComplete, startEditing, deleteTodo, editIndex, editValue, setEditValue, saveEdit }) => {  
    return (  
        <li className={`todo-item`}>  
            <div>  
                <Checkbox  
                    checked={todo.completed}  
                    onChange={() => toggleComplete(index)}  
                />  
                {editIndex === index ? (  
                    <input  type="text" defaultValue={editValue} onChange={(e) => setEditValue(e.target.value.toUpperCase())} onBlur={() => saveEdit(index)} className={`edit-input ${todo.completed ? 'completed' : ''}`}  
                    />  
                ) : (  
                    <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>  
                )}  
            </div>  
            <div>
                <button className="edit-button" onClick={() => startEditing(index)}>
                    <img src={pen} alt="pen" />
                </button>
                <button onClick={() => deleteTodo(index)} className="delete-button">
                    <img src={trash} alt="trash" />
                </button>
            </div>
        </li>  
    );  
};  
export default ListItem