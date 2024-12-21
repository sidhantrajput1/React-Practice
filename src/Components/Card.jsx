const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00",
    },
  ];
  
  export default function App() {
    return (
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
          <SkillList />
        </div>
      </div>
    );
  }
  
  // Profile Card
  
  function Avatar() {
    return (
      <div>
        <img className="avatar" src="./mypic.jpg" alt="Sidhant Singh" />
      </div>
    );
  }
  
  function Intro() {
    return (
      <div className="">
        <h1>Sidhant Singh</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          nesciunt assumenda incidunt ea magni iure.
        </p>
      </div>
    );
  }
  
  function SkillList() {
    return (
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill
            key={skill.skill}
            color={skill.color}
            skill={skill.skill}
            emoji={skill.emoji}
            level={skill.level}
          />
        ))}
        {/* <Skill skill="React" emoji="💪" color="red" />
        <Skill skill="Javascript" emoji="🚀" color="blue" />
        <Skill skill="HTML+CSS" emoji="💪" color="yellow" />
        <Skill skill="Node.js" emoji="🚀" color="orange" /> */}
      </div>
    );
  }
  
  function Skill({ skill,  color , level}) {
    return (
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          
          {level === "beginner" && '🫡'}
          {level === "intermediate" && '👍'}
          {level === "advanced" && '💪'}
        </span>
      </div>
    );
  }
  