import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector } from 'reselect';
import isObject from 'lodash/isObject';
import pick from 'lodash/pick';
import get from 'lodash/get';
import set from 'lodash/set';
import {
  firebaseConnect,
  firestoreConnect,
  populate,
} from 'react-redux-firebase';

export const selectFirebaseState = state => state.get('firebase');
export const selectFirestoreState = state => state.firestore;

export const selectFirebase = keyList => SubComp => {
  function Firebase(props) {
    return <SubComp {...props} />;
  }

  const selector = createSelector(selectFirebaseState, firebase =>
    pick(firebase, keyList),
  );
  return compose(
    firebaseConnect(),
    connect(selector),
  )(Firebase);
};

export const selectFirebaseData = keyList => SubComp => {
  function FirebaseData(props) {
    return <SubComp {...props} />;
  }

  const selector = createSelector(selectFirebaseState, firebase =>
    keyList.reduce((selected, key) => {
      if (isObject(key)) {
        const { path, populates, queryParams } = key;
        if (path) {
          if (populates)
            return Object.assign(selected, {
              [path]: populate(firebase, path, populates),
            });
          if (queryParams)
            return Object.assign(selected, { [path]: firebase.data[path] });
        }
        return selected;
      }
      return Object.assign(selected, {
        [key]: get(firebase, ['data', ...key.split('/')]),
      });
    }, {}),
  );

  return compose(
    firebaseConnect(keyList),
    connect(selector),
  )(FirebaseData);
};

export const selectFirestore = keyList => SubComp => {
  function FirebaseData(props) {
    return <SubComp {...props} />;
  }

  const selector = createSelector(selectFirestoreState, firestore =>
    keyList.reduce((selected, key) => {
      if (isObject(key)) {
        if (key.storeAs) {
          return set(
            selected,
            key.storeAs,
            get(firestore, ['ordered', key.storeAs]),
          );
        }
        return set(
          selected,
          key.collection,
          get(firestore, ['ordered', key.collection]),
        );
      }
      return set(selected, key, get(firestore, ['ordered', ...key.split('/')]));
    }, {}),
  );

  return compose(
    firestoreConnect(keyList),
    connect(selector),
  )(FirebaseData);
};
