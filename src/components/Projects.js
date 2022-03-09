import React from 'react'

const Projects = () => {
  return (
      <section class="section projects">
        <div class="section-title">
          <h2>latest works</h2>
          <div class="underline"></div>
          <p class="projects-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
            magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
            dignissimos aliquid blanditiis architecto voluptates delectus
            voluptate animi nulla! Autem explicabo perspiciatis officia ea.
          </p>
        </div>
        <div class="section-center projects-center">
          <a href="projects.html" class="project-1">
            <article class="project">
              <img
                src="./images/project-1.jpeg"
                alt="single project"
                class="project-img"
              />
              <div class="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
          <a href="projects.html" class="project-2">
            <article class="project">
              <img
                src="./images/project-2.jpeg"
                alt="single project"
                class="project-img"
              />
              <div class="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
          <a href="projects.html" class="project-3">
            <article class="project">
              <img
                src="./images/project-3.jpeg"
                alt="single project"
                class="project-img"
              />
              <div class="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
          <a href="projects.html" class="project-4">
            <article class="project">
              <img
                src="./images/project-4.jpeg"
                alt="single project"
                class="project-img"
              />
              <div class="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
        </div>
      </section>
  )
}

export default Projects