import Navbar from '../components/Navbar';

const cardStyle = `
  #playing-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }
  .play-card {
    width: 180px;
    height: 260px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 4px 4px 15px rgba(0,0,0,0.4);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .play-card .corner-left {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 24px;
    margin: 10px;
    font-family: serif;
  }
  .play-card .corner-right {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 24px;
    margin: 10px;
    font-family: serif;
    transform: rotate(180deg);
  }
  .play-card .middle img {
    width: 100px;
    height: auto;
  }
`;

const cards = [
  { label: 'A♠', color: 'black', img: '/images/black_cat_spade.png', alt: 'Ace of Spades' },
  { label: 'K♦', color: 'black', img: '/images/cat_king_diamonds.png', alt: 'King of Diamonds' },
  { label: 'Q♥', color: 'red',   img: '/images/Cat_queen_hearts.png', alt: 'Queen of Hearts' },
  { label: 'J♣', color: 'black', img: '/images/jack-of-clubs.png',    alt: 'Jack of Clubs' },
];

export default function Cards() {
  return (
    <>
      <style>{cardStyle}</style>
      <header>
        <h1>FCC RWD Certification</h1>
        <h2>Playing Cards</h2>
        <Navbar />
      </header>
      <main id="playing-cards">
        {cards.map((c) => (
          <div className="play-card" key={c.label}>
            <span className="corner-left" style={{ color: c.color }}>{c.label}</span>
            <div className="middle">
              <img src={c.img} alt={c.alt} />
            </div>
            <span className="corner-right" style={{ color: c.color }}>{c.label}</span>
          </div>
        ))}
      </main>
    </>
  );
}
