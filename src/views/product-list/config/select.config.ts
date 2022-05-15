export const selectTypeConfig = [
  {
    prop: "initialAmount",
    label: "起购金额",
    options: [
      {
        value: "-1",
        label: "起购金额"
      },
      {
        value: "10000",
        label: "1万及以上"
      },
      {
        value: "20000",
        label: "2万及以上"
      },
      {
        value: "50000",
        label: "5万及以上"
      },
      {
        value: "100000",
        label: "10万及以上"
      }
    ],
    activeIndex: 0
  },
  {
    prop: "deadLine",
    label: "产品期限",
    options: [
      {
        value: "-1",
        label: "产品期限"
      },
      {
        value: "30",
        label: "30天"
      },
      {
        value: "90",
        label: "90天"
      },
      {
        value: "180",
        label: "180天"
      },
      {
        value: "270",
        label: "270天"
      },
      {
        value: "360",
        label: "360天"
      },
      {
        value: "720",
        label: "720天"
      }
    ],
    activeIndex: 0
  },
  {
    prop: "riskRating",
    label: "风险等级",
    options: [
      {
        value: "",
        label: "风险等级"
      },
      {
        value: "R1",
        label: "R1（谨慎型）"
      },
      {
        value: "R2",
        label: "R2（稳健型）"
      },
      {
        value: "R3",
        label: "R3（平衡型）"
      },
      {
        value: "R4",
        label: "R4（进取型）"
      },
      {
        value: "R5",
        label: "R5（激进型）"
      }
    ],
    activeIndex: 0
  }
]
