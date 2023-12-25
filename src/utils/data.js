export const lotteryData = [
  {
    category: "Forny",
    title: "Forny dine Lodsedser",
    subtitle: "Vælg de numre, du gerne vil forny, og læg dem i indkøbskurven",
    tickets: Array.from({ length: 3 }, (_, index) => ({
      name: `Forny lodseddel ${index + 1}`,
      number: `${String(Math.floor(Math.random() * 1000)).padStart(
        3,
        "0"
      )}.${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
    })),
  },
  {
    category: "Mine Lodsedser",
    title: "Mine Lodsedser",
    subtitle: "Vælg dine heldige tal",
    tickets: Array.from({ length: 4 }, (_, index) => ({
      name: `Lodseddel ${index + 1}`,
      number: `${String(Math.floor(Math.random() * 1000)).padStart(
        3,
        "0"
      )}.${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
    })),
  },
  {
    category: "Gevinster",
    title: "Gevinster",
    subtitle: "Se dine vundne gevinster",
    tickets: Array.from({ length: 4 }, (_, index) => ({
      name: `Gevinstlods ${index + 1}`,
      number: `${String(Math.floor(Math.random() * 1000)).padStart(
        3,
        "0"
      )}.${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
    })),
  },
  {
    category: "Klub Varelotteriet",
    title: "Klub Varelotteriet",
    subtitle: "Støt din klub og vind",
    tickets: Array.from({ length: 3 }, (_, index) => ({
      name: `Klublods ${index + 1}`,
      number: `${String(Math.floor(Math.random() * 1000)).padStart(
        3,
        "0"
      )}.${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
    })),
  },
  {
    category: "Mine oplysninger",
    title: "Mine oplysninger",
    subtitle: "Se og rediger dine oplysninger",
    tickets: Array.from({ length: 3 }, (_, index) => ({
      name: `Oplysningslods ${index + 1}`,
      number: `${String(Math.floor(Math.random() * 1000)).padStart(
        3,
        "0"
      )}.${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
    })),
  },
];
