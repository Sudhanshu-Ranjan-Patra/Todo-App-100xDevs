function Todo({ todos }) {
  if (!Array.isArray(todos)) {
    return <p className="text-center text-red-500">No todos to display.</p>;
  }

  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div
            key={todo._id}
            className="flex flex-col justify-center items-center"
          >
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md flex flex-col justify-center gap-4 items-start mt-6 transition hover:shadow-xl">
              <div className="w-full flex justify-between items-start">
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">
                    {todo.title}
                  </h1>
                  <p className="text-sm text-gray-500">{todo.desc}</p>
                </div>

                <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
                  {todo.completed ? "Done" : "Pending"}
                </span>
              </div>

              <button className="self-end bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-4 py-2 rounded-full transition duration-200">
                {todo.completed ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Todo;
