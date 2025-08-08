import React, { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("null");
  const [desc, setDesc] = useState("null");

  return (
    <div className="flex flex-col gap-5 justify-start items-center mt-80">
      <input
        className="w-50 p-2 bg-gray-200 rounded-lg transition border-0 hover:border-1 border-cyan-500 "
        type="text"
        id="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
        placeholder="Title"
      />
      <input
        className="w-50 p-2 bg-gray-300 rounded-lg transition border-0 hover:border-1 border-cyan-500 "
        type="text"
        id="desc"
        onChange={function (e) {
          const value = e.target.value;
          setDesc(value);
        }}
        placeholder="Description"
      />

      <button
        className="bg-blue-500 p-2 px-5 rounded-2xl text-white transition hover:bg-blue-600 "
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              desc: desc,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("TODO added");
            console.log(title);
            console.log(desc);
            
          });
        }}
      >
        Add TODO
      </button>
    </div>
  );
}

export default CreateTodo;
