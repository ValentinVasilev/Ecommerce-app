import React, { useState } from 'react';
import { useRouter } from "next/router";
import styles from '../../../styles/account/settings.module.scss';
import { Box, Modal, TextField, Button } from '@mui/material';
import Image from 'next/image';
import EmailIcon from '../../../assets/icons/email.png'

const Settings = () => {

  const router = useRouter();

  const { id } = router.query;

  const [openEmailModal, setOpenEmailModal] = useState(false);
  const handleEmailModalOpen = () => setOpenEmailModal(true);
  const handleEmailModalClose = () => setOpenEmailModal(false);



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
        {/* {id} */}
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
              />
              <TextField
                label="New Email"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 4vh 0vh', width: '100%' }}
              />
              <TextField
                label="Repeat New Email"
                variant="standard"
                color="info"
                style={{ margin: '2vh 0vh 6vh 0vh', width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained" color='primary'>Change</Button>
                <Button variant="contained" color='warning' onClick={handleEmailModalClose}>Cancel</Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  )
}


export default Settings;

