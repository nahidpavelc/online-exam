import React from 'react'
import Comment from '../Comment/Comment'
import Cover from '../Cover/Cover'
import Section1 from '../Section1/Section1'
// import TopCategory from '../TopCategory/TopCategory'

const Home = () => {
  return (
    <div className="body" style={{  }}>
      <Cover />
      <Section1 />
      {/* <TopCourses /> */}
      <Comment />
    </div>
  )
}

export default Home
