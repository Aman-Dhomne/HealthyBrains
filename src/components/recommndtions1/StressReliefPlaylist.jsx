import React from 'react';

const StressReliefPlaylist = () => {
  const songs = [
    {
      title: 'Weightless - Marconi Union',
      url: 'https://www.youtube.com/watch?v=UfcAVejslrU'
    },
    {
      title: 'Electra - Airstream',
      url: 'https://www.youtube.com/watch?v=s9GBf8y0lY0'
    },
    {
      title: 'Mellomaniac (Chillout Mix) - DJ Shah',
      url: 'https://www.youtube.com/watch?v=7W0M7I4cu1A'
    },
    {
      title: 'We Can Fly - Rue du Soleil',
      url: 'https://www.youtube.com/watch?v=YV5G4U4n1a0'
    },
    {
      title: 'Strawberry Swing - Coldplay (Instrumental)',
      url: 'https://www.youtube.com/watch?v=JM6JbklHc3E'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FCEEBD', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ color: '#000', textAlign: 'center', marginBottom: '2rem' }}>Stress Relief Playlist</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        Instrumental compositions with 60 BPM to match resting heart rate
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
        {songs.map((song, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ marginBottom: '0.5rem' }}>{song.title}</h2>
            <button
              onClick={() => window.open(song.url, '_blank')}
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

export default StressReliefPlaylist;