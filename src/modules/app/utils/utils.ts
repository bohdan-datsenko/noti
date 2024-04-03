export namespace ColorsUtils {
  export enum colors {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    DELETE = 'DELETE',
    DISABLED = 'DISABLED'
  }

  export const calculateColor = (color: colors) => {

    switch (color) {
      case colors.PRIMARY:
        return ' bg-amber-300 hover:bg-amber-400';
      case colors.SECONDARY:
        return ' bg-amber-300 hover:bg-amber-400';
      case colors.DELETE:
        return 'bg-amber-300 hover:bg-amber-400';
      case colors.DISABLED:
        return 'bg-amber-200 hover:bg-amber-200';
    }
  }
}