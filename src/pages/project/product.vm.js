import { utls } from 'krData';
import ProductDataService from './productData.service';
export default class ProductVM {
  constructor(product) {
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
    console.log(this.analyze);
    Object.keys(this.analyze).forEach(key => {
        if (this.analyze.x.length || (this.analyze[key].data && this.analyze[key].data.length)) {
          this.hasData = true;
        }
    });
    Object.keys(this.analyze.seriesData).forEach(item => {
      if (this.analyze.seriesData[item].length) {
        this.hasData = true;
      }
    });
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
        if (!date || !date.length || !date.slice) return;
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年 / ${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>用户量：<span>${this.dau}万人</span></p>
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
       <p>下载量：<span>${this.download} 万次</span></p>
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
       <p>网站排名：<span>${this.item}名</span></p>
      </div>`;
    },
  };
  setInvestmentTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    const arr = investmentTrend.x && investmentTrend.x.length
      ? investmentTrend.x : investmentTrend.exposure.x;
    this.trendHg.xAxis.categories = arr.map(item => handleDate(item));
    this.trendHg.series = [{
      name: '用户量 / 人',
      color: '#88C4FF',
      data: investmentTrend.seriesData.dau.map((item, i) => ({
        y: item,
        dau: item.toFixed(2),
        exposure: investmentTrend.exposure.data[i] || 0,
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
        dau: investmentTrend.seriesData.dau[i] ? investmentTrend.seriesData.dau[i].toFixed(2) : 0,
        exposure: Number(item) || 0,
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
      name: 'App排名 / 位',
      color: '#9cd141',
      data: investmentTrend.appRank.data.map((item, i) => ({
        y: Number(item),
        rank: item,
        download: investmentTrend.download.data[i] || 0,
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }, {
      color: '#D9EDB4 ',
      name: '下载量 / 万次',
      data: investmentTrend.download.data.map((item, i) => ({
        y: Number(item),
        rank: investmentTrend.appRank.data[i] || 0,
        download: item || 0,
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

}
