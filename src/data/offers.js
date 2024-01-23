// interfejs:
//
// offers = [ NULL -> brak
//   shopAccountId: int,
//   data: [
//     {
//       name: string,
//       sold: int,
//       revenue: double,
//       views: int
//     }
//   ]
// ]

const offers = [
  {
    shopAccountId: 1,
    data: [
      {
        name: "Suszarka do włosów Philips 2600W",
        sold: 12,
        revenue: 2399.88,
        views: 4123,
        photo: "suszarka.jpg"
      },
      {
        name: "Żelazko parowe Bosch",
        sold: 132,
        revenue: 34318.68,
        views: 3948,
        photo: "zelazko.jpg"
      },
      {
        name: "Teleskop Celestron",
        sold: 55,
        revenue: 76999.45,
        views: 5849,
        photo: "teleskop.jpg"
      },
      {
        name: "Patelnia żeliwna Tefal",
        sold: 43,
        revenue: 4299.57,
        views: 1113,
        photo: "patelnia.jpg"
      },
      {
        name: "Garnek Kamill",
        sold: 21,
        revenue: 1463.49,
        views: 5923,
        photo: "garnek.jpg"
      },
      {
        name: "Wieszak Kesper",
        sold: 17,
        revenue: 271.83,
        views: 2942,
        photo: "wieszak.jpg"
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
    data: [
      {
        name: "Monitor Samsung S24F350",
        sold: 19,
        revenue: 11399.81,
        views: 5938,
        photo: "monitor.jpg"
      },
      {
        name: "Telewizor Blaupunkt BL42",
        sold: 112,
        revenue: 223998.88,
        views: 7827,
        photo: "telewizor.jpg"
      },
      {
        name: "Klawiatura Logitech MX420",
        sold: 51,
        revenue: 21455.19,
        views: 7292,
        photo: "klawiatura.jpg"
      },
      {
        name: "Radio Sony Super12",
        sold: 37,
        revenue: 6553.42,
        views: 3857,
        photo: "radio.jpg"
      },
      {
        name: "Głośnik JBL Sound+",
        sold: 58,
        revenue: 4638.84,
        views: 4712,
        photo: "glosnik.jpg"
      },
      {
        name: "Słuchawki Beats PDW 11",
        sold: 12,
        revenue: 9959.88,
        views: 3192,
        photo: "sluchawki.jpg"
      }
    ]
  },
  {
    shopAccountId: 5,
    data: null
  }
];

export default offers;
