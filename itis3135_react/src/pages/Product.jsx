import Navbar from '../components/Navbar';

const styles = {
  body: {
    textAlign: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    paddingTop: '300px',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#19323C',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
  },
  headerImg: {
    maxWidth: '50px',
    marginBottom: '5px',
  },
  h1: {
    margin: '5px 0',
    color: '#',
    fontSize: '48px',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '10px',
    fontSize: '16px',
  },
  navLink: {
    color: '#e0e0e0',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  plans: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '40px',
  },
  card: {
    width: '260px',
    minHeight: '280px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'left',
    color: '#333',
  },
  h3: {
    textAlign: 'center',
    borderBottom: '2px solid #5a4fcf',
    paddingBottom: '10px',
  },
  form: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '30px',
    borderRadius: '8px',
    margin: '40px auto',
    maxWidth: '500px',
  },
};

export default function Product() {
  return (
    <>
      <header style={styles.header}>
        <img style={styles.headerImg} src="/images/quizzical_cat.png" alt="small cat in wizard robes and hat." />
        <h1 style={styles.h1}>Quizzical Solutions</h1>
        <nav style={styles.navBar}>
          <a style={styles.navLink} href="#video">Product Video</a>
          <a style={styles.navLink} href="#form">Notifications</a>
          <a style={styles.navLink} href="#plans">Pricing Plans</a>
        </nav>
        <div style={{ backgroundColor: '#19323C', width: '100%', padding: '6px 20px' }}>
          <Navbar />
        </div>
      </header>

      <main style={styles.body}>
        <video id="video" width="600" controls>
          <source src="/images/Nyan_cat.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <form id="form" style={styles.form} action="https://www.freecodecamp.org/email-submit">
          <h2>Stay Updated</h2>
          <input id="email" type="email" placeholder="Enter your email address" name="email" required />
          <input id="submit" type="submit" value="Submit" />
        </form>

        <div id="plans" style={styles.plans}>
          <div style={styles.card}>
            <h3 style={styles.h3}>Free Plan</h3>
            <ul>
              <li>Limited use</li>
              <li>Access to Free Resources</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>Member's Plan</h3>
            <ul>
              <li>All Free Plan perks</li>
              <li>Access to ALL resources</li>
              <li>Resource use priority</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>Premium Plan</h3>
            <ul>
              <li>All Member benefits</li>
              <li>24/7 support</li>
              <li>Extra Priority</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
