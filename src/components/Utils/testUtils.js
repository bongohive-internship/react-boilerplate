import { BrowserRouter } from "react-router-dom";
import { shape } from "prop-types";
import { mount, shallow } from "enzyme";

/**
 * These functions will help wrapping react-router
 * they will act as a mock
 * let me know if you have trouble with these
 */

const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {}
  }
};

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) }
});

export function mountWrap(node) {
  return mount(node, createContext());
}
export function shallowWrap(node) {
  return shallow(node, createContext());
}
