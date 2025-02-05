import React from 'react'
import {categoryImg} from './FullInfo'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'
function Category() {
  return (
    <section className={classes.cat_container}>
        {
            categoryImg.map((img)=>(
                <CategoryCard data = {img} />
            ))
        }
    </section>  
  )
}

export default Category