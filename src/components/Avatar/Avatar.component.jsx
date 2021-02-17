import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

const StyledAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Avatar = () => {
  const { authenticated } = useAuth();

  const printAvatar = () => {
    const imgUrl = authenticated
      ? 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png'
      : 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg';

    return <StyledAvatar src={imgUrl} />;
  };

  return printAvatar();
};

export default Avatar;
