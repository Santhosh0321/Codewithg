
    // Show the Rate Percentage Finder section
    function showRatePercentageFinder() {
        document.getElementById('main-section').style.display = 'none';
        document.getElementById('rate-percentage-section').style.display = 'block';
    }

    // Show the Interest and Rate Percentage Finder section
    function showInterestRateFinder() {
        document.getElementById('main-section').style.display = 'none';
        document.getElementById('interest-rate-section').style.display = 'block';
    }

    // Show the Bank Rate Percentage Finder section
    function showBankRateFinder() {
        document.getElementById('interest-rate-section').style.display = 'none';
        document.getElementById('bank-rate-finder-section').style.display = 'block';
    }

    // Show the TN Interest Finder section
    function showTNInterestFinder() {
        document.getElementById('interest-rate-section').style.display = 'none';
        document.getElementById('tn-interest-finder-section').style.display = 'block';
    }

    // Show the Instant Bank Rate to TN Interest Finder section
    function showInstantBankRateFinder() {
        document.getElementById('interest-rate-section').style.display = 'none';
        document.getElementById('instant-bank-rate-section').style.display = 'block';
    }

    // Go back to the main page
    function goBack() {
        document.getElementById('rate-percentage-section').style.display = 'none';
        document.getElementById('interest-rate-section').style.display = 'none';
        document.getElementById('bank-rate-finder-section').style.display = 'none';
        document.getElementById('tn-interest-finder-section').style.display = 'none';
        document.getElementById('instant-bank-rate-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'block';
    }

    // Function to calculate Bank Rate Percentage from Principal, EMI, and Period
    function calculateBankRate() {
        const principal = parseFloat(document.getElementById('principal').value);
        const emi = parseFloat(document.getElementById('emi').value);
        const period = parseInt(document.getElementById('period').value);
        
        if (isNaN(principal) || isNaN(emi) || isNaN(period) || principal <= 0 || emi <= 0 || period <= 0) {
            document.getElementById('bank-rate-result').innerText = 'Please enter valid values for Principal, EMI, and Period (greater than zero).';
            return;
        }

        // Use a method to approximate the interest rate (monthly)
        const monthlyRate = calculateInterestRate(principal, emi, period);
        const annualRate = monthlyRate * 12 * 100; // Convert to annual percentage
        document.getElementById('bank-rate-result').innerText = 'Bank Rate Percentage: ' + annualRate.toFixed(2) + '%';
    }

    // Function to approximate the interest rate based on EMI, using binary search
    function calculateInterestRate(principal, emi, months) {
        let low = 0.0001;  // Start with a very low rate
        let high = 1;  // Start with a high rate (100% annually)
        let mid = 0;
        let tolerance = 0.0001;

        while (high - low > tolerance) {
            mid = (low + high) / 2;
            let calculatedEMI = principal * mid * Math.pow(1 + mid, months) / (Math.pow(1 + mid, months) - 1);
            if (calculatedEMI < emi) {
                low = mid;
            } else {
                high = mid;
            }
        }

        return mid; // Return the monthly interest rate
    }
    // Function to calculate TN Interest based on Bank Rate Percentage (Formula: TN Interest = Bank Rate / 12)
    function calculateTNInterest() {
        const bankRate = parseFloat(document.getElementById('bank-rate').value);
        
        if (isNaN(bankRate) || bankRate <= 0) {
            document.getElementById('tn-interest-result').innerText = 'Please enter a valid Bank Rate Percentage.';
            return;
        }

        const tnInterest = bankRate / 12;
        document.getElementById('tn-interest-result').innerText = 'TN Interest: ' + tnInterest.toFixed(2);
    }
    // Function to calculate Bank Rate Percentage based on TN Interest (Formula: Bank Rate = TN Interest * 12)
    function calculateBankRatePercentage() {
        const tnInterest = parseFloat(document.getElementById('tn-interest-bank').value);
        
        if (isNaN(tnInterest) || tnInterest <= 0) {
            document.getElementById('bank-rate-result-text').innerText = 'Please enter a valid TN Interest value.';
            return;
        }

        const bankRatePercentage = tnInterest * 12;
        document.getElementById('bank-rate-result-text').innerText = 'Bank Rate Percentage: ' + bankRatePercentage.toFixed(2) + '%';
    }

    // Function to calculate TN Interest based on Bank Rate Percentage (Formula: TN Interest = Bank Rate / 12)
    function calculateTNInterest() {
        const bankRate = parseFloat(document.getElementById('bank-rate').value);
        
        if (isNaN(bankRate) || bankRate <= 0) {
            document.getElementById('tn-interest-result').innerText = 'Please enter a valid Bank Rate Percentage.';
            return;
        }

        const tnInterest = bankRate / 12;
        document.getElementById('tn-interest-result').innerText = 'TN Interest: ' + tnInterest.toFixed(2);
    }

    // Function to calculate TN Interest instantly based on Bank Rate Percentage
    function calculateInstantTNInterest() {
        const bankRate = parseFloat(document.getElementById('bank-rate-instant').value);
        
        if (isNaN(bankRate) || bankRate <= 0) {
            document.getElementById('instant-tn-interest-result').innerText = 'Please enter a valid Bank Rate Percentage.';
            return;
        }

        const tnInterest = bankRate / 12;
        document.getElementById('instant-tn-interest-result').innerText = 'TN Interest: ' + tnInterest.toFixed(2);
    }

    // Google Translate initialization for South Indian Languages
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'ta,te,kn,ml,hi',  // South Indian languages (Tamil, Telugu, Kannada, Malayalam, Hindi)
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }


