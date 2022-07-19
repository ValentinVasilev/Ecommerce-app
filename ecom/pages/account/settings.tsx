import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import styles from '../../styles/account/settings.module.scss';
import { Box, Modal, TextField, Button } from '@mui/material';
import Image from 'next/image';
import EmailIcon from '../../assets/icons/email.png'
import PasswordIcon from '../../assets/icons/change-password.png'
import { useAppSelector, useAppDispatch } from '../../utils/app/hooks';
import { selectAllUsers } from '../../utils/app/features/users/usersSlice';
import { selectAccount, updateUser } from '../../utils/app/features/account/accountSlice';

const Settings = () => {

  const router = useRouter();
  const userData = useAppSelector(selectAccount)
  const dispatch = useAppDispatch();

  // const userId = router.query.id
  const [account, setAccount] = useState<[]>();


  const [openEmailModal, setOpenEmailModal] = useState(false);
  const handleEmailModalOpen = () => setOpenEmailModal(true);
  const handleEmailModalClose = () => setOpenEmailModal(false);

  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const handlePasswordModalOpen = () => setOpenPasswordModal(true);
  const handlePasswordModalClose = () => setOpenPasswordModal(false);

  const [getEmail, setEmail] = useState('');


  const updateUserEmail = () => {
    const updatedUser = { user: { ...account, email: getEmail } }
    dispatch(updateUser(updatedUser));
  }
  // console.log('userData2', userData)

  useEffect(() => {
    setAccount(userData[0]?.user);
  }, [])

  console.log('USER', userData[0]?.user)

  const EmailModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsWrapper}>

        <div className={styles.emailModalContainer}>
          <div className={styles.imgContainer}>
            <Image src={EmailIcon} alt="email icon" width={64} height={64} />
          </div>
          <p className={styles.title}>Change your Email</p>
          <button className={styles.buttonStyle} onClick={handleEmailModalOpen}>Open Panel</button>
          <Modal
            open={openEmailModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={EmailModalStyle}>
              <TextField
                label="Old Email"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 4vh 0vh', width: '100%' }}
                defaultValue={account?.email}
              />
              <TextField
                label="New Email"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 4vh 0vh', width: '100%' }}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                label="Repeat New Email"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 6vh 0vh', width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained" color='primary' onClick={() => updateUserEmail()}>Change</Button>
                <Button variant="contained" color='warning' onClick={handleEmailModalClose}>Cancel</Button>
              </div>
            </Box>
          </Modal>
        </div>
        <div className={styles.emailModalContainer}>
          <div className={styles.imgContainer}>
            <Image src={PasswordIcon} alt="password icon" width={64} height={64} />
          </div>
          <p className={styles.title}>Change Password</p>
          <button className={styles.buttonStyle} onClick={handlePasswordModalOpen}>Open Panel</button>
          <Modal
            open={openPasswordModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={EmailModalStyle}>
              <TextField
                label="Email"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 4vh 0vh', width: '100%' }}
              />
              <TextField
                label="Old Password"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 4vh 0vh', width: '100%' }}
                type="password"
              />
              <TextField
                label="New Password"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 6vh 0vh', width: '100%' }}
                type="password"
              />
              <TextField
                label="Repeat New Password"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 6vh 0vh', width: '100%' }}
                type="password"
              />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained" color='primary'>Change</Button>
                <Button variant="contained" color='warning' onClick={handlePasswordModalClose}>Cancel</Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  )
}


export default Settings;

