const links = [
  {
    title: 'MDN web docs Mozilla',
    text:
      'The Intl.DateTimeFormat object is a constructor for objects that enable language-sensitive date and time formatting.',
    avatar: 'https://developer.mozilla.org/static/img/.7f3da72dcea1.png',
    link:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat',
  },
  {
    title: 'DEVHINTS.IO',
    text:
      'Intl.DateTimeFormat cheatsheet. Intl.DateTimeFormat is used to format date strings in JavaScript.',
    avatar:
      'data:image/jpeg;base64,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',
    link: 'https://devhints.io/wip/intl-datetime',
  },
  {
    title: 'JavaScripture',
    text: 'The bridge between W3C, WHATWG and ECMAScript.',
    avatar: 'https://www.javascripture.com/favicon.ico',
    link: 'https://www.javascripture.com/DateTimeFormat',
  },
];

export default links;
