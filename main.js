$(document).ready(function () {
    var value = 0;
    var maxClicks = 3;
    var isSpinning = false;
    var clickCount = 0;
    var spinCount = 3;
    const remainingSpins = document.getElementById('remaining-spins');
    $('.wheel__button').prop('disabled', true);

    function getPosition(position) {
        var congratulationNote = $('.congratulation__note');
        var prizeName = '';
        var arrowRotation = 0; // Góc quay mặc định của .wheel__arrow

        if (position <= 30) {
            prizeName = 'Chúc Bạn May Mắn Lần Sau.';
        } else if (position <= 90) {
            prizeName = 'CHÚC MỪNG BẠN Đã Trúng: Điện Thoại Samsung S23 Ultra vui lòng liên hệ với nhân viên tư vấn để nhận quà.';
            arrowRotation = 60; // Điều chỉnh góc quay của .wheel__arrow cho Samsung S23 Ultra
        } else if (position <= 150) {
            prizeName = 'Chúc Bạn May Mắn Lần Sau.';
        } else if (position <= 210) {
            prizeName = 'CHÚC MỪNG BẠN Đã Trúng:  AirPods Pro 2 vui lòng liên hệ với nhân viên tư vấn để nhận quà.';
            arrowRotation = 120; // Điều chỉnh góc quay của .wheel__arrow cho AirPods Pro 2
        } else if (position <= 270) {
            prizeName = 'Chúc Bạn May Mắn Lần Sau.';
        } else if (position <= 330) {
            prizeName = 'CHÚC MỪNG BẠN Đã Trúng: IPHONE 15 PROMAX vui lòng liên hệ với nhân viên tư vấn để nhận quà.';
        } else {
            prizeName = 'Chúc Bạn May Mắn lần sau.';
        }

        congratulationNote.text(`${prizeName}`);
        $('.congratulation').fadeIn();
        isSpinning = false;
        value = 0;
        $(".wheel__inner").css("transform", `rotate(${value}deg)`);
        $(".wheel__arrow").css("transform", `rotate(${arrowRotation}deg)`);
    }

    function spinWheel() {
        if (!isSpinning && clickCount < maxClicks) {
            isSpinning = true;
            var targetRotation;

            if (clickCount < 2) {
                targetRotation = 360 * 3 + 30;
            } else {
                targetRotation = 360 * 3 + Math.random() * (330 - 270) + 270; // Chọn vị trí ngẫu nhiên từ 270 đến 330 độ
            }

            $(".wheel__inner").css("transform", `rotate(${targetRotation}deg)`);

            console.log('Target rotation:', targetRotation);

            setTimeout(() => {
                getPosition(targetRotation % 1080);
            }, 5000);

            clickCount++;
            updateSpinCount();

            if (clickCount === maxClicks) {
                disableButton();
            }
        }

        if (spinCount > 0) {
            spinCount--;
        }
    }

    function disableButton() {
        $('.wheel__button').prop('disabled', true);
    }

    function updateSpinCount() {
        remainingSpins.textContent = `Số lượt còn lại: ${maxClicks - clickCount}`;
    }

    $('.wheel__button').click(spinWheel);

    $('.congratulation__close').click(function () {
        $('.congratulation').fadeOut();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    openModal();
});

function openModal() {
    $('.wheel__button').prop('disabled', true);
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    // pass
    if (password === 'KH24011') {
        $('.wheel__button').prop('disabled', false);
        alert('Chúc mừng bạn đăng nhập thành công.');
        closeModal();
    } else {
        alert('Bạn đã nhập sai mã, vui lòng nhập lại');
    }
}
