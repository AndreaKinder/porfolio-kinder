function initProjectFilter() {
    const chips = document.querySelectorAll('.filter-chip');
    const cards = document.querySelectorAll('.project-card');

    if (!chips.length || !cards.length) return;

    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            var filter = this.dataset.filter;

            chips.forEach(function (c) { c.classList.remove('active-chip'); });
            this.classList.add('active-chip');

            cards.forEach(function (card) {
                var tags = card.dataset.tags || '';
                card.classList.remove('visible');
                if (tags.split(' ').indexOf(filter) !== -1) {
                    card.classList.add('visible');
                }
            });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectFilter);
} else {
    initProjectFilter();
}
