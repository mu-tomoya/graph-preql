export interface Series {
  id: number;
  title: string;
  start: string;
  end: string | null;
  total: number | null;
  producer: string[];
  director: string[];
  writer: string[];
  characterdesign: string;
  music: string[];
}
