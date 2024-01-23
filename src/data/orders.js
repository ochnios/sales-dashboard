// interfejs:
//
// orders = [
//   {
//     shopAccountId: int,
//     data: {   MOŻE BYĆ NULL -> brak zamówień
//       toPay: int,
//       toSend: int,
//       returns: int
//     }
//   }
// ]

const orders = [
  {
    shopAccountId: 1,
    data: {
      toPay: 8,
      toSend: 5,
      returns: 7
    }
  },
  {
    shopAccountId: 2,
    data: {
      toPay: 3,
      toSend: 1,
      returns: 2
    }
  },
  {
    shopAccountId: 3,
    data: {
      toPay: 12,
      toSend: 4,
      returns: 0
    }
  },
  {
    shopAccountId: 4,
    data: {
      toPay: 2,
      toSend: 1,
      returns: 3
    }
  },
  {
    shopAccountId: 5,
    data: {
      toPay: 7,
      toSend: 5,
      returns: 4
    }
  }
];

export default orders;
