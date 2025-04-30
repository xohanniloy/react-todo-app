import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import Draggable from "react-draggable"; 
import Draggable, {DraggableCore} from 'react-draggable'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, taskInput.trim()]);
    setTaskInput("");
  };

  const taskDelete = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Add a new task"
              className="flex-grow px-4 py-2 border rounded-l-lg outline-none"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 cursor-pointer"
            >
              Add
            </button>
          </div>
          <ul className="space-y-3">
            {tasks.length === 0 ? (
              <li className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-xl shadow-sm transition-all">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-800 text-base">
                    No tasks added yet
                  </span>
                </div>
              </li>
            ) : (
              tasks.map((task, index) => {
                return (
                  <Draggable>
                    <li
                      key={index}
                      className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-xl shadow-sm transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-800 text-base">{task}</span>
                      </div>
                      <button
                        className="py-2 px-5 cursor-pointer rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 transition-colors duration-200"
                        aria-label="Delete task"
                        onClick={() => {
                          taskDelete(index);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  </Draggable>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
