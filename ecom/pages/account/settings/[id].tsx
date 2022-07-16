import React, { useState } from 'react';
import { useRouter } from "next/router";
import styles from '../../../styles/account/settings.module.scss';
import { Box, Modal } from '@mui/material';
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
          <div>
            <Image src={EmailIcon} alt="email icon" width={64} height={64} />
          </div>
          <p>Change your Email</p>
          <button onClick={handleEmailModalOpen}>Open modal</button>
          <Modal
            open={openEmailModal}
            onClose={handleEmailModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={EmailModalStyle}>
              <p>
                Text in a modal
              </p>
              <p>
                Duis mollis, est non commodo luctus, nisi erat  porttitor ligula.
              </p>
              <p>Email Modal Open</p>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  )
}


export default Settings;

