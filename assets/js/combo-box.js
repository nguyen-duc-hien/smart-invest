// combo-box.js
document.querySelectorAll('.combo-box').forEach(comboBox => {
    const isMulti = comboBox.classList.contains('multi-select');
    const view = comboBox.querySelector('.combo-view');
    const dropdown = comboBox.querySelector('.dropdown');
    const input = comboBox.querySelector('input');
    const listItems = comboBox.querySelectorAll('.dropdown-list li');

    const closeOtherDropdowns = () => {
        document.querySelectorAll('.combo-box').forEach(box => {
            const otherDropdown = box.querySelector('.dropdown');
            const otherView = box.querySelector('.combo-view');
            if (otherDropdown !== dropdown) {
                otherDropdown.style.display = 'none';
                otherView.classList.remove('active');
                const otherInput = box.querySelector('input');
                if (otherInput) otherInput.readOnly = true;
            }
        });
    };

    // Toggle dropdown
    view.addEventListener('click', () => {
        const isVisible = dropdown.style.display === 'block';
        closeOtherDropdowns();
        dropdown.style.display = isVisible ? 'none' : 'block';
        view.classList.toggle('active', !isVisible);
        if (!isVisible) {
            input.readOnly = false;
            input.focus();
        } else {
            input.readOnly = true;
        }
    });

    // Filter
    input.addEventListener('input', () => {
        const keyword = input.value.toLowerCase();
        listItems.forEach(item => {
            const match = item.textContent.toLowerCase().includes(keyword);
            item.style.display = match ? 'block' : 'none';
        });
    });

    if (isMulti) {
        const checkboxes = comboBox.querySelectorAll('input[type="checkbox"]');
        const countDisplay = comboBox.querySelector('.selected-count');

        const updateCount = () => {
            const checkedCount = comboBox.querySelectorAll('input[type="checkbox"]:checked').length;
            if (countDisplay) countDisplay.textContent = checkedCount;
        };

        checkboxes.forEach(cb => cb.addEventListener('change', updateCount));

        document.addEventListener('click', e => {
            if (!comboBox.contains(e.target)) {
                dropdown.style.display = 'none';
                view.classList.remove('active');
            }
        });
    } else {

        const textDisplay = view.querySelector('p');

        listItems.forEach(item => {
            item.addEventListener('click', () => {
                listItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                input.value = item.textContent;
                textDisplay.textContent = `${item.textContent}`;
                dropdown.style.display = 'none';
                input.readOnly = true;
                view.classList.remove('active');
            });
        });

        document.addEventListener('click', e => {
            if (!comboBox.contains(e.target)) {
                dropdown.style.display = 'none';
                view.classList.remove('active');
                input.readOnly = true;
            }
        });
    }
});
