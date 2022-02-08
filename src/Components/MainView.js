import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [40, 63, 19, 54, 23, 43, 17, 20, 60, 38, 52, 12],
        backgroundColor: '#5f95fa71',
      },
      {
        label: 'Dataset 2',
        data: [35, 80, 32, 34, 43, 3, 34, 14, 80, 60, 22, 19],
        backgroundColor: '#f5373750',
      },


    ],
  };
  
function MainView() {
    return (
        <div className='main_view'>
             <Bar options={options} data={data} />
        </div>
    )
    
}

export default MainView;
