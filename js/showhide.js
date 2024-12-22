const data = [];
let flag = true;
const events = {
  onRenderFirstFinish: (evt) => {
    // alert('onRenderFirstFinish');
    // alert(evt.sheet);
    // evt.sheet.loadSearchData(DATA);
    // if (flag) {
    //   evt.sheet.hideCol('colName4');
    //   flag = false;
    // }
  },
  onBeforeDataLoad: (evt) => {
    console.log('onBeforeDataLoad');
    const data = evt.data;
    console.log(evt.data);
    data[0].colName1 = '5';
    data[0].colName4 = '숨긴값인데 보일까?';
    if (flag) {
      evt.sheet.hideCol('colName4');
      evt.sheet.showCol('colName5');
      flag = false;
    } else {
      evt.sheet.showCol('colName4');
      evt.sheet.hideCol('colName5');
      flag = true;
    }
  },
  onDataLoad: (evt) => {
    console.log('onDataLoad');
    console.log(evt.sheet);
    const sheet = evt.sheet;
    const data = evt.sheet.getDataRows();
    data.forEach((row) => {
      const comparisonVal = sheet.getValue({
        row: row,
        col: 'colName2',
      });
      if (comparisonVal === '2') {
        sheet.setValue({
          row: row,
          col: 'colName3',
          val: '컬럼2가 2입니다.',
        });
      }
    });
  },
  onRenderFinish: (evt) => {
    console.log('onRenderFinish');
    console.log(evt.sheet);
  },
};
const OPT = {
  Cols: [
    { Header: '컬럼1', Name: 'colName1', Type: 'Text' },
    { Header: '컬럼2', Name: 'colName2', Type: 'Text', Align: 'Center' },
    { Header: '컬럼3', Name: 'colName3', Type: 'Text', Align: 'Center' },
    { Header: '컬럼4', Name: 'colName4', Type: 'Text', Align: 'Center' },
    { Header: '컬럼5', Name: 'colName5', Type: 'Text', Align: 'Center' },
  ],
  Events: events,
};
const DATA = [
  { colName1: '1', colName2: '2' },
  { colName1: '3', colName2: '4' },
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
sht1.loadSearchData(DATA);
sht2.loadSearchData(DATA);
