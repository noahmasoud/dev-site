import './App.css';
import './css/about.css'
import './css/styles.css'

function App() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
        <link rel="stylesheet" href="styles/styles.css" />
        <link rel="stylesheet" href="styles/about.css" />
        <link href="/images/favicon.ico" rel="icon" type="image/x-icon" />
        <meta property="og:image" content="images/favicon.ico" />
      </head>
      <body>
        <header>
          <a href="index.html">Home </a>
          <a href="projects.html">Projects </a>
          <a href="coursereviews.html">Course Reviews </a>
          <a href="thoughts.html">Thoughts </a>
          <a href="etc.html">Etc </a>
        </header>
        <main>
          <div className='text-container'>
            <div className='hello text'>
              Howdy. I am Noah.
            </div>
          </div>
          <div className='about-text'>
            I'm a driven, detail-oriented, problem-solving individual with a love for software engineering/mathematics.
            I am currently a first-generation Latino pursuing my B.S in Computer Science/Applied Mathematics at Texas State
            University.
            <br /><br />
            Initially, I registered in college studying finance with the hopes of getting into investment banking but I
            quickly found out
            I loved technical thinking and wanted to be someone who embarks on the future of technology.
            <br /><br />
            My current interests are machine learning, full stack web development, entrepreneurship, and web security.
            <br /><br />
            When I am not in the classroom you can find me listening to music, spending time outdoors, playing chess, eating
            good food, and floating the San Marcos River.
            <br /><br />
            This summer's plans:
            <ul>
              <li>Be taking CS3339, a computer architecture class</li>
              <li>Working full time with my current job, or potentially</li>
              <li>Mastering LeetCode lol</li>
            </ul>
          </div>
        </main>
        <footer>
          <div>
            <a href="https://www.linkedin.com/in/noahmasoud/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div>
            <a href="https://github.com/noahmasoud" className="fa fa-github" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div>
            <a href="https://www.instagram.com/noahmasoud" className="fa fa-instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </footer>
      </body>
    </>
  );
}

export default App;
