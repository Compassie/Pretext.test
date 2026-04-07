const { useState, useEffect } = React;
const { motion } = FramerMotion;

const STORY_TEXT = `The Eternal Flame. She was born in a struck match — one fleeting, violent second between darkness and brilliance... (Paste the rest of the story here)`;

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', color: '#fed7aa', letterSpacing: '0.1em' }}
        >
          THE ETERNAL FLAME
        </motion.h1>
      </header>

      <main style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
        {STORY_TEXT.split('. ').map((sentence, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ display: 'inline-block', marginBottom: '10px', marginRight: '5px' }}
          >
            {sentence}.{' '}
          </motion.span>
        ))}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
