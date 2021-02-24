am4core.ready(function () {
  var data = [
    {
      level: "1",
      name: "WF2020_PO_24.12.2020_Управление",
      duration: "255 дней",
      fromDate: 1610344800000,
      toDate: 1640962800000,
      cost: 6,
      actualCost: 0,
      percent: 10,
      url: "http://kruerf.com/upravlenie",
    },
    {
      level: "1",
      name: "ПИР Северная Крым",
      duration: "89,89 дней?",
      fromDate: 1610344800000,
      toDate: 1621001160000,
      cost: 3,
      actualCost: 360.8,
      percent: 7,
      url: "http://kruerf.com/pir-severnaya-krym",
    },
    {
      level: "1",
      name: "2КТП 250_КТП-8 Аэропорт",
      duration: "22 дней",
      fromDate: 1613973600000,
      toDate: 1616565660000,
      cost: 288,
      actualCost: 0,
      percent: 78,
      url: "http://kruerf.com/ktp-8-aeroport",
    },
    {
      level: "1",
      name: 'ПИР "Маслово ПС 110/10"',
      duration: "31 дней",
      fromDate: 1603692000000,
      toDate: 1607353200000,
      cost: 566,
      actualCost: 506.2,
      percent: 90,
      url: "http://kruerf.com/pir-maslovo-ps-110-10",
    },
    {
      level: "1",
      name: "WF2021_PO_22.01.2021_ЗПП-220",
      duration: "124 дней",
      fromDate: 1618812000000,
      toDate: 1633618800000,
      cost: 3,
      actualCost: 0,
      percent: 6,
      url: "http://kruerf.com/zpp-220",
    },
    {
      level: "1",
      name: "WF2021_PO_22.01.2021_ЗПП-110",
      duration: "15 дней",
      fromDate: 1611295200000,
      toDate: 1613055600000,
      cost: 0,
      actualCost: 0,
      percent: 73,
      url: "http://kruerf.com/zpp-110",
    },
    {
      level: "1",
      name: "WF2021_PO_22.01.2021_Другие задачи",
      duration: "45 дней",
      fromDate: 1610344800000,
      toDate: 1615561200000,
      cost: 624,
      actualCost: 0,
      percent: 3,
      url: "http://kruerf.com/drugie-zadachi",
    },
    {
      level: "1",
      name: "WF2020_PO_25.01.2021_ММПС 110_Чечня",
      duration: "183 дней",
      fromDate: 1635746400000,
      toDate: 1657724400000,
      cost: 888,
      actualCost: 0,
      percent: 35,
      url: "http://kruerf.com/mmps-110-chechnya",
    },
    {
      level: "1",
      name: "Проектирование кабельной линии 35 кВ. Нефтеюганск",
      duration: "137,48 дней",
      fromDate: 1610949600000,
      toDate: 1627465980000,
      cost: 1,
      actualCost: 0,
      percent: 0,
      url: "http://kruerf.com/proektirovanie-kabelnoj-linii-35-kv-nefteyugansk",
    },
    {
      level: "1",
      name: "WF2021_PO_28.01.2021_ГПУ_ТТ_ГринТехЭнерджи",
      duration: "87 дней",
      fromDate: 1606716000000,
      toDate: 1617116400000,
      cost: 1,
      actualCost: 0,
      percent: 70,
      url: "http://kruerf.com/gpu-tt-grintekhenerdzhi",
    },
    {
      level: "1",
      name: "WF2021_PO_28.01.2021_ГПУ_ГРАСС_ГринТехЭнерджи",
      duration: "52 дней",
      fromDate: 1611554400000,
      toDate: 1617721200000,
      cost: 552,
      actualCost: 0,
      percent: 8,
      url: "http://kruerf.com/gpu-grass-grintekhenerdzhi",
    },
    {
      level: "1",
      name: "WF2021_PO_31.01.2021_ГПУ_ПЕТРОВАКС_ГринТехЭнерджи",
      duration: "56 дней",
      fromDate: 1611554400000,
      toDate: 1618239600000,
      cost: 517.6,
      actualCost: 0,
      percent: 15,
      url: "http://kruerf.com/gpu-petrovaks-grintekhenerdzhi",
    },
  ];

  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.scrollbarX = new am4core.Scrollbar();
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineY.disabled = true;
  chart.cursor.lineX.disabled = true;
  chart.language.locale = am4lang_ru_RU;
  chart.data = data;

  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
  dateAxis.cursorTooltipEnabled = false;
  dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy[/]");
  dateAxis.min = 1601532000000;
  dateAxis.max = 1659366000000;

  let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.cursorTooltipEnabled = false;
  categoryAxis.dataFields.category = "name";
  categoryAxis.renderer.inversed = true;

  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
  series.name = "Серия 1 ";
  series.columns.template.tooltipText = "Сроки: с {openDateX} до {dateX}. Готовность: {percent}%";
  series.columns.template.url = "{url}";
  series.columns.template.fill = am4core.color("#9ac1d6");
  series.columns.template.height = am4core.percent(80);
  series.tooltip.getFillFromObject = false;
  series.tooltip.background.fill = am4core.color("#fff");
  series.tooltip.label.fill = am4core.color("#000");
  series.dataFields.openDateX = "fromDate";
  series.dataFields.dateX = "toDate";
  series.dataFields.categoryY = "name";

  let series2 = chart.series.push(new am4charts.ColumnSeries());
  series2.stacked = true;
  series2.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
  series2.name = "Серия 2 ";
  series2.columns.template.strokeWidth = 0;
  series2.columns.template.tooltipText = "Сроки: с {openDateX} до {dateX}. Готовность: {percent}%";
  series2.columns.template.url = "{url}";
  series2.columns.template.fill = am4core.color("#8BC34A");
  series2.columns.template.height = am4core.percent(80);
  series2.tooltip.getFillFromObject = false;
  series2.tooltip.background.fill = am4core.color("#fff");
  series2.tooltip.label.fill = am4core.color("#000");
  series2.dataFields.openDateX = "fromDate";
  series2.dataFields.dateX = "toDate";
  series2.dataFields.categoryY = "name";

  series2.adapter.add("dataContextValue", function (val) {
    let fromDate = val.dataItem._dataContext.fromDate;
    let toDate = val.dataItem.dataContext.toDate;
    let percent = val.dataItem.dataContext.percent;
    let period = toDate - fromDate;
    period /= 100;
    period *= percent;
    toDate = fromDate + period;
    val.dataItem.dataContext.toDate = toDate;
    return val;
  });

  let range = dateAxis.axisRanges.create();
  range.date = new Date();
  range.grid.locations = 0.5;
  range.grid.stroke = am4core.color("#293d7d");
  range.grid.strokeWidth = 2;
  range.grid.strokeOpacity = 1;
  range.grid.above = true;
  range.bullet = new am4core.Triangle();
  range.bullet.width = 15;
  range.bullet.height = 15;
  range.bullet.fill = am4core.color("#293d7d");
  range.bullet.horizontalCenter = "middle";
});
