document.addEventListener('DOMContentLoaded', function () {
    const collapseBtn = document.querySelector('.collapse-sidebar');
    const openBtn = document.querySelector('.open-sidebar');
    const sidebar = document.querySelector('.side-bar');
    const sideContext = document.querySelector('.side-context');
    const titleTexts = document.querySelectorAll('.side-row .title p');

    // Hàm collapse sidebar
    function collapseSidebar() {
        sidebar.classList.add('collapsed');

        titleTexts.forEach(p => p.classList.add('hidden'));

        sideContext?.querySelectorAll('h2, p, span, div')
            .forEach(el => el.classList.add('hidden'));

        collapseBtn?.classList.add('hidden');
        openBtn?.classList.remove('hidden');

        // Ẩn sub-bar, open-sub, gỡ sub-open
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
    }

    // Hàm open sidebar
    function openSidebar() {
        sidebar.classList.remove('collapsed');

        titleTexts.forEach(p => p.classList.remove('hidden'));

        sideContext?.querySelectorAll('h2, p, span, div')
            .forEach(el => el.classList.remove('hidden'));

        openBtn?.classList.add('hidden');
        collapseBtn?.classList.remove('hidden');

        document.querySelectorAll('.side-row').forEach(row => {
            const subBar = row.querySelector('.sub-bar');
            const openSub = row.querySelector('.open-sub');
            if (subBar && openSub) {
                openSub.classList.remove('hidden');
            }
        });
    }

    // Gán sự kiện cho nút
    collapseBtn?.addEventListener('click', collapseSidebar);
    openBtn?.addEventListener('click', openSidebar);

    // Toggle sub-bar
    document.querySelectorAll('.open-sub').forEach(button => {
        button.addEventListener('click', function () {
            const row = button.closest('.side-row');
            const subBar = row.querySelector('.sub-bar');
            if (!subBar) return;

            const isOpen = button.classList.toggle('active');
            subBar.classList.toggle('active', isOpen);
            subBar.classList.toggle('hidden', !isOpen);
            row.classList.toggle('sub-open', isOpen);
        });
    });

    // Tự động collapse nếu màn hình < 992px
    function handleResponsiveSidebar() {
        if (window.innerWidth < 992) {
            collapseSidebar();
        }
    }

    handleResponsiveSidebar(); // Gọi khi DOM load
    window.addEventListener('resize', handleResponsiveSidebar);
});
