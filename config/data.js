import { v4 as uuidv4 } from 'uuid';

export const data = {
  content: {
    header: {
      id: 0,
      component: 'header',
      title: 'Example MultiStep Form',
      subtitle: 'Follow the simple 3 steps to complete your mapping',
    },
    breadcrumb: [
      {
        id: uuidv4(),
        step: 1,
        component: 'circle',
        text: 'Account info',
        subtext: 'Investing information',
      },
      {
        id: uuidv4(),
        step: 2,
        component: 'circle',
        text: 'Investor info',
        subtext: 'More information about you',
      },
      {
        id: uuidv4(),
        step: 3,
        component: 'circle',
        text: 'Feedback',
        subtext: 'How did you hear about us?',
      },
    ],
    steps: [
      {
        id: 1,
        step: true,
        header: {
          id: uuidv4(),
          component: 'header',
          title: 'First Step',
          subtitle: 'This is another section option for subheader',
        },
        questions: [
          {
            id: uuidv4(),
            component: 'radio',
            text: 'Who will be investing?',
            required: true,
            options: [
              { value: 'answerA', label: 'Returning Investor' },
              { value: 'answerB', label: 'New Investor' },
              { value: 'answerC', label: 'New Entity' },
            ],
          },
        ],
      },
      {
        id: 2,
        step: true,
        header: {
          id: uuidv4(),
          component: 'header',
          title: 'Second Step',
          subtitle: 'This is another section option for subheader',
        },
        answerA: {
          questions: [
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Name',
              value: 'Edwin',
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Last name',
              value: 'Castillo',
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Tax ID',
              value: '123-456-7890',
              validation: /^\d{3}-\d{3}-\d{4}|\d{2}-\d{7}$/,
              required: true,
            },
          ],
        },
        answerB: {
          questions: [
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Name',
              value: '',
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Last name',
              value: '',
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Tax ID',
              value: '',
              validation: /^\d{3}-\d{3}-\d{4}|\d{2}-\d{7}$/,
              required: true,
            },
          ],
        },
        answerC: {
          questions: [
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Name',
              value: '',
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Last name',
              value: '',
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'dateField',
              label: 'Date',
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Formation City',
              value: '',
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'textField',
              label: 'Tax ID',
              value: '',
              validation: /^\d{2}-\d{7}$/,
              required: true,
            },
          ],
        },
      },
      {
        id: 3,
        step: true,
        header: {
          id: uuidv4(),
          component: 'header',
          title: 'Third Step',
          subtitle: 'This is another section option for subheader',
        },
        answerA: {
          questions: [
            {
              id: uuidv4(),
              component: 'selectField',
              label: 'How many other real estate investments have you made?',
              options: [
                { value: '5', text: '0-5' },
                { value: '10', text: '5-10' },
                { value: '11', text: '10+' },
              ],
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              label: 'What brought you back to our platform?',
              maxLength: 140,
              component: 'textarea',
              validation: null,
              required: true,
            },
          ],
        },
        answerB: {
          questions: [
            {
              id: uuidv4(),
              component: 'selectField',
              label: 'How did you find out about our platform?',
              options: [
                { value: 'search', text: 'Search' },
                { value: 'news', text: 'News Article' },
                { value: 'social', text: 'Social Media' },
                { value: 'advisor', text: 'Advisor' },
                { value: 'other', text: 'Other' },
              ],
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'selectField',
              label: 'How would you describe your accreditation?',
              options: [
                { value: 'investor', text: 'Accredited Investor' },
                { value: 'purcharser', text: 'Qualified Purchaser' },
                { value: 'other', text: 'Other' },
              ],
              validation: null,
              required: true,
            },
          ],
        },
        answerC: {
          questions: [
            {
              id: uuidv4(),
              component: 'selectField',
              label: 'Is your entity a Qualified Institutional Buyer?',
              options: [
                { value: 'yes', text: 'Yes' },
                { value: 'no', text: 'No' },
              ],
              validation: null,
              required: true,
            },
            {
              id: uuidv4(),
              component: 'selectField',
              label: 'How big is your portfolio?',
              options: [
                { value: '5-10', text: '$1-5 million' },
                { value: '5-20', text: '$5-20 million' },
                { value: '20-100', text: '$20-100 million' },
                { value: '100', text: '$100+ million' },
              ],
              validation: null,
              required: true,
            },
          ],
        },
      },
    ],
  },
};

// This an example with more steps, uncomment and use it instead of the top one to test with more steps.

// export const data = {
//   content: {
//     header: {
//       id: 0,
//       component: 'header',
//       title: 'Example MultiStep Form',
//       subtitle: 'Follow the simple 3 steps to complete your mapping',
//     },
//     breadcrumb: [
//       {
//         id: uuidv4(),
//         step: 1,
//         component: 'circle',
//         text: 'Account info',
//         subtext: 'Investing information',
//       },
//       {
//         id: uuidv4(),
//         step: 2,
//         component: 'circle',
//         text: 'Investor info',
//         subtext: 'More information about you',
//       },
//       {
//         id: uuidv4(),
//         step: 3,
//         component: 'circle',
//         text: 'Feedback',
//         subtext: 'How did you hear about us?',
//       },
//       {
//         id: uuidv4(),
//         step: 4,
//         component: 'circle',
//         text: 'Final Step',
//         subtext: 'This is a final step',
//       },
//     ],
//     steps: [
//       {
//         id: 1,
//         step: true,
//         header: {
//           id: uuidv4(),
//           component: 'header',
//           title: 'First Step',
//           subtitle: 'This is another section option for subheader',
//         },
//         questions: [
//           {
//             id: uuidv4(),
//             component: 'radio',
//             text: 'Who will be investing?',
//             required: true,
//             options: [
//               { value: 'answerA', label: 'Returning Investor' },
//               { value: 'answerB', label: 'New Investor' },
//               { value: 'answerC', label: 'New Entity' },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         step: true,
//         header: {
//           id: uuidv4(),
//           component: 'header',
//           title: 'Second Step',
//           subtitle: 'This is another section option for subheader',
//         },
//         answerA: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Name',
//               value: 'Edwin',
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Last name',
//               value: 'Castillo',
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Tax ID',
//               value: '123-456-7890',
//               validation: null,
//               required: true,
//             },
//           ],
//         },
//         answerB: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Name',
//               value: '',
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Last name',
//               value: '',
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Tax ID',
//               value: '',
//               validation: null,
//               required: true,
//             },
//           ],
//         },
//         answerC: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Name',
//               value: '',
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Last name',
//               value: '',
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'dateField',
//               label: 'Date',
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Formation City',
//               value: '',
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'textField',
//               label: 'Tax ID',
//               value: '',
//               validation: null,
//               required: true,
//             },
//           ],
//         },
//       },
//       {
//         id: 3,
//         step: true,
//         header: {
//           id: uuidv4(),
//           component: 'header',
//           title: 'Third Step',
//           subtitle: 'This is another section option for subheader',
//         },
//         answerA: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'How many other real estate investments have you made?',
//               options: [
//                 { value: '5', text: '0-5' },
//                 { value: '10', text: '5-10' },
//                 { value: '11', text: '10+' },
//               ],
//               validation: null,
//               required: false,
//             },
//             {
//               id: uuidv4(),
//               label: 'What brought you back to our platform?',
//               maxLength: 140,
//               component: 'textarea',
//               validation: null,
//               required: false,
//             },
//           ],
//         },
//         answerB: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'How did you find out about our platform?',
//               options: [
//                 { value: 'search', text: 'Search' },
//                 { value: 'news', text: 'News Article' },
//                 { value: 'social', text: 'Social Media' },
//                 { value: 'advisor', text: 'Advisor' },
//                 { value: 'other', text: 'Other' },
//               ],
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'How would you describe your accreditation?',
//               options: [
//                 { value: 'investor', text: 'Accredited Investor' },
//                 { value: 'purcharser', text: 'Qualified Purchaser' },
//                 { value: 'other', text: 'Other' },
//               ],
//               validation: null,
//               required: true,
//             },
//           ],
//         },
//         answerC: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'Is your entity a Qualified Institutional Buyer?',
//               options: [
//                 { value: 'yes', text: 'Yes' },
//                 { value: 'no', text: 'No' },
//               ],
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'How big is your portfolio?',
//               options: [
//                 { value: '5-10', text: '$1-5 million' },
//                 { value: '5-20', text: '$5-20 million' },
//                 { value: '20-100', text: '$20-100 million' },
//                 { value: '100', text: '$100+ million' },
//               ],
//               validation: null,
//               required: true,
//             },
//           ],
//         },
//       },
//       {
//         id: 4,
//         step: true,
//         header: {
//           id: uuidv4(),
//           component: 'header',
//           title: 'Third Step',
//           subtitle: 'This is another section option for subheader',
//         },
//         answerA: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'How many other real estate investments have you made?',
//               options: [
//                 { value: '5', text: '0-5' },
//                 { value: '10', text: '5-10' },
//                 { value: '11', text: '10+' },
//               ],
//               validation: null,
//               required: false,
//             },
//             {
//               id: uuidv4(),
//               label: 'What brought you back to our platform?',
//               maxLength: 140,
//               component: 'textarea',
//               validation: null,
//               required: false,
//             },
//           ],
//         },
//         answerB: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'How did you find out about our platform?',
//               options: [
//                 { value: 'search', text: 'Search' },
//                 { value: 'news', text: 'News Article' },
//                 { value: 'social', text: 'Social Media' },
//                 { value: 'advisor', text: 'Advisor' },
//                 { value: 'other', text: 'Other' },
//               ],
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'How would you describe your accreditation?',
//               options: [
//                 { value: 'investor', text: 'Accredited Investor' },
//                 { value: 'purcharser', text: 'Qualified Purchaser' },
//                 { value: 'other', text: 'Other' },
//               ],
//               validation: null,
//               required: true,
//             },
//           ],
//         },
//         answerC: {
//           questions: [
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'Is your entity a Qualified Institutional Buyer?',
//               options: [
//                 { value: 'yes', text: 'Yes' },
//                 { value: 'no', text: 'No' },
//               ],
//               validation: null,
//               required: true,
//             },
//             {
//               id: uuidv4(),
//               component: 'selectField',
//               label: 'How big is your portfolio?',
//               options: [
//                 { value: '5-10', text: '$1-5 million' },
//                 { value: '5-20', text: '$5-20 million' },
//                 { value: '20-100', text: '$20-100 million' },
//                 { value: '100', text: '$100+ million' },
//               ],
//               validation: null,
//               required: true,
//             },
//           ],
//         },
//       },
//     ],
//   },
// };
