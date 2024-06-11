import React from "react";
import { PopupContainer, PopupInner, Button } from "./PopupElements.js";
import { IoMdClose } from "react-icons/io";

function Popup({ trigger, setTrigger, children }) {
  return (
    <PopupContainer className={trigger ? "active" : ""}>
      <PopupInner className={trigger ? "active" : ""}>
        <Button onClick={() => setTrigger(false)}>
          <IoMdClose />
        </Button>
        {children}
      </PopupInner>
    </PopupContainer>
  );
}

export default Popup;
