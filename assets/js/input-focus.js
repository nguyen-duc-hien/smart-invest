document.addEventListener('DOMContentLoaded', function () {
    // Lấy tất cả các input-label
    const inputLabels = document.querySelectorAll('.input-label');

    // Duyệt qua từng input-label
    inputLabels.forEach(label => {
        const input = label.querySelector('input, textarea, select'); // Lấy input bên trong

        // Thêm sự kiện focus
        input.addEventListener('focus', function () {
            label.classList.add('active');
        });

        // Thêm sự kiện blur
        input.addEventListener('blur', function () {
            if (!this.value.trim()) { // Nếu input rỗng
                label.classList.remove('active');
            }
        });

        // Kiểm tra ngay khi tải trang nếu input có sẵn value
        if (input.value.trim()) {
            label.classList.add('active');
        }
    });
});