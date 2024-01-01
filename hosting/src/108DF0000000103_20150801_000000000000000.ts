export const law = {
  tag: "Law",
  attr: {
    Era: "Meiji",
    Year: "08",
    Num: "103",
    LawType: "CabinetOrder",
    Lang: "ja",
    DataInfo: "201202e82k04m01",
    LawTypeNum: "3108103",
    ADYear: "1875",
    PromulgateMonth: "06",
    PromulgateDay: "08",
    Category: "民事",
    EnforcementDate: "2015/08/01",
    EnforcementComment: "",
    Mission: "New",
    RepealType: "",
    RemainInForce: "",
    Status: "CurrentEnforced",
  },
  children: [
    {
      tag: "LawNum",
      attr: {},
      children: ["明治八年太政官布告第百三号"],
    },
    {
      tag: "LawBody",
      attr: {},
      children: [
        {
          tag: "LawTitle",
          attr: {
            Kana: "さいばんじむこころえしょう",
            KanaSeion: "さいはんしむこころえしよう",
            Abbrev: "",
            AbbrevKana: "",
            AbbrKanaSeion: "",
            OldLawTitle: "",
            OldLawTitleKana: "",
            OldLawTitleKanaSeion: "",
          },
          children: ["明治八年太政官布告第百三号（裁判事務心得）　抄"],
        },
        {
          tag: "Preamble",
          attr: {},
          children: [
            {
              tag: "Paragraph",
              attr: {
                Num: "1",
              },
              children: [
                {
                  tag: "ParagraphNum",
                  attr: {},
                  children: [],
                },
                {
                  tag: "ParagraphSentence",
                  attr: {},
                  children: [
                    {
                      tag: "Sentence",
                      attr: {},
                      children: ["今般裁判事務心得左ノ通相定候条此旨布告候事"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag: "MainProvision",
          attr: {},
          children: [
            {
              tag: "Article",
              attr: {
                Num: "3",
              },
              children: [
                {
                  tag: "ArticleTitle",
                  attr: {},
                  children: ["第三条"],
                },
                {
                  tag: "Paragraph",
                  attr: {
                    Num: "1",
                  },
                  children: [
                    {
                      tag: "ParagraphNum",
                      attr: {},
                      children: [],
                    },
                    {
                      tag: "ParagraphSentence",
                      attr: {},
                      children: [
                        {
                          tag: "Sentence",
                          attr: {},
                          children: [
                            "一民事ノ裁判ニ成文ノ法律ナキモノハ習慣ニ依リ習慣ナキモノハ条理ヲ推考シテ裁判スヘシ",
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tag: "Article",
              attr: {
                Num: "4",
              },
              children: [
                {
                  tag: "ArticleTitle",
                  attr: {},
                  children: ["第四条"],
                },
                {
                  tag: "Paragraph",
                  attr: {
                    Num: "1",
                  },
                  children: [
                    {
                      tag: "ParagraphNum",
                      attr: {},
                      children: [],
                    },
                    {
                      tag: "ParagraphSentence",
                      attr: {},
                      children: [
                        {
                          tag: "Sentence",
                          attr: {},
                          children: [
                            "一裁判官ノ裁判シタル言渡ヲ以テ将来ニ例行スル一般ノ定規トスルコトヲ得ス",
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tag: "Article",
              attr: {
                Num: "5",
              },
              children: [
                {
                  tag: "ArticleTitle",
                  attr: {},
                  children: ["第五条"],
                },
                {
                  tag: "Paragraph",
                  attr: {
                    Num: "1",
                  },
                  children: [
                    {
                      tag: "ParagraphNum",
                      attr: {},
                      children: [],
                    },
                    {
                      tag: "ParagraphSentence",
                      attr: {},
                      children: [
                        {
                          tag: "Sentence",
                          attr: {},
                          children: [
                            "一頒布セル布告布達ヲ除クノ外諸官省随時事ニ就テノ指令ハ将来裁判所ノ準拠スヘキ一般ノ定規トスルコトヲ得ス",
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} as const;
