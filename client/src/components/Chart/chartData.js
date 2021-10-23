import { Bar,Line } from "react-chartjs-2";

export const Data = ({ chartData }) => {
  return (
    <div>
    < Line
        style={{width: '65rem', margin:'11rem' ,height: '50rem'}}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Line Graph"
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }
        }}
      />
      <Bar
        style={{width: '65rem', margin:'11rem' ,height: '50rem'}}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Bar Graph"
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }
        }}
      />
    </div>
  );
};
