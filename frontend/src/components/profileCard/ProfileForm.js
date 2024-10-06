import React, { useState } from 'react';
import { useUser } from '../../UserContext';

const ProfileForm = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, name });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
      </label>
      <button type="submit" style={styles.button}>Save Changes</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '20px auto',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
  },
  button: {
    padding: '10px',
    backgroundColor: '#6200ea',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default ProfileForm;
