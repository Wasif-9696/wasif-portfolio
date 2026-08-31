// Mobile menu toggle
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.onclick = () => {
    nav.classList.toggle("open");
};

// Close menu after clicking a navigation link
document.querySelectorAll("nav a").forEach(link => {
    link.onclick = () => {
        nav.classList.remove("open");
    };
});

// Force-download handler for the CV download button
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', async (e) => {
    // Prevent default link navigation so we can force a download
    e.preventDefault();
    try {
      const resp = await fetch('/download');
      if (!resp.ok) throw new Error('Network response was not ok');
      const blob = await resp.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Wasif-Portfolio.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      // Fallback: if fetch fails, navigate to the raw file so user can save it
      console.error('Download failed, redirecting to raw file:', err);
      window.location.href = 'https://raw.githubusercontent.com/Wasif-9696/wasif-portfolio/main/wport.pdf';
    }
  });
}
