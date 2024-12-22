// var ib = ib || {};
// ib = {
//   //시트 초기화 구문
//   init: {
//     //공통기능 설정 부분
//     Cfg: {
//       SearchMode: 0,
//       SectionCanResize: 1,
//       CanSort: true,
//       CanColMove: false,
//       CanColResize: false,
//       HeaderCheck: 0,
//       CanEdit: 1,
//       Hover: 0,
//       SelFocusColor: 1,
//       InfoRowConfig: {
//         Visible: false,
//       },
//       Export: {
//         Url: 'https://dev.ibsheet.com/api/ibsheet/v8/',
//       },
//     },
//     Def: {
//       Row: {
//         CanFormula: true,
//         CalcOrder: 'StatusData,ColorDataHtmlPrefix,FloatShow,RatingEnum',
//         Height: 32,
//       },
//       Header: {
//         Menu: '',
//       },
//       Col: {
//         MinWidth: 30,
//       },
//       Head: {
//         Spanned: 1,
//         CanEdit: 0,
//         CanFocus: 0,
//         Align: 'Left',
//         TextColor: '#fff',
//         Color: '#999',
//         CanExport: false,
//         DelData: {
//           Type: 'Text',
//         },
//         CheckData: {
//           Type: 'Text',
//           HtmlPrefix: '',
//           HtmlPostfix: '',
//         },
//       },
//       Foot: {
//         Spanned: 1,
//         CanEdit: 0,
//         CanFocus: 0,
//         Align: 'Left',
//         TextColor: '#fff',
//         Color: '#999',
//         DelData: {
//           Type: 'Text',
//         },
//         CheckData: {
//           Type: 'Text',
//           HtmlPrefix: '',
//           HtmlPostfix: '',
//         },
//       },
//     },
//     //틀고정 좌측 컬럼 설정
//     LeftCols: [
//       { Header: '순번', Name: 'SEQ', Type: 'Int', Align: 'Center', RelWidth: 0, MinWidth: 50, CanFocus: 0, CanMove: 0 },
//     ],
//     //중앙(메인) 컬럼 설정
//     Cols: [
//       { Header: ' ', Name: 'StatusData', Extend: IB_Preset.STATUS, RelWidth: 0 },
//       {
//         Header: '삭제',
//         Name: 'DelData',
//         MinWidth: 40,
//         Extend: IB_Preset.DelCheck,
//         RelWidth: 0,
//         FormulaRow: { Value: '계산행' },
//       },
//       {
//         Header: '국가',
//         Type: 'Enum',
//         Name: 'ComboData',
//         Enum: '|한국|미국|일본|영국|프랑스|독일',
//         EnumKeys: '|01|02|03|04|05|06',
//         MinWidth: 80,
//         RelWidth: 2,
//       },
//       { Header: '회사', Type: 'Text', Name: 'TextData', MinWidth: 90, RelWidth: 3 },
//       {
//         Header: '가격',
//         Type: 'Int',
//         Name: 'IntData',
//         FormulaRow: 'Sum',
//         Format: '$ #,##0',
//         MinWidth: 110,
//         RelWidth: 2,
//       },
//       { Header: '상승률', Type: 'Float', Name: 'FloatData', Format: '#,##0.##%', MinWidth: 70, FormulaRow: 'Avg' },
//       { Header: '상승률 그래프', Type: 'Html', Name: 'FloatShow', RelWidth: 2, MinWidth: 120, Formula: FloatShowGraph },
//       {
//         Header: '등록날짜',
//         Type: 'Date',
//         Name: 'DateData',
//         RelWidth: 3.5,
//         DataFormat: 'yyyyMMdd',
//         MinWidth: 140,
//         Format: 'yyyy년 MM월 dd일',
//       },
//       {
//         Header: '색상',
//         Type: 'Enum',
//         Name: 'ColorData',
//         RelWidth: 2.5,
//         Align: 'Center',
//         IconAlign: 'Right',
//         Enum: '|red|blue|green|yellow',
//         EditEnum:
//           '|<div class="redMiniBall"></div>\tRED|<div class="blueMiniBall"></div>\tBLUE|<div class="greenMiniBall"></div>\tGREEN|<div class="yellowMiniBall"></div>\tYELLOW',
//         EnumKeys: '|r|b|g|y',
//         MinWidth: 110,
//         HtmlPrefixFormula: ColorDataFormula,
//       },
//       {
//         Header: '차량 정보',
//         Type: 'Text',
//         Name: 'SuggestData',
//         Suggest:
//           '|쏘렌토|스포티지|디 올 뉴 그랜저|카니발|디 올 뉴 싼타페|포터2|더 뉴 아반떼|셀토스|신형 G80|스타리아|쏘나타 디 엣지|더 뉴 투싼|New GV80|봉고 3|캐스퍼|레이|K5|디 올 뉴 코나|버스/트럭 (현대)|K8|팰리세이드|트랙스 크로스오버|니로|GV70|더 뉴 아이오닉 5|모닝|K3|레이 EV|토레스|EV6|아르카나|G90|토레스 EVX|QM6|포터2 일렉트릭|봉고 3 EV|렉스턴 스포츠|티볼리|트레일블레이저|아이오닉 6|렉스턴 스포츠 칸|베뉴|모하비|K9|넥쏘|버스/특수 (기아)|니로 EV|디 올 뉴 코나 일렉트릭|렉스턴 뉴 아레나|EV9|G70|니로 플러스|더 뉴 아반떼 N|코란도|GV60|SM6|Electrified GV70|트래버스|티볼리 에어|아이오닉 5 N|Electrified G80|타호|콜로라도|말리부|Model Y|5 Series|ES|The New GLC-Class|C-Class|X5|GLE-Class|New Cayenne|E-Class|3 Series|X3|Q4 e-tron|7 Series|XC60|S-Class|Countryman|X7|X4|ID.4|Hatch|X6|RAV4|A-Class|EQE SUV|Tiguan|Polestar 2|Jetta|i5|S60|New RX|6 Series|X1|S90|G-Class|CLE|iX3|XC40|Clubman|NX|Camry|Range Rover|All New Mustang|New Accord|Explorer|2 Series Active Tourer|EQB|Grand Cherokee|Aviator|i4|Odyssey|XC90|4 Series|Sienna|Defender|Wrangler|GLS-Class|Prius|All New Nautilus|AMG GT|All New CR-V|A6|Golf|GLB-Class|911|UX|Convertible|Crown|iX1|EQE|Range Rover Sport|Renegade|CLA-Class|Bronco|1 Series|i7|Panamera|Ranger|EQA|Taycan|Maybach|GLA-Class|XM|8 Series|Arteon|Model X|GR 86|2 Series|V60 Cross Country|Macan|Highlander|Z4|Sierra|718 Boxster|Model S|Escalade|E-Class|Alphard|Maybach GLS|408|Gladiator|EQS SUV|Nautilus|Q3|Q5|C40 Recharge|Urus S|V90 Cross Country|Touareg|Range Rover Evoque|Q8|e-tron|M2|iX|Grecale|M4|A7|A4|Model 3 Highland|e-208|Discovery|3008|A3|All New Pilot|e-2008|Discovery Sport|SL-Class|New 2 Series|5008|Flying Spur|XT4|Q2|Q7|A8|Spectre|LS|XT6|M3|5 Series|X6 M|718 Cayman|X5 M|A5|508|308|Huracan EVO|2008|Expedition|Ghost|Continental GT|EQS|GLE-Class|RZ|Navigator|X3 M|GLC-Class|Range Rover Velar|M5|Urus|Lyriq|Corsair|3 Series|CLS-Class|Cullinan|Jetta 1.4 TSI|GR SUPRA|A-Class|MC20 Cielo|XC40 Recharge|X4 M|Levante|CT5|X2|Phantom Series II|Cayenne|Quattroporte|LC|Wrangler',
//         SuggestType: 'Start, Empty, Search',
//         EmptyValue: '<span style="color:#AAA;"><i class="fa-solid fa-question"></i> 차량 명을 입력해 주세요.</span>',
//         MinWidth: 150,
//         RelWidth: 5,
//       },
//       {
//         Header: '평점',
//         Type: 'Radio',
//         Name: 'Rating',
//         RadioIcon:
//           '|data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiCiAgIHZpZXdCb3g9IjAgMCAyNCAyNCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ib2ZmLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4zLjIgKDA5MWUyMGUsIDIwMjMtMTEtMjUsIGN1c3RvbSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaWQ9InN3YXRjaDIiCiAgICAgICBpbmtzY2FwZTpzd2F0Y2g9InNvbGlkIj4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzBhMGIwNDtzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3AyIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI3N3YXRjaDIiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQyIgogICAgICAgeDE9IjEuNTEzODY0NSIKICAgICAgIHkxPSIxMiIKICAgICAgIHgyPSIyMi41MTY4MDkiCiAgICAgICB5Mj0iMTIiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcxIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgaW5rc2NhcGU6em9vbT0iMzcuMTI1IgogICAgIGlua3NjYXBlOmN4PSIxMiIKICAgICBpbmtzY2FwZTpjeT0iMTIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjExMjkiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjYyOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMTQzMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzEiIC8+CiAgPHBhdGgKICAgICBkPSJtMjIgMTAuMWMuMS0uNS0uMy0xLjEtLjgtMS4xbC01LjctLjgtMi42LTUuMmMtLjEtLjItLjItLjMtLjQtLjQtLjUtLjMtMS4xLS4xLTEuNC40bC0yLjUgNS4yLTUuNy44Yy0uMyAwLS41LjEtLjYuMy0uNC40LS40IDEgMCAxLjRsNC4xIDQtMSA1LjdjMCAuMiAwIC40LjEuNi4zLjUuOS43IDEuNC40bDUuMS0yLjcgNS4xIDIuN2MuMS4xLjMuMS41LjFoLjJjLjUtLjEuOS0uNi44LTEuMmwtMS01LjcgNC4xLTRjLjItLjEuMy0uMy4zLS41eiIKICAgICBpZD0icGF0aDEiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6dXJsKCNsaW5lYXJHcmFkaWVudDIpO3N0cm9rZS1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm8iIC8+Cjwvc3ZnPgo=|data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiCiAgIHZpZXdCb3g9IjAgMCAyNCAyNCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ib24uc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMiAoMDkxZTIwZSwgMjAyMy0xMS0yNSwgY3VzdG9tKSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczEiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0ic3dhdGNoMiIKICAgICAgIGlua3NjYXBlOnN3YXRjaD0ic29saWQiPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMGEwYjA0O3N0b3Atb3BhY2l0eToxOyIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBpZD0ic3RvcDIiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICB4bGluazpocmVmPSIjc3dhdGNoMiIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDIiCiAgICAgICB4MT0iMS41MTM4NjQ1IgogICAgICAgeTE9IjEyIgogICAgICAgeDI9IjIyLjUxNjgwOSIKICAgICAgIHkyPSIxMiIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzEiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjMDAwMDAwIgogICAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBpbmtzY2FwZTp6b29tPSIzNy4xMjUiCiAgICAgaW5rc2NhcGU6Y3g9IjEyIgogICAgIGlua3NjYXBlOmN5PSIxMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTEyOSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNjI4IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIxNDMyIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMSIgLz4KICA8cGF0aAogICAgIGQ9Im0yMiAxMC4xYy4xLS41LS4zLTEuMS0uOC0xLjFsLTUuNy0uOC0yLjYtNS4yYy0uMS0uMi0uMi0uMy0uNC0uNC0uNS0uMy0xLjEtLjEtMS40LjRsLTIuNSA1LjItNS43LjhjLS4zIDAtLjUuMS0uNi4zLS40LjQtLjQgMSAwIDEuNGw0LjEgNC0xIDUuN2MwIC4yIDAgLjQuMS42LjMuNS45LjcgMS40LjRsNS4xLTIuNyA1LjEgMi43Yy4xLjEuMy4xLjUuMWguMmMuNS0uMS45LS42LjgtMS4ybC0xLTUuNyA0LjEtNGMuMi0uMS4zLS4zLjMtLjV6IgogICAgIGlkPSJwYXRoMSIKICAgICBzdHlsZT0iZmlsbDojZjZmZjFjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTp1cmwoI2xpbmVhckdyYWRpZW50Mik7c3Ryb2tlLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybyIgLz4KPC9zdmc+Cg==',
//         Enum: '| | | | |  0점',
//         EnumKeys: '|A1|A2|A3|A4|A5',
//         Class: 'customCheck',
//         MinWidth: 150,
//         MaxWidth: 200,
//         EnumFormula: formulaFunc,
//         Range: 1,
//         OnClick: onClickFunc,
//       },
//       {
//         Header: { Value: '토글스위치' },
//         Type: 'Bool',
//         Name: 'CheckData',
//         Width: 110,
//         Align: 'Center',
//         CanEdit: 1,
//         BoolIcon: 4,
//         HtmlPrefix: '<label class="switch">',
//         HtmlPostfix: '<span class="slider round"></span></label>',
//       },
//     ],
//     //틀고정 우측 컬럼 설정
//     RightCols: [],
//     Head: [
//       {
//         Def: 'Head',
//         SEQ: {
//           Type: 'Text',
//           Value: '',
//         },
//         StatusData: {
//           Value: 'Head 영역에 고정행입니다.',
//           Type: 'Text',
//           Span: 11,
//         },
//       },
//     ],
//     Foot: [
//       {
//         Def: 'Foot',
//         StatusData: {
//           Value: 'Foot 영역에 고정행입니다.',
//           Type: 'Text',
//           Span: 11,
//         },
//       },
//     ],
//   },
//   //시트 이벤트
//   event: {
//     onRenderFirstFinish: function (evt) {
//       // 가상의 데이터
//       var loadData = [];
//       var textData = ['애플', '네이버', '소니', '루이비통', '폭스바겐', 'HSBC'];
//       var checkData = [0, 1];
//       var colorData = ['r', 'g', 'b', 'y'];
//       var comboData = ['01', '02', '03', '04', '05', '06'];

//       for (var i = 0; i < 200; i++) {
//         // 1 ~ 5 사이 랜덤값
//         var rating = Math.floor(Math.random() * (5 - 1 + 1) + 1);
//         loadData.push({
//           TextData: textData[Math.floor(Math.random() * 6)],
//           IntData: Math.floor(Math.random() * 100000),
//           DateData: new Date(+new Date() - Math.floor(Math.random() * 10000000000)).getTime(),
//           FloatData: Math.random().toFixed(3) - 0,
//           Rating: new Array(rating)
//             .fill('')
//             .map((r, i) => 'A' + (i + 1))
//             .join(';'),
//           CheckData: checkData[Math.floor(Math.random() * 2)],
//           ColorData: colorData[Math.floor(Math.random() * 4)],
//           ComboData: comboData[Math.floor(Math.random() * 6)],
//         });
//       }
//       // 첫 조회는 onRenderFirstFinish 에서 진행합니다.
//       evt.sheet.loadSearchData(loadData);
//     },
//     onBeforeDataLoad: function (evt) {
//       // 조회 후 로딩 전 발생 이벤트
//       var d = evt.data;
//       var _data;

//       if (d.length > 20) {
//         _data = JSON.stringify(d.slice(0, 20), null, 2);
//         _data += _data.substring(0, _data.length - 1) + '...\n]';
//       } else {
//         _data = JSON.stringify(d, null, 2);
//       }

//       try {
//         myTabs.contents
//           .items(2)
//           .setContents("<pre><code class='language-javascript code-basic hljs'>" + _data + '</code></pre>');
//         hljs.initHighlighting.called = false;
//         hljs.initHighlighting();
//       } catch (e) {
//         console.log('IBTab 이 존재하지 않습니다.');
//       }
//     },
//   },
//   //시트객체 생성
//   create: function () {
//     var options = this.init;

//     options.Events = this.event;
//     IBSheet.create({
//       id: 'sheet', // 생성할 시트의 id
//       el: 'sheetDiv', // 시트를 생성할 Dom 객체 및 id
//       options: options, // 생성될 시트의 속성
//       data: [], // 생성될 시트의 정적데이터
//     });
//   },
//   //화면 기능
//   sampleBtn: function (args) {
//     var frow = sheet.getFocusedRow() || sheet.getFirstVisibleRow();
//     var excelInfo = {
//       fileName: 'sheet',
//       sheetName: 'mySheet',
//       downRows: 'Visible',
//       downCols: 'Visible',
//       excludeFooterRow: true,
//     };

//     switch (args.textContent) {
//       case '행 추가':
//         if (!sheet.SubSumRowOptions) sheet.addRow(frow);
//         break;
//       case '행 삭제':
//         if (!sheet.SubSumRowOptions) sheet.removeRow(frow);
//         break;
//       case '행 복사':
//         if (!sheet.SubSumRowOptions) sheet.copyRow(frow, frow);
//         break;
//       case '클라이언트 엑셀 다운':
//         sheet.exportData(excelInfo);
//         break;
//       case '클라이언트 엑셀 업로드':
//         sheet.importData({
//           append: 0,
//           fileExt: 'xlsx',
//         });
//         break;
//       case '서버모듈 엑셀 다운':
//         sheet.down2Excel(excelInfo);
//         break;
//       case '서버모듈 엑셀 업로드':
//         sheet.loadExcel({
//           append: 0,
//           fileExt: 'xlsx',
//         });
//         break;
//       default:
//         var cols = sheet.getCols('Visible');

//         for (var i = 0; i < cols.length; i++) {
//           sheet.fitSize(cols[i]);
//         }
//     }
//   },
//   //조회 데이터
//   data: [],
// };
// ib.create();
// // 외부 함수
// function FloatShowGraph(fr) {
//   // var color = ['#FF4242', '#999999', ' #95D2EC'];
//   var color = fr.Row['FloatData'] > 0.5 ? '#95D2EC' : fr.Row['FloatData'] < 0.5 ? '#FF6262' : '#999';
//   var w = Math.abs(fr.Row['FloatData'] > 1 || fr.Row['FloatData'] < 0.0 ? 100 : fr.Row['FloatData'] * 100);
//   return `<div class='htmlGraph'>
//     <div style="width:${w}%;background:${color};">
//
//     </div>
//     <div>
//       ${parseInt(fr.Row['FloatData'] * 100)}%
//     </div>
//   </div>`;
// }
// function ColorDataFormula(fr) {
//   var color = '';

//   switch (fr.Value) {
//     case 'r':
//       color = '#FFAAAA';
//       break;
//     case 'b':
//       color = '#AAAAFF';
//       break;
//     case 'g':
//       color = '#AAFFAA';
//       break;
//     case 'y':
//       color = '#FFFFAA';
//       break;
//     default:
//       color = '#fff';
//   }

//   return `<div class='enumBall' style="background:${color};"> </div>`;
// }
// function formulaFunc(fr) {
//   var v = fr.Row[fr.Col];
//   var score = v.split(';').pop().replace(/[\D]*/, '');
//   return `| | | | | ${score}점`;
// }
// function onClickFunc(evt) {
//   // 아이템을 선택시 Radio1, Radio2 식으로 넘어옴.
//   if (evt.event.Special) {
//     var v = ~~evt.event.Special.replace(/[\D]*/, '');
//     var varr = new Array(v)
//       .fill('')
//       .map((a, i) => 'A' + (i + 1))
//       .join(';');
//     evt.sheet.setValue(evt.row, evt.col, varr);
//   }
//   return true;
// }
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
