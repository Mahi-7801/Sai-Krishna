export const themePhoto = (theme, index = 1) => `/photos/${theme}/${index}.jpg`;

export const hideOnError = (event) => {
  event.currentTarget.style.display = 'none';
};

export const portfolioImages = [
  themePhoto('wedding', 2),
  themePhoto('maternity', 1),
  themePhoto('pre-wedding', 2),
  themePhoto('videography', 1),
  themePhoto('family', 2),
  themePhoto('event', 2),
  themePhoto('studio', 1),
  themePhoto('wedding', 1),
  themePhoto('drone', 2),
  themePhoto('commercial', 1),
  themePhoto('post-wedding', 1),
  themePhoto('birthday', 2),
  themePhoto('family', 1),
  themePhoto('pre-wedding', 1),
  themePhoto('event', 1),
  themePhoto('studio', 2),
  themePhoto('wedding', 3),
  themePhoto('drone', 1),
  themePhoto('maternity', 2),
  themePhoto('birthday', 1),
];