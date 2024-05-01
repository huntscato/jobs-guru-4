  // START NEW APPLICATION PAGE // 

  // Resume Drop Area //
    document.addEventListener("DOMContentLoaded", function () {
        const dropArea = document.getElementById("resume-drop-area");

        // Function to handle file selection
        function handleFileSelect(event) {
            event.preventDefault();
            event.stopPropagation();
            dropArea.classList.add("file-selected");
            dropArea.innerHTML = "<p>Thank you for submitting your resume</p>";
        }

        // Event listener for drag and drop functionality
        dropArea.addEventListener("dragover", function (event) {
            event.preventDefault();
            event.stopPropagation();
            dropArea.classList.add("dragover");
        });

        dropArea.addEventListener("dragleave", function (event) {
            event.preventDefault();
            event.stopPropagation();
            dropArea.classList.remove("dragover");
        });

        dropArea.addEventListener("drop", function (event) {
            event.preventDefault();
            event.stopPropagation();
            dropArea.classList.remove("dragover");

            const files = event.dataTransfer.files;
            if (files.length > 0) {
                handleFileSelect(event);
            }
        });

        // Event listener for file input change
        const fileInput = dropArea.querySelector(".resume-input");
        fileInput.addEventListener("change", handleFileSelect);

        // Trigger file input click event when drop area text is clicked
        const dropAreaText = dropArea.querySelector("p:nth-child(3)");
        dropAreaText.addEventListener("click", function () {
            fileInput.click();
        });

    });

   // Job Description Drop Area //
    document.addEventListener("DOMContentLoaded", function () {
        const dropArea = document.getElementById("job-description-drop-area");

        // Function to handle file selection
        function handleFileSelect(event) {
            event.preventDefault();
            event.stopPropagation();
            dropArea.classList.add("file-selected");
            dropArea.innerHTML = "<p>Thank you for submitting your job description!</p>";
        }

        // Event listener for drag and drop functionality
        dropArea.addEventListener("dragover", function (event) {
            event.preventDefault();
            event.stopPropagation();
            dropArea.classList.add("dragover");
        });

        dropArea.addEventListener("dragleave", function (event) {
            event.preventDefault();
            event.stopPropagation();
            dropArea.classList.remove("dragover");
        });

        dropArea.addEventListener("drop", function (event) {
            event.preventDefault();
            event.stopPropagation();
            dropArea.classList.remove("dragover");

            const files = event.dataTransfer.files;
            if (files.length > 0) {
                handleFileSelect(event);
            }
        });

        // Event listener for file input change
        const fileInput = dropArea.querySelector(".job-description-input");
        fileInput.addEventListener("change", handleFileSelect);

        // Trigger file input click event when drop area text is clicked
        const dropAreaText = dropArea.querySelector("p:nth-child(3)");
        dropAreaText.addEventListener("click", function () {
            fileInput.click();
        });
    });