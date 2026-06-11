import { Moment } from '../types';

export const HIGHLIGHT_MOMENTS: Moment[] = [
  {
    id: 'm1',
    match: 'Spain 3 - 2 France (AET)',
    stage: 'The Final — East Rutherford, NJ',
    venue: 'MetLife Stadium • Attendance: 82,566',
    category: 'Final Drama',
    headline: 'Yamal’s 119th-Minute Curler Crowned Spain World Champions',
    heroImg: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    commentary: 'With penalties looming at 2-2, the 19-year-old took down a 50-yard diagonal pass, slipped past Hernandez on the edge of the box, and curled an unstoppable 25-yard dipping strike into the postage stamp.',
    xGStats: '0.04 xG strike probability | 108 km/h shot speed',
    trajectory: {
      start: [18, 70],
      control: [45, 45],
      end: [88, 25],
      label: 'Yamal 25-yard dipping screamer'
    },
    events: [
      { minute: "32'", type: 'GOAL', detail: 'Mbappé blistering counter (FRA 1-0)' },
      { minute: "54'", type: 'GOAL', detail: 'Pedri edge-of-box drive (ESP 1-1)' },
      { minute: "81'", type: 'GOAL', detail: 'Mbappé penalty (FRA 2-1)' },
      { minute: "90+2'", type: 'GOAL', detail: 'Rodri backpost header (ESP 2-2)' },
      { minute: "119'", type: 'MOMENT', detail: 'Yamal fairy-tale tournament decider (ESP 3-2)' }
    ]
  },
  {
    id: 'm2',
    match: 'Brazil 4 - 3 England',
    stage: 'Quarterfinal — Dallas, TX',
    venue: 'AT&T Stadium • Attendance: 92,967',
    category: '10-Goal Thriller',
    headline: 'Seven-Goal Masterpiece Under the Retractable Roof',
    heroImg: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80',
    commentary: 'End-to-end warfare in Texas. Vinicius and Bellingham traded world-class solo goals before Endrick tapped in the 98th-minute winner off the crossbar.',
    xGStats: 'Combined 5.82 Expected Goals | 38 shots on target',
    trajectory: {
      start: [30, 80],
      control: [60, 50],
      end: [92, 48],
      label: 'Endrick 98th minute rebound'
    },
    events: [
      { minute: "14'", type: 'GOAL', detail: 'Vinícius outside-boot flick' },
      { minute: "28'", type: 'GOAL', detail: 'Kane penalty' },
      { minute: "61'", type: 'GOAL', detail: 'Bellingham diving header' },
      { minute: "77'", type: 'GOAL', detail: 'Rodrygo curler' },
      { minute: "90+8'", type: 'MOMENT', detail: 'Endrick winner at the death' }
    ]
  },
  {
    id: 'm3',
    match: 'USA 2 - 1 Uruguay',
    stage: 'Round of 16 — Atlanta, GA',
    venue: 'Mercedes-Benz Stadium • Attendance: 73,495',
    category: 'Giant Killers',
    headline: 'Captain America Sends 73,000 in Atlanta Into Rapture',
    heroImg: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    commentary: 'Down a goal at halftime against Bielsa’s relentless press, the United States mounted a gritty second-half comeback capped by Pulisic’s stoppage-time volley.',
    xGStats: 'Uruguay 1.84 xG vs USA 1.12 xG | 14 saves combined',
    trajectory: {
      start: [25, 30],
      control: [55, 60],
      end: [85, 45],
      label: 'Pulisic 94th minute volley'
    },
    events: [
      { minute: "22'", type: 'GOAL', detail: 'Darwin Núñez header' },
      { minute: "68'", type: 'GOAL', detail: 'Folarin Balogun equalizer' },
      { minute: "90+4'", type: 'MOMENT', detail: 'Pulisic volley sends USMNT through' }
    ]
  },
  {
    id: 'm4',
    match: 'Mbappé vs Pelé All-Time Record',
    stage: 'Historical Milestone — Los Angeles, CA',
    venue: 'SoFi Stadium • Historical Record',
    category: 'Record Breakers',
    headline: 'Mbappé Surpasses Pelé with 16 Career World Cup Goals',
    heroImg: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80',
    commentary: 'At just 27 years old, Kylian Mbappé officially became the youngest player to cross 16 career finals goals, eclipsing Pelé and chasing Miroslav Klose’s all-time crown.',
    xGStats: '16 goals across 21 World Cup matches | 0.81 xG/90',
    trajectory: {
      start: [10, 50],
      control: [50, 20],
      end: [90, 50],
      label: 'Record-shattering career trajectory'
    },
    events: [
      { minute: "2018", type: 'MILESTONE', detail: '4 goals (including Final)' },
      { minute: "2022", type: 'MILESTONE', detail: '8 goals (Final hat-trick)' },
      { minute: "2026", type: 'RECORD', detail: '4+ goals to surpass Pelé (16 total)' }
    ]
  }
];
