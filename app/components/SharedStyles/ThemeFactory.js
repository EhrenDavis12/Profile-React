// import styled from 'styled-components';

const Primary = {
  PrimaryBkg: '#fff',
  SecondaryBkg: '#f6f6f6',
  HeaderBkg: '',
  PrimaryText: '#000000',
  success: `rgba(0, 255, 0, 0.8)`,
  failed: `rgba(255, 0, 0, 0.8)`,
};

const DarkMode = {
  PrimaryBkg: '#000000',
  SecondaryBkg: '#575757',
  PrimaryText: '#fff',
  HeaderBkg: '',
  success: `rgba(0, 255, 0, 0.8)`,
  failed: `rgba(255, 0, 0, 0.8)`,
};

const GetMode = mode => {
  switch (mode) {
    case 'Primary':
      return Primary;
    case 'DarkMode':
      return DarkMode;
    default:
      return Primary;
  }
};

export default GetMode;
