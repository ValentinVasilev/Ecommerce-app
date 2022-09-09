import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material'
import BulgarianFlag from '../../assets/icons/bulgaria.png';
import USAFlag from '../../assets/icons/usa.png';
import GermanFlag from '../../assets/icons/germany.png';
import Image from 'next/image';
export default function LanguageSwitcher() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ backgroundColor: 'white', color: 'black' }}
      >
        Language
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Image src={BulgarianFlag} width={40} height={40} alt="bulgarian flag" />
          <p>BG</p>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Image src={USAFlag} alt="usa flag" width={32} height={32} />
          <p>EN</p>
        </MenuItem>
        {/* <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Image src={GermanFlag} alt="germany flag" width={32} height={32} />
          <p style={{ padding: '0vh 1vh' }}>GER</p>
        </MenuItem> */}
      </Menu>
    </div>
  );
}