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
    const data = evt.sheet.getDataRows();
    data.forEach((row) => {
      const comparisonVal = evt.sheet.getValue({
        row: row,
        col: 'colName2',
      });
      if (comparisonVal === '2') {
        console.log('컬럼2가 2입니다.');
        evt.sheet.setAttribute(row, 'chk', 'CanEdit', 0);
      }
      if (comparisonVal === '3') {
        console.log('컬럼2가 3입니다.');
        row['CanEdit'] = 0;
      }
    });
    evt.sheet.setAttribute(null, 'colName5', 'CanEdit', 0);
  },
  onRenderFinish: (evt) => {
    console.log('onRenderFinish');
    console.log(evt);
  },
};
const OPT = {
  Cols: [
    { Header: { Value: '', HeaderCheck: 1, IconAlign: 'Center', CanSort: 0 }, Name: 'chk', Type: 'Bool' },
    { Header: '컬럼1', Name: 'colName1', Type: 'Text', CanSort: 1 },
    { Header: '컬럼2', Name: 'colName2', Type: 'Text', CanSort: 1, Align: 'Center' },
    { Header: '컬럼3', Name: 'colName3', Type: 'Text', Align: 'Center' },
    { Header: '컬럼4', Name: 'colName4', Type: 'Text', Align: 'Center' },
    { Header: '컬럼5', Name: 'colName5', Type: 'Text', Align: 'Center' },
  ],
  Events: events,
  Cfg: {
    CanSort: 0,
  },
};
const DATA = [
  { colName1: '1', colName2: '2' },
  { colName1: '3', colName2: '3' },
  { colName1: '3', colName2: '4' },
  { colName1: '3', colName2: '4' },
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
setTimeout(() => {
  sht1.loadSearchData(DATA);
  sht2.loadSearchData(DATA);
}, 1000);
// sht1.loadSearchData(DATA);
// sht2.loadSearchData(DATA);
