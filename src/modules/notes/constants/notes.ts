const save = (e: KeyboardEvent) => e.ctrlKey && e.code === 'KeyS';
const create = (e: KeyboardEvent) => e.ctrlKey && e.code === 'KeyC';
const remove = (e: KeyboardEvent) => e.ctrlKey && e.code === 'KeyD';

export const shortcuts = {
  SAVE: save,
  CREATE: create,
  REMOVE: remove
}