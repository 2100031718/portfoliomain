import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


// eslint-disable-next-line react/prop-types
const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I bring a versatile skill set with experience in web development and AI-driven solutions, delivering dynamic and impactful applications.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Hi</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Hi</ToggleButton>
          }
            <Divider />
          {toggle === 'ml' ?
            <ToggleButton active value="ml" onClick={() => setToggle('ml')}>AI/ML & NATURAL LANGUAGE PROCESSING</ToggleButton>
            :
            <ToggleButton value="ml" onClick={() => setToggle('ml')}>AI/ML & NATURAL LANGUAGE PROCESSING</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>OTHER'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>OTHER'S</ToggleButton>
          }
        
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              // eslint-disable-next-line react/jsx-key
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              // eslint-disable-next-line react/jsx-key
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects