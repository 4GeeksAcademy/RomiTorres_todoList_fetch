import React, { useState, useEffect } from "react";

export const PutTodos = () => {
    const [todos, setTodos] = useState([]);
    const host = 'https://jsonplaceholder.typicode.com/';

    const fetchTodos = async () => {
        const url = host + 'todos/2/';
        const request = {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        }

        const response = await fetch(url, request);
        if (response.ok) {
            const data = await response.json();
            setTodos(data);
        } else {
            console.log('error:', response.status, response.statusText)
        }
    }
    // useEffect(() => {
    //     fetchTodos();
    // }, []);



    return (
        <>
        <h3 className="mt-3">Put Todos</h3>
        <div className="card">
  <div className="card-header">
    List Todos
  </div>
  <ul className="list-group list-group-flush">
  { !todos ? 'Leyendo datos' :
             todos.map( (todos, index) => {
                return <li key={index}>{todos.id} - {todos.title} </li>
             } )
         }
  </ul>
</div>

</>
    )
}