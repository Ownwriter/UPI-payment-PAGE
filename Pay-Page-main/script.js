// Handle payment option selection
document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    const radioInputs = document.querySelectorAll('input[type="radio"]');

    // Add click event listeners to payment options
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Update radio button
            const radioInput = this.querySelector('input[type="radio"]');
            radioInput.checked = true;
        });
    });

    // Add change event listeners to radio inputs
    radioInputs.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                // Remove selected class from all options
                paymentOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to parent option
                this.closest('.payment-option').classList.add('selected');
            }
        });
    });
});

// Handle payment button click
function handlePayment() {
    const selectedOption = document.querySelector('input[name="payment"]:checked');
    
    if (selectedOption) {
        const paymentMethod = selectedOption.id;
        
        // Show loading state
        const payButton = document.querySelector('.pay-button');
        const originalText = payButton.textContent;
        payButton.textContent = 'Processing...';
        payButton.disabled = true;
        
        // Simulate payment processing
        setTimeout(() => {
            alert(`Processing payment with ${getPaymentMethodName(paymentMethod)}...`);
            
            // Reset button
            payButton.textContent = originalText;
            payButton.disabled = false;
        }, 1500);
    } else {
        alert('Please select a payment method');
    }
}

// Helper function to get payment method name
function getPaymentMethodName(id) {
    const methods = {
        'phonepe': 'PhonePe',
        'paytm': 'PayTm',
        'googlepay': 'GooglePay',
        'mobikwik': 'Mobikwik',
        'other': 'Other UPI'
    };
    
    return methods[id] || 'Unknown';
}

// Add smooth animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate payment options on load
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach((option, index) => {
        option.style.opacity = '0';
        option.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            option.style.transition = 'all 0.3s ease';
            option.style.opacity = '1';
            option.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Animate pay button
    const payButton = document.querySelector('.pay-button');
    payButton.style.opacity = '0';
    payButton.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        payButton.style.transition = 'all 0.3s ease';
        payButton.style.opacity = '1';
        payButton.style.transform = 'translateY(0)';
    }, 600);
});

// Add ripple effect to payment options
document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 188, 212, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);