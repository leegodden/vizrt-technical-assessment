import React from 'react';
import { Table } from 'react-bootstrap';

const UserTable = () => {
	return (
		<div>
			<h3 className="h3">User List</h3>
			<Table striped bordered hover id="show">
				<thead>
					<tr>
						<td>
							<b>Id</b>
						</td>
						<td>
							<b>Name</b>
						</td>
						<td>
							<b>Username</b>
						</td>
						<td>
							<b>Email</b>
						</td>
						<td>
							<b>Tel</b>
						</td>
						<td>
							<b>Website</b>
						</td>
					</tr>
				</thead>
			</Table>
		</div>
	);
};

export default UserTable;
