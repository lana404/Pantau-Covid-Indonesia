import Chart from 'chart.js';
import 'materialize-css/dist/css/materialize.min.css';
var moment = require('moment');

class AppArea extends HTMLElement {
  constructor() {
    super();
    this._baseUrl = "https://kawalcovid19.harippe.id/api/summary";
  }

  connectedCallback() {
    this.render();
  }

  render() {
      fetch(`${this._baseUrl}`)
       .then(response => {
          // Mengembalikan object JSON
          return response.json();
       })
       .then(responseJson => {
         console.log(responseJson);
         this.element(responseJson);
         this.myPieChart(responseJson);
       })
       .catch(error => {
           window.alert(error);
       })
  }

  element(data) {
    var tanggal = moment(data['metadata']['lastUpdatedAt']).format('DD MMMM YYYY, h:mm:ss a');

    this.innerHTML = `
      <style>
        #diagram, #angka {
          margin :5em 0.5em;
        }

        #diagram>div canvas {
          display : blok;
          max-width : 50em;
          margin : auto;
          padding : auto;
        }
        #angka {
          margin-top : -5px
        }
        div.row > p {
          text-align : left;
          margin : 50px 0 0 20px;
        }

        #diagram h5 {
          margin-left : 10px
        }

        #diagram .row {
          margin-top : 10px
        }
      </style>
      <div class="row">
        <p> Diupdate pada ${tanggal}</p>
      </div>
      <div id="angka" class="row">
        <div class="col s12 m6 l3">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <p> Terkonfirmasi </p>
                <h4> ${data['confirmed']['value']} </h4>
                <p> Orang </p>
              </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <p> Sembuh </p>
                <h4> ${data['recovered']['value']} </h4>
                <p> Orang </p>
              </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <p> Meninggal </p>
                <h4> ${data['deaths']['value']} </h4>
                <p> Orang </p>
              </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <p> Aktif </p>
                <h4> ${data['activeCare']['value']} </h4>
                <p> Orang </p>
              </div>
            </div>
        </div>
      </div>
      <div id="diagram" class="row">
        <h5> Diagram Lingkaran </h5>
        <div class="row">
          <div class="col s12 m12 l12">
            <canvas id="myPieChart"></canvas>
          </div>
        </div>
      </div>
    `;
  }

  myPieChart(data) {
    var ctx = document.getElementById('myPieChart');
    var data = {
      labels: [
        'Sembuh',
        'Meninggal',
        'Aktif/Belum Sembuh'
      ],

      datasets: [{
        data: [
          data['recovered']['value'],
          data['deaths']['value'],
          data['activeCare']['value']
        ],
        backgroundColor: [
          'rgba(255, 23, 68, 0.9)',
          'rgba(0, 200, 83, 0.9)',
          'rgba(255, 235, 59, 0.9)'
        ],
        borderColor: [
          'rgba(255, 23, 68, 0.2)',
          'rgba(0, 200, 83, 0.2)',
          'rgba(255, 235, 59, 0.2)'
        ],
          borderWidth: 1
      }],
    };
    var option = {
      animation : {
        animateRotate	: true,
        animateScale : true
      },
    }
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: option
    });
  }

}

customElements.define('app-area', AppArea);
