import { useState } from 'react';
import './App.css'
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
function App() {

  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 2000); // Reverts back after 2 seconds
  };

  return (
    <> 
  <button className="button" onClick={handleClick}>
  <div className="outline"></div>
  <div className={isSent ? 'state state--sent' : 'state state--default'}>
    <div className="icon">
      {isSent ? (
        <AiOutlineCheckCircle size="1em" color="black" style={{ filter: 'url(#shadow)' }} />
      ) : (
        <AiOutlineSend size="1em" color="black" style={{ filter: 'url(#shadow)' }} />
      )}
    </div>
    <p>
      {isSent
        ? ['S', 'e', 'n', 't'].map((letter, index) => (
            <span key={index} style={{ '--i': index }}>{letter}</span>
          ))
        : ['S', 'e', 'n', 'd', 'M', 'e', 's', 's', 'a', 'g', 'e'].map(
            (letter, index) => (
              <span key={index} style={{ '--i': index }}>{letter}</span>
            )
          )}
    </p>
  </div>
</button>

      
    </>
  )
}

export default App
