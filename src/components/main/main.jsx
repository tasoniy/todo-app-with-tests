import style from './main.module.css'
import List from '../list/list'

function Main() {
    return (
        <>
            <header>
                <h1>
                   To Do Application
                </h1>
            </header>
            <main data-testid='main-elem' className={style.main}>
                <div className={style.container}>
                    <h2 className={style.title}>Your To Do list</h2>
                    <List />
                </div>
            </main>
        </>
    )
}

export default Main