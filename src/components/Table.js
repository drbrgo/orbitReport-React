import "./styling.css";

//having trouble with .map syntax... why does sat.map yield undefined? because i had the callbacks arranged as (id, data)?!

const Table = ({ sat }) => {
  let displayedSats = sat.map((data, id)=> {
    return (data.operational === true? 
      <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>Operational</td>
          </tr>
    :
    <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>Not operational</td>
          </tr>
    )}
  );
  console.log(displayedSats.data);
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
         {/* {sat.map((id, data)=>{
            {console.log(data.name)};
            return (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational}</td>
          </tr>
          )})} */}
          {displayedSats}
        
        </tbody>
      </table>
  );
};

export default Table;