import {
  setCurrentIntervention,
  unsetCurrent,
  resetCurrentIntervention,
} from "../actions/current";
import { AppStateEvents } from "../../helpers";

export const initSocket = (dispatch, intervention) => {
  return (socket) => {
    socket.on("wait", (intervention) => {
      // must change callback otherwise
      // a new intervention will be created
      // each time appstate changes
      socket.setCallback(syncSocket(dispatch, intervention._id));
      AppStateEvents.addNamedEvent("resync", "change", (nextAppState) => {
        if (nextAppState === "active") {
          // trigger on foreground only
          dispatch(resetCurrentIntervention(intervention._id));
        }
      });
      dispatch(setCurrentIntervention(intervention));
    });
    socket.on("canceled", (intervention) => {
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
      alert("Vous avez annulé votre demande");
    });
    socket.on("refused", (int_id) => {
      alert(
        "Le préstataire n'est actuellement pas en état d'accepter votre demande."
      );
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
    });
    socket.on("accepted", (intervention) => {
      dispatch(setCurrentIntervention(intervention));
    });
    socket.on("finished", (intervention) => {
      dispatch(setCurrentIntervention(intervention));
    });
    socket.on("validated", (intervention) => {
      dispatch(setCurrentIntervention(intervention));
    });
    socket.on("goHome", () => {
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
    });

    socket.emit("init", intervention);
  };
};

export const syncSocket = (dispatch, int_id) => {
  return (socket) => {
    // then join room
    socket.emit("join", int_id);

    AppStateEvents.addNamedEvent("resync", "change", (nextAppState) => {
      if (nextAppState === "active") {
        // trigger on foreground only
        dispatch(resetCurrentIntervention(int_id));
      }
    });

    socket.on("wait", (intervention) => {
      // Show sp modal + waiting message
      dispatch(setCurrentIntervention(intervention));
    });
    socket.on("canceled", (intervention) => {
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
      alert("Vous avez annulé votre demande");
    });
    socket.on("refused", (int_id) => {
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
      alert(
        "Le préstataire n'est actuellement pas en état d'accepter votre demande."
      );
    });
    socket.on("accepted", (intervention) => {
      dispatch(setCurrentIntervention(intervention));
    });
    socket.on("finished", (intervention) => {
      dispatch(setCurrentIntervention(intervention));
    });
    socket.on("validated", (intervention) => {
      dispatch(setCurrentIntervention(intervention));
    });
    socket.on("goHome", () => {
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
    });
  };
};
