/* TransPrompt Bank — vanilla JS, no build step, no external dependencies. */
(function () {
  'use strict';

  var D = window.TPB_DATA;
  var I18N = {
    cn: {
      brandSub: '译提示词库 · LLM Assignment 1',
      navWorkflow: '工作流', navBrowse: '提示词库', navGuide: '使用指南',
      heroEyebrow: 'LLM ASSIGNMENT 1 · TRANSLATION WORKFLOW',
      heroTitle: '把翻译流程，变成可复制的提示词',
      heroDesc: '从译前背景调研、译中生成润色，到译后复盘反馈。54 条提示词、3 个工作阶段、中英双版本，按场景随取随用。',
      ctaBrowse: '开始浏览提示词', ctaGuide: '3 步上手 →',
      mockPrompt: '在翻译之前，找到文章来源、并整理相关背景知识。然后一段话快速告诉我这篇文章讲了什么？',
      mockCopy: '复制到剪贴板',
      stats: ['提示词（中英合计）', '翻译工作阶段', '场景分组', 'Meta Prompt'],
      workflowTitle: '一条完整的翻译流水线',
      workflowDesc: '点击任意阶段，直接筛选对应提示词。',
      stageDesc: {
        pre: '查来源、建术语表、抓核心观点——先把文章读懂再动笔。',
        production: '中英互译、多版本备选、按“信达雅”润色。',
        post: '从受众与客户视角反馈，沉淀 SOP 和复盘清单。'
      },
      stepLabel: '阶段',
      explorerTitle: '提示词浏览器',
      explorerDesc: '按阶段、场景和语言筛选；填入 xxx 后一键复制，直接发给你的大模型。',
      searchPlaceholder: '搜索提示词、场景、模型…',
      allStages: '全部阶段', allScenarios: '全部场景',
      resultCount: '共 <b>{n}</b> 条提示词',
      emptyText: '没有匹配的提示词，试试换个关键词或筛选条件。',
      resetFilters: '重置筛选',
      fillLabel: '替换 xx / xxx：', fillPlaceholder: '填入你的主题或文本（可选）',
      copy: '复制提示词', copied: '已复制 ✓',
      copyToast: '已复制到剪贴板，可直接粘贴到你的大模型',
      metaTitle: '两个 Meta Prompt：让提示词自己进化',
      metaDesc: '一个把粗糙想法升级成专业提示词，一个诊断并优化已有提示词。均含中英版本。',
      metaNumber: 'META PROMPT',
      guideTitle: '怎么用（3 步）',
      guideDesc: '这个网站不调用任何 API，也不需要登录——它是一份可直接取用的提示词工具书。',
      step1Title: '选阶段', step1Text: '从译前 / 译中 / 译后三个流水线阶段中挑选，或用搜索框直接找关键词。',
      step2Title: '填占位符', step2Text: '在卡片下方把 xx / xxx 替换为你的文本或主题，复制时会自动替换。',
      step3Title: '粘贴到你的 LLM', step3Text: '复制到 DeepSeek、Gemini、GPT、Grok 等任意模型，搭配记录的版本号迭代你的提示词。',
      footerText: 'TransPrompt Bank · 5317 LLM Assignment 1 · 周芝宇',
      footerNote: '静态站点 · 无需登录 · 数据来自 Assignment 1 Prompt Bank',
      langToggle: '中'
    },
    en: {
      brandSub: 'Translation Prompt Library · LLM Assignment 1',
      navWorkflow: 'Workflow', navBrowse: 'Prompt Bank', navGuide: 'How to use',
      heroEyebrow: 'LLM ASSIGNMENT 1 · TRANSLATION WORKFLOW',
      heroTitle: 'Turn your translation workflow into reusable prompts',
      heroDesc: 'From pre-translation research and drafting to post-translation review. 54 prompts, 3 stages, Chinese and English versions — ready whenever you need them.',
      ctaBrowse: 'Browse prompts', ctaGuide: '3 steps to start →',
      mockPrompt: 'Before translating, find the source of the article and organize the relevant background knowledge. Then tell me in one paragraph what this article is about.',
      mockCopy: 'Copy to clipboard',
      stats: ['prompts (CN + EN)', 'workflow stages', 'scenario groups', 'Meta Prompts'],
      workflowTitle: 'A complete translation pipeline',
      workflowDesc: 'Click any stage to filter the corresponding prompts instantly.',
      stageDesc: {
        pre: 'Find the source, build a glossary, locate core claims — read before you write.',
        production: 'CN↔EN drafting, alternative versions, polishing with faithfulness/expressiveness/elegance.',
        post: 'Feedback from audience and client perspectives, plus SOPs and review checklists.'
      },
      stepLabel: 'STAGE',
      explorerTitle: 'Prompt explorer',
      explorerDesc: 'Filter by stage, scenario and language; fill in xxx and copy straight into your LLM.',
      searchPlaceholder: 'Search prompts, scenarios, models…',
      allStages: 'All stages', allScenarios: 'All scenarios',
      resultCount: '<b>{n}</b> prompts found',
      emptyText: 'No matching prompts. Try a different keyword or filter.',
      resetFilters: 'Reset filters',
      fillLabel: 'Replace xx / xxx:', fillPlaceholder: 'Your topic or text (optional)',
      copy: 'Copy prompt', copied: 'Copied ✓',
      copyToast: 'Copied to clipboard — paste it into your LLM',
      metaTitle: 'Two Meta Prompts: make your prompts evolve',
      metaDesc: 'One upgrades rough ideas into professional prompts; the other diagnoses and optimizes existing ones. Both in Chinese and English.',
      metaNumber: 'META PROMPT',
      guideTitle: 'How to use (3 steps)',
      guideDesc: 'No API calls and no login — this site is a ready-to-use prompt reference library.',
      step1Title: 'Pick a stage', step1Text: 'Choose from pre / production / post, or search directly by keyword.',
      step2Title: 'Fill placeholders', step2Text: 'Replace xx / xxx with your own text or topic; the copy button applies it automatically.',
      step3Title: 'Paste into your LLM', step3Text: 'Use DeepSeek, Gemini, GPT, Grok or any model, and iterate with the recorded version numbers.',
      footerText: 'TransPrompt Bank · 5317 LLM Assignment 1 · Zhou Zhiyu',
      footerNote: 'Static site · No login · Data from Assignment 1 Prompt Bank',
      langToggle: 'EN'
    }
  };

  var state = {
    uiLang: 'cn',
    promptLang: 'cn',
    stage: 'all',
    scenario: 'all',
    query: ''
  };
  try {
    var saved = localStorage.getItem('tpb-ui-lang');
    if (saved === 'cn' || saved === 'en') state.uiLang = saved;
  } catch (e) {}

  function t(key) { return I18N[state.uiLang][key] || key; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function local(v) { return (v && v[state.promptLang]) || (v && v.en) || ''; }
  function stageUi(v) { return D.stages[v] ? D.stages[v][state.uiLang] : v; }
  function $(id) { return document.getElementById(id); }

  function applyI18n() {
    document.documentElement.lang = state.uiLang === 'cn' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) { el.placeholder = t(el.dataset.i18nPlaceholder); });
    $('uiLangBtn').textContent = t('langToggle');
    renderStats(); renderWorkflow(); renderChips(); renderScenarioOptions(); renderCards(); renderMeta();
  }

  function renderStats() {
    var values = [D.prompts.length * 2, Object.keys(D.stages).length, 9, D.meta.length];
    $('stats').innerHTML = values.map(function (v, i) {
      return '<div class="stat"><strong>' + v + '</strong><small>' + esc(I18N[state.uiLang].stats[i]) + '</small></div>';
    }).join('');
  }

  var stageIcons = { pre: '①', production: '②', post: '③' };
  function renderWorkflow() {
    $('workflowGrid').innerHTML = Object.keys(D.stages).map(function (key, i) {
      var count = D.prompts.filter(function (p) { return p.stage === key; }).length;
      return '<button type="button" class="workflow-card' + (state.stage === key ? ' active' : '') + '" data-stage="' + key + '">' +
        '<span class="wc-arrow">→</span>' +
        '<div class="wc-top"><span class="wc-icon">' + stageIcons[key] + '</span><span class="wc-step">' + t('stepLabel') + ' 0' + (i + 1) + '</span></div>' +
        '<h3 class="wc-title">' + esc(stageUi(key)) + '</h3>' +
        '<p class="wc-desc">' + esc(I18N[state.uiLang].stageDesc[key]) + '</p>' +
        '<div class="wc-meta"><span class="wc-count">' + count + ' prompts</span><span>↗ ' + t('navBrowse') + '</span></div>' +
        '</button>';
    }).join('');
  }

  function renderChips() {
    var keys = ['all'].concat(Object.keys(D.stages));
    $('stageChips').innerHTML = keys.map(function (k) {
      var label = k === 'all' ? t('allStages') : stageUi(k);
      return '<button type="button" class="chip' + (state.stage === k ? ' active' : '') + '" data-stage="' + k + '">' + esc(label) + '</button>';
    }).join('');
  }

  function matches(p) {
    if (state.stage !== 'all' && p.stage !== state.stage) return false;
    if (state.scenario !== 'all' && String(p.group) !== state.scenario) return false;
    if (!state.query) return true;
    var hay = [p.text.cn, p.text.en, p.scenario.cn, p.scenario.en, p.model.cn, p.model.en, p.note.cn, p.note.en].join(' ').toLowerCase();
    return state.query.toLowerCase().split(/\s+/).filter(Boolean).every(function (term) { return hay.indexOf(term) !== -1; });
  }

  function renderScenarioOptions() {
    var pool = D.prompts.filter(function (p) { return state.stage === 'all' || p.stage === state.stage; });
    var groups = [];
    pool.forEach(function (p) { if (groups.indexOf(p.group) === -1) groups.push(p.group); });
    if (state.scenario !== 'all' && groups.indexOf(Number(state.scenario)) === -1) state.scenario = 'all';
    var first = pool.find(function (p) { return p.group === groups[0]; });
    $('scenarioSelect').innerHTML = '<option value="all">' + esc(t('allScenarios')) + '</option>' + groups.map(function (g) {
      var sample = pool.find(function (p) { return p.group === g; });
      return '<option value="' + g + '"' + (state.scenario === String(g) ? ' selected' : '') + '>' + esc(local(sample.scenario)) + '</option>';
    }).join('');
    void first;
  }

  function promptCard(p) {
    var note = local(p.note);
    return '<article class="card">' +
      '<div class="card-top">' +
        '<span class="no-badge">' + esc(p.no) + '</span>' +
        '<span class="scenario-tag">' + esc(local(p.scenario)) + '</span>' +
        '<span class="stage-tag stage-' + p.stage + '">' + esc(stageUi(p.stage)) + '</span>' +
      '</div>' +
      '<p class="prompt-text">' + esc(local(p.text)) + '</p>' +
      (note ? '<p class="card-note">📌 ' + esc(note) + '</p>' : '') +
      '<div class="card-meta"><span>' + esc(local(p.model)) + '</span><span>v' + esc(local(p.version)) + '</span><span>' + esc(local(p.format)) + '</span></div>' +
      fillRow(p.id) +
      '<button type="button" class="copy-btn" data-copy="' + p.id + '">' + t('copy') + '</button>' +
      '</article>';
  }

  function fillRow(id) {
    return '<div class="fill-row"><label for="fill-' + id + '">' + t('fillLabel') + '</label>' +
      '<input id="fill-' + id + '" data-fill="' + id + '" type="text" placeholder="' + esc(t('fillPlaceholder')) + '"></div>';
  }

  function renderCards() {
    var list = D.prompts.filter(matches);
    $('resultCount').innerHTML = t('resultCount').replace('{n}', list.length);
    $('promptCards').innerHTML = list.map(promptCard).join('');
    $('emptyState').hidden = list.length > 0;
  }

  function renderMeta() {
    $('metaGrid').innerHTML = D.meta.map(function (m) {
      return '<article class="meta-card">' +
        '<div class="meta-head"><h3>' + esc(m.title) + '</h3><span class="meta-number">' + t('metaNumber') + ' 0' + m.id.slice(-1) + '</span></div>' +
        '<p class="meta-text">' + esc(local(m.text)) + '</p>' +
        fillRow(m.id) +
        '<button type="button" class="copy-btn" data-copy="' + m.id + '">' + t('copy') + '</button>' +
        '</article>';
    }).join('');
  }

  function toast(msg) {
    var el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(el._timer);
    el._timer = setTimeout(function () { el.classList.remove('show'); }, 1800);
  }

  function resolveText(id) {
    var p = D.prompts.find(function (x) { return x.id === id; });
    var m = D.meta.find(function (x) { return x.id === id; });
    var text = p ? local(p.text) : (m ? local(m.text) : '');
    var input = document.querySelector('[data-fill="' + id + '"]');
    var fill = input && input.value.trim();
    return fill ? text.replace(/xxx|xx/gi, fill) : text;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); resolve(); } catch (err) { reject(err); }
      document.body.removeChild(ta);
    });
  }

  document.addEventListener('click', function (e) {
    var copyBtn = e.target.closest('[data-copy]');
    if (copyBtn) {
      var id = copyBtn.dataset.copy;
      copyText(resolveText(id)).then(function () {
        document.querySelectorAll('[data-copy]').forEach(function (b) {
          if (b.dataset.copy === id) { b.classList.add('copied'); b.textContent = t('copied'); }
        });
        toast(t('copyToast'));
        setTimeout(function () {
          document.querySelectorAll('[data-copy="' + id + '"]').forEach(function (b) {
            b.classList.remove('copied'); b.textContent = t('copy');
          });
        }, 1600);
      }).catch(function () { toast('Copy failed — please select the text manually.'); });
      return;
    }
    var chip = e.target.closest('#stageChips .chip');
    if (chip) { state.stage = chip.dataset.stage; state.scenario = 'all'; renderChips(); renderWorkflow(); renderScenarioOptions(); renderCards(); return; }
    var wf = e.target.closest('#workflowGrid .workflow-card');
    if (wf) {
      state.stage = wf.dataset.stage; state.scenario = 'all';
      renderChips(); renderWorkflow(); renderScenarioOptions(); renderCards();
      $('explorer').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    var langBtn = e.target.closest('#promptLangSwitch button');
    if (langBtn) {
      state.promptLang = langBtn.dataset.lang;
      document.querySelectorAll('#promptLangSwitch button').forEach(function (b) { b.classList.toggle('active', b === langBtn); });
      renderCards(); renderMeta();
      return;
    }
    if (e.target.closest('#resetBtn')) {
      state.stage = 'all'; state.scenario = 'all'; state.query = '';
      $('searchInput').value = '';
      renderChips(); renderWorkflow(); renderScenarioOptions(); renderCards();
    }
  });

  $('uiLangBtn').addEventListener('click', function () {
    state.uiLang = state.uiLang === 'cn' ? 'en' : 'cn';
    try { localStorage.setItem('tpb-ui-lang', state.uiLang); } catch (e) {}
    applyI18n();
  });
  $('searchInput').addEventListener('input', function (e) { state.query = e.target.value.trim(); renderCards(); });
  $('scenarioSelect').addEventListener('change', function (e) { state.scenario = e.target.value; renderCards(); });

  applyI18n();
})();
