import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { Person, Priority, Labels } from "../utils";
import dayjs from "dayjs";

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPersonModal, setShowPersonModal] = useState<boolean>(false);
  const [person, setPerson] = useState<Person[]>([]);
  const [value, setValue] = useState<Person | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [ savedTasks, setSavedTasks ] = useState<Person[]>([])
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const startDate = Date.now();
  const [dueDate, setDueDate] = useState<any>(dayjs(startDate));
  const [labels, setLabels] = useState<Labels[]>([]);
  const [priority, setPriority] = useState<string>(Priority.LOW);

  return (
    <GlobalContext.Provider value={{
      showModal,
      setShowModal,
      showPersonModal,
      setShowPersonModal,
      person,
      setPerson,
      value,
      setValue,
      inputValue,
      setInputValue,
      savedTasks,
      setSavedTasks,
      title,
      setTitle,
      description,
      dueDate,
      labels,
      priority,
      setDescription,
      setDueDate,
      setLabels,
      setPriority,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
