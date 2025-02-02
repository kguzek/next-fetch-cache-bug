import { invalidIds } from "./backend";

export function getRandomId() {
  let id;
  do {
    id = Math.floor(Math.random() * 10000);
  } while (invalidIds.has(id));
  return id;
}
