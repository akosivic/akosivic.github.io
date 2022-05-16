import Footer from '../components/_footer';
import NavBar from '../components/_navbar';
import React from 'react';
import Head from 'next/head';

type skill = {
  skill: string,
  level: number
};
let max: number = 10;

let professionalSkills: Array<skill> = [{ skill: 'C#.net', level: 7 }, { skill: 'JavaScript', level: 7 }, { skill: 'Bootstrap', level: 5 }, { skill: 'JQuery', level: 5 }, { skill: 'Unit Testing', level: 5 }, { skill: 'OOP', level: 7 }, { skill: 'SQL', level: 7 }, { skill: 'WPF', level: 7 }]
let interpersonalSkills: Array<skill> = [{ skill: 'Leadership', level: 5 }, { skill: 'Scrum Master', level: 7 }]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello :)</title>
        <link
          href="/fonts/fa-regular-400.ttf"
          rel="stylesheet"
        />
        <link
          href="/fonts/fa-brands-400.ttf"
          rel="stylesheet"
        />
        <link
          href="/fonts/fa-solid-900.ttf"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="title">
              <h1 className="has-text-weight-bold	is-size-1">VIC SALAK</h1>
            </div>
            <div className="subtitle">
              <p className="is-uppercase is-size-5"><h2>Software Engineer | Engineering Manager | Team Leader | Scrum master</h2></p>
            </div>
          </div>

        </div>
      </section>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              Skills
            </p>
            <div className="columns is-gapless is-multiline">
              <div className="column">
                <a href='https://www.scrum-institute.org/badges/37410105264279'>
                  <figure className="image is-128x128">
                    <img src="images/scrum-institute.png" alt="scrum-institute" />
                  </figure>
                </a>
              </div>
              <div className="column">
                <a href=''>
                  <figure className="image is-64x64">
                    <img className="is-rounded" src="images/javascript.svg" alt="javascript" />
                  </figure>
                </a>
              </div>
              <div className="column">
                <a href='https://react-bootstrap.github.io/'>
                  <figure className="image is-64x64">
                    <img className="is-rounded" src="images/bootstrap.svg" alt="bootstrap" />
                  </figure>
                </a>
              </div>
              <div className="column">
                <a href='https://reactjs.org/'>
                  <figure className="image is-64x64">
                    <img className="is-rounded" src="images/react.svg" alt="reactjs" />
                  </figure>
                </a>
              </div>
              <div className="column">
                <a href='https://docs.microsoft.com/en-us/dotnet/'>
                  <figure className="image is-64x64">
                    <img className="is-rounded" src="images/csharp.svg" alt="csharp" />
                  </figure>
                </a>
              </div>
              <div className="column">
                <a href='https://www.microsoft.com/en-us/sql-server/sql-server-2019'>
                  <figure className="image is-64x64">
                    <img src="images/sqlserver.svg" alt="sqlserver" />
                  </figure>
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div>
                  <h1 className="has-text-weight-bold">Technical skills</h1>
                </div>
                {professionalSkills.map((skills, idx) => (
                  <div>
                    <span key={idx} style={{ float: "left" }}>{skills.skill}</span>
                    <progress className="progress" value={skills.level} max={max} />
                  </div>
                ))}
              </div>
              <div className="column">
                <div>
                  <h1 className="has-text-weight-bold">Leadership skills</h1>
                </div>
                {interpersonalSkills.map((skills, idx) => (
                  <div>
                    <span key={idx} style={{ float: "left" }}>{skills.skill}</span>
                    <progress className="progress" value={skills.level} max={max} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="title">
              <h1>Contact</h1>
            </div>
            <div className="subtitle">
              <div>
                <a href="https://github.com/akosivic" rel="noopener noreferrer" target="_BLANK">
                  <span className="icon">
                    <i className="fab fa-github">
                    </i>
                  </span>
                  Github
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/vic-angelo-salak-69670733/" rel="noopener noreferrer" target="_BLANK">
                  <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </div >
  )
}
