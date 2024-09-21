import React from 'react'

const Third = ({tags}) => {
  return (
    <>
      <div>Third</div>
      {
        tags.map((tag) => <p key={tag.id}>{tag.name}</p> )
      }
    </>
  )
}

export default Third