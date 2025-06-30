<script>
    // Wait for the entire HTML document to be loaded and ready
    document.addEventListener('DOMContentLoaded', function() {
        // Find the "Check Answers" button
        const checkButton = document.getElementById('check-answers-btn');
        
        // Listen for a click on the button
        checkButton.addEventListener('click', function() {
            // An array of objects, each representing a quiz question
            const questions = [
                { inputId: 'q1', feedbackId: 'feedback1' },
                { inputId: 'q2', feedbackId: 'feedback2' },
                { inputId: 'q3', feedbackId: 'feedback3' }
            ];

            // Loop through each question to check it
            questions.forEach(question => {
                const inputEl = document.getElementById(question.inputId);
                const feedbackEl = document.getElementById(question.feedbackId);
                
                // Get user's answer, remove extra spaces, and make it lowercase
                const userAnswer = inputEl.value.trim().toLowerCase();
                // Get the correct answer from the 'data-answer' attribute in the HTML
                const correctAnswer = inputEl.dataset.answer;

                // Clear any previous feedback styling
                feedbackEl.classList.remove('text-green-600', 'text-red-500');
                
                // Compare the answers
                if (userAnswer === correctAnswer) {
                    feedbackEl.textContent = 'Correct!';
                    feedbackEl.classList.add('text-green-600'); // Style as correct
                } else {
                    feedbackEl.textContent = `Not quite. The answer is "${correctAnswer}".`;
                    feedbackEl.classList.add('text-red-500'); // Style as incorrect
                }
                
                // Make the feedback message visible
                feedbackEl.classList.remove('opacity-0');
            });
        });
    });
</script>
