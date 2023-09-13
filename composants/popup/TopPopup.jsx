"use client";
import React, { useState } from "react";
import Popup from "./Popup";

export default function TopPopup() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <button onClick={() => setShowPopup(!showPopup)}>
        <i className="mdi mdi-plus"></i>
        Voir plus
      </button>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </div>
  );
}
