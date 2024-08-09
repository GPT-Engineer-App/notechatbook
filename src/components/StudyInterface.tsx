import React, { useState } from 'react';
import { Search, Book, MessageSquare } from 'lucide-react';

const StudyInterface: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-100 p-4 text-center">
        <h1 className="text-2xl font-bold">The First Room-Temperature Ambient-Pressure Superconductor</h1>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-4 bg-blue-50 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Notebook</h2>
          <textarea className="w-full h-[calc(100%-2rem)] resize-none border border-gray-300 p-2" placeholder="Take notes here..."></textarea>
        </section>
        <section className="flex-1 p-4 bg-white overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Textbook Viewer</h2>
          <div className="border border-gray-300 p-4">
            <h3 className="text-lg font-semibold mb-2">Superconductor LK-99</h3>
            <p className="mb-2">Superconductors conduct electricity with zero resistance, meaning electricity can flow without loss.</p>
            <ul className="list-disc pl-5">
              <li>LK-99 is potentially the first room-temperature and ambient-pressure superconductor</li>
              <li>Previous attempts needed high pressure or low temperature (hard to use in everyday devices)</li>
              <li>LK-99's unique structure allows it to maintain superconductivity under normal conditions</li>
              <li>It could lead to new applications like efficient power cables, levitating trains and quantum computers</li>
            </ul>
          </div>
        </section>
        <section className="flex-1 p-4 bg-gray-50 flex flex-col">
          <div className="flex items-center mb-4">
            <Search className="mr-2" />
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="Search or ask a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="flex items-start mb-4">
              <Book className="mr-2 flex-shrink-0" />
              <p className="bg-white rounded-lg p-2 shadow">What is a superconductor and why is LK-99 special?</p>
            </div>
            <div className="flex items-start mb-4">
              <MessageSquare className="mr-2 flex-shrink-0" />
              <p className="bg-white rounded-lg p-2 shadow">A superconductor is a material that can conduct electricity with zero resistance. LK-99 is special because it is the first room-temperature and ambient-pressure superconductor. Its superconductivity originates from minute structural distortion caused by Cu2+ substitution of Pb2+ ions, not by external factors such as temperature and pressure. This unique structure allows LK-99 to maintain and exhibit superconductivity at room temperatures and ambient pressure, making it a very useful material for various applications.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudyInterface;
