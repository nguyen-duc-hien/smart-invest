document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const views = document.querySelectorAll('.tab-view');

    // Hàm set active tab và view
    const setActive = (tabId) => {
        tabs.forEach(tab => tab.classList.remove('active'));
        views.forEach(view => view.classList.remove('active'));
        document.querySelector(`[data-tab="${tabId}"]`)?.classList.add('active');
        document.querySelector(`#${tabId}`)?.classList.add('active');
    };

    // Xử lý click tab
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn chuyển hướng nếu có thẻ <a>
            const tabId = tab.getAttribute('data-tab');
            setActive(tabId);
        });
    });

    // Kích hoạt tab dựa trên URL hiện tại
    const currentUrl = window.location.href;
    let activeTabId = tabs[0]?.getAttribute('data-tab'); // Mặc định tab đầu tiên
    tabs.forEach(tab => {
        const tabUrl = tab.querySelector('a')?.href || '';
        if (currentUrl === tabUrl || currentUrl === tabUrl + '/') {
            activeTabId = tab.getAttribute('data-tab');
        }
    });
    setActive(activeTabId);
});