import Footer from '../components/_footer';
import NavBar from '../components/_navbar';
import Contact from '../components/_contact';
import Skills from '../components/_skills';
import Modal from '../components/_modal';
import React from 'react';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [data, setdata] = useState({ title: "", experience: "" });
  const closeModal = (ev, elem) => {
    let modal = document.getElementsByClassName("modal");
    if (modal.length > 0) {
      modal[0].classList.remove("is-active");
    }
  };

  const showModal = (exp) => {
    setdata(exp);
    let modal = document.getElementById("modal");
    if (modal) {
      modal.classList.add("is-active");
    }
  };

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
              <div className="content">
                <div className="columns is-centered">
                  <div className="column is-narrow">
                    <a className="is-uppercase is-size-5" onClick={() => showModal({ title: "Software Engineer", experience: "10+ years Experience working with different programming languages, such as C#, SQL, Javascript." })}> Software Engineer </a>
                  </div>
                  <div className="column is-narrow">
                    <a className="is-uppercase is-size-5" onClick={() => showModal({ title: "Engineering Manager", experience: "3 years Experience, handled around 10 people and has experience with people management." })}> Engineering Manager </a>
                  </div>
                  <div className="column is-narrow">
                    <a className="is-uppercase is-size-5" onClick={() => showModal({ title: "Team Leader", experience: "3 years Experience, talked to different stakeholders assign tasks and estimates." })}> Team Leader  </a>
                  </div>
                  <div className="column is-narrow">
                    <a className="is-uppercase is-size-5" onClick={() => showModal({ title: "Scrum Master", experience: "2 years Experience, facilitated the different scrum ceremonies such as Sprint Planning, Daily Scrum,Sprint Review ,Sprint Retrospective." })}> Scrum master </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Contact />
      <Footer />
      <Modal id="modal"
        closeModal={closeModal}
        title={data.title}
      >
        <p>{data.experience}</p>
      </Modal>
    </div >
  )
}
