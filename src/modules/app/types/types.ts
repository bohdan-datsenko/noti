import {UnknownAction} from '@reduxjs/toolkit';

export interface ActionWithMetadata extends UnknownAction {
  error: any;
  meta: {
    requestStatus: string;
  };
}

export interface IError {
  path: string;
  message: string;
}