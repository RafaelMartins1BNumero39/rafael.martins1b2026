const searchBar = document.getElementById('searchBar');
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const filterButtons = document.querySelectorAll('.filter-btn');
const spellItems = document.querySelectorAll('.spell-item');

dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
});

function filterSpells() {
    const searchText = searchBar ? searchBar.value.toLowerCase() : "";
    const activeClassButton = document.querySelector('.filter-btn.active');
    const selectedClass = activeClassButton ? activeClassButton.getAttribute('data-class') : 'all';

    spellItems.forEach(item => {
        const spellName = item.querySelector('.spell-name').textContent.toLowerCase();
        const spellClass = item.getAttribute('data-class');

        const matchesSearch = spellName.includes(searchText);
        const matchesClass = (selectedClass === 'all' || spellClass === selectedClass);

        if (matchesSearch && matchesClass) {
            item.style.display = 'flex'; 
        } else {
            item.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        if(button.getAttribute('data-class') === 'all') {
            dropdownBtn.textContent = "Classes ▾";
        } else {
            dropdownBtn.textContent = button.textContent + " ▾";
        }

        filterSpells();
    });
});

if (searchBar) {
    searchBar.addEventListener('input', filterSpells);
}