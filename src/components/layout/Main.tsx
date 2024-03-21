import React, {FC} from 'react';

interface MainProps {
    children: React.ReactNode;
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <main className='grid col-span-2 sm:grid-cols-[35%_65%] lg:grid-cols-[25%_75%] flex-auto'>
            {children}
        </main>
    );
};

export default Main;
