export const selectHeadphoneModule = (state) => state.headphone;

export const selectHeadphoneIds = (state) => selectHeadphoneModule(state).ids;

export const selectHeadphoneById = (id) => (state) =>
  selectHeadphoneModule(state).entities[id];
