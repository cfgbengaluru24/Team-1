import Sidebar from '../../src/components/Sidebar';
import MainContent from '../../src/components/MainContent';

export default function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}
