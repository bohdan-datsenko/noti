const saveShortcut = (e: KeyboardEvent) => e.ctrlKey && e.key === 's';

export const shortcuts = {
  SAVE: saveShortcut,
}