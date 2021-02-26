am4core.ready(function () {
  // var data = [];



  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.scrollbarX = new am4core.Scrollbar();
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineY.disabled = true;
  chart.cursor.lineX.disabled = true;
  chart.language.locale = am4lang_ru_RU;

  chart.dataSource.url = "./sortArr.json";
  // chart.dataSource.parser = new am4core.JSONParser();


  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
  dateAxis.cursorTooltipEnabled = false;
  dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy[/]");
  dateAxis.min = 1609491600000;
  dateAxis.max = 1661956340000;

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
