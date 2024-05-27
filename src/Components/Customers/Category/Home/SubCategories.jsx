import React from 'react'
import SubCategoryProduct from './SubCategoryProduct'
export default function SubCategories() {
  return (
    <div className='mt-3 mb-3'  style={{display:'flex', justifyContent:'center' } }>
       
        <SubCategoryProduct type={"Air Purifier plants"} img={"https://ii1.pepperfry.com/media/catalog/product/p/e/1100x1210/peace-lily-with-pot-natural-plant-peace-lily-with-pot-natural-plant-le1qfa.jpg"}/>
        <SubCategoryProduct type={"Indoor Plants"} img={"https://ii1.pepperfry.com/media/catalog/product/l/u/494x544/lucky-bamboo-3-layer-natural-plant-in-green-self-watering-plastic-pot-lucky-bamboo-3-layer-natural-p-cu2nri.jpg"}/>
        <SubCategoryProduct type={"Plant Bundles"} img={"https://ii1.pepperfry.com/media/catalog/product/r/e/494x544/red-bromeliad-low-maintenance-plants-by-ugaoo-red-bromeliad-low-maintenance-plants-by-ugaoo-oytefe.jpg"}/>
        <SubCategoryProduct type={"Flowering Plants"} img={"https://ii1.pepperfry.com/media/catalog/product/m/i/1100x1210/miniature-rose--button-rose-natural-plant-with-2-free-plants--syngonium-and-jade--by-nurserylive-min-epxaew.jpg"}/>
        <SubCategoryProduct type={"Bonsai Plants"} img={"https://ii1.pepperfry.com/media/catalog/product/f/l/1100x1210/flowering-bonsai-tree-in-ceramic-pot-by-abana-homes-flowering-bonsai-tree-in-ceramic-pot-by-abana-ho-pz3s3q.jpg"}/>
    </div>
  )
}
