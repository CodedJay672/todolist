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
});

export default GlobalContext;