import React from 'react'

const Timeline = () => {
    return (
        <section className="section timeline">
            <div className="section-title">
                <h2>timeline</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center timeline-center">
                <article className="timeline-item">
                    <h4>2010</h4>
                    <p>
                        Completed my bachelor degree in Applied Computer Sciencet at Free University of Bozen Bolzano, Italy
                    </p>
                    <span className="number">
                        1
                    </span>
                </article>
                <article className="timeline-item">
                    <h4>2015</h4>
                    <p>
                        Completed my master degree in Computing and Innovation at The Adelaide University, South Australia
                    </p>
                    <span className="number">
                        2
                    </span>
                </article>
                <article className="timeline-item">
                    <h4>2017</h4>
                    <p>
                        Became Database Programmer at IOM Indonesia.
                    </p>
                    <span className="number">
                        3
                    </span>
                </article>
                <article className="timeline-item">
                    <h4>2018</h4>
                    <p>
                        Worked for Betterworks Indonesia as IT Officer
                    </p>
                    <span className="number">
                        4
                    </span>
                </article>
                <article className="timeline-item">
                    <h4>2021</h4>
                    <p>
                        Worked for UNICEF Indonesia as ICT Associate.
                    </p>
                    <span className="number">
                        5
                    </span>
                </article>
                <article className="timeline-item">
                    <h4>2022</h4>
                    <p>
                        Becoming freelance developer.
                    </p>
                    <span className="number">
                        6
                    </span>
                </article>
            </div>
        </section>
    )
}

export default Timeline