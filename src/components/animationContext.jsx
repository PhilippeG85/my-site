import React from "react";

const UnmountComponent = React.createContext();

function UnmountComponentProvider({ children }) {
  function unmount() {
    console.log('start');
    setTimeout(() => {
      console.log("end");
    }, 5000);
  }

  const unmoutStyle = {
    transform: "scale(.6)",
    transition: "ease 2s"
  };

  return (
    <UnmountComponent.Provider value={{ unmount, unmoutStyle }}>
      { children }
    </UnmountComponent.Provider>
  );
}

export { UnmountComponentProvider, UnmountComponent };
