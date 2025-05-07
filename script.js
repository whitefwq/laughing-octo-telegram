// 导航栏自动滚动和特效
const navLinks = document.querySelectorAll('nav ul li a');
// 由于后续代码会重新声明 sections 变量，这里将变量名修改为避免冲突
const sectionsInitial = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // 移除星际传送特效，直接滚动到目标位置
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 鼠标滚动动画
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sectionsInScroll = document.querySelectorAll('section');
    
    sectionsInScroll.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        
        // 检查滚动位置是否在当前 section 内
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

// Android 下载按钮和加载条
// Windows 下载按钮点击事件
function handleWindowsDownload() {
    alert('Windows 版本尚未推出，请耐心等待！');
}

// iOS 下载按钮点击事件
function handleIOSDownload() {
    alert('iOS 版本尚未推出，请耐心等待！');
}

// 新的视差滚动效果
window.addEventListener('scroll', () => { 
    const scrolled = window.pageYOffset; 
    document.querySelectorAll('section').forEach(section => { 
        const depth = parseFloat(section.dataset.depth) || 1; 
        const offset = -(scrolled * depth * 0.3); 
        section.style.transform = `translateY(${offset}px)`; 
    }); 
}); 

// 新的倒计时功能
function updateCountdown() { 
    const targetDate = new Date('2075-01-01T00:00:00').getTime(); 
    const now = new Date().getTime(); 
    const distance = targetDate - now; 

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    document.getElementById('countdown-timer').innerHTML = ` 
        ${days}天 ${hours}小时 ${minutes}分 ${seconds}秒 
    `; 
} 

setInterval(updateCountdown, 1000); 
updateCountdown(); 

// 新的下载按钮交互
document.getElementById('android-download').addEventListener('click', function() { 
    const overlay = document.getElementById('download-overlay'); 
    const progress = document.getElementById('progress'); 
    
    overlay.style.display = 'flex'; 
    progress.style.width = '0%'; 
    
    // 模拟下载进度 
    let width = 0; 
    const interval = setInterval(() => { 
        width += Math.random() * 5; 
        progress.style.width = width + '%'; 
        
        if (width >= 100) { 
            clearInterval(interval); 
            setTimeout(() => { 
                overlay.style.display = 'none'; 
                alert('下载链接获取成功'); 
                window.location.href = 'https://www.123pan.com/s/lQn5Vv-0xFxH.html';
            }, 500); 
        } 
    }, 50); 
}); 

// 新的禁用未推出按钮
document.querySelectorAll('button:disabled').forEach(button => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        alert('该版本尚未推出，敬请期待！'); 
    }); 
});

// 为 Windows 和 iOS 按钮添加点击事件监听器
const windowsButton = document.getElementById('windows-download');
const iosButton = document.getElementById('ios-download');

if (windowsButton) {
    windowsButton.addEventListener('click', handleWindowsDownload);
}

if (iosButton) {
    iosButton.addEventListener('click', handleIOSDownload);
}

// 页面加载完成后手动触发滚动事件
window.addEventListener('load', () => {
    window.dispatchEvent(new Event('scroll'));
});

// 检查元素是否在可视区域内，并且进入一定比例
function isElementInViewport(el, threshold = 0.2) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // 计算元素进入可视区域的比例
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= (windowHeight * threshold));
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= (windowWidth * threshold));

    return (vertInView && horInView);
}

// 处理滚动事件，添加浮出动画
function handleScroll() {
    const elements = document.querySelectorAll('section, nav, footer, .download-option');
    elements.forEach(element => {
        if (isElementInViewport(element) && !element.classList.contains('float-in')) {
            element.classList.add('float-in');
        }
    });
}

// 监听滚动事件
window.addEventListener('scroll', handleScroll);

// 页面加载时触发一次，处理初始可见的元素
window.addEventListener('load', handleScroll);