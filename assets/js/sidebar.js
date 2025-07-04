document.addEventListener('DOMContentLoaded', function () {
    const collapseBtn = document.querySelector('.collapse-sidebar');
    const openBtn = document.querySelector('.open-sidebar');
    const sidebar = document.querySelector('.side-bar');
    const sideContext = document.querySelector('.side-context');
    const titleTexts = document.querySelectorAll('.side-row .title p');

    // Collapse sidebar
    collapseBtn?.addEventListener('click', () => {
        sidebar.classList.add('collapsed');

        titleTexts.forEach(p => p.classList.add('hidden'));

        sideContext?.querySelectorAll('h2, p, span, div')
            .forEach(el => el.classList.add('hidden'));

        collapseBtn.classList.add('hidden');
        openBtn.classList.remove('hidden');

        // Ẩn tất cả sub-bar và open-sub, gỡ sub-open, giữ nguyên .active
        document.querySelectorAll('.sub-bar').forEach(bar => {
            bar.classList.remove('active');
            bar.classList.add('hidden');
        });

        document.querySelectorAll('.open-sub').forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('hidden');
        });

        document.querySelectorAll('.side-row.sub-open').forEach(row => {
            row.classList.remove('sub-open');
        });
    });

    // Open sidebar
    openBtn?.addEventListener('click', () => {
        sidebar.classList.remove('collapsed');

        titleTexts.forEach(p => p.classList.remove('hidden'));

        sideContext?.querySelectorAll('h2, p, span, div')
            .forEach(el => el.classList.remove('hidden'));

        openBtn.classList.add('hidden');
        collapseBtn.classList.remove('hidden');

        // Hiện lại các nút open-sub nếu có sub-bar
        document.querySelectorAll('.side-row').forEach(row => {
            const subBar = row.querySelector('.sub-bar');
            const openSub = row.querySelector('.open-sub');
            if (subBar && openSub) {
                openSub.classList.remove('hidden');
            }
        });
    });

    // Toggle sub-bar
    document.querySelectorAll('.open-sub').forEach(button => {
        button.addEventListener('click', function () {
            const row = button.closest('.side-row');
            const subBar = row.querySelector('.sub-bar');
            if (!subBar) return;

            const isOpen = button.classList.toggle('active');
            subBar.classList.toggle('active', isOpen);
            subBar.classList.toggle('hidden', !isOpen);

            // ✅ Thêm class riêng 'sub-open' mà không ảnh hưởng đến .active của route
            row.classList.toggle('sub-open', isOpen);
        });
    });
});
