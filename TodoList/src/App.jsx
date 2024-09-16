import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let toString = localStorage.getItem("todos")
    if (toString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toogleFinihed = (e) => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveLs()
  }

  const handleDelete = (e, id) => {
    confirm("Are you sure to delete this todo");
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveLs()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveLs()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveLs()
  }


  return (
    <>
      <Navbar />
      <div className=" mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-slate-400 min-h-[85vh] md:w-1/2">
        <h1 className="font-bold text-center text-xl">Manage Your Todos</h1>

        <div className="addTodo my-2">
          <h2 className="text-lg font-bold">Add a todo</h2>
        </div>
        <div className="flex">
          <input onChange={handleChange} value={todo} type="text" placeholder="Enter Your Todos" className="w-full rounded-lg" />
          <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-slate-700  hover:bg-slate-950 disabled:bg-violet-900 rounded-lg p-3 py-1 mx-2 cursor-pointer text-white ">Save</button>
        </div>

        <br />
        <input onClick={toogleFinihed} className="my-3" type="checkbox" checked={showFinished} /> Show Fininshed
        <hr />
        <h2 className="text-lg font-bold my-2 "> Your Todos</h2>
        <div className="todos" >
          {todos.length === 0 && <div className="m-5"> No Todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 justify-between py-2">

              <div className="flex gap-5">
                <input onChange={handleCheckbox} name={item.id} type="checkbox" checked={item.isCompleted} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

              </div>

              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className="bg-slate-700 w-13  hover:bg-slate-950 rounded-lg p-3 py-1 text-white mx-1 items-center "><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-slate-700 w-13  hover:bg-slate-950 rounded-lg p-3 py-1 text-white mx-1 items-center "><AiFillDelete />
                </button>
              </div>

            </div>
          })}
        </div>

      </div>

    </>
  )
}

export default App
