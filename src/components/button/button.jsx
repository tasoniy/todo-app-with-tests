import React from "react"
import style from "./button.module.css"


const Button = ({ clickBtn }) => (
    <button data-testid='todo-done' className={style.button} onClick={clickBtn}>
      Click me
    </button>
  )

export default Button