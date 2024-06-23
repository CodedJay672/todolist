import { createContext } from 'react';
import { Labels, Person, Priority } from '../utils';
import dayjs from 'dayjs';

export type Tasks = {
  id: number,
  title: string,
  description: string,
  startDate: Date,
  dueDate: Date,
  person: Person[],
  labels: Labels[],
  priority: Priority,
}


const GlobalContext = createContext({
  showModal: false,
  setShowModal: (showModal: boolean) => {},
  showPersonModal: false,
  setShowPersonModal: (personModal: boolean) => {},
  person: [] as Person[],
  setPerson: (person: Person[]) => {},
  value: {} as Person | null,
  setValue: (value: Person) => {},
  inputValue: '',
  setInputValue: (input: string) => {},
  title: '',
  setTitle: (title: string) => {},
  savedTasks: [] as Person[],
  setSavedTasks: (savedTasks: Person[]) => {},
  description: '',
  setDescription: (description: string) => {},
  dueDate: dayjs(Date.now()),
  setDueDate: (dueDate: Date) => {},
  labels: [] as Labels[],
  setLabels: (labels: Labels[]) => {},
  priority: '',
  setPriority: (priority: string) => {}
});

export default GlobalContext;