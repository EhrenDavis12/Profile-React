import ThemeFactory from '../ThemeFactory';

const hasNecessaryProperty = theme => {
  expect(theme).toHaveProperty('PrimaryBkg');
  expect(theme).toHaveProperty('SecondaryBkg');
  expect(theme).toHaveProperty('PrimaryText');
  expect(theme).toHaveProperty('success');
  expect(theme).toHaveProperty('failed');
};

describe('ThemeFactory', () => {
  it('should have all necessary Property for Primary Theme', () => {
    const theme = ThemeFactory('Primary');
    hasNecessaryProperty(theme);
  });

  it('should have all necessary Property for DarkMode Theme', () => {
    const theme = ThemeFactory('DarkMode');
    hasNecessaryProperty(theme);
  });

  it('should have all necessary Property for default Theme', () => {
    const theme = ThemeFactory();
    hasNecessaryProperty(theme);
  });
});
