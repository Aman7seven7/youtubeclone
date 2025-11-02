document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector('.searchbar');
  const searchButton = document.querySelector('.search');
  const videos = document.querySelectorAll('.div');

  function searchVideos() {
    const query = searchBar.value.trim().toLowerCase();

    videos.forEach(video => {
      const titleElement = video.querySelector('.title');
      if (!titleElement) return; // skip if no title

      const titleText = titleElement.textContent.toLowerCase();
      if (titleText.includes(query)) {
        video.style.display = "";
      } else {
        video.style.display = "none";
      }
    });
  }

  // run on button click
  searchButton.addEventListener('click', searchVideos);

  // run when user presses Enter
  searchBar.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchVideos();
  });
});







// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log('[script] DOMContentLoaded');

  const notifContainer = document.querySelector('.notifications-icon-container');
  const notifIcon = document.querySelector('.notifications-icon');
  const notifCount = document.querySelector('.notifications-count');

  console.log('[script] notifContainer:', notifContainer);
  console.log('[script] notifIcon:', notifIcon);
  console.log('[script] notifCount:', notifCount);

  if (!notifContainer && !notifIcon) {
    console.error('[script] ERROR: Neither .notifications-icon-container nor .notifications-icon found in DOM.');
    return;
  }
  if (!notifCount) {
    console.error('[script] ERROR: .notifications-count element NOT found in DOM.');
    return;
  }

  // Ensure the badge is animatable (will be enforced in CSS too)
  notifCount.style.willChange = 'transform, opacity';

  // Handler that animates, updates text and color
  function clearNotifications() {
    console.log('[script] clearNotifications() called. Current count:', notifCount.textContent);

    // animate out
    notifCount.style.transition = 'transform 0.28s ease, opacity 0.28s ease, background-color 0.2s linear';
    notifCount.style.transformOrigin = 'center center';
    notifCount.style.transform = 'scale(0)';
    notifCount.style.opacity = '0';

    // after animation, change text & color, pop back in
    setTimeout(() => {
      notifCount.textContent = '0';
      notifCount.style.backgroundColor = 'grey';
      // small timeout to let style apply before showing again
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          notifCount.style.transform = 'scale(1)';
          notifCount.style.opacity = '1';
        });
      });
    }, 320);
  }

  // Attach listener to container if present, else to icon
  (notifContainer || notifIcon).addEventListener('click', clearNotifications);
});










document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector('.hamburgermenu');
  const sidebar = document.querySelector('.sidebar');

  if (!menuBtn || !sidebar) {
    console.error("❌ Hamburger menu or sidebar not found in the DOM.");
    return;
  }

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-hidden');
  });
});









document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.createElement('button');
  themeToggle.textContent = '🌙';
  themeToggle.classList.add('theme-toggle');

  // add button to header (right side)
  const rightSection = document.querySelector('.rightsection');
  rightSection.appendChild(themeToggle);

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  // On button click → toggle theme
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});








document.addEventListener("DOMContentLoaded", () => {
  const videoLinks = [
    "https://www.youtube.com/watch?v=n2RNcPRtAiY",
    "https://www.youtube.com/watch?v=9bZkp7q19f0",
    "https://www.youtube.com/watch?v=fLexgOxsZu0",
    "https://www.youtube.com/watch?v=094y1Z2wpJg",
    "https://www.youtube.com/watch?v=86CQq3pKSUw",
    "https://www.youtube.com/watch?v=xvFZjo5PgG0"
  ];

  const videos = document.querySelectorAll('.div');
  videos.forEach((video, index) => {
    const link = videoLinks[index];
    if (!link) return;

    const thumbnail = video.querySelector('.thumbnail');
    const title = video.querySelector('.title');

    [thumbnail, title].forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => window.open(link, '_blank'));
    });
  });
});