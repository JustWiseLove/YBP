const STORE = {
  sites: [
    {
      id: "shockley",
      name: "Shockley",
      unit: "g/L",
      moderate: 64.0,
      critical: 70.0
    },
    {
      id: "darkrun",
      name: "Dark Run",
      unit: "mg/L",
      moderate: 18.0,
      critical: 30.0
    }
  ],

  readings: [
    {
      id: "r001",
      siteId: "shockley",
      date: "2026-08-10",
      clarity: 0.14,
      unit: "g/L",
      level: 49.3,
      ts: "2026-08-10T09:30:00.000Z"
    },
    {
      id: "r002",
      siteId: "darkrun",
      date: "2026-08-10",
      clarity: 18,
      unit: "mg/L",
      level: 29.9,
      ts: "2026-08-10T09:30:00.000Z"
    },
    {
      id: "r003",
      siteId: "shockley",
      date: "2026-08-10",
      clarity: 0.14,
      unit: "g/L",
      level: 49.2,
      ts: "2026-08-10T13:30:00.000Z"
    },
    {
      id: "r004",
      siteId: "darkrun",
      date: "2026-08-10",
      clarity: 18,
      unit: "mg/L",
      level: 27.9,
      ts: "2026-08-10T13:30:00.000Z"
    },
    {
      id: "r005",
      siteId: "shockley",
      date: "2026-08-11",
      clarity: 0.13,
      unit: "g/L",
      level: 49.2,
      ts: "2026-08-11T09:30:00.000Z"
    },
    {
      id: "r006",
      siteId: "darkrun",
      date: "2026-08-11",
      clarity: 17,
      unit: "mg/L",
      level: 29.4,
      ts: "2026-08-11T09:30:00.000Z"
    }
  ]
};
