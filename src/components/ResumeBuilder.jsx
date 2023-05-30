import React, { useState } from "react";
import { Chip, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const ResumeBuilder = () => {
  const skillOptions = ["PHP", "JavaScript", "React", "HTML", "CSS"];
  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState([
    { institute: "", year: "", degree: "" },
  ]);
  const [experience, setExperience] = useState([
    { company: "", year: "", designation: "" },
  ]);
  const [skills, setSkills] = useState([]);

  // Event handlers
  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperience = [...experience];
    updatedExperience[index][name] = value;
    setExperience(updatedExperience);
  };

  const handleSkillChange = (event) => {
    setSkills(event.target.value.split(","));
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: "", year: "", degree: "" }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: "", year: "", designation: "" }]);
  };

  return (
    <div className="container resume">
      <h1>Builde Your Resume</h1>
      <div className="form row">
        <div className="form-group col-md-6">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group col-md-6">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group col-md-6">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group col-md-6">
          <label>Phone:</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <h3 className=" heading col-12">Education</h3>
        {education.map((edu, index) => (
          <div className="col-12 row" key={index}>
            <div className="form-group col-md-6">
              <label>Institute:</label>
              <input
                type="text"
                className="form-control"
                name="institute"
                value={edu.institute}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>

            <div className="form-group col-md-6">
              <label>Year:</label>
              <input
                type="text"
                className="form-control"
                name="year"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>

            <div className="form-group col-md-6">
              <label>Degree:</label>
              <input
                type="text"
                className="form-control"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>
          </div>
        ))}
        <button className="btn btn-primary" onClick={handleAddEducation}>
          Education+
        </button>

        <h3 className=" heading col-12">Experience</h3>
        {experience.map((exp, index) => (
          <div className="col-12 row" key={index}>
            <div className="form-group col-md-6">
              <label>Company:</label>
              <input
                type="text"
                className="form-control"
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </div>

            <div className="form-group col-md-6">
              <label>Year:</label>
              <input
                type="text"
                className="form-control"
                name="year"
                value={exp.year}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </div>

            <div className="form-group col-md-6">
              <label>Designation:</label>
              <input
                type="text"
                className="form-control"
                name="designation"
                value={exp.designation}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </div>
          </div>
        ))}
        <button className="btn btn-primary" onClick={handleAddExperience}>
          Experience+
        </button>

        {/* Skills */}
        <h3 className=" heading col-12">Skills</h3>
        <div className="form-group col-md-12">
          <label>Skills:</label>
          <Autocomplete
            multiple
            options={skillOptions}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Add skills"
                sx={{ backgroundColor: "white" }}
              />
            )}
            value={skills}
            onChange={(event, newValue) => setSkills(newValue)}
          />
        </div>

        {/* Submit button */}
        <button
          className="btn btn-primary"
          onClick={() => {
            alert("All Done");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
