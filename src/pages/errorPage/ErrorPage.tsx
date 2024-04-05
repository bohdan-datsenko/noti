import React, {FC} from 'react';

interface ErrorPageProps {
  message: string;
}

const ErrorPage:FC<ErrorPageProps> = ({message}) => {
  return (
    <div className='flex justify-center items-center w-full h-screen p-2 bg-zinc-100'>
      <div className='max-w-[95%] flex flex-col gap-4 p-4 sm:p-8 overflow-hidden rounded bg-zinc-50 text-zinc-700 ring-2 ring-amber-400 drop-shadow-sm'>
        <div>
          <h2 className='text-2xl sm:text-4xl'>Oops we are getting into error :(</h2>
          <h3 className='text-xl sm:text-3xl'>Here some details:</h3>
          <p className='w-fit px-2 break-all rounded text-lg sm:text-xl bg-red-100 text-red-500'>${message}</p>
        </div>

        <button className='py-2 rounded bg-amber-400 text-white transition-colors hover:bg-amber-500'
                onClick={() => window.location.reload()}>Refresh
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;