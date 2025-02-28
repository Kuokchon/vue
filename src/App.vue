<script setup>
import { onMounted } from 'vue'
import Header from './views/header.vue'
import Footer from './views/footer.vue'

// 显示微信二维码的函数
function showWeChatQR() {
  // 这里可以添加显示微信二维码的逻辑
  alert('微信二维码')
}

onMounted(() => {
  // 加載 particles.js
  const particlesScript = document.createElement('script')
  particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
  particlesScript.onload = () => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#00F7FF' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          line_linked: { enable: true, color: '#00F7FF', opacity: 0.4 }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
          }
        },
        background: {
          color: "transparent",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      })
    }
  }
  document.head.appendChild(particlesScript)

  // 加載 three.js
  const threeScript = document.createElement('script')
  threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
  document.head.appendChild(threeScript)

  // 加載本地 main.js
  const mainScript = document.createElement('script')
  mainScript.src = '/main.js'
  document.head.appendChild(mainScript)
})
</script>

<template>
    <!-- 使用Header组件 -->
    <Header />

    <!-- 主視覺區 -->
    <section class="hero">
        <div id="particles-js"></div>
        <div class="hero-content">
            <h2 class="main-title">未來已來 國進科技</h2>
            <h3 class="sub-title">AI員工 × AI私人助理 自動化辦公</h3>
            <div class="cta-buttons">
                <button class="primary-btn">即刻體驗 →</button>
                <button class="secondary-btn">技術白皮書 ↓</button>
            </div>
        </div>
    </section>

    <!-- 核心優勢模塊 -->
    <section class="advantages">
        <div class="advantage-card">
            <div class="icon chip-icon"></div>
            <h3>自主研發AI組織架構</h3>
            <p>個人創業/企業組織架構/AI員工/AI私人助理</p>
        </div>
        <div class="advantage-card">
            <div class="icon ai-icon"></div>
            <h3>產品 x 私人定制</h3>
            <p>AIGC矩陣/NFC矩陣/網站開發/APP開發/AI Agent開發</p>
        </div>
        <!-- 更多卡片 -->
    </section>

    <!-- 使用Footer组件 -->
    <Footer />
</template>

<style scoped>
:root {
  --primary-dark: #0F172A;
  --primary-light: #1E293B;
  --accent-blue: #38BDF8;
  --accent-purple: #8B5CF6;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --gradient-start: #0F172A;
  --gradient-end: #1E293B;
  --card-bg: rgba(30, 41, 59, 0.5);
  --hover-bg: rgba(56, 189, 248, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 全局样式应用到#app元素 */
:deep(#app) {
  font-family: 'Noto Sans TC', sans-serif;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

:deep(#app)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(0, 247, 255, 0.1), transparent);
  opacity: 0.1;
  z-index: -1;
}

/* 主視覺區樣式 */
.hero {
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 70px;
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-content {
  text-align: center;
  z-index: 1;
  padding: 2rem;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  transform: perspective(1000px) rotateX(15deg);
  text-shadow: 0 0 20px var(--accent-blue);
}

.sub-title {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--silver-gray);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-btn, .secondary-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background: var(--accent-blue);
  color: var(--primary-dark);
  font-weight: 700;
  position: relative;
  overflow: hidden;
}

.primary-btn::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
  transition: transform 0.6s ease;
}

.primary-btn:hover::after {
  transform: rotate(45deg) translate(50%, 50%);
}

.secondary-btn {
  background: transparent;
  color: var(--white);
  border: 2px solid var(--neon-blue);
}

/* 核心優勢模塊樣式 */
.advantages {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.advantage-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  transform: rotate(-5deg);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-align: center;
}

.advantage-card:hover {
  transform: rotate(0) scale(1.05);
  background: rgba(255, 255, 255, 0.15);
}

.advantage-card h3 {
  margin: 1rem 0 0.5rem;
  color: var(--neon-blue);
}

.advantage-card p {
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>
