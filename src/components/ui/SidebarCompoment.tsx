import Sidebar from '../layout/sidebar/Sidebar';
import React, {FC} from 'react';

interface SidebarComponentProps {
  isMenuOpen: boolean;
  handleCloseMenu: () => void;
}

export const SidebarComponent: FC<SidebarComponentProps> = (props) => {
  const {
    isMenuOpen,
    handleCloseMenu,
  } = props;

  return (
    <Sidebar
      isOpen={isMenuOpen}
      handleClose={handleCloseMenu}
    />
  );
};
