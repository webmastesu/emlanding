// scrollEffect.js

const addScrollEffect = () => {
  const handleScroll = () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  document.addEventListener('scroll', handleScroll);

  // Clean-up
  return () => {
    document.removeEventListener('scroll', handleScroll);
  };
};

export default addScrollEffect;
