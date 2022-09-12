import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material'
import BulgarianFlag from '../../assets/icons/bulgaria.png';
import USAFlag from '../../assets/icons/usa.png';
import GermanFlag from '../../assets/icons/germany.png';
import DownArrow from '../../assets/icons/downArrow.png'
import Image from 'next/image';
export default function LanguageSwitcher() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState<string>('');

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    setLanguage(language)
    handleClose()
  }

  return (
    <div>
      <button onClick={handleClick} style={btnStyles}>
        {language.length <= 1
          ? <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Image src={USAFlag} alt="down arrow" width={32} height={25} />
            <span style={{ padding: '0vh 1vh' }}>English</span>
            <Image src={DownArrow} alt="down arrow" width={22} height={18} />
          </div>
          : <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Image src={language === 'English' ? USAFlag : BulgarianFlag} alt="down arrow" width={32} height={25} />
            <span style={{ padding: '0vh 1vh' }}>{language}</span>
            <Image src={DownArrow} alt="down arrow" width={22} height={18} />
          </div>}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleLanguageChange('Bulgarian')}
          sx={{
            display: 'flex', justifyContent: 'space-evenly', width: '150px'
          }}>
          <Image src={BulgarianFlag} width={42} height={42} alt="bulgarian flag" />
          <p style={{ fontSize: '14px' }}>Bulgarian</p>
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('English')} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Image src={USAFlag} alt="usa flag" width={32} height={32} />
          <p style={{ fontSize: '15px' }}>English</p>
        </MenuItem>
      </Menu>
    </div>
  );
}

const btnStyles = {
  cursor: 'pointer',
  border: 'none',
  minHeight: '40px',
  borderRadius: '5px',
  width: '150px',
  minWidth: '150px',
  background: 'rgba(255, 255, 255, 0.54)',
}