import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from '../../assets/icons/find.png';
import styles from '../../styles/sub-components/search.component.module.scss';
import UpArrow from '../../assets/icons/up-arrow.png';
import DownArrow from '../../assets/icons/down-arrow.png';


const Search = () => {


  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <input className={styles.input} placeholder="Search..." />
      </div>
      <SelectCategory />
      <div>
        <button>
          <Image src={SearchIcon} alt="search icon" />
        </button>
      </div>
    </div>
  )
}


const SelectCategory = () => {

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
        sx={{ backgroundColor: 'white', borderRadius: 0, padding: '7px 10px' }}
      >
        <b style={{ color: 'black', padding: '0px 5px 0px 5px' }}>Categories</b>
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div >
  );
}

export default Search;