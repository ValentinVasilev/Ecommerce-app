import React, { useState } from "react";
import { Card, List, ListItem, ListItemText } from '@mui/material'
import Link from "next/link";

type TabProps = {
  link: string,
  title: string,
}

const Tab = (props: TabProps) => {

  const { link, title } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  const ActiveState = () => {
    setIsActive(!isActive)
  }

  return (
    <div>
      <Card onClick={() => ActiveState()}>
        <List style={{ paddingTop: '0', paddingBottom: '0' }}>
          <div key={title}>
            <Link href={`${link}`} passHref>
              <ListItem selected={isActive} button component="a">
                <ListItemText primary={`${title}`} style={{ textTransform: 'capitalize' }}></ListItemText>
              </ListItem>
            </Link>
          </div>
        </List>
      </Card>
    </div>
  )
}

export default Tab;