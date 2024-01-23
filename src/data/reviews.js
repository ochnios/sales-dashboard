// interfejs:
//
// reviews = [
//   shopAccountId: int,
//   data: [ NULL -> brak opinii
//     {
//       postedAt: date,
//       comment: string?,
//       reviewerName: string,
//       rating: 'negative' | 'positive',
//     }
//   ]
// ]

reviews = [
  {
    shopAccountId: 1,
    data: [
      {
        postedAt: new Date(2020, 1, 13),
        comment: "Super produkt bardzo fajny",
        reviewerName: "Jan",
        rating: "positive"
      },
      {
        postedAt: new Date(2007, 3, 11),
        comment: "Słabo nie polecam",
        reviewerName: "Juan",
        rating: "negative"
      },
      {
        postedAt: new Date(2013, 5, 7),
        comment: "OK",
        reviewerName: "Maria",
        rating: "positive"
      },
      {
        postedAt: new Date(2017, 4, 28),
        comment: "Świetna obsługa i towar",
        reviewerName: "Grzegorz",
        rating: "positive"
      },
      {
        postedAt: new Date(2021, 2, 1),
        comment: "Polecam serdecznie pozdrawiam",
        reviewerName: "Pablo",
        rating: "positive"
      },
      {
        postedAt: new Date(2022, 5, 11),
        comment:
          "Trasownik solidny, spartańska prostota wykonania, na plus również minimalna liczba linii i znaków w instrukcji",
        reviewerName: "Andrzej",
        rating: "positive"
      },
      {
        postedAt: new Date(2020, 1, 15),
        comment: "co to wgl jest",
        reviewerName: "Norbert",
        rating: "negative"
      },
      {
        postedAt: new Date(2019, 11, 11),
        comment: "Wiosla polamane... chinski badziew",
        reviewerName: "Jacek",
        rating: "negative"
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
        postedAt: new Date(2010, 1, 14),
        comment: "Fajne polecam ale troche drogo...",
        reviewerName: "Janusz",
        rating: "positive"
      },
      {
        postedAt: new Date(2008, 4, 12),
        comment: "STANOWCZO ODRADZAM ,HAMSKA  OBSUGA",
        reviewerName: "Marian",
        rating: "negative"
      },
      {
        postedAt: new Date(2017, 1, 2),
        comment: "Super traktowanie klienta, życzliwa i zawsze pomocna obsługa",
        reviewerName: "Julia",
        rating: "positive"
      },
      {
        postedAt: new Date(2017, 5, 29),
        comment: "Obsługa i czas dostawy TRAGEDIA, nigdy więcej",
        reviewerName: "Daniel",
        rating: "negative"
      },
      {
        postedAt: new Date(2017, 4, 28),
        comment: "Kajak przyszedl dziurawy...",
        reviewerName: "Jacek",
        rating: "negative"
      },
      {
        postedAt: new Date(2021, 10, 22),
        comment:
          "to jest niemozliwe.. zwrot środków powinienem dostać miesiąc temu",
        reviewerName: "Paweł",
        rating: "negative"
      },
      {
        postedAt: new Date(2020, 1, 15),
        comment: "masakra dziwne ze ktos tu jeszcze kupuje",
        reviewerName: "Szymon",
        rating: "negative"
      }
    ]
  },
  {
    shopAccountId: 5,
    data: null
  }
];

export default reviews;
