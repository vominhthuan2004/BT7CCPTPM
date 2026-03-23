document.getElementById('infoBtn').addEventListener('click', function() {
    const msg = document.getElementById('message');
    msg.innerHTML = `Pipeline chạy lúc: ${new Date().toLocaleString()}<br>
                     Deployed từ GitLab CI/CD!`;
});