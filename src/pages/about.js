import posterImg from "../assets/images/poster.png";
import backgroundImg from "../assets/images/cc_background.png";
import "../styles/about.css";

const teammates = [
  { name: "Eriel John Espinosa", fun: "Favorite Character: Doctor Phosporus"},
  { name: "Daniel David Lupase", fun: "Likes Men"},
  { name: "Bernard Louie Pacanza", fun: "Likes Foods"},
];

export default function About() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', 
    minHeight: '100vh',
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    padding: '2rem'
  };

  return (
    <div className="about-container" style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 className="about-title">About Creature Commandos</h1>
        <div className="mission-box">
          <h2>"When humanity fails... monsters rise."</h2>
        </div>
        <p className="about-text">
          The Creature Commandos are a covert strike force of monstrous beings, 
          assembled to tackle missions too dangerous for ordinary humans. 
          From soldiers to scientists, beasts to bizarre experiments, this 
          unlikely squad blends terror and heroism in the name of victory.
        </p>
        <img src={posterImg} alt="Creature Commandos Team" className="about-image" />
        <div className="team-section">
          <h2 className="team-title">Development Team</h2>
          <div className="team-grid">
            {teammates.map((member, index) => (
              <div key={index} className="team-card">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-fun">{member.fun}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}