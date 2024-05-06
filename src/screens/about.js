import './about.css';

function About() {
  return (
    <div className="about">
      <div className="curved-container">
        <div className='main-container'>
          <div className='headshot'>
            A headshot goes in here
          </div>
          <div className='bio-container'>
            <div className='bio'>
            <h1>Sam DeLucia-Green</h1>
            <p>Hi, my name's Sam! I am software engineer and undergradute senior at Purdue University studing computer science. I will be graduating in the Spring of 2025 with concentrations in software engineering and machine learning, a minor in political science, and a certificate in entreprenuership and innovation. For summer 2024, I have accepted a positon at Cboe Global Markets as a Software Engineer Intern and am seeking an additional internship/co-op for Fall 2024. I have well-rounded technical skills, am a people-person, and an extremely hard-worker</p>
            </div>
          </div>
        </div>
        <div className='linkedin'>
          <a href="https://www.linkedin.com/in/samdelucia"><p>Linkedin</p></a>
        </div>
        <div className='github'>
          <a href="https://www.github.com/SamDG7"><p>Github</p></a>
        </div>
        
        
      </div>
    </div>
  );
}

export default About;