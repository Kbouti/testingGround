

console.log("Happy st patricks day!");

console.log(`Happy Birthday`);

// Test edit
// Performed reading on WAI-ARIA 2/23/24

// Read about props and such https://react.dev/learn/passing-props-to-a-component
// 3/18/24

// Lots and lots of React excercise work on 3/20/24


// React exercise 4, work in progress:
import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [lettersArray, setLettersArray] = useState(letters);

  let selectedLetters = lettersArray.filter((letter) => {
    if (letter.isStarred === true) {
      return letter;
    } else return;
  });

  const selectedCount = selectedLetters.length;

  function handleToggle(toggledId) {
    let newLettersArray = lettersArray.map((letter) => {
      if (letter.id !== toggledId) {
        return letter;
      } else {
        let newLetter = {
          id: toggledId,
          subject: letter.subject,
          isStarred: !letter.isStarred,
        };
        return newLetter;
      }
    });

    setLettersArray(newLettersArray);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {lettersArray.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.isStarred
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
