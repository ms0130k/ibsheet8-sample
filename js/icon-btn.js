const data = [];
const events = {
  onRenderFirstFinish: (evt) => {
    console.log('onRenderFirstFinish');
    console.log(evt);
  },
  onBeforeDataLoad: (evt) => {
    console.log('onBeforeDataLoad');
    console.log(evt);
  },
  onDataLoad: (evt) => {
    console.log('onDataLoad');
    console.log(evt);
  },
  onRenderFinish: (evt) => {
    console.log('onRenderFinish');
    console.log(evt);
  },
  onClick: (evt) => {
    // console.log('onClick');
    // console.log(evt);
    if (evt.col === 'btn3') {
      console.log('btn3 클릭');
      console.log(evt);
      const yn = evt.sheet.getValue(evt.row, 'col1');
      console.log(yn);
      if (yn === 'Y') {
        console.log('있음 실행');
      } else {
        console.log('없음 실행');
      }
    }
  },
};
const OPT = {
  Cols: [
    { Header: { Value: '', HeaderCheck: 1, IconAlign: 'Center', CanSort: 0 }, Name: 'chk', Type: 'Bool' },
    { Header: '컬럼1', Name: 'col1', Type: 'Text', Icon: 'Check' },
    { Header: '버튼1', Type: 'Button', Name: 'btn1', Width: 100 },
    {
      Header: '버튼2',
      Type: 'Button',
      Name: 'btn2',
      Width: 100,
      Align: 'Center',
      ButtonText: '텍스트',
      ButtonWidth: 60,
    },
    { Header: '버튼3', Type: 'Button', Name: 'btn3', Width: 100, Button: 'Html' },
    // 조회 데이터 참고Data = [  {btn1:"보류",btn2:"보류",btn3:"<div class='myBtn1'>진행중</div>"},  {btn1:"완료",btn1Disabled:1,btn2:"완료",btn2Disabled:1,btn3:""},  {btn1:"",btn2:"승인",btn3:"<div class='myBtn2'>오류</div>"},  {btn1:"승인",btn1Class:"myBtn3" ,btn2:"대기",btn3:""}
  ],
  Events: events,
  Cfg: {
    CanSort: 0,
  },
};
const DATA = [
  { col1: 'Y', btn1: '보류', btn2: '보류' },
  { col1: 'N', btn1: '보류', btn3: '<div class="myBtn1" style="background-color:red">진행중</div>' },
  { col1: 'N', btn1: '4' },
  { col1: 'Y', btn1: '4' },
  { col1: 'N', btn1: '4' },
];
const sht1 = IBSheet.create({
  el: 'sheetDiv1',
  options: OPT,
});
const OPT2 = {
  ...OPT,
  ...{ Events: {} },
};
const sht2 = IBSheet.create({
  el: 'sheetDiv2',
  options: OPT2,
});
setTimeout(() => {
  sht1.loadSearchData(DATA);
  sht2.loadSearchData(DATA);
}, 1000);
// sht1.loadSearchData(DATA);
// sht2.loadSearchData(DATA);
