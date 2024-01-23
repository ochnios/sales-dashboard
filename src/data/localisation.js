// interfejs:
//
// localisation: [
//   {
//     name: string (id języka)
//     strings: array<string>
//   }
// ]

const localisation = [
  {
    name: "en",
    strings: {
      languageLabel: "Language",
      switchLangTitle: "Toggle app language",
      themeLabel: "Theme",
      switchThemeTitle: "Toggle app theme",
      storeLabel: "Store",
      selectStoreMessage: "Login to select a store",
      selectStorePlaceholder: "Select store...",
      theme: {
        dark: "Dark",
        light: "Light"
      },
      dashboardHeader: "Sales dashboard",
      dashboardLink: "Sales dashboard",
      loginHeader: "Sign in",
      settingsHeader: "Settings",
      orders: {
        toPay: "Not paid",
        toSend: "Not sent",
        returns: "Returns"
      },
      orderHeader: "Orders",
      offerRankingHeader: "Offer ranking",
      bestSellingFilter: "Best-selling",
      worstSellingFilter: "Worst-selling",
      soldLabel: "Sold",
      revenueLabel: "Revenue",
      noData: "No data available.",
      qualityHeader: "Sales quality",
      lowestAspects: "Lowest rated aspects",
      qualityRating: {
        first: "Unacceptable",
        second: "Requires improvement",
        third: "Neutral",
        fourth: "Decent",
        fifth: "Amazing"
      },
      qualityAspects: {
        rules: "Rule compliance",
        orders: "Order execution",
        service: "Service quality",
        reviews: "Customer reviews",
        offers: "Offer appeal"
      },
      tipHeader: "Sale tips",
      tipText: "Sale tips are currently unavailable",
      reviewHeader: "Customer reviews",
      reviewFilter: {
        all: "All",
        positive: "Positive",
        negative: "Negative"
      },
      reviewType: {
        positive: "Positive",
        negative: "Negative"
      },
      plotHeader: "Sales report",
      plotDataFilter: {
        revenue: "Revenue",
        amount: "Amount"
      },
      plotDateFilter: {
        today: "Today",
        lastWeek: "Last week",
        thisWeek: "This week"
      },
      plotTypeFilter: {
        line: "Line",
        bar: "Bar"
      },
      plotPrevInterv: "Display data from previous timespan",
      plotLegend: {
        today: "Today",
        yesterday: "Yesterday",
        now: "Now",
        prev: "Previously"
      },
      dayAbbr: {
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
        sun: "Sun"
      },
      guest: "Guest",
      loginButton: "Sign in",
      loginLabel: "Username",
      passwordLabel: "Password",
      loginError: "Invalid user credentials",
      userHeader: "User settings",
      logoutButton: "Sign out",
      storeSelectLabel: "Select store to view associated data.",
      viewsLabel: "Views",
      placeholderLabel: "This is where the actual page content should be."
    }
  },
  {
    name: "pl",
    strings: {
      languageLabel: "Język",
      switchLangTitle: "Przełącz język aplikacji",
      themeLabel: "Motyw",
      switchThemeTitle: "Przełącz motyw aplikacji",
      storeLabel: "Sklep",
      theme: {
        dark: "Ciemny",
        light: "Jasny"
      },
      dashboardHeader: "Panel sprzedawcy",
      dashboardLink: "Panel sprzedawcy",
      loginHeader: "Zaloguj się",
      settingsHeader: "Ustawienia",
      selectStoreMessage: "Zaloguj się, aby wybrać sklep",
      selectStorePlaceholder: "Wybierz sklep...",
      orderHeader: "Zamówienia",
      orders: {
        toPay: "Nieopłacone",
        toSend: "Niewysłane",
        returns: "Zwroty"
      },
      offerRankingHeader: "Ranking ofert",
      bestSellingFilter: "Najczęściej kupowane",
      worstSellingFilter: "Najrzadziej kupowane",
      soldLabel: "Sprzedano",
      revenueLabel: "Obrót",
      noData: "Brak dostępnych danych.",
      qualityHeader: "Jakość sprzedaży",
      lowestAspects: "Najgorzej oceniane aspekty",
      qualityRating: {
        first: "Nieakceptowalny",
        second: "Wymaga poprawy",
        third: "Neutralny",
        fourth: "Dobry",
        fifth: "Super"
      },
      qualityAspects: {
        rules: "Przestrzeganie regulaminu",
        orders: "Realizacja zamówień",
        service: "Obsługa klientów",
        reviews: "Oceny od kupujących",
        offers: "Atrakcyjność oferty"
      },
      tipHeader: "Porady sprzedażowe",
      tipText: "Aktualnie brak porad dotyczących sprzedaży",
      reviewHeader: "Opinie kupujących",
      reviewFilter: {
        all: "Wszystkie",
        positive: "Pozytywne",
        negative: "Negatywne"
      },
      reviewType: {
        positive: "Pozytywna",
        negative: "Negatywna"
      },
      plotHeader: "Wykres sprzedaży",
      plotDataFilter: {
        revenue: "Obrót",
        amount: "Ilość"
      },
      plotDateFilter: {
        today: "Dziś",
        lastWeek: "Poprzedni tydzień",
        thisWeek: "Ten tydzień"
      },
      plotTypeFilter: {
        line: "Liniowy",
        bar: "Słupkowy"
      },
      plotPrevInterv: "Pokaż dane z poprzedniego okresu",
      plotLegend: {
        today: "Dziś",
        yesterday: "Wczoraj",
        now: "Teraz",
        prev: "Poprzednio"
      },
      dayAbbr: {
        mon: "Pon",
        tue: "Wt",
        wed: "Śr",
        thu: "Czw",
        fri: "Pi",
        sat: "Sob",
        sun: "Nie"
      },
      guest: "Gość",
      loginButton: "Zaloguj",
      loginLabel: "Nazwa użytkownika",
      passwordLabel: "Hasło",
      loginError: "Nieprawidłowe dane logowania",
      userHeader: "Panel użytkownika",
      logoutButton: "Wyloguj",
      storeSelectLabel: "Wybierz sklep, aby wyświetlić powiązane dane.",
      viewsLabel: "Wyświetlenia",
      placeholderLabel: "Tutaj powinna znajdować się właściwa zawartość strony."
    }
  }
];

export default localisation;
