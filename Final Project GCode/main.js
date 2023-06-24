document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationForm');
    const fullNameError = document.createElement('p');
    const phoneNumberError = document.createElement('p');
    const emailError = document.createElement('p');
    const donationAmountError = document.createElement('p');
    const creditCardError = document.createElement('p');
    const billingAddressError = document.createElement('p');
    const thankYouText = document.getElementById('thankYouText');
    const submitButton = document.querySelector('.submit-button');
  
    fullNameError.className = 'error-message';
    phoneNumberError.className = 'error-message';
    emailError.className = 'error-message';
    donationAmountError.className = 'error-message';
    creditCardError.className = 'error-message';
    billingAddressError.className = 'error-message';
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Remove existing error messages
      clearErrorMessages();
  
      // Check if any field is empty
      if (
        !form.fullName.value ||
        !form.phoneNumber.value ||
        !form.email.value ||
        !form.donationAmount.value ||
        !form.creditCard.value ||
        !form.billingAddress.value
      ) {
        if (!form.fullName.value) displayErrorMessage(fullNameError, 'Full name is required.');
        if (!form.phoneNumber.value) displayErrorMessage(phoneNumberError, 'Phone number is required.');
        if (!form.email.value) displayErrorMessage(emailError, 'Email address is required.');
        if (!form.donationAmount.value) displayErrorMessage(donationAmountError, 'Donation amount is required.');
        if (!form.creditCard.value) displayErrorMessage(creditCardError, 'Credit card info is required.');
        if (!form.billingAddress.value) displayErrorMessage(billingAddressError, 'Billing address is required.');
      } else {
        // All fields are filled, show thank you message
        thankYouText.textContent = 'Thank you for your donation!';
        thankYouText.style.display = 'block';
  
        // Clear form fields
        form.reset();
      }
    });
  
    function displayErrorMessage(element, message) {
      element.textContent = message;
      form.insertBefore(element, submitButton);
    }
  
    function clearErrorMessages() {
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach((element) => {
        element.remove();
      });
    }
  });
  
