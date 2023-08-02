import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from "./data";
import { Container } from 'react-bootstrap';

const Component2 = () => {
  return (
    <>
        <Container style={{margin:"2rem"}}>
        <h4 >Customers by device</h4>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Months"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#d3d3d3' }} />
          <Legend />
          <Line type="monotone" dataKey="last_year" stroke="red" activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="this_year" stroke="green" activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
      </Container>
    </>
  )
}

export default Component2
