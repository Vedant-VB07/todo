import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showFinished, setshowFinished] = useState(false);

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let todos = JSON.parse(todostring);
      settodos(todos);
    }
  }, []);

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    saveTLS();
  };

  const saveTLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEdit = (e, id) => {
    let x = todos.filter((i) => i.id === id);
    settodo(x[0].todo);
    let newtodos = todos.filter((item) => item.id !== id);
    settodos(newtodos);
    saveTLS();
  };

  const handleDelete = (e, id) => {
    let newtodos = todos.filter((item) => item.id !== id);
    settodos(newtodos);
    saveTLS();
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos);
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-violet-200 to-blue-200 mx-3 sm:mx-7 my-4 p-4 sm:p-6 rounded-2xl min-h-[87vh] shadow-xl transition-all duration-500 animate-fadeIn">
        {/* Add Todo */}
        <div className="addtodo py-4 text-sm bg-white/60 rounded-xl px-4 mb-6 shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="font-black text-violet-800 mb-2">Add Todo</h2>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="bg-white px-3 py-2 rounded-md outline-none border border-violet-300 focus:border-violet-500 transition-all duration-300 w-full"
            />

            <button
              disabled={todo.length < 1}
              onClick={handleAdd}
              className="px-4 py-2 rounded-md bg-violet-400 text-white transition-all duration-300 hover:scale-105 sm:w-auto"
            >
              Add
            </button>
          </div>
        </div>

        {/* Show Finished */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            onChange={toggleFinished}
            checked={showFinished}
          />
          <span className="text-sm text-violet-900">Show Finished</span>
        </div>

        {/* Heading */}
        <div className="head flex justify-center font-bold text-xl text-violet-900 underline underline-offset-4 mb-4 animate-slideDown">
          Your Todo
        </div>

        {/* Empty State */}
        {todos.length === 0 && (
          <div className="flex justify-center items-center bg-white/70 rounded-xl px-4 py-3 my-1 shadow-md">
            No Todo's to display
          </div>
        )}

        {/* Todos */}
        {todos.map((item) => {
          if (!showFinished && item.isCompleted) return null;

          return (
            <div
              key={item.id}
              className="todos flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-white/70 rounded-xl px-4 py-3 my-1 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
            >
              <input
                name={item.id}
                type="checkbox"
                checked={item.isCompleted}
                onChange={handleCheckbox}
                className="mt-1 sm:mt-0"
              />

              <div
                className={
                  item.isCompleted
                    ? "text text-violet-900 line-through"
                    : "text text-violet-900"
                }
              >
                {item.todo}
              </div>

              <div className="buttons flex flex-wrap gap-2">
                <button
                  onClick={(e) => handleEdit(e, item.id)}
                  className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
                >
                  Edit
                </button>

                <button
                  onClick={(e) => handleDelete(e, item.id)}
                  className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
