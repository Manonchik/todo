    import { useRef, useState } from 'react'
import { TextArea } from '../TextArea_Notes/TextArea'
import { List } from '../List_Notes/List'
import s from './Notes.module.css'
import { useLoaderData } from 'react-router-dom'

export let loader = async () => {
    let arr = JSON.parse(localStorage.getItem('Notes'))
    if (arr) {
        return arr
    } 
    return []
}

export function Notes() {
    let arr = useLoaderData()
    let [notes, setNotes] = useState(arr)
    let [index, setIndex] = useState(-1)
    let ref = useRef(null)

    let saveInLS = (obj) => {
        localStorage.setItem('Notes', JSON.stringify(obj))
    }
    let handleChange = e => {
        let copy = notes.map((el, i) => i === index ? e.target.value : el)
        setNotes(copy)
        saveInLS(copy)
    }

    let handleBlur = () => {
        let copy = notes.filter(el => el !== '')
        setNotes(copy)
        saveInLS(copy)
    }

    let handleClick = () => {
        let copy = [...notes, '(Пусто)']
        setNotes(copy)
        saveInLS(copy)
    }

    return (
        <div className={s.div}>
            <TextArea refa={ref} notes={notes} handleClick={handleClick} handleBlur={handleBlur} handleChange={handleChange} index={index} />
            <List refa={ref} notes={notes} setIndex={setIndex} />
        </div>
    )
}