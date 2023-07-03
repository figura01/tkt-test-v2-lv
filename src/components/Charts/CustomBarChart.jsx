import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Label, ResponsiveContainer} from 'recharts'

const ChartCa = ({data}) => {
  return <BarChart width={520} height={450} data={data}
    margin={{ top: 40, right: 0, left: 10, bottom: 40 }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year">
      <Label value="Année" offset={5} position="insideBottomRight" dy={"20"} />
    </XAxis>
   
    <YAxis>
      <Label value="Montant (en €)" offset={5} dy={-"30"} position="insideTopLeft" dx={-15}/>
    </YAxis>
    <Tooltip />
    
    <Bar dataKey="ca" fill="#8884d8" />
  </BarChart>
}

const ChartEbitda = ({data}) => {
  return <BarChart width={520} height={450} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year">
      <Label value="Année" offset={0} position="insideBottomRight" dy={"20"}/>
    </XAxis>
    <YAxis>
      <Label value="Montant (en €)" offset={5} dy={-"30"} position="insideTopLeft" dx={-15}/>
    </YAxis>
    <Tooltip />
    
    <Bar dataKey="year" fill="#8884d8" />
  </BarChart>
}

const ChartLoss = ({data}) => {
  return <BarChart width={520} height={450} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year">
      <Label value="Année" offset={5} position="insideBottomRight" dy={"20"} />
    </XAxis>
    <YAxis>
    <Label value="Montant (en €)" offset={5} dy={-"30"} position="insideTopLeft" dx={-15}/>
    </YAxis>
    <Tooltip />
    
    <Bar dataKey="loss" fill="#8884d8" />
  </BarChart>
}

const ChartMargin = ({data}) => {
  return <BarChart width={520} height={450} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year">
      <Label value="Année" offset={5} position="insideBottomRight" dy={"20"} />
    </XAxis>
    <YAxis>
      <Label value="Montant (en €)" offset={5} dy={-"30"} position="insideTopLeft" dx={-15}/>
    </YAxis>
    <Tooltip />
    
    <Bar dataKey="margin" fill="#8884d8" />
  </BarChart>
}

const CustomBarChart = ({type, title, data}) => {
  return <div className="flex flex-col w-full border rounded p-4">
    <h3>{title}</h3>
    <ResponsiveContainer width="100%" height="80%">
      {type=== 'ca' ? 
        <ChartCa data={data} />  
      : type === 'ebitda' ? 
        <ChartEbitda data={data} />
      : type === 'loss' ? 
        <ChartLoss data={data} />
      : type === 'margin' ?
        <ChartMargin data={data} />
      : <ChartCa data={data} />  
      }
    </ResponsiveContainer>
  </div>
}

export default CustomBarChart