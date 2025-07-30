import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '',
    confirmPassword: '', phone: '', gender: '', role: '', agree: false
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';

    if (!form.password.trim()) newErrors.password = 'Password is required';
    if (form.confirmPassword !== form.password) newErrors.confirmPassword = 'Passwords do not match';

    if (!form.phone.trim()) newErrors.phone = 'Phone number required';
    else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = 'Enter valid 10-digit number';

    if (!form.gender) newErrors.gender = 'Select gender';
    if (!form.role) newErrors.role = 'Select a role';
    if (!form.agree) newErrors.agree = 'You must agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Registration successful!');
      setForm({
        firstName: '', lastName: '', email: '', password: '',
        confirmPassword: '', phone: '', gender: '', role: '', agree: false
      });
      setErrors({});
    }
  };

  const isValid = (field) => form[field] && !errors[field];

  return (
    <div className="signup-container">
      <h2>SIGNUP HERE</h2>
      <form onSubmit={handleSubmit} noValidate>
        {['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'phone'].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type={field.includes('password') ? 'password' : 'text'}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className={errors[field] ? 'invalid' : isValid(field) ? 'valid' : ''}
              placeholder={`Enter your ${field}`}
            />
            {errors[field] && <span className="error">{errors[field]}</span>}
            {isValid(field) && <span className="success">&#10004;</span>}
          </div>
        ))}

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className={errors.gender ? 'invalid' : form.gender ? 'valid' : ''}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
          {form.gender && !errors.gender && <span className="success">&#10004;</span>}
        </div>

        <div className="form-group inline">
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={form.role === 'student'}
              onChange={handleChange}
            />
            student
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="professional"
              checked={form.role === 'professional'}
              onChange={handleChange}
            />
            professional
          </label>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            Agree to terms and conditions
          </label>
          {errors.agree && <span className="error">{errors.agree}</span>}
        </div>

        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Signup;
