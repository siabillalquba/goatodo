import type { Task } from "./type";

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-18 07:00"),
  },
  {
    id: 2,
    title: "Go to office",
    completed: false,
    date: new Date("2025-05-18 07:30"),
  },
  {
    id: 3,
    title: "Work",
    completed: true,
    date: new Date("2025-05-18 08:00"),
  },
  {
    id: 4,
    title: "Lunch",
    completed: false,
    date: new Date("2025-05-18 12:00"),
  },
  {
    id: 5,
    title: "Continue work",
    completed: true,
    date: new Date("2025-05-18 13:00"),
  },
  {
    id: 6,
    title: "Go to home",
    completed: false,
    date: new Date("2025-05-18 17:00"),
  },
  {
    id: 7,
    title: "Relax n chill",
    completed: false,
    date: new Date("2025-05-18 18:00"),
  },
  {
    id: 8,
    title: "Learning",
    completed: false,
    date: new Date("2025-05-18 20:00"),
  },
  {
    id: 9,
    title: "Sleep",
    completed: false,
    date: new Date("2025-05-18 23:00"),
  },
];
