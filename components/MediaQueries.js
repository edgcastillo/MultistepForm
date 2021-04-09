const size = {
  small: '768px',
  tablet: '900px',
  laptop: '1200px',
};

export const devices = {
  medium: `(min-width: ${size.small}) and (max-width: ${size.tablet})`,
  large: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
};
