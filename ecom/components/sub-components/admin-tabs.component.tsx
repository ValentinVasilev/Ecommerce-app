import React, { useState } from 'react';
import { Card, List, ListItem, ListItemText, Tab } from '@mui/material'
import NextLink from 'next/link';
import styles from './Tabs.module.css';


const AdminTabs = (props: any) => {

  let value = props.name.toLowerCase();

  let home = false;
  let users = false;
  let reserach = false;
  let upgrades = false;
  let test = false;

  if (value === 'home') {
    home = true;
  } else if (value === 'users') {
    users = true;
  } else if (value === 'research') {
    reserach = true;
  } else if (value === 'upgrades') {
    upgrades = true;
  } else if (value === 'test') {
    test = true;
  }

  return (
    <Card className={styles.card}>
      <List>
        <NextLink href="/admin/home" passHref>
          <ListItem selected={home} button component="a">
            <ListItemText primary="Home"></ListItemText>
          </ListItem>
        </NextLink>
        <NextLink href="/admin/users" passHref>
          <ListItem button selected={users} component="a">
            <ListItemText primary="Users"></ListItemText>
          </ListItem>
        </NextLink>
        {/* <NextLink href="/game/research" passHref>
          <ListItem button selected={reserach} component="a">
            <div className={styles.icon}>
            </div>
            <ListItemText primary="Research"></ListItemText>
          </ListItem>
        </NextLink> */}
        {/* <NextLink href="/game/upgrades" passHref>
          <ListItem button selected={upgrades} component="a">
            <div className={styles.icon}>
            </div>
            <ListItemText primary="Upgrades"></ListItemText>
          </ListItem>
        </NextLink> */}
        {/* <NextLink href="/game/test" passHref>
          <ListItem button selected={test} component="a">
            <div className={styles.icon}>
            </div>
            <ListItemText primary="Test"></ListItemText>
          </ListItem>
        </NextLink> */}
      </List>
    </Card>
  )
}

export default AdminTabs;