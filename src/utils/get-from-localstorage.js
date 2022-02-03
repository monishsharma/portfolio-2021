/* eslint-disable import/no-anonymous-default-export */
export default (key) => {
    return window.localStorage.getItem(key);
};