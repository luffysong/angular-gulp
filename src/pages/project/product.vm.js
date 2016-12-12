import { utls } from 'krData';
import ProductDataService from './productData.service';
export default class ProductVM {
  constructor(product) {
    angular.extend(this, product.companyProduct);
    this.active = 'product';
    this.companyData = product.companyData;
    this.init();
  }

  init() {
    if (utls.isEmpty(this.companyData)) {
      this.hasData = false;
      return;
    }
    this.hasData = true;
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
    this.aso = '创客部落基于一定技术基础的商务运作方式和盈利模式。研究和分析电子商务模式的分类体系，挖掘新的电子商务模式，为电子商务模式创新提供途径，有助于为企业制定特定的电子商务策略和实施步骤，为品牌做到更大更强。创客部落基于一定技术基础的商务运作方式和盈利模式。研究和分析电子商务模式的分类体系，挖掘新的电子商务模式，为电子商务模式创新提供途径，有助于为企业制定特定的电子商务策略和实施步骤，为品牌做到更大更强。创客部落基于一定技术基础的商务运作方式和盈利模式。研究和分析电子商务模式的分类体系，挖掘新的电子商务模式，为电子商务模式创新提供途径，有助于为企业制定特定的电子商务策略和实施步骤，为品牌做到更大更强。';
  }

  loadAnalyze() {
    this.analyze = this.productDataService.getProduct();
    this.initChart();
  }

  initChart() {
    this.setInvestmentTrend(this.analyze);
    this.setDownloadTrend(this.analyze);
    this.setWebsiteTrend(this.analyze);
    this.handleRetention(this.analyze.seriesData);
  }

  years = [];
  year = new Date().getFullYear();
  linecColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      function handleDate(date) {
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年 / ${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>DAU：<span>${this.dau}万人</span></p>
       <p>曝光量：<span>${this.exposure}</span></p>
      </div>`;
    },
  };
  downloadColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      function handleDate(date) {
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年 / ${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>App排名：<span>${this.rank} 名</span></p>
       <p>下载量：<span>${this.download} 万次</span></p>
      </div>`;
    },
  };
  retentionColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      function handleDate(date) {
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>网站排名：<span>${this.item}名</span></p>
      </div>`;
    },
  };
  setInvestmentTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    this.trendHg.xAxis.categories = investmentTrend.x.map(item => handleDate(item));
    this.trendHg.series = [{
      name: 'DAU (日活跃用户量) / 人',
      color: '#88C4FF',
      data: investmentTrend.seriesData.dau.map((item, i) => ({
        y: item,
        dau: item.toFixed(2),
        exposure: Number(investmentTrend.exposure.data[i]),
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }, {
      color: '#F1FAFF',
      name: '曝光量',
      data: investmentTrend.exposure.data.map((item, i) => ({
        y: Number(item),
        dau: investmentTrend.seriesData.dau[i].toFixed(2),
        exposure: Number(item),
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
    this.downloadHg.xAxis.categories = investmentTrend.appRank.x.map(item => handleDate(item));
    this.downloadHg.series = [{
      name: 'App排名 / 位',
      color: '#9cd141',
      data: investmentTrend.appRank.data.map((item, i) => ({
        y: Number(item),
        rank: item,
        download: investmentTrend.download.data[i],
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }, {
      color: '#f1fae2',
      name: '下载量 / 万次',
      data: investmentTrend.download.data.map((item, i) => ({
        y: Number(item),
        rank: investmentTrend.appRank.data[i],
        download: item,
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
      lineWidth: 1,
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
        text: '<h5 class="trend-title">用户量 / 曝光量</h5>',
      },
      xAxis: {
        tickWidth: 0,
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: '#ddd',
          dashStyle: 'LongDash',
        },
        categories: [],
      },
      yAxis: [{
        lineColor: '#E7E7E7',
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        tickPixelInterval: 34,
        labels: {
          format: '{value}万',
        },
        title: {
          enabled: false,
        },
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: '#F2F4F5',
        lineColor: '#E7E7E7',
        lineWidth: 1,
        tickPixelInterval: 34,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
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
        text: '<h5 class="trend-title">App排名 / 下载量</h5>',
      },
      xAxis: {
        tickWidth: 0,
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: '#ddd',
          dashStyle: 'LongDash',
        },
        categories: [],
      },
      yAxis: [{
        lineColor: '#E7E7E7',
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        tickPixelInterval: 34,
        labels: {
          format: '{value}',
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
        tickPixelInterval: 34,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
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
        text: '<h5 class="trend-title">网站排名</h5>',
      },
      xAxis: {
        tickWidth: 1,
        tickInterval: 5,
        tickPosition: 'inside',
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
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
        tickInterval: 5,
        labels: {
          format: '{value}',
        },
        title: {
          enabled: false,
        },
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: '#F2F4F5',
        lineColor: '#E7E7E7',
        lineWidth: 1,
        tickInterval: 4,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
        },
        opposite: false,
      }],
    };
  }

  handleRetention(d) {
    this.retentionList.forEach((item) => {
      const a = d[item.key];
      item.percent = a[a.length - 1].toFixed(2);
    });
    let index = 0;
    const width = 250;
    this.retentionList.forEach((item, i) => {
      if (this.retentionList[i].percent - this.retentionList[index].percent > 0) {
        index = i;
      }
    });
    this.retentionList.forEach((item, i) => {
      if (index === i) {
        item.width = width;
      } else {
        item.width = `${width * (item.percent / this.retentionList[index].percent)}px`;
      }
    });
  }

}
