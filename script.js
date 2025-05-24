const sections = document.querySelectorAll('.question-section');
        const results = document.querySelectorAll('.result');
        const progressBar = document.getElementById('progressBar');
        let currentProgress = 0;
        
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
        
        // Question flow logic
        document.querySelectorAll('input[name="q1"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(1, 6);
                if (this.value === 'yes') {
                    showSection('q2');
                } else {
                    showSection('q3');
                }
            });
        });
        
        document.querySelectorAll('input[name="q2"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(2, 6);
                if (this.value === 'yes') {
                    showResult('result-organize');
                } else {
                    showSection('q3');
                }
            });
        });
        
        document.querySelectorAll('input[name="q3"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(3, 6);
                if (this.value === 'yes') {
                    showResult('result-sell');
                } else {
                    showSection('q4');
                }
            });
        });
        
        document.querySelectorAll('input[name="q4"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(4, 6);
                if (this.value === 'yes') {
                    showSection('s1');
                } else {
                    showSection('q5');
                }
            });
        });
        
        document.querySelectorAll('input[name="q5"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(5, 6);
                if (this.value === 'yes') {
                    showSection('q6');
                } else {
                    showResult('result-give');
                }
            });
        });
        
        document.querySelectorAll('input[name="q6"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(6, 6);
                if (this.value === 'yes') {
                    showResult('result-store');
                } else {
                    showResult('result-give');
                }
            });
        });
        
        // Sentimental flow
        document.querySelectorAll('input[name="s1"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(5, 6);
                if (this.value === 'yes') {
                    showSection('s2');
                } else {
                    showSection('s3');
                }
            });
        });
        
        document.querySelectorAll('input[name="s2"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(6, 6);
                if (this.value === 'yes') {
                    showResult('result-store');
                } else {
                    showSection('s4');
                }
            });
        });
        
        document.querySelectorAll('input[name="s3"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(6, 7);
                if (this.value === 'yes') {
                    showResult('result-store');
                } else {
                    showSection('s5');
                }
            });
        });
        
        document.querySelectorAll('input[name="s4"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(6, 7);
                if (this.value === 'yes') {
                    showResult('result-organize');
                } else {
                    showSection('s5');
                }
            });
        });
        
        document.querySelectorAll('input[name="s5"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updateProgress(7, 7);
                if (this.value === 'yes') {
                    showResult('result-sell');
                } else {
                    showResult('result-give');
                }
            });
        });
