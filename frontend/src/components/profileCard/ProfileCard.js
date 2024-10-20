import React from 'react';
import { useUser } from '../../UserContext';

const ProfileCard = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);   
 }

  return (
    <div style={styles.card}>
      <h2>Profile Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <button style={styles.button}>Edit Profile</button>
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '300px',
    margin: '10px auto',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#6200ea',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default ProfileCard;
