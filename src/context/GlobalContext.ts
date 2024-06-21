import { createContext } from 'react';

type Rows = {
  id: number,
  task: {
    image: string,
    task: string
  },
  labels: string[],
  dueDate: string
}


const GlobalContext = createContext({
  showModal: false,
  setShowModal: (showModal: boolean) => {},
  rows: [] as Rows[],
  setRows: (rows: Rows) => {},
  title: '',
  setTitle: (title: string) => {},
  description: '',
  setDescription: (description: string) => {},
  dueDate: '',
  setDueDate: (dueDate: string) => {},
  labels: [] as string[],
  setLabels: (labels: string[]) => {},
  person: {} as {name: string, email: string, phone: string},
  setPerson: (person: {name: string, email: string, phone: string}) => {},
});

export default GlobalContext;