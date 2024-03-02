import React, { useState } from 'react';

const AvatarChanger = () => {
  const avatars = [
    'photo/man.png',
    'photo/man2.png',
    'photo/girl.png',
    'photo/girl2.png',
    'photo/avatar.png',
  ];

  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  const changeAvatar = () => {
    setCurrentAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  };

  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/${avatars[currentAvatarIndex]}`}
        alt="User Avatar"
        style={{ width: '100px', height: '100px' }}
      />
      <button onClick={changeAvatar}>Change Avatar</button>
    </div>
  );
};

export default AvatarChanger;
