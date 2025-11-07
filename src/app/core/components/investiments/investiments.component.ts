import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-investiments',
  templateUrl: './investiments.component.html',
  styleUrls: ['./investiments.component.css'],
})
export class InvestimentsComponent implements OnInit {
  months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  listaCarteira: any[] = [];
  valores = [
    150538.5, 174702.87, 173927.67, 239038.41, 405933.93, 568510.13, 757766.54,
  ];
  variacoesPercentuais: string[] = [];
  constructor() {}

  ngOnInit(): void {
    const valores = this.dataCarteiraTotal.datasets[0].data;
    const total = valores.reduce((acc, v) => acc + v, 0);

    this.variacoesPercentuais = this.valores.map((valor, i) => {
      if (i === 0) return '—'; // primeiro ano não tem comparação
      const anterior = this.valores[i - 1];
      const variacao = ((valor - anterior) / anterior) * 100;
      return `${variacao.toFixed(2)}%`;
    });

    // Gera a lista lateral com nome, valor e %
    this.listaCarteira = this.dataCarteiraTotal.labels.map((label, i) => {
      const valor = valores[i];
      const percentual = ((valor / total) * 100).toFixed(2);
      return {
        label,
        valor,
        percentual,
        cor: this.dataCarteiraTotal.datasets[0].backgroundColor[i],
      };
    });
  }

  data = {
    labels: this.years,
    datasets: [
      {
        label: 'Evolução Anual de Patrimônio (R$)',
        data: [
          150538.5, 174702.87, 173927.67, 239038.41, 405933.93, 568510.13,
          757766.54,
        ],
        fill: false,
        borderColor: 'rgba(83, 75, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  dataCarteiraTotal = {
    labels: ['Tesouro Direto', 'FII', 'Ações', 'ETF', 'CDB'],
    datasets: [
      {
        label: 'Minha Carteira',
        data: [608640.95, 115995.15, 16886.73, 11717.93, 4525.78],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgba(5, 136, 23, 1)',
          'rgba(149, 28, 160, 1)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  ngAfterViewInit(): void {
    new Chart('carteiraTotal', {
      type: 'doughnut',
      data: this.dataCarteiraTotal,
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (context) => {
                const dataset = context.dataset;
                const total = dataset.data.reduce(
                  (acc: number, value: number) => acc + value,
                  0
                );
                const value = dataset.data[context.dataIndex];
                const percentage = ((value / total) * 100).toFixed(2);
                return `${context.label}: ${value} (${percentage}%)`;
              },
            },
          },
        },
      },
    });

    new Chart('graficoAnual', {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: {
              label: (context) => {
                const index = context.dataIndex;
                const valor = this.valores[index];
                const variacao = this.variacoesPercentuais[index];

                return [
                  `Patrimônio: R$ ${valor.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`,
                  index === 0 ? '' : `Variação: ${variacao}`,
                ];
              },
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) => 'R$ ' + value.toLocaleString('pt-BR'),
            },
          },
        },
      },
    });
  }
}
