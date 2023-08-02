import React from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import data from "./data";
import { Container } from 'react-bootstrap';


const Components4 = () => {
  return (
    <div>
        <Container style={{margin:"2rem"}} >
        <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
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
          <Area type="monotone" dataKey="last_year" stroke="#8884d8"  />
          <Area type="monotone" dataKey="this_year" stroke="#8884d8"  />
        </AreaChart>
      </ResponsiveContainer>
      </Container>
    </div>
  )
}

export default Components4
