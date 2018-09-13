import { createSelector } from "reselect";

const getTestData = state => state.testData;

export const selectTestData = createSelector([getTestData], testData => testData);
