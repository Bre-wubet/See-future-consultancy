import React from 'react'

import OurClients from '../sections/abouts/OurClients'
import OurTeam from '../sections/abouts/OurTeam'
import OurStory from '../sections/abouts/OurStory'


function About() {
  return (
    <div>
      <OurStory />
      <OurTeam />
      <OurClients />
    </div>
  )
}

export default About