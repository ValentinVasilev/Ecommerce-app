import React, { useState } from 'react'
import Image from 'next/image';
import UpArrow from '../../assets/icons/up-arrow.png';
import DownArrow from '../../assets/icons/down-arrow.png';
import { Button, Menu, MenuItem } from '@mui/material';


const CurrencyDropdown = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currency, setCurrency] = useState<any>('');

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const pickCurrency = (value: string) => {
    setCurrency(value);
    console.log(value)
    setAnchorEl(null);
  }

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
        sx={{ backgroundColor: 'white', borderRadius: 0, padding: '7px 10px' }}
      >
        <b style={{ color: 'black', padding: '0px 5px 0px 5px' }}>{currency.length < 1 ? 'EUR' : currency}</b>
        {open
          ? (<Image src={UpArrow} alt="arrow up" width={16} height={16} />)
          : (<Image src={DownArrow} alt="down up" width={16} height={16} />)}
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
        <MenuItem onClick={(e) => pickCurrency('EUR')}>EUR</MenuItem>
        <MenuItem onClick={(e) => pickCurrency('USD')}>USD</MenuItem>
        <MenuItem onClick={(e) => pickCurrency('BGN')}>BGN</MenuItem>
      </Menu>
    </div >
  );
}

export default CurrencyDropdown;