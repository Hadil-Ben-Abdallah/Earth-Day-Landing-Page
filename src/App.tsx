import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MeetEarth from './components/MeetEarth';
import DearHumans from './components/DearHumans';
import ProtectEarth from './components/ProtectEarth';
import LifeOnEarth from './components/LifeOnEarth';
import EarthStats from './components/EarthStats';
import JoinCause from './components/JoinCause';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#00181C]">
      <Navbar />
      <main>
        <Hero />
        <MeetEarth />
        <DearHumans />
        <ProtectEarth />
        <LifeOnEarth />
        <EarthStats />
        <JoinCause />
      </main>
      <Footer />
    </div>
  );
}

export default App;
