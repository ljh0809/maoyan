import {createGlobalStyle} from "styled-components";

export const GlobaStyle = createGlobalStyle `
html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, hr, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, input, button, select, textarea,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      padding: 0;
      margin: 0;
    
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
    
      border: none;
      outline: none;
    
      -webkit-tap-highlight-color: transparent; // 去掉点击对象时默认的灰色半透明覆盖层(iOS)或者虚框(Android)
      -webkit-user-select: none; // 禁止选择文字
    }
    
    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%; // 禁止文字自动调整大小(默认情况下旋转设备的时候文字大小会发生变化)
      //-webkit-overflow-scrolling: touch;
      -webkit-font-smoothing: antialiased; // 字体抗锯齿
      -moz-osx-font-smoothing: grayscale;
    }
    input, select, textarea {
      border: none;
      -webkit-appearance: none; // 清除内阴影
      -webkit-user-select: auto !important; // 否则ios下输入框无法输入
    }
    textarea {
      overflow: auto;
      resize: none;
    }
    h1, h2, h3, h4, h5, h6 {
      font-size: 100%;
      font-weight: normal;
    }
    address, caption, cite, code, dfn, th, var, i, em {
      font-style: normal;
    }
    abbr, acronym { // 去掉firefox下此元素的边框
      border: none;
      font-variant: normal;
    }
    
    ul, ol {
      list-style: none;
    }
    
    del {
      text-decoration: line-through;
    }
    ins, a {
      text-decoration: none;
    }
    a, img {
      -webkit-touch-callout: none; // 禁用长按页面时的弹出菜单(iOS下有效)
    }
    img {
      border: none;
      /*display: block;*/
      vertical-align: top;
    }
    
    table { // 去掉各table cell的边距并让其边重合
      border-spacing: 0;
      border-collapse: collapse;
    }
    
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
    }
    
    //统一上标和下标
    sub, sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }
    html, body, #root {
      height: 100%;
    }
`