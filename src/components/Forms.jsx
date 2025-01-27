import GeneralForm from "./GeneralForm";
import EduForm from "./EduForm";
import ExpForm from "./ExpForm";

export default function Forms({
  cv,
  setCV,
  isFormEditable,
  cvEdits,
  submitForm,
}) {
  return (
    <div className="forms">
      <GeneralForm cv={cv} setCV={setCV} />
      <hr></hr>
      <EduForm
        cv={cv}
        setCV={setCV}
        editable={isFormEditable["education"]}
        cvEdits={cvEdits}
        submitForm={submitForm}
        index={isFormEditable["education"]?.index}
      />
      <hr></hr>
      <ExpForm
        cv={cv}
        setCV={setCV}
        editable={isFormEditable["experience"]}
        cvEdits={cvEdits}
        submitForm={submitForm}
        index={isFormEditable["experience"]?.index}
      />
    </div>
  );
}
