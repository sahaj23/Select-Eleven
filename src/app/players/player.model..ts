export interface Player {
  id: string;
  name: string;
  description: string;
  position: string;
  runs?: string;
  matches: string;
  wickets?: string;
  economyRate?: string;
  battingStrikeRate?: string;
  bowlingStrikeRate?: string;
  imagePath: string;
  detailImagePath?: string;
  strength?: string;
  weakness?: string;
  suitability?: string;
  teamImagePath?: string;
}
