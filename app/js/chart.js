let ctx = document.getElementById('myChart').getContext('2d');
let ctxWeek = document.getElementById('myChartWeek').getContext('2d');
let ctxMonth = document.getElementById('myChartMonth').getContext('2d');

ctx.height = 540;
ctxWeek.height = 540;
ctxMonth.height = 540;
let gradientStroke = ctx.createLinearGradient(0, 130, 0, 490);
gradientStroke.addColorStop(0, "rgba(255, 112, 62, 0.2)");
gradientStroke.addColorStop(1, "rgba(255, 112, 62, 0)");

let gradientStrokeWeek = ctxWeek.createLinearGradient(0, 130, 0, 490);
gradientStrokeWeek.addColorStop(0, "rgba(255, 112, 62, 0.2)");
gradientStrokeWeek.addColorStop(1, "rgba(255, 112, 62, 0)");

let gradientStrokeMonth = ctxMonth.createLinearGradient(0, 130, 0, 490);
gradientStrokeMonth.addColorStop(0, "rgba(255, 112, 62, 0.2)");
gradientStrokeMonth.addColorStop(1, "rgba(255, 112, 62, 0)");

let chart = new Chart(ctx, {

  type: 'line',

  data: {
    labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
    datasets: [{
      label: 'Time',
      backgroundColor: gradientStroke,
      data: [11, 37, 35, 39, 41, 23],
      borderColor: '#FF703E',
      borderWidth: 3,


    }],


  },

  // Configuration options go here
  options: {
    responsive: true,
    legend: {
      display: false
    },


    maintainAspectRatio: false,
    scaleStartValue: 0,
    scaleStepWidth: 50,

    scales: {

      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          color: 'rgba(0,0,0,0)',
          zeroLineColor: 'rgba(0,0,0,0)'
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          fontSize: 1,
          padding: 0,
          fontColor: 'rgba(51, 51, 51, 0)'
        }
      }],

      xAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          stepSize: 2.5,
          suggestedMax: 10,
          fontColor: 'rgba(57, 55, 56, 0.75)',
          fontSize: 14,
          padding: 15,
          maxTicksLimit: 6
        },
        gridLines: {
          drawBorder: false,
          color: 'rgba(235, 235, 235, 0.4)',
          tickMarkLength: 0,
          zeroLineColor: 'rgba(0,0,0,0.1)',
          offsetGridLine: true
        }
      }]

    }
  }
});

let chartWeek = new Chart(ctxWeek, {

  type: 'line',

  data: {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [{
      label: 'Time',
      backgroundColor: gradientStroke,
      data: [58, 37, 45, 39, 41, 50],
      borderColor: '#FF703E',
      borderWidth: 3,
    }],


  },

  // Configuration options go here
  options: {
    responsive: true,
    legend: {
      display: false
    },


    maintainAspectRatio: false,
    scaleStartValue: 0,
    scaleStepWidth: 50,

    scales: {

      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          color: 'rgba(0,0,0,0)',
          zeroLineColor: 'rgba(0,0,0,0)'
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          fontSize: 1,
          padding: 0,
          fontColor: 'rgba(51, 51, 51, 0)'
        }
      }],

      xAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          stepSize: 2.5,
          suggestedMax: 10,
          fontColor: 'rgba(57, 55, 56, 0.75)',
          fontSize: 14,
          padding: 15,
          maxTicksLimit: 6
        },
        gridLines: {
          drawBorder: false,
          color: 'rgba(235, 235, 235, 0.4)',
          tickMarkLength: 0,
          zeroLineColor: 'rgba(0,0,0,0.1)',
          offsetGridLine: true
        }
      }]

    }
  }
});

let chartMonth = new Chart(ctxMonth, {

  type: 'line',

  data: {
    labels: ['April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
      label: 'Time',
      backgroundColor: gradientStroke,
      data: [10, 9, 8, 12, 15, 18],
      borderColor: '#FF703E',
      borderWidth: 3,


    }],


  },

  // Configuration options go here
  options: {
    responsive: true,
    legend: {
      display: false
    },


    maintainAspectRatio: false,
    scaleStartValue: 0,
    scaleStepWidth: 50,

    scales: {

      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          color: 'rgba(0,0,0,0)',
          zeroLineColor: 'rgba(0,0,0,0)'
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          fontSize: 1,
          padding: 0,
          fontColor: 'rgba(51, 51, 51, 0)'
        }
      }],

      xAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          stepSize: 2.5,
          suggestedMax: 10,
          fontColor: 'rgba(57, 55, 56, 0.75)',
          fontSize: 14,
          padding: 15,
          maxTicksLimit: 6
        },
        gridLines: {
          drawBorder: false,
          color: 'rgba(235, 235, 235, 0.4)',
          tickMarkLength: 0,
          zeroLineColor: 'rgba(0,0,0,0.1)',
          offsetGridLine: true
        }
      }]

    }
  }
});


