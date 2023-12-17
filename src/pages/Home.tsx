
//<div className="absolute top-28 left-0 right-0 z-10 flix items-center justify-center">
//</div>
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import Island from '../models/Island'; // Import the 'Island' component

// to use 3d files, we need to use the GLTFLoader from drei and import the file

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas className="w-full h-screen relative bg-transparent" camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={0.5} />
          <Island /> {/* Use the 'Island' component */}
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;