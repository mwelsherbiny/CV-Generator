import { useState } from "react";
import CV from "./components/CV";
import Forms from "./components/Forms";
import "./assets/style.css";

function App() {
  const [cvEdits, setCvEdits] = useState(0);
  const [isFormEditable, setIsFormEditable] = useState({
    education: false,
    experience: false,
  });
  const [cv, setCV] = useState({
    general: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    education: [],
    experience: [],
  });
  function countCVEdit() {
    setCvEdits(cvEdits + 1);
  }

  function editForm(form, formType) {
    if (formType === "experience") {
      setIsFormEditable({ ...isFormEditable, experience: form });
    } else if (formType === "education") {
      setIsFormEditable({ ...isFormEditable, education: form });
    }
  }

  function submitForm(form, formType) {
    console.log(cv);
    console.log({
      ...cv,
      education: { ...cv.education, [form.index]: form },
    });
    if (formType === "experience") {
      const newExperience = [...cv.experience];
      newExperience[form.index] = { ...form };
      setCV({
        ...cv,
        experience: newExperience,
      });
      setIsFormEditable({ ...isFormEditable, experience: false });
    } else if (formType === "education") {
      console.log(form);
      const newEducation = [...cv.education];
      newEducation[form.index] = { ...form };
      setCV({
        ...cv,
        education: newEducation,
      });
      setIsFormEditable({ ...isFormEditable, education: false });
    }
  }

  return (
    <>
      <Forms
        cv={cv}
        setCV={setCV}
        isFormEditable={isFormEditable}
        cvEdits={cvEdits}
        submitForm={submitForm}
      />
      <CV cv={cv} setCV={setCV} editForm={editForm} countCVEdit={countCVEdit} />
    </>
  );
}

export default App;
