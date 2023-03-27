import { gql, Config } from "apollo-server-micro";

export const typeDefs: Config["typeDefs"] = `
enum Type {
    """"オープニング"""
    op
    """エンディング"""
    ed
}
enum Term {
    """全期間"""
    all
    """前期"""
    first
    """後期"""
    second
}

type Special {
  solo: [String]
  team: [String]
}
enum Color {
      """黒系統"""
      black
      """白系統"""
      white
      """ピンク系統"""
      pink
      """青系統"""
      blue
      """黄系統"""
      yellow
      """紫系統"""
      purple
      """赤系統"""
      red
      """緑系統"""
      green
      """金"""
      gold
}

input Age {
      """等しい"""
      eq: Int
    
      """以上"""
      gt: Int
    
      """以下"""
      lt: Int
}
    type Precure {
      """変身後口上"""
      after_prologue: String
    
      """満年齢"""
      age: Float
    
      """変身前口上"""
      before_prologue: String
    
      """誕生日"""
      birthday: String
    
      """プリキュアカラー"""
      color: String!
    
      """プリキュア名"""
      cure_name: String!
    
      """プリキュアチームとしての加入した放送日"""
      debut: String!
    
      """メイン妖精"""
      fairy: [String!]
    
      """プリキュアID（参加順）"""
      id: ID!
    
      """変身アイテム"""
      item: String!
    
      """名前（変身前）"""
      name: String!
    
      """出演シリーズ"""
      series: String!

      """出演シリーズid"""
      series_id: String!
    
      """必殺技"""
      special: Special
    
      """声優"""
      voice: String!
    
      """声優の生年月日。生年不明は9999年としてある。"""
      voice_birthday: String!

      """Youtubeの公式変身動画の動画id"""
      youtube_id:String

    }
    type Series {
      """キャラクターデザイン"""
      characterdesign: String!
    
      """シリーズディレクター"""
      director: [String!]!
    
      """放送終了日"""
      end: String
    
      """作品番号"""
      id: ID!
    
      """音楽"""
      music: [String!]!
    
      """東映アニメーションプロデューサー"""
      producer: [String!]!
    
      """放送開始日"""
      start: String!
    
      """作品名"""
      title: String!
    
      """全話数"""
      total: Int
    
      """シリーズ構成"""
      writer: [String!]!

      """Youtubeの第一話のid"""
      youtube_id:String
    }
    
    type Song {
      """編曲"""
      arrange: [String!]!
    
      """ID"""
      id: ID!
    
      """作詞"""
      lyric: [String!]!
    
      """作曲"""
      music: [String!]!
    
      """主題歌シリーズ"""
      series: String!

      """主題歌シリーズID"""
      series_id:String!
    
      """放送期間、all:全期間、first:前期、second:後期"""
      term: String!
    
      """主題歌タイトル"""
      title: String!
    
      """op:オープニング、ed:エンディング"""
      type: String!
    
      """プリキュアシンガー"""
      vocal: [String!]!
    }
    type Special {
      """個人必殺技"""
      solo: [String!]!
    
      """チーム必殺技"""
      team: [String!]!
    }
    
    input Total {
      """等しい"""
      eq: Int
    
      """以上"""
      gt: Int
    
      """以下"""
      lt: Int
    }
type Query {
      """プリキュアオールスターズから検索（エコー、モフルン、特別仕様のプリキュアは除く）"""
      precureAllStars(
        """シリーズ名"""
        series:String
        """以後"""
        after: String = "2004-01-01"
        """以前"""
        before: String = "3000-12-01"

        """プリキュアの年齢(普段の姿),不明はnull"""
        age: Age

        """
        プリキュアカラー
        """
        color: Color
        """最初から指定の数検索"""
        first: Int = null
        """最後から指定の数検索"""
        last: Int = null
      ): [Precure!]

      """プリキュア検索"""
      precure(
        """プリキュア名"""
        cure_name: String
    
        """ID"""
        id: Int
    
        """名前（普段の名前）"""
        name: String
    
        """声優"""
        voice: String
      ): Precure

  """プリキュアシリーズの検索"""
  seriesAll(
    """以後"""
    after: String = "2004-01-01"
    """以前"""
    before: String = "3000-12-01"
    """最初から指定の数検索"""
    first: Int = null
    """最後から指定の数検索"""
    last: Int = null
    """合計話数（現行作品は不明のためnull）"""
    total: Total
  ): [Series!]

  """IDからシリーズを検索"""
  seriesById(id: Int!): Series!

  """IDから主題歌を検索"""
  songById(id: Int!): Song!

  """プリキュア主題歌の検索"""
  songAll(
    """最初から指定の数検索"""
    first: Int
    """最後から指定の数検索"""
    last: Int

    """作品名"""
    series: String

    """放送機関"""
    term: Term

    """オープニング、エンディング"""
    type: Type
  ): [Song!]

}
`;
