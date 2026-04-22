import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';

const defaultCourses = [];

export default function IntroForm() {
  const [courses, setCourses] = useState(defaultCourses);
  const [output, setOutput] = useState('');
  const formRef = useRef();

  function addCourse() {
    setCourses((prev) => [
      ...prev,
      { dept: '', num: '', name: '', reason: '' },
    ]);
  }

  function removeCourse(i) {
    setCourses((prev) => prev.filter((_, idx) => idx !== i));
  }

  function updateCourse(i, field, value) {
    setCourses((prev) =>
      prev.map((c, idx) => (idx === i ? { ...c, [field]: value } : c))
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const f = formRef.current;
    const firstName = f['f-name'].value.trim();
    const middleName = f['m-name'].value.trim();
    const lastName = f['l-name'].value.trim();
    const nickname = f['n-name'].value.trim();
    const divider = f['divider'].value || ' | ';
    const mascotDesc = f['mascot-desc'].value.trim();
    const mascot = f['mascot'].value.trim();
    const photoUrl = f['photo-url'].value.trim();
    const photoCaption = f['photo-caption'].value.trim();
    const personalStatement = f['personal-statement'].value.trim();
    const personalBg = f['personal-background'].value.trim();
    const professionalBg = f['professional-background'].value.trim();
    const academicBg = f['academic-background'].value.trim();
    const subjectBg = f['subject-background'].value.trim();
    const primaryWS = f['primary-workstation'].value.trim();
    const backupWS = f['backup-workstation'].value.trim();
    const favQuote = f['favorite-quote'].value.trim();
    const quoteAuthor = f['quote-author'].value.trim();
    const funFacts = f['fun-facts'].value.trim();
    const shareMore = f['share-something'].value.trim();
    const github = f['github-profile'].value.trim();
    const personal = f['personal-page'].value.trim();
    const linkedin = f['linkedin-profile'].value.trim();
    const fcc = f['freeCodeCamp'].value.trim();
    const otherLink = f['other-link'].value.trim();

    const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
    const title = `${fullName}${divider}${mascotDesc} ${mascot}`;

    const courseRows = courses
      .map(
        (c, i) =>
          `<tr><td>${i + 1}</td><td>${c.dept}</td><td>${c.num}</td><td>${c.name}</td><td>${c.reason}</td></tr>`
      )
      .join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
</head>
<body>
  <h1>${fullName}</h1>
  ${nickname ? `<p>Also known as: ${nickname}</p>` : ''}
  <h2>${mascotDesc} ${mascot}</h2>
  ${photoUrl ? `<figure><img src="${photoUrl}" alt="${fullName}" style="max-width:300px"><figcaption>${photoCaption}</figcaption></figure>` : ''}
  <h3>Personal Statement</h3><p>${personalStatement}</p>
  <h3>Personal Background</h3><p>${personalBg}</p>
  <h3>Professional Background</h3><p>${professionalBg}</p>
  <h3>Academic Background</h3><p>${academicBg}</p>
  <h3>Background in Subject</h3><p>${subjectBg}</p>
  <h3>Workstations</h3>
  <p><strong>Primary:</strong> ${primaryWS}</p>
  <p><strong>Backup:</strong> ${backupWS}</p>
  <h3>Courses</h3>
  <table border="1"><thead><tr><th>#</th><th>Dept</th><th>Number</th><th>Course</th><th>Reason</th></tr></thead>
  <tbody>${courseRows}</tbody></table>
  <h3>Favorite Quote</h3>
  <blockquote>"${favQuote}" — ${quoteAuthor}</blockquote>
  ${funFacts ? `<p><strong>Fun Fact:</strong> ${funFacts}</p>` : ''}
  ${shareMore ? `<p>${shareMore}</p>` : ''}
  <h3>Links</h3>
  <ul>
    ${github ? `<li><a href="${github}">GitHub</a></li>` : ''}
    ${personal ? `<li><a href="${personal}">Personal Site</a></li>` : ''}
    ${linkedin ? `<li><a href="${linkedin}">LinkedIn</a></li>` : ''}
    ${fcc ? `<li><a href="${fcc}">freeCodeCamp</a></li>` : ''}
    ${otherLink ? `<li><a href="${otherLink}">Other</a></li>` : ''}
  </ul>
</body>
</html>`;

    setOutput(html);
  }

  function handleDownloadJson(e) {
    e.preventDefault();
    const f = formRef.current;
    const data = {
      firstName: f['f-name'].value,
      middleName: f['m-name'].value,
      lastName: f['l-name'].value,
      nickname: f['n-name'].value,
      courses,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'intro_form.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <header>
        <h1>ITIS 3135</h1>
        <h2>Introduction Form</h2>
        <Navbar />
      </header>
      <main>
        <div id="form-instructions">
          <p>Fill out the form below to create a webpage to introduce yourself!</p>
          <p><em>Do not leave any leading or trailing spaces. Be sure to complete all required fields.</em></p>
          <p style={{ fontSize: '11px' }}>* = Required Field</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <label htmlFor="f-name">First Name*:</label>
            <input type="text" id="f-name" name="f-name" required defaultValue="Quinn" /><br /><br />
            <label htmlFor="m-name">Middle Name:</label>
            <input type="text" id="m-name" name="m-name" /><br /><br />
            <label htmlFor="l-name">Last Name*:</label>
            <input type="text" id="l-name" name="l-name" required defaultValue="Conroy" /><br /><br />
            <label htmlFor="n-name">Nickname:</label>
            <input type="text" id="n-name" name="n-name" /><br /><br />
            <label htmlFor="divider">Divider Symbol*:</label>
            <input type="text" id="divider" name="divider" required defaultValue=" | " /><br /><br />
            <label htmlFor="mascot-desc">Mascot Description*:</label><br />
            <input type="text" id="mascot-desc" name="mascot-desc" required defaultValue="Quizzical" /><br /><br />
            <label htmlFor="mascot">Mascot Animal*:</label>
            <input type="text" id="mascot" name="mascot" required defaultValue="Cat" /><br /><br />
          </fieldset>
          <br /><br />

          <fieldset>
            <legend>Acknowledgement</legend>
            <p>By submitting this form, I acknowledge that I have read and understood the course syllabus for ITIS 3135.</p>
            <input type="checkbox" id="acknowledge" name="acknowledge" required />
            <label htmlFor="acknowledge">I acknowledge the above statement*</label><br /><br />
            <label htmlFor="acknowledge-date">Date of Acknowledgement*:</label>
            <input type="date" id="acknowledge-date" name="acknowledge-date" required /><br /><br />
          </fieldset>
          <br /><br />

          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="photo-url">Personal Photo URL*:</label>
            <input type="url" id="photo-url" name="photo-url" placeholder="Enter the URL of your photo" defaultValue="https://qrconroy.github.io/itis3135/images/quinn.jpg" />
            <p>OR upload a file:</p>
            <input type="file" id="photo" name="photo" accept="image/*" /><br /><br />
            <label htmlFor="photo-caption">Photo Caption*:</label>
            <input type="text" id="photo-caption" name="photo-caption" defaultValue="The happiest I've looked in a photo." /><br /><br />
            <label htmlFor="personal-statement">Personal Statement*:</label>
            <textarea id="personal-statement" name="personal-statement" required defaultValue="I am a Junior studying Computer Science with a concentration in Web/Mobile Development & Software Engineering." /><br /><br />
          </fieldset>
          <br /><br />

          <fieldset>
            <legend>Background</legend>
            <label htmlFor="personal-background">Personal Background*:</label><br />
            <textarea id="personal-background" name="personal-background" required defaultValue="I am 19 from Wake Forest, North Carolina." /><br /><br />
            <label htmlFor="professional-background">Professional Background*:</label><br />
            <textarea id="professional-background" name="professional-background" required defaultValue="I have worked as a youth soccer referee in the Raleigh area for a little over 5 years." /><br /><br />
            <label htmlFor="academic-background">Academic Background*:</label><br />
            <textarea id="academic-background" name="academic-background" required defaultValue="A Computer Science/Data Science double major in my second year here at Charlotte." /><br /><br />
            <label htmlFor="subject-background">Background in Subject*:</label><br />
            <textarea id="subject-background" name="subject-background" required defaultValue="I've taken a very elementary class on HTML before this and tinkered with it a little on my own, but not much otherwise." /><br /><br />
          </fieldset>
          <br /><br />

          <fieldset>
            <legend>Workstations</legend>
            <label htmlFor="primary-workstation">Primary Work Computer*:</label><br />
            <input type="text" id="primary-workstation" name="primary-workstation" required defaultValue="Dell Inspiron 14 Laptop running Windows" /><br /><br />
            <label htmlFor="backup-workstation">Backup Work Computer*:</label><br />
            <input type="text" id="backup-workstation" name="backup-workstation" required defaultValue="Windows/Mac computers in any of the CCI workspaces" /><br /><br />
          </fieldset>
          <br /><br />

          <fieldset>
            <legend>Courses*</legend>
            <table id="course-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr>
                  <th>#</th><th>Department</th><th>Number</th><th>Course Name</th><th>Reason for taking</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td><input type="text" value={c.dept} onChange={(e) => updateCourse(i, 'dept', e.target.value)} /></td>
                    <td><input type="text" value={c.num} onChange={(e) => updateCourse(i, 'num', e.target.value)} /></td>
                    <td><input type="text" value={c.name} onChange={(e) => updateCourse(i, 'name', e.target.value)} /></td>
                    <td><input type="text" value={c.reason} onChange={(e) => updateCourse(i, 'reason', e.target.value)} /></td>
                    <td><button type="button" onClick={() => removeCourse(i)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" id="add-row" onClick={addCourse}>Add Course</button>
          </fieldset>
          <br /><br />

          <fieldset>
            <legend>Favorite Quote</legend>
            <label htmlFor="favorite-quote">Your Favorite Quote*:</label>
            <input type="text" id="favorite-quote" name="favorite-quote" required defaultValue="Life is 10% what happens to you and 90% how you react to it." /><br />
            <label htmlFor="quote-author">Author of Quote*:</label>
            <input type="text" id="quote-author" name="quote-author" required defaultValue="Charles R. Swindoll" /><br />
          </fieldset>
          <br /><br />

          <fieldset>
            <legend>Fun Facts</legend>
            <label htmlFor="fun-facts">Funny thing:</label>
            <input type="text" id="fun-facts" name="fun-facts" placeholder="My wallet is like an onion. Every time I open it, it makes me cry." /><br />
            <label htmlFor="share-something">Anything else to share?</label>
            <input type="text" id="share-something" name="share-something" placeholder="I have a pet hamster named Mr. Fluffernutter." /><br />
          </fieldset>
          <br /><br />

          <fieldset>
            <legend>Personal Links</legend>
            <label htmlFor="github-profile">GitHub Profile*:</label>
            <input type="url" id="github-profile" name="github-profile" defaultValue="https://github.com/qrconroy" /><br />
            <label htmlFor="personal-page">Personal Website or Portfolio*:</label>
            <input type="url" id="personal-page" name="personal-page" defaultValue="https://qrconroy.github.io" /><br />
            <label htmlFor="linkedin-profile">LinkedIn Profile*:</label>
            <input type="url" id="linkedin-profile" name="linkedin-profile" defaultValue="https://www.linkedin.com/in/quinnrconroy/" /><br />
            <label htmlFor="freeCodeCamp">freeCodeCamp Profile*:</label>
            <input type="url" id="freeCodeCamp" name="freeCodeCamp" defaultValue="https://www.freecodecamp.org/qconroy" /><br />
            <label htmlFor="other-link">Other Link:</label>
            <input type="url" id="other-link" name="other-link" defaultValue="https://www.google.com" /><br />
          </fieldset>

          <div className="button-group">
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
            <button type="button" id="download-json" onClick={handleDownloadJson}>Download JSON</button>
            <button type="button" id="generate-html" onClick={handleSubmit}>Generate HTML</button>
          </div>
        </form>

        {output && (
          <div id="output-area" style={{ marginTop: '30px' }}>
            <h3>Generated HTML Preview</h3>
            <iframe
              title="Generated Introduction"
              srcDoc={output}
              style={{ width: '100%', height: '600px', border: '1px solid #ccc' }}
            />
            <br />
            <button
              type="button"
              onClick={() => {
                const blob = new Blob([output], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'introduction.html';
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              Download HTML
            </button>
          </div>
        )}
      </main>
    </>
  );
}
