import { useState } from 'react';
import versesData from './halalJar.json';

const Halal = () => {
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [currentVerseIndex, setCurrentVerseIndex] = useState(null);

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setCurrentVerseIndex(Math.floor(Math.random() * versesData[emotion].length));
  };

  const handleGetAnotherVerse = () => {
    if (selectedEmotion) {
      setCurrentVerseIndex(Math.floor(Math.random() * versesData[selectedEmotion].length));
    }
  };

  const getVerse = () => {
    if (selectedEmotion && currentVerseIndex !== null) {
      const verseData = versesData[selectedEmotion][currentVerseIndex];
      return (
        <div>
          <h2>{verseData.verse}</h2>
          <br />
          <p>{verseData.text}</p>
          <br />
          <p>{verseData.arabic}</p>
          <br />
          <p><i>{verseData.translation}</i></p>
          <br />
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <h1>Halal Jar App</h1>
    <div className='container'>
      <div className="emotions">
        {Object.keys(versesData).map(emotion => (
          <button key={emotion} onClick={() => handleEmotionClick(emotion)} className='emotion-btn'>
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </button>
        ))}
      </div>
      {selectedEmotion && (
        <div>
          {getVerse()}
          <button onClick={handleGetAnotherVerse} className='emotion-btn'>Get Another Verse</button>
        </div>
      )}
    </div>
    </>
  );
}

export default Halal;
