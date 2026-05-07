document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const filter = chip.dataset.filter;

        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active-chip'));
        chip.classList.add('active-chip');

        document.querySelectorAll('.project-card').forEach(card => {
            const tags = card.className.split(' ');
            card.classList.remove('visible');
            if (tags.includes(filter)) {
                card.classList.add('visible');
            }
        });
    });
});
