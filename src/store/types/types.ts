import {UnknownAction} from '@reduxjs/toolkit';

export interface ActionWithMetadata extends UnknownAction {
  meta: {
    requestStatus: string;
  };
}