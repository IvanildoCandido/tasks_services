import firebase from "../src/config/config";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

async function getTasks(db) {
  const task = collection(db, "tasks");
  const taskSnapshot = await getDocs(task);
  const taskList = taskSnapshot.docs.map((doc) => doc.data());
  return taskList;
}

function App() {
  const db = getFirestore(firebase);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks(db).then((response) => setTasks(response));
  }, []);
  return (
    <>
      <h1>Projeto Tasks Service</h1>
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
