import { Player } from '../types';

export const PLAYERS: Player[] = [
  {
    id: 'mbappe',
    name: 'Kylian Mbappé',
    nation: 'France',
    nationCode: 'FRA',
    flag: '🇫🇷',
    club: 'Real Madrid',
    pos: 'FWD',
    role: 'Talisman Captain',
    number: 10,
    featuredStat: '8 GOALS',
    featuredLabel: 'Tournament Golden Boot',
    patternType: 'stripes',
    primaryColor: '#002654',
    accentColor: '#ED2939',
    bgPhoto: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    actionShot: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
    stats: {
      goals: 8,
      assists: 3,
      xg: 7.42,
      speed: '37.8 km/h',
      distance: '68.4 km',
      rating: 8.84
    },
    radar: {
      pace: 98,
      shooting: 93,
      passing: 84,
      dribbling: 94,
      defending: 40,
      physical: 81
    },
    bio: 'Captain Mbappé delivered an imperious showcase across North American soil, blazing past low blocks with record-setting sprint telemetry.',
    moments: [
      '118th-minute thunderbolt equalizer in the semifinal',
      'Golden Boot seal with 8 knockout & group goals'
    ]
  },
  {
    id: 'vinicius',
    name: 'Vinícius Júnior',
    nation: 'Brazil',
    nationCode: 'BRA',
    flag: '🇧🇷',
    club: 'Real Madrid',
    pos: 'LW',
    role: 'Samba Orchestrator',
    number: 7,
    featuredStat: '47 TAKEDOWNS',
    featuredLabel: 'Most Successful Dribbles',
    patternType: 'diamonds',
    primaryColor: '#FEDF00',
    accentColor: '#009739',
    bgPhoto: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    actionShot: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80',
    stats: {
      goals: 5,
      assists: 6,
      xg: 5.12,
      speed: '36.9 km/h',
      distance: '64.1 km',
      rating: 8.76
    },
    radar: {
      pace: 96,
      shooting: 86,
      passing: 88,
      dribbling: 97,
      defending: 42,
      physical: 76
    },
    bio: 'Tormenting fullbacks from Guadalajara to East Rutherford with unmatched flair and lethal cutback precision.',
    moments: [
      'Nutmeg and trivela assist in the quarterfinals',
      'Man of the Match masterclass vs Portugal'
    ]
  },
  {
    id: 'bellingham',
    name: 'Jude Bellingham',
    nation: 'England',
    nationCode: 'ENG',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    club: 'Real Madrid',
    pos: 'MID',
    role: 'Box-to-Box Engine',
    number: 10,
    featuredStat: '81.4 KM',
    featuredLabel: 'Tournament Distance Covered',
    patternType: 'sash',
    primaryColor: '#C8102E',
    accentColor: '#012169',
    bgPhoto: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80',
    actionShot: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    stats: {
      goals: 4,
      assists: 4,
      xg: 4.28,
      speed: '34.2 km/h',
      distance: '81.4 km',
      rating: 8.68
    },
    radar: {
      pace: 84,
      shooting: 85,
      passing: 91,
      dribbling: 89,
      defending: 82,
      physical: 90
    },
    bio: 'Commanded the Three Lions midfield with aerial dominance, clutch tackles, and box arrivals when the game broke open.',
    moments: [
      'Stoppage-time overhead kick vs Mexico in Dallas',
      'Dual assists in the quarterfinal extra-time thriller'
    ]
  },
  {
    id: 'yamal',
    name: 'Lamine Yamal',
    nation: 'Spain',
    nationCode: 'ESP',
    flag: '🇪🇸',
    club: 'FC Barcelona',
    pos: 'RW',
    role: 'Golden Boy Phenomenon',
    number: 19,
    featuredStat: '19 YRS',
    featuredLabel: 'Best Young Player Trophy',
    patternType: 'chevrons',
    primaryColor: '#AA151B',
    accentColor: '#F1BF00',
    bgPhoto: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80',
    actionShot: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80',
    stats: {
      goals: 4,
      assists: 7,
      xg: 3.91,
      speed: '35.4 km/h',
      distance: '62.7 km',
      rating: 8.91
    },
    radar: {
      pace: 92,
      shooting: 85,
      passing: 94,
      dribbling: 96,
      defending: 38,
      physical: 68
    },
    bio: 'The undisputed tournament sensation. Carved open the world’s tightest defenses with laser curveballs into the top bins.',
    moments: [
      '30-yard curler into the top corner at SoFi Stadium',
      'Tournament-high 7 assists across 7 games'
    ]
  },
  {
    id: 'musiala',
    name: 'Jamal Musiala',
    nation: 'Germany',
    nationCode: 'GER',
    flag: '🇩🇪',
    club: 'Bayern Munich',
    pos: 'CAM',
    role: 'Bambi Maestro',
    number: 10,
    featuredStat: '34 KEY PASSES',
    featuredLabel: 'Chances Created In Open Play',
    patternType: 'stripes',
    primaryColor: '#FFFFFF',
    accentColor: '#DD0000',
    bgPhoto: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    actionShot: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
    stats: {
      goals: 4,
      assists: 5,
      xg: 4.15,
      speed: '34.8 km/h',
      distance: '71.2 km',
      rating: 8.65
    },
    radar: {
      pace: 88,
      shooting: 84,
      passing: 90,
      dribbling: 95,
      defending: 55,
      physical: 74
    },
    bio: 'Slithered through compact center parks, turning defenders inside out before sliding through balls with surgical weight.',
    moments: [
      'Solo dribble through three defenders vs Colombia',
      'Two assists inside 8 minutes in the Round of 16'
    ]
  },
  {
    id: 'pulisic',
    name: 'Christian Pulisic',
    nation: 'USA',
    nationCode: 'USA',
    flag: '🇺🇸',
    club: 'AC Milan',
    pos: 'LW',
    role: 'Host Nation Icon',
    number: 10,
    featuredStat: 'QUARTERFINALS',
    featuredLabel: 'Historic Best Finish Since 2002',
    patternType: 'sash',
    primaryColor: '#002868',
    accentColor: '#BF0A30',
    bgPhoto: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    actionShot: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80',
    stats: {
      goals: 3,
      assists: 3,
      xg: 2.85,
      speed: '34.6 km/h',
      distance: '67.8 km',
      rating: 8.35
    },
    radar: {
      pace: 87,
      shooting: 82,
      passing: 83,
      dribbling: 86,
      defending: 52,
      physical: 75
    },
    bio: 'Carried American expectations on home soil, igniting crowds in Seattle, Atlanta, and Dallas with clutch goal contributions.',
    moments: [
      'Match-winner in the 94th minute against Uruguay',
      'Two assists in the Round of 16 triumph'
    ]
  }
];
