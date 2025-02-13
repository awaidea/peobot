const slider = document.getElementById('slider');
const sliderButton = document.getElementById('sliderButton');
const message = document.getElementById('message');
let isDragging = false;

// 随机生成目标位置
const targetPosition = Math.floor(Math.random() * (slider.offsetWidth - sliderButton.offsetWidth));

sliderButton.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
});

function onMouseMove(e) {
    if (!isDragging) return;

    let left = e.clientX - slider.getBoundingClientRect().left - sliderButton.offsetWidth / 2;

    // 限制滑块在 slider 内部移动
    if (left < 0) left = 0;
    if (left > slider.offsetWidth - sliderButton.offsetWidth) left = slider.offsetWidth - sliderButton.offsetWidth;

    sliderButton.style.left = left + 'px';

    // 检查是否成功滑动到目标位置
    if (Math.abs(left - targetPosition) < 5) {
        message.textContent = '验证通过!';
        message.style.color = 'green';
        sliderButton.style.display = 'none';
        document.removeEventListener('mousemove', onMouseMove);
    }
}

// 初始化
sliderButton.style.left = '0px';
