const sections = document.querySelectorAll('.question-section');
        const results = document.querySelectorAll('.result');
        const progressBar = document.getElementById('progressBar');
        
        function updateProgress(step, total) {
            const percentage = (step / total) * 100;
            progressBar.style.width = percentage + '%';
        }
        
        function showSection(id) {
            sections.forEach(section => section.classList.remove('active'));
            results.forEach(result => result.classList.remove('active'));
            
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('active');
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        }
        
        function showResult(resultId) {
            sections.forEach(section => section.classList.remove('active'));
            results.forEach(result => result.classList.remove('active'));
            
            document.getElementById(resultId).classList.add('active');
            progressBar.style.width = '100%';
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        function resetTool() {
            document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
            showSection('q1');
            progressBar.style.width = '0%';
        }
        
        // Question 1: Display or Useful
        document.querySelectorAll('input[name="q1"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(1, 4);
                if (this.value === 'display') {
                    showSection('q2-display');
                } else {
                    showSection('q2-useful');
                }
            });
        });
        
        // Display Path: ME or Sentimental
        document.querySelectorAll('input[name="q2-display"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(2, 4);
                if (this.value === 'me') {
                    showSection('q3-place');
                } else {
                    showSection('q4-emotions');
                }
            });
        });
        
        // Display: Have a place?
        document.querySelectorAll('input[name="q3-place"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(3, 4);
                if (this.value === 'yes') {
                    showResult('result-organize');
                } else {
                    showResult('result-store');
                }
            });
        });
        
        // Sentimental: Positive emotions?
        document.querySelectorAll('input[name="q4-emotions"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(3, 4);
                if (this.value === 'yes') {
                    showSection('q3-place');
                } else {
                    showSection('q5-worth');
                }
            });
        });
        
        // Useful: Will use in 6 months?
        document.querySelectorAll('input[name="q2-useful"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(2, 4);
                if (this.value === 'yes') {
                    showSection('q3-useful-place');
                } else {
                    showSection('q5-worth');
                }
            });
        });
        
        // Useful: Have a place?
        document.querySelectorAll('input[name="q3-useful-place"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(3, 4);
                if (this.value === 'yes') {
                    showResult('result-organize');
                } else {
                    showResult('result-store');
                }
            });
        });
        
        // Worth selling?
        document.querySelectorAll('input[name="q5-worth"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(4, 4);
                if (this.value === 'yes') {
                    showResult('result-sell');
                } else {
                    showResult('result-give');
                }
            });
        });
