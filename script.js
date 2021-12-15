
    const labels =["01/2019","02/2019","03/2019","04/2019","05/2019",
      "06/2019","07/2019","08/2019","09/2019","10/2019","11/2019",
      "12/2019","01/2020","02/2020","03/2020","04/2020","05/2020",
      "06/2020","07/2020","08/2020","09/2020","10/2020","11/2020",
      "12/2020","01/2021","02/2021","03/2021","04/2021","05/2021",
      "06/2021","07/2021","08/2021","09/2021","10/2021","11/2021"];

        const CHART_COLORS = {
          red: 'rgb(255, 0, 0)',
          orange: 'rgb(255, 159, 64)',
          yellow: 'rgb(255, 205, 86)',
          green: 'rgb(75, 192, 192)',
          blue: 'rgb(54, 162, 235)',
          purple: 'rgb(153, 102, 255)',
          grey: 'rgb(201, 203, 207)',
          darkgreen: 'rgb(0,100,0)',
          brown: 'rgb(82, 42, 0)',
          pink: 'rgb(255, 90, 121)',
          lime: 'rgb(0,255,0)',
          aqua: 'rgb(0,255,255)',
          magenta: 'rgb(255,0,255)',
          maroon: 'rgb(128,0,0)',
          olive: 'rgb(128,128,0)',
          teal: 'rgb(0,128,128)',
          navy: 'rgb(0,0,128)',
          skyblue: 'rgb(135,206,235)',
          indigo: 'rgb(75,0,130)',
          wheat: 'rgb(245,222,179)',
          tan: 'rgb(210,180,140)',
          gold: 'rgb(218,165,32)'
        };
    
        const CHART_COLORS_50_Percent = {
          red: 'rgba(255, 0, 0, 0.5)',
          orange: 'rgba(255, 159, 64, 0.5)',
          yellow: 'rgba(255, 205, 86, 0.5)',
          green: 'rgba(75, 192, 192, 0.5)',
          blue: 'rgba(54, 162, 235, 0.5)',
          purple: 'rgba(153, 102, 255, 0.5)',
          grey: 'rgba(201, 203, 207, 0.5)',
          darkgreen: 'rgb(0, 100, 0, 0.5)',
          brown: 'rgb(82, 42, 0, 0.5)',
          pink: 'rgb(255, 90, 121, 0.5)',
          lime: 'rgb(0,255,0,0.5)',
          aqua: 'rgb(0,255,255,0.5)',
          magenta: 'rgb(255,0,255,0.5)',
          maroon: 'rgb(128,0,0,0.5)',
          olive: 'rgb(128,128,0,0.5)',
          teal: 'rgb(0,128,128,0.5)',
          navy: 'rgb(0,0,128,0.5)',
          skyblue: 'rgb(135,206,235,0.5)',
          indigo: 'rgb(75,0,130,0.5)',
          wheat: 'rgb(245,222,179,0.5)',
          tan: 'rgb(210,180,140,0.5)',
          gold: 'rgb(218,165,32,0.5)'
        };

    const data = {
      labels: labels,
      datasets: []
    };

    let dataset =
        {
          label: 'Education and health services',
          data: [],
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS_50_Percent.red,
          hidden: true
        }

    let dataset1 =
        {
          label: 'Total Nonfarm',
          data: [],
          borderColor: CHART_COLORS.blue,
          backgroundColor: CHART_COLORS_50_Percent.blue,
          hidden: true
        }

    let dataset2 =
        {
          label: 'Total Private',
          data: [],
          borderColor: CHART_COLORS.orange,
          backgroundColor: CHART_COLORS_50_Percent.orange,
          hidden: true
        }

    let dataset3 =
        {
          label: 'Goods-Producing',
          data: [],
          borderColor: CHART_COLORS.yellow,
          backgroundColor: CHART_COLORS_50_Percent.yellow,
          hidden: true
        }

    let dataset4 =
        {
          label: 'Service-Providing',
          data: [],
          borderColor: CHART_COLORS.green,
          backgroundColor: CHART_COLORS_50_Percent.green,
          hidden: true
        }

    let dataset5 =
        {
          label: 'Private Service-Providing',
          data: [],
          borderColor: CHART_COLORS.purple,
          backgroundColor: CHART_COLORS_50_Percent.purple,
          hidden: true
        }

    let dataset6 =
        {
          label: 'Mining and Logging',
          data: [],
          borderColor: CHART_COLORS.grey,
          backgroundColor: CHART_COLORS_50_Percent.grey,
          hidden: true
        }

    let dataset7 =
        {
          label: 'Construction',
          data: [],
          borderColor: CHART_COLORS.darkgreen,
          backgroundColor: CHART_COLORS_50_Percent.darkgreen,
          hidden: true
        }

    let dataset8 =
        {
          label: 'Manufacturing',
          data: [],
          borderColor: CHART_COLORS.brown,
          backgroundColor: CHART_COLORS_50_Percent.brown,
          hidden: true
        }

    let dataset9 =
        {
          label: 'Durable Goods',
          data: [],
          borderColor: CHART_COLORS.pink,
          backgroundColor: CHART_COLORS_50_Percent.pink,
          hidden: true
        }

    let dataset10 =
        {
          label: 'Nondurable Goods',
          data: [],
          borderColor: CHART_COLORS.lime,
          backgroundColor: CHART_COLORS_50_Percent.lime,
          hidden: true
        }

    let dataset11 =
        {
          label: 'Trade, Transportation, and Utilities',
          data: [],
          borderColor: CHART_COLORS.aqua,
          backgroundColor: CHART_COLORS_50_Percent.aqua,
          hidden: true
        }

    let dataset12 =
        {
          label: 'Wholesale Trade',
          data: [],
          borderColor: CHART_COLORS.magenta,
          backgroundColor: CHART_COLORS_50_Percent.magenta,
          hidden: true
        }

    let dataset13 =
        {
          label: 'Retail Trade',
          data: [],
          borderColor: CHART_COLORS.maroon,
          backgroundColor: CHART_COLORS_50_Percent.maroon,
          hidden: true
        }

    let dataset14 =
        {
          label: 'Transportation and Warehousing',
          data: [],
          borderColor: CHART_COLORS.olive,
          backgroundColor: CHART_COLORS_50_Percent.olive,
          hidden: true
        }

    let dataset15 =
        {
          label: 'Utilities',
          data: [],
          borderColor: CHART_COLORS.teal,
          backgroundColor: CHART_COLORS_50_Percent.teal,
          hidden: true
        }
    
    let dataset16 =
        {
          label: 'Information',
          data: [],
          borderColor: CHART_COLORS.navy,
          backgroundColor: CHART_COLORS_50_Percent.navy,
          hidden: true
        }

    let dataset17 =
        {
          label: 'Financial Activities',
          data: [],
          borderColor: CHART_COLORS.skyblue,
          backgroundColor: CHART_COLORS_50_Percent.skyblue,
          hidden: true
        }

    let dataset18 =
        {
          label: 'Professional and Business Services',
          data: [],
          borderColor: CHART_COLORS.indigo,
          backgroundColor: CHART_COLORS_50_Percent.indigo,
          hidden: true
        }

    let dataset19 =
        {
          label: 'Leisure and hospitality',
          data: [],
          borderColor: CHART_COLORS.wheat,
          backgroundColor: CHART_COLORS_50_Percent.wheat,
          hidden: true
        }

    let dataset20 =
        {
          label: 'Other services',
          data: [],
          borderColor: CHART_COLORS.tan,
          backgroundColor: CHART_COLORS_50_Percent.tan,
          hidden: true
        }

    let dataset21 =
        {
          label: 'Government',
          data: [],
          borderColor: CHART_COLORS.gold,
          backgroundColor: CHART_COLORS_50_Percent.gold,
          hidden: true
        }
  

    function responseReceivedHandler() {
        if (this.status == 200) {
        
        let datas = this.response.Results.series[0].data;  

        for (let i = 0; i<datas.length; i++) {
          dataset.data.push(datas[i].value)
        }
      }
    }

    function responseReceivedHandler1() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset1.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler2() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset2.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler3() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset3.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler4() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset4.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler5() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset5.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler6() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset6.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler7() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset7.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler8() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset8.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler9() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset9.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler10() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset10.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler11() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset11.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler12() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset12.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler13() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset13.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler14() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset14.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler15() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset15.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler16() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset16.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler17() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset17.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler18() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset18.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler19() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset19.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler20() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset20.data.push(datas[i].value)
      }
    }
  }

    function responseReceivedHandler21() {
      if (this.status == 200) {
      
      let datas = this.response.Results.series[0].data;  

      for (let i = 0; i<datas.length; i++) {
        dataset21.data.push(datas[i].value)
      }
    }
  }

      data.datasets.push(dataset)
      data.datasets.push(dataset1)
      data.datasets.push(dataset2)
      data.datasets.push(dataset3)
      data.datasets.push(dataset4)
      data.datasets.push(dataset5)
      data.datasets.push(dataset6)
      data.datasets.push(dataset7)
      data.datasets.push(dataset8)
      data.datasets.push(dataset9)
      data.datasets.push(dataset10)
      data.datasets.push(dataset11)
      data.datasets.push(dataset12)
      data.datasets.push(dataset13)
      data.datasets.push(dataset14)
      data.datasets.push(dataset15)
      data.datasets.push(dataset16)
      data.datasets.push(dataset17)
      data.datasets.push(dataset18)
      data.datasets.push(dataset19)
      data.datasets.push(dataset20)
      data.datasets.push(dataset21)


    let APIkey = ""
    //To get an API Key, go to https://www.bls.gov/developers/ and follow the intructions.
    //Then input your API into the the 'APIkey' varriable above and the application should run smoothly.


    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU6500000001?registrationkey="+APIkey);
    xhr.send();

    let xhr1 = new XMLHttpRequest();
    xhr1.responseType = "json";
    xhr1.addEventListener("load", responseReceivedHandler1);
    xhr1.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0000000001?registrationkey="+APIkey);
    xhr1.send();

    let xhr2 = new XMLHttpRequest();
    xhr2.responseType = "json";
    xhr2.addEventListener("load", responseReceivedHandler2);
    xhr2.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0500000001?registrationkey="+APIkey);
    xhr2.send();

    let xhr3 = new XMLHttpRequest();
    xhr3.responseType = "json";
    xhr3.addEventListener("load", responseReceivedHandler3);
    xhr3.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0600000001?registrationkey="+APIkey);
    xhr3.send();

    let xhr4 = new XMLHttpRequest();
    xhr4.responseType = "json";
    xhr4.addEventListener("load", responseReceivedHandler4);
    xhr4.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0700000001?registrationkey="+APIkey);
    xhr4.send();

    let xhr5 = new XMLHttpRequest();
    xhr5.responseType = "json";
    xhr5.addEventListener("load", responseReceivedHandler5);
    xhr5.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0800000001?registrationkey="+APIkey);
    xhr5.send();

    let xhr6 = new XMLHttpRequest();
    xhr6.responseType = "json";
    xhr6.addEventListener("load", responseReceivedHandler6);
    xhr6.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU1000000001?registrationkey="+APIkey);
    xhr6.send();

    let xhr7 = new XMLHttpRequest();
    xhr7.responseType = "json";
    xhr7.addEventListener("load", responseReceivedHandler7);
    xhr7.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU2000000001?registrationkey="+APIkey);
    xhr7.send();

    let xhr8 = new XMLHttpRequest();
    xhr8.responseType = "json";
    xhr8.addEventListener("load", responseReceivedHandler8);
    xhr8.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU3000000001?registrationkey="+APIkey);
    xhr8.send();

    let xhr9 = new XMLHttpRequest();
    xhr9.responseType = "json";
    xhr9.addEventListener("load", responseReceivedHandler9);
    xhr9.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU3100000001?registrationkey="+APIkey);
    xhr9.send();

    let xhr10 = new XMLHttpRequest();
    xhr10.responseType = "json";
    xhr10.addEventListener("load", responseReceivedHandler10);
    xhr10.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU3200000001?registrationkey="+APIkey);
    xhr10.send();

    let xhr11 = new XMLHttpRequest();
    xhr11.responseType = "json";
    xhr11.addEventListener("load", responseReceivedHandler11);
    xhr11.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4000000001?registrationkey="+APIkey);
    xhr11.send();

    let xhr12 = new XMLHttpRequest();
    xhr12.responseType = "json";
    xhr12.addEventListener("load", responseReceivedHandler12);
    xhr12.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4142000001?registrationkey="+APIkey);
    xhr12.send();

    let xhr13 = new XMLHttpRequest();
    xhr13.responseType = "json";
    xhr13.addEventListener("load", responseReceivedHandler13);
    xhr13.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4200000001?registrationkey="+APIkey);
    xhr13.send();

    let xhr14 = new XMLHttpRequest();
    xhr14.responseType = "json";
    xhr14.addEventListener("load", responseReceivedHandler14);
    xhr14.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4300000001?registrationkey="+APIkey);
    xhr14.send();

    let xhr15 = new XMLHttpRequest();
    xhr15.responseType = "json";
    xhr15.addEventListener("load", responseReceivedHandler15);
    xhr15.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4422000001?registrationkey="+APIkey);
    xhr15.send();

    let xhr16 = new XMLHttpRequest();
    xhr16.responseType = "json";
    xhr16.addEventListener("load", responseReceivedHandler16);
    xhr16.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU5000000001?registrationkey="+APIkey);
    xhr16.send();

    let xhr17 = new XMLHttpRequest();
    xhr17.responseType = "json";
    xhr17.addEventListener("load", responseReceivedHandler17);
    xhr17.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU5500000001?registrationkey="+APIkey);
    xhr17.send();

    let xhr18 = new XMLHttpRequest();
    xhr18.responseType = "json";
    xhr18.addEventListener("load", responseReceivedHandler18);
    xhr18.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU6000000001?registrationkey="+APIkey);
    xhr18.send();

    let xhr19 = new XMLHttpRequest();
    xhr19.responseType = "json";
    xhr19.addEventListener("load", responseReceivedHandler19);
    xhr19.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU7000000001?registrationkey="+APIkey);
    xhr19.send();

    let xhr20 = new XMLHttpRequest();
    xhr20.responseType = "json";
    xhr20.addEventListener("load", responseReceivedHandler20);
    xhr20.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU8000000001?registrationkey="+APIkey);
    xhr20.send();

    let xhr21 = new XMLHttpRequest();
    xhr21.responseType = "json";
    xhr21.addEventListener("load", responseReceivedHandler21);
    xhr21.open("GET", "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU9000000001?registrationkey="+APIkey);
    xhr21.send();
    
        const config = {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Line Chart'
              }
            }
          }
        };

    
        const myChart = new Chart(
          document.getElementById('myChart'),
            config);

    
