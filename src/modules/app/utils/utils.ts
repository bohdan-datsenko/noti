export enum colors {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  DELETE = 'DELETE',
}

export const calculateColor = (color: colors) => {
  switch (color) {
    case colors.PRIMARY:
      return {color: 'bg-amber-300', hover: 'hover:bg-amber-400', disabled: 'disabled:bg-zinc-300'};
    case colors.SECONDARY:
      return {color: 'bg-amber-300', hover: 'hover:bg-amber-400', disabled: 'disabled:bg-zinc-300'};
    case colors.DELETE:
      return {color: 'bg-red-400', hover: 'hover:bg-red-500', disabled: 'disabled:bg-zinc-300'};
  }
}