function Resume() {
  return (
    <section id="resume" classNameName="container my-5">
      <h2>Resume</h2>
      <a href="file/RESUME-JJF.pdf" className="btn btn-primary my-3" download>Download Resume</a>
      <h3>Technologies</h3>
      <div className="row">
        <div className="col-md-6">
          <h4>Front-End</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>PWA</li>
            <li>MERN</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Back-End</h4>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>Django</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>Git</li>
            <li>Web API</li>
            <li>ORM</li>
            <li>MVC</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;