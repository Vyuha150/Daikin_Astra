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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="flex flex-col items-center space-y-8">
        {/* Enhanced Fan Animation */}
        <div className="relative">
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-primary via-primary-light to-primary opacity-20 blur-2xl animate-pulse"></div>
          
          {/* Main Fan Container */}
          <div className="relative w-32 h-32 rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/10 to-primary-light/10 backdrop-blur-sm animate-spin shadow-card">
            {/* Fan Blades */}
            <div className="absolute inset-2 rounded-full bg-gradient-primary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
              {/* Enhanced Fan Blade Pattern */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                    }}
                  >
                    <div className="absolute top-0 left-1/2 w-2 h-10 bg-gradient-to-b from-primary-foreground to-primary-foreground/60 transform -translate-x-1/2 rounded-full origin-bottom shadow-lg" />
                  </div>
                ))}
              </div>
              
              {/* Enhanced Center Hub */}
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary-foreground rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-cta border-2 border-primary/20">
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-primary/30 blur-xl animate-pulse" />
          <div className="absolute inset-2 w-28 h-28 rounded-full bg-primary-light/20 blur-lg animate-pulse delay-500" />
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

        {/* Enhanced Progress Bar */}
        <div className="w-64 h-2 bg-primary/20 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-primary rounded-full animate-[loading-progress_2s_ease-out_forwards] shadow-cta" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;