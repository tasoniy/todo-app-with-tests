import React from 'react'
import './listItem.css'

const ListItem = ({ children, checked, inputCheck }) => (
    <li className='listItem'>
      <span className={children.checked === true ? 'done' : ''}>{children.name}</span>
      <input onChange={e => inputCheck(children)} defaultChecked={checked} className='input'
        type="checkbox"
      />
    </li>
  );

export default ListItem