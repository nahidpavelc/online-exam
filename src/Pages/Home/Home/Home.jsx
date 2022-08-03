import React from 'react'
import Blog from '../Blog/Blog'
import Comment from '../Comment/Comment'
import Cover from '../Cover/Cover'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import TopCourses from '../TopCourses/TopCourses'
import TopCategory from '../TopCategory/TopCategory'
import LatestCourses from '../LatestCourses/LatestCourses'
import Testimonial from '../Testimonial/Testimonial'
import Instructor from '../Instructor/Instructor'

const Home = () => {
  return (
    <div className="body" style={{ backgroundColor: '#A8A8A8' }}>
      <Cover />
      <Section1 />
      <Section2 />
      <TopCategory />
      <TopCourses />
      <LatestCourses />
      <Testimonial />
      <Instructor />
      <Blog />
      <Comment />
    </div>
  )
}

export default Home
