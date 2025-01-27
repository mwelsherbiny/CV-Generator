import { useEffect } from "react";
import { useState } from "react";

export default function EduForm({
  cv,
  setCV,
  editable,
  cvEdits,
  submitForm,
  index,
}) {
  const [form, setForm] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    index: index,
  });

  useEffect(() => {
    setForm({
      school: editable ? editable.school : "",
      degree: editable ? editable.degree : "",
      startDate: editable ? editable.startDate : "",
      endDate: editable ? editable.endDate : "",
      index: index,
    });
  }, [cvEdits]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editable) {
      submitForm(form, "education");
    } else {
      setCV({ ...cv, education: [...cv.education, form] });
    }
  };

  return (
    <form className="edu-form form" onSubmit={handleSubmit}>
      <h2>Education</h2>
      <div>
        <label>School</label>
        <input
          type="text"
          name="school"
          value={form.school}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Degree</label>
        <input
          type="text"
          name="degree"
          value={form.degree}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{editable ? "Edit" : "Save"}</button>
    </form>
  );
}
