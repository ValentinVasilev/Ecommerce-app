import { Avatar, Menu, MenuItem, Tooltip, Divider } from "@mui/material";
import React, { useState } from "react";
import styles from '../../styles/sub-components/account.component.module.scss'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut } from '../../utils/app/features/account/accountSlice';
import { useAppDispatch } from "../../utils/app/hooks";
import { useRouter } from 'next/router'


type UserProps = {
  username: string,
}

const Account = (props: UserProps) => {

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { username } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutUser = () => {
    dispatch(logOut());
    setTimeout(() => {
      router.push('/')
    }, 500)

  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings" placement="top">
          <p
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className={styles.accountButton}
          >
            {username}
          </p>
        </Tooltip>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem LinkComponent={"address"}>
          <Avatar sx={{ bgcolor: 'skyblue' }}>
            <SettingsApplicationsIcon />
          </Avatar>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => logOutUser()}
        >
          <Avatar sx={{ bgcolor: 'orange' }}>
            <LogoutIcon />
          </Avatar>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment >
  );
}

export default Account;