// Инициализация анимаций при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            // Анимация прогресс-баров
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 500);
            });

            // Плавная прокрутка для навигации
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Обработка формы
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.');
                contactForm.reset();
            });

            // Текстовый эффект печатания
            const typingText = document.querySelector('.typing-text');
            const texts = [
                "Islegiňize görä saýtlary taýýarlamak",
                "Proýektlarda topar bilen işlemek",
                "Çözgütli meselelere gatnaşmak",
                "Android programmasy döretmek"
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            
            function typeEffect() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typingText.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingText.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 1500);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    setTimeout(typeEffect, 500);
                } else {
                    setTimeout(typeEffect, isDeleting ? 50 : 100);
                }
            }
            
             // Запуск эффекта печатания через 1 секунду после загрузки
            setTimeout(typeEffect, 3000);
            
            // Анимация при скролле
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.neo-card');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Установка начального состояния для анимации
            document.querySelectorAll('.neo-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            });
            
            // Запуск анимации при загрузке
            setTimeout(animateOnScroll, 300);
            
            // Запуск анимации при скролле
            window.addEventListener('scroll', animateOnScroll);
        });
