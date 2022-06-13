import React, { useState } from "react";
import styles from '../styles/category-panel.component.module.scss';
import CategoryList from '../assets/data/categories';


const CategoryPanel = () => {

  const [isActive, setIsActive] = useState<boolean>(false);
  let activeCategory: any = [];


  const CategoryIsActive = (cat: string) => {
    setIsActive(!isActive)
    activeCategory?.push(cat);
    console.log(activeCategory)
  }

  return (
    <div className={styles.wrapper}>
      {CategoryList.map(category => {
        return (
          <div key={category} className={isActive && activeCategory.includes(category) ? styles.btnContainerIsActive : styles.btnContainer}>
            <button className={styles.btnCategory} onClick={() => CategoryIsActive(category)}>{category}</button>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryPanel;