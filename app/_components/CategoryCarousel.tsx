import categories from '@/utils/data/jobCategories'
import React from 'react'
import CategoryCard from './CategoryCard'

function CategoryCarousel() {
  return (
    <aside className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4'>
        {categories.map(category => (
            <CategoryCard key={category.id} label={category.label} total={category.total} />
        ))}
    </aside>
  )
}

export default CategoryCarousel
