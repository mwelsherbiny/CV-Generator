import { useState } from "react";

export default function GeneralForm({ cv, setCV }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCV({ ...cv, general: form });
  };

  return (
    <form className="general-form form" onSubmit={handleSubmit}>
      <h2>General Information</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={form.email}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          onChange={handleChange}
          value={form.phone}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          onChange={handleChange}
          value={form.address}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
