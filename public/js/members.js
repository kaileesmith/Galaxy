$(document).ready(function () {
	// Setting up for modal to stay rendered on member add
	if (localStorage.getItem("screen")) {
		$("#add-a-user").modal("show");
		localStorage.clear();
	}
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.housename);
	});

	// Getting references to our form and input
	const addUser = $("form.add");
	const nameInput = $("input#name-input");
	const deleteBtn = document.querySelectorAll(".delete");

	// Event listener for button to add new user
	addUser.on("submit", (e) => {
		e.preventDefault();
		const userData = {
			name: nameInput.val().trim(),
		};

		inputUser(userData.name);
		nameInput.val("");
		localStorage.setItem("screen", JSON.stringify({ k: "anything" }));
	});

	// Function to add new user
	function inputUser(name) {
		$.post("/api/housemember", {
			name: name,
		})
			.then((data) => {
				console.log("A new user has been added!");
				location.reload();
			})
			.catch(handleLoginErr);
	}

	// Event listener for button to delete new user
	deleteBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("this was hit!");

			const id = e.currentTarget.getAttribute("data-id");
			console.log(id);
			fetch(`/api/housemember/${id}`, {
				method: "DELETE",
			});
			localStorage.setItem("screen", JSON.stringify({ k: "anything" }));
			location.reload("/");
		});
	});

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}

	// Start code for adding a Chore

	// Getting input from the user
	const addTask = $("form.addTask");
	const choreInput = $("input#chore-title-input");
	const choreDescription = $("textarea#chore-description-input");
	const memberSelected = $("select#houseMember");

	// Event listener for button to add new task

	addTask.on("submit", (e) => {
		e.preventDefault();

		const taskData = {
			title: choreInput.val().trim(),
			description: choreDescription.val().trim(),
			housemember: memberSelected.val(),
		};
		console.log(taskData);

		addChore(taskData.title, taskData.description, taskData.housemember);
		choreInput.val("");
		choreDescription.val("");
	});

	// Function to add a task
	function addChore(title, description, housemember) {
		$.post("/api/task", {
			title: title,
			description: description,
			housemember: housemember,
		})
			.then((data) => {
				console.log("A new chore has been added");
				location.reload("/");
			})
			.catch(handleLoginErr);
	}

	// Start of edit functionality
	const titleEdit = $("input#chore-title-edit");
	const descriptionEdit = $("textarea#chore-description-edit");
	const memeberEdit = $("input#chore-name-edit");
	const editBtn = document.querySelectorAll(".edit");
	let editData;
	let choreId;

	editBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("edit button hit");
			choreId = e.currentTarget.getAttribute("data-id");
			console.log(choreId);
			fetch(`/api/task/${choreId}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((data) => {
					editData = data;
					titleEdit.val(editData.title);
					descriptionEdit.val(editData.description);
					memeberEdit.val(editData.housemember);
				});
		});
	});

	// Saving update
	const updateTask = $("form.eTask");

	updateTask.on("submit", (e) => {
		e.preventDefault();

		const updatedTask = {
			title: titleEdit.val().trim(),
			description: descriptionEdit.val().trim(),
			housemember: memeberEdit.val().trim(),
		};
		console.log(updatedTask);
		updateChore(
			updatedTask.title,
			updatedTask.description,
			updatedTask.housemember
		);
	});

	function updateChore(title, description, housemember) {
		$.ajax({
			url: `/api/task/${choreId}`,
			data: JSON.stringify({
				title: title,
				description: description,
				housemember: housemember,
			}),
			type: "PATCH",
			contentType: "application/json",
		})
			.then((data) => {
				console.log("A chore has been updated");
				location.reload("/");
			})
			.catch(handleLoginErr);
	}

	const deleteBtn2 = document.querySelectorAll(".delete2");

	// Event listener for button to delete new user
	deleteBtn2.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();

			const id = e.currentTarget.getAttribute("data-id");
			console.log(id);
			fetch(`/api/task/${id}`, {
				method: "DELETE",
			});
			location.reload("/");
		});
	});
});
