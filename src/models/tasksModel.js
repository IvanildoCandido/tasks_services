import firebase from "../config/config";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const db = getFirestore(firebase);

export const getTasks = async () => {
  const task = collection(db, "tasks");
  const taskSnapshot = await getDocs(task);
  const taskList = taskSnapshot.docs.map((doc) => doc.data());
  return taskList;
};

