const initialData = [
  {
    label: 'Основная информация',
    type: 'container',
    code: 'k1',
    parent: null,
  },
  {
    label: 'Фамилия',
    type: 'input',
    code: 'c1',
    parent: 'k1',
    value: 'Иванов',
  },
  {
    label: 'Имя',
    type: 'input',
    code: 'c2',
    parent: 'k1',
    value: 'Иван',
  },
  {
    label: 'Отчество',
    type: 'input',
    code: 'c3',
    parent: 'k1',
    value: 'Иванович',
  },
  {
    label: 'Дата рождения',
    type: 'datepicker',
    code: 'c4',
    parent: 'k1',
    value: '2020-01-01',
  },
  {
    label: 'Пол',
    type: 'list',
    code: 'с5',
    parent: 'k1',
    listdata: [
      {
        key: 1,
        value: 'мужской',
      },
      {
        key: 2,
        value: 'женский',
      },
    ],
    value: 1,
  },

  {
    label: 'Ваше сообщение',
    type: 'container',
    code: 'k2',
    parent: 'k1',
  },
  {
    type: 'input',
    code: 'c6',
    parent: 'k2',
    value: 'Какой-то текст',
  },
];

JSON.stringify(initialData);

export default initialData;
