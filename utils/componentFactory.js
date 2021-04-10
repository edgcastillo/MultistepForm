import { Component } from '../components/Template/ComponentMap';

export const componentFactory = (node, userChoice) => {
  const componentsList = [];
  function recursive(data) {
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const element = value[i];
          componentsList.push(Component({ ...element }));
        }
      } else if (key === userChoice) {
        recursive(value);
      } else if (typeof value === 'object') {
        componentsList.push(Component({ ...value }));
      }
    }
  }
  recursive(node);
  return componentsList;
};
