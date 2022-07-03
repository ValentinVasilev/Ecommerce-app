import React, { useState } from 'react';
import { Card, List, ListItem, ListItemText, Tab } from '@mui/material'
import NextLink from 'next/link';
// import styles from './Tabs.module.css';


const AdminTabs = (props: any) => {

  let value = props.name.toLowerCase();

  let home = false;
  let users = false;
  let products = false;
  let upgrades = false;
  let test = false;

  if (value === 'home') {
    home = true;
  } else if (value === 'users') {
    users = true;
  } else if (value === 'products') {
    products = true;
  } else if (value === 'upgrades') {
    upgrades = true;
  } else if (value === 'test') {
    test = true;
  }

  return (
    <Card>
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
        <NextLink href="/admin/products" passHref>
          <ListItem button selected={products} component="a">
            <ListItemText primary="Products"></ListItemText>
          </ListItem>
        </NextLink>
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