<script setup>

</script>
<template>
    <!-- 頂部導航欄 -->
    <nav class="navbar">
        <a href="index.html" class="logo-container">
            <div class="cube-logo" id="cubeLogo"></div>
        </a>
       
        <button class="ai-agent-btn">
            <i class="fas fa-robot"></i>
            <span>進入工作台</span>
        </button>
        <div class="language-dropdown">
            <button class="language-btn"><i class="fas fa-globe"></i></button>
            <div class="language-options">
                <a href="index.html" class="active">繁體中文</a>
                <a href="zh-cn/index.html">简体中文</a>
                <a href="en/index.html">English</a>
            </div>
        </div>
    </nav>
</template>
<style scoped>
/* 導航欄樣式 */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    background: rgba(10, 26, 47, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid rgba(0, 247, 255, 0.1);
}

.nav-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 2;
    text-decoration: none;
}

.cube-logo {
    width: 40px;
    height: 40px;
    position: relative;
}

.company-name {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--neon-blue);
    text-shadow: 0 0 10px var(--neon-blue);
}

.company-location {
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0.8;
    margin-left: 0.3rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: var(--white);
    text-decoration: none;
    padding: 0.5rem 1rem;
    position: relative;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 1.1rem;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--neon-blue);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.nav-link:hover {
    color: var(--neon-blue);
}

.nav-link:hover::after {
    transform: scaleX(1);
}

/* AI Agent 按鈕樣式 */
.ai-agent-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 247, 255, 0.1);
    border: 1px solid var(--neon-blue);
    border-radius: 4px;
    color: var(--neon-blue);
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
}

.ai-agent-btn i {
    font-size: 1.1rem;
}

.ai-agent-btn:hover {
    background: rgba(0, 247, 255, 0.2);
    transform: translateY(-2px);
}

/* 語言選擇下拉選單（更新） */
.language-dropdown {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 247, 255, 0.1);
    border: 1px solid var(--neon-blue);
    border-radius: 4px;
    color: var(--neon-blue);
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
}
.language-btn {
    background: none;
    border: none;
    color: var(--text-primary);
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    width: fit-content;
}

.language-btn:hover {
    background: rgba(0, 247, 255, 0.1);
}

.language-btn .arrow {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
}

.language-options {
    position: absolute;
    background: rgba(10, 26, 47, 0.95);
    border-radius: 8px;
    padding: 0.8rem;
    margin-top: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 10;
    right: 0;
    display: flex;
    gap: 1rem;
}

.language-dropdown:hover .language-options {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.language-dropdown:hover .arrow {
    transform: rotate(180deg);
}

.language-options a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}

.language-options a:hover {
    background: rgba(0, 247, 255, 0.1);
    color: var(--neon-blue);
}

.language-options a.active {
    color: var(--neon-blue);
    background: rgba(0, 247, 255, 0.05);
}


</style>