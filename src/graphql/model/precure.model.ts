export interface Precure {
  no: number;
  id: string;
  name: string;
  cure_name: string;
  series: string;
  series_id: string;
  item: string;
  color: string;
  before_prologue: string | null;
  after_prologue: string | null;
  birthday: string | null;
  age: number | null;
  debut: string;
  voice: string;
  voice_birthday: string;
  special: {
    solo: string[];
    team: string[];
  };
  fairy: string[];
  youtube_id: string | null;
  description: string | null;
}
