import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [imageSrc, setImageSrc] = useState('/images/profile.jpg');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setImageError(false);
    };
    img.onerror = () => {
      console.error('Failed to load image:', imageSrc);
      setImageError(true);
    };
  }, [imageSrc]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Error loading image:', e);
    if (!imageError) {
      // Try the original path if the new path fails
      setImageSrc('/PHOTO-2025-05-06-12-14-23.jpg');
    } else {
      // If both paths fail, use placeholder
      e.currentTarget.src = 'https://via.placeholder.com/256x256?text=Profile';
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      {/* 3D Sphere Animation */}
      <div className="absolute top-0 left-0 w-full h-[50vh]">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <meshStandardMaterial
              color="#00ff9d"
              wireframe
              transparent
              opacity={0.5}
            />
          </Sphere>
        </Canvas>
      </div>

      <div className="container mx-auto px-4 pt-[50vh]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-accent relative bg-gray-200"
          >
            <img
              src={imageSrc}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={handleImageError}
              loading="eager"
              crossOrigin="anonymous"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl font-bold text-text-primary mb-4">
              Aum Patel
            </h1>
            <p className="text-2xl text-accent mb-4">
              Cybersecurity Analyst
            </p>
            <p className="text-xl text-text-secondary mb-4">
              Computer Engineering Technology-CS graduate from Algonquin Ottawa.
            </p>
            <p className="text-xl text-text-secondary max-w-2xl">
              Specializing in cloud security and threat detection. Passionate about protecting digital assets and implementing robust security solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 