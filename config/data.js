export const data = {
  content: {
    header: {
      id: 0,
      component: "header",
      title: "Example MultiStep Form",
      subtitle: "Follow the simple 3 steps to complete your mapping"
    },
    breadcrumb: [
      {
        id: Math.floor(Math.random() * 1000),
        step: 1,
        component: "circle",
        text: "Account info",
        subtext: "Investing information"
      },
      {
        id: Math.floor(Math.random() * 1000),
        step: 2,
        component: "circle",
        text: "Investor info",
        subtext: "More information about you"
      },
      {
        id: Math.floor(Math.random() * 1000),
        step: 3,
        component: "circle",
        text: "Feedback",
        subtext: "How did you hear about us?"
      }
    ],
    steps: [
      {
        id: 1,
        step: true,
        header: {
          id: Math.floor(Math.random() * 1000),
          component: "header",
          title: "First Step",
          subtitle: "This is another section option for subheader"
        },
        questions: [
          {
            id: Math.floor(Math.random() * 1000),
            component: "radio",
            text: "Who will be investing?",
            options: [
              { value: "answerA", label: "Returning Investor" },
              { value: "answerB", label: "New Investor" },
              { value: "answerC", label: "New Entity" }
            ]
          }
        ]
      },
      {
        id: 2,
        step: true,
        header: {
          id: Math.floor(Math.random() * 1000),
          component: "header",
          title: "Second Step",
          subtitle: "This is another section option for subheader"
        },
        questions: [
          {
            id: Math.floor(Math.random() * 1000),
            component: "textField",
            label: "Name",
            validation: null,
            required: true
          },
          {
            id: Math.floor(Math.random() * 1000),
            component: "textField",
            label: "Last name",
            validation: null,
            required: true
          },
          {
            id: Math.floor(Math.random() * 1000),
            component: "textField",
            label: "Tax ID",
            validation: null,
            required: true
          }
        ]
      },
      {
        id: 3,
        step: true,
        header: {
          id: Math.floor(Math.random() * 1000),
          component: "header",
          title: "Third Step",
          subtitle: "This is another section option for subheader"
        },
        questions: [
          {
            id: Math.floor(Math.random() * 1000),
            component: "textField",
            label: "Random Text",
            validation: null,
            required: true
          },
          {
            id: Math.floor(Math.random() * 1000),
            label: "What brought you back to our platform?",
            maxLength: 140,
            component: "textarea"
          }
        ]
      }
    ]
  }
};
