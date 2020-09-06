import axios from "axios"

/**
 * @typedef { import("./responses").Todo } Todo
 */

/**
 * Returns todos from the API backend
 * @return {Promise<Todo[]>} Todos
 */
export const getTodos = async () =>
  axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => response.data)
