import React, { useState } from 'react';
import styles from '../styles/account.module.css';

const userData = {
  email: 'user@example.com',
  fullName: 'John Doe',
  birthday: '1990-05-15',
};

const AccountPage = () => {
  const [user, setUser] = useState(userData);

  return (
    <div className={styles.accountPage}>
      <div className={styles.userInfo}>
        <h2 className={styles.name}>{user.fullName}</h2>
        <p>Email: {user.email}</p>
        <p className={styles.birthday}>Birthday: {new Date(user.birthday).toLocaleDateString()}</p>
      </div>
      {/* Add additional features, such as editing user info or settings */}
    </div>
  );
};

export default AccountPage;