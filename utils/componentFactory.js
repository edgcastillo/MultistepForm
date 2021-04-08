import { Component } from "../components/Template/ComponentMap";

export const componentFactory = (node) => {
  const componentsList = [];
  for (const [key, value] of Object.entries(node)) {
    if (Array.isArray(value)) {
      // if there are nested arrays then do recursion
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        componentsList.push(Component({ ...element }));
      }
    } else if (typeof value === "object") {
      componentsList.push(Component({ ...value }));
    }
  }
  return componentsList;
};
