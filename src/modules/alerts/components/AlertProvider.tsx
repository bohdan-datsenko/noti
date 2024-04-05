import Alert from './Alert';
import {useAppSelector} from '../../app';
import {IAlert} from '../types/types';
import React from 'react';

const AlertProvider = () => {
  const alertItems = useAppSelector((state) => state.alertReducer.alerts)

  return (
    <div className='flex flex-col gap-2 absolute w-11/12 sm:w-2/5 bottom-24 left-1/2 -translate-x-1/2'>
      {alertItems.map((item: IAlert) => {
        return <Alert key={item.id} {...item}>{item.message}</Alert>
      })}
    </div>
  );
}

export default AlertProvider;