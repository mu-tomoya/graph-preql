import { Config } from "apollo-server-micro";
import precure from "@/data/precure.json";
import series from "@/data/series.json";
import song from "@/data/songs.json";
import { Precure } from "./model/precure.model";
import { Series } from "./model/series.model";
import { Song } from "./model/song.model";

const precures: Precure[] = precure;
const serieses: Series[] = series;
const songs: Song[] = song;
export const resolvers: Config["resolvers"] = {
  Query: {
    precureAllStars: (
      _,
      {
        first: first = null,
        last: last = null,
        color: color,
        age: age,
        before: before = "3000-02-01",
        after: after = "2004-02-01",
      }: {
        first: number | null;
        last: number | null;
        color?:
          | "black"
          | "white"
          | "pink"
          | "blue"
          | "yellow"
          | "purple"
          | "green"
          | "red";
        age?: {
          eq?: number;
          lt?: number;
          gt?: number | null;
        };
        before: string;
        after: string;
      }
    ): Precure[] => {
      let result = precures;
      if (after !== "2004-02-01" || before !== "3000-02-01") {
        const before_date = new Date(before);
        const after_date = new Date(after);
        result = result.filter((precure) => {
          const date = new Date(precure.debut);
          return after_date <= date && date <= before_date;
        });
      }
      if (age && (age.eq || age.lt || age.gt || age.eq === null)) {
        result = result.filter((precure) => {
          if (age.eq || age.eq === null) {
            return age.eq === precure.age;
          } else {
            if (!age.gt) {
              age.gt = 0;
            }
            if (!age.lt) {
              age.lt = 100;
            }
            if (precure.age) {
              return age.gt <= precure.age && precure.age <= age.lt;
            }
          }
        });
      }
      if (color)
        result = result.filter((precure) => {
          return color === precure.color;
        });
      if (first) {
        result = result.slice(0, first);
      }
      if (last) {
        result = result.slice(-1 * last);
      }
      return result;
    },
    precure: (
      _,
      { id: id, name: name, cure_name: cure_name, voice: voice }
    ): Precure => {
      let result;
      if (!id && !name && !cure_name && !voice) {
        result = null;
      } else {
        if (id) {
          result = precures.find((precure) => id == precure.id);
        } else if (name) {
          result = precures.find((precure) => name == precure.name);
        } else if (cure_name) {
          result = precures.find((precure) => cure_name == precure.cure_name);
        } else if (voice) {
          result = precures.find((precure) => voice === precure.voice);
        }
      }
      if (!result) {
        throw Error;
      }

      return result;
    },

    seriesAll(
      _,
      {
        first,
        last,
        before = "3000-02-01",
        after = "2004-02-01",
        eq,
        lt = 60,
        gt = 0,
      }: {
        first?: number;
        last?: number;
        before?: string;
        after?: string;
        eq?: number;
        lt?: number;
        gt?: number;
      }
    ): Series[] {
      let result = serieses;
      if (after !== "2004-02-01" || before !== "3000-02-01") {
        const before_date = new Date(before);
        const after_date = new Date(after);
        result = result.filter((series) => {
          const date = new Date(series.start);
          return after_date <= date && date <= before_date;
        });
      }
      if (eq || lt !== 60 || gt !== 0) {
        result = result.filter((series) => {
          if (!series.total) {
            return false;
          }
          if (eq) {
            return eq === series.total;
          } else {
            return gt <= series.total && series.total <= lt;
          }
        });
      }
      if (first) {
        result = result.slice(0, first);
      }
      if (last) {
        result = result.slice(-1 * last);
      }
      return result;
    },

    seriesById(_, { id: id }): Series {
      const result = serieses.find((series) => id === series.id);
      if (!result) {
        throw Error;
      }
      return result;
    },

    songAll(
      _,
      {
        type: type,
        term: term,
        series: series,
        first: first,
        last: last,
      }: {
        type: string;
        term: string;
        series: string;
        first?: number;
        last?: number;
      }
    ): Song[] {
      let result = songs;
      if (type) {
        result = result.filter((song) => {
          return song.type === type;
        });
      }
      if (term) {
        result = result.filter((song) => {
          return song.term === term;
        });
      }
      if (series) {
        result = result.filter((song) => {
          return song.series == series;
        });
      }
      if (first) {
        result = result.slice(0, first);
      }
      if (last) {
        result = result.slice(-1 * last);
      }

      if (!result) {
        throw Error;
      }
      return result;
    },
    songById(_, { id: id }): Song {
      const result = songs.find((song) => id === song.id);
      if (!result) {
        throw Error;
      }
      return result;
    },
  },
};
