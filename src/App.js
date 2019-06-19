import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import NavHeader from './components/Header';
import SelectPerson from './components/SelectPerson';
import PersonInfo from './components/Info';

const App = () => {
  const [userId, selectedPerson] = useState(1);
  // We will use this to dismiss a component and exhibit componentWillUnmount in PersonInfo Component
  const [dismissed, setDismissed] = useState(false);

  const charSelectedHandler = (e, { value }) => {
    selectedPerson(value);
  };

  const dismissUserInfoComponent= () => { setDismissed(true) };

  let content = (
    <>
      <SelectPerson
        value={userId}
        onPersonSelected={charSelectedHandler}/>
      <PersonInfo selectedPerson={userId}/>
      <p></p>
      <p></p>
      <Button
        fluid
        basic
        color='red'
        onClick={dismissUserInfoComponent}
      > Dismiss User Info Component </Button>
    </>
  );

  if (dismissed) content = <h1>No person to display!</h1>;

  return (
    <NavHeader>
      {content}
    </NavHeader>
  );
}

export default App;
