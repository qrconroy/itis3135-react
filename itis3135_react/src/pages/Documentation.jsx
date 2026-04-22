import Navbar from '../components/Navbar';

const docStyles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '220px',
    overflowY: 'auto',
    borderRight: '1px solid #ccc',
    padding: '1rem',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  navList: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  navItem: {
    borderTop: '1px solid #ccc',
  },
  navLink: {
    display: 'block',
    padding: '0.6rem 0.5rem',
    color: '#005a9c',
    textDecoration: 'none',
  },
  body: {
    paddingLeft: '220px',
    boxSizing: 'border-box',
  },
  pageHeader: {
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f4f4f4',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc',
  },
  mainDoc: {
    padding: '1rem',
  },
};

export default function Documentation() {
  return (
    <div style={docStyles.body}>
      <header style={docStyles.pageHeader}>
        <h1>FCC RWD Certification</h1>
        <h2>Technical Documentation</h2>
        <Navbar />
      </header>

      <nav id="navbar" style={docStyles.navbar}>
        <h2>Navigation</h2>
        <ol style={docStyles.navList}>
          {['Introduction', 'Java', 'HTML', 'CSS', 'JavaScript', 'C_and_C++'].map((id) => (
            <li key={id} style={docStyles.navItem}>
              <a
                className="nav-link"
                href={`#${id}`}
                style={docStyles.navLink}
              >
                {id.replace('_', ' ')}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <main id="main-doc" style={docStyles.mainDoc}>
        <section className="main-section" id="Introduction">
          <h2>Introduction</h2>
          <p>
            This documentation page provides an overview of several widely-used programming
            languages and web technologies. Whether you are a beginner or an experienced
            developer, this guide will help you understand the fundamentals of each language.
          </p>
          <p>
            Each section covers the purpose of the language, its common use cases, and a
            basic code example to get you started. Use the navigation bar on the left to
            jump to any section.
          </p>
        </section>

        <section className="main-section" id="Java">
          <h2>Java</h2>
          <p>
            Java is a high-level, class-based, object-oriented programming language designed
            to have as few implementation dependencies as possible. It is widely used for
            building enterprise-scale applications, Android apps, and backend web services.
          </p>
          <p>
            Java follows the "write once, run anywhere" principle, meaning compiled Java code
            can run on any platform that supports a Java Virtual Machine (JVM) without
            recompilation.
          </p>
          <code>{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</code>
        </section>

        <section className="main-section" id="HTML">
          <h2>HTML</h2>
          <p>
            HTML (HyperText Markup Language) is the standard markup language used to create
            web pages. It describes the structure of a web page using a series of elements
            represented by tags that tell the browser how to display content.
          </p>
          <p>
            HTML is the backbone of every webpage. It works alongside CSS for styling and
            JavaScript for interactivity, forming the three core technologies of the web.
          </p>
          <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}</code>
        </section>

        <section className="main-section" id="CSS">
          <h2>CSS</h2>
          <p>
            CSS (Cascading Style Sheets) is a stylesheet language used to control the
            presentation of HTML documents. It handles layout, colors, fonts, spacing,
            and responsive behavior across different screen sizes.
          </p>
          <p>
            CSS uses a rule-based syntax where selectors target HTML elements, and
            declarations define how those elements should look. Modern CSS features like
            Flexbox and Grid make complex layouts straightforward.
          </p>
          <code>{`body {
    font-family: Georgia, serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    font-size: 2rem;
}`}</code>
        </section>

        <section className="main-section" id="JavaScript">
          <h2>JavaScript</h2>
          <p>
            JavaScript is a lightweight, interpreted programming language with first-class
            functions. It is most well-known as the scripting language for web pages, but
            it is also used in non-browser environments such as Node.js for server-side
            development.
          </p>
          <p>
            JavaScript enables dynamic content, event handling, and communication with
            servers via APIs. It is one of the core technologies of the web alongside
            HTML and CSS.
          </p>
          <code>{`// A simple function to greet a user
function greet(name) {
    return \`Hello, \${name}!\`;
}

console.log(greet("World")); // Output: Hello, World!`}</code>
        </section>

        <section className="main-section" id="C_and_C++">
          <h2>C and C++</h2>
          <p>
            C is a general-purpose, procedural programming language that has greatly
            influenced many other languages. It is widely used in system programming,
            embedded systems, and operating system development due to its low-level
            memory access and efficiency.
          </p>
          <p>
            C++ extends C with object-oriented features such as classes and inheritance.
            It is used in game development, high-performance applications, and software
            that requires fine-grained control over system resources.
          </p>
          <code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}</code>
        </section>
      </main>
    </div>
  );
}
