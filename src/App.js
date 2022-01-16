import { useEffect, useState } from "react";
import { getTasks } from "./models/tasksModel";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks().then((response) => setTasks(response));
  }, []);
  return (
    <>
      <h1>Projeto Tasks Service </h1>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
