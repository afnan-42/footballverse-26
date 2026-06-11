export interface Wallpaper {
  id: string;
  name: string;
  location: string;
  url: string;
  tag: string;
}

export interface PlayerStats {
  goals: number;
  assists: number;
  xg: number;
  speed: string;
  distance: string;
  rating: number;
}

export interface RadarAttributes {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

export interface Player {
  id: string;
  name: string;
  nation: string;
  nationCode: string;
  flag: string;
  club: string;
  pos: string;
  role: string;
  number: number;
  featuredStat: string;
  featuredLabel: string;
  patternType: 'stripes' | 'chevrons' | 'sash' | 'diamonds';
  primaryColor: string;
  accentColor: string;
  bgPhoto: string;
  actionShot: string;
  stats: PlayerStats;
  radar: RadarAttributes;
  bio: string;
  moments: string[];
}

export interface MomentEvent {
  minute: string;
  type: string;
  detail: string;
}

export interface Moment {
  id: string;
  match: string;
  stage: string;
  venue: string;
  category: 'Final Drama' | 'Record Breakers' | '10-Goal Thriller' | 'Giant Killers';
  headline: string;
  heroImg: string;
  commentary: string;
  xGStats: string;
  trajectory: {
    start: [number, number];
    control: [number, number];
    end: [number, number];
    label: string;
  };
  events: MomentEvent[];
}

export interface KnockoutMatch {
  stage: string;
  home: { team: string; code: string; score: number; pens?: number };
  away: { team: string; code: string; score: number; pens?: number };
  venue: string;
  date: string;
  attendance: string;
  summary: string;
}
