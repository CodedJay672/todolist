import { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <GlobalContext.Provider value={{
      showModal,
      setShowModal,
      rows: [],
      setRows: () => {},
      title: '', 
      setTitle: () => {},
      description: '',
      setDescription: () => {},
      dueDate: '',
      setDueDate: () => {},
      labels: [],
      setLabels: () => {},
      person: {name: '', email: '', phone: ''},
      setPerson: () => {},
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
