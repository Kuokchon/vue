import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

// 3D立方體Logo
class CubeLogo {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.cube = null;
        
        this.init();
    }
    
    init() {
        const container = document.getElementById('cubeLogo');
        this.renderer.setSize(40, 40);
        container.appendChild(this.renderer.domElement);
        
        // 創建立方體
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00F7FF,
            transparent: true,
            opacity: 0.8,
            emissive: 0x00F7FF,
            emissiveIntensity: 0.5
        });
        
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        
        // 添加光源
        const light = new THREE.PointLight(0xFFFFFF, 1, 100);
        light.position.set(5, 5, 5);
        this.scene.add(light);
        
        this.camera.position.z = 2;
        
        this.animate();
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        
        this.renderer.render(this.scene, this.camera);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new ParticleBackground();
    new CubeLogo();
    
    // 導航欄滾動效果
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;
        
        if(currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Logo點擊次數計數器（彩蛋功能）
    let logoClicks = 0;
    document.querySelector('.logo-container').addEventListener('click', () => {
        logoClicks++;
        if(logoClicks === 5) {
            alert('🎉 發現彩蛋！AR虛擬展間即將開啟...');
            logoClicks = 0;
        }
    });
});

// 產品展示輪播
class ProductSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = [
            {
                title: '量子運算處理器',
                specs: {
                    '運算能力': '120 TFLOPS',
                    '製程': '7nm',
                    '功耗': '75W'
                }
            },
            // 可以添加更多產品
        ];
        
        this.init();
    }
    
    init() {
        const slider = document.querySelector('.product-slider');
        this.slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'product-slide';
            slideElement.style.transform = `translateX(${index * 100}%)`;
            
            // 添加產品內容
            slideElement.innerHTML = `
                <h3>${slide.title}</h3>
                <div class="specs">
                    ${Object.entries(slide.specs).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-key">${key}</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            `;
            
            slider.appendChild(slideElement);
        });
    }
}

// 初始化產品輪播
new ProductSlider();