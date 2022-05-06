import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="/images/akosivic-logo-long.png" />
          </a>

          {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
      <div className="section ">
        <div className="columns is-centered">
          <div className="column is-one-fifth">
            <div className="card is-info">
              <div className="card-image">
                <figure className="image is-square">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content is-info">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-1by1">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">About Me</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-fifth">
            <div className="card">
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-1by1">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Skills</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-fifth">
            <div className="card">
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-1by1">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Experience</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-fifth">
            <div className="card">
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Contact Me</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
                {/* <div className="content">
                  <h4>Let's connect or say hi!</h4>
                </div> */}
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <a href="https://twitter.com/codinghorror/status/506010907021828096">Github</a>
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span>
                      <a href="#">Linked In</a>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </div>
  )
}
