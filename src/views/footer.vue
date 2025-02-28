<script setup>

</script>
<template>
    <!-- 頁腳 -->
    <footer>
        <div class="footer-content">
            <div class="footer-links">
                <div class="column">
                    <h4>項目介紹</h4>
                    <a href="aigc-matrix.html">AIGC視頻矩陣</a>
                    <a href="nfc-matrix.html">NFC矩陣</a>
                    <a href="ai-agent-platform.html" class="active">AI Agent平台</a>
                    <a href="web-dev.html">網站/APP/小程序開發</a>
                    <a href="ai-agent-custom.html">AI-Agent定制開發</a>
                </div>
                <div class="contact-info">
                    <h4>關於我們</h4>
                    <a href="tutorial.html" class="active">使用教程</a>
                    <a href="download.html">下載中心</a>
                    <a href="contact.html">聯繫我們</a>
                </div>
                <div class="study-links">
                    <h4>研發方向</h4>
                    <a href="ai-company.html" class="active">AI一人公司</a>
                    <a href="ai-assistant.html">AI私人助理</a>
                    <a href="ai-employee.html">AI員工</a>
                </div>
                <div class="social-links">
                    <h4>關注我們</h4>
                    <div class="social-icons">
                        <a href="#" class="social-icon facebook" title="Facebook">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#" class="social-icon instagram" title="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-icon tiktok" title="TikTok">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="#" class="social-icon redbook" title="小紅書">
                            <i class="fas fa-book"></i>
                        </a>
                        <a href="#" class="social-icon wechat" title="WeChat">
                            <i class="fab fa-weixin"></i>
                        </a>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>© 2025 澳門國進科技一人有限公司 版權所有</p>
            <div class="patent-numbers"></div>
        </div>
    </footer>
</template>

<style scoped>
/* 頁腳樣式 */

footer {
    background: rgba(10, 26, 47, 0.95);
    padding: 4rem 2rem 2rem;
    margin-top: 4rem;
    position: relative;
    border-top: 1px solid rgba(0, 247, 255, 0.1);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}
.footer-links {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    text-align: left;
}

.footer-links h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: var(--text-primary);
    text-align: left;
}

.footer-links a {
    display: block;
    color: var(--text-secondary);
    text-decoration: none;
    margin-bottom: 0.8rem;
    font-size: 0.95rem;
    transition: color 0.3s ease;
    text-align: left;
}

.footer-links a:hover {
    color: var(--accent-blue);
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
}

.copyright {
    text-align: center;
    color: var(--silver-gray);
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 0.8;
    background: none;
}
</style>