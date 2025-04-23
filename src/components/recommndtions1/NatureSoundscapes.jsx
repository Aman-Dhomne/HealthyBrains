import React from 'react';

const NatureSoundscapes = () => {
  const sounds = [
    {
      title: 'Ocean Waves – 3 Hours of Relaxing Sounds',
      url: 'https://www.youtube.com/watch?v=Qz-GWsS8K6s'
    },
    {
      title: 'Gentle Rain – Sleep and Relaxation',
      url: 'https://www.youtube.com/watch?v=HMnrl0tmd3k'
    },
    {
      title: 'Forest Sounds – Birdsong & Wind',
      url: 'https://www.youtube.com/watch?v=eKFTSSKCzWA'
    },
    {
      title: 'Thunderstorm & Rain – 10 Hours',
      url: 'https://www.youtube.com/watch?v=lF5M2Hsu1GI'
    },
    {
      title: 'River Stream – Water Flow & Nature',
      url: 'https://www.youtube.com/watch?v=Wd3d2i0brn4'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FCEEBD', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ color: '#000', textAlign: 'center', marginBottom: '2rem' }}>Nature Soundscapes</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        Ocean waves, gentle rain, forest sounds – perfect for calm, focus, or sleep
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
        {sounds.map((sound, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ marginBottom: '0.5rem' }}>{sound.title}</h2>
            <button
              onClick={() => window.open(sound.url, '_blank')}
              style={{
                backgroundColor: '#FCEEBD',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              ▶️ Play on YouTube
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NatureSoundscapes;