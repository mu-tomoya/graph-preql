export interface Precure {
  id: number;
  name: string;
  cure_name: string;
  series: string[];
  item: string[];
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
}
