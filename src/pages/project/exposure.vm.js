import { utls } from 'krData';
import ProductDataService from './productData.service';
import noDataFactory from '../../bower/highcharts/modules/no-data-to-display.src.js';
function handleNumber(n) {
  if (n) {
    if (!n.toFixed) return n;
    if (n < 1) { return n.toFixed(4); }
    return n.toFixed(0);
  }
  return 0;
}
export default class ExposureVM {
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
    const attr = ['report', 'search', 'weibo'];
    attr.forEach(key => {
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
       <p>报道数量：<span>${this.report}</span></p>
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
       <p>搜索热度：<span>${this.search}</span></p>
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
        return `${date.slice(0, 4)}年 / ${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>微博热度：<span>${this.item}</span></p>
      </div>`;
    },
  };
  setInvestmentTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    const arr = investmentTrend.report.x && investmentTrend.report.x.length
      ? investmentTrend.report.x : [];
    this.trendHg.xAxis.categories = arr.map(item => handleDate(item));
    this.trendHg.series = [{
      color: '#DDF1FF',
      name: '报道数量 / 个',
      data: investmentTrend.report.data.map((item) => ({
        y: Number(item) || 0,
        report: handleNumber(item),
        year: this.year,
      })),
      zIndex: 0,
      yAxis: 0,
      type: 'column',
      maxPointWidth: 20,
    }];
    this.trendHg.options.series = this.trendHg.series;
  }

  setDownloadTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    const arr = investmentTrend.search.x && investmentTrend.search.x.length
      ? investmentTrend.search.x : [];
    this.downloadHg.xAxis.categories = arr.map(item => handleDate(item));
    this.downloadHg.series = [{
      name: '搜索热度',
      color: '#FBA1B2',
      data: investmentTrend.search.data.map((item) => ({
        y: Number(item),
        search: handleNumber(item),
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }];
    this.downloadHg.options.series = this.downloadHg.series;
  }

  setWebsiteTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    this.websiteHg.xAxis.categories = investmentTrend.weibo.x.map(item => handleDate(item));
    this.websiteHg.series = [{
      name: '微博热度',
      color: '#FFEFCB',
      data: investmentTrend.weibo.data.map((item) => ({
        y: Number(item),
        item,
        year: this.year,
      })),
      type: 'column',
      maxPointWidth: 20,
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
        text: '<h5 class="trend-title">' +
        '<span>报道数量</span>' +
        '<i class="icon-dialogTags">' +
          '<span class="tip">' +
            '<span class="tip-title">报道数量</span>' +
            '<span>相关媒体新闻报道数量</span>' +
          '</span>' +
        '</i>' +
        '</h5>',
      },
      xAxis: {
        tickWidth: 1,
        tickLength: 4,
        tickPosition: 'inside',
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: 'transparent',
        gridLineDashStyle: 'longdash',
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
          maxStaggerLines: 10,
          style: {

          },
        },
        title: {
          enabled: false,
        },
        opposite: false,
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
              lineColor: '#FBA1B2',
              lineWidth: 2,
              radius: 3,
              symbol: 'circle',
              states: {
                hover: {
                  fillColor: '#FBA1B2',
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
        text: '<h5 class="trend-title">' +
        '<span>搜索热度</span>' +
        '<i class="icon-dialogTags">' +
        '<span class="tip">' +
        '<span class="tip-title">搜索热度</span>' +
        '<span>搜索引擎用户查询提交量</span>' +
        '</span>' +
        '</i>' +
        '</h5>',
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
        opposite: false,
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
                color: '#FFD46B',
              },
            },
          },
          series: {
            tooltip: this.retentionColumnTooltip,
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
        text: '<h5 class="trend-title">' +
        '<span>微博热度</span>' +
        '<i class="icon-dialogTags">' +
        '<span class="tip">' +
        '<span class="tip-title">微博热度</span>' +
        '<span>微博话题提及量</span>' +
        '</span>' +
        '</i>' +
        '</h5>',
      },
      xAxis: {
        tickWidth: 1,
        tickLength: 4,
        tickPosition: 'inside',
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: 'transparent',
        gridLineDashStyle: 'longdash',
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
          maxStaggerLines: 10,
          style: {

          },
        },
        title: {
          enabled: false,
        },
        opposite: false,
      }],
    };
  }


  handleData(d) {
    const dict = [
      {
        name: ['report'],
        target: this.trendHg,
        empty: true,
      }, {
        name: ['search'],
        target: this.downloadHg,
        empty: true,
      }, {
        name: ['weibo'],
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
  }

  _setNoDataConfig(cfg) {
    const x = cfg.xAxis;
    const y = cfg.yAxis[0];
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
