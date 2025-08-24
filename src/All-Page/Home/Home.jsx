import React from 'react';

import HomeSlaider from './HomeSlaider';
import CourseInfo from './CourseInfo';
import ProfileCards from './ProfileCards';



const Home = () => {
  return (
    <div>
      <HomeSlaider/>
     <CourseInfo></CourseInfo>
     <ProfileCards></ProfileCards>
    </div>
  );
};

export default Home;