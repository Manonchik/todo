import { useState } from 'react'
import s from './TextArea.module.css'

export let TextArea = ({ notes, handleChange, handleBlur, handleClick, index, refa }) => {
    return (
        <>
            <textarea
                className={`${s.text} ${s.text}`}
                value={index === -1 || notes[index] === undefined ? '' : notes[index]}
                onChange={e => handleChange(e)}
                onBlur={() => handleBlur()}
                ref={refa}
            />
            <br />
            <button className={s.create} onClick={() => handleClick()}>
                Создать новую запись
            </button>
        </>
    )
}