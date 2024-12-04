// modalHandler.js

// Fungsi untuk menampilkan modal sukses
function showSuccessModal(message, callback = null) {
    const successModal = document.getElementById('successModal');
    const modalBody = successModal.querySelector('.modal-body p');
    modalBody.textContent = message;

    const modal = new bootstrap.Modal(successModal);
    modal.show();

    // Sembunyikan modal setelah 2 detik
    setTimeout(() => {
        modal.hide();
        if (callback) {
            callback(); // Jalankan callback jika diberikan
        }
    }, 2000);
}

// Export fungsi jika diperlukan dalam modul JS modern
if (typeof module !== 'undefined') {
    module.exports = { showSuccessModal };
}
