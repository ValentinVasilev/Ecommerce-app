import React, { useState } from "react";
import Image from "next/image";
import styles from '../../styles/sub-components/search.component.module.scss';
import Products from '../../assets/data/products';
import Link from 'next/link';

const Search = () => {

  const [searchParams, setSearchParams] = useState<string>('');

  const closeSearchFilter = () => {
    setSearchParams('');
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '3px' }}>
      <input className={styles.input}
        type="text"
        autoComplete="off"
        onChange={(e) => setSearchParams((e.target as HTMLInputElement).value)}
        value={searchParams}
        placeholder="Search for a product.." />


      <div className={styles.searchResults} style={searchParams.length < 1 ? { display: 'none' } : { display: 'block' }}>
        {Products.filter(product => product.title.toLowerCase().includes(searchParams.toLowerCase()) || product.brand.includes(searchParams))
          .map(item => {
            return (
              <div key={item.id} className={styles.searchItems} onClick={() => closeSearchFilter()}>
                <Link href={`/products/${item.category}/${item.id}`} passHref>
                  <div className={styles.searchResultContainer}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className={styles.resultTitle}>{item.title}</span>
                      <span style={{ color: 'gray', fontSize: '15px', fontWeight: '400' }}>{item.brand}</span>
                      <p style={{ color: 'green', fontSize: '17px', fontWeight: 'bolder' }}>$ {item.price}</p>
                    </div>
                    <Image src={item.thumbnail} width={100} height={50} alt="product image" />
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    </div >
  )
}



export default Search;

