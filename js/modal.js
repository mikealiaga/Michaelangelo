
// When clicked on the last, check all steps
/*function checkAllSteps() {
    const stepCheckboxes = document.querySelectorAll('.steps-section input[type="checkbox"]');
    const lastStep = stepCheckboxes[stepCheckboxes.length - 1]; // Get the last checkbox

    // If the last checkbox is checked, check all other checkboxes
    if (lastStep.checked) {
        stepCheckboxes.forEach(checkbox => {
            checkbox.checked = true; // Mark all checkboxes as checked
        });
    }
}


// Update modal and 
function updateProgress() {
    const stepCheckboxes = document.querySelectorAll('.steps-section input[type="checkbox"]'); // Target only step checkboxes
    const totalSteps = stepCheckboxes.length; // Check how many steps there are
    const completedSteps = Array.from(stepCheckboxes).filter(cb => cb.checked).length;
    const progress = Math.round((completedSteps / totalSteps) * 100);

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progress}%`; // Update progress bar when steps are checked
    //progressBar.textContent = `${progress}%`;

    // Pop modal when progress bar is full
    if (progress === 100) {
        const completionModal = new bootstrap.Modal(document.getElementById('reg-modal'));
        completionModal.show();
    }

    //checkAllSteps();

}
*/