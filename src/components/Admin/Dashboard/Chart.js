import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  plugins,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { background, position } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const labels = getLastYearMonths();

  const options = {
    reponsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [1, 2, 3, 4],
        borderColor: 'rgba(107,70,193,0.5)',
        backgroundColor: '#6b46c1',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export const DoughnutChart = () => {

    
    
      const data = {
        labels:['Subscribed','Not Subscriped'],
        datasets: [
          {
            label: 'Views',
            data: [3, 20],
            borderColor: ['rgba(62,12,171)','rgba(214,43,129'],
            backgroundColor: ['rgba(62,12,171,0.3)','rgba(214,43,129,0.3'],
            borderWidth: 1,
          },
        ],
      };
  return <Doughnut data={data}/>
};

function getLastYearMonths(){
    const labels=[];

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const currentMonth=new Date().getMonth();
    
    const remain= 11-currentMonth;
    for(let i=currentMonth;i<months.length;i--){
        const element=months[i];
        labels.unshift(element);
        if(i===0) break;
    }
    console.log(labels);
    for(let i=11;i>remain;i--){
        const element=months[i];
        labels.unshift(element);
    }
    return labels;
}
getLastYearMonths();

