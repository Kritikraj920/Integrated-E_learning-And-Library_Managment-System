import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const StudentRegistrationForm = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mothersName: '',
    dob: '',
    gender: '',
    rollNo: '',
    email: '',
    department: '',
    year: '',
    phoneNo: '',
    address: '',
    state: '',
    pincode: '',
    password: '',
    confirmPassword: '',
  });

  const statesOfIndia = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 
    'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 
    'Andaman and Nicobar Islands', 'Chandigarh', 
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 
    'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (image) data.append('image', image);
    try {
      const response = await axios.post('http://localhost:5000/user/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      alert('Error registering student');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Personal Details</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mothersName" className="form-label">Mother's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mothersName"
                    name="mothersName"
                    value={formData.mothersName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Details */}
        <div className="card mb-4">
          <div className="card-header bg-success text-white">Academic Details</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="rollNo" className="form-label">Roll Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rollNo"
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
  <label htmlFor="department" className="form-label">Department</label>
  <select
    className="form-select"
    id="department"
    name="department"
    value={formData.department}
    onChange={handleChange}
    required
  >
    <option value="">Select Department</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Information Technology">Information Technology</option>
    <option value="Artificial Intelligence">Artificial Intelligence</option>
    <option value="Civil Engineering">Civil Engineering</option>
    <option value="Mechanical Engineering">Mechanical Engineering</option>
    <option value="Petroleum Engineering">Petroleum Engineering</option>
    <option value="Electrical Engineering">Electrical Engineering</option>
    <option value="Mining Engineering">Mining Engineering</option>
    <option value="Production Engineering">Production Engineering</option>
    <option value="Instrumentation Engineering">Instrumentation Engineering</option>
    <option value="Chemical Engineering">Chemical Engineering</option>
    <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
    <option value="Electronics and Computer Engineering">Electronics and Computer Engineering</option>
    <option value="Electronics and Electrical Engineering">Electronics and Electrical Engineering</option>
    <option value="Building and Construction Engineering">Building and Construction Engineering</option>
    {/* Add more options as needed */}
  </select>
</div>

              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="year" className="form-label">Year</label>
                  <select
                    className="form-select"
                    id="year"
                    name="year"
                    value={formData.year || ''}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="card mb-4">
          <div className="card-header bg-info text-white">Contact Details</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
              <div className="mb-3">
                  <label htmlFor="pincode" className="form-label">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              <div className="mb-3">
                  <label htmlFor="state" className="form-label">State</label>
                  <select
                    className="form-select"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    >
                    <option value="">Select State</option>
                    {statesOfIndia.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                    </div>
                </div>
                <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    required
                  />
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* Image Upload */}
        <div className="card mb-4">
          <div className="card-header bg-warning text-dark">Upload Profile Picture</div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Profile Picture</label>
              <input type="file" className="form-control" name="image" onChange={handleImageChange} />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="card mb-4">
          <div className="card-header bg-danger text-white">Set Your Password</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">Register</button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
