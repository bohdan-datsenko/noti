const save = (e: KeyboardEvent) => e.ctrlKey && e.code === 'KeyS';
const addDraft = (e: KeyboardEvent) => e.ctrlKey && e.code === 'KeyN';
const remove = (e: KeyboardEvent) => e.ctrlKey && e.code === 'KeyD';

export const shortcuts = {
  SAVE: save,
  ADD_DRAFT: addDraft,
  REMOVE: remove,
}