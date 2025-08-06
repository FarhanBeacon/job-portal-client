import React from "react";
import { useNavigate } from "react-router";
import swal from 'sweetalert';
import useAuth from "../../hooks/useAuth";

const AddJobs = () => {
    const { user } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const initialFormData = Object.fromEntries(formData.entries());
    const { maxSalary, minSalary, currency, ...newJob } = initialFormData;
    newJob.salaryRange = {
      min: parseInt(minSalary),
      max: parseInt(maxSalary),
      currency: currency,
    };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Good Job", "Job Added Successfully", "success");
          navigate("/myPostedJobs");
        }
      });
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="fieldset">
        {/* Job Title */}
        <label className="label">Job Title</label>
        <input
          type="text"
          name="title"
          className="input w-full"
          placeholder="Job Title"
          required
        />

        {/* Job Location */}
        <label className="label">Location</label>
        <input
          type="text"
          name="location"
          className="input w-full"
          placeholder="Location"
          required
        />

        {/* Job Type */}
        <label className="label">Job Type</label>
        <select
          name="jobType"
          defaultValue="Select job Type"
          className="select w-full"
          required
        >
          <option disabled={true}>Select job Type</option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Contractual</option>
          <option>Intern</option>
        </select>

        {/* Job Category */}
        <label className="label">Job Category</label>
        <select
          name="category"
          defaultValue="Select Job Category"
          className="select w-full"
          required
        >
          <option disabled={true}>Select Job Category</option>
          <option>Development</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Teaching</option>
          <option>Design</option>
          <option>Management</option>
          <option>Data-Science</option>
        </select>

        {/* Salary Range */}
        <label className="label">Salary Range</label>
        <div className="flex gap-4">
          <input
            type="number"
            name="minSalary"
            className="input w-full"
            placeholder="Min Salary"
            required
          />
          <input
            type="number"
            name="maxSalary"
            className="input w-full"
            placeholder="Max Salary"
            required
          />
          <select
            name="currency"
            defaultValue="Currency"
            className="select w-full"
            required
          >
            <option disabled={true}>Currency</option>
            <option>BDT</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>

        {/* Job Description */}
        <label className="label">Job Description</label>
        <textarea
          name="description"
          className="textarea w-full"
          placeholder="Job Description"
          required
        ></textarea>

        {/* Company Name */}
        <label className="label">Company</label>
        <input
          type="text"
          name="company"
          className="input w-full"
          placeholder="Company"
          required
        />

        {/* Job Requirements */}
        <label className="label">Job Requirements</label>
        <textarea
          name="requirements"
          className="textarea w-full"
          placeholder="Put each requirements in a new line"
          required
        ></textarea>

        {/* Job Responsibilities */}
        <label className="label">Job Responsibilities</label>
        <textarea
          name="responsibilities"
          className="textarea w-full"
          placeholder="Put each responsibilities in a new line"
          required
        ></textarea>

        {/* Application Deadline */}
        <label className="label">Application Deadline</label>
        <input
          type="date"
          name="applicationDeadline"
          className="input w-full"
          required
        />

        {/* HR Email */}
        <label className="label">HR Email</label>
        <input
          type="email"
          name="hr_email"
          className="input w-full"
          defaultValue= {user?.email || "HR Email"}
          required
        />

        {/* HR Name */}
        <label className="label">HR Name</label>
        <input
          type="text"
          name="hr_name"
          className="input w-full"
          placeholder="HR Name"
          required
        />

        {/* Company Logo */}
        <label className="label">Company Logo</label>
        <input
          type="url"
          name="company_logo"
          className="input w-full"
          placeholder="Logo URL"
          required
        />

        {/* Job Submit */}
        <button className="btn btn-neutral mt-4">Submit</button>
      </form>
    </div>
  );
};

export default AddJobs;
