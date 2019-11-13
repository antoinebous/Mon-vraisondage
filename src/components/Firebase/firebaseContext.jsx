import React from "react";
const FirebaseContext = React.createContext(null);

// this function returns the component and props adding firebase to it. Easy way to avoid passing down a componene into endless children
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
export default FirebaseContext;
