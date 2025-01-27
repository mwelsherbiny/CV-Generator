import { useState, useEffect } from "react";

export default function ExpForm({
  cv,
  setCV,
  editable,
  cvEdits,
  submitForm,
  index,
}) {
  const [form, setForm] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    index: index,
  });

  useEffect(() => {
    setForm({
      companyName: editable ? editable.companyName : "",
      positionTitle: editable ? editable.positionTitle : "",
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
      submitForm(form, "experience");
    } else {
      setCV({ ...cv, experience: [...cv.experience, form] });
    }
  };

  return (
    <form className="exp-form form" onSubmit={handleSubmit}>
      <h2>Experience</h2>
      <div>
        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Position Title</label>
        <input
          type="text"
          name="positionTitle"
          value={form.positionTitle}
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
