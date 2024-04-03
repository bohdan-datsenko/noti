import React, {FC} from 'react';

interface TooltipProps {
  message: string;
  children: React.ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({ message, children }) => {
  return (
    <div onClick={e => e.stopPropagation()} className='flex group/tooltip'>
      {children}
      <span
        className={`absolute translate-y-[120%] scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover/tooltip:delay-500 group-hover/tooltip:scale-100`}>
        {message}
      </span>
    </div>
  );
}