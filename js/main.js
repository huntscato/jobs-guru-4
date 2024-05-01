  // START NEW APPLICATION PAGE // 

    // Get the file drop area element
    const fileDropArea = document.getElementById('file-drop-area');
    const fileInput = document.querySelector('.resume-input');

    // Prevent default behavior for drag and drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileDropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area when file is being dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        fileDropArea.addEventListener(eventName, highlight, false);
    });

    // Remove highlight when file is dragged out of drop area
    ['dragleave', 'drop'].forEach(eventName => {
        fileDropArea.addEventListener(eventName, unhighlight, false);
    });

    // Handle file drop event
    fileDropArea.addEventListener('drop', handleDrop, false);

    // Handle click event
    fileDropArea.addEventListener('click', handleClick, false);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        fileDropArea.classList.add('highlight');
    }

    function unhighlight() {
        fileDropArea.classList.remove('highlight');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;

        handleFiles(files);
    }

    function handleClick() {
        fileInput.click();
    }

    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        // Check if there are any files
        if (files.length > 0) {
            // Assuming only one file is dropped, you can modify this if needed
            const file = files[0];

            // Check if the file is a PDF
            if (file.type === 'application/pdf') {
                // Do something with the PDF file, for example, upload it
                console.log('PDF file dropped:', file.name);
            } else {
                alert('Please drop a PDF file.');
            }
        }
    }

