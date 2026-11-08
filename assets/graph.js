/* Obsidian-style interactive force-directed graph for skills */

export class SkillsGraph {
  constructor(canvas, container, getThemeColors) {
    this.canvas = canvas;
    this.container = container;
    this.ctx = canvas.getContext('2d');
    this.getThemeColors = getThemeColors;
    
    this.nodes = [];
    this.links = [];
    this.draggedNode = null;
    this.hoveredNode = null;
    this.animId = null;
    this.width = 0;
    this.height = 0;
    this.dpr = window.devicePixelRatio || 1;
    
    this.initData();
    this.setupEvents();
    this.resize();
    this.start();
  }

  initData() {
    // Hubs (Categories)
    const hubs = [
      { id: 'cat-lang', label: 'Languages', labelRu: 'Языки', isHub: true, color: '#7aa2f7', icon: 'code', r: 18 },
      { id: 'cat-sys', label: 'Systems', labelRu: 'Системы', isHub: true, color: '#bb9af7', icon: 'dns', r: 18 },
      { id: 'cat-web', label: 'Web & Mobile', labelRu: 'Веб & Мобилка', isHub: true, color: '#7dcfff', icon: 'layers', r: 18 },
      { id: 'cat-data', label: 'Data', labelRu: 'Данные', isHub: true, color: '#73daca', icon: 'database', r: 18 },
      { id: 'cat-net', label: 'Networks', labelRu: 'Сети', isHub: true, color: '#ff9e64', icon: 'hub', r: 18 },
      { id: 'cat-ai', label: 'AI Tooling', labelRu: 'AI Стек', isHub: true, color: '#f7768e', icon: 'auto_awesome', r: 18 }
    ];

    const techData = [
      // Languages
      { id: 'c', label: 'C', cat: 'cat-lang' },
      { id: 'cpp', label: 'C++', cat: 'cat-lang' },
      { id: 'asm', label: 'ASM', cat: 'cat-lang' },
      { id: 'go', label: 'Go', cat: 'cat-lang' },
      { id: 'ts', label: 'TypeScript', cat: 'cat-lang' },
      { id: 'js', label: 'JavaScript', cat: 'cat-lang' },
      { id: 'py', label: 'Python', cat: 'cat-lang' },
      { id: 'bash', label: 'Bash', cat: 'cat-lang' },
      { id: 'r', label: 'R', cat: 'cat-lang' },
      { id: 'dart', label: 'Dart', cat: 'cat-lang' },
      { id: 'kotlin', label: 'Kotlin', cat: 'cat-lang' },

      // Systems
      { id: 'nixos', label: 'NixOS', cat: 'cat-sys' },
      { id: 'linux', label: 'Linux', cat: 'cat-sys' },
      { id: 'docker', label: 'Docker', cat: 'cat-sys' },
      { id: 'caddy', label: 'Caddy', cat: 'cat-sys' },
      { id: 'gitea', label: 'Gitea', cat: 'cat-sys' },
      { id: 'git', label: 'Git', cat: 'cat-sys' },
      { id: 'github', label: 'GitHub', cat: 'cat-sys' },

      // Web & Mobile
      { id: 'react', label: 'React', cat: 'cat-web' },
      { id: 'node', label: 'Node.js', cat: 'cat-web' },
      { id: 'flutter', label: 'Flutter', cat: 'cat-web' },
      { id: 'compose', label: 'Jetpack Compose', cat: 'cat-web' },
      { id: 'qml', label: 'QML', cat: 'cat-web' },

      // Data
      { id: 'postgres', label: 'PostgreSQL', cat: 'cat-data' },
      { id: 'mysql', label: 'MySQL', cat: 'cat-data' },
      { id: 'sqlite', label: 'SQLite', cat: 'cat-data' },
      { id: 'sa', label: 'SQLAlchemy', cat: 'cat-data' },

      // Networks
      { id: 'keenetic', label: 'KeeneticOS', cat: 'cat-net' },
      { id: 'routeros', label: 'RouterOS', cat: 'cat-net' },
      { id: 'openwrt', label: 'OpenWrt', cat: 'cat-net' },
      { id: 'vlan', label: 'VLAN', cat: 'cat-net' },
      { id: 'dns', label: 'DHCP/DNS', cat: 'cat-net' },

      // AI Tooling
      { id: 'copilot', label: 'Copilot', cat: 'cat-ai' },
      { id: 'hermes', label: 'Hermes', cat: 'cat-ai' },
      { id: 'opencode', label: 'OpenCode', cat: 'cat-ai' },
      { id: 'crush', label: 'Crush', cat: 'cat-ai' },
      { id: 'dsh', label: 'DeepSeek Harness', cat: 'cat-ai' },
      { id: 'lora', label: 'LoRA', cat: 'cat-ai' }
    ];

    const crossEdges = [
      ['dart', 'flutter'],
      ['kotlin', 'compose'],
      ['ts', 'node'],
      ['ts', 'react'],
      ['js', 'ts'],
      ['nixos', 'linux'],
      ['nixos', 'bash'],
      ['docker', 'caddy'],
      ['py', 'sa'],
      ['postgres', 'sa'],
      ['py', 'lora'],
      ['dsh', 'opencode'],
      ['dsh', 'ts'],
      ['qml', 'linux'],
      ['go', 'cat-sys']
    ];

    this.nodes = [];
    this.links = [];

    // Add hubs
    hubs.forEach((h, i) => {
      const angle = (i / hubs.length) * Math.PI * 2;
      const dist = 160;
      this.nodes.push({
        id: h.id,
        label: h.label,
        labelRu: h.labelRu,
        isHub: true,
        icon: h.icon,
        color: h.color,
        r: h.r,
        x: 400 + Math.cos(angle) * dist,
        y: 250 + Math.sin(angle) * dist,
        vx: 0,
        vy: 0
      });
    });

    // Add techs
    techData.forEach((t) => {
      const parentHub = this.nodes.find(n => n.id === t.cat);
      const angle = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 80;
      const node = {
        id: t.id,
        label: t.label,
        labelRu: t.label,
        isHub: false,
        color: parentHub ? parentHub.color : '#a9abb5',
        r: 6.5,
        x: (parentHub ? parentHub.x : 400) + Math.cos(angle) * dist,
        y: (parentHub ? parentHub.y : 250) + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      };
      this.nodes.push(node);
      this.links.push({
        source: parentHub,
        target: node,
        dist: 70,
        strength: 0.04
      });
    });

    // Add cross edges
    crossEdges.forEach(([aId, bId]) => {
      const a = this.nodes.find(n => n.id === aId);
      const b = this.nodes.find(n => n.id === bId);
      if (a && b) {
        this.links.push({
          source: a,
          target: b,
          dist: 110,
          strength: 0.015,
          isCross: true
        });
      }
    });
  }

  resize() {
    const rect = this.container.getBoundingClientRect();
    this.width = rect.width;
    this.height = Math.max(460, Math.min(620, window.innerHeight * 0.6));
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
  }

  setupEvents() {
    let mouseX = 0, mouseY = 0;

    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const onPointerMove = (e) => {
      const pos = getPos(e);
      mouseX = pos.x;
      mouseY = pos.y;

      if (this.draggedNode) {
        this.draggedNode.x = mouseX;
        this.draggedNode.y = mouseY;
        this.draggedNode.vx = 0;
        this.draggedNode.vy = 0;
        return;
      }

      // Hit test
      let hit = null;
      for (let i = this.nodes.length - 1; i >= 0; i--) {
        const n = this.nodes[i];
        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        if (dx * dx + dy * dy <= (n.r + 8) * (n.r + 8)) {
          hit = n;
          break;
        }
      }
      this.hoveredNode = hit;
      this.canvas.style.cursor = hit ? 'grab' : 'default';
    };

    const onPointerDown = (e) => {
      const pos = getPos(e);
      for (let i = this.nodes.length - 1; i >= 0; i--) {
        const n = this.nodes[i];
        const dx = pos.x - n.x;
        const dy = pos.y - n.y;
        if (dx * dx + dy * dy <= (n.r + 10) * (n.r + 10)) {
          this.draggedNode = n;
          this.canvas.style.cursor = 'grabbing';
          break;
        }
      }
    };

    const onPointerUp = () => {
      this.draggedNode = null;
      this.canvas.style.cursor = this.hoveredNode ? 'grab' : 'default';
    };

    this.canvas.addEventListener('mousemove', onPointerMove);
    this.canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mouseup', onPointerUp);

    this.canvas.addEventListener('touchmove', onPointerMove, { passive: true });
    this.canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    window.addEventListener('resize', () => this.resize());
  }

  stepPhysics() {
    const cx = this.width / 2;
    const cy = this.height / 2;
    const damping = 0.86;

    // 1. Repulsion between all nodes (Coulomb)
    for (let i = 0; i < this.nodes.length; i++) {
      const n1 = this.nodes[i];
      for (let j = i + 1; j < this.nodes.length; j++) {
        const n2 = this.nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const d2 = dx * dx + dy * dy + 1;
        if (d2 < 60000) {
          const d = Math.sqrt(d2);
          const rep = (n1.isHub || n2.isHub ? 1200 : 450) / (d2 + 100);
          const fx = (dx / d) * rep;
          const fy = (dy / d) * rep;
          n1.vx -= fx;
          n1.vy -= fy;
          n2.vx += fx;
          n2.vy += fy;
        }
      }
    }

    // 2. Attraction along links (Hooke)
    for (let k = 0; k < this.links.length; k++) {
      const l = this.links[k];
      const dx = l.target.x - l.source.x;
      const dy = l.target.y - l.source.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 0.1;
      const diff = d - l.dist;
      const force = diff * l.strength;
      const fx = (dx / d) * force;
      const fy = (dy / d) * force;
      l.source.vx += fx;
      l.source.vy += fy;
      l.target.vx -= fx;
      l.target.vy -= fy;
    }

    // 3. Centering gravity & integration
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      if (n === this.draggedNode) continue;

      // Gravity towards center
      n.vx += (cx - n.x) * 0.0018;
      n.vy += (cy - n.y) * 0.0018;

      n.vx *= damping;
      n.vy *= damping;

      n.x += n.vx;
      n.y += n.vy;

      // Bounding box padding
      const pad = n.r + 20;
      if (n.x < pad) { n.x = pad; n.vx *= -0.5; }
      if (n.x > this.width - pad) { n.x = this.width - pad; n.vx *= -0.5; }
      if (n.y < pad) { n.y = pad; n.vy *= -0.5; }
      if (n.y > this.height - pad) { n.y = this.height - pad; n.vy *= -0.5; }
    }
  }

  render() {
    const ctx = this.ctx;
    ctx.save();
    ctx.scale(this.dpr, this.dpr);
    ctx.clearRect(0, 0, this.width, this.height);

    const theme = this.getThemeColors ? this.getThemeColors() : { isDark: true };
    const h = this.hoveredNode;

    // Check which nodes are connected to hovered
    const connectedNodeIds = new Set();
    if (h) {
      connectedNodeIds.add(h.id);
      this.links.forEach(l => {
        if (l.source.id === h.id) connectedNodeIds.add(l.target.id);
        if (l.target.id === h.id) connectedNodeIds.add(l.source.id);
      });
    }

    // 1. Draw Links
    for (let i = 0; i < this.links.length; i++) {
      const l = this.links[i];
      const isConnectedToHover = h && (l.source.id === h.id || l.target.id === h.id);
      const isDimmed = h && !isConnectedToHover;

      ctx.beginPath();
      ctx.moveTo(l.source.x, l.source.y);
      ctx.lineTo(l.target.x, l.target.y);

      if (isConnectedToHover) {
        ctx.strokeStyle = l.source.color || '#7aa2f7';
        ctx.lineWidth = 2.2;
        ctx.globalAlpha = 0.9;
      } else if (isDimmed) {
        ctx.strokeStyle = theme.isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.2;
      } else {
        ctx.strokeStyle = l.isCross 
          ? (theme.isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)')
          : (theme.isDark ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.14)');
        ctx.lineWidth = l.isCross ? 1 : 1.4;
        ctx.globalAlpha = 0.7;
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // 2. Draw Nodes
    const lang = document.documentElement.lang || 'ru';
    ctx.font = '500 11.5px "Roboto Flex", "Inter", sans-serif';

    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      const isHovered = n === h;
      const isConnected = h && connectedNodeIds.has(n.id);
      const isDimmed = h && !isConnected;

      ctx.save();
      if (isDimmed) {
        ctx.globalAlpha = 0.18;
      } else {
        ctx.globalAlpha = 1;
      }

      // Outer glow on hover
      if (isHovered) {
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 14;
      }

      // Circle
      ctx.beginPath();
      const radius = n.r * (isHovered ? 1.25 : 1);
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = n.isHub ? n.color : (isHovered ? n.color : (theme.isDark ? '#22252e' : '#e6e8f0'));
      ctx.fill();

      // Border for leaf nodes
      if (!n.isHub) {
        ctx.lineWidth = isHovered ? 2.5 : 1.5;
        ctx.strokeStyle = n.color;
        ctx.stroke();
      }

      // Inner icon or mark for hub
      if (n.isHub) {
        ctx.fillStyle = '#0d0e12';
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Label
      ctx.shadowBlur = 0;
      const labelText = (lang === 'ru' && n.labelRu) ? n.labelRu : n.label;
      
      if (n.isHub) {
        ctx.font = '700 12.5px "Roboto Flex", sans-serif';
        ctx.fillStyle = theme.isDark ? '#e3e5f0' : '#2f323a';
        ctx.fillText(labelText, n.x + n.r + 7, n.y + 4.5);
      } else {
        // Only show leaf labels if hovered, connected, or screen is roomy
        const showLabel = isConnected || isHovered || !h;
        if (showLabel) {
          ctx.font = '500 11px "JetBrains Mono", monospace';
          ctx.fillStyle = isHovered 
            ? (theme.isDark ? '#fff' : '#000') 
            : (theme.isDark ? '#a9abb5' : '#5c5f68');
          ctx.fillText(labelText, n.x + n.r + 5, n.y + 3.5);
        }
      }

      ctx.restore();
    }

    ctx.restore();
  }

  loop() {
    this.stepPhysics();
    this.render();
    this.animId = requestAnimationFrame(() => this.loop());
  }

  start() {
    if (!this.animId) this.loop();
  }

  stop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }
}
