import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import data from "./data";
import { Container } from 'react-bootstrap';


const Component6 = () => {
  return (
    <div>
        <Container style={{margin:"2rem"}}>
        <h4>Comparions</h4>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="last_year" fill="#8884d8" />
          <Bar dataKey="this_year" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </Container>
    </div>
  )
}

export default Component6
