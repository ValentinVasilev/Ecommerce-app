import { useState } from "react";
import { useAppSelector } from "../../utils/app/hooks";
import { selectAccount } from "../../utils/app/features/account/accountSlice";
import styles from '../../styles/account/cart.module.scss';
import Image, { StaticImageData } from "next/image";

const Cart = () => {

  const [account, setAccount] = useState(useAppSelector(selectAccount));

  console.log(account[0]?.user.cart[1].thumbnail)

  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemsContainer}>
        {account[0]?.user.cart.map((item: any) => {
          return (
            <div key={item}>
              <ItemCard thumbnail={item.thumbnail} title={item.title} count={1} refId={item.id} />
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Cart;


type ItemCardProps = {
  thumbnail: StaticImageData,
  // thumbnail: string,
  title: string,
  refId: string,
  count: number,
}


const ItemCard = (props: ItemCardProps) => {

  const { thumbnail, title, refId, count } = props;

  console.log('THUMB', thumbnail)
  return (
    <div className={styles.itemCardWrapper}>
      <div >
        <Image
          src={thumbnail}
          alt="image thumbnail"
          width={100} height={100}
          style={{ border: '1px solid transparent', borderRadius: '80px' }}
        />
      </div>
      <p>{title}</p>
      <p>ref: {refId}</p>
      <p>{count}</p>
    </div>
  )
}