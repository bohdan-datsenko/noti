const save = (e: KeyboardEvent) => e.ctrlKey && e.code === 'KeyS';

export const shortcuts = {
  SAVE: save,
}