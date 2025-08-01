import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  sparkle: boolean;
}

const SnowflakeAnimation = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Create initial snowflakes
    const initialSnowflakes: Snowflake[] = [];
    for (let i = 0; i < 50; i++) {
      initialSnowflakes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        sparkle: Math.random() > 0.7
      });
    }
    setSnowflakes(initialSnowflakes);

    // Animation loop
    const animateSnowflakes = () => {
      setSnowflakes(prev => 
        prev.map(flake => ({
          ...flake,
          y: flake.y + flake.speed,
          x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
          // Reset snowflake if it goes off screen
          ...(flake.y > window.innerHeight ? {
            y: -10,
            x: Math.random() * window.innerWidth
          } : {})
        }))
      );
    };

    const interval = setInterval(animateSnowflakes, 50);
    return () => clearInterval(interval);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setSnowflakes(prev => 
        prev.map(flake => ({
          ...flake,
          x: flake.x > window.innerWidth ? Math.random() * window.innerWidth : flake.x
        }))
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className={`absolute transition-all duration-100 ${
            flake.sparkle ? 'animate-pulse' : ''
          }`}
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            background: flake.sparkle 
              ? 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(135,206,235,0.7) 50%, rgba(255,255,255,0.3) 100%)'
              : 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(240,248,255,0.6) 100%)',
            borderRadius: '50%',
            boxShadow: flake.sparkle 
              ? '0 0 6px rgba(135,206,235,0.8), 0 0 12px rgba(255,255,255,0.6)'
              : '0 0 2px rgba(255,255,255,0.5)',
            filter: flake.sparkle ? 'blur(0.5px)' : 'none'
          }}
        />
      ))}
    </div>
  );
};

export default SnowflakeAnimation;