const TodoItem = (props) => {
    const handleComplete = () => {
      // Call the parent component's complete task function
      props.onComplete();
    };
  
    const handleDelete = () => {
      // Call the parent component's delete task function
      props.onDelete();
    };
  
    return (
      <div className="flex items-center">
        <span className={props.status === "completed" ? "mr-auto ml-4 text-gray-500" : "mr-auto ml-4"}>
          {props.task}
        </span>
  
        <div className={`flex items-center ml-8 ${props.status === "completed" ? "pl-4" : ""}`}>
          <button
            onClick={handleComplete}
            className={`px-2 py-1 ${
              props.status === "completed"
                ? "bg-yellow-500 text-white"
                : "text-green-500 hover:bg-green-500 hover:text-white"
            } hover:rounded-xl`}
          >
            {props.status === "active" ? " Active " : "Completed"}
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 px-2 py-1 ml-2 hover:rounded-xl hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default TodoItem;
  