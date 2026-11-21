/**
 * ==========================================================================
 * Shared helpers for the teaching tools.
 * Copyright (c) 2026 Prof. S. Karthikeyan, Materials Engineering, IISc.
 * All Rights Reserved.
 * ==========================================================================
 * Load this file after any plotting library (Chart.js, Plotly) and before the
 * tool's own script. It
 *   - loads MathJax so that \( ... \) and \[ ... \] render in the notes,
 *   - sets dark defaults for Chart.js and Plotly to match styles.css,
 *   - exposes a small colour palette, TOOL.c, for tools that draw on <canvas>.
 */
(function () {
  'use strict';

  // ---- MathJax (inline \( \), display \[ \]) ----
  window.MathJax = {
    tex: { inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]']] },
    chtml: { displayAlign: 'center' }
  };
  var mj = document.createElement('script');
  mj.async = true;
  mj.src = 'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js';
  document.head.appendChild(mj);

  // ---- Palette for canvas drawing (readable on a black canvas) ----
  var c = {
    bg: '#000000',
    grid: '#21262d',
    axis: '#8b949e',
    text: '#e0e0e0',
    muted: '#8b949e',
    blue: '#60a5fa',
    red: '#f87171',
    green: '#34d399',
    amber: '#eab308',
    purple: '#c084fc',
    orange: '#fb923c',
    pink: '#f472b6',
    white: '#f1f5f9'
  };

  // ---- Chart.js dark defaults ----
  if (window.Chart) {
    Chart.defaults.color = '#c9d1d9';
    Chart.defaults.borderColor = '#2a313a';
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    Chart.defaults.font.size = 12;
    if (Chart.defaults.plugins && Chart.defaults.plugins.legend) {
      Chart.defaults.plugins.legend.labels.color = '#e0e0e0';
    }
  }

  // ---- Plotly dark layout ----
  function plotLayout(extra) {
    var base = {
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: '#000000',
      font: { color: '#e0e0e0', family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
      margin: { t: 40, r: 20, l: 55, b: 45 },
      xaxis: { gridcolor: '#21262d', zerolinecolor: '#30363d' },
      yaxis: { gridcolor: '#21262d', zerolinecolor: '#30363d' }
    };
    extra = extra || {};
    var out = Object.assign({}, base, extra);
    out.xaxis = Object.assign({}, base.xaxis, extra.xaxis || {});
    out.yaxis = Object.assign({}, base.yaxis, extra.yaxis || {});
    return out;
  }

  window.TOOL = { c: c, plotLayout: plotLayout };
})();
