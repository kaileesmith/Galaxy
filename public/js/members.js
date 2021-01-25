$(document).ready(function () {
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.housename);
	});

	// Getting references to our form and input
	const addUser = $("form.add");
	const nameInput = $("input#name-input");

	// Event listener for button to add new user
	addUser.on("submit", (e) => {
		e.preventDefault();
		const userData = {
			name: nameInput.val().trim(),
		};

		inputUser(userData.name);
		nameInput.val("");
	});

	// Function to add new user
	function inputUser(name) {
		$.post("/api/housemember", {
			name: name,
		})
			.then((data) => {
				console.log("A new user has been added!");
			})
			.catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}
});


//START TASK HERE 


const show = (el) => {
	el.style.display = 'block';
};

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM loaded! 🚀');

	const cmsForm = document.getElementById('cms2');
	const titleInput = document.querySelector('#chore-input');
	const descriptionInput = document.querySelector('#chore-description-input');
	const houseMemberSelect = document.getElementById('houseMember');
	
	// Get query parameter
	const url = window.location.search;
	let choreId;
	let housemember;
	let updating = false;

	// Get chore data for editing/adding
	const getChoreData = (id, type) => {
		const queryUrl =
			type === 'task' ? `/api/task/${id}` : `/api/housemember/${id}`;

		fetch(queryUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			},
		})
		.then((response) => response.json())
		.then((data) => {
			if (data) {
			console.log('Success in getting post:', data);

			// Populate the form for editing
			titleInput.value = data.title;
			descriptionInput.value = data.body;
			memberId = data.MemberId || data.id;

			// We are updating
			updating = true;
		}
		})
		.catch((err) => console.error(err));
	};

 // If chore exists, grab the content of the chore
	if (url.indexOf('?task_id=') !== -1) {
		taskId = url.split('=')[1];
		getChoreData(taskId, 'task');
	} else (console.log ("error found :("))
	
	// Event handler for when the chore form is submitted
	const handleFormSubmit = (e) => {
		e.preventDefault();

	  // Make sure the form isn't empty
	if (
		!titleInput.value.trim() ||
		!descriptionInput.value.trim() ||
		!houseMemberSelect.value	
		) {
		return;
	}

	  // Object that will be sent to the db
	const newChore = {
		title: titleInput.value.trim(),
		description: descriptionInput.value.trim(),
		housemember: houseMemberSelect.value,
	};

	  // Update a chore if flag is true, otherwise submit a new one
		if (updating) {
			newChore.id = choreId;
			updateChore(newChore);
		} else {
			submitChore(newChore);
		}
		};

	// Attach an event listener to the form on submit
	cmsForm.addEventListener('submit', handleFormSubmit);

	// Submits new chore then redirects
	const submitChore = (tasks) => {
		fetch('/api/task', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(tasks),
		})
			.then(() => {
				window.location.reload("/");
			})
			.catch((err) => console.error(err));
		};
	// Render a list of housemembers 
	const renderMemberList = (data) => {
		console.log('renderMemberList -> data', data);
		const rowsToAdd = [];
	
		data.forEach((data) => rowsToAdd.push(createMemberRow(data)));
	
		houseMemberSelect.innerHTML = '';
		console.log('renderMemberList -> rowsToAdd', rowsToAdd);
		console.log('MemberSelect', houseMemberSelect);
	
		rowsToAdd.forEach((row) => houseMemberSelect.append(row));
		houseMemberSelect.value = housemember;
		};

	// Build housemember dropdown
	const createMemberRow = ({ name }) => {
		const listOption = document.createElement('option');
		// listOption.value = id;
		listOption.textContent = name;
		return listOption;
		};

	// A function to get Members and then call the render function
	const getMembers = () => {
		fetch('api/housemember', {
			method: 'GET',
			headers: {
			'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => renderMemberList(data))
			.catch((err) => console.error(err));
		};

	// Get the members/chore
	getMembers();

	// Update a chore then reload
	const updateChore = (tasks) => {
		fetch('/api/task', {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(tasks),
		})
			.then(() => {
			window.location.reload("/");
			})
			.catch((err) => console.error(err));
		};
	});
	