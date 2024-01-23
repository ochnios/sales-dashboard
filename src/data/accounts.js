// interfejs:
//
// accounts = [
//   {
//     login: string,
//     name: string,
//     surname: string,
//     shopAccounts: [
//      {
//       id: int, (UNIKALNE W OBRĘBIE WSZYSTKICH SPRZEDAWCÓW!!!)
//       name: string
//      }
//     ]
//   }
// ]

const accounts = [
  {
    login: "superSprzedawca1",
    name: "Jan",
    surname: "Nowak",
    shopAccounts: [
      {
        id: 1,
        name: "Lidl"
      },
      {
        id: 2,
        name: "Tesco"
      },
      {
        id: 3,
        name: "OLX"
      }
    ]
  },
  {
    login: "ziomek2",
    name: "Marcin",
    surname: "Prokop",
    shopAccounts: [
      {
        id: 4,
        name: "Allegro"
      },
      {
        id: 5,
        name: "Amazon"
      }
    ]
  }
];

export default accounts;
