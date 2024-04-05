import {Severity} from "../utils/utils";

export interface IAlert {
  id: string;
  time?: number;
  message: string;
  severity: Severity;
}