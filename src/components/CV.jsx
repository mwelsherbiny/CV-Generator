export default function CV({ cv, setCV, editForm, countCVEdit }) {
  function deleteEduItem(index) {
    setCV({
      ...cv,
      education: cv.education.filter((item, i) => i !== index),
    });
  }
  function deleteJobItem(index) {
    setCV({
      ...cv,
      experience: cv.experience.filter((item, i) => i !== index),
    });
  }

  return (
    <div className="cv">
      <div className="cv-general">
        <h1>{cv.general.name}</h1>
        <div className="contact">
          <p>{cv.general.email}</p>
          <p>{cv.general.phone}</p>
          <p>{cv.general.address}</p>
        </div>
      </div>

      <div className="cv-education">
        <h3>Education</h3>
        <ul>
          {cv.education.map((school, index) => (
            <li
              className="edu-item"
              key={index}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#d1f0c7";
                e.currentTarget.children[1].children[1].style.visibility =
                  "visible";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.children[1].children[1].style.visibility =
                  "hidden";
              }}
            >
              <p className="school-name">{school.school}</p>
              <div className="degree-details">
                <p className="degree">{school.degree}</p>
                <div className="cv-btns">
                  <button
                    id={"edit-" + index}
                    onClick={() => {
                      countCVEdit();
                      editForm({ ...cv.education[index], index }, "education");
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteEduItem(index)}>Delete</button>
                </div>
                <p className="start-end">
                  {school.startDate} - {school.endDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="cv-experience">
        <h3>Experience</h3>
        <ul>
          {cv.experience.map((job, index) => (
            <li
              className="job-item"
              key={index}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#d1f0c7";
                e.currentTarget.children[1].children[1].style.visibility =
                  "visible";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.children[1].children[1].style.visibility =
                  "hidden";
              }}
            >
              <p className="company-name">{job.companyName}</p>
              <div className="job-details">
                <p className="job-title">{job.positionTitle}</p>
                <div className="cv-btns">
                  <button
                    id={"edit-" + index}
                    onClick={() => {
                      countCVEdit();
                      editForm(
                        { ...cv.experience[index], index },
                        "experience"
                      );
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteJobItem(index)}>Delete</button>
                </div>
                <p className="start-end">
                  {job.startDate} - {job.endDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
