import React from 'react';
import { useRouter } from "next/router";
import styles from '../../../styles/account/settings.module.scss';


const Settings = () => {

  const router = useRouter();

  const { id } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.cardsWrapper}>
        123
      </div>
    </div>
  )
}


export default Settings;