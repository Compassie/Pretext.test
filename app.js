// This helper ensures we find the right 'Motion' even on iPad
const motion = window.framerMotion ? window.framerMotion.motion : null;
const { useState, useEffect } = React;

const STORY_TEXT = `The Eternal Flame. She was born in a struck match — one fleeting, violent second between darkness and brilliance. The world had not asked for her, and yet here she was: a tongue of orange light curling upward from a sliver of wood, tasting the cold air for the very first time. She had no memory of before. She had only now, and now was everything. The match held her gently, the way a parent holds something too beautiful and too brief to fully grasp. She could feel the wood beneath her — its grain, its history, the decades of rainfall and summer locked inside its cells. She consumed it tenderly, the way a reader consumes the last pages of a beloved book: with reverence, and with grief, because to love something is sometimes to end it. She grew. Every flame does, if given the chance. The warmth she radiated was not a gift she planned — it simply spilled from her, like music from someone who cannot help but hum. A moth spiraled in from the darkness, drawn by a longing it could not name. She watched it circle, understanding instinctively that beauty and danger are often the same thing, dressed differently. By night she was a god. She sat atop a candlewick in the center of an old wooden table, and the world arranged itself around her glow. The shadows on the walls were her court — they bowed and stretched at her whim, performing silent dramas that only she could conduct. A man sat across the table, his face half-lit, half-swallowed by dark. He was writing a letter he would never send. She watched the ink dry on his words and felt something she could not articulate: a kinship with all things that burn to say what they mean. She danced when the drafts moved through the room. This is what people misunderstand about flames — they are never still by choice. Stillness is a kind of death for them, a glass jar pressed down, a slow smothering. To flicker is not to be unstable. To flicker is to be alive. She leaned left, she leaned right, she dimmed and roared and dimmed again, and in each movement she was precisely, entirely herself. Sometimes she burned blue at the root — a secret color, a whispered truth. Blue is the hottest part of her, the part most people never see, the part that holds the real intensity beneath the showy orange display. She thought of all the people who are like this: most warmth on the surface, most fire kept private and deep. She had seen forests. Not walked through them — she was them, briefly, catastrophically. She had leaped from tree to crown to tree in the dry hills, drunk on wind, enormous and careless. She was not proud of this. Power without intention is just destruction wearing the costume of force. She had moved through pine and oak and ancient cedar, and nothing had stood. In her wake: black silence, the scorched geometry of what used to be alive. She had burned herself out on the hillside, exhausted by her own enormity, and lay smoldering for days before the rain came and finally, mercifully, told her to rest. Rebirth came quietly, the way it always does. A single ember, still red beneath the ash. A breath of wind. A curl of smoke rising like a question mark. She was smaller now, but wiser — the way a river after drought runs slower, but clearer. She had learned that size is not the measure of a flame. A candle lit inside a cathedral changes the cathedral. A match struck at the bottom of a cave gives a lost child the courage to climb. She burned in hearths and lanterns, in torches carried through dark streets and in gas stoves over which grandmothers stirred soup and whispered songs. She was present at every warmth, every illumination, every comfort made possible by the simple miracle of combustion. She was the fire at the center of camp, around which strangers became friends, around which stories were told that had no other audience. She was the vigil candle in the hospital room, steady and small, saying: someone is here, someone is watching, you are not alone in the dark. What people rarely ask is whether she suffers. They assume she is pure appetite — devouring, consuming, never mourning what she uses. But she feels every ending. Every wick consumed, every log reduced to ghost-white ash — she carries these the way all living things carry their losses, quietly and continuously. She is made of transformation, which means she is made of loss and made of becoming simultaneously, always both at once, and she has learned to hold them together without flinching. She is ancient. She was here before the first human hand cupped around her against the wind, before the first cave wall was painted in her glow. She will be here long after — in stars, in cores, in the slow nuclear hum of suns yet unborn. She is not afraid of her ending because she knows, the way all elemental things know, that ending and beginning are the same moment seen from different directions. Tonight she burns on a single candle in a window, and outside, the world is cold and very dark. A child presses her face against the glass, watching. In the child’s eyes, she sees herself reflected: small, and golden, and somehow enough. She flickers once — a hello, a recognition, a blessing. The child smiles. And the flame, for just a moment, burns a little brighter.`;

function App() {
  if (!motion) {
    return <div style={{color: 'white', padding: '20px'}}>Loading Motion Graphics...</div>;
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'serif', maxWidth: '700px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ fontSize: '3rem', color: '#fed7aa', letterSpacing: '0.1em' }}
        >
          THE ETERNAL FLAME
        </motion.h1>
      </header>

      <main style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#f97316' }}>
        {STORY_TEXT.split('. ').map((sentence, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            style={{ display: 'inline-block', marginBottom: '10px', marginRight: '8px' }}
          >
            {sentence}.
          </motion.span>
        ))}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
