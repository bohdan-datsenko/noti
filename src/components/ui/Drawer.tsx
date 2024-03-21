import React, {FC} from "react";

interface DrawerProps {
    isOpen: boolean;
    handleClose(): void;
    children: React.ReactNode;
}

export const Drawer: FC<DrawerProps> = ({ children, isOpen, handleClose }) => {
    return (
        <div
            className={
                'block sm:hidden fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out' +
                (isOpen
                    ? ' transition-opacity opacity-100 duration-500 translate-x-0'
                    : ' transition-all opacity-0 -translate-x-full')
            }
        >
            <div
                className={
                    'flex flex-col w-2/3 max-w-lg left-0 overflow-hidden absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform' +
                    (isOpen ? ' translate-x-0 ' : ' -translate-x-full')
                }
            >
                <div className='relative w-full max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full'>
                    <div className='flex justify-between p-4'>
                        <h2 className='font-bold text-lg'>Your notes</h2>

                        <button onClick={handleClose} className='relative size-8 rounded
                            before:absolute before:rounded before:bg-red-600 before:h-1 before:w-full before:left-0 before:-translate-y-1/2 before:rotate-45
                            after:absolute after:rounded after:bg-red-600 after:h-1 after:w-full after:left-0 after:-translate-y-1/2 after:-rotate-45
                            active:bg-gray-50 active:before:bg-red-600 active:after:bg-red-600 active:scale-110'>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
            <div
                className='w-screen h-full cursor-pointer'
                onClick={handleClose}
            ></div>
        </div>
    );
}
