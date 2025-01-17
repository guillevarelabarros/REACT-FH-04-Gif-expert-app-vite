import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
  
  const [categories, setcategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;
        setcategories([ newCategory,...categories])

  }



  return (
    <>

       <h1>GifExpertApp</h1>


        <AddCategory 

            onNewCategory = { (value) =>  onAddCategory(value) }
        />



        <button onClick={ onAddCategory } >Agregar</button>

        {
          categories.map( (category) => (
          <GifGrid 
              key={ category} 
              category = {category} />
          ))
        }

    </>
  )
}