export const users: Person[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555-123-4567"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 555-987-6543"
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 555-789-0123"
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    phone: "+1 555-456-7890"
  },
  {
    id: 5,
    name: "Michael Lee",
    email: "michael.lee@example.com",
    phone: "+1 555-234-5678"
  },
  {
    id: 6,
    name: "Olivia Garcia",
    email: "olivia.garcia@example.com",
    phone: "+1 555-345-6789"
  },
  {
    id: 7,
    name: "William Clark",
    email: "william.clark@example.com",
    phone: "+1 555-876-5432"
  },
  {
    id: 8,
    name: "Sophia Adams",
    email: "sophia.adams@example.com",
    phone: "+1 555-432-1098"
  }
];

export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export type Person = {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export enum Labels {
  HTML = 'html',
  CSS = 'Css',
  NODEJS = 'Nodejs',
  JQUERY = 'Jquery',
}

export type ToDo = [
  title: string,
  label: Labels[],
  dueDate: Date,
]

export const initFunction = () => {
  const storageTodos = localStorage.getItem('savedTodos');
  const parsedTodos = storageTodos ? JSON.parse(storageTodos) : [];
  return parsedTodos;
}

export const initPersonFunc = () => {
  const storagePeople = localStorage.getItem('savedPersons');
  const parsedPeople = storagePeople ? JSON.parse(storagePeople) : [];
  return parsedPeople;
}