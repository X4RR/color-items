import { defineStore } from 'pinia';

export const itemStore = defineStore('item', {
  state: () => ({
    lists: [
      {
        listTitle: 'List 1',
        res: [],
        checked: false,
        shuffled: false,
        isOpen: false,
        sublist: [
          {
            title: 'Item 1',
            amount: 5,
            color: '#EFD5F2',
            checked: false,
          },
          {
            title: 'Item 2',
            amount: 6,
            color: '#CEB3F2',
            checked: false,
          },
          {
            title: 'Item 3',
            amount: 8,
            color: '#CEBDF2',
            checked: false,
          },
          {
            title: 'Item 4',
            amount: 9,
            color: '#B6D6F2',
            checked: false,
          },
          {
            title: 'Item 5',
            amount: 4,
            color: '#C9EBF2',
            checked: false,
          },
        ],
      },
      {
        listTitle: 'List 2',
        res: [],
        checked: false,
        isOpen: false,
        shuffled: false,
        sublist: [
          {
            title: 'Item 6',
            amount: 5,
            color: '#EF44F2',
            checked: false,
          },
          {
            title: 'Item 7',
            amount: 4,
            color: '#3E2EA6',
            checked: false,
          },
          {
            title: 'Item 8',
            amount: 6,
            color: '#1D1A73',
            checked: false,
          },
          {
            title: 'Item 9',
            amount: 4,
            color: '#4A88D9',
            checked: false,
          },
          {
            title: 'Item 10',
            amount: 7,
            color: '#72F2F2',
            checked: false,
          },
        ],
      },
      {
        listTitle: 'List 3',
        res: [],
        checked: false,
        isOpen: false,
        shuffled: false,
        sublist: [
          {
            title: 'Item 11',
            amount: 5,
            color: '#195973',
            checked: false,
          },
          {
            title: 'Item 12',
            amount: 4,
            color: '#2D83A6',
            checked: false,
          },
          {
            title: 'Item 13',
            amount: 3,
            color: '#3BA7BF',
            checked: false,
          },
          {
            title: 'Item 14',
            amount: 4,
            color: '#053A40',
            checked: false,
          },
          {
            title: 'Item 15',
            amount: 2,
            color: '#63E4F2',
            checked: false,
          },
        ],
      },
      {
        listTitle: 'List 4',
        res: [],
        checked: false,
        isOpen: false,
        shuffled: false,
        sublist: [
          {
            title: 'Item 16',
            amount: 6,
            color: '#730255',
            checked: false,
          },
          {
            title: 'Item 17',
            amount: 3,
            color: '#BF06A0',
            checked: false,
          },
          {
            title: 'Item 18',
            amount: 3,
            color: '#3BA7BF',
            checked: false,
          },
          {
            title: 'Item 19',
            amount: 7,
            color: '#D911CB',
            checked: false,
          },
          {
            title: 'Item 20',
            amount: 5,
            color: '#0B9ED9',
            checked: false,
          },
        ],
      },
      {
        listTitle: 'List 5',
        res: [],
        checked: false,
        isOpen: false,
        shuffled: false,
        sublist: [
          {
            title: 'Item 21',
            amount: 8,
            color: '#F23869',
            checked: false,
          },
          {
            title: 'Item 22',
            amount: 7,
            color: '#110559',
            checked: false,
          },
          {
            title: 'Item 23',
            amount: 5,
            color: '#21118C',
            checked: false,
          },
          {
            title: 'Item 24',
            amount: 7,
            color: '#3621BF',
            checked: false,
          },
          {
            title: 'Item 25',
            amount: 9,
            color: '#030226',
            checked: false,
          },
        ],
      },
    ],
  }),
});
