import React from 'react';
import { useRouter } from "next/router";
import styles from '../../../styles/account/settings.module.scss';


const Settings = () => {

  const router = useRouter();

  const { id } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.cardsWrapper}>
        {/* {id} */}
        <SettingsCard cardType='Password' />
      </div>
    </div>
  )
}


export default Settings;


enum cardTypes {
  email,
  password,
  shippingAddress
}

type SettingsCardProps = {
  cardType: 'Email' | 'Password' | "ShippingAddress",
}


const SettingsCard = (props: SettingsCardProps) => {

  const type = props.cardType;

  const password = (
    <div>{type}</div>
  )

  const email = (
    <div>{type}</div>
  )

  const CardTypes = (type) => {
    if (type === 'Password') {
      return password
    }

    if (type === 'Email') {
      return email
    }
  }


  // if (props.cardType === 'Email') {
  //   return <div>{props.cardType}</div>
  // }

  // if (props.cardType === 'Password') {
  //   return password
  // }
  // return (
  //   <div className={styles.settingsCard}>
  //     <p>{props.title}</p>
  //   </div>
  // )

  return CardTypes(type);
}