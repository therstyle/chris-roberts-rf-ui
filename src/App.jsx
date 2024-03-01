function App() {
  return (
    <main>
      <header className="header-main">
        <div className="header-main__content">
          <div className="header-main__event-logo">
            <img src="/event-logo.svg" alt="Event Logo" />
          </div>

          <div className="header-main__event-details">
            <h1>RainFocus Summit</h1>

            <p>
              December 15th
              <br />
              Lehi, Utah
            </p>
          </div>
        </div>

        <div className="header-main__edit">
          <button className="primary">Edit event</button>
        </div>
      </header>

      <section className="event-setup">
        <h2>Event setup guide</h2>
        <p>
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </section>

      <h3 className="org-settings">
        <img src="/icon-org.svg" alt="Org Settings" />
        Org Settings
      </h3>

      <section className="event-steps">
        <ul>
          <li className="event-steps__step-1">
            <h4>Base settings.</h4>

            <div className="card">
              <div className="card-body">
                <ul className="card-horz-description">
                  <li>
                    <h5>General</h5>
                    <p>Define Attendee types & attributes</p>
                  </li>

                  <li>
                    <h5>Title</h5>
                    <p>
                      Description that explains the value goes here. Description
                      that explains the value goes here.
                    </p>
                  </li>

                  <li>
                    <h5>Title</h5>
                    <p>
                      Description that explains the value goes here. Description
                      that explains the value goes here.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="event-steps__step-2">
            <h4>Build registration workflows.</h4>

            <div className="card-grid">
              <div className="card">
                <div className="card-body">
                  <h5>Attendee Registration</h5>
                  <p>Start by creating a general registration workflow</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5>Attendee Registration</h5>
                  <p>Start by creating a general registration workflow</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5>Attendee Registration</h5>
                  <p>Start by creating a general registration workflow</p>
                </div>
              </div>

              <button className="card">
                <span className="card-body">Add Registration Workflow</span>
              </button>
            </div>
          </li>

          <li className="event-steps__step-3">
            <h4>Design attendee experiences.</h4>

            <div className="card-grid">
              <div className="card">
                <div className="card-body">
                  <h5>Attendee Portal</h5>
                  <p>
                    Manage the portal that attendees will see after they’ve
                    register for your event.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="event-steps__step-4">
            <h4>Build your exhibitor platform.</h4>

            <div className="card-grid bg-dark">
              <div className="card">
                <div className="card-body">
                  <h5>Exhibitor Portal</h5>
                  <p>
                    Manage the portal that attendees will see after they’ve
                    register for your event.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5>Exhibitor Portal</h5>
                  <p>
                    Manage the portal that attendees will see after they’ve
                    register for your event.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5>Exhibitor Logos</h5>
                  <p>
                    Manage the portal that attendees will see after they’ve
                    register for your event.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5>Exhibitor Tasks</h5>
                  <p>
                    Manage the portal that attendees will see after they’ve
                    register for your event.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5>Exhibitor Forms</h5>
                  <p>
                    Manage the portal that attendees will see after they’ve
                    register for your event.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
