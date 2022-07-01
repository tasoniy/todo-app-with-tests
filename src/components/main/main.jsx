import style from './main.module.css'
import List from '../list/list'

function Main() {
    return (
        <main data-testid='main-elem' className={style.main}>
            <div className={style.container}>
                <p className={style.greet}>Hello my friend</p>
                <h2 className={style.title}>Your To Do list</h2>
                <List />
            </div>
        </main>
    )
}

export default Main