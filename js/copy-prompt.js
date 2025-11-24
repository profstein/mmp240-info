document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-button');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async function() {
            // Find the code element within the same prompt-box
            const promptBox = this.closest('.prompt-box');
            const codeElement = promptBox.querySelector('code');
            const textToCopy = codeElement.textContent;
            
            try {
                // Use the Clipboard API to copy text
                await navigator.clipboard.writeText(textToCopy);
                
                // Visual feedback
                const originalText = this.innerHTML;
                this.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied!
                `;
                this.classList.add('copied');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('copied');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
                
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    this.textContent = 'Copied!';
                    this.classList.add('copied');
                    setTimeout(() => {
                        this.innerHTML = `
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            Copy
                        `;
                        this.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Fallback copy failed: ', err);
                }
                
                document.body.removeChild(textArea);
            }
        });
    });
});
