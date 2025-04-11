import React from 'react';
import Particles from 'react-particles-js';

const ParticlesBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          line_linked: { enable: true, color: '#3498db' }
        }
      }}
    />
  );
};

export default ParticlesBackground;
