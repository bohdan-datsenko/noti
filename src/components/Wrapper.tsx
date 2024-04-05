import React, {FC} from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({children}) => {
  return (
    <div className='flex flex-col container h-screen md:w-11/12 lg:w-3/4 mx-auto text-zinc-700'>
      {children}
    </div>
  );
};

export default Wrapper;