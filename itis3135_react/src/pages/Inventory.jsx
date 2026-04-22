import Navbar from '../components/Navbar';

const styles = `
  .inv-table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    table-layout: fixed;
  }
  .inv-table th, .inv-table td {
    padding: 10px 5px;
    word-wrap: break-word;
  }
  .inv-table th {
    background-color: rgb(70,70,70);
    color: white;
  }
  .status {
    display: inline-block;
    padding: 5px 15px;
    height: auto;
    line-height: 1;
    border: 2px solid white;
  }
  .rate span {
    display: inline-block;
    border: 1px solid white;
    border-radius: 50%;
    margin: 0 3px;
    height: 15px;
    width: 15px;
    background-image: linear-gradient(to left, lightgray, gray);
    vertical-align: middle;
  }
  tr.read {
    background-image: linear-gradient(to right, rgb(14,183,14), rgb(2,101,2));
    color: white;
  }
  tr.read .status {
    background-image: linear-gradient(to right, rgb(14,183,14), rgb(2,101,2));
  }
  tr.to-read {
    background-image: linear-gradient(to right, red, orangered);
    color: white;
  }
  tr.to-read .status {
    background-image: linear-gradient(to right, red, orangered);
  }
  tr.in-progress {
    background-image: linear-gradient(to right, goldenrod, #B37400);
    color: white;
  }
  tr.in-progress .status {
    background-image: linear-gradient(to right, goldenrod, #B37400);
  }
`;

function Stars({ count }) {
  return (
    <span className="rate">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          style={
            i <= count
              ? { backgroundImage: 'linear-gradient(to left, gold, goldenrod)' }
              : {}
          }
        />
      ))}
    </span>
  );
}

export default function Inventory() {
  return (
    <>
      <style>{styles}</style>
      <header>
        <h1>FCC RWD Certification</h1>
        <h2>Inventory</h2>
        <Navbar />
      </header>
      <main>
        <table className="inv-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="read">
              <td>Harry Potter and the Sorcerer's Stone</td>
              <td>J. K. Rowling</td>
              <td>Young Adult Fiction</td>
              <td><span className="status">Read</span></td>
              <td><Stars count={2} /></td>
            </tr>
            <tr className="in-progress">
              <td>Harry Potter and the Chamber of Secrets</td>
              <td>J. K. Rowling</td>
              <td>Young Adult Fiction</td>
              <td><span className="status">In Progress</span></td>
              <td><Stars count={0} /></td>
            </tr>
            <tr className="to-read">
              <td>Harry Potter and the Prisoner of Azkaban</td>
              <td>J. K. Rowling</td>
              <td>Young Adult Fiction</td>
              <td><span className="status">To Read</span></td>
              <td><Stars count={0} /></td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
