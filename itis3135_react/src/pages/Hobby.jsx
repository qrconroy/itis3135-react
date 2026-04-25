import { useState } from 'react';

const hobbyStyles = `
  .hobby-body {
    margin: 0;
    padding: 0;
    font-family: "Iosevka Charon", monospace;
    background-color: #B3DEC1;
    color: #0B0033;
  }
  .hobby-header {
    width: 100%;
    background-color: #0B0033;
    color: #27FB6B;
    padding: 40px 20px;
    box-sizing: border-box;
    text-align: center;
  }
  .hobby-header h1 {
    margin: 0;
    font-size: 48px;
  }
  .hobby-nav {
    margin-top: 20px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  .hobby-nav a {
    color: #b8a3c8;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }
  .hobby-nav2 {
    font-size: 16px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .hobby-nav2 a {
    color: #b8a3c8;
    text-decoration: none;
  }
  .hobby-main {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;
  }
  .hobby-main table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    margin-top: 20px;
  }
  .hobby-main th, .hobby-main td {
    padding: 12px;
    text-align: center;
    border: 1px solid #0B0033;
    word-wrap: break-word;
  }
  .hobby-main figure {
    margin: 40px 0;
    text-align: center;
  }
  .hobby-main figure img {
    max-width: 500px;
    height: 300px;
    object-fit: cover;
  }
  .hobby-main a {
    color: #a50337;
    font-style: italic;
  }
  .hobby-footer {
    text-align: center;
    font-size: 14px;
    margin: 15px;
  }
  section.hobby-section {
    animation: fadeIn 0.25s ease;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const sections = [
  { id: 'what',  label: 'What is it?' },
  { id: 'who',   label: 'About Me' },
  { id: 'when',  label: 'Best Times' },
  { id: 'where', label: 'Best Locations' },
  { id: 'how',   label: 'How I Do It' },
  { id: 'why',   label: 'Why I Do It' },
  { id: 'ai',    label: 'AI Prompts' },
];

export default function Hobby() {
  const [active, setActive] = useState('what');
  const [triviaAnswer, setTriviaAnswer] = useState('');
  const [triviaResult, setTriviaResult] = useState('');

  function checkAnswer() {
    const a = triviaAnswer.trim().toLowerCase();
    if (a === 'paris') setTriviaResult('Correct! Paris is the capital of France.');
    else if (a === '') setTriviaResult('Please enter an answer.');
    else setTriviaResult('Not quite! Try again.');
  }

  return (
    <>
      <style>{hobbyStyles}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Iosevka+Charon:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

      <div className="hobby-body">
        <header className="hobby-header">
          <h1>Trivia</h1>
          <nav className="hobby-nav">
            {sections.map((s, i) => (
              <span key={s.id}>
                <a
                  className={active === s.id ? 'active' : ''}
                  onClick={() => setActive(s.id)}
                >
                  {s.label}
                </a>
                {i < sections.length - 1 && ' ◆ '}
              </span>
            ))}
          </nav>
          <nav className="hobby-nav2">
            <a href="/">ITIS 3135</a> ◆{' '}
            <a href="/contract">Academic Contract</a> ◆{' '}
            <a href="/inventory">Inventory</a> ◆{' '}
            <a href="/cards">Cards</a> ◆
          </nav>
        </header>

        <main className="hobby-main">

          {active === 'what' && (
            <section className="hobby-section" id="what">
              <h2>Home</h2>
              <p>Welcome to the home of my favorite hobby, Trivia!</p>
              <p><strong>What</strong> is trivia?</p>
              <p>Trivia is a game or competition in which players answer questions about various topics,
                often in a pub or social setting. It can be played individually or in teams, and questions
                can cover a wide range of subjects, including history, science, pop culture, sports, and more.
                The goal is to test knowledge and have fun while doing it!</p>
              <p>Trivia at a glance:</p>
              <ol>
                <li>Played in bars, restaurants, online, or dedicated venues
                  <ul><li>Some good ones I use are <a href="https://www.qbreader.org/" target="_blank" rel="noreferrer">QB Reader</a> and <a href="http://jetpunk.com/" target="_blank" rel="noreferrer">JetPunk</a></li></ul>
                </li>
                <li>Can be individual or team-based
                  <ul><li>Teams are typically composed of 4-6 players</li></ul>
                </li>
                <li>Typically has a prize for winning
                  <ul><li>Prizes can range from cash to gift cards to bragging rights</li></ul>
                </li>
              </ol>
              <figure>
                <img src="/hobby/images/Marker-style-trivia.png" alt="Quintessential picture of Trivia" />
                <figcaption style={{ textAlign: 'left' }}>This image perfectly encapsulates the spirit of trivia!
                  <em> Generate an image picturesque of trivia. draw it in a marker style</em>
                </figcaption>
              </figure>
            </section>
          )}

          {active === 'who' && (
            <section className="hobby-section" id="who">
              <h2>About Me</h2>
              <p><strong>Who</strong> am I?</p>
              <p>My name is Quinn Conroy, and I am a student at the University of North Carolina at Charlotte, and I
                have been playing trivia nightly for the past 3 months.</p>
              <p>This table shows my team's performances:</p>
              <table>
                <tbody>
                  <tr>
                    <th style={{ backgroundColor: 'gold' }}>Gold</th>
                    <th style={{ backgroundColor: 'silver' }}>Silver</th>
                    <th style={{ backgroundColor: '#cd7f32' }}>Bronze</th>
                  </tr>
                  <tr>
                    <td>2</td><td>1</td><td>4</td>
                  </tr>
                </tbody>
              </table>
              <figure>
                <img src="/hobby/images/Marker-style-trivia-team.png" alt="Trivia Team" />
                <figcaption style={{ textAlign: 'left' }}>This is an AI generated image of a random trivia team, we'll call them "Quiztopher Columbus"
                  <em> Generate an image of a trivia team in a marker style</em>
                </figcaption>
              </figure>
            </section>
          )}

          {active === 'when' && (
            <section className="hobby-section" id="when">
              <h2>Best Times</h2>
              <p><strong>When</strong> do I play?</p>
              <p>I play trivia every thursday at 7 PM.</p>
              <table>
                <tbody>
                  <tr>
                    <th>Day</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th>
                    <th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>
                  </tr>
                  <tr>
                    <td>Time</td><td>None</td><td>None</td><td>None</td>
                    <td><strong>7 PM</strong></td><td>None</td><td>None</td><td>None</td>
                  </tr>
                </tbody>
              </table>
              <figure>
                <img src="/hobby/images/Man-dining-and-writing.png" alt="Trivia with dinner!" />
                <figcaption style={{ textAlign: 'left' }}>This image demonstrates the joys of playing trivia while enjoying a meal!
                  <em> Generate an image of a man eating his dinner in a bar/restaurant while writing on a trivia sheet</em>
                </figcaption>
              </figure>
            </section>
          )}

          {active === 'where' && (
            <section className="hobby-section" id="where">
              <h2>Best Locations</h2>
              <p><strong>Where</strong> do I play?</p>
              <p>I play at a restaurant called "Real McCoy's" in my hometown of Wake Forest, NC.</p>
              <p>Any bar or restaurant that hosts trivia for customers is a great place to play!</p>
              <figure>
                <img src="/hobby/images/Trivia-night-TV.png" alt="Trivia Night at a Restaurant" />
                <figcaption style={{ textAlign: 'left' }}>This image shows an example of a trivia night at a restaurant.
                  <em> Generate an image of a restaurant hosting a trivia night in a marker drawing style.</em>
                </figcaption>
              </figure>
            </section>
          )}

          {active === 'how' && (
            <section className="hobby-section" id="how">
              <h2>How I Do It</h2>
              <p><strong>How</strong> do I play?</p>
              <p>You show up to the venue, find a seat, and wait for the host to start asking questions.
                You write your answer on a card and turn it in before the time runs out.</p>
              <p>Here! You can even try yourself:</p>
              <div>
                <label htmlFor="question">What is the capital of France?</label><br />
                <input
                  type="text"
                  id="question"
                  value={triviaAnswer}
                  onChange={(e) => setTriviaAnswer(e.target.value)}
                  style={{ width: 'auto' }}
                /><br /><br />
                <button type="button" onClick={checkAnswer}>Submit</button>
                <div id="result">{triviaResult}</div>
              </div>
              <figure>
                <img src="/hobby/images/Group-answering-trivia.png" alt="Trivia Question" />
                <figcaption style={{ textAlign: 'left' }}>Group of people competing to answer a trivia question first.
                  <em> Generate an image of a trivia question being answered on a piece of paper.</em>
                </figcaption>
              </figure>
            </section>
          )}

          {active === 'why' && (
            <section className="hobby-section" id="why">
              <h2>Why I Do It</h2>
              <p><strong>Why</strong> do I play?</p>
              <ol>
                <li>It is a fun way to unwind after a long day of classes</li>
                <li>It allows me to spend time with my friends and meet new people</li>
                <li>It is a great way to learn new things and expand my knowledge</li>
                <li>It gives me a sense of accomplishment when I get a question right</li>
              </ol>
              <figure>
                <img src="/hobby/images/Trivia-winner.png" alt="Trivia Winner" />
                <figcaption style={{ textAlign: 'left' }}>A trivia winner celebrating with their team.
                  <em> Generate an image of a trivia winner celebrating with their team, holding up a trophy.</em>
                </figcaption>
              </figure>
            </section>
          )}

          {active === 'ai' && (
            <section className="hobby-section" id="ai">
              <h2>AI Prompts</h2>
              <p>Here are the AI prompts I used to help make this website (Claude Sonnet 4.6):</p>
              <ul>
                <li><em>I need to create a webpage with seven different pages built in (sections)
                  where only the one I navigate to will appear...</em> This prompt was used to further
                  my understanding of JavaScript and CSS.</li>
                <li>How would I get a form to act like a trivia question?</li>
              </ul>
              <p>All images were generated using Microsoft Copilot.</p>
            </section>
          )}

        </main>

        <footer className="hobby-footer">
          <a href="/projects">Client Project (WIP)</a>
        </footer>
      </div>
    </>
  );
}
