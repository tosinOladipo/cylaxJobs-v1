import React from 'react'

const CandidateTags = ({tags} : {tags: string[]}) => {
  return (
    <div className='flex gap-1'>
        {tags.map((tag) => (
            <div key={tag} className='p-1.5 text-xs font-light bg-orange-100 text-orange-500 rounded-sm'>{tag}</div>
        ))}
    </div>
  )
}

export default CandidateTags