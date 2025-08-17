function openWhatsApp(phone) {
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
}

function copyPhone(phone) {
    navigator.clipboard.writeText(phone).then(() => {
        alert("Номер скопирован в буфер обмена!");
    });
}
