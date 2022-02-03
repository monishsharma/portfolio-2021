import * as actionTypes from "./types";

export const toggleNav = (flag) => ({
    type: actionTypes.TOGGLE_NAV_DRAWER,
    flag
});
