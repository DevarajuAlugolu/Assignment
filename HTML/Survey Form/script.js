'use strict';

const form = document.getElementById('form');
const modal = document.querySelector('.modal');
const innerModal = document.getElementById('inner-modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const closeModalCross = document.querySelector('.close-modal-cross');

// Handling form submit
form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Display Modal
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');

	// Collect form data
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const dob = document.getElementById('dob').value;
	const country = document.getElementById('country').value;
	const profession = document.getElementById('profession').value;

	// Collect selected gender
	const genderOptions = document.querySelectorAll('input[name="gender"]');
	let selectedGender = '';
	for (const option of genderOptions) {
		if (option.checked) {
			selectedGender = option.nextElementSibling.textContent;
			break;
		}
	}

	// Display form data in the modal
	innerModal.innerHTML = `
        <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <td>${firstName}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>${lastName}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>${selectedGender}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <th>Date of Birth</th>
                    <td>${dob}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>${country}</td>
                </tr>
                <tr>
                    <th>Profession</th>
                    <td>${profession}</td>
                </tr>
            </tbody>
        </table>
    `;
});

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
	form.reset();
};

btnCloseModal.addEventListener('click', closeModal);
closeModalCross.addEventListener('click', closeModal);
