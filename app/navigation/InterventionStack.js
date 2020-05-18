import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntWait from "../screens/IntWait";
import IntFinished from "../screens/IntFinished";
import IntReview from "../screens/IntReview";
import Home from "../screens/Home";
import { useSelector, useDispatch } from "react-redux";
import { resetCurrentIntervention } from "../Store/actions";
import { AppStateEvents } from "../helpers";
const InterventionStack = createStackNavigator();

function InterventionStackScreen() {
  const dispatch = useDispatch();
  const intervention = useSelector((state) => state.current.intervention);

  // // add app state change listener to resync intervention state
  // AppStateEvents.addNamedEvent("resync", "change", (nextAppState) => {
  //   if (nextAppState === "active") {
  //     // trigger on foreground only
  // dispatch(resetCurrentIntervention(intervention._id));
  //   }
  // });

  let name = "Home";
  let screen = Home;
  switch (intervention.state) {
    case "pending": {
      name = "Home";
      screen = Home;
      break;
    }
    case "refused": {
      name = "Home";
      screen = Home;
      break;
    }
    case "accepted": {
      name = "Wait";
      screen = IntWait;
      break;
    }
    case "finished": {
      name = "Finished";
      screen = IntFinished;
      break;
    }
    case "validated": {
      name = "Review";
      screen = IntReview;
      break;
    }
  }

  return (
    <InterventionStack.Navigator headerMode={false}>
      <InterventionStack.Screen name={name} component={screen} />
    </InterventionStack.Navigator>
  );
}

export default InterventionStackScreen;
