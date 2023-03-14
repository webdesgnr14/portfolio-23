import * as React from "react";
import { HoverElement } from "./HoverElement";
import { CursorContext } from "../context/CursorContextProvider";
import { MagicWordContext } from "../context/MagicWordContextProvider";

const Emoji = ({ i, index }) => {
  if (i !== 0) {
    return (
      <>
        {" "}
        <span className="emoji">{index}</span>
        <br />
      </>
    );
  }
  return (
    <>
      <span className="emoji">{index}</span>
      <br />
    </>
  );
};

const Word = ({ i, word }) => {
  if (i !== 0) {
    return (
      <>
        {" "}
        <span className="word">{word}</span>
      </>
    );
  }
  return <span className="word">{word}</span>;
};

export const MagicWord = ({ phrase, placement, emojis }) => {
  if (!phrase || !placement || emojis.length === 0) return;
  const [, setCursor] = React.useContext(CursorContext);
  const [, setCycleComplete] = React.useContext(MagicWordContext);
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [emojiIndex, setEmojiIndex] = React.useState(null);
  const words = phrase.split(" ");

  const toggleConfetti = React.useCallback((state) => {
    setCycleComplete(() => {
      return { isComplete: state };
    });
  });

  const toggleEmoji = (e) => {
    e.preventDefault();
    
    if (emojiIndex === null) {
      setShowEmoji(true);
    }

    if (emojiIndex === emojis.length - 1) {
      setShowEmoji(false);
      setEmojiIndex(null);
      toggleConfetti(true);
    } else {
      setEmojiIndex(emojiIndex === null ? 0 : emojiIndex + 1);
    }
  };

  const toggleCursor = React.useCallback((isHovering) => {
    setCursor(() => {
      return {
        active: isHovering,
        text: isHovering ? "Click Me" : "",
      };
    });
  });

  if (words.length > 0) {
    return words.map((word, i) => {
      if (placement === i + 1) {
        return (
          <HoverElement
            className="magic-word"
            onClick={(e) => toggleEmoji(e)}
            onMouseEnter={(isHovering) => toggleCursor(isHovering)}
            onMouseLeave={(isHovering) => toggleCursor(isHovering)}
            key={i}
            href="#"
          >
            {!showEmoji ? (
              <Word i={i} word={word} />
            ) : (
              <Emoji i={i} index={emojis[emojiIndex]} />
            )}
          </HoverElement>
        );
      }
      if (i !== 0) {
        return " " + word;
      } else {
        return word;
      }
    });
  }
};
