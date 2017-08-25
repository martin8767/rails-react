class Lifts extends React.Component {
  render() {
  	const myList = this.props.data
    return (
    	<div className="lifts">
    		<h1 className="title"> Lifts </h1>
    		<table className="table table-bordered">
			    <thead>
			      <tr>
			        <th>ID</th>
			        <th>Liftname</th>
			        <th>Weightlifted (kg)</th>
                    <th>Repetitions </th>
			      </tr>
			    </thead>
			    <tbody>
                    {myList.map((lift) => 
    	   				<tr> 
    	   					<td>{lift.id} </td> 
                            <td>{lift.liftname} </td>
                            <td>{lift.weightlifted} </td>
                            <td>{lift.repsperformed} </td>
    	   				</tr>
                    )}
	   			</tbody>
	   		</table>
    	</div>
    ); 
  }
}