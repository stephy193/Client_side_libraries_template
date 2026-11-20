// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Campusgarten', 'Mühlbach', 'Interactive Media Lab', 'Mensa', 'Terasse'];
const votes = [12, 9, 5, 4, 15];
const pastVotes =[4,12,3,9,13]

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  type: 'doughnut',                 // try: 'line', 'pie', 'doughnut'
  data: {
    labels: places,         // labels on the x-axis
    datasets: [{
      label: 'Number of votes',
      data: votes              // values (same order as labels!)
    },
    {label: 'Past Number of votes',
      data: pastVotes
    }
  ]

  },
  options: {
    scales: {
      y: { beginAtZero: true } // y-axis starts at 0
    }
  }
});