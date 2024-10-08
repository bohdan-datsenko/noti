export enum Severity {
  INFO = 'INFO',
  SUCCESS ='SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

type SeverityColor = { bgColor: string; color: string };

export const calcSeverityColor = (severity: Severity): SeverityColor => {
  switch (severity) {
    case Severity.INFO:
      return {bgColor: 'bg-sky-500', color: 'text-white'};
    case Severity.SUCCESS:
      return {bgColor: 'bg-emerald-500', color: 'text-white'};
    case Severity.WARNING:
      return {bgColor: 'bg-amber-500', color: 'text-white'};
    case Severity.ERROR:
      return {bgColor: 'bg-red-500', color: 'text-white'};
  }
}