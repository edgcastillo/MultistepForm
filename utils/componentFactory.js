import { Component } from '../components/Template/ComponentMap';

// export const componentFactory = (node, userChoice) => {
//   const componentsList = [];
//   for (const [key, value] of Object.entries(node)) {
//     if (Array.isArray(value)) {
//       for (let i = 0; i < value.length; i++) {
//         const element = value[i];
//         componentsList.push(Component({ ...element }));
//       }
//     } else if (key === userChoice) {
//       console.log(value.questions);
//       for (let i = 0; i < value.questions.length; i++) {
//         const element = value.questions[i];
//         componentsList.push(Component({ ...element }));
//       }
//       // console.log({ ...value });
//       // for (let x = 0; x < value.length; x++) {
//       //   const element = value[x];
//       //   componentsList.push(Component({ ...element }));
//       // }
//     } else if (typeof value === 'object') {
//       componentsList.push(Component({ ...value }));
//     }
//   }
//   return componentsList;
// };

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
