export interface Match {
  happened: boolean;
  id: string;
  bcciImagePath: string;
  oppositionImagePath: string;
  stadiumImagePath: string;
  match: string;
  series: string;
  opposition: string;
  venue: string;
  date: string;
  time?: string;
  umpires?: string;
  winner?: string;
  toss?: string;
}
