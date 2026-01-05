document.addEventListener('DOMContentLoaded', function() {
  const designSwitcher = document.getElementById('design-switcher');
  const toggleBtn = document.getElementById('toggle-switcher');
  const switcherPanel = document.querySelector('.switcher-panel');
  const themeBtns = document.querySelectorAll('.theme-btn');
  const primaryColorInput = document.getElementById('primary-color');
  const fontSizeSelect = document.getElementById('font-size');
  const resetBtn = document.getElementById('reset-btn');

  // Toggle switcher panel
  toggleBtn.addEventListener('click', function() {
    designSwitcher.classList.toggle('open');
  });

  // Theme switching
  themeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const theme = this.getAttribute('data-theme');

      // Remove active class from all buttons
      themeBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Apply theme
      applyTheme(theme);
    });
  });

  // Primary color change
  primaryColorInput.addEventListener('input', function() {
    document.documentElement.style.setProperty('--primary-color', this.value);
  });

  // Font size change
  fontSizeSelect.addEventListener('change', function() {
    document.documentElement.style.setProperty('--font-size-base', this.value);
  });

  // Reset to default
  resetBtn.addEventListener('click', function() {
    // Reset theme
    themeBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-theme="default"]').classList.add('active');
    document.body.className = '';

    // Reset color
    primaryColorInput.value = '#4172dc';
    document.documentElement.style.setProperty('--primary-color', '#4172dc');

    // Reset font size
    fontSizeSelect.value = '16px';
    document.documentElement.style.setProperty('--font-size-base', '16px');
  });

  function applyTheme(theme) {
    // Remove existing theme classes
    document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();

    if (theme !== 'default') {
      document.body.classList.add(`theme-${theme}`);
    }
  }

  // Close panel when clicking outside
  document.addEventListener('click', function(e) {
    if (!designSwitcher.contains(e.target)) {
      designSwitcher.classList.remove('open');
    }
  });
});
