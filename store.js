// ============================================================
// YBP PondWatch – Shared Data Store
// ============================================================

const STORE = {
  sites: [
    {
      id: "shockley",
      name: "Shockley",
      unit: "g/L",
      moderate: 64.0,          // water level (inches)
      critical: 70.0,          // water level (inches)
      qualityCritical: 30      // TSS critical in mg/L
    },
    {
      id: "darkrun",
      name: "Dark Run",
      unit: "mg/L",
      moderate: 18.0,
      critical: 30.0,
      qualityCritical: 30      // TSS critical in mg/L
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
      ts: "2026-08-10T09:30:00.000Z"   // 5:30 AM Eastern
    },
    {
      id: "r002",
      siteId: "darkrun",
      date: "2026-08-10",
      clarity: 18,
      unit: "mg/L",
      level: 29.9,
      ts: "2026-08-10T09:30:00.000Z"   // 5:30 AM Eastern
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
    },
    {
      id: "r007",
      siteId: "shockley",
      date: "2026-08-12",
      clarity: 0.14,
      unit: "g/L",
      level: 49.1,
      ts: "2026-08-12T09:30:00.000Z"
    },
    {
      id: "r008",
      siteId: "darkrun",
      date: "2026-08-12",
      clarity: 17,
      unit: "mg/L",
      level: 17.3,
      ts: "2026-08-12T09:30:00.000Z"
    },
    {
      id: "r009",
      siteId: "shockley",
      date: "2026-08-13",
      clarity: 0.13,
      unit: "g/L",
      level: 48.9,
      ts: "2026-08-13T09:30:00.000Z"
    },
    {
      id: "r010",
      siteId: "darkrun",
      date: "2026-08-13",
      clarity: 14,
      unit: "mg/L",
      level: 16.5,
      ts: "2026-08-13T09:30:00.000Z"
    },
     {
      id: "r011",
      siteId: "shockley",
      date: "2026-08-14",
      clarity: 0.14,
      unit: "g/L",
      level: 48.9,
      ts: "2026-08-14T09:30:00.000Z"
    },
    {
      id: "r012",
      siteId: "darkrun",
      date: "2026-08-14",
      clarity: 16,
      unit: "mg/L",
      level: 13.7,
      ts: "2026-08-14T09:30:00.000Z"
    },
    {
      id: "r013",
      siteId: "shockley",
      date: "2026-08-17",
      clarity: 0.13,
      unit: "g/L",
      level: 53.8,
      ts: "2026-08-17T09:30:00.000Z"
    },
    {
      id: "r014",
      siteId: "darkrun",
      date: "2026-08-17",
      clarity: 19,
      unit: "mg/L",
      level: 11.7,
      ts: "2026-08-17T09:30:00.000Z"
    },
    {
      id: "r015",
      siteId: "shockley",
      date: "2026-08-18",
      clarity: 0.12,
      unit: "g/L",
      level: 54.6,
      ts: "2026-08-18T09:30:00.000Z"
    },
    {
      id: "r016",
      siteId: "darkrun",
      date: "2026-08-18",
      clarity: 23,
      unit: "mg/L",
      level: 5.9,
      ts: "2026-08-18T09:30:00.000Z"
    },
        {
      id: "r017",
      siteId: "shockley",
      date: "2026-08-19",
      clarity: 0.13,
      unit: "g/L",
      level: 53.5,
      ts: "2026-08-19T09:30:00.000Z"
    },
    {
      id: "r018",
      siteId: "darkrun",
      date: "2026-08-19",
      clarity: 21,
      unit: "mg/L",
      level: 0,
      ts: "2026-08-19T09:30:00.000Z"
    }
  ]
};
