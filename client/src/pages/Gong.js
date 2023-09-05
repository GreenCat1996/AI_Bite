import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

const Gong = ({ showMenu, setShowMenu, register }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    // console.log(formData.email);
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // setAlert('Password is required', 'danger');
    } else {
      register(formData.email, formData.password);
      setShowMenu((prev) => !prev);
    }
  };

  if (!showMenu) return null;

  return (
    <div className="access">
      <label className="key">Gong Access Key:</label>
      <input
        type="text"
        className="key"
        name="email"
        value={formData.email}
        onChange={onChange}
        placeholder="Enter your Access Key"
      />

      <label className="key">Gong Secret Key:</label>
      <input
        type="password"
        className="key"
        name="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Enter your Secret Key"
      />

      <button className="btn btn-primary" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};

Gong.propTypes = {
  register: PropTypes.func.isRequired
};
export default connect(null, { register })(Gong);
