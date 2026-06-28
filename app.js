// Function to assign a random, warm book spine color based on the title
function getSpineColor(title) {
    const colors = [
        '#c25953', // Warm Red
        '#597a61', // Forest Green
        '#5b738b', // Muted Blue
        '#8b6b52', // Classic Brown
        '#d4a373', // Light Ochre
        '#6c584c', // Dark Brown
        '#5e6472'  // Slate
    ];
    
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const index = Math.abs(hash) % colors.length;
    return colors[index];
}

// Function to generate the HTML for a single book card
function createBookCard(book) {
    const spineColor = getSpineColor(book.title);
    
    const ibrahimStatus = book.ibrahimRead 
        ? `<span class="status-date">${book.ibrahimRead}</span>` 
        : `<span class="status-unread">Not read yet</span>`;
        
    const esraStatus = book.esraRead 
        ? `<span class="status-date">${book.esraRead}</span>` 
        : `<span class="status-unread">Not read yet</span>`;

    const notesHtml = book.notes 
        ? `<div class="book-notes">📝 ${book.notes}</div>` 
        : '';

    return `
        <article class="book-card">
            <div class="book-spine" style="background-color: ${spineColor};"></div>
            <div class="book-content">
                <h2 class="book-title">${book.title}</h2>
                <div class="book-author">${book.author}</div>
                
                <div class="book-meta">
                    ${book.pages ? `<span>📄 ${book.pages} pages</span>` : ''}
                    ${book.publisher ? `<span>🏢 ${book.publisher}</span>` : ''}
                </div>
                
                <div class="reading-status">
                    <div class="status-row">
                        <span class="status-name">İbrahim</span>
                        ${ibrahimStatus}
                    </div>
                    <div class="status-row">
                        <span class="status-name">Esra</span>
                        ${esraStatus}
                    </div>
                </div>
                
                ${notesHtml}
            </div>
        </article>
    `;
}

// Main functionality
document.addEventListener('DOMContentLoaded', () => {
    const shelf = document.getElementById('bookShelf');
    const searchInput = document.getElementById('searchInput');
    const readerFilter = document.getElementById('readerFilter');
    const noResults = document.getElementById('noResults');
    const libraryStats = document.getElementById('libraryStats');
    const resultsInfo = document.getElementById('resultsInfo');
    const resultsCount = document.getElementById('resultsCount');

    // Calculate and render overall stats
    function renderStats() {
        const totalBooks = libraryData.length;
        let ibrahimCount = 0;
        let esraCount = 0;
        let bothCount = 0;

        libraryData.forEach(book => {
            const iRead = Boolean(book.ibrahimRead && book.ibrahimRead.trim() !== '');
            const eRead = Boolean(book.esraRead && book.esraRead.trim() !== '');
            
            if (iRead) ibrahimCount++;
            if (eRead) esraCount++;
            if (iRead && eRead) bothCount++;
        });

        libraryStats.innerHTML = `
            <div class="stat-box">
                <span class="stat-value">${totalBooks}</span>
                <span class="stat-label">Total Books</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${ibrahimCount}</span>
                <span class="stat-label">İbrahim Read</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${esraCount}</span>
                <span class="stat-label">Esra Read</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${bothCount}</span>
                <span class="stat-label">Read Together</span>
            </div>
        `;
    }

    // Function to render books based on current data
    function renderBooks(booksToRender) {
        shelf.innerHTML = booksToRender.map(createBookCard).join('');
        
        // Update results info text
        if (booksToRender.length === libraryData.length) {
            resultsInfo.classList.add('hidden');
        } else {
            resultsInfo.classList.remove('hidden');
            resultsCount.textContent = booksToRender.length;
        }
        
        if (booksToRender.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    // Filter function
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const filterValue = readerFilter.value;

        const filtered = libraryData.filter(book => {
            // Text search
            const matchesSearch = 
                book.title.toLowerCase().includes(searchTerm) || 
                book.author.toLowerCase().includes(searchTerm);

            // Read status filter
            let matchesFilter = true;
            const ibrahimRead = Boolean(book.ibrahimRead && book.ibrahimRead.trim() !== '');
            const esraRead = Boolean(book.esraRead && book.esraRead.trim() !== '');

            if (filterValue === 'ibrahim') {
                matchesFilter = ibrahimRead;
            } else if (filterValue === 'esra') {
                matchesFilter = esraRead;
            } else if (filterValue === 'both') {
                matchesFilter = ibrahimRead && esraRead;
            }

            return matchesSearch && matchesFilter;
        });

        renderBooks(filtered);
    }

    // Event listeners
    searchInput.addEventListener('input', applyFilters);
    readerFilter.addEventListener('change', applyFilters);

    // Initial render
    renderStats();
    renderBooks(libraryData);
});
