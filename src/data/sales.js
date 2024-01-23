// interfejs:
//
// sales = [
//   {
//     shopAccountId: int,
//     data: [ // NULL -> brak danych
//       {
//         soldAt: Date,
//         sold: int,
//         revenue: double
//       }
//     ]
//   }
// ]
// nie wiem jak to lepiej zrobic zeby nie bylo skomplikowane, cos sie ugotuje

const sales = [
  {
    shopAccountId: 1,
    data: [
      { soldAt: new Date(2023, 0, 1), type: "d", sold: 43, revenue: 53.03 },
      { soldAt: new Date(2023, 0, 2), type: "d", sold: 124, revenue: 655.73 },
      { soldAt: new Date(2023, 0, 3), type: "d", sold: 202, revenue: 1338.85 },
      { soldAt: new Date(2023, 0, 4), type: "d", sold: 160, revenue: 493.4 },
      { soldAt: new Date(2023, 0, 5), type: "d", sold: 284, revenue: 1252.12 },
      { soldAt: new Date(2023, 0, 6), type: "d", sold: 188, revenue: 609.63 },
      { soldAt: new Date(2023, 0, 7), type: "d", sold: 71, revenue: 1709.27 },
      { soldAt: new Date(2023, 0, 8), type: "d", sold: 240, revenue: 1011.06 },
      { soldAt: new Date(2023, 0, 9), type: "d", sold: 232, revenue: 987.42 },
      { soldAt: new Date(2023, 0, 10), type: "d", sold: 199, revenue: 217.5 },
      { soldAt: new Date(2023, 0, 11), type: "d", sold: 226, revenue: 897.19 },
      { soldAt: new Date(2023, 0, 12), type: "d", sold: 268, revenue: 272.33 },
      { soldAt: new Date(2023, 0, 13), type: "d", sold: 233, revenue: 724.66 },
      { soldAt: new Date(2023, 0, 14), type: "d", sold: 16, revenue: 557.86 },
      { soldAt: new Date(2023, 0, 15), type: "d", sold: 34, revenue: 361.81 },
      { soldAt: new Date(2023, 0, 16), type: "d", sold: 289, revenue: 1190.02 },
      { soldAt: new Date(2023, 0, 17), type: "d", sold: 125, revenue: 1310.48 },
      { soldAt: new Date(2023, 0, 18), type: "d", sold: 45, revenue: 125.63 },
      { soldAt: new Date(2023, 0, 19), type: "d", sold: 96, revenue: 41.33 },
      { soldAt: new Date(2023, 0, 20), type: "d", sold: 160, revenue: 240.57 },
      { soldAt: new Date(2023, 0, 21), type: "d", sold: 55, revenue: 283.11 },
      {
        soldAt: new Date(2023, 0, 20, 6),
        type: "h",
        sold: 92,
        revenue: 1108.9
      },
      {
        soldAt: new Date(2023, 0, 20, 7),
        type: "h",
        sold: 63,
        revenue: 674.33
      },
      {
        soldAt: new Date(2023, 0, 20, 8),
        type: "h",
        sold: 99,
        revenue: 352.23
      },
      {
        soldAt: new Date(2023, 0, 20, 9),
        type: "h",
        sold: 33,
        revenue: 983.34
      },
      {
        soldAt: new Date(2023, 0, 20, 10),
        type: "h",
        sold: 77,
        revenue: 230.68
      },
      {
        soldAt: new Date(2023, 0, 20, 11),
        type: "h",
        sold: 21,
        revenue: 720.65
      },
      {
        soldAt: new Date(2023, 0, 20, 12),
        type: "h",
        sold: 14,
        revenue: 393.88
      },
      {
        soldAt: new Date(2023, 0, 20, 13),
        type: "h",
        sold: 54,
        revenue: 899.81
      },
      {
        soldAt: new Date(2023, 0, 20, 14),
        type: "h",
        sold: 52,
        revenue: 342.52
      },
      {
        soldAt: new Date(2023, 0, 20, 15),
        type: "h",
        sold: 82,
        revenue: 246.09
      },
      {
        soldAt: new Date(2023, 0, 20, 16),
        type: "h",
        sold: 66,
        revenue: 426.28
      },
      {
        soldAt: new Date(2023, 0, 20, 17),
        type: "h",
        sold: 76,
        revenue: 717.64
      },
      {
        soldAt: new Date(2023, 0, 20, 18),
        type: "h",
        sold: 86,
        revenue: 147.85
      },
      {
        soldAt: new Date(2023, 0, 20, 19),
        type: "h",
        sold: 56,
        revenue: 208.44
      },
      {
        soldAt: new Date(2023, 0, 20, 20),
        type: "h",
        sold: 97,
        revenue: 549.21
      },
      {
        soldAt: new Date(2023, 0, 20, 21),
        type: "h",
        sold: 11,
        revenue: 79.64
      },
      {
        soldAt: new Date(2023, 0, 21, 6),
        type: "h",
        sold: 65,
        revenue: 844.75
      },
      {
        soldAt: new Date(2023, 0, 21, 7),
        type: "h",
        sold: 26,
        revenue: 376.56
      },
      { soldAt: new Date(2023, 0, 21, 8), type: "h", sold: 85, revenue: 553.1 },
      {
        soldAt: new Date(2023, 0, 21, 9),
        type: "h",
        sold: 53,
        revenue: 834.02
      },
      {
        soldAt: new Date(2023, 0, 21, 10),
        type: "h",
        sold: 79,
        revenue: 743.95
      },
      {
        soldAt: new Date(2023, 0, 21, 11),
        type: "h",
        sold: 86,
        revenue: 159.01
      },
      {
        soldAt: new Date(2023, 0, 21, 12),
        type: "h",
        sold: 97,
        revenue: 328.72
      },
      {
        soldAt: new Date(2023, 0, 21, 13),
        type: "h",
        sold: 15,
        revenue: 588.38
      },
      {
        soldAt: new Date(2023, 0, 21, 14),
        type: "h",
        sold: 39,
        revenue: 39.25
      },
      {
        soldAt: new Date(2023, 0, 21, 15),
        type: "h",
        sold: 39,
        revenue: 963.19
      },
      {
        soldAt: new Date(2023, 0, 21, 16),
        type: "h",
        sold: 58,
        revenue: 502.65
      },
      {
        soldAt: new Date(2023, 0, 21, 17),
        type: "h",
        sold: 100,
        revenue: 464.3
      },
      {
        soldAt: new Date(2023, 0, 21, 18),
        type: "h",
        sold: 64,
        revenue: 743.53
      },
      {
        soldAt: new Date(2023, 0, 21, 19),
        type: "h",
        sold: 44,
        revenue: 459.22
      },
      {
        soldAt: new Date(2023, 0, 21, 20),
        type: "h",
        sold: 28,
        revenue: 320.57
      },
      {
        soldAt: new Date(2023, 0, 21, 21),
        type: "h",
        sold: 12,
        revenue: 945.35
      }
    ]
  },
  {
    shopAccountId: 2,
    data: null
  },
  {
    shopAccountId: 3,
    data: null
  },
  {
    shopAccountId: 4,
    data: null
  },
  {
    shopAccountId: 5,
    data: null
  }
];

export default sales;
