import { ListItem } from '../ListItem/ListItem'
import s from './List.module.css'

export function List({items}) {

  return (
    <ul>
      {items.map(el => <ListItem key={el.id} id={el.id} title={el.title} isEdit={el.isEdit} isChecked={el.isChecked} />)}
    </ul>
  )
}