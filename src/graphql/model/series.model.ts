export interface Series {
  no: number;
  id: string;
  title: string;
  start: string;
  end: string | null;
  total: number | null;
  producer: string[];
  director: string[];
  writer: string[];
  characterdesign: string;
  music: string[];
  youtube_id: string;
}
