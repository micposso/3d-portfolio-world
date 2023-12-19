
//<div className="absolute top-28 left-0 right-0 z-10 flix items-center justify-center">
//</div>
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import Island from '../models/Island'; // Import the 'Island' component

// to use 3d files, we need to use the GLTFLoader from drei and import the file

const Home = () => {

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let screenRotation = [0.1, 4.7, 0];

    if(window.innerWidth < 640) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, screenRotation];
  }
  // destructure the array into two variables that come from the function return above
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen relative bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={0.8} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />{" "}
          {/* Use the 'Island' component */}
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;