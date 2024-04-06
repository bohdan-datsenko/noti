import React, {FC, useEffect} from 'react';
import {removeAlert} from '../redux/slice';
import {colors, useAppDispatch} from '../../app';
import {IconButton} from '../../../ui/IconButton';
import {CgClose} from 'react-icons/cg';
import {calcSeverityColor, Severity} from '../utils/utils';

interface AlertProps {
  id: string;
  time?: number;
  severity: Severity;
  children: string;
}

const Alert: FC<AlertProps> = ({id,
                                 time = 3000,
                                 severity = Severity.INFO,
                                 children}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeAlert(id));
    }, time)
  }, []); // todo

  const calculatedColor = calcSeverityColor(severity);

  return (
    // todo 'remove ? sign'
    <div className={`flex justify-between py-2 px-4 rounded ${calculatedColor?.bgColor} ${calculatedColor?.color}`}>
      {children}
      <IconButton handleClick={() => dispatch(removeAlert(id))} color={colors.TRANSPARENT}>
        <CgClose />
      </IconButton>
    </div>
  );
};

export default Alert;