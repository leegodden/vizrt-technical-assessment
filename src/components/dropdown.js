import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import UserTable from './Table';
import ReactToExcel from 'react-html-table-to-excel';

function DropDown() {
	const [users, setUsers] = useState([]);
	const [singleUser, setSingleUser] = useState([]);

	// Fetch all users from API
	useEffect(function () {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => setUsers(response.data))
			.then((error) => console.log(error));
	}, []);

	// Fetch single user
	const onddlChange = (e) => {
		axios
			.get('https://jsonplaceholder.typicode.com/users/' + e.target.value)
			.then((response) => setSingleUser(response.data))
			.then((error) => console.log(error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSingleUser('');
		//console.log(singleUser);
	};

	// Function to add selected user to a new row upon submitting form
	function addRow() {
		const list1 = [];
		const list2 = [];
		const list3 = [];
		const list4 = [];
		const list5 = [];
		const list6 = [];

		let n = 1;
		let x = 0;

		const AddRow = document.getElementById('show');
		const NewRow = AddRow.insertRow(n);

		list1[x] = document.getElementById('userId').value;
		list2[x] = document.getElementById('name').value;
		list3[x] = document.getElementById('userName').value;
		list4[x] = document.getElementById('userEmail').value;
		list5[x] = document.getElementById('userPhone').value;
		list6[x] = document.getElementById('userWebsite').value;

		const cel1 = NewRow.insertCell(0);
		const cel2 = NewRow.insertCell(1);
		const cel3 = NewRow.insertCell(2);
		const cel4 = NewRow.insertCell(3);
		const cel5 = NewRow.insertCell(4);
		const cel6 = NewRow.insertCell(5);

		cel1.innerHTML = list1[x];
		cel2.innerHTML = list2[x];
		cel3.innerHTML = list3[x];
		cel4.innerHTML = list4[x];
		cel5.innerHTML = list5[x];
		cel6.innerHTML = list6[x];

		n++;
		x++;
	}

	return (
		// DropDown for user names
		<div className="app container">
			<form>
				<select className="form-select" onChange={onddlChange}>
					<option value="0">--Select User--</option>
					{users.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}
				</select>
				<br />
				<br />
			</form>

			{/* user details form */}
			<div className="form-container">
				<form onSubmit={handleSubmit} className="form-container">
					<h3>User Details</h3>
					<label htmlFor="id" className="label">
						User Id
					</label>
					<input
						className="input"
						type="text"
						name="userId"
						id="userId"
						value={singleUser.id || ''}
						onChange={onddlChange}
					/>

					<label htmlFor="id" className="label">
						Name
					</label>
					<input
						className="input"
						type="text"
						name="name"
						id="name"
						value={singleUser.name || ''}
						onChange={onddlChange}
					/>

					<label htmlFor="id" className="label">
						Username
					</label>
					<input
						className="input"
						type="text"
						name="userName"
						id="userName"
						value={singleUser.username || ''}
						onChange={onddlChange}
					/>

					<label htmlFor="id" className="label">
						Email
					</label>
					<input
						className="input"
						type="text"
						name="userEmail"
						id="userEmail"
						value={singleUser.email || ''}
						onChange={onddlChange}
					/>
					<label htmlFor="id" className="label">
						Tel
					</label>
					<input
						className="input"
						type="text"
						name="userPhone"
						id="userPhone"
						value={singleUser.phone || ''}
						onChange={onddlChange}
					/>
					<label htmlFor="id" className="label">
						Website
					</label>
					<input
						className="input"
						type="text"
						name="userWebsite"
						id="userWebsite"
						value={singleUser.website || ''}
						onChange={onddlChange}
					/>

					<br />
					<button
						className="btn"
						name="button"
						id="btn"
						value="Add"
						disabled={!singleUser}
						onClick={addRow}
					>
						Add user
					</button>
				</form>
			</div>
			<br />
			<br />

			{/* display export Table to Excel button */}
			<ReactToExcel
				className="exportButton"
				table="show"
				filename="Users"
				sheet="sheet 1"
				buttonText="Export Table to Excel"
			/>
			<UserTable />
		</div>
	);
}

export default DropDown;

// React hooks: useEffect and useState
// JSON Fake API using Names
// Axios plugin for fetching data
// Boostrap for styling componenys
