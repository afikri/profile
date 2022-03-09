import React from 'react'

const Services = () => {
  return (
    <section class="section bg-grey">
      <div class="section-title">
        <h2>services</h2>
        <div class="underline"></div>
      </div>
      <div class="services-center section-center">
        <article class="service">
          <i class="fas fa-code service-icon"></i>
          <h4>web development</h4>
          <div class="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </article>
        <article class="service">
          <i class="fab fa-sketch service-icon"></i>
          <h4>web design</h4>
          <div class="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </article>
        <article class="service">
          <i class="fab fa-android service-icon"></i>
          <h4>app design</h4>
          <div class="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Services;