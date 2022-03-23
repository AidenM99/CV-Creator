import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import defaultCV from "./Utils/DefaultCV";
import uniqid from "uniqid";
import { useState } from "react";

const Main = () => {
  const [cv, setCV] = useState(defaultCV);

  const handleAddEducation = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uniqid(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleAddExperience = () => {
    setCV((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uniqid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (id) => {
    setCV((prevState) => ({
      ...prevState,
      education: prevState.education.filter(
        (educationItem) => educationItem.id !== id
      ),
    }));
  };

  const handleDeleteExperience = (id) => {
    setCV((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      ),
    }));
  };

  const handlePersonalChange = (e) => {
    console.log(cv.personalInfo);
    setCV((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [e.target.id]: e.target.value,
      },
    }));
  };

  return (
    <main className="container">
      <div className="row">
        <CVForm
          currentCV={cv}
          addEducation={handleAddEducation}
          deleteEducation={handleDeleteEducation}
          addExperience={handleAddExperience}
          deleteExperience={handleDeleteExperience}
          handlePersonalChange={handlePersonalChange}
        />
        <CVPreview currentCV={cv} />
      </div>
    </main>
  );
};

export default Main;
