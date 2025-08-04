import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-6">
        {/* Rotating Fan Animation */}
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-32 h-32 rounded-full border-4 border-primary/20 animate-spin">
            {/* Fan Blades */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary to-blue-400 animate-spin">
              {/* Fan Blade Pattern */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                    }}
                  >
                    <div className="absolute top-0 left-1/2 w-1 h-8 bg-white/80 transform -translate-x-1/2 rounded-full origin-bottom" />
                  </div>
                ))}
              </div>
              
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-pulse" />
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-heading font-bold text-primary">
            ASTRA AIR CONDITIONING
          </h3>
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading your cooling solutions...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full animate-[loading-progress_2s_ease-out_forwards]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;