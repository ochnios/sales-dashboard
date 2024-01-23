//interfejs:
//
// quality = [
//   shopAccountId: int,
//   data: {
//       aspects: [
//         {
//           name: 'rules' | 'orders' | 'service' | 'reviews' | 'offers',
//           rating: int, (zakres 0-10)
//         }
//      ]
//   }
// ]
// rating 0-10-20-30-40-50
//
// Super
// Dobry
// Neutralny
// Wymaga poprawy
// Nieakceptowalny
//

const quality = [
  {
    shopAccountId: 1,
    data: {
      aspects: [
        {
          name: "rules",
          rating: 9
        },
        {
          name: "orders",
          rating: 5
        },
        {
          name: "service",
          rating: 6
        },
        {
          name: "reviews",
          rating: 4
        },
        {
          name: "offers",
          rating: 9
        }
      ]
    }
  },
  {
    shopAccountId: 2,
    data: {
      aspects: [
        {
          name: "rules",
          rating: 8
        },
        {
          name: "orders",
          rating: 6
        },
        {
          name: "service",
          rating: 7
        },
        {
          name: "reviews",
          rating: 3
        },
        {
          name: "offers",
          rating: 5
        }
      ]
    }
  },
  {
    shopAccountId: 3,
    data: {
      aspects: [
        {
          name: "rules",
          rating: 5
        },
        {
          name: "orders",
          rating: 9
        },
        {
          name: "service",
          rating: 7
        },
        {
          name: "reviews",
          rating: 8
        },
        {
          name: "offers",
          rating: 6
        }
      ]
    }
  },
  {
    shopAccountId: 4,
    data: {
      aspects: [
        {
          name: "rules",
          rating: 9
        },
        {
          name: "orders",
          rating: 9
        },
        {
          name: "service",
          rating: 8
        },
        {
          name: "reviews",
          rating: 7
        },
        {
          name: "offers",
          rating: 10
        }
      ]
    }
  },
  {
    shopAccountId: 5,
    data: {
      aspects: [
        {
          name: "rules",
          rating: 7
        },
        {
          name: "orders",
          rating: 3
        },
        {
          name: "service",
          rating: 2
        },
        {
          name: "reviews",
          rating: 1
        },
        {
          name: "offers",
          rating: 7
        }
      ]
    }
  }
];

export default quality;
