import React, { useEffect, useState } from 'react'
import ListItem from '../listItem/listItem'
import Button from '../button/button'
import style from './list.module.css'

const todos = [
    {name:'learn react', checked: false, id: 1},
    {name:'practice react', checked: false, id: 2},
    {name: 'do awesome app', checked: false, id: 3},
]
const List = () => {

   const [elements, setElements] = useState([])
   useEffect(() => setElements(todos), [])
   
    const changeTodo = ({ name, checked, id }) => {
        const time = new Date().toLocaleTimeString();
       alert(`ToDo thing "${name}" was changed at ${time}`);
    
        const elems = elements.map(item =>
          item.id === id ? { ...item, checked: !checked } : item,
        );
        
        setElements(elems)
    }
    
    const getDoneTodo = () => {
        let count = 0;
        elements.forEach(item => item.checked && count++)
        document.querySelector('button').innerHTML = `<span data-testid = 'done-count'>You done ${count} todos</span>`
    }

    return (
        <>
        <div className={style.card}>
            <ul className={style.list}>
                {elements.map(item => <ListItem key ={item.name} inputCheck={changeTodo}>{item}</ListItem>)}
            </ul>
            <Button clickBtn={getDoneTodo}/>
        </div>
        </>
    )
}

export default List