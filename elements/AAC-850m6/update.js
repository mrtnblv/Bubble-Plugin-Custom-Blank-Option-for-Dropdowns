function(instance, properties, context) {
    
    function replaceblankoption(id, custom_blank_option) {
        let dd = document.getElementById(id);
        if (dd) {
            let blankOption = dd.getElementsByTagName("option")[1];
            if (blankOption) {
                let value = blankOption.value;
                // Vérifier si la valeur contient "&quot;BLANK_" ou "\"BLANK_"
                if (value.includes('&quot;BLANK_') || value.includes('"BLANK_')) {
                    blankOption.textContent = custom_blank_option;
                } else {
                    console.warn('No blank option found in dropdown with ID:', id);
                }
            }
        } else {
            console.warn('Dropdown with ID not found:', id);
        }
    }

    window.addEventListener('load', function() {
        let idList = properties.id.split(',').map(item => item.trim());
        let optionList = properties.custom_blank_option.split(',').map(item => item.trim());

        let lastOption = optionList[optionList.length - 1];

        idList.forEach((id, index) => {
            let customBlankOption = optionList[index] || lastOption;
            replaceblankoption(id, customBlankOption);
        });
    });
}
