import { useState, useEffect } from "react";
import "../styles/characters.css";

import rickImg from "../assets/images/rick.png";
import weaselImg from "../assets/images/weasel.png";
import ninaImg from "../assets/images/nina.png";
import doctorImg from "../assets/images/doctor.png";
import circeImg from "../assets/images/circe.png";
import frankImg from "../assets/images/frank.png";
import amandaImg from "../assets/images/amanda.png";
import brideImg from "../assets/images/bride.png";
import backgroundImg from "../assets/images/back2.png"; 

const characters = [
  { name: "Rick Flag Sr.", img: rickImg, bio: "Leader of the team, a battle-hardened soldier.", category: "Human" },
  { name: "Weasel", img: weaselImg, bio: "A feral and unpredictable creature with a taste for chaos.", category: "Monster" },
  { name: "Nina Mazursky", img: ninaImg, bio: "A scientist transformed into an amphibious monster.", category: "Scientist" },
  { name: "Doctor Phosphorus", img: doctorImg, bio: "A man turned into a living nuclear reactor.", category: "Scientist" },
  { name: "Circe", img: circeImg, bio: "A cunning sorceress who wields arcane powers.", category: "Mystic" },
  { name: "Frankenstein", img: frankImg, bio: "A reanimated soldier torn between monster and hero.", category: "Monster" },
  { name: "Bride of Frankenstein", img: brideImg, bio: "A reanimated creation with unmatched strength and intellect, driven by both fury and compassion.", category: "Monster" },
  { name: "Amanda Waller", img: amandaImg, bio: "The ruthless strategist behind the Creature Commandos.", category: "Human" },
];

const categories = ["All", "Human", "Scientist", "Mystic", "Monster"];

export default function Characters() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    let results = characters.filter((char) =>
      char.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filter !== "All") {
      results = results.filter((char) => char.category === filter);
    }
    setVisible(results);
  }, [search, filter]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    position: 'relative',
    paddingTop: '100px' // Add padding to push content below navbar
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better readability
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    padding: '2rem'
  };

  return (
    <div className="characters-container" style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 className="characters-title">Meet the Commandos</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="Search character..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filter-buttons">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="characters-grid">
          {visible.length > 0 ? (
            visible.map((char, index) => (
              <div key={index} className="character-card fade-in">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={char.img} alt={char.name} />
                    <h2>{char.name}</h2>
                  </div>
                  <div className="card-back">
                    <h2>{char.name}</h2>
                    <p>{char.bio}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No characters found.</p>
          )}
        </div>
      </div>
    </div>
  );
}