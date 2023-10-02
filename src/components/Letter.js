import { useState } from "react";
import "./Letter.css";

const Letter = ({ guest, letterType }) => {
  const [openLetter, setOpenLetter] = useState(false);
  const [classSwitch, setClassSwitch] = useState(false);

  const flipHandler = () => {
    setClassSwitch((prev) => !prev);
  };

  const letterHandler = () => {
    setOpenLetter(true);
  };

  let cardEl = (
    <div className="letter">
      <div
        className={
          openLetter
            ? "letter__background background__animation"
            : "letter__background"
        }
        onClick={letterHandler}
      ></div>
      <div
        className={
          openLetter
            ? "letter__container foreground__animation"
            : "letter__container"
        }
        onClick={letterHandler}
      >
        <div className="front__face"></div>
        <div className="sealing">
          <div className="name__tag">
            <p className="name__tag-font">{guest.name}</p>
          </div>
        </div>
        <div className="sealed">
          <div className="sealed__stamp"></div>
        </div>
      </div>
      <div
        className={classSwitch ? "flipper flipped" : "flipper"}
        onClick={flipHandler}
      >
        <div className="letter__invitation-second"></div>
        <div className="letter__invitation-first">
          <div className="pass">
            {guest.pass === 1
              ? `Pase válido para ${guest.pass} persona`
              : `Pase válido para ${guest.pass} personas`}
          </div>
          <div className="letter__tapme pulse">
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="TouchAppIcon"
            >
              <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  if (letterType === "online") {
    cardEl = (
      <div className="letter">
        <div
          className={
            openLetter
              ? "letter__background background__animation"
              : "letter__background"
          }
          onClick={letterHandler}
        ></div>
        <div
          className={
            openLetter
              ? "letter__container foreground__animation"
              : "letter__container"
          }
          onClick={letterHandler}
        >
          <div className="front__face"></div>
          <div className="sealing">
            <div className="name__tag">
              <p className="name__tag-font">{guest.name}</p>
            </div>
          </div>
          <div className="sealed">
            <div className="sealed__stamp"></div>
          </div>
        </div>
        <div className="flipper">
          <div className="letter__invitation-first-online"></div>
        </div>
      </div>
    );
  }

  return cardEl;
};

export default Letter;
