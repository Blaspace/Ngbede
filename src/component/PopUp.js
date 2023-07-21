import React from "react";

function PopUp({ message, setMessage }) {
  return (
    <>
      {message && (
        <div className="popup">
          <article>
            <br />
            <p>{message}</p>
            <br />
            <button onClick={() => setMessage(null)}>Okay</button>
            <br />
          </article>
        </div>
      )}
    </>
  );
}

export default PopUp;
