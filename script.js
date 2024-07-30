document.addEventListener('DOMContentLoaded', function () {
	const empCountInput = document.querySelector('.epm-count');
	const empRangeInput = document.querySelector('.emp-range');

	function updateCalculations() {
			const empCount = parseInt(empCountInput.value, 10);

			const costWithoutTaskPilot = empCount * 300;
			const taskPilotLicense = empCount * 33;
			const costWithTaskPilot = empCount * 72.8;
			const taskPilotSavings = costWithoutTaskPilot - costWithTaskPilot - taskPilotLicense;

			document.querySelector('.calc-without .calc-amount-main').textContent = `$${costWithoutTaskPilot.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
			document.querySelector('.calc-licens .calc-amount-main').textContent = `$${taskPilotLicense.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
			document.querySelector('.calc-with .calc-amount-main').textContent = `$${costWithTaskPilot.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
			document.querySelector('.calc-saves .calc-amount-final').textContent = `$${taskPilotSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
	}

	empCountInput.addEventListener('input', function () {
			empRangeInput.value = empCountInput.value;
			updateCalculations();
	});

	empRangeInput.addEventListener('input', function () {
			empCountInput.value = empRangeInput.value;
			updateCalculations();
	});

	updateCalculations();
});
