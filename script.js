const slider = document.getElementById('evaSlider');
    const marker = document.getElementById('faceMarker');
    const rostrosWrap = document.getElementById('rostrosWrap');
    const valorDolor = document.getElementById('valorDolor');

    function updateUI() {
      const val = parseFloat(slider.value);
      valorDolor.textContent = val.toFixed(1);

      const wrapRect = rostrosWrap.getBoundingClientRect();
      const markerWidth = marker.offsetWidth || 18;
      const maxLeft = wrapRect.width - markerWidth; // límites dentro de la imagen
      const leftPx = (val / 10) * maxLeft;
      marker.style.left = leftPx + 'px';
    }

    slider.addEventListener('input', updateUI);
    window.addEventListener('resize', updateUI);
    window.addEventListener('load', updateUI);