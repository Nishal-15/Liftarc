import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Per-letter entry angles (each from a unique direction) ──────────────────

const ENTRY_ANGLES = [
  { x: -80, y: -40, rotate: -25 },
  { x:   0, y: -70, rotate:   0 },
  { x:  60, y: -30, rotate:  18 },
  { x: -50, y:  50, rotate: -12 },
  { x:  80, y: -50, rotate:  22 },
  { x: -30, y:  60, rotate: -18 },
  { x:  40, y: -45, rotate:  15 },
];

const EXIT_ANGLES = [
  { x: -140, y:  -90, rotate: -40 },
  { x:  -20, y: -110, rotate:  12 },
  { x:  120, y:  -70, rotate:  35 },
  { x: -100, y:  100, rotate: -22 },
  { x:  150, y: -100, rotate:  45 },
  { x:  -70, y:  120, rotate: -32 },
  { x:   90, y:  -90, rotate:  28 },
];

const getAngle = (arr, i) => arr[i % arr.length];

// ─── Variants ─────────────────────────────────────────────────────────────────

const makeLetterVariants = (i) => {
  const entry = getAngle(ENTRY_ANGLES, i);
  const exit  = getAngle(EXIT_ANGLES,  i);
  return {
    hidden: {
      opacity: 0,
      x: entry.x,
      y: entry.y,
      rotate: entry.rotate,
      scale: 0.6,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        delay: 0.4 + i * 0.13,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      x: exit.x,
      y: exit.y,
      rotate: exit.rotate,
      scale: 0.5,
      filter: 'blur(6px)',
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: [0.4, 0, 1, 1],
      },
    },
  };
};

const taglineVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const RadialGlow = () => (
  <motion.div
    animate={{ scale: [1, 1.18, 1], opacity: [0.22, 0.45, 0.22] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    style={{
      position: 'absolute',
      width: '700px',
      height: '700px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,174,239,0.12) 0%, rgba(0,174,239,0.03) 45%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: 0,
    }}
  />
);

const ScanLines = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)',
      pointerEvents: 'none',
      zIndex: 0,
    }}
  />
);

const CornerBracket = ({ style }) => (
  <div style={{ position: 'absolute', width: 18, height: 18, ...style }}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M0 18 L0 0 L18 0" stroke="rgba(0,174,239,0.32)" strokeWidth="1.2" fill="none" />
    </svg>
  </div>
);

const ProgressBar = ({ duration }) => (
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '0 0 36px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      zIndex: 2,
    }}
  >
    <div
      style={{
        width: '260px',
        height: '1px',
        background: 'rgba(255,255,255,0.07)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,174,239,0.4), #00AEEF)',
          transformOrigin: 'left center',
        }}
      />
      <motion.div
        animate={{ x: ['-100%', '500%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        style={{
          position: 'absolute',
          top: 0,
          width: '60px',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)',
        }}
      />
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{ display: 'flex', alignItems: 'center', gap: '9px' }}
    >
      <motion.span
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          display: 'inline-block',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#00AEEF',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: '"Share Tech Mono", "Courier New", monospace',
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          color: 'rgba(0,174,239,0.55)',
          textTransform: 'uppercase',
        }}
      >
        INITIALIZING_SYSTEM...
      </span>
    </motion.div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

/**
 * Preloader
 * @param {string}   companyName - Text to reveal (default: "LIFTARC")
 * @param {Function} onComplete  - Called after exit animation finishes
 */
const Preloader = ({ companyName = 'LIFTARC', onComplete }) => {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'exit'
  const letters = companyName.split('');

  const lastLetterArrives = 0.4 + (letters.length - 1) * 0.13 + 0.65;
  const holdDuration = 1.0;
  const exitDelay = (lastLetterArrives + holdDuration) * 1000;
  const progressDuration = lastLetterArrives + holdDuration - 0.2;

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), exitDelay);
    const t2 = setTimeout(() => onComplete?.(), exitDelay + 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {phase === 'enter' && (
        <motion.div
          key="preloader-shell"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.75, ease: 'easeInOut' } }}
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            background: '#080f1e',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            overflow: 'hidden',
          }}
        >
          <ScanLines />
          <RadialGlow />

          <CornerBracket style={{ top: 28, left: 28 }} />
          <CornerBracket style={{ top: 28, right: 28, transform: 'scaleX(-1)' }} />
          <CornerBracket style={{ bottom: 44, left: 28, transform: 'scaleY(-1)' }} />
          <CornerBracket style={{ bottom: 44, right: 28, transform: 'scale(-1,-1)' }} />

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 0.35, letterSpacing: '0.32em' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
              style={{
                fontFamily: '"Share Tech Mono", "Courier New", monospace',
                fontSize: '0.54rem',
                color: '#00AEEF',
                textTransform: 'uppercase',
                margin: '0 0 26px 0',
              }}
            >
              ◈ &nbsp; SYSTEM BOOT &nbsp; ◈
            </motion.p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '0.03em' }}>
              {letters.map((char, i) => {
                const variants = makeLetterVariants(i);
                return (
                  <motion.span
                    key={i}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      display: 'inline-block',
                      fontFamily: '"Bebas Neue", "Impact", "Arial Black", sans-serif',
                      fontSize: 'clamp(4rem, 10vw, 7.5rem)',
                      fontWeight: 900,
                      letterSpacing: '0.07em',
                      lineHeight: 1,
                      backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #9db8d4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      willChange: 'transform, opacity, filter',
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>

            <motion.div
              variants={taglineVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: lastLetterArrives + 0.1 }}
              style={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
              }}
            >
              <span style={{ display: 'block', width: '30px', height: '1px', background: 'rgba(0,174,239,0.32)' }} />
              <span
                style={{
                  fontFamily: '"Share Tech Mono", "Courier New", monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.26em',
                  color: 'rgba(168,196,224,0.38)',
                  textTransform: 'uppercase',
                }}
              >
                Elevate Every Rep
              </span>
              <span style={{ display: 'block', width: '30px', height: '1px', background: 'rgba(0,174,239,0.32)' }} />
            </motion.div>
          </div>

          <ProgressBar duration={progressDuration} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
