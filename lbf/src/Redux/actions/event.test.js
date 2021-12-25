import {
  SET_ALL_EVENTS,
  setAllEvents,
  SET_ASKING_LIST,
  setAskingList,
  SET_EVENT_TAGS,
  setEventTags,
  SET_UPDATE_ASKING_LIST,
  setUpdateAskingList,
  SET_USER_EVENTS_BY_ID,
  setUserEventsById,
  RESET_DATA_EVENTS,
  resetDataEvents,
} from "./event";

describe("TESTING SYNC EVENTS ACTIONS", () => {
  test("should get all the events actions", () => {
    const value = "test";
    const action = {
      type: SET_ALL_EVENTS,
      value,
    };
    expect(setAllEvents(value)).toEqual(action);
  });

  test("should get the asking list actions", () => {
    const value = "test";
    const action = {
      type: SET_ASKING_LIST,
      value,
    };
    expect(setAskingList(value)).toEqual(action);
  });

  test("should get all the events tags actions", () => {
    const value = "test";
    const action = {
      type: SET_EVENT_TAGS,
      value,
    };
    expect(setEventTags(value)).toEqual(action);
  });

  test("should update asking list actions", () => {
    const value = "test";
    const action = {
      type: SET_UPDATE_ASKING_LIST,
      value,
    };
    expect(setUpdateAskingList(value)).toEqual(action);
  });

  test("should get the user id for events actions", () => {
    const value = "test";
    const action = {
      type: SET_USER_EVENTS_BY_ID,
      value,
    };
    expect(setUserEventsById(value)).toEqual(action);
  });

  test("should reset events actions", () => {
    const error = new Error("Event deleted test");
    const action = {
      type: RESET_DATA_EVENTS,
      error,
    };
    expect(resetDataEvents(error)).toEqual(action);
  });
});
