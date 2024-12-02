import s from './ListItem.module.css'

export let ListItem = ({text, setIndex, i, refa}) => {
    return (
        <li className={s.li} onClick={() => {
            setIndex(i)
            refa.current.focus()
            
            }}>
            {text}
        </li>
    )    
}