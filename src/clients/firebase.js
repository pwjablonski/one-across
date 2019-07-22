import once from "lodash/once";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "../config";

export const { loadDatabase } = buildFirebase();

function buildFirebase(appName = undefined) {
  const app = firebase.initializeApp(
    {
      apiKey: config.firebaseApiKey,
      authDomain: `${config.firebaseApp}.firebaseapp.com`,
      databaseURL: `https://${config.firebaseApp}.firebaseio.com`,
      projectId: "one-across"
    },
    appName
  );

  return {
    auth: firebase.auth(app),

    loadDatabase: once(async () => {
      return firebase.firestore();
    })
  };
}

export async function createPuzzle(puzzleData) {
  const database = await loadDatabase();
  return database.collection("puzzles").add(puzzleData);
}

export async function createPuzzleSession(session) {
  const database = await loadDatabase();
  return database
    .collection("sessions")
    .doc(session.currentSessionId)
    .set(session);
}

export async function getSessionData(id) {
  const database = await loadDatabase();
  return database.doc(`sessions/${id}`).get();
}

export async function getPuzzleData(id) {
  const database = await loadDatabase();
  return database.doc(`puzzles/${id}`).get();
}

export async function listenForSessionDataChange(id, dispatch, action) {
  const database = await loadDatabase();
  return database.doc(`sessions/${id}`).onSnapshot(doc => {
    dispatch(action(doc.data()));
  });
}

export async function updateFill(id, fill) {
  const database = await loadDatabase();
  return database.doc(`sessions/${id}`).set({ fill }, { merge: true });
}
