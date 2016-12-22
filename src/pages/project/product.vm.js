import { utls } from 'krData';
import ProductDataService from './productData.service';
import noDataFactory from '../../bower/highcharts/modules/no-data-to-display.src.js';
function handleNumber(n) {
  if (n) {
    if (!n.toFixed) return n;
    if (n < 1) { return n.toFixed(4); }
    return n.toFixed(2);
  }
  return 0;
}
export default class ProductVM {
  constructor(product) {
    noDataFactory(Highcharts);
    Highcharts.setOptions({
      lang: {
        thousandsSep: ',',
        noData: '暂无数据',
      },
    });
    this.active = 'product';
    this.product = product;
    this.companyData = product.companyData;
    this.init();
  }

  init() {
    this.setAsoInfo();
    if (utls.isEmpty(this.companyData)) {
      this.hasData = false;
      return;
    }
    this.hasData = false;
    this.setTrend();
    this.setDownload();
    this.setWebsite();
    this.retentionList = [
      {
        title: '一天后',
        percent: 0,
        key: 'save',
      }, {
        title: '三天后',
        percent: 0,
        key: 'save3',
      }, {
        title: '七天后',
        percent: 0,
        key: 'save7',
      }, {
        title: '三十天后',
        percent: 0,
        key: 'save30',
      },
    ];
    this.productDataService = new ProductDataService(this.companyData);
    this.loadAnalyze();
  }

  setAsoInfo() {
    const product = this.product;
    angular.extend(this, product.companyProduct);
    // 如果ASO数据存在，则使用ASO数据
    if (!utls.isEmpty(product.productIntro)) {
      angular.extend(this, product.productIntro);
      angular.extend(this, product.productIntro.app_links);
    }
  }

  loadAnalyze() {
    this.analyze = this.productDataService.getProduct();
    Object.keys(this.analyze).forEach(key => {
      if (this.analyze[key].x.length || (this.analyze[key].data && this.analyze[key].data.length)) {
        this.hasData = true;
      }
    });
    this.initChart();
  }

  initChart() {
    this.setInvestmentTrend(this.analyze);
    this.setDownloadTrend(this.analyze);
    this.setWebsiteTrend(this.analyze);
    this.handleRetention(this.analyze);
    this.handleData(this.analyze);
  }

  years = [];
  year = new Date().getFullYear();
  linecColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      function handleDate(date) {
        if (!date || !date.length || !date.slice) return;
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年 / ${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>DAU：<span>${this.dau}万</span></p>
       <p>曝光量：<span>${this.exposure}</span></p>
      </div>`;
    },
  };
  downloadColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      function handleDate(date) {
        if (!date || !date.length || !date.slice) return;
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年 / ${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>App排名：<span>${this.rank} 名</span></p>
       <p>Android下载量：<span>${this.download} 万次</span></p>
      </div>`;
    },
  };
  retentionColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      function handleDate(date) {
        if (!date || !date.length || !date.slice) return;
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>网站Alexa排名：<span>${this.item}名</span></p>
      </div>`;
    },
  };
  setInvestmentTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    const arr = investmentTrend.dau.x && investmentTrend.dau.x.length
      ? investmentTrend.dau.x : investmentTrend.exposure.x;
    this.trendHg.xAxis.categories = arr.map(item => handleDate(item));
    this.trendHg.series = [{
      name: 'DAU / 人',
      color: '#88C4FF',
      data: investmentTrend.dau.data.map((item, i) => ({
        y: item,
        dau: handleNumber(item),
        exposure: handleNumber(investmentTrend.exposure.data[i]),
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }, {
      color: '#DDF1FF',
      name: '曝光量',
      data: investmentTrend.exposure.data.map((item, i) => ({
        y: Number(item) || 0,
        dau: handleNumber(investmentTrend.dau.data[i]),
        exposure: handleNumber(item),
        year: this.year,
      })),
      zIndex: 0,
      yAxis: 0,
      type: 'column',
    }];
    this.trendHg.options.series = this.trendHg.series;
  }

  setDownloadTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    const arr = investmentTrend.download.x && investmentTrend.download.x.length
      ? investmentTrend.download.x : investmentTrend.appRank.x;
    this.downloadHg.xAxis.categories = arr.map(item => handleDate(item));
    this.downloadHg.series = [{
      name: 'AppStore排名 / 位',
      color: '#9cd141',
      data: investmentTrend.appRank.data.map((item, i) => ({
        y: Number(item),
        rank: (item && item !== 'null') ? item : 0,
        download: handleNumber(investmentTrend.download.data[i]),
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }, {
      color: '#D9EDB4 ',
      name: 'Android下载量 / 万次',
      data: investmentTrend.download.data.map((item, i) => ({
        y: Number(item),
        rank: investmentTrend.appRank.data[i] && investmentTrend.appRank.data[i] !== 'null' ? investmentTrend.appRank.data[i] : 0,
        download: handleNumber(item),
        year: this.year,
      })),
      zIndex: 0,
      yAxis: 0,
      type: 'column',
    }];
    this.downloadHg.options.series = this.downloadHg.series;
  }

  setWebsiteTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    this.websiteHg.xAxis.categories = investmentTrend.websiteRank.x.map(item => handleDate(item));
    this.websiteHg.series = [{
      name: '',
      color: '#cad1ff',
      data: investmentTrend.websiteRank.data.map((item) => ({
        y: Number(item),
        item,
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 2,
    }];
    this.websiteHg.options.series = this.websiteHg.series;
  }

  setTrend() {
    this.trendHg = {
      options: {
        legend: {
          align: 'right',
          verticalAlign: 'top',
          useHTML: true,
          margin: 30,
          y: 0,
          itemDistance: 10,
          labelFormatter: function labelFormatter() {
            return `<span class="kr-legend-item">
          <span style="background:${this.color}" class="kr-circle"></span
          ><span class="ellipsis">${this.name}</span>
          </span>`;
          },
        },
        credits: {
          enabled: false,
        },
        noData: {
          useHtml: true,
          style: {
            fontSize: '18px',
            color: '#ccc',
            fontWeight: 'normal',
            zIndex: 99,
          },
        },
        plotOptions: {
          line: {
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
                halo: {
                  size: 0,
                },
              },
            },
            marker: {
              fillColor: '#fff',
              lineColor: '#88C4FF',
              lineWidth: 2,
              radius: 3,
              symbol: 'circle',
              states: {
                hover: {
                  fillColor: '#88C4FF',
                  radiusPlus: 0,
                  lineWidthPlus: 0,
                },
              },
            },
          },
          column: {
            states: {
              hover: {
                color: '#BBE4FF',
              },
            },
          },
          series: {
            tooltip: this.linecColumnTooltip,
          },
        },
        chart: {
          height: 270,
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          padding: 0,
        },
      },
      title: {
        useHTML: true,
        align: 'left',
        x: -10,
        margin: 25,
        text: '<h5 class="trend-title">DAU / 曝光量</h5>',
      },
      xAxis: {
        tickWidth: 1,
        tickLength: 4,
        tickPosition: 'inside',
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: 'transparent',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: '#ddd',
          dashStyle: 'LongDash',
        },
        categories: [],
        labels: {
          autoRotation: 0,
          useHTML: true,
          style: {
            whiteSpace: 'nowrap',
          },
        },
      },
      yAxis: [{
        lineColor: '#E7E7E7',
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        labels: {
          format: '{value}万',
          maxStaggerLines: 10,
          style: {

          },
        },
        title: {
          enabled: false,
        },
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: '#F2F4F5',
        lineColor: '#E7E7E7',
        lineWidth: 1,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
          style: {

          },
        },
        opposite: true,
      }],
    };
  }

  setDownload() {
    this.downloadHg = {
      options: {
        legend: {
          align: 'right',
          verticalAlign: 'top',
          useHTML: true,
          margin: 30,
          y: 0,
          itemDistance: 10,
          labelFormatter: function labelFormatter() {
            return `<span class="kr-legend-item">
          <span style="background:${this.color}" class="kr-circle"></span
          ><span class="ellipsis">${this.name}</span>
          </span>`;
          },
        },
        credits: {
          enabled: false,
        },
        noData: {
          style: {
            fontSize: '18px',
            color: '#ccc',
            fontWeight: 'normal',
          },
        },
        plotOptions: {
          line: {
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
                halo: {
                  size: 0,
                },
              },
            },
            marker: {
              fillColor: '#fff',
              lineColor: '#9cd141',
              lineWidth: 2,
              radius: 3,
              symbol: 'circle',
              states: {
                hover: {
                  fillColor: '#9cd141',
                  radiusPlus: 0,
                  lineWidthPlus: 0,
                },
              },
            },
          },
          column: {
            states: {
              hover: {
                color: '#9cd141',
              },
            },
          },
          series: {
            tooltip: this.downloadColumnTooltip,
          },
        },
        chart: {
          height: 270,
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          padding: 0,
        },
      },
      title: {
        useHTML: true,
        align: 'left',
        x: -10,
        margin: 25,
        text: '<h5 class="trend-title">AppStore排名 / Android下载量</h5>',
      },
      xAxis: {
        tickWidth: 1,
        tickLength: 4,
        lineColor: '#E7E7E7',
        tickPosition: 'inside',
        gridLineWidth: 1,
        gridLineColor: 'transparent',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: '#ddd',
          dashStyle: 'LongDash',
        },
        categories: [],
        labels: {
          autoRotation: 0,
          useHTML: true,
          style: {
            whiteSpace: 'nowrap',
          },
        },
      },
      yAxis: [{
        lineColor: '#E7E7E7',
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        labels: {
          format: '{value}',
          style: {

          },
        },
        title: {
          enabled: false,
        },
        opposite: true,
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: '#F2F4F5',
        lineColor: '#E7E7E7',
        lineWidth: 1,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
          style: {

          },
        },
        opposite: false,
      }],
    };
  }

  setWebsite() {
    this.websiteHg = {
      options: {
        legend: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        noData: {
          style: {
            fontSize: '18px',
            color: '#ccc',
            fontWeight: 'normal',
          },
        },
        plotOptions: {
          line: {
            lineWidth: 2,
            states: {
              hover: {
                lineWidth: 2,
                halo: {
                  size: 0,
                },
              },
            },
            marker: {
              enabled: false,
              fillColor: '#fff',
              lineColor: '#cad1ff',
              lineWidth: 4,
              symbol: 'circle',
              states: {
                hover: {
                  radius: 2,
                  radiusPlus: 0,
                  lineWidthPlus: 0,
                },
              },
            },
          },
          series: {
            tooltip: this.retentionColumnTooltip,
          },
        },
        chart: {
          height: 250,
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          padding: 0,
        },
      },
      title: {
        useHTML: true,
        align: 'left',
        x: -10,
        margin: 25,
        text: '<h5 class="trend-title">网站Alexa排名</h5>',
      },
      xAxis: {
        tickWidth: 1,
        tickLength: 4,
        tickInterval: 5,
        tickPosition: 'inside',
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: 'transparent',
        gridLineDashStyle: 'longdash',
        labels: {
          style: {

          },
        },
        crosshair: {
          width: 1,
          color: '#ddd',
          dashStyle: 'LongDash',
        },
      },
      yAxis: [{
        lineColor: '#E7E7E7',
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        labels: {
          format: '{value}',
          style: {

          },
        },
        title: {
          enabled: false,
        },
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: '#F2F4F5',
        lineColor: '#E7E7E7',
        lineWidth: 1,
        reversed: true,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
          style: {

          },
        },
        opposite: false,
      }],
    };
  }

  handleRetention(d) {
    this.retentionList.forEach((item) => {
      const a = d[item.key].data;
      item.percent = a.length ? a[a.length - 1].toFixed(2) : 0;
    });
    let index = 0;
    const width = 250;
    this.retentionList.forEach((item, i) => {
      if (this.retentionList[i].percent - this.retentionList[index].percent > 0) {
        index = i;
      }
    });
    this.retentionList.forEach((item, i) => {
      if (index === i && item.percent !== 0) {
        item.width = width;
      } else {
        item.width = `${width * (item.percent / this.retentionList[index].percent)}px`;
      }
    });
  }

  handleData(d) {
    const dict = [
      {
        name: ['dau', 'exposure'],
        target: this.trendHg,
        empty: true,
      }, {
        name: ['appRank', 'download'],
        target: this.downloadHg,
        empty: true,
      }, {
        name: ['websiteRank'],
        target: this.websiteHg,
        empty: true,
      },
    ];
    dict.forEach(item => {
      item.name.forEach(obj => {
        if (d[obj].data.length) {
          item.empty = false;
        }
      });
      if (item.empty) {
        this._setNoDataConfig(item.target);
      }
    });
    if ((!d.save.data.length || d.save.data[0] === 0) &&
      (!d.save3.data.length || d.save3.data[0] === 0) &&
      (!d.save7.data.length || d.save7.data[0] === 0) &&
      (!d.save30.data.length || d.save30.data[0] === 0)) {
      this.saveEmpty = true;
    }

  }

  _setNoDataConfig(cfg) {
    const x = cfg.xAxis;
    const y = cfg.yAxis[1];
    x.labels.style.color = '#ccc';
    cfg.options.legend.enabled = false;
    y.labels.style.color = '#ccc';
    // 无数据时 强制X Y周
    x.min = 0;
    x.max = 11;
    x.categories = [
      '2015-12',
      '2016-01',
      '2016-02',
      '2016-03',
      '2016-04',
      '2016-05',
      '2016-06',
      '2016-07',
      '2016-08',
      '2016-09',
      '2016-10',
      '2016-11',
    ];
    y.min = 0;
    y.max = 100;
  }

}
