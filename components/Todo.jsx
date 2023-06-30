'use client';
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, { title: task, status: "active" }]);
      setTask("");
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    const taskToUpdate = updatedTasks[index];
    taskToUpdate.status =
      taskToUpdate.status === "active" ? "completed" : "active";
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (filter === "Completed") {
      return (
        task.status === "completed" &&
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (filter === "Active") {
      return (
        task.status === "active" &&
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  });

  return (
    <div className="bg-white flex flex-col items-center gap-4 rounded-xl max-w-md p-4">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
          className="border-solid border-2 outline-2 rounded-l-xl p-1"
        />
        <button
          type="submit"
          className="border-solid border-2 outline-2 rounded-r-xl p-1 bg-gray-200"
        >
          Add Task
        </button>
      </form>

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search"
        className="border-solid border-2 outline-2 rounded-xl p-1"
      />

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <TodoItem
              task={task.title}
              status={task.status}
              onComplete={() => handleComplete(index)}
              onDelete={() => handleDelete(index)}
            />
          </li>
        ))}
      </ul>

      <div className="flex my-2">
        <button
          className={`mr-2 ${
            filter === "All"
              ? "border-solid border-2 outline-2 rounded-l-xl p-1"
              : "bg-gray-200"
          } border-solid border-2 outline-2 rounded-l-xl p-1`}
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>
        <button
          className={`mr-2 ${
            filter === "Completed"
              ? "border-solid border-2 outline-2 p-1"
              : "bg-gray-200"
          } border-solid border-2 outline-2 p-1`}
          onClick={() => handleFilterChange("Completed")}
        >
          Completed
        </button>
        <button
          className={`mr-2 ${
            filter === "Active"
              ? "border-solid border-2 outline-2 rounded-r-xl p-1"
              : "bg-gray-200"
          } border-solid border-2 outline-2 rounded-r-xl p-1`}
          onClick={() => handleFilterChange("Active")}
        >
          Active
        </button>
      </div>
    </div>
  );
};

export default Todo;
