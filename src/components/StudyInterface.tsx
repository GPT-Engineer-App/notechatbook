import React, { useState } from 'react';
import { Search, Book, MessageSquare } from 'lucide-react';
import styles from './StudyInterface.module.scss';

const StudyInterface: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.studyInterface}>
      <header className={styles.header}>
        <h1>The First Room-Temperature Ambient-Pressure Superconductor</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.notebook}>
          <h2>Notebook</h2>
          <textarea placeholder="Take notes here..."></textarea>
        </section>
        <section className={styles.textbookViewer}>
          <h2>Textbook Viewer</h2>
          <div className={styles.textbookContent}>
            <h3>Superconductor LK-99</h3>
            <p>Superconductors conduct electricity with zero resistance, meaning electricity can flow without loss.</p>
            <ul>
              <li>LK-99 is potentially the first room-temperature and ambient-pressure superconductor</li>
              <li>Previous attempts needed high pressure or low temperature (hard to use in everyday devices)</li>
              <li>LK-99's unique structure allows it to maintain superconductivity under normal conditions</li>
              <li>It could lead to new applications like efficient power cables, levitating trains and quantum computers</li>
            </ul>
          </div>
        </section>
        <section className={styles.chatSearch}>
          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search or ask a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.chatArea}>
            <div className={styles.message}>
              <Book className={styles.icon} />
              <p>What is a superconductor and why is LK-99 special?</p>
            </div>
            <div className={styles.message}>
              <MessageSquare className={styles.icon} />
              <p>A superconductor is a material that can conduct electricity with zero resistance. LK-99 is special because it is the first room-temperature and ambient-pressure superconductor. Its superconductivity originates from minute structural distortion caused by Cu2+ substitution of Pb2+ ions, not by external factors such as temperature and pressure. This unique structure allows LK-99 to maintain and exhibit superconductivity at room temperatures and ambient pressure, making it a very useful material for various applications.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudyInterface;
