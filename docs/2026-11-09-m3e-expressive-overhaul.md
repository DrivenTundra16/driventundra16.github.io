# Спецификация Material 3 Expressive Overhaul для kyomufs.github.io

## 1. Цели и задачи
- Сделать интерфейс более выразительным (M3 Expressive), технологичным и интерактивным.
- Внедрить архитектурный паттерн **Connected Button Groups** из `tulgusch` (взамен стандартных SegmentedButton).
- Реализовать интерактивный физический векторный граф компетенций в стиле **Obsidian Graph View**.
- Разработать дизайн-систему **Tech Stickers** (стикеры-наклейки с физическим 3D-tilting и peel-off эффектом).
- Переработать витрину проектов в асимметричную **Bento-сетку** с микро-интерактивом (схемы архитектуры, статус, M3-карточки).
- Строго локальное тестирование без пушей в удаленный репозиторий без согласования.

## 2. Архитектура компонентов

### 2.1. M3E Connected Button Group (`m3e-btn-group`)
- **Контейнер**: прозрачный, без общей рамки (`gap: 2px`).
- **Форма кнопок**:
  - Первая кнопка в группе: `border-radius: var(--md-sys-shape-full) 8px 8px var(--md-sys-shape-full)`.
  - Последняя кнопка: `border-radius: 8px var(--md-sys-shape-full) var(--md-sys-shape-full) 8px`.
  - Промежуточные кнопки: `border-radius: 8px`.
  - **Выбранная кнопка**: `border-radius: var(--md-sys-shape-full) !important` со всех сторон («вынимается» из связки).
- **Цвета и тона**:
  - Неактивные: контейнер `var(--md-sys-color-surface-container-high)`, текст `var(--md-sys-color-on-surface-variant)`.
  - Активная: контейнер `var(--md-sys-color-primary)`, текст `var(--md-sys-color-on-primary)`.
- **Анимация**:
  - `transition: border-radius var(--motion-fast-spatial), background-color var(--motion-fast-effects), transform var(--motion-fast-spatial)`.

### 2.2. Obsidian-Style Force Graph навыков (`#skillsGraph`)
- Canvas с поддержкой High-DPI (`window.devicePixelRatio`).
- Векторная физическая модель частиц (force-directed):
  - Закон Кулона для отталкивания вершин.
  - Закон Гука для притяжения по ребрам категорий и кросс-связям.
  - Затухание скорости (damping).
- Интерактивность:
  - Drag-and-drop вершин с физическим откликом.
  - Hover подсветка: связанное дерево становится ярким, остальные узлы затемняются.
  - Переключение режимов отображения в шапке секции: `[ 🕸 Граф | 📑 Категории ]` через M3E Connected Button Group.
- Палитра: цвета узлов берутся из вычисленных токенов текущей темы (`--md-sys-color-primary`, `--md-sys-color-secondary`, `--md-sys-color-tertiary`).

### 2.3. Tech Stickers (Наклейки)
- Визуальный стиль: плотная контурная обводка (белая/outline), легкий угол наклона (`rotate(-3deg .. +3deg)`), эффект объемной наклейки с тенью.
- Интерактив: при движении курсора рассчитывается 3D-наклон (matrix3d / rotateX/Y) с эффектом легкого отклеивания уголка (peel-off shadow).
- Тематика: «NixOS Inside», «Wayland Native», «M3 Expressive», «Local AI», «Tula State Univ».

### 2.4. Bento-Grid проектов
- Модульная витрина 3-4 колонки с разной геометрией:
  - `tulgusch`: 2x1 или 2x2 крупный Bento-блок с витриной релизов и бейджами мобильного стека.
  - `free-ai-router`: Bento-карточка с микро-терминалом эмуляции локального шлюза.
  - `proxprobe`: Bento-карточка с индикатором проверки серверов.
  - `dsh-plugins`: карточки с акцентом на расширяемость.

## 3. План тестирования и верификации
- Запуск локального тестового сервера на 127.0.0.1.
- Проверка Playwright:
  - Реакция графа на drag и hover.
  - Корректность работы Button Groups (EN/RU, фильтры, переключатель Graph/Cards).
  - Смена тем Light/Dark с обновлением палитры Canvas графа.
  - Адаптивность Bento-сетки и стикеров на 320, 390, 600, 840, 1280px.
