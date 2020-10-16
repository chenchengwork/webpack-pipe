const mainLayoutTheme = {
  "headerHeight": 50,                   // 头部菜单高度
  "mainHeaderHeight": 40,               // 主header高度
  "mainContentFooterHeight": 45,        // footer高度
  "mainInterval": 5,                    // 间隔距离
  "headerBgColor": "#243d5d",           // 头部菜单背景颜色
  "headerFontColorActive": "#fff",      // 头部菜单激活状态下字体颜色
  "headerFontColor": "#cbced7",         // 头部菜单未激活状态下字体颜色
}


const theme = {
  "primary-color": "@blue-6",           // 主题色
  "popover-background": "#2F4B6F",      // 弹出
  "body-background": "#425584",         // body背景色
  "component-background": "#2F4B6F",    // 组件背景颜色
  "border-color-base": "#738498",       // 边框基础颜色
  "border-color-split": "#738498",      // 边框分割颜色

  //------------------------------------------------------------
  "popover-customize-border-color": "#3a3a3a",

  // "table-header-bg": "#1d1d1d",
  "table-header-bg": "#243d5d",
  "table-body-sort-bg": "fade(@white, 1%)",
  // "table-row-hover-bg": "#262626",
  "table-row-hover-bg": "#243d5d",
  // "table-header-sort-bg": "#262626",
  "table-header-sort-bg": "#243d5d",
  // "table-header-filter-active-bg": "#434343",
  "table-header-filter-active-bg": "#243d5d",
  // "table-header-sort-active-bg": "#303030",
  "table-header-sort-active-bg": "#243d5d",

  // "card-skeleton-bg": "#303030",
  "card-skeleton-bg": "#243d5d",

  // "layout-trigger-background": "#262626",
  "layout-trigger-background": "#243d5d",

  // "tooltip-bg": "#434343",
  "tooltip-bg": "#2F4B6F",

  "shadow-color": "rgba(0, 0, 0, 0.45)",

  "btn-text-hover-bg": "rgba(255, 255, 255, 0.03)",

  "picker-basic-cell-disabled-bg": "#303030",

  "transfer-item-hover-bg": "#262626",

  "slider-rail-background-color": "#262626",

  // "skeleton-color": "#303030",
  "skeleton-color": "#243d5d",
};


const colorPalette = {
  "blue-1": "mix(color(~`colorPalette('@{blue-base}', 8) `), @component-background, 15%)",
  "blue-2": "mix(color(~`colorPalette('@{blue-base}', 7) `), @component-background, 25%)",
  "blue-3": "mix(@blue-base, @component-background, 30%)",
  "blue-4": "mix(@blue-base, @component-background, 45%)",
  "blue-5": "mix(@blue-base, @component-background, 65%)",
  "blue-6": "mix(@blue-base, @component-background, 85%)",
  "blue-7": "mix(color(~`colorPalette('@{blue-base}', 5) `), @component-background, 90%)",
  "blue-8": "mix(color(~`colorPalette('@{blue-base}', 4) `), @component-background, 95%)",
  "blue-9": "mix(color(~`colorPalette('@{blue-base}', 3) `), @component-background, 97%)",
  "blue-10": "mix(color(~`colorPalette('@{blue-base}', 2) `), @component-background, 98%)",
  "purple-1": "mix(color(~`colorPalette('@{purple-base}', 8) `), @component-background, 15%)",
  "purple-2": "mix(color(~`colorPalette('@{purple-base}', 7) `), @component-background, 25%)",
  "purple-3": "mix(@purple-base, @component-background, 30%)",
  "purple-4": "mix(@purple-base, @component-background, 45%)",
  "purple-5": "mix(@purple-base, @component-background, 65%)",
  "purple-6": "mix(@purple-base, @component-background, 85%)",
  "purple-7": "mix(color(~`colorPalette('@{purple-base}', 5) `), @component-background, 90%)",
  "purple-8": "mix(color(~`colorPalette('@{purple-base}', 4) `), @component-background, 95%)",
  "purple-9": "mix(color(~`colorPalette('@{purple-base}', 3) `), @component-background, 97%)",
  "purple-10": "mix(color(~`colorPalette('@{purple-base}', 2) `), @component-background, 98%)",
  "cyan-1": "mix(color(~`colorPalette('@{cyan-base}', 8) `), @component-background, 15%)",
  "cyan-2": "mix(color(~`colorPalette('@{cyan-base}', 7) `), @component-background, 25%)",
  "cyan-3": "mix(@cyan-base, @component-background, 30%)",
  "cyan-4": "mix(@cyan-base, @component-background, 45%)",
  "cyan-5": "mix(@cyan-base, @component-background, 65%)",
  "cyan-6": "mix(@cyan-base, @component-background, 85%)",
  "cyan-7": "mix(color(~`colorPalette('@{cyan-base}', 5) `), @component-background, 90%)",
  "cyan-8": "mix(color(~`colorPalette('@{cyan-base}', 4) `), @component-background, 95%)",
  "cyan-9": "mix(color(~`colorPalette('@{cyan-base}', 3) `), @component-background, 97%)",
  "cyan-10": "mix(color(~`colorPalette('@{cyan-base}', 2) `), @component-background, 98%)",
  "green-1": "mix(color(~`colorPalette('@{green-base}', 8) `), @component-background, 15%)",
  "green-2": "mix(color(~`colorPalette('@{green-base}', 7) `), @component-background, 25%)",
  "green-3": "mix(@green-base, @component-background, 30%)",
  "green-4": "mix(@green-base, @component-background, 45%)",
  "green-5": "mix(@green-base, @component-background, 65%)",
  "green-6": "mix(@green-base, @component-background, 85%)",
  "green-7": "mix(color(~`colorPalette('@{green-base}', 5) `), @component-background, 90%)",
  "green-8": "mix(color(~`colorPalette('@{green-base}', 4) `), @component-background, 95%)",
  "green-9": "mix(color(~`colorPalette('@{green-base}', 3) `), @component-background, 97%)",
  "green-10": "mix(color(~`colorPalette('@{green-base}', 2) `), @component-background, 98%)",
  "magenta-1": "mix(color(~`colorPalette('@{magenta-base}', 8) `), @component-background, 15%)",
  "magenta-2": "mix(color(~`colorPalette('@{magenta-base}', 7) `), @component-background, 25%)",
  "magenta-3": "mix(@magenta-base, @component-background, 30%)",
  "magenta-4": "mix(@magenta-base, @component-background, 45%)",
  "magenta-5": "mix(@magenta-base, @component-background, 65%)",
  "magenta-6": "mix(@magenta-base, @component-background, 85%)",
  "magenta-7": "mix(color(~`colorPalette('@{magenta-base}', 5) `), @component-background, 90%)",
  "magenta-8": "mix(color(~`colorPalette('@{magenta-base}', 4) `), @component-background, 95%)",
  "magenta-9": "mix(color(~`colorPalette('@{magenta-base}', 3) `), @component-background, 97%)",
  "magenta-10": "mix(color(~`colorPalette('@{magenta-base}', 2) `), @component-background, 98%)",
  "pink-1": "mix(color(~`colorPalette('@{pink-base}', 8) `), @component-background, 15%)",
  "pink-2": "mix(color(~`colorPalette('@{pink-base}', 7) `), @component-background, 25%)",
  "pink-3": "mix(@pink-base, @component-background, 30%)",
  "pink-4": "mix(@pink-base, @component-background, 45%)",
  "pink-5": "mix(@pink-base, @component-background, 65%)",
  "pink-6": "mix(@pink-base, @component-background, 85%)",
  "pink-7": "mix(color(~`colorPalette('@{pink-base}', 5) `), @component-background, 90%)",
  "pink-8": "mix(color(~`colorPalette('@{pink-base}', 4) `), @component-background, 95%)",
  "pink-9": "mix(color(~`colorPalette('@{pink-base}', 3) `), @component-background, 97%)",
  "pink-10": "mix(color(~`colorPalette('@{pink-base}', 2) `), @component-background, 98%)",
  "red-1": "mix(color(~`colorPalette('@{red-base}', 8) `), @component-background, 15%)",
  "red-2": "mix(color(~`colorPalette('@{red-base}', 7) `), @component-background, 25%)",
  "red-3": "mix(@red-base, @component-background, 30%)",
  "red-4": "mix(@red-base, @component-background, 45%)",
  "red-5": "mix(@red-base, @component-background, 65%)",
  "red-6": "mix(@red-base, @component-background, 85%)",
  "red-7": "mix(color(~`colorPalette('@{red-base}', 5) `), @component-background, 90%)",
  "red-8": "mix(color(~`colorPalette('@{red-base}', 4) `), @component-background, 95%)",
  "red-9": "mix(color(~`colorPalette('@{red-base}', 3) `), @component-background, 97%)",
  "red-10": "mix(color(~`colorPalette('@{red-base}', 2) `), @component-background, 98%)",
  "orange-1": "mix(color(~`colorPalette('@{orange-base}', 8) `), @component-background, 15%)",
  "orange-2": "mix(color(~`colorPalette('@{orange-base}', 7) `), @component-background, 25%)",
  "orange-3": "mix(@orange-base, @component-background, 30%)",
  "orange-4": "mix(@orange-base, @component-background, 45%)",
  "orange-5": "mix(@orange-base, @component-background, 65%)",
  "orange-6": "mix(@orange-base, @component-background, 85%)",
  "orange-7": "mix(color(~`colorPalette('@{orange-base}', 5) `), @component-background, 90%)",
  "orange-8": "mix(color(~`colorPalette('@{orange-base}', 4) `), @component-background, 95%)",
  "orange-9": "mix(color(~`colorPalette('@{orange-base}', 3) `), @component-background, 97%)",
  "orange-10": "mix(color(~`colorPalette('@{orange-base}', 2) `), @component-background, 98%)",
  "yellow-1": "mix(color(~`colorPalette('@{yellow-base}', 8) `), @component-background, 15%)",
  "yellow-2": "mix(color(~`colorPalette('@{yellow-base}', 7) `), @component-background, 25%)",
  "yellow-3": "mix(@yellow-base, @component-background, 30%)",
  "yellow-4": "mix(@yellow-base, @component-background, 45%)",
  "yellow-5": "mix(@yellow-base, @component-background, 65%)",
  "yellow-6": "mix(@yellow-base, @component-background, 85%)",
  "yellow-7": "mix(color(~`colorPalette('@{yellow-base}', 5) `), @component-background, 90%)",
  "yellow-8": "mix(color(~`colorPalette('@{yellow-base}', 4) `), @component-background, 95%)",
  "yellow-9": "mix(color(~`colorPalette('@{yellow-base}', 3) `), @component-background, 97%)",
  "yellow-10": "mix(color(~`colorPalette('@{yellow-base}', 2) `), @component-background, 98%)",
  "volcano-1": "mix(color(~`colorPalette('@{volcano-base}', 8) `), @component-background, 15%)",
  "volcano-2": "mix(color(~`colorPalette('@{volcano-base}', 7) `), @component-background, 25%)",
  "volcano-3": "mix(@volcano-base, @component-background, 30%)",
  "volcano-4": "mix(@volcano-base, @component-background, 45%)",
  "volcano-5": "mix(@volcano-base, @component-background, 65%)",
  "volcano-6": "mix(@volcano-base, @component-background, 85%)",
  "volcano-7": "mix(color(~`colorPalette('@{volcano-base}', 5) `), @component-background, 90%)",
  "volcano-8": "mix(color(~`colorPalette('@{volcano-base}', 4) `), @component-background, 95%)",
  "volcano-9": "mix(color(~`colorPalette('@{volcano-base}', 3) `), @component-background, 97%)",
  "volcano-10": "mix(color(~`colorPalette('@{volcano-base}', 2) `), @component-background, 98%)",
  "geekblue-1": "mix(color(~`colorPalette('@{geekblue-base}', 8) `), @component-background, 15%)",
  "geekblue-2": "mix(color(~`colorPalette('@{geekblue-base}', 7) `), @component-background, 25%)",
  "geekblue-3": "mix(@geekblue-base, @component-background, 30%)",
  "geekblue-4": "mix(@geekblue-base, @component-background, 45%)",
  "geekblue-5": "mix(@geekblue-base, @component-background, 65%)",
  "geekblue-6": "mix(@geekblue-base, @component-background, 85%)",
  "geekblue-7": "mix(color(~`colorPalette('@{geekblue-base}', 5) `), @component-background, 90%)",
  "geekblue-8": "mix(color(~`colorPalette('@{geekblue-base}', 4) `), @component-background, 95%)",
  "geekblue-9": "mix(color(~`colorPalette('@{geekblue-base}', 3) `), @component-background, 97%)",
  "geekblue-10": "mix(color(~`colorPalette('@{geekblue-base}', 2) `), @component-background, 98%)",
  "lime-1": "mix(color(~`colorPalette('@{lime-base}', 8) `), @component-background, 15%)",
  "lime-2": "mix(color(~`colorPalette('@{lime-base}', 7) `), @component-background, 25%)",
  "lime-3": "mix(@lime-base, @component-background, 30%)",
  "lime-4": "mix(@lime-base, @component-background, 45%)",
  "lime-5": "mix(@lime-base, @component-background, 65%)",
  "lime-6": "mix(@lime-base, @component-background, 85%)",
  "lime-7": "mix(color(~`colorPalette('@{lime-base}', 5) `), @component-background, 90%)",
  "lime-8": "mix(color(~`colorPalette('@{lime-base}', 4) `), @component-background, 95%)",
  "lime-9": "mix(color(~`colorPalette('@{lime-base}', 3) `), @component-background, 97%)",
  "lime-10": "mix(color(~`colorPalette('@{lime-base}', 2) `), @component-background, 98%)",
  "gold-1": "mix(color(~`colorPalette('@{gold-base}', 8) `), @component-background, 15%)",
  "gold-2": "mix(color(~`colorPalette('@{gold-base}', 7) `), @component-background, 25%)",
  "gold-3": "mix(@gold-base, @component-background, 30%)",
  "gold-4": "mix(@gold-base, @component-background, 45%)",
  "gold-5": "mix(@gold-base, @component-background, 65%)",
  "gold-6": "mix(@gold-base, @component-background, 85%)",
  "gold-7": "mix(color(~`colorPalette('@{gold-base}', 5) `), @component-background, 90%)",
  "gold-8": "mix(color(~`colorPalette('@{gold-base}', 4) `), @component-background, 95%)",
  "gold-9": "mix(color(~`colorPalette('@{gold-base}', 3) `), @component-background, 97%)",
  "gold-10": "mix(color(~`colorPalette('@{gold-base}', 2) `), @component-background, 98%)",
  "primary-1": "mix(color(~`colorPalette('@{primary-color}', 8) `), @component-background, 15%)",
  "primary-2": "mix(color(~`colorPalette('@{primary-color}', 7) `), @component-background, 25%)",
  "primary-3": "mix(@primary-color, @component-background, 30%)",
  "primary-4": "mix(@primary-color, @component-background, 45%)",
  "primary-5": "mix(@primary-color, @component-background, 65%)",
  "primary-6": "@primary-color",
  "primary-7": "mix(color(~`colorPalette('@{primary-color}', 5) `), @component-background, 90%)",
  "primary-8": "mix(color(~`colorPalette('@{primary-color}', 4) `), @component-background, 95%)",
  "primary-9": "mix(color(~`colorPalette('@{primary-color}', 3) `), @component-background, 97%)",
  "primary-10": "mix(color(~`colorPalette('@{primary-color}', 2) `), @component-background, 98%)",
}


module.exports = {
  "theme": "dark",
  mainLayoutTheme,
  ...colorPalette,
  ...theme,
  "text-color": "fade(@white, 65%)",
  "text-color-secondary": "fade(@white, 45%)",
  "text-color-inverse": "@white",
  "icon-color-hover": "fade(@white, 75%)",
  "heading-color": "fade(@white, 85%)",
  "item-active-bg": "@primary-1",
  "item-hover-bg": "fade(@white, 8%)",

  "background-color-light": "fade(@white, 4%)",
  "background-color-base": "fade(@white, 8%)",
  "disabled-color": "fade(@white, 30%)",
  "disabled-bg": "@background-color-base",
  "disabled-color-dark": "fade(@white, 30%)",
  "tree-bg": "transparent",
  "list-customize-card-bg": "transparent",

  "shadow-color-inverse": "@component-background",
  "box-shadow-base": "@shadow-2",
  "shadow-1-up": "0 -6px 16px -8px rgba(0, 0, 0, 0.32), 0 -9px 28px 0 rgba(0, 0, 0, 0.2),\n  0 -12px 48px 16px rgba(0, 0, 0, 0.12)",
  "shadow-1-down": "0 6px 16px -8px rgba(0, 0, 0, 0.32), 0 9px 28px 0 rgba(0, 0, 0, 0.2),\n  0 12px 48px 16px rgba(0, 0, 0, 0.12)",
  "shadow-1-right": "6px 0 16px -8px rgba(0, 0, 0, 0.32), 9px 0 28px 0 rgba(0, 0, 0, 0.2),\n  12px 0 48px 16px rgba(0, 0, 0, 0.12)",
  "shadow-2": "0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32),\n  0 9px 28px 8px rgba(0, 0, 0, 0.2)",
  "btn-shadow": "0 2px 0 rgba(0, 0, 0, 0.015)",
  "btn-primary-shadow": "0 2px 0 rgba(0, 0, 0, 0.045)",
  "btn-text-shadow": "0 -1px 0 rgba(0, 0, 0, 0.12)",
  "btn-default-bg": "transparent",
  "btn-default-ghost-color": "@text-color",
  "btn-default-ghost-border": "fade(@white, 25%)",
  "btn-link-ghost-color": "@text-color",

  "checkbox-check-bg": "transparent",
  "descriptions-bg": "@background-color-light",
  "modal-header-bg": "@popover-background",
  "modal-header-border-color-split": "@border-color-split",
  "modal-content-bg": "@popover-background",
  "modal-footer-border-color-split": "@border-color-split",
  "radio-solid-checked-color": "@white",
  "radio-dot-disabled-color": "fade(@white, 20%)",
  "radio-disabled-button-checked-bg": "fade(@white, 20%)",
  "radio-disabled-button-checked-color": "@black",
  "layout-body-background": "@body-background",
  "layout-header-background": "@popover-background",

  "input-bg": "transparent",
  "input-placeholder-color": "fade(@white, 30%)",
  "input-icon-color": "fade(@white, 30%)",
  "input-number-handler-bg": "transparent",
  "input-number-handler-active-bg": "@item-hover-bg",
  "input-icon-hover-color": "fade(@white, 85%)",
  "select-background": "transparent",
  "select-dropdown-bg": "@popover-background",
  "select-clear-background": "@component-background",
  "select-selection-item-bg": "fade(@white, 8)",
  "select-selection-item-border-color": "@border-color-split",
  "cascader-bg": "transparent",
  "cascader-menu-bg": "@popover-background",
  "cascader-menu-border-color-split": "@border-color-split",

  "menu-dark-submenu-bg": "@component-background",
  "menu-dark-bg": "@popover-background",
  "menu-popup-bg": "@popover-background",
  "message-notice-content-bg": "@popover-background",
  "notification-bg": "@popover-background",
  "link-hover-color": "@primary-5",
  "link-active-color": "@primary-7",

  "table-filter-btns-bg": "@popover-background",
  "table-expanded-row-bg": "@table-header-bg",
  "table-filter-dropdown-bg": "@popover-background",
  "table-expand-icon-bg": "transparent",
  "picker-basic-cell-hover-with-range-color": "darken(@primary-color, 35%)",

  "picker-border-color": "@border-color-split",
  "picker-bg": "transparent",
  "picker-date-hover-range-border-color": "darken(@primary-color, 20%)",
  "dropdown-menu-bg": "@popover-background",
  "dropdown-menu-submenu-disabled-bg": "transparent",
  "steps-nav-arrow-color": "fade(@white, 20%)",
  "steps-background": "transparent",
  "avatar-bg": "fade(@white, 30%)",
  "progress-steps-item-bg": "fade(@white, 8%)",
  "calendar-bg": "@popover-background",
  "calendar-input-bg": "@calendar-bg",
  "calendar-border-color": "transparent",
  "calendar-full-bg": "@component-background",
  "badge-text-color": "@white",
  "popover-bg": "@popover-background",
  "drawer-bg": "@popover-background",
  "card-actions-background": "@background-color-light",

  "card-shadow": "0 1px 2px -2px rgba(0, 0, 0, 0.64), 0 3px 6px 0 rgba(0, 0, 0, 0.48),\n  0 5px 12px 4px rgba(0, 0, 0, 0.36)",

  "comment-bg": "transparent",
  "comment-author-time-color": "fade(@white, 30%)",
  "comment-action-hover-color": "fade(@white, 65%)",
  "rate-star-bg": "fade(@white, 12%)",
  "switch-bg": "@white",
  "pagination-item-bg": "transparent",
  "pagination-item-bg-active": "transparent",
  "pagination-item-link-bg": "transparent",
  "pagination-item-disabled-bg-active": "fade(@white, 25%)",
  "pagination-item-disabled-color-active": "@black",
  "pagination-item-input-bg": "@pagination-item-bg",
  "page-header-back-color": "@icon-color",
  "page-header-ghost-bg": "transparent",

  "slider-rail-background-color-hover": "@border-color-base",
  "slider-dot-border-color": "@border-color-split",
  "slider-dot-border-color-active": "@primary-4",

  "skeleton-to-color": "fade(@white, 16%)",
  "alert-success-border-color": "@green-3",
  "alert-success-bg-color": "@green-1",
  "alert-success-icon-color": "@success-color",
  "alert-info-border-color": "@primary-3",
  "alert-info-bg-color": "@primary-1",
  "alert-info-icon-color": "@info-color",
  "alert-warning-border-color": "@gold-3",
  "alert-warning-bg-color": "@gold-1",
  "alert-warning-icon-color": "@warning-color",
  "alert-error-border-color": "@red-3",
  "alert-error-bg-color": "@red-1",
  "alert-error-icon-color": "@error-color",
  "timeline-color": "@border-color-split",
  "timeline-dot-color": "@primary-color",
  "mentions-dropdown-bg": "@popover-background"
};
