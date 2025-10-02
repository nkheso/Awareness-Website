 // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                answer.classList.toggle('active');
                
                const icon = question.querySelector('i');
                if (answer.classList.contains('active')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        });
        
         // Progress bar based on scroll
        window.addEventListener('scroll', function() {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
            document.getElementById('pageProgress').style.width = scrollPercent + '%';
        });

        // Expandable cards
        function toggleCardDetails(card) {
            const details = card.querySelector('.card-details');
            const icon = card.querySelector('.expand-icon i');
            
            if (details.style.display === 'none') {
                details.style.display = 'block';
                icon.className = 'fas fa-chevron-up';
                card.style.paddingBottom = '2rem';
            } else {
                details.style.display = 'none';
                icon.className = 'fas fa-chevron-down';
                card.style.paddingBottom = '1.5rem';
            }
        }

        // Tab functionality
        function openTab(evt, tabName) {
            const tabcontent = document.getElementsByClassName("tab-content");
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            
            const tablinks = document.getElementsByClassName("tab");
            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }

        // Icon information
        function showIconInfo(message) {
            alert(message);
        }
         // Poster interaction
        function togglePoster(poster) {
            poster.classList.toggle('enlarged');
        }