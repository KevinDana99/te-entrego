import styled, { css } from "styled-components";

const GlobalStyles = css`
  :root {
    --main-bg-color-blue: #7dd1ff;
    --main-bg-color-sky-blue: #59b6e7;
    --main-color-dark-blue: #003473;
    --main-color-gray-blue: #2c406c;
    --main-color-green: #53f5d6;
    --main-color-gray-white: #f5f5f5;
  }

  h2.page-title,
  h4.page-title {
    color: var(--main-color-gray-blue);
    font-size: 2.5rem;
    font-weight: bold;
  }

  h3.page-title {
    color: var(--main-color-gray-blue);
    font-size: 2rem;
    font-weight: bold;
  }

  .card {
    border: 1px solid var(--main-bg-color-blue);
  }
  .card-dashboard {
    border: none;
  }

  .card-dashboard-blue {
    background-color: var(--main-bg-color-blue);
  }

  .card-header-dashboard {
    background-color: var(--main-color-green) !important;
  }

  .all-labels label {
    color: var(--main-color-gray-blue);
    font-weight: normal;
  }
  li > div > div > a.active {
    background: white !important;
    border-radius: 4rem !important;
    padding-bottom: -13px !important;
    padding-top: -13px !important;
  }

  ul.menu.float-left > li:last-child {
    margin-left: 10rem;
  }

  @media (min-width: 1440px) {
    ul.menu.float-left > li:last-child {
      margin-left: 22rem;
    }
  }

  @media (min-width: 1650px) {
    ul.menu.float-left > li:last-child {
      margin-left: 34rem;
    }
  }

  @media (min-width: 1920px) {
    ul.menu.float-left > li:last-child {
      margin-left: 52rem;
    }
  }

  input.form-control {
    border: 2px solid var(--main-bg-color-blue);
  }

  select.form-control {
    border: 2px solid var(--main-bg-color-blue);
  }

  h2.title-h {
    font-weight: bold;
    color: var(--main-bg-color-sky-blue);
  }
  .card-body.resultados {
    border-radius: 15px;
    background: var(--main-color-gray-white);
  }
  li.fgray {
    background: var(--main-color-gray-white);
    color: var(--main-color-gray-blue);
  }
  li.font-weight-bold {
    color: var(--main-bg-color-sky-blue);
  }
  .btn-secondary {
    background-color: var(--main-bg-color-blue) !important;
    border: var(--main-bg-color-blue);
    color: #fff !important;
    box-shadow: 5px 5px 15px #d8d8d8;
    font-weight: 900;
  }
  .btn-secondary-menu {
    background-color: var(--main-bg-color-blue) !important;
    border: var(--main-bg-color-blue);
    color: #fff !important;
    font-weight: bold;
  }
  .notes {
    background-color: var(--main-color-gray-white);
    color: #000;
    width: auto;
    padding: 2rem;
    border-radius: 2rem;
  }

  .notes img {
    width: 1.5rem;
  }

  .img-guia {
    width: 2rem;
  }
  .envi-title {
    color: var(--main-bg-color-blue) !important;
  }

  /* -------------------- clases registro --------------------- */

  /* .main-content-wrap{
    margin-top: 0px !important;
} */
  /* .layout-horizontal-bar .main-content-wrap{
    margin-top: 0px !important;
} */
  .right_register img {
    width: 18.5rem;
    margin: 5rem 0;
  }

  .right_register h1 {
    color: var(--main-color-gray-blue);
  }

  .right_register p {
    margin: 2rem 0;
    padding-inline: 2rem;
    font-size: 16px;
  }
  .right_register h5 {
    color: #ffffff !important;
    margin-top: 3rem;
  }
  .right_register button {
    margin-top: 6rem;
    color: var(--main-bg-color-sky-blue);
  }

  .btn-link:hover {
    color: var(--main-bg-color-sky-blue);
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
  }
  .left_register {
    background-color: var(--main-bg-color-sky-blue);
  }
  .left_register .card {
    width: 80%;
    margin: 5rem 11%;
    box-shadow: none;
    border-radius: 2rem;
  }
  .left_register .card-body {
    padding: 1.9rem;
  }
  .ilustracion {
    bottom: 4rem;
  }
  .ilustracion img {
    width: 11rem;
  }
  .left_register .checkmark {
    border-radius: 2rem;
    width: 2rem;
    height: 2rem;
    top: -0.5rem;
  }
  .checkbox-primary input:checked ~ .checkmark {
    background-color: var(--main-bg-color-sky-blue) !important;
  }
  .checkbox .ml-3 {
    color: var(--main-color-gray-blue);
  }
  .box-uno {
    position: relative;
    left: -6rem;
    top: 3rem;
  }

  .box-dos {
    position: relative;
    right: -2rem;
  }

  .box-dos img {
    width: 5rem !important;
  }
  @media (max-width: 440px) {
    .box-uno {
      left: -10rem;
    }
    .box-dos {
      margin-left: 11rem;
      top: 1rem;
    }
    .box-dos img {
      width: 6rem !important;
    }
  }

  /* -------------------- clases login --------------------- */
  .bg-login {
    background-color: var(--main-bg-color-sky-blue);
  }
  .bg {
    background-color: var(--main-bg-color-sky-blue) !important;
  }
  .bg-login img {
    width: 14rem;
  }
  .bg-login .btn-link {
    color: var(--main-bg-color-sky-blue);
  }
  .bg-login span {
    color: var(--main-bg-color-sky-blue);
  }
  .bg img {
    width: 12.5rem;
    margin: 2rem 0 2rem 0;
  }
  .bg h2,
  h5 {
    color: #fff !important;
  }
  .bg .card {
    width: 84%;
    margin: 3.1rem 9%;
    box-shadow: none;
    border-radius: 2rem;
  }

  /* -------------------- clases recuperar contraseña --------------------- */

  .img_recuperar {
    width: 6rem !important;
  }
  .exito {
    color: var(--main-bg-color-sky-blue);
  }

  /* -------------------- clases perfil --------------------- */

  .c-perfil {
    color: var(--main-bg-color-sky-blue);
  }

  input.form-control:focus {
    outline: none !important;
    background-color: #e5f5ff;
  }
  .perfil .card-body {
    padding: 3rem 8.25rem;
  }

  .form-control:focus {
    color: var(--main-bg-color-sky-blue);
    background-color: #fff;
    border-color: var(--main-bg-color-blue);
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(175, 216, 255, 0.712);
  }

  .badge {
    padding: 0.4rem !important;
  }

  .page-item.disabled .page-link,
  .page-item:last-child .page-link {
    border-color: white;
  }

  .layout-horizontal-bar .header-topnav .topnav {
    background-color: var(--main-bg-color-blue);
  }

  /* -------------------- clases dashboard --------------------- */
  .bg-green {
    background-color: var(--main-color-green);
  }

  .bg-green h3 {
    color: var(--main-color-gray-blue) !important;
  }

  p.title-card {
    color: var(--main-color-dark-blue);
    font-size: 1.5rem;
    font-weight: bold;
  }
  p.header-part-right-value {
    color: var(--main-color-dark-blue);
    font-weight: bold;
    margin-bottom: 0rem;
    margin-left: 3rem;
  }
  p.text-primary__card,
  p.header-part-right-value > span {
    color: var(--main-bg-color-blue);
    font-weight: bold;
  }
  .card-header-dashboard h3 {
    color: var(--main-color-gray-blue);
  }
  .card-dashboard-blue .content {
    max-width: none !important;
  }
  .box-uno-img {
    width: 4rem !important;
  }

  .layout-horizontal-bar .header-topnav .topnav a,
  .layout-horizontal-bar .header-topnav .topnav label {
    height: 35px !important;
    margin-top: 7px;
  }

  .btn-gray-100,
  .btn-outline-gray-100 {
    color: var(--main-bg-color-blue);
    font-weight: bold;
  }

  .card-icon-bg .card-body .content {
    margin-left: 2rem !important;
  }

  /*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
  :root {
    --blue: #003473;
    --indigo: #3f51b5;
    --purple: #663399;
    --pink: #cb3066;
    --red: #f44336;
    --orange: #e97d23;
    --yellow: #ffc107;
    --green: #4caf50;
    --teal: #20c997;
    --cyan: #9c27b0;
    --white: #fff;
    --gray: #70657b;
    --gray-dark: #52495a;
    --purple: #663399;
    --pink: #cb3066;
    --red: #f44336;
    --orange: #e97d23;
    --yellow: #ffc107;
    --green: #4caf50;
    --teal: #20c997;
    --cyan: #9c27b0;
    --white: #fff;
    --gray: #70657b;
    --primary: #663399;
    --secondary: #52495a;
    --success: #4caf50;
    --info: #003473;
    --warning: #ffc107;
    --danger: #f44336;
    --light: #bbb;
    --dark: #47404f;
    --gray-100: #f8f9fa;
    --gray-200: #eee;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #bbb;
    --gray-600: #70657b;
    --gray-700: #665c70;
    --gray-800: #52495a;
    --gray-900: #47404f;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @-ms-viewport {
    width: device-width;
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  body {
    margin: 0;
    font-family: "Nunito", sans-serif;
    font-size: 0.813rem;
    font-weight: 400;
    line-height: 1.5;
    color: #47404f;
    text-align: left;
    background-color: #fff;
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  dfn {
    font-style: italic;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    color: #663399;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:hover {
    color: #402060;
    text-decoration: underline;
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }
  a:not([href]):not([tabindex]):hover,
  a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
  }
  a:not([href]):not([tabindex]):focus {
    outline: 0;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 1em;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #70657b;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
  }

  h1,
  .h1 {
    font-size: 2.0325rem;
  }

  h2,
  .h2 {
    font-size: 1.626rem;
  }

  h3,
  .h3 {
    font-size: 1.42275rem;
  }

  h4,
  .h4 {
    font-size: 1.2195rem;
  }

  h5,
  .h5 {
    font-size: 1.01625rem;
  }

  h6,
  .h6 {
    font-size: 0.813rem;
  }

  .lead {
    font-size: 1.01625rem;
    font-weight: 300;
  }

  .display-1 {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-2 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-3 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-4 {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  small,
  .small {
    font-size: 80%;
    font-weight: 400;
  }

  mark,
  .mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .list-inline {
    padding-left: 0;
    list-style: none;
  }

  .list-inline-item {
    display: inline-block;
  }
  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
  }

  .initialism {
    font-size: 90%;
    text-transform: uppercase;
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.01625rem;
  }

  .blockquote-footer {
    display: block;
    font-size: 80%;
    color: #70657b;
  }
  .blockquote-footer::before {
    content: "\2014 \00A0";
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }

  .figure {
    display: inline-block;
  }

  .figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .figure-caption {
    font-size: 90%;
    color: #70657b;
  }

  code {
    font-size: 87.5%;
    color: #cb3066;
    word-break: break-word;
  }
  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 87.5%;
    color: #fff;
    background-color: #47404f;
    border-radius: 0.2rem;
  }
  kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700;
  }

  pre {
    display: block;
    font-size: 87.5%;
    color: #47404f;
  }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  .pre-scrollable {
    max-height: 340px;
    overflow-y: scroll;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
  .no-gutters > .col,
  .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col,
  .col-auto,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm,
  .col-sm-auto,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md,
  .col-md-auto,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg,
  .col-lg-auto,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl,
  .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  .col-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }

  .col-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }

  .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .col-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }

  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }

  .col-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }

  .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }

  .col-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-first {
    order: -1;
  }

  .order-last {
    order: 13;
  }

  .order-0 {
    order: 0;
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .order-5 {
    order: 5;
  }

  .order-6 {
    order: 6;
  }

  .order-7 {
    order: 7;
  }

  .order-8 {
    order: 8;
  }

  .order-9 {
    order: 9;
  }

  .order-10 {
    order: 10;
  }

  .order-11 {
    order: 11;
  }

  .order-12 {
    order: 12;
  }

  .offset-1 {
    margin-left: 8.33333%;
  }

  .offset-2 {
    margin-left: 16.66667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.33333%;
  }

  .offset-5 {
    margin-left: 41.66667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.33333%;
  }

  .offset-8 {
    margin-left: 66.66667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.33333%;
  }

  .offset-11 {
    margin-left: 91.66667%;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-sm-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-sm-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-sm-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-sm-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-sm-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-sm-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-sm-first {
      order: -1;
    }
    .order-sm-last {
      order: 13;
    }
    .order-sm-0 {
      order: 0;
    }
    .order-sm-1 {
      order: 1;
    }
    .order-sm-2 {
      order: 2;
    }
    .order-sm-3 {
      order: 3;
    }
    .order-sm-4 {
      order: 4;
    }
    .order-sm-5 {
      order: 5;
    }
    .order-sm-6 {
      order: 6;
    }
    .order-sm-7 {
      order: 7;
    }
    .order-sm-8 {
      order: 8;
    }
    .order-sm-9 {
      order: 9;
    }
    .order-sm-10 {
      order: 10;
    }
    .order-sm-11 {
      order: 11;
    }
    .order-sm-12 {
      order: 12;
    }
    .offset-sm-0 {
      margin-left: 0;
    }
    .offset-sm-1 {
      margin-left: 8.33333%;
    }
    .offset-sm-2 {
      margin-left: 16.66667%;
    }
    .offset-sm-3 {
      margin-left: 25%;
    }
    .offset-sm-4 {
      margin-left: 33.33333%;
    }
    .offset-sm-5 {
      margin-left: 41.66667%;
    }
    .offset-sm-6 {
      margin-left: 50%;
    }
    .offset-sm-7 {
      margin-left: 58.33333%;
    }
    .offset-sm-8 {
      margin-left: 66.66667%;
    }
    .offset-sm-9 {
      margin-left: 75%;
    }
    .offset-sm-10 {
      margin-left: 83.33333%;
    }
    .offset-sm-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-md-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-md-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-md-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-md-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-md-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-md-first {
      order: -1;
    }
    .order-md-last {
      order: 13;
    }
    .order-md-0 {
      order: 0;
    }
    .order-md-1 {
      order: 1;
    }
    .order-md-2 {
      order: 2;
    }
    .order-md-3 {
      order: 3;
    }
    .order-md-4 {
      order: 4;
    }
    .order-md-5 {
      order: 5;
    }
    .order-md-6 {
      order: 6;
    }
    .order-md-7 {
      order: 7;
    }
    .order-md-8 {
      order: 8;
    }
    .order-md-9 {
      order: 9;
    }
    .order-md-10 {
      order: 10;
    }
    .order-md-11 {
      order: 11;
    }
    .order-md-12 {
      order: 12;
    }
    .offset-md-0 {
      margin-left: 0;
    }
    .offset-md-1 {
      margin-left: 8.33333%;
    }
    .offset-md-2 {
      margin-left: 16.66667%;
    }
    .offset-md-3 {
      margin-left: 25%;
    }
    .offset-md-4 {
      margin-left: 33.33333%;
    }
    .offset-md-5 {
      margin-left: 41.66667%;
    }
    .offset-md-6 {
      margin-left: 50%;
    }
    .offset-md-7 {
      margin-left: 58.33333%;
    }
    .offset-md-8 {
      margin-left: 66.66667%;
    }
    .offset-md-9 {
      margin-left: 75%;
    }
    .offset-md-10 {
      margin-left: 83.33333%;
    }
    .offset-md-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-lg-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-lg-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-lg-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-lg-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-lg-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-lg-first {
      order: -1;
    }
    .order-lg-last {
      order: 13;
    }
    .order-lg-0 {
      order: 0;
    }
    .order-lg-1 {
      order: 1;
    }
    .order-lg-2 {
      order: 2;
    }
    .order-lg-3 {
      order: 3;
    }
    .order-lg-4 {
      order: 4;
    }
    .order-lg-5 {
      order: 5;
    }
    .order-lg-6 {
      order: 6;
    }
    .order-lg-7 {
      order: 7;
    }
    .order-lg-8 {
      order: 8;
    }
    .order-lg-9 {
      order: 9;
    }
    .order-lg-10 {
      order: 10;
    }
    .order-lg-11 {
      order: 11;
    }
    .order-lg-12 {
      order: 12;
    }
    .offset-lg-0 {
      margin-left: 0;
    }
    .offset-lg-1 {
      margin-left: 8.33333%;
    }
    .offset-lg-2 {
      margin-left: 16.66667%;
    }
    .offset-lg-3 {
      margin-left: 25%;
    }
    .offset-lg-4 {
      margin-left: 33.33333%;
    }
    .offset-lg-5 {
      margin-left: 41.66667%;
    }
    .offset-lg-6 {
      margin-left: 50%;
    }
    .offset-lg-7 {
      margin-left: 58.33333%;
    }
    .offset-lg-8 {
      margin-left: 66.66667%;
    }
    .offset-lg-9 {
      margin-left: 75%;
    }
    .offset-lg-10 {
      margin-left: 83.33333%;
    }
    .offset-lg-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-xl-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-xl-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-xl-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-xl-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-xl-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-xl-first {
      order: -1;
    }
    .order-xl-last {
      order: 13;
    }
    .order-xl-0 {
      order: 0;
    }
    .order-xl-1 {
      order: 1;
    }
    .order-xl-2 {
      order: 2;
    }
    .order-xl-3 {
      order: 3;
    }
    .order-xl-4 {
      order: 4;
    }
    .order-xl-5 {
      order: 5;
    }
    .order-xl-6 {
      order: 6;
    }
    .order-xl-7 {
      order: 7;
    }
    .order-xl-8 {
      order: 8;
    }
    .order-xl-9 {
      order: 9;
    }
    .order-xl-10 {
      order: 10;
    }
    .order-xl-11 {
      order: 11;
    }
    .order-xl-12 {
      order: 12;
    }
    .offset-xl-0 {
      margin-left: 0;
    }
    .offset-xl-1 {
      margin-left: 8.33333%;
    }
    .offset-xl-2 {
      margin-left: 16.66667%;
    }
    .offset-xl-3 {
      margin-left: 25%;
    }
    .offset-xl-4 {
      margin-left: 33.33333%;
    }
    .offset-xl-5 {
      margin-left: 41.66667%;
    }
    .offset-xl-6 {
      margin-left: 50%;
    }
    .offset-xl-7 {
      margin-left: 58.33333%;
    }
    .offset-xl-8 {
      margin-left: 66.66667%;
    }
    .offset-xl-9 {
      margin-left: 75%;
    }
    .offset-xl-10 {
      margin-left: 83.33333%;
    }
    .offset-xl-11 {
      margin-left: 91.66667%;
    }
  }

  .table {
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }
  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }
  .table tbody + tbody {
    border-top: 2px solid #dee2e6;
  }
  .table .table {
    background-color: #fff;
  }

  .table-sm th,
  .table-sm td {
    padding: 0.3rem;
  }

  .table-bordered {
    border: 1px solid #dee2e6;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6;
  }
  .table-bordered thead th,
  .table-bordered thead td {
    border-bottom-width: 2px;
  }

  .table-borderless th,
  .table-borderless td,
  .table-borderless thead th,
  .table-borderless tbody + tbody {
    border: 0;
  }

  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }

  .table-primary,
  .table-primary > th,
  .table-primary > td {
    background-color: #d4c6e2;
  }

  .table-hover .table-primary:hover {
    background-color: #c7b5d9;
  }
  .table-hover .table-primary:hover > td,
  .table-hover .table-primary:hover > th {
    background-color: #c7b5d9;
  }

  .table-secondary,
  .table-secondary > th,
  .table-secondary > td {
    background-color: #ceccd1;
  }

  .table-hover .table-secondary:hover {
    background-color: #c1bfc5;
  }
  .table-hover .table-secondary:hover > td,
  .table-hover .table-secondary:hover > th {
    background-color: #c1bfc5;
  }

  .table-success,
  .table-success > th,
  .table-success > td {
    background-color: #cde9ce;
  }

  .table-hover .table-success:hover {
    background-color: #bbe1bd;
  }
  .table-hover .table-success:hover > td,
  .table-hover .table-success:hover > th {
    background-color: #bbe1bd;
  }

  .table-info,
  .table-info > th,
  .table-info > td {
    background-color: #b8c6d8;
  }

  .table-hover .table-info:hover {
    background-color: #a8b9cf;
  }
  .table-hover .table-info:hover > td,
  .table-hover .table-info:hover > th {
    background-color: #a8b9cf;
  }

  .table-warning,
  .table-warning > th,
  .table-warning > td {
    background-color: #ffeeba;
  }

  .table-hover .table-warning:hover {
    background-color: #ffe8a1;
  }
  .table-hover .table-warning:hover > td,
  .table-hover .table-warning:hover > th {
    background-color: #ffe8a1;
  }

  .table-danger,
  .table-danger > th,
  .table-danger > td {
    background-color: #fccac7;
  }

  .table-hover .table-danger:hover {
    background-color: #fbb3af;
  }
  .table-hover .table-danger:hover > td,
  .table-hover .table-danger:hover > th {
    background-color: #fbb3af;
  }

  .table-light,
  .table-light > th,
  .table-light > td {
    background-color: #ececec;
  }

  .table-hover .table-light:hover {
    background-color: #dfdfdf;
  }
  .table-hover .table-light:hover > td,
  .table-hover .table-light:hover > th {
    background-color: #dfdfdf;
  }

  .table-dark,
  .table-dark > th,
  .table-dark > td {
    background-color: #cccace;
  }

  .table-hover .table-dark:hover {
    background-color: #bfbdc2;
  }
  .table-hover .table-dark:hover > td,
  .table-hover .table-dark:hover > th {
    background-color: #bfbdc2;
  }

  .table-gray-100,
  .table-gray-100 > th,
  .table-gray-100 > td {
    background-color: #fdfdfe;
  }

  .table-hover .table-gray-100:hover {
    background-color: #ececf6;
  }
  .table-hover .table-gray-100:hover > td,
  .table-hover .table-gray-100:hover > th {
    background-color: #ececf6;
  }

  .table-gray-200,
  .table-gray-200 > th,
  .table-gray-200 > td {
    background-color: #fafafa;
  }

  .table-hover .table-gray-200:hover {
    background-color: #ededed;
  }
  .table-hover .table-gray-200:hover > td,
  .table-hover .table-gray-200:hover > th {
    background-color: #ededed;
  }

  .table-gray-300,
  .table-gray-300 > th,
  .table-gray-300 > td {
    background-color: #f6f7f8;
  }

  .table-hover .table-gray-300:hover {
    background-color: #e8eaed;
  }
  .table-hover .table-gray-300:hover > td,
  .table-hover .table-gray-300:hover > th {
    background-color: #e8eaed;
  }

  .table-gray-400,
  .table-gray-400 > th,
  .table-gray-400 > td {
    background-color: #f1f3f5;
  }

  .table-hover .table-gray-400:hover {
    background-color: #e2e6ea;
  }
  .table-hover .table-gray-400:hover > td,
  .table-hover .table-gray-400:hover > th {
    background-color: #e2e6ea;
  }

  .table-gray-500,
  .table-gray-500 > th,
  .table-gray-500 > td {
    background-color: #ececec;
  }

  .table-hover .table-gray-500:hover {
    background-color: #dfdfdf;
  }
  .table-hover .table-gray-500:hover > td,
  .table-hover .table-gray-500:hover > th {
    background-color: #dfdfdf;
  }

  .table-gray-600,
  .table-gray-600 > th,
  .table-gray-600 > td {
    background-color: #d7d4da;
  }

  .table-hover .table-gray-600:hover {
    background-color: #cac6ce;
  }
  .table-hover .table-gray-600:hover > td,
  .table-hover .table-gray-600:hover > th {
    background-color: #cac6ce;
  }

  .table-gray-700,
  .table-gray-700 > th,
  .table-gray-700 > td {
    background-color: #d4d1d7;
  }

  .table-hover .table-gray-700:hover {
    background-color: #c7c3cb;
  }
  .table-hover .table-gray-700:hover > td,
  .table-hover .table-gray-700:hover > th {
    background-color: #c7c3cb;
  }

  .table-gray-800,
  .table-gray-800 > th,
  .table-gray-800 > td {
    background-color: #ceccd1;
  }

  .table-hover .table-gray-800:hover {
    background-color: #c1bfc5;
  }
  .table-hover .table-gray-800:hover > td,
  .table-hover .table-gray-800:hover > th {
    background-color: #c1bfc5;
  }

  .table-gray-900,
  .table-gray-900 > th,
  .table-gray-900 > td {
    background-color: #cccace;
  }

  .table-hover .table-gray-900:hover {
    background-color: #bfbdc2;
  }
  .table-hover .table-gray-900:hover > td,
  .table-hover .table-gray-900:hover > th {
    background-color: #bfbdc2;
  }

  .table-active,
  .table-active > th,
  .table-active > td {
    background-color: rgba(0, 0, 0, 0.075);
  }

  .table-hover .table-active:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
  .table-hover .table-active:hover > td,
  .table-hover .table-active:hover > th {
    background-color: rgba(0, 0, 0, 0.075);
  }

  .table .thead-dark th {
    color: #fff;
    background-color: #47404f;
    border-color: #5b5164;
  }

  .table .thead-light th {
    color: #665c70;
    background-color: #eee;
    border-color: #dee2e6;
  }

  .table-dark {
    color: #fff;
    background-color: #47404f;
  }
  .table-dark th,
  .table-dark td,
  .table-dark thead th {
    border-color: #5b5164;
  }
  .table-dark.table-bordered {
    border: 0;
  }
  .table-dark.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.05);
  }
  .table-dark.table-hover tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }

  @media (max-width: 575.98px) {
    .table-responsive-sm {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .table-responsive-sm > .table-bordered {
      border: 0;
    }
  }

  @media (max-width: 767.98px) {
    .table-responsive-md {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .table-responsive-md > .table-bordered {
      border: 0;
    }
  }

  @media (max-width: 991.98px) {
    .table-responsive-lg {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .table-responsive-lg > .table-bordered {
      border: 0;
    }
  }

  @media (max-width: 1199.98px) {
    .table-responsive-xl {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .table-responsive-xl > .table-bordered {
      border: 0;
    }
  }

  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.9695rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 0.813rem;
    line-height: 1.5;
    color: #665c70;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control::-ms-expand {
    background-color: transparent;
    border: 0;
  }
  .form-control:focus {
    color: #665c70;
    background-color: #fff;
    border-color: #a679d2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .form-control::placeholder {
    color: #70657b;
    opacity: 1;
  }
  .form-control:disabled,
  .form-control[readonly] {
    background-color: #eee;
    opacity: 1;
  }

  select.form-control:focus::-ms-value {
    color: #665c70;
    background-color: #fff;
  }

  .form-control-file,
  .form-control-range {
    display: block;
    width: 100%;
  }

  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }

  .col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.01625rem;
    line-height: 1.5;
  }

  .col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.71137rem;
    line-height: 1.5;
  }

  .form-control-plaintext {
    display: block;
    width: 100%;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    margin-bottom: 0;
    line-height: 1.5;
    color: #47404f;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
  }
  .form-control-plaintext.form-control-sm,
  .form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }

  .form-control-sm {
    height: calc(1.56706rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  .form-control-lg {
    height: calc(2.52438rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.01625rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  select.form-control[size],
  select.form-control[multiple] {
    height: auto;
  }

  textarea.form-control {
    height: auto;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-text {
    display: block;
    margin-top: 0.25rem;
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
  }
  .form-row > .col,
  .form-row > [class*="col-"] {
    padding-right: 5px;
    padding-left: 5px;
  }

  .form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
  }

  .form-check-input {
    position: absolute;
    margin-top: 0.3rem;
    margin-left: -1.25rem;
  }
  .form-check-input:disabled ~ .form-check-label {
    color: #70657b;
  }

  .form-check-label {
    margin-bottom: 0;
  }

  .form-check-inline {
    display: inline-flex;
    align-items: center;
    padding-left: 0;
    margin-right: 0.75rem;
  }
  .form-check-inline .form-check-input {
    position: static;
    margin-top: 0;
    margin-right: 0.3125rem;
    margin-left: 0;
  }

  .valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #4caf50;
  }

  .valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    color: #fff;
    background-color: rgba(76, 175, 80, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated .form-control:valid,
  .form-control.is-valid,
  .was-validated .custom-select:valid,
  .custom-select.is-valid {
    border-color: #4caf50;
  }
  .was-validated .form-control:valid:focus,
  .form-control.is-valid:focus,
  .was-validated .custom-select:valid:focus,
  .custom-select.is-valid:focus {
    border-color: #4caf50;
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
  }
  .was-validated .form-control:valid ~ .valid-feedback,
  .was-validated .form-control:valid ~ .valid-tooltip,
  .form-control.is-valid ~ .valid-feedback,
  .form-control.is-valid ~ .valid-tooltip,
  .was-validated .custom-select:valid ~ .valid-feedback,
  .was-validated .custom-select:valid ~ .valid-tooltip,
  .custom-select.is-valid ~ .valid-feedback,
  .custom-select.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .form-control-file:valid ~ .valid-feedback,
  .was-validated .form-control-file:valid ~ .valid-tooltip,
  .form-control-file.is-valid ~ .valid-feedback,
  .form-control-file.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .form-check-input:valid ~ .form-check-label,
  .form-check-input.is-valid ~ .form-check-label {
    color: #4caf50;
  }

  .was-validated .form-check-input:valid ~ .valid-feedback,
  .was-validated .form-check-input:valid ~ .valid-tooltip,
  .form-check-input.is-valid ~ .valid-feedback,
  .form-check-input.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .custom-control-input:valid ~ .custom-control-label,
  .custom-control-input.is-valid ~ .custom-control-label {
    color: #4caf50;
  }
  .was-validated .custom-control-input:valid ~ .custom-control-label::before,
  .custom-control-input.is-valid ~ .custom-control-label::before {
    background-color: #a3d7a5;
  }

  .was-validated .custom-control-input:valid ~ .valid-feedback,
  .was-validated .custom-control-input:valid ~ .valid-tooltip,
  .custom-control-input.is-valid ~ .valid-feedback,
  .custom-control-input.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated
    .custom-control-input:valid:checked
    ~ .custom-control-label::before,
  .custom-control-input.is-valid:checked ~ .custom-control-label::before {
    background-color: #6ec071;
  }

  .was-validated
    .custom-control-input:valid:focus
    ~ .custom-control-label::before,
  .custom-control-input.is-valid:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
  }

  .was-validated .custom-file-input:valid ~ .custom-file-label,
  .custom-file-input.is-valid ~ .custom-file-label {
    border-color: #4caf50;
  }
  .was-validated .custom-file-input:valid ~ .custom-file-label::after,
  .custom-file-input.is-valid ~ .custom-file-label::after {
    border-color: inherit;
  }

  .was-validated .custom-file-input:valid ~ .valid-feedback,
  .was-validated .custom-file-input:valid ~ .valid-tooltip,
  .custom-file-input.is-valid ~ .valid-feedback,
  .custom-file-input.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .custom-file-input:valid:focus ~ .custom-file-label,
  .custom-file-input.is-valid:focus ~ .custom-file-label {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
  }

  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #f44336;
  }

  .invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    color: #fff;
    background-color: rgba(244, 67, 54, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated .form-control:invalid,
  .form-control.is-invalid,
  .was-validated .custom-select:invalid,
  .custom-select.is-invalid {
    border-color: #f44336;
  }
  .was-validated .form-control:invalid:focus,
  .form-control.is-invalid:focus,
  .was-validated .custom-select:invalid:focus,
  .custom-select.is-invalid:focus {
    border-color: #f44336;
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.25);
  }
  .was-validated .form-control:invalid ~ .invalid-feedback,
  .was-validated .form-control:invalid ~ .invalid-tooltip,
  .form-control.is-invalid ~ .invalid-feedback,
  .form-control.is-invalid ~ .invalid-tooltip,
  .was-validated .custom-select:invalid ~ .invalid-feedback,
  .was-validated .custom-select:invalid ~ .invalid-tooltip,
  .custom-select.is-invalid ~ .invalid-feedback,
  .custom-select.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .form-control-file:invalid ~ .invalid-feedback,
  .was-validated .form-control-file:invalid ~ .invalid-tooltip,
  .form-control-file.is-invalid ~ .invalid-feedback,
  .form-control-file.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .form-check-input:invalid ~ .form-check-label,
  .form-check-input.is-invalid ~ .form-check-label {
    color: #f44336;
  }

  .was-validated .form-check-input:invalid ~ .invalid-feedback,
  .was-validated .form-check-input:invalid ~ .invalid-tooltip,
  .form-check-input.is-invalid ~ .invalid-feedback,
  .form-check-input.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .custom-control-input:invalid ~ .custom-control-label,
  .custom-control-input.is-invalid ~ .custom-control-label {
    color: #f44336;
  }
  .was-validated .custom-control-input:invalid ~ .custom-control-label::before,
  .custom-control-input.is-invalid ~ .custom-control-label::before {
    background-color: #fbb4af;
  }

  .was-validated .custom-control-input:invalid ~ .invalid-feedback,
  .was-validated .custom-control-input:invalid ~ .invalid-tooltip,
  .custom-control-input.is-invalid ~ .invalid-feedback,
  .custom-control-input.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated
    .custom-control-input:invalid:checked
    ~ .custom-control-label::before,
  .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
    background-color: #f77066;
  }

  .was-validated
    .custom-control-input:invalid:focus
    ~ .custom-control-label::before,
  .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(244, 67, 54, 0.25);
  }

  .was-validated .custom-file-input:invalid ~ .custom-file-label,
  .custom-file-input.is-invalid ~ .custom-file-label {
    border-color: #f44336;
  }
  .was-validated .custom-file-input:invalid ~ .custom-file-label::after,
  .custom-file-input.is-invalid ~ .custom-file-label::after {
    border-color: inherit;
  }

  .was-validated .custom-file-input:invalid ~ .invalid-feedback,
  .was-validated .custom-file-input:invalid ~ .invalid-tooltip,
  .custom-file-input.is-invalid ~ .invalid-feedback,
  .custom-file-input.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .custom-file-input:invalid:focus ~ .custom-file-label,
  .custom-file-input.is-invalid:focus ~ .custom-file-label {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.25);
  }

  .form-inline {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .form-inline .form-check {
    width: 100%;
  }
  @media (min-width: 576px) {
    .form-inline label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
    }
    .form-inline .form-group {
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: 0;
    }
    .form-inline .form-control {
      display: inline-block;
      width: auto;
      vertical-align: middle;
    }
    .form-inline .form-control-plaintext {
      display: inline-block;
    }
    .form-inline .input-group,
    .form-inline .custom-select {
      width: auto;
    }
    .form-inline .form-check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      padding-left: 0;
    }
    .form-inline .form-check-input {
      position: relative;
      margin-top: 0;
      margin-right: 0.25rem;
      margin-left: 0;
    }
    .form-inline .custom-control {
      align-items: center;
      justify-content: center;
    }
    .form-inline .custom-control-label {
      margin-bottom: 0;
    }
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 0.813rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover,
  .btn:focus {
    text-decoration: none;
  }
  .btn:focus,
  .btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .btn.disabled,
  .btn:disabled {
    opacity: 0.65;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  a.btn.disabled,
  fieldset:disabled a.btn {
    pointer-events: none;
  }

  .btn-primary {
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #53297c;
    border-color: #4d2673;
  }
  .btn-primary:focus,
  .btn-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }
  .btn-primary.disabled,
  .btn-primary:disabled {
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled).active,
  .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #4d2673;
    border-color: #462369;
  }
  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .btn-primary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }

  .btn-secondary {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-secondary:hover {
    color: #fff;
    background-color: #3e3845;
    border-color: #38323e;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }
  .btn-secondary.disabled,
  .btn-secondary:disabled {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #38323e;
    border-color: #322d37;
  }
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }

  .btn-success {
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  .btn-success:hover {
    color: #fff;
    background-color: #409444;
    border-color: #3d8b40;
  }
  .btn-success:focus,
  .btn-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }
  .btn-success.disabled,
  .btn-success:disabled {
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  .btn-success:not(:disabled):not(.disabled):active,
  .btn-success:not(:disabled):not(.disabled).active,
  .show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #3d8b40;
    border-color: #39833c;
  }
  .btn-success:not(:disabled):not(.disabled):active:focus,
  .btn-success:not(:disabled):not(.disabled).active:focus,
  .show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }

  .btn-info {
    color: #fff;
    background-color: #003473;
    border-color: #003473;
  }
  .btn-info:hover {
    color: #fff;
    background-color: #00234d;
    border-color: #001d40;
  }
  .btn-info:focus,
  .btn-info.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 52, 115, 0.5);
  }
  .btn-info.disabled,
  .btn-info:disabled {
    color: #fff;
    background-color: #003473;
    border-color: #003473;
  }
  .btn-info:not(:disabled):not(.disabled):active,
  .btn-info:not(:disabled):not(.disabled).active,
  .show > .btn-info.dropdown-toggle {
    color: #fff;
    background-color: #001d40;
    border-color: #001733;
  }
  .btn-info:not(:disabled):not(.disabled):active:focus,
  .btn-info:not(:disabled):not(.disabled).active:focus,
  .show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 52, 115, 0.5);
  }

  .btn-warning {
    color: #47404f;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:hover {
    color: #47404f;
    background-color: #e0a800;
    border-color: #d39e00;
  }
  .btn-warning:focus,
  .btn-warning.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }
  .btn-warning.disabled,
  .btn-warning:disabled {
    color: #47404f;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:not(:disabled):not(.disabled):active,
  .btn-warning:not(:disabled):not(.disabled).active,
  .show > .btn-warning.dropdown-toggle {
    color: #47404f;
    background-color: #d39e00;
    border-color: #c69500;
  }
  .btn-warning:not(:disabled):not(.disabled):active:focus,
  .btn-warning:not(:disabled):not(.disabled).active:focus,
  .show > .btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }

  .btn-danger {
    color: #fff;
    background-color: #f44336;
    border-color: #f44336;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #f22112;
    border-color: #ea1c0d;
  }
  .btn-danger:focus,
  .btn-danger.focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }
  .btn-danger.disabled,
  .btn-danger:disabled {
    color: #fff;
    background-color: #f44336;
    border-color: #f44336;
  }
  .btn-danger:not(:disabled):not(.disabled):active,
  .btn-danger:not(:disabled):not(.disabled).active,
  .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #ea1c0d;
    border-color: #de1b0c;
  }
  .btn-danger:not(:disabled):not(.disabled):active:focus,
  .btn-danger:not(:disabled):not(.disabled).active:focus,
  .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }

  .btn-light {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-light:hover {
    color: #47404f;
    background-color: #a8a8a8;
    border-color: #a2a2a2;
  }
  .btn-light:focus,
  .btn-light.focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }
  .btn-light.disabled,
  .btn-light:disabled {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-light:not(:disabled):not(.disabled):active,
  .btn-light:not(:disabled):not(.disabled).active,
  .show > .btn-light.dropdown-toggle {
    color: #47404f;
    background-color: #a2a2a2;
    border-color: #9b9b9b;
  }
  .btn-light:not(:disabled):not(.disabled):active:focus,
  .btn-light:not(:disabled):not(.disabled).active:focus,
  .show > .btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }

  .btn-dark {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-dark:hover {
    color: #fff;
    background-color: #342f3a;
    border-color: #2e2932;
  }
  .btn-dark:focus,
  .btn-dark.focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }
  .btn-dark.disabled,
  .btn-dark:disabled {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-dark:not(:disabled):not(.disabled):active,
  .btn-dark:not(:disabled):not(.disabled).active,
  .show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #2e2932;
    border-color: #28242b;
  }
  .btn-dark:not(:disabled):not(.disabled):active:focus,
  .btn-dark:not(:disabled):not(.disabled).active:focus,
  .show > .btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }

  .btn-gray-100 {
    color: #47404f;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-gray-100:hover {
    color: #47404f;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
  .btn-gray-100:focus,
  .btn-gray-100.focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  .btn-gray-100.disabled,
  .btn-gray-100:disabled {
    color: #47404f;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-gray-100:not(:disabled):not(.disabled):active,
  .btn-gray-100:not(:disabled):not(.disabled).active,
  .show > .btn-gray-100.dropdown-toggle {
    color: #47404f;
    background-color: #dae0e5;
    border-color: #d3d9df;
  }
  .btn-gray-100:not(:disabled):not(.disabled):active:focus,
  .btn-gray-100:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-100.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }

  .btn-gray-200 {
    color: #47404f;
    background-color: #eee;
    border-color: #eee;
  }
  .btn-gray-200:hover {
    color: #47404f;
    background-color: #dbdbdb;
    border-color: #d5d5d5;
  }
  .btn-gray-200:focus,
  .btn-gray-200.focus {
    box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
  }
  .btn-gray-200.disabled,
  .btn-gray-200:disabled {
    color: #47404f;
    background-color: #eee;
    border-color: #eee;
  }
  .btn-gray-200:not(:disabled):not(.disabled):active,
  .btn-gray-200:not(:disabled):not(.disabled).active,
  .show > .btn-gray-200.dropdown-toggle {
    color: #47404f;
    background-color: #d5d5d5;
    border-color: #cecece;
  }
  .btn-gray-200:not(:disabled):not(.disabled):active:focus,
  .btn-gray-200:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-200.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
  }

  .btn-gray-300 {
    color: #47404f;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }
  .btn-gray-300:hover {
    color: #47404f;
    background-color: #c8cfd6;
    border-color: #c1c9d0;
  }
  .btn-gray-300:focus,
  .btn-gray-300.focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 226, 230, 0.5);
  }
  .btn-gray-300.disabled,
  .btn-gray-300:disabled {
    color: #47404f;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }
  .btn-gray-300:not(:disabled):not(.disabled):active,
  .btn-gray-300:not(:disabled):not(.disabled).active,
  .show > .btn-gray-300.dropdown-toggle {
    color: #47404f;
    background-color: #c1c9d0;
    border-color: #bac2cb;
  }
  .btn-gray-300:not(:disabled):not(.disabled):active:focus,
  .btn-gray-300:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-300.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 226, 230, 0.5);
  }

  .btn-gray-400 {
    color: #47404f;
    background-color: #ced4da;
    border-color: #ced4da;
  }
  .btn-gray-400:hover {
    color: #47404f;
    background-color: #b8c1ca;
    border-color: #b1bbc4;
  }
  .btn-gray-400:focus,
  .btn-gray-400.focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 212, 218, 0.5);
  }
  .btn-gray-400.disabled,
  .btn-gray-400:disabled {
    color: #47404f;
    background-color: #ced4da;
    border-color: #ced4da;
  }
  .btn-gray-400:not(:disabled):not(.disabled):active,
  .btn-gray-400:not(:disabled):not(.disabled).active,
  .show > .btn-gray-400.dropdown-toggle {
    color: #47404f;
    background-color: #b1bbc4;
    border-color: #aab4bf;
  }
  .btn-gray-400:not(:disabled):not(.disabled):active:focus,
  .btn-gray-400:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-400.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 212, 218, 0.5);
  }

  .btn-gray-500 {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-gray-500:hover {
    color: #47404f;
    background-color: #a8a8a8;
    border-color: #a2a2a2;
  }
  .btn-gray-500:focus,
  .btn-gray-500.focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }
  .btn-gray-500.disabled,
  .btn-gray-500:disabled {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-gray-500:not(:disabled):not(.disabled):active,
  .btn-gray-500:not(:disabled):not(.disabled).active,
  .show > .btn-gray-500.dropdown-toggle {
    color: #47404f;
    background-color: #a2a2a2;
    border-color: #9b9b9b;
  }
  .btn-gray-500:not(:disabled):not(.disabled):active:focus,
  .btn-gray-500:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-500.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }

  .btn-gray-600 {
    color: #fff;
    background-color: #70657b;
    border-color: #70657b;
  }
  .btn-gray-600:hover {
    color: #fff;
    background-color: #5d5466;
    border-color: #574e5f;
  }
  .btn-gray-600:focus,
  .btn-gray-600.focus {
    box-shadow: 0 0 0 0.2rem rgba(112, 101, 123, 0.5);
  }
  .btn-gray-600.disabled,
  .btn-gray-600:disabled {
    color: #fff;
    background-color: #70657b;
    border-color: #70657b;
  }
  .btn-gray-600:not(:disabled):not(.disabled):active,
  .btn-gray-600:not(:disabled):not(.disabled).active,
  .show > .btn-gray-600.dropdown-toggle {
    color: #fff;
    background-color: #574e5f;
    border-color: #504858;
  }
  .btn-gray-600:not(:disabled):not(.disabled):active:focus,
  .btn-gray-600:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-600.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(112, 101, 123, 0.5);
  }

  .btn-gray-700 {
    color: #fff;
    background-color: #665c70;
    border-color: #665c70;
  }
  .btn-gray-700:hover {
    color: #fff;
    background-color: #534b5b;
    border-color: #4d4554;
  }
  .btn-gray-700:focus,
  .btn-gray-700.focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 92, 112, 0.5);
  }
  .btn-gray-700.disabled,
  .btn-gray-700:disabled {
    color: #fff;
    background-color: #665c70;
    border-color: #665c70;
  }
  .btn-gray-700:not(:disabled):not(.disabled):active,
  .btn-gray-700:not(:disabled):not(.disabled).active,
  .show > .btn-gray-700.dropdown-toggle {
    color: #fff;
    background-color: #4d4554;
    border-color: #463f4d;
  }
  .btn-gray-700:not(:disabled):not(.disabled):active:focus,
  .btn-gray-700:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-700.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 92, 112, 0.5);
  }

  .btn-gray-800 {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-gray-800:hover {
    color: #fff;
    background-color: #3e3845;
    border-color: #38323e;
  }
  .btn-gray-800:focus,
  .btn-gray-800.focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }
  .btn-gray-800.disabled,
  .btn-gray-800:disabled {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-gray-800:not(:disabled):not(.disabled):active,
  .btn-gray-800:not(:disabled):not(.disabled).active,
  .show > .btn-gray-800.dropdown-toggle {
    color: #fff;
    background-color: #38323e;
    border-color: #322d37;
  }
  .btn-gray-800:not(:disabled):not(.disabled):active:focus,
  .btn-gray-800:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-800.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }

  .btn-gray-900 {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-gray-900:hover {
    color: #fff;
    background-color: #342f3a;
    border-color: #2e2932;
  }
  .btn-gray-900:focus,
  .btn-gray-900.focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }
  .btn-gray-900.disabled,
  .btn-gray-900:disabled {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-gray-900:not(:disabled):not(.disabled):active,
  .btn-gray-900:not(:disabled):not(.disabled).active,
  .show > .btn-gray-900.dropdown-toggle {
    color: #fff;
    background-color: #2e2932;
    border-color: #28242b;
  }
  .btn-gray-900:not(:disabled):not(.disabled):active:focus,
  .btn-gray-900:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-900.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }

  .btn-outline-primary {
    color: #663399;
    background-color: transparent;
    background-image: none;
    border-color: #663399;
  }
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }
  .btn-outline-primary:focus,
  .btn-outline-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }
  .btn-outline-primary.disabled,
  .btn-outline-primary:disabled {
    color: #663399;
    background-color: transparent;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active,
  .btn-outline-primary:not(:disabled):not(.disabled).active,
  .show > .btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }

  .btn-outline-secondary {
    color: #52495a;
    background-color: transparent;
    background-image: none;
    border-color: #52495a;
  }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-outline-secondary:focus,
  .btn-outline-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }
  .btn-outline-secondary.disabled,
  .btn-outline-secondary:disabled {
    color: #52495a;
    background-color: transparent;
  }
  .btn-outline-secondary:not(:disabled):not(.disabled):active,
  .btn-outline-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-outline-secondary.dropdown-toggle {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }

  .btn-outline-success {
    color: #4caf50;
    background-color: transparent;
    background-image: none;
    border-color: #4caf50;
  }
  .btn-outline-success:hover {
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  .btn-outline-success:focus,
  .btn-outline-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }
  .btn-outline-success.disabled,
  .btn-outline-success:disabled {
    color: #4caf50;
    background-color: transparent;
  }
  .btn-outline-success:not(:disabled):not(.disabled):active,
  .btn-outline-success:not(:disabled):not(.disabled).active,
  .show > .btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  .btn-outline-success:not(:disabled):not(.disabled):active:focus,
  .btn-outline-success:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }

  .btn-outline-info {
    color: #003473;
    background-color: transparent;
    background-image: none;
    border-color: #003473;
  }
  .btn-outline-info:hover {
    color: #fff;
    background-color: #003473;
    border-color: #003473;
  }
  .btn-outline-info:focus,
  .btn-outline-info.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 52, 115, 0.5);
  }
  .btn-outline-info.disabled,
  .btn-outline-info:disabled {
    color: #003473;
    background-color: transparent;
  }
  .btn-outline-info:not(:disabled):not(.disabled):active,
  .btn-outline-info:not(:disabled):not(.disabled).active,
  .show > .btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #003473;
    border-color: #003473;
  }
  .btn-outline-info:not(:disabled):not(.disabled):active:focus,
  .btn-outline-info:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 52, 115, 0.5);
  }

  .btn-outline-warning {
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;
  }
  .btn-outline-warning:hover {
    color: #47404f;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:focus,
  .btn-outline-warning.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }
  .btn-outline-warning.disabled,
  .btn-outline-warning:disabled {
    color: #ffc107;
    background-color: transparent;
  }
  .btn-outline-warning:not(:disabled):not(.disabled):active,
  .btn-outline-warning:not(:disabled):not(.disabled).active,
  .show > .btn-outline-warning.dropdown-toggle {
    color: #47404f;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:not(:disabled):not(.disabled):active:focus,
  .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }

  .btn-outline-danger {
    color: #f44336;
    background-color: transparent;
    background-image: none;
    border-color: #f44336;
  }
  .btn-outline-danger:hover {
    color: #fff;
    background-color: #f44336;
    border-color: #f44336;
  }
  .btn-outline-danger:focus,
  .btn-outline-danger.focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }
  .btn-outline-danger.disabled,
  .btn-outline-danger:disabled {
    color: #f44336;
    background-color: transparent;
  }
  .btn-outline-danger:not(:disabled):not(.disabled):active,
  .btn-outline-danger:not(:disabled):not(.disabled).active,
  .show > .btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #f44336;
    border-color: #f44336;
  }
  .btn-outline-danger:not(:disabled):not(.disabled):active:focus,
  .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }

  .btn-outline-light {
    color: #bbb;
    background-color: transparent;
    background-image: none;
    border-color: #bbb;
  }
  .btn-outline-light:hover {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-outline-light:focus,
  .btn-outline-light.focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }
  .btn-outline-light.disabled,
  .btn-outline-light:disabled {
    color: #bbb;
    background-color: transparent;
  }
  .btn-outline-light:not(:disabled):not(.disabled):active,
  .btn-outline-light:not(:disabled):not(.disabled).active,
  .show > .btn-outline-light.dropdown-toggle {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-outline-light:not(:disabled):not(.disabled):active:focus,
  .btn-outline-light:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }

  .btn-outline-dark {
    color: #47404f;
    background-color: transparent;
    background-image: none;
    border-color: #47404f;
  }
  .btn-outline-dark:hover {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-outline-dark:focus,
  .btn-outline-dark.focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }
  .btn-outline-dark.disabled,
  .btn-outline-dark:disabled {
    color: #47404f;
    background-color: transparent;
  }
  .btn-outline-dark:not(:disabled):not(.disabled):active,
  .btn-outline-dark:not(:disabled):not(.disabled).active,
  .show > .btn-outline-dark.dropdown-toggle {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-outline-dark:not(:disabled):not(.disabled):active:focus,
  .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }

  .btn-outline-gray-100 {
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;
  }
  .btn-outline-gray-100:hover {
    color: #47404f;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-gray-100:focus,
  .btn-outline-gray-100.focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  .btn-outline-gray-100.disabled,
  .btn-outline-gray-100:disabled {
    color: #f8f9fa;
    background-color: transparent;
  }
  .btn-outline-gray-100:not(:disabled):not(.disabled):active,
  .btn-outline-gray-100:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-100.dropdown-toggle {
    color: #47404f;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-gray-100:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-100:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-100.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }

  .btn-outline-gray-200 {
    color: #eee;
    background-color: transparent;
    background-image: none;
    border-color: #eee;
  }
  .btn-outline-gray-200:hover {
    color: #47404f;
    background-color: #eee;
    border-color: #eee;
  }
  .btn-outline-gray-200:focus,
  .btn-outline-gray-200.focus {
    box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
  }
  .btn-outline-gray-200.disabled,
  .btn-outline-gray-200:disabled {
    color: #eee;
    background-color: transparent;
  }
  .btn-outline-gray-200:not(:disabled):not(.disabled):active,
  .btn-outline-gray-200:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-200.dropdown-toggle {
    color: #47404f;
    background-color: #eee;
    border-color: #eee;
  }
  .btn-outline-gray-200:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-200:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-200.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
  }

  .btn-outline-gray-300 {
    color: #dee2e6;
    background-color: transparent;
    background-image: none;
    border-color: #dee2e6;
  }
  .btn-outline-gray-300:hover {
    color: #47404f;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }
  .btn-outline-gray-300:focus,
  .btn-outline-gray-300.focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 226, 230, 0.5);
  }
  .btn-outline-gray-300.disabled,
  .btn-outline-gray-300:disabled {
    color: #dee2e6;
    background-color: transparent;
  }
  .btn-outline-gray-300:not(:disabled):not(.disabled):active,
  .btn-outline-gray-300:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-300.dropdown-toggle {
    color: #47404f;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }
  .btn-outline-gray-300:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-300:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-300.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 226, 230, 0.5);
  }

  .btn-outline-gray-400 {
    color: #ced4da;
    background-color: transparent;
    background-image: none;
    border-color: #ced4da;
  }
  .btn-outline-gray-400:hover {
    color: #47404f;
    background-color: #ced4da;
    border-color: #ced4da;
  }
  .btn-outline-gray-400:focus,
  .btn-outline-gray-400.focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 212, 218, 0.5);
  }
  .btn-outline-gray-400.disabled,
  .btn-outline-gray-400:disabled {
    color: #ced4da;
    background-color: transparent;
  }
  .btn-outline-gray-400:not(:disabled):not(.disabled):active,
  .btn-outline-gray-400:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-400.dropdown-toggle {
    color: #47404f;
    background-color: #ced4da;
    border-color: #ced4da;
  }
  .btn-outline-gray-400:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-400:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-400.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 212, 218, 0.5);
  }

  .btn-outline-gray-500 {
    color: #bbb;
    background-color: transparent;
    background-image: none;
    border-color: #bbb;
  }
  .btn-outline-gray-500:hover {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-outline-gray-500:focus,
  .btn-outline-gray-500.focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }
  .btn-outline-gray-500.disabled,
  .btn-outline-gray-500:disabled {
    color: #bbb;
    background-color: transparent;
  }
  .btn-outline-gray-500:not(:disabled):not(.disabled):active,
  .btn-outline-gray-500:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-500.dropdown-toggle {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-outline-gray-500:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-500:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-500.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }

  .btn-outline-gray-600 {
    color: #70657b;
    background-color: transparent;
    background-image: none;
    border-color: #70657b;
  }
  .btn-outline-gray-600:hover {
    color: #fff;
    background-color: #70657b;
    border-color: #70657b;
  }
  .btn-outline-gray-600:focus,
  .btn-outline-gray-600.focus {
    box-shadow: 0 0 0 0.2rem rgba(112, 101, 123, 0.5);
  }
  .btn-outline-gray-600.disabled,
  .btn-outline-gray-600:disabled {
    color: #70657b;
    background-color: transparent;
  }
  .btn-outline-gray-600:not(:disabled):not(.disabled):active,
  .btn-outline-gray-600:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-600.dropdown-toggle {
    color: #fff;
    background-color: #70657b;
    border-color: #70657b;
  }
  .btn-outline-gray-600:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-600:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-600.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(112, 101, 123, 0.5);
  }

  .btn-outline-gray-700 {
    color: #665c70;
    background-color: transparent;
    background-image: none;
    border-color: #665c70;
  }
  .btn-outline-gray-700:hover {
    color: #fff;
    background-color: #665c70;
    border-color: #665c70;
  }
  .btn-outline-gray-700:focus,
  .btn-outline-gray-700.focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 92, 112, 0.5);
  }
  .btn-outline-gray-700.disabled,
  .btn-outline-gray-700:disabled {
    color: #665c70;
    background-color: transparent;
  }
  .btn-outline-gray-700:not(:disabled):not(.disabled):active,
  .btn-outline-gray-700:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-700.dropdown-toggle {
    color: #fff;
    background-color: #665c70;
    border-color: #665c70;
  }
  .btn-outline-gray-700:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-700:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-700.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 92, 112, 0.5);
  }

  .btn-outline-gray-800 {
    color: #52495a;
    background-color: transparent;
    background-image: none;
    border-color: #52495a;
  }
  .btn-outline-gray-800:hover {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-outline-gray-800:focus,
  .btn-outline-gray-800.focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }
  .btn-outline-gray-800.disabled,
  .btn-outline-gray-800:disabled {
    color: #52495a;
    background-color: transparent;
  }
  .btn-outline-gray-800:not(:disabled):not(.disabled):active,
  .btn-outline-gray-800:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-800.dropdown-toggle {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-outline-gray-800:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-800:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-800.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }

  .btn-outline-gray-900 {
    color: #47404f;
    background-color: transparent;
    background-image: none;
    border-color: #47404f;
  }
  .btn-outline-gray-900:hover {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-outline-gray-900:focus,
  .btn-outline-gray-900.focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }
  .btn-outline-gray-900.disabled,
  .btn-outline-gray-900:disabled {
    color: #47404f;
    background-color: transparent;
  }
  .btn-outline-gray-900:not(:disabled):not(.disabled):active,
  .btn-outline-gray-900:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-900.dropdown-toggle {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-outline-gray-900:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-900:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-900.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }

  .btn-link {
    font-weight: 400;
    color: #663399;
    background-color: transparent;
  }
  .btn-link:hover {
    color: #402060;
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-link:focus,
  .btn-link.focus {
    text-decoration: underline;
    border-color: transparent;
    box-shadow: none;
  }
  .btn-link:disabled,
  .btn-link.disabled {
    color: #70657b;
    pointer-events: none;
  }

  .btn-lg,
  .btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.01625rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  .btn-sm,
  .btn-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  .btn-block {
    display: block;
    width: 100%;
  }
  .btn-block + .btn-block {
    margin-top: 0.5rem;
  }

  input[type="submit"].btn-block,
  input[type="reset"].btn-block,
  input[type="button"].btn-block {
    width: 100%;
  }

  .fade {
    transition: opacity 0.15s linear;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }
  .fade:not(.show) {
    opacity: 0;
  }

  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }

  .dropup,
  .dropright,
  .dropdown,
  .dropleft {
    position: relative;
  }

  .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 0.813rem;
    color: #47404f;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }

  .dropdown-menu-right {
    right: 0;
    left: auto;
  }

  .dropup .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 0.125rem;
  }

  .dropup .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0;
    border-right: 0.3em solid transparent;
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
  }

  .dropup .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropright .dropdown-menu {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: 0.125rem;
  }

  .dropright .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
  }

  .dropright .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropright .dropdown-toggle::after {
    vertical-align: 0;
  }

  .dropleft .dropdown-menu {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: 0.125rem;
  }

  .dropleft .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
  }

  .dropleft .dropdown-toggle::after {
    display: none;
  }

  .dropleft .dropdown-toggle::before {
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-bottom: 0.3em solid transparent;
  }

  .dropleft .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropleft .dropdown-toggle::before {
    vertical-align: 0;
  }

  .dropdown-menu[x-placement^="top"],
  .dropdown-menu[x-placement^="right"],
  .dropdown-menu[x-placement^="bottom"],
  .dropdown-menu[x-placement^="left"] {
    right: auto;
    bottom: auto;
  }

  .dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #eee;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #47404f;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:hover,
  .dropdown-item:focus {
    color: #3b3541;
    text-decoration: none;
    background-color: #f8f9fa;
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #663399;
  }
  .dropdown-item.disabled,
  .dropdown-item:disabled {
    color: #70657b;
    background-color: transparent;
  }

  .dropdown-menu.show {
    display: block;
  }

  .dropdown-header {
    display: block;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0;
    font-size: 0.71137rem;
    color: #70657b;
    white-space: nowrap;
  }

  .dropdown-item-text {
    display: block;
    padding: 0.25rem 1.5rem;
    color: #47404f;
  }

  .btn-group,
  .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    flex: 0 1 auto;
  }
  .btn-group > .btn:hover,
  .btn-group-vertical > .btn:hover {
    z-index: 1;
  }
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group > .btn.active,
  .btn-group-vertical > .btn:focus,
  .btn-group-vertical > .btn:active,
  .btn-group-vertical > .btn.active {
    z-index: 1;
  }
  .btn-group .btn + .btn,
  .btn-group .btn + .btn-group,
  .btn-group .btn-group + .btn,
  .btn-group .btn-group + .btn-group,
  .btn-group-vertical .btn + .btn,
  .btn-group-vertical .btn + .btn-group,
  .btn-group-vertical .btn-group + .btn,
  .btn-group-vertical .btn-group + .btn-group {
    margin-left: -1px;
  }

  .btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .btn-toolbar .input-group {
    width: auto;
  }

  .btn-group > .btn:first-child {
    margin-left: 0;
  }

  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .dropdown-toggle-split {
    padding-right: 0.5625rem;
    padding-left: 0.5625rem;
  }
  .dropdown-toggle-split::after,
  .dropup .dropdown-toggle-split::after,
  .dropright .dropdown-toggle-split::after {
    margin-left: 0;
  }
  .dropleft .dropdown-toggle-split::before {
    margin-right: 0;
  }

  .btn-sm + .dropdown-toggle-split,
  .btn-group-sm > .btn + .dropdown-toggle-split {
    padding-right: 0.375rem;
    padding-left: 0.375rem;
  }

  .btn-lg + .dropdown-toggle-split,
  .btn-group-lg > .btn + .dropdown-toggle-split {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  .btn-group-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .btn-group-vertical .btn,
  .btn-group-vertical .btn-group {
    width: 100%;
  }
  .btn-group-vertical > .btn + .btn,
  .btn-group-vertical > .btn + .btn-group,
  .btn-group-vertical > .btn-group + .btn,
  .btn-group-vertical > .btn-group + .btn-group {
    margin-top: -1px;
    margin-left: 0;
  }
  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical > .btn-group:not(:last-child) > .btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .btn-group-vertical > .btn:not(:first-child),
  .btn-group-vertical > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .btn-group-toggle > .btn,
  .btn-group-toggle > .btn-group > .btn {
    margin-bottom: 0;
  }
  .btn-group-toggle > .btn input[type="radio"],
  .btn-group-toggle > .btn input[type="checkbox"],
  .btn-group-toggle > .btn-group > .btn input[type="radio"],
  .btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control,
  .input-group > .custom-select,
  .input-group > .custom-file {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }
  .input-group > .form-control + .form-control,
  .input-group > .form-control + .custom-select,
  .input-group > .form-control + .custom-file,
  .input-group > .custom-select + .form-control,
  .input-group > .custom-select + .custom-select,
  .input-group > .custom-select + .custom-file,
  .input-group > .custom-file + .form-control,
  .input-group > .custom-file + .custom-select,
  .input-group > .custom-file + .custom-file {
    margin-left: -1px;
  }
  .input-group > .form-control:focus,
  .input-group > .custom-select:focus,
  .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {
    z-index: 3;
  }
  .input-group > .custom-file .custom-file-input:focus {
    z-index: 4;
  }
  .input-group > .form-control:not(:last-child),
  .input-group > .custom-select:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group > .form-control:not(:first-child),
  .input-group > .custom-select:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .input-group > .custom-file {
    display: flex;
    align-items: center;
  }
  .input-group > .custom-file:not(:last-child) .custom-file-label,
  .input-group > .custom-file:not(:last-child) .custom-file-label::after {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group > .custom-file:not(:first-child) .custom-file-label {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .input-group-prepend,
  .input-group-append {
    display: flex;
  }
  .input-group-prepend .btn,
  .input-group-append .btn {
    position: relative;
    z-index: 2;
  }
  .input-group-prepend .btn + .btn,
  .input-group-prepend .btn + .input-group-text,
  .input-group-prepend .input-group-text + .input-group-text,
  .input-group-prepend .input-group-text + .btn,
  .input-group-append .btn + .btn,
  .input-group-append .btn + .input-group-text,
  .input-group-append .input-group-text + .input-group-text,
  .input-group-append .input-group-text + .btn {
    margin-left: -1px;
  }

  .input-group-prepend {
    margin-right: -1px;
  }

  .input-group-append {
    margin-left: -1px;
  }

  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 0.813rem;
    font-weight: 400;
    line-height: 1.5;
    color: #665c70;
    text-align: center;
    white-space: nowrap;
    background-color: #eee;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  .input-group-text input[type="radio"],
  .input-group-text input[type="checkbox"] {
    margin-top: 0;
  }

  .input-group-lg > .form-control,
  .input-group-lg > .input-group-prepend > .input-group-text,
  .input-group-lg > .input-group-append > .input-group-text,
  .input-group-lg > .input-group-prepend > .btn,
  .input-group-lg > .input-group-append > .btn {
    height: calc(2.52438rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.01625rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  .input-group-sm > .form-control,
  .input-group-sm > .input-group-prepend > .input-group-text,
  .input-group-sm > .input-group-append > .input-group-text,
  .input-group-sm > .input-group-prepend > .btn,
  .input-group-sm > .input-group-append > .btn {
    height: calc(1.56706rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  .input-group > .input-group-prepend > .btn,
  .input-group > .input-group-prepend > .input-group-text,
  .input-group > .input-group-append:not(:last-child) > .btn,
  .input-group > .input-group-append:not(:last-child) > .input-group-text,
  .input-group
    > .input-group-append:last-child
    > .btn:not(:last-child):not(.dropdown-toggle),
  .input-group
    > .input-group-append:last-child
    > .input-group-text:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .input-group > .input-group-append > .btn,
  .input-group > .input-group-append > .input-group-text,
  .input-group > .input-group-prepend:not(:first-child) > .btn,
  .input-group > .input-group-prepend:not(:first-child) > .input-group-text,
  .input-group > .input-group-prepend:first-child > .btn:not(:first-child),
  .input-group
    > .input-group-prepend:first-child
    > .input-group-text:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .custom-control {
    position: relative;
    display: block;
    min-height: 1.2195rem;
    padding-left: 1.5rem;
  }

  .custom-control-inline {
    display: inline-flex;
    margin-right: 1rem;
  }

  .custom-control-input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    background-color: #663399;
  }
  .custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-control-input:active ~ .custom-control-label::before {
    color: #fff;
    background-color: #bf9fdf;
  }
  .custom-control-input:disabled ~ .custom-control-label {
    color: #70657b;
  }
  .custom-control-input:disabled ~ .custom-control-label::before {
    background-color: #eee;
  }

  .custom-control-label {
    position: relative;
    margin-bottom: 0;
  }
  .custom-control-label::before {
    position: absolute;
    top: 0.10975rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    user-select: none;
    background-color: #dee2e6;
  }
  .custom-control-label::after {
    position: absolute;
    top: 0.10975rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  .custom-checkbox .custom-control-label::before {
    border-radius: 0.25rem;
  }

  .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::before {
    background-color: #663399;
  }

  .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
  }

  .custom-checkbox
    .custom-control-input:indeterminate
    ~ .custom-control-label::before {
    background-color: #663399;
  }

  .custom-checkbox
    .custom-control-input:indeterminate
    ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
  }

  .custom-checkbox
    .custom-control-input:disabled:checked
    ~ .custom-control-label::before {
    background-color: rgba(102, 51, 153, 0.5);
  }

  .custom-checkbox
    .custom-control-input:disabled:indeterminate
    ~ .custom-control-label::before {
    background-color: rgba(102, 51, 153, 0.5);
  }

  .custom-radio .custom-control-label::before {
    border-radius: 50%;
  }

  .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #663399;
  }

  .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
  }

  .custom-radio
    .custom-control-input:disabled:checked
    ~ .custom-control-label::before {
    background-color: rgba(102, 51, 153, 0.5);
  }

  .custom-select {
    display: inline-block;
    width: 100%;
    height: calc(1.9695rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    line-height: 1.5;
    color: #665c70;
    vertical-align: middle;
    background: #fff
      url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%2352495a' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
      no-repeat right 0.75rem center;
    background-size: 8px 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    appearance: none;
  }
  .custom-select:focus {
    border-color: #a679d2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(166, 121, 210, 0.5);
  }
  .custom-select:focus::-ms-value {
    color: #665c70;
    background-color: #fff;
  }
  .custom-select[multiple],
  .custom-select[size]:not([size="1"]) {
    height: auto;
    padding-right: 0.75rem;
    background-image: none;
  }
  .custom-select:disabled {
    color: #70657b;
    background-color: #eee;
  }
  .custom-select::-ms-expand {
    opacity: 0;
  }

  .custom-select-sm {
    height: calc(1.56706rem + 2px);
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 75%;
  }

  .custom-select-lg {
    height: calc(2.52438rem + 2px);
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 125%;
  }

  .custom-file {
    position: relative;
    display: inline-block;
    width: 100%;
    height: calc(1.9695rem + 2px);
    margin-bottom: 0;
  }

  .custom-file-input {
    position: relative;
    z-index: 2;
    width: 100%;
    height: calc(1.9695rem + 2px);
    margin: 0;
    opacity: 0;
  }
  .custom-file-input:focus ~ .custom-file-label {
    border-color: #a679d2;
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-file-input:focus ~ .custom-file-label::after {
    border-color: #a679d2;
  }
  .custom-file-input:disabled ~ .custom-file-label {
    background-color: #eee;
  }
  .custom-file-input:lang(en) ~ .custom-file-label::after {
    content: "Browse";
  }

  .custom-file-label {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: calc(1.9695rem + 2px);
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #665c70;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  .custom-file-label::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    height: 1.9695rem;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #665c70;
    content: "Browse";
    background-color: #eee;
    border-left: 1px solid #ced4da;
    border-radius: 0 0.25rem 0.25rem 0;
  }

  .custom-range {
    width: 100%;
    padding-left: 0;
    background-color: transparent;
    appearance: none;
  }
  .custom-range:focus {
    outline: none;
  }
  .custom-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-range:focus::-ms-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-range::-moz-focus-outer {
    border: 0;
  }
  .custom-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #663399;
    border: 0;
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .custom-range::-webkit-slider-thumb {
      transition: none;
    }
  }
  .custom-range::-webkit-slider-thumb:active {
    background-color: #bf9fdf;
  }
  .custom-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .custom-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #663399;
    border: 0;
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .custom-range::-moz-range-thumb {
      transition: none;
    }
  }
  .custom-range::-moz-range-thumb:active {
    background-color: #bf9fdf;
  }
  .custom-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .custom-range::-ms-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: 0;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    background-color: #663399;
    border: 0;
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .custom-range::-ms-thumb {
      transition: none;
    }
  }
  .custom-range::-ms-thumb:active {
    background-color: #bf9fdf;
  }
  .custom-range::-ms-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;
    border-width: 0.5rem;
  }
  .custom-range::-ms-fill-lower {
    background-color: #dee2e6;
    border-radius: 1rem;
  }
  .custom-range::-ms-fill-upper {
    margin-right: 15px;
    background-color: #dee2e6;
    border-radius: 1rem;
  }

  .custom-control-label::before,
  .custom-file-label,
  .custom-select {
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .custom-control-label::before,
    .custom-file-label,
    .custom-select {
      transition: none;
    }
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
  }
  .nav-link:hover,
  .nav-link:focus {
    text-decoration: none;
  }
  .nav-link.disabled {
    color: #70657b;
  }

  .nav-tabs {
    border-bottom: 1px solid #dee2e6;
  }
  .nav-tabs .nav-item {
    margin-bottom: -1px;
  }
  .nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-color: #eee #eee #dee2e6;
  }
  .nav-tabs .nav-link.disabled {
    color: #70657b;
    background-color: transparent;
    border-color: transparent;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #665c70;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .nav-pills .nav-link {
    border-radius: 0.25rem;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #663399;
  }

  .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }

  .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }

  .tab-content > .tab-pane {
    display: none;
  }

  .tab-content > .active {
    display: block;
  }

  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  .navbar > .container,
  .navbar > .container-fluid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-brand {
    display: inline-block;
    padding-top: 0.34756rem;
    padding-bottom: 0.34756rem;
    margin-right: 1rem;
    font-size: 1.01625rem;
    line-height: inherit;
    white-space: nowrap;
  }
  .navbar-brand:hover,
  .navbar-brand:focus {
    text-decoration: none;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }

  .navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.01625rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .navbar-toggler:hover,
  .navbar-toggler:focus {
    text-decoration: none;
  }
  .navbar-toggler:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
  }

  @media (max-width: 575.98px) {
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 576px) {
    .navbar-expand-sm {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid {
      flex-wrap: nowrap;
    }
    .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 768px) {
    .navbar-expand-md {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid {
      flex-wrap: nowrap;
    }
    .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 991.98px) {
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 992px) {
    .navbar-expand-lg {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
      flex-wrap: nowrap;
    }
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 1199.98px) {
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 1200px) {
    .navbar-expand-xl {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid {
      flex-wrap: nowrap;
    }
    .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
  }

  .navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand > .container,
  .navbar-expand > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-expand .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand > .container,
  .navbar-expand > .container-fluid {
    flex-wrap: nowrap;
  }
  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand .navbar-toggler {
    display: none;
  }

  .navbar-light .navbar-brand {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-brand:hover,
  .navbar-light .navbar-brand:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-light .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .active > .nav-link,
  .navbar-light .navbar-nav .nav-link.show,
  .navbar-light .navbar-nav .nav-link.active {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  .navbar-light .navbar-text {
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-light .navbar-text a {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-text a:hover,
  .navbar-light .navbar-text a:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-dark .navbar-brand {
    color: #fff;
  }
  .navbar-dark .navbar-brand:hover,
  .navbar-dark .navbar-brand:focus {
    color: #fff;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }
  .navbar-dark .navbar-nav .nav-link:hover,
  .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 0.75);
  }
  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25);
  }

  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .nav-link.show,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
  }

  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, 0.5);
  }
  .navbar-dark .navbar-text a {
    color: #fff;
  }
  .navbar-dark .navbar-text a:hover,
  .navbar-dark .navbar-text a:focus {
    color: #fff;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  .card > hr {
    margin-right: 0;
    margin-left: 0;
  }
  .card > .list-group:first-child .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .card > .list-group:last-child .list-group-item:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
  }

  .card-title {
    margin-bottom: 0.75rem;
  }

  .card-subtitle {
    margin-top: -0.375rem;
    margin-bottom: 0;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-link:hover {
    text-decoration: none;
  }

  .card-link + .card-link {
    margin-left: 1.25rem;
  }

  .card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }
  .card-header + .list-group .list-group-item:first-child {
    border-top: 0;
  }

  .card-footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  .card-header-tabs {
    margin-right: -0.625rem;
    margin-bottom: -0.75rem;
    margin-left: -0.625rem;
    border-bottom: 0;
  }

  .card-header-pills {
    margin-right: -0.625rem;
    margin-left: -0.625rem;
  }

  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
  }

  .card-img {
    width: 100%;
    border-radius: calc(0.25rem - 1px);
  }

  .card-img-top {
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }

  .card-img-bottom {
    width: 100%;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }

  .card-deck {
    display: flex;
    flex-direction: column;
  }
  .card-deck .card {
    margin-bottom: 15px;
  }
  @media (min-width: 576px) {
    .card-deck {
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
    .card-deck .card {
      display: flex;
      flex: 1 0 0%;
      flex-direction: column;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
    }
  }

  .card-group {
    display: flex;
    flex-direction: column;
  }
  .card-group > .card {
    margin-bottom: 15px;
  }
  @media (min-width: 576px) {
    .card-group {
      flex-flow: row wrap;
    }
    .card-group > .card {
      flex: 1 0 0%;
      margin-bottom: 0;
    }
    .card-group > .card + .card {
      margin-left: 0;
      border-left: 0;
    }
    .card-group > .card:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .card-group > .card:first-child .card-img-top,
    .card-group > .card:first-child .card-header {
      border-top-right-radius: 0;
    }
    .card-group > .card:first-child .card-img-bottom,
    .card-group > .card:first-child .card-footer {
      border-bottom-right-radius: 0;
    }
    .card-group > .card:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .card-group > .card:last-child .card-img-top,
    .card-group > .card:last-child .card-header {
      border-top-left-radius: 0;
    }
    .card-group > .card:last-child .card-img-bottom,
    .card-group > .card:last-child .card-footer {
      border-bottom-left-radius: 0;
    }
    .card-group > .card:only-child {
      border-radius: 0.25rem;
    }
    .card-group > .card:only-child .card-img-top,
    .card-group > .card:only-child .card-header {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
    .card-group > .card:only-child .card-img-bottom,
    .card-group > .card:only-child .card-footer {
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {
      border-radius: 0;
    }
    .card-group
      > .card:not(:first-child):not(:last-child):not(:only-child)
      .card-img-top,
    .card-group
      > .card:not(:first-child):not(:last-child):not(:only-child)
      .card-img-bottom,
    .card-group
      > .card:not(:first-child):not(:last-child):not(:only-child)
      .card-header,
    .card-group
      > .card:not(:first-child):not(:last-child):not(:only-child)
      .card-footer {
      border-radius: 0;
    }
  }

  .card-columns .card {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 576px) {
    .card-columns {
      column-count: 3;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1;
    }
    .card-columns .card {
      display: inline-block;
      width: 100%;
    }
  }

  .accordion .card:not(:first-of-type):not(:last-of-type) {
    border-bottom: 0;
    border-radius: 0;
  }

  .accordion .card:not(:first-of-type) .card-header:first-child {
    border-radius: 0;
  }

  .accordion .card:first-of-type {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .accordion .card:last-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #eee;
    border-radius: 0.25rem;
  }

  .breadcrumb-item + .breadcrumb-item {
    padding-left: 0.5rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #70657b;
    content: "/";
  }

  .breadcrumb-item + .breadcrumb-item:hover::before {
    text-decoration: underline;
  }

  .breadcrumb-item + .breadcrumb-item:hover::before {
    text-decoration: none;
  }

  .breadcrumb-item.active {
    color: #70657b;
  }

  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
  }

  .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #663399;
    background-color: #fff;
    border: 1px solid #dee2e6;
  }
  .page-link:hover {
    z-index: 2;
    color: #402060;
    text-decoration: none;
    background-color: #eee;
    border-color: #dee2e6;
  }
  .page-link:focus {
    z-index: 2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .page-link:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }

  .page-item.disabled .page-link {
    color: #70657b;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
  }

  .pagination-lg .page-link {
    padding: 0.75rem 1.5rem;
    font-size: 1.01625rem;
    line-height: 1.5;
  }

  .pagination-lg .page-item:first-child .page-link {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  .pagination-lg .page-item:last-child .page-link {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .pagination-sm .page-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.71137rem;
    line-height: 1.5;
  }

  .pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }

  .pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }

  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }
  .badge:empty {
    display: none;
  }

  .btn .badge {
    position: relative;
    top: -1px;
  }

  .badge-pill {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
  }

  .badge-primary {
    color: #fff;
    background-color: #663399;
  }
  .badge-primary[href]:hover,
  .badge-primary[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #4d2673;
  }

  .badge-secondary {
    color: #fff;
    background-color: #52495a;
  }
  .badge-secondary[href]:hover,
  .badge-secondary[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #38323e;
  }

  .badge-success {
    color: #fff;
    background-color: #4caf50;
  }
  .badge-success[href]:hover,
  .badge-success[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #3d8b40;
  }

  .badge-info {
    color: #fff;
    background-color: #003473;
  }
  .badge-info[href]:hover,
  .badge-info[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #001d40;
  }

  .badge-warning {
    color: #47404f;
    background-color: #ffc107;
  }
  .badge-warning[href]:hover,
  .badge-warning[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #d39e00;
  }

  .badge-danger {
    color: #fff;
    background-color: #f44336;
  }
  .badge-danger[href]:hover,
  .badge-danger[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #ea1c0d;
  }

  .badge-light {
    color: #47404f;
    background-color: #bbb;
  }
  .badge-light[href]:hover,
  .badge-light[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #a2a2a2;
  }

  .badge-dark {
    color: #fff;
    background-color: #47404f;
  }
  .badge-dark[href]:hover,
  .badge-dark[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #2e2932;
  }

  .badge-gray-100 {
    color: #47404f;
    background-color: #f8f9fa;
  }
  .badge-gray-100[href]:hover,
  .badge-gray-100[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #dae0e5;
  }

  .badge-gray-200 {
    color: #47404f;
    background-color: #eee;
  }
  .badge-gray-200[href]:hover,
  .badge-gray-200[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #d5d5d5;
  }

  .badge-gray-300 {
    color: #47404f;
    background-color: #dee2e6;
  }
  .badge-gray-300[href]:hover,
  .badge-gray-300[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #c1c9d0;
  }

  .badge-gray-400 {
    color: #47404f;
    background-color: #ced4da;
  }
  .badge-gray-400[href]:hover,
  .badge-gray-400[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #b1bbc4;
  }

  .badge-gray-500 {
    color: #47404f;
    background-color: #bbb;
  }
  .badge-gray-500[href]:hover,
  .badge-gray-500[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #a2a2a2;
  }

  .badge-gray-600 {
    color: #fff;
    background-color: #70657b;
  }
  .badge-gray-600[href]:hover,
  .badge-gray-600[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #574e5f;
  }

  .badge-gray-700 {
    color: #fff;
    background-color: #665c70;
  }
  .badge-gray-700[href]:hover,
  .badge-gray-700[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #4d4554;
  }

  .badge-gray-800 {
    color: #fff;
    background-color: #52495a;
  }
  .badge-gray-800[href]:hover,
  .badge-gray-800[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #38323e;
  }

  .badge-gray-900 {
    color: #fff;
    background-color: #47404f;
  }
  .badge-gray-900[href]:hover,
  .badge-gray-900[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #2e2932;
  }

  .jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #eee;
    border-radius: 0.3rem;
  }
  @media (min-width: 576px) {
    .jumbotron {
      padding: 4rem 2rem;
    }
  }

  .jumbotron-fluid {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
  }

  .alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .alert-heading {
    color: inherit;
  }

  .alert-link {
    font-weight: 700;
  }

  .alert-dismissible {
    padding-right: 3.7195rem;
  }
  .alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.75rem 1.25rem;
    color: inherit;
  }

  .alert-primary {
    color: #351b50;
    background-color: #e0d6eb;
    border-color: #d4c6e2;
  }
  .alert-primary hr {
    border-top-color: #c7b5d9;
  }
  .alert-primary .alert-link {
    color: #1c0e2a;
  }

  .alert-secondary {
    color: #2a262f;
    background-color: #dcdbde;
    border-color: #ceccd1;
  }
  .alert-secondary hr {
    border-top-color: #c1bfc5;
  }
  .alert-secondary .alert-link {
    color: #110f13;
  }

  .alert-success {
    color: #285b2a;
    background-color: #dbefdc;
    border-color: #cde9ce;
  }
  .alert-success hr {
    border-top-color: #bbe1bd;
  }
  .alert-success .alert-link {
    color: #18381a;
  }

  .alert-info {
    color: #001b3c;
    background-color: #ccd6e3;
    border-color: #b8c6d8;
  }
  .alert-info hr {
    border-top-color: #a8b9cf;
  }
  .alert-info .alert-link {
    color: #000409;
  }

  .alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
  .alert-warning hr {
    border-top-color: #ffe8a1;
  }
  .alert-warning .alert-link {
    color: #533f03;
  }

  .alert-danger {
    color: #7f231c;
    background-color: #fdd9d7;
    border-color: #fccac7;
  }
  .alert-danger hr {
    border-top-color: #fbb3af;
  }
  .alert-danger .alert-link {
    color: #551713;
  }

  .alert-light {
    color: #616161;
    background-color: #f1f1f1;
    border-color: #ececec;
  }
  .alert-light hr {
    border-top-color: #dfdfdf;
  }
  .alert-light .alert-link {
    color: #484848;
  }

  .alert-dark {
    color: #252129;
    background-color: #dad9dc;
    border-color: #cccace;
  }
  .alert-dark hr {
    border-top-color: #bfbdc2;
  }
  .alert-dark .alert-link {
    color: #0c0a0d;
  }

  .alert-gray-100 {
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
  }
  .alert-gray-100 hr {
    border-top-color: #ececf6;
  }
  .alert-gray-100 .alert-link {
    color: #686868;
  }

  .alert-gray-200 {
    color: #7c7c7c;
    background-color: #fcfcfc;
    border-color: #fafafa;
  }
  .alert-gray-200 hr {
    border-top-color: #ededed;
  }
  .alert-gray-200 .alert-link {
    color: #636363;
  }

  .alert-gray-300 {
    color: #737678;
    background-color: #f8f9fa;
    border-color: #f6f7f8;
  }
  .alert-gray-300 hr {
    border-top-color: #e8eaed;
  }
  .alert-gray-300 .alert-link {
    color: #5a5c5e;
  }

  .alert-gray-400 {
    color: #6b6e71;
    background-color: #f5f6f8;
    border-color: #f1f3f5;
  }
  .alert-gray-400 hr {
    border-top-color: #e2e6ea;
  }
  .alert-gray-400 .alert-link {
    color: #525557;
  }

  .alert-gray-500 {
    color: #616161;
    background-color: #f1f1f1;
    border-color: #ececec;
  }
  .alert-gray-500 hr {
    border-top-color: #dfdfdf;
  }
  .alert-gray-500 .alert-link {
    color: #484848;
  }

  .alert-gray-600 {
    color: #3a3540;
    background-color: #e2e0e5;
    border-color: #d7d4da;
  }
  .alert-gray-600 hr {
    border-top-color: #cac6ce;
  }
  .alert-gray-600 .alert-link {
    color: #211e24;
  }

  .alert-gray-700 {
    color: #35303a;
    background-color: #e0dee2;
    border-color: #d4d1d7;
  }
  .alert-gray-700 hr {
    border-top-color: #c7c3cb;
  }
  .alert-gray-700 .alert-link {
    color: #1c191e;
  }

  .alert-gray-800 {
    color: #2a262f;
    background-color: #dcdbde;
    border-color: #ceccd1;
  }
  .alert-gray-800 hr {
    border-top-color: #c1bfc5;
  }
  .alert-gray-800 .alert-link {
    color: #110f13;
  }

  .alert-gray-900 {
    color: #252129;
    background-color: #dad9dc;
    border-color: #cccace;
  }
  .alert-gray-900 hr {
    border-top-color: #bfbdc2;
  }
  .alert-gray-900 .alert-link {
    color: #0c0a0d;
  }

  @keyframes progress-bar-stripes {
    from {
      background-position: 1rem 0;
    }
    to {
      background-position: 0 0;
    }
  }

  .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.60975rem;
    background-color: #eee;
    border-radius: 0.25rem;
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #663399;
    transition: width 0.6s ease;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .progress-bar {
      transition: none;
    }
  }

  .progress-bar-striped {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  }

  .progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite;
  }

  .media {
    display: flex;
    align-items: flex-start;
  }

  .media-body {
    flex: 1;
  }

  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
  }

  .list-group-item-action {
    width: 100%;
    color: #665c70;
    text-align: inherit;
  }
  .list-group-item-action:hover,
  .list-group-item-action:focus {
    color: #665c70;
    text-decoration: none;
    background-color: #f8f9fa;
  }
  .list-group-item-action:active {
    color: #47404f;
    background-color: #eee;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .list-group-item:hover,
  .list-group-item:focus {
    z-index: 1;
    text-decoration: none;
  }
  .list-group-item.disabled,
  .list-group-item:disabled {
    color: #70657b;
    background-color: #fff;
  }
  .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }

  .list-group-flush .list-group-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }

  .list-group-flush:first-child .list-group-item:first-child {
    border-top: 0;
  }

  .list-group-flush:last-child .list-group-item:last-child {
    border-bottom: 0;
  }

  .list-group-item-primary {
    color: #351b50;
    background-color: #d4c6e2;
  }
  .list-group-item-primary.list-group-item-action:hover,
  .list-group-item-primary.list-group-item-action:focus {
    color: #351b50;
    background-color: #c7b5d9;
  }
  .list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #351b50;
    border-color: #351b50;
  }

  .list-group-item-secondary {
    color: #2a262f;
    background-color: #ceccd1;
  }
  .list-group-item-secondary.list-group-item-action:hover,
  .list-group-item-secondary.list-group-item-action:focus {
    color: #2a262f;
    background-color: #c1bfc5;
  }
  .list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #2a262f;
    border-color: #2a262f;
  }

  .list-group-item-success {
    color: #285b2a;
    background-color: #cde9ce;
  }
  .list-group-item-success.list-group-item-action:hover,
  .list-group-item-success.list-group-item-action:focus {
    color: #285b2a;
    background-color: #bbe1bd;
  }
  .list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #285b2a;
    border-color: #285b2a;
  }

  .list-group-item-info {
    color: #001b3c;
    background-color: #b8c6d8;
  }
  .list-group-item-info.list-group-item-action:hover,
  .list-group-item-info.list-group-item-action:focus {
    color: #001b3c;
    background-color: #a8b9cf;
  }
  .list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #001b3c;
    border-color: #001b3c;
  }

  .list-group-item-warning {
    color: #856404;
    background-color: #ffeeba;
  }
  .list-group-item-warning.list-group-item-action:hover,
  .list-group-item-warning.list-group-item-action:focus {
    color: #856404;
    background-color: #ffe8a1;
  }
  .list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #856404;
    border-color: #856404;
  }

  .list-group-item-danger {
    color: #7f231c;
    background-color: #fccac7;
  }
  .list-group-item-danger.list-group-item-action:hover,
  .list-group-item-danger.list-group-item-action:focus {
    color: #7f231c;
    background-color: #fbb3af;
  }
  .list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #7f231c;
    border-color: #7f231c;
  }

  .list-group-item-light {
    color: #616161;
    background-color: #ececec;
  }
  .list-group-item-light.list-group-item-action:hover,
  .list-group-item-light.list-group-item-action:focus {
    color: #616161;
    background-color: #dfdfdf;
  }
  .list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #616161;
    border-color: #616161;
  }

  .list-group-item-dark {
    color: #252129;
    background-color: #cccace;
  }
  .list-group-item-dark.list-group-item-action:hover,
  .list-group-item-dark.list-group-item-action:focus {
    color: #252129;
    background-color: #bfbdc2;
  }
  .list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #252129;
    border-color: #252129;
  }

  .list-group-item-gray-100 {
    color: #818182;
    background-color: #fdfdfe;
  }
  .list-group-item-gray-100.list-group-item-action:hover,
  .list-group-item-gray-100.list-group-item-action:focus {
    color: #818182;
    background-color: #ececf6;
  }
  .list-group-item-gray-100.list-group-item-action.active {
    color: #fff;
    background-color: #818182;
    border-color: #818182;
  }

  .list-group-item-gray-200 {
    color: #7c7c7c;
    background-color: #fafafa;
  }
  .list-group-item-gray-200.list-group-item-action:hover,
  .list-group-item-gray-200.list-group-item-action:focus {
    color: #7c7c7c;
    background-color: #ededed;
  }
  .list-group-item-gray-200.list-group-item-action.active {
    color: #fff;
    background-color: #7c7c7c;
    border-color: #7c7c7c;
  }

  .list-group-item-gray-300 {
    color: #737678;
    background-color: #f6f7f8;
  }
  .list-group-item-gray-300.list-group-item-action:hover,
  .list-group-item-gray-300.list-group-item-action:focus {
    color: #737678;
    background-color: #e8eaed;
  }
  .list-group-item-gray-300.list-group-item-action.active {
    color: #fff;
    background-color: #737678;
    border-color: #737678;
  }

  .list-group-item-gray-400 {
    color: #6b6e71;
    background-color: #f1f3f5;
  }
  .list-group-item-gray-400.list-group-item-action:hover,
  .list-group-item-gray-400.list-group-item-action:focus {
    color: #6b6e71;
    background-color: #e2e6ea;
  }
  .list-group-item-gray-400.list-group-item-action.active {
    color: #fff;
    background-color: #6b6e71;
    border-color: #6b6e71;
  }

  .list-group-item-gray-500 {
    color: #616161;
    background-color: #ececec;
  }
  .list-group-item-gray-500.list-group-item-action:hover,
  .list-group-item-gray-500.list-group-item-action:focus {
    color: #616161;
    background-color: #dfdfdf;
  }
  .list-group-item-gray-500.list-group-item-action.active {
    color: #fff;
    background-color: #616161;
    border-color: #616161;
  }

  .list-group-item-gray-600 {
    color: #3a3540;
    background-color: #d7d4da;
  }
  .list-group-item-gray-600.list-group-item-action:hover,
  .list-group-item-gray-600.list-group-item-action:focus {
    color: #3a3540;
    background-color: #cac6ce;
  }
  .list-group-item-gray-600.list-group-item-action.active {
    color: #fff;
    background-color: #3a3540;
    border-color: #3a3540;
  }

  .list-group-item-gray-700 {
    color: #35303a;
    background-color: #d4d1d7;
  }
  .list-group-item-gray-700.list-group-item-action:hover,
  .list-group-item-gray-700.list-group-item-action:focus {
    color: #35303a;
    background-color: #c7c3cb;
  }
  .list-group-item-gray-700.list-group-item-action.active {
    color: #fff;
    background-color: #35303a;
    border-color: #35303a;
  }

  .list-group-item-gray-800 {
    color: #2a262f;
    background-color: #ceccd1;
  }
  .list-group-item-gray-800.list-group-item-action:hover,
  .list-group-item-gray-800.list-group-item-action:focus {
    color: #2a262f;
    background-color: #c1bfc5;
  }
  .list-group-item-gray-800.list-group-item-action.active {
    color: #fff;
    background-color: #2a262f;
    border-color: #2a262f;
  }

  .list-group-item-gray-900 {
    color: #252129;
    background-color: #cccace;
  }
  .list-group-item-gray-900.list-group-item-action:hover,
  .list-group-item-gray-900.list-group-item-action:focus {
    color: #252129;
    background-color: #bfbdc2;
  }
  .list-group-item-gray-900.list-group-item-action.active {
    color: #fff;
    background-color: #252129;
    border-color: #252129;
  }

  .close {
    float: right;
    font-size: 1.2195rem;
    font-weight: 700;
    line-height: 1;
    color: black;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
  }
  .close:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .close:not(:disabled):not(.disabled):hover,
  .close:not(:disabled):not(.disabled):focus {
    color: black;
    text-decoration: none;
    opacity: 0.75;
  }

  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
  }

  .modal-open {
    overflow: hidden;
  }
  .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }
  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -25%);
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }
  .modal.show .modal-dialog {
    transform: translate(0, 0);
  }

  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
  }
  .modal-dialog-centered::before {
    display: block;
    height: calc(100vh - (0.5rem * 2));
    content: "";
  }

  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: black;
  }
  .modal-backdrop.fade {
    opacity: 0;
  }
  .modal-backdrop.show {
    opacity: 0.5;
  }

  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  .modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
  }

  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }

  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #eee;
  }
  .modal-footer > :not(:first-child) {
    margin-left: 0.25rem;
  }
  .modal-footer > :not(:last-child) {
    margin-right: 0.25rem;
  }

  .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
    .modal-dialog-centered {
      min-height: calc(100% - (1.75rem * 2));
    }
    .modal-dialog-centered::before {
      height: calc(100vh - (1.75rem * 2));
    }
    .modal-sm {
      max-width: 300px;
    }
  }

  @media (min-width: 992px) {
    .modal-lg {
      max-width: 800px;
    }
  }

  .tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.71137rem;
    word-wrap: break-word;
    opacity: 0;
  }
  .tooltip.show {
    opacity: 0.9;
  }
  .tooltip .arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
  }
  .tooltip .arrow::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid;
  }

  .bs-tooltip-top,
  .bs-tooltip-auto[x-placement^="top"] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-top .arrow,
  .bs-tooltip-auto[x-placement^="top"] .arrow {
    bottom: 0;
  }
  .bs-tooltip-top .arrow::before,
  .bs-tooltip-auto[x-placement^="top"] .arrow::before {
    top: 0;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: black;
  }

  .bs-tooltip-right,
  .bs-tooltip-auto[x-placement^="right"] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-right .arrow,
  .bs-tooltip-auto[x-placement^="right"] .arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-right .arrow::before,
  .bs-tooltip-auto[x-placement^="right"] .arrow::before {
    right: 0;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: black;
  }

  .bs-tooltip-bottom,
  .bs-tooltip-auto[x-placement^="bottom"] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-bottom .arrow,
  .bs-tooltip-auto[x-placement^="bottom"] .arrow {
    top: 0;
  }
  .bs-tooltip-bottom .arrow::before,
  .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    bottom: 0;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: black;
  }

  .bs-tooltip-left,
  .bs-tooltip-auto[x-placement^="left"] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-left .arrow,
  .bs-tooltip-auto[x-placement^="left"] .arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-left .arrow::before,
  .bs-tooltip-auto[x-placement^="left"] .arrow::before {
    left: 0;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: black;
  }

  .tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: black;
    border-radius: 0.25rem;
  }

  .toast {
    max-width: 350px;
    overflow: hidden;
    font-size: 0.875rem;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
  }
  .toast:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  .toast.showing {
    opacity: 1;
  }
  .toast.show {
    display: block;
    opacity: 1;
  }
  .toast.hide {
    display: none;
  }

  .toast-header {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    color: #70657b;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .toast-body {
    padding: 0.75rem;
  }

  .popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.71137rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
  }
  .popover .arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
    margin: 0 0.3rem;
  }
  .popover .arrow::before,
  .popover .arrow::after {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
  }

  .bs-popover-top,
  .bs-popover-auto[x-placement^="top"] {
    margin-bottom: 0.5rem;
  }
  .bs-popover-top .arrow,
  .bs-popover-auto[x-placement^="top"] .arrow {
    bottom: calc((0.5rem + 1px) * -1);
  }
  .bs-popover-top .arrow::before,
  .bs-popover-auto[x-placement^="top"] .arrow::before,
  .bs-popover-top .arrow::after,
  .bs-popover-auto[x-placement^="top"] .arrow::after {
    border-width: 0.5rem 0.5rem 0;
  }
  .bs-popover-top .arrow::before,
  .bs-popover-auto[x-placement^="top"] .arrow::before {
    bottom: 0;
    border-top-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-top .arrow::after,
  .bs-popover-auto[x-placement^="top"] .arrow::after {
    bottom: 1px;
    border-top-color: #fff;
  }

  .bs-popover-right,
  .bs-popover-auto[x-placement^="right"] {
    margin-left: 0.5rem;
  }
  .bs-popover-right .arrow,
  .bs-popover-auto[x-placement^="right"] .arrow {
    left: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0;
  }
  .bs-popover-right .arrow::before,
  .bs-popover-auto[x-placement^="right"] .arrow::before,
  .bs-popover-right .arrow::after,
  .bs-popover-auto[x-placement^="right"] .arrow::after {
    border-width: 0.5rem 0.5rem 0.5rem 0;
  }
  .bs-popover-right .arrow::before,
  .bs-popover-auto[x-placement^="right"] .arrow::before {
    left: 0;
    border-right-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-right .arrow::after,
  .bs-popover-auto[x-placement^="right"] .arrow::after {
    left: 1px;
    border-right-color: #fff;
  }

  .bs-popover-bottom,
  .bs-popover-auto[x-placement^="bottom"] {
    margin-top: 0.5rem;
  }
  .bs-popover-bottom .arrow,
  .bs-popover-auto[x-placement^="bottom"] .arrow {
    top: calc((0.5rem + 1px) * -1);
  }
  .bs-popover-bottom .arrow::before,
  .bs-popover-auto[x-placement^="bottom"] .arrow::before,
  .bs-popover-bottom .arrow::after,
  .bs-popover-auto[x-placement^="bottom"] .arrow::after {
    border-width: 0 0.5rem 0.5rem 0.5rem;
  }
  .bs-popover-bottom .arrow::before,
  .bs-popover-auto[x-placement^="bottom"] .arrow::before {
    top: 0;
    border-bottom-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-bottom .arrow::after,
  .bs-popover-auto[x-placement^="bottom"] .arrow::after {
    top: 1px;
    border-bottom-color: #fff;
  }
  .bs-popover-bottom .popover-header::before,
  .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: "";
    border-bottom: 1px solid #f7f7f7;
  }

  .bs-popover-left,
  .bs-popover-auto[x-placement^="left"] {
    margin-right: 0.5rem;
  }
  .bs-popover-left .arrow,
  .bs-popover-auto[x-placement^="left"] .arrow {
    right: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0;
  }
  .bs-popover-left .arrow::before,
  .bs-popover-auto[x-placement^="left"] .arrow::before,
  .bs-popover-left .arrow::after,
  .bs-popover-auto[x-placement^="left"] .arrow::after {
    border-width: 0.5rem 0 0.5rem 0.5rem;
  }
  .bs-popover-left .arrow::before,
  .bs-popover-auto[x-placement^="left"] .arrow::before {
    right: 0;
    border-left-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-left .arrow::after,
  .bs-popover-auto[x-placement^="left"] .arrow::after {
    right: 1px;
    border-left-color: #fff;
  }

  .popover-header {
    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 0.813rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }
  .popover-header:empty {
    display: none;
  }

  .popover-body {
    padding: 0.5rem 0.75rem;
    color: #47404f;
  }

  .carousel {
    position: relative;
  }

  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .carousel-item {
    position: relative;
    display: none;
    align-items: center;
    width: 100%;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    display: block;
    transition: transform 0.6s ease;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .carousel-item.active,
    .carousel-item-next,
    .carousel-item-prev {
      transition: none;
    }
  }

  .carousel-item-next,
  .carousel-item-prev {
    position: absolute;
    top: 0;
  }

  .carousel-item-next.carousel-item-left,
  .carousel-item-prev.carousel-item-right {
    transform: translateX(0);
  }
  @supports (transform-style: preserve-3d) {
    .carousel-item-next.carousel-item-left,
    .carousel-item-prev.carousel-item-right {
      transform: translate3d(0, 0, 0);
    }
  }

  .carousel-item-next,
  .active.carousel-item-right {
    transform: translateX(100%);
  }
  @supports (transform-style: preserve-3d) {
    .carousel-item-next,
    .active.carousel-item-right {
      transform: translate3d(100%, 0, 0);
    }
  }

  .carousel-item-prev,
  .active.carousel-item-left {
    transform: translateX(-100%);
  }
  @supports (transform-style: preserve-3d) {
    .carousel-item-prev,
    .active.carousel-item-left {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .carousel-fade .carousel-item {
    opacity: 0;
    transition-duration: 0.6s;
    transition-property: opacity;
  }

  .carousel-fade .carousel-item.active,
  .carousel-fade .carousel-item-next.carousel-item-left,
  .carousel-fade .carousel-item-prev.carousel-item-right {
    opacity: 1;
  }

  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-right {
    opacity: 0;
  }

  .carousel-fade .carousel-item-next,
  .carousel-fade .carousel-item-prev,
  .carousel-fade .carousel-item.active,
  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-prev {
    transform: translateX(0);
  }
  @supports (transform-style: preserve-3d) {
    .carousel-fade .carousel-item-next,
    .carousel-fade .carousel-item-prev,
    .carousel-fade .carousel-item.active,
    .carousel-fade .active.carousel-item-left,
    .carousel-fade .active.carousel-item-prev {
      transform: translate3d(0, 0, 0);
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: 0.5;
  }
  .carousel-control-prev:hover,
  .carousel-control-prev:focus,
  .carousel-control-next:hover,
  .carousel-control-next:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: 0.9;
  }

  .carousel-control-prev {
    left: 0;
  }

  .carousel-control-next {
    right: 0;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }

  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  }
  .carousel-indicators li {
    position: relative;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .carousel-indicators li::before {
    position: absolute;
    top: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: "";
  }
  .carousel-indicators li::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: "";
  }
  .carousel-indicators .active {
    background-color: #fff;
  }

  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }

  .align-baseline {
    vertical-align: baseline !important;
  }

  .align-top {
    vertical-align: top !important;
  }

  .align-middle {
    vertical-align: middle !important;
  }

  .align-bottom {
    vertical-align: bottom !important;
  }

  .align-text-bottom {
    vertical-align: text-bottom !important;
  }

  .align-text-top {
    vertical-align: text-top !important;
  }

  .bg-primary {
    background-color: #663399 !important;
  }

  a.bg-primary:hover,
  a.bg-primary:focus,
  button.bg-primary:hover,
  button.bg-primary:focus {
    background-color: #4d2673 !important;
  }

  .bg-secondary {
    background-color: #52495a !important;
  }

  a.bg-secondary:hover,
  a.bg-secondary:focus,
  button.bg-secondary:hover,
  button.bg-secondary:focus {
    background-color: #38323e !important;
  }

  .bg-success {
    background-color: #4caf50 !important;
  }

  a.bg-success:hover,
  a.bg-success:focus,
  button.bg-success:hover,
  button.bg-success:focus {
    background-color: #3d8b40 !important;
  }

  .bg-info {
    background-color: #003473 !important;
  }

  a.bg-info:hover,
  a.bg-info:focus,
  button.bg-info:hover,
  button.bg-info:focus {
    background-color: #001d40 !important;
  }

  .bg-warning {
    background-color: #ffc107 !important;
  }

  a.bg-warning:hover,
  a.bg-warning:focus,
  button.bg-warning:hover,
  button.bg-warning:focus {
    background-color: #d39e00 !important;
  }

  .bg-danger {
    background-color: #f44336 !important;
  }

  a.bg-danger:hover,
  a.bg-danger:focus,
  button.bg-danger:hover,
  button.bg-danger:focus {
    background-color: #ea1c0d !important;
  }

  .bg-light {
    background-color: #bbb !important;
  }

  a.bg-light:hover,
  a.bg-light:focus,
  button.bg-light:hover,
  button.bg-light:focus {
    background-color: #a2a2a2 !important;
  }

  .bg-dark {
    background-color: #47404f !important;
  }

  a.bg-dark:hover,
  a.bg-dark:focus,
  button.bg-dark:hover,
  button.bg-dark:focus {
    background-color: #2e2932 !important;
  }

  .bg-gray-100 {
    background-color: #f8f9fa !important;
  }

  a.bg-gray-100:hover,
  a.bg-gray-100:focus,
  button.bg-gray-100:hover,
  button.bg-gray-100:focus {
    background-color: #dae0e5 !important;
  }

  .bg-gray-200 {
    background-color: #eee !important;
  }

  a.bg-gray-200:hover,
  a.bg-gray-200:focus,
  button.bg-gray-200:hover,
  button.bg-gray-200:focus {
    background-color: #d5d5d5 !important;
  }

  .bg-gray-300 {
    background-color: #dee2e6 !important;
  }

  a.bg-gray-300:hover,
  a.bg-gray-300:focus,
  button.bg-gray-300:hover,
  button.bg-gray-300:focus {
    background-color: #c1c9d0 !important;
  }

  .bg-gray-400 {
    background-color: #ced4da !important;
  }

  a.bg-gray-400:hover,
  a.bg-gray-400:focus,
  button.bg-gray-400:hover,
  button.bg-gray-400:focus {
    background-color: #b1bbc4 !important;
  }

  .bg-gray-500 {
    background-color: #bbb !important;
  }

  a.bg-gray-500:hover,
  a.bg-gray-500:focus,
  button.bg-gray-500:hover,
  button.bg-gray-500:focus {
    background-color: #a2a2a2 !important;
  }

  .bg-gray-600 {
    background-color: #70657b !important;
  }

  a.bg-gray-600:hover,
  a.bg-gray-600:focus,
  button.bg-gray-600:hover,
  button.bg-gray-600:focus {
    background-color: #574e5f !important;
  }

  .bg-gray-700 {
    background-color: #665c70 !important;
  }

  a.bg-gray-700:hover,
  a.bg-gray-700:focus,
  button.bg-gray-700:hover,
  button.bg-gray-700:focus {
    background-color: #4d4554 !important;
  }

  .bg-gray-800 {
    background-color: #52495a !important;
  }

  a.bg-gray-800:hover,
  a.bg-gray-800:focus,
  button.bg-gray-800:hover,
  button.bg-gray-800:focus {
    background-color: #38323e !important;
  }

  .bg-gray-900 {
    background-color: #47404f !important;
  }

  a.bg-gray-900:hover,
  a.bg-gray-900:focus,
  button.bg-gray-900:hover,
  button.bg-gray-900:focus {
    background-color: #2e2932 !important;
  }

  .bg-white {
    background-color: #fff !important;
  }

  .bg-transparent {
    background-color: transparent !important;
  }

  .border {
    border: 1px solid #dee2e6 !important;
  }

  .border-top {
    border-top: 1px solid #dee2e6 !important;
  }

  .border-right {
    border-right: 1px solid #dee2e6 !important;
  }

  .border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
  }

  .border-left {
    border-left: 1px solid #dee2e6 !important;
  }

  .border-0 {
    border: 0 !important;
  }

  .border-top-0 {
    border-top: 0 !important;
  }

  .border-right-0 {
    border-right: 0 !important;
  }

  .border-bottom-0 {
    border-bottom: 0 !important;
  }

  .border-left-0 {
    border-left: 0 !important;
  }

  .border-primary {
    border-color: #663399 !important;
  }

  .border-secondary {
    border-color: #52495a !important;
  }

  .border-success {
    border-color: #4caf50 !important;
  }

  .border-info {
    border-color: #003473 !important;
  }

  .border-warning {
    border-color: #ffc107 !important;
  }

  .border-danger {
    border-color: #f44336 !important;
  }

  .border-light {
    border-color: #bbb !important;
  }

  .border-dark {
    border-color: #47404f !important;
  }

  .border-gray-100 {
    border-color: #f8f9fa !important;
  }

  .border-gray-200 {
    border-color: #eee !important;
  }

  .border-gray-300 {
    border-color: #dee2e6 !important;
  }

  .border-gray-400 {
    border-color: #ced4da !important;
  }

  .border-gray-500 {
    border-color: #bbb !important;
  }

  .border-gray-600 {
    border-color: #70657b !important;
  }

  .border-gray-700 {
    border-color: #665c70 !important;
  }

  .border-gray-800 {
    border-color: #52495a !important;
  }

  .border-gray-900 {
    border-color: #47404f !important;
  }

  .border-white {
    border-color: #fff !important;
  }

  .rounded {
    border-radius: 0.25rem !important;
  }

  .rounded-top {
    border-top-left-radius: 0.25rem !important;
    border-top-right-radius: 0.25rem !important;
  }

  .rounded-right {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }

  .rounded-bottom {
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }

  .rounded-left {
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .rounded-0 {
    border-radius: 0 !important;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }

  .d-none {
    display: none !important;
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-row {
    display: table-row !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: flex !important;
  }

  .d-inline-flex {
    display: inline-flex !important;
  }

  @media (min-width: 576px) {
    .d-sm-none {
      display: none !important;
    }
    .d-sm-inline {
      display: inline !important;
    }
    .d-sm-inline-block {
      display: inline-block !important;
    }
    .d-sm-block {
      display: block !important;
    }
    .d-sm-table {
      display: table !important;
    }
    .d-sm-table-row {
      display: table-row !important;
    }
    .d-sm-table-cell {
      display: table-cell !important;
    }
    .d-sm-flex {
      display: flex !important;
    }
    .d-sm-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 768px) {
    .d-md-none {
      display: none !important;
    }
    .d-md-inline {
      display: inline !important;
    }
    .d-md-inline-block {
      display: inline-block !important;
    }
    .d-md-block {
      display: block !important;
    }
    .d-md-table {
      display: table !important;
    }
    .d-md-table-row {
      display: table-row !important;
    }
    .d-md-table-cell {
      display: table-cell !important;
    }
    .d-md-flex {
      display: flex !important;
    }
    .d-md-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 992px) {
    .d-lg-none {
      display: none !important;
    }
    .d-lg-inline {
      display: inline !important;
    }
    .d-lg-inline-block {
      display: inline-block !important;
    }
    .d-lg-block {
      display: block !important;
    }
    .d-lg-table {
      display: table !important;
    }
    .d-lg-table-row {
      display: table-row !important;
    }
    .d-lg-table-cell {
      display: table-cell !important;
    }
    .d-lg-flex {
      display: flex !important;
    }
    .d-lg-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 1200px) {
    .d-xl-none {
      display: none !important;
    }
    .d-xl-inline {
      display: inline !important;
    }
    .d-xl-inline-block {
      display: inline-block !important;
    }
    .d-xl-block {
      display: block !important;
    }
    .d-xl-table {
      display: table !important;
    }
    .d-xl-table-row {
      display: table-row !important;
    }
    .d-xl-table-cell {
      display: table-cell !important;
    }
    .d-xl-flex {
      display: flex !important;
    }
    .d-xl-inline-flex {
      display: inline-flex !important;
    }
  }

  @media print {
    .d-print-none {
      display: none !important;
    }
    .d-print-inline {
      display: inline !important;
    }
    .d-print-inline-block {
      display: inline-block !important;
    }
    .d-print-block {
      display: block !important;
    }
    .d-print-table {
      display: table !important;
    }
    .d-print-table-row {
      display: table-row !important;
    }
    .d-print-table-cell {
      display: table-cell !important;
    }
    .d-print-flex {
      display: flex !important;
    }
    .d-print-inline-flex {
      display: inline-flex !important;
    }
  }

  .embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
  .embed-responsive::before {
    display: block;
    content: "";
  }
  .embed-responsive .embed-responsive-item,
  .embed-responsive iframe,
  .embed-responsive embed,
  .embed-responsive object,
  .embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .embed-responsive-21by9::before {
    padding-top: 42.85714%;
  }

  .embed-responsive-16by9::before {
    padding-top: 56.25%;
  }

  .embed-responsive-4by3::before {
    padding-top: 75%;
  }

  .embed-responsive-1by1::before {
    padding-top: 100%;
  }

  .flex-row {
    flex-direction: row !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-wrap {
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-fill {
    flex: 1 1 auto !important;
  }

  .flex-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-start {
    justify-content: flex-start !important;
  }

  .justify-content-end {
    justify-content: flex-end !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .justify-content-around {
    justify-content: space-around !important;
  }

  .align-items-start {
    align-items: flex-start !important;
  }

  .align-items-end {
    align-items: flex-end !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .align-items-baseline {
    align-items: baseline !important;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }

  .align-content-start {
    align-content: flex-start !important;
  }

  .align-content-end {
    align-content: flex-end !important;
  }

  .align-content-center {
    align-content: center !important;
  }

  .align-content-between {
    align-content: space-between !important;
  }

  .align-content-around {
    align-content: space-around !important;
  }

  .align-content-stretch {
    align-content: stretch !important;
  }

  .align-self-auto {
    align-self: auto !important;
  }

  .align-self-start {
    align-self: flex-start !important;
  }

  .align-self-end {
    align-self: flex-end !important;
  }

  .align-self-center {
    align-self: center !important;
  }

  .align-self-baseline {
    align-self: baseline !important;
  }

  .align-self-stretch {
    align-self: stretch !important;
  }

  @media (min-width: 576px) {
    .flex-sm-row {
      flex-direction: row !important;
    }
    .flex-sm-column {
      flex-direction: column !important;
    }
    .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-sm-wrap {
      flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-sm-fill {
      flex: 1 1 auto !important;
    }
    .flex-sm-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-sm-start {
      justify-content: flex-start !important;
    }
    .justify-content-sm-end {
      justify-content: flex-end !important;
    }
    .justify-content-sm-center {
      justify-content: center !important;
    }
    .justify-content-sm-between {
      justify-content: space-between !important;
    }
    .justify-content-sm-around {
      justify-content: space-around !important;
    }
    .align-items-sm-start {
      align-items: flex-start !important;
    }
    .align-items-sm-end {
      align-items: flex-end !important;
    }
    .align-items-sm-center {
      align-items: center !important;
    }
    .align-items-sm-baseline {
      align-items: baseline !important;
    }
    .align-items-sm-stretch {
      align-items: stretch !important;
    }
    .align-content-sm-start {
      align-content: flex-start !important;
    }
    .align-content-sm-end {
      align-content: flex-end !important;
    }
    .align-content-sm-center {
      align-content: center !important;
    }
    .align-content-sm-between {
      align-content: space-between !important;
    }
    .align-content-sm-around {
      align-content: space-around !important;
    }
    .align-content-sm-stretch {
      align-content: stretch !important;
    }
    .align-self-sm-auto {
      align-self: auto !important;
    }
    .align-self-sm-start {
      align-self: flex-start !important;
    }
    .align-self-sm-end {
      align-self: flex-end !important;
    }
    .align-self-sm-center {
      align-self: center !important;
    }
    .align-self-sm-baseline {
      align-self: baseline !important;
    }
    .align-self-sm-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 768px) {
    .flex-md-row {
      flex-direction: row !important;
    }
    .flex-md-column {
      flex-direction: column !important;
    }
    .flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-md-wrap {
      flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-md-fill {
      flex: 1 1 auto !important;
    }
    .flex-md-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-md-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-md-start {
      justify-content: flex-start !important;
    }
    .justify-content-md-end {
      justify-content: flex-end !important;
    }
    .justify-content-md-center {
      justify-content: center !important;
    }
    .justify-content-md-between {
      justify-content: space-between !important;
    }
    .justify-content-md-around {
      justify-content: space-around !important;
    }
    .align-items-md-start {
      align-items: flex-start !important;
    }
    .align-items-md-end {
      align-items: flex-end !important;
    }
    .align-items-md-center {
      align-items: center !important;
    }
    .align-items-md-baseline {
      align-items: baseline !important;
    }
    .align-items-md-stretch {
      align-items: stretch !important;
    }
    .align-content-md-start {
      align-content: flex-start !important;
    }
    .align-content-md-end {
      align-content: flex-end !important;
    }
    .align-content-md-center {
      align-content: center !important;
    }
    .align-content-md-between {
      align-content: space-between !important;
    }
    .align-content-md-around {
      align-content: space-around !important;
    }
    .align-content-md-stretch {
      align-content: stretch !important;
    }
    .align-self-md-auto {
      align-self: auto !important;
    }
    .align-self-md-start {
      align-self: flex-start !important;
    }
    .align-self-md-end {
      align-self: flex-end !important;
    }
    .align-self-md-center {
      align-self: center !important;
    }
    .align-self-md-baseline {
      align-self: baseline !important;
    }
    .align-self-md-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 992px) {
    .flex-lg-row {
      flex-direction: row !important;
    }
    .flex-lg-column {
      flex-direction: column !important;
    }
    .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-lg-wrap {
      flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-lg-fill {
      flex: 1 1 auto !important;
    }
    .flex-lg-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-lg-start {
      justify-content: flex-start !important;
    }
    .justify-content-lg-end {
      justify-content: flex-end !important;
    }
    .justify-content-lg-center {
      justify-content: center !important;
    }
    .justify-content-lg-between {
      justify-content: space-between !important;
    }
    .justify-content-lg-around {
      justify-content: space-around !important;
    }
    .align-items-lg-start {
      align-items: flex-start !important;
    }
    .align-items-lg-end {
      align-items: flex-end !important;
    }
    .align-items-lg-center {
      align-items: center !important;
    }
    .align-items-lg-baseline {
      align-items: baseline !important;
    }
    .align-items-lg-stretch {
      align-items: stretch !important;
    }
    .align-content-lg-start {
      align-content: flex-start !important;
    }
    .align-content-lg-end {
      align-content: flex-end !important;
    }
    .align-content-lg-center {
      align-content: center !important;
    }
    .align-content-lg-between {
      align-content: space-between !important;
    }
    .align-content-lg-around {
      align-content: space-around !important;
    }
    .align-content-lg-stretch {
      align-content: stretch !important;
    }
    .align-self-lg-auto {
      align-self: auto !important;
    }
    .align-self-lg-start {
      align-self: flex-start !important;
    }
    .align-self-lg-end {
      align-self: flex-end !important;
    }
    .align-self-lg-center {
      align-self: center !important;
    }
    .align-self-lg-baseline {
      align-self: baseline !important;
    }
    .align-self-lg-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 1200px) {
    .flex-xl-row {
      flex-direction: row !important;
    }
    .flex-xl-column {
      flex-direction: column !important;
    }
    .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-xl-wrap {
      flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-xl-fill {
      flex: 1 1 auto !important;
    }
    .flex-xl-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-xl-start {
      justify-content: flex-start !important;
    }
    .justify-content-xl-end {
      justify-content: flex-end !important;
    }
    .justify-content-xl-center {
      justify-content: center !important;
    }
    .justify-content-xl-between {
      justify-content: space-between !important;
    }
    .justify-content-xl-around {
      justify-content: space-around !important;
    }
    .align-items-xl-start {
      align-items: flex-start !important;
    }
    .align-items-xl-end {
      align-items: flex-end !important;
    }
    .align-items-xl-center {
      align-items: center !important;
    }
    .align-items-xl-baseline {
      align-items: baseline !important;
    }
    .align-items-xl-stretch {
      align-items: stretch !important;
    }
    .align-content-xl-start {
      align-content: flex-start !important;
    }
    .align-content-xl-end {
      align-content: flex-end !important;
    }
    .align-content-xl-center {
      align-content: center !important;
    }
    .align-content-xl-between {
      align-content: space-between !important;
    }
    .align-content-xl-around {
      align-content: space-around !important;
    }
    .align-content-xl-stretch {
      align-content: stretch !important;
    }
    .align-self-xl-auto {
      align-self: auto !important;
    }
    .align-self-xl-start {
      align-self: flex-start !important;
    }
    .align-self-xl-end {
      align-self: flex-end !important;
    }
    .align-self-xl-center {
      align-self: center !important;
    }
    .align-self-xl-baseline {
      align-self: baseline !important;
    }
    .align-self-xl-stretch {
      align-self: stretch !important;
    }
  }

  .float-left {
    float: left !important;
  }

  .float-right {
    float: right !important;
  }

  .float-none {
    float: none !important;
  }

  @media (min-width: 576px) {
    .float-sm-left {
      float: left !important;
    }
    .float-sm-right {
      float: right !important;
    }
    .float-sm-none {
      float: none !important;
    }
  }

  @media (min-width: 768px) {
    .float-md-left {
      float: left !important;
    }
    .float-md-right {
      float: right !important;
    }
    .float-md-none {
      float: none !important;
    }
  }

  @media (min-width: 992px) {
    .float-lg-left {
      float: left !important;
    }
    .float-lg-right {
      float: right !important;
    }
    .float-lg-none {
      float: none !important;
    }
  }

  @media (min-width: 1200px) {
    .float-xl-left {
      float: left !important;
    }
    .float-xl-right {
      float: right !important;
    }
    .float-xl-none {
      float: none !important;
    }
  }

  .position-static {
    position: static !important;
  }

  .position-relative {
    position: relative !important;
  }

  .position-absolute {
    position: absolute !important;
  }

  .position-fixed {
    position: fixed !important;
  }

  .position-sticky {
    position: sticky !important;
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }

  @supports (position: sticky) {
    .sticky-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .sr-only-focusable:active,
  .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  .shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }

  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }

  .shadow-none {
    box-shadow: none !important;
  }

  .w-25 {
    width: 25% !important;
  }

  .w-50 {
    width: 50% !important;
  }

  .w-75 {
    width: 75% !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .w-auto {
    width: auto !important;
  }

  .h-25 {
    height: 25% !important;
  }

  .h-50 {
    height: 50% !important;
  }

  .h-75 {
    height: 75% !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .h-auto {
    height: auto !important;
  }

  .mw-100 {
    max-width: 100% !important;
  }

  .mh-100 {
    max-height: 100% !important;
  }

  .m-0 {
    margin: 0 !important;
  }

  .mt-0,
  .my-0 {
    margin-top: 0 !important;
  }

  .mr-0,
  .mx-0 {
    margin-right: 0 !important;
  }

  .mb-0,
  .my-0 {
    margin-bottom: 0 !important;
  }

  .ml-0,
  .mx-0 {
    margin-left: 0 !important;
  }

  .m-1 {
    margin: 0.25rem !important;
  }

  .mt-1,
  .my-1 {
    margin-top: 0.25rem !important;
  }

  .mr-1,
  .mx-1 {
    margin-right: 0.25rem !important;
  }

  .mb-1,
  .my-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-1,
  .mx-1 {
    margin-left: 0.25rem !important;
  }

  .m-2 {
    margin: 0.5rem !important;
  }

  .mt-2,
  .my-2 {
    margin-top: 0.5rem !important;
  }

  .mr-2,
  .mx-2 {
    margin-right: 0.5rem !important;
  }

  .mb-2,
  .my-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-2,
  .mx-2 {
    margin-left: 0.5rem !important;
  }

  .m-3 {
    margin: 1rem !important;
  }

  .mt-3,
  .my-3 {
    margin-top: 1rem !important;
  }

  .mr-3,
  .mx-3 {
    margin-right: 1rem !important;
  }

  .mb-3,
  .my-3 {
    margin-bottom: 1rem !important;
  }

  .ml-3,
  .mx-3 {
    margin-left: 1rem !important;
  }

  .m-4 {
    margin: 1.5rem !important;
  }

  .mt-4,
  .my-4 {
    margin-top: 1.5rem !important;
  }

  .mr-4,
  .mx-4 {
    margin-right: 1.5rem !important;
  }

  .mb-4,
  .my-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-4,
  .mx-4 {
    margin-left: 1.5rem !important;
  }

  .m-5 {
    margin: 3rem !important;
  }

  .mt-5,
  .my-5 {
    margin-top: 3rem !important;
  }

  .mr-5,
  .mx-5 {
    margin-right: 3rem !important;
  }

  .mb-5,
  .my-5 {
    margin-bottom: 3rem !important;
  }

  .ml-5,
  .mx-5 {
    margin-left: 3rem !important;
  }

  .p-0 {
    padding: 0 !important;
  }

  .pt-0,
  .py-0 {
    padding-top: 0 !important;
  }

  .pr-0,
  .px-0 {
    padding-right: 0 !important;
  }

  .pb-0,
  .py-0 {
    padding-bottom: 0 !important;
  }

  .pl-0,
  .px-0 {
    padding-left: 0 !important;
  }

  .p-1 {
    padding: 0.25rem !important;
  }

  .pt-1,
  .py-1 {
    padding-top: 0.25rem !important;
  }

  .pr-1,
  .px-1 {
    padding-right: 0.25rem !important;
  }

  .pb-1,
  .py-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-1,
  .px-1 {
    padding-left: 0.25rem !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }

  .pt-2,
  .py-2 {
    padding-top: 0.5rem !important;
  }

  .pr-2,
  .px-2 {
    padding-right: 0.5rem !important;
  }

  .pb-2,
  .py-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-2,
  .px-2 {
    padding-left: 0.5rem !important;
  }

  .p-3 {
    padding: 1rem !important;
  }

  .pt-3,
  .py-3 {
    padding-top: 1rem !important;
  }

  .pr-3,
  .px-3 {
    padding-right: 1rem !important;
  }

  .pb-3,
  .py-3 {
    padding-bottom: 1rem !important;
  }

  .pl-3,
  .px-3 {
    padding-left: 1rem !important;
  }

  .p-4 {
    padding: 1.5rem !important;
  }

  .pt-4,
  .py-4 {
    padding-top: 1.5rem !important;
  }

  .pr-4,
  .px-4 {
    padding-right: 1.5rem !important;
  }

  .pb-4,
  .py-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-4,
  .px-4 {
    padding-left: 1.5rem !important;
  }

  .p-5 {
    padding: 3rem !important;
  }

  .pt-5,
  .py-5 {
    padding-top: 3rem !important;
  }

  .pr-5,
  .px-5 {
    padding-right: 3rem !important;
  }

  .pb-5,
  .py-5 {
    padding-bottom: 3rem !important;
  }

  .pl-5,
  .px-5 {
    padding-left: 3rem !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mt-auto,
  .my-auto {
    margin-top: auto !important;
  }

  .mr-auto,
  .mx-auto {
    margin-right: auto !important;
  }

  .mb-auto,
  .my-auto {
    margin-bottom: auto !important;
  }

  .ml-auto,
  .mx-auto {
    margin-left: auto !important;
  }

  @media (min-width: 576px) {
    .m-sm-0 {
      margin: 0 !important;
    }
    .mt-sm-0,
    .my-sm-0 {
      margin-top: 0 !important;
    }
    .mr-sm-0,
    .mx-sm-0 {
      margin-right: 0 !important;
    }
    .mb-sm-0,
    .my-sm-0 {
      margin-bottom: 0 !important;
    }
    .ml-sm-0,
    .mx-sm-0 {
      margin-left: 0 !important;
    }
    .m-sm-1 {
      margin: 0.25rem !important;
    }
    .mt-sm-1,
    .my-sm-1 {
      margin-top: 0.25rem !important;
    }
    .mr-sm-1,
    .mx-sm-1 {
      margin-right: 0.25rem !important;
    }
    .mb-sm-1,
    .my-sm-1 {
      margin-bottom: 0.25rem !important;
    }
    .ml-sm-1,
    .mx-sm-1 {
      margin-left: 0.25rem !important;
    }
    .m-sm-2 {
      margin: 0.5rem !important;
    }
    .mt-sm-2,
    .my-sm-2 {
      margin-top: 0.5rem !important;
    }
    .mr-sm-2,
    .mx-sm-2 {
      margin-right: 0.5rem !important;
    }
    .mb-sm-2,
    .my-sm-2 {
      margin-bottom: 0.5rem !important;
    }
    .ml-sm-2,
    .mx-sm-2 {
      margin-left: 0.5rem !important;
    }
    .m-sm-3 {
      margin: 1rem !important;
    }
    .mt-sm-3,
    .my-sm-3 {
      margin-top: 1rem !important;
    }
    .mr-sm-3,
    .mx-sm-3 {
      margin-right: 1rem !important;
    }
    .mb-sm-3,
    .my-sm-3 {
      margin-bottom: 1rem !important;
    }
    .ml-sm-3,
    .mx-sm-3 {
      margin-left: 1rem !important;
    }
    .m-sm-4 {
      margin: 1.5rem !important;
    }
    .mt-sm-4,
    .my-sm-4 {
      margin-top: 1.5rem !important;
    }
    .mr-sm-4,
    .mx-sm-4 {
      margin-right: 1.5rem !important;
    }
    .mb-sm-4,
    .my-sm-4 {
      margin-bottom: 1.5rem !important;
    }
    .ml-sm-4,
    .mx-sm-4 {
      margin-left: 1.5rem !important;
    }
    .m-sm-5 {
      margin: 3rem !important;
    }
    .mt-sm-5,
    .my-sm-5 {
      margin-top: 3rem !important;
    }
    .mr-sm-5,
    .mx-sm-5 {
      margin-right: 3rem !important;
    }
    .mb-sm-5,
    .my-sm-5 {
      margin-bottom: 3rem !important;
    }
    .ml-sm-5,
    .mx-sm-5 {
      margin-left: 3rem !important;
    }
    .p-sm-0 {
      padding: 0 !important;
    }
    .pt-sm-0,
    .py-sm-0 {
      padding-top: 0 !important;
    }
    .pr-sm-0,
    .px-sm-0 {
      padding-right: 0 !important;
    }
    .pb-sm-0,
    .py-sm-0 {
      padding-bottom: 0 !important;
    }
    .pl-sm-0,
    .px-sm-0 {
      padding-left: 0 !important;
    }
    .p-sm-1 {
      padding: 0.25rem !important;
    }
    .pt-sm-1,
    .py-sm-1 {
      padding-top: 0.25rem !important;
    }
    .pr-sm-1,
    .px-sm-1 {
      padding-right: 0.25rem !important;
    }
    .pb-sm-1,
    .py-sm-1 {
      padding-bottom: 0.25rem !important;
    }
    .pl-sm-1,
    .px-sm-1 {
      padding-left: 0.25rem !important;
    }
    .p-sm-2 {
      padding: 0.5rem !important;
    }
    .pt-sm-2,
    .py-sm-2 {
      padding-top: 0.5rem !important;
    }
    .pr-sm-2,
    .px-sm-2 {
      padding-right: 0.5rem !important;
    }
    .pb-sm-2,
    .py-sm-2 {
      padding-bottom: 0.5rem !important;
    }
    .pl-sm-2,
    .px-sm-2 {
      padding-left: 0.5rem !important;
    }
    .p-sm-3 {
      padding: 1rem !important;
    }
    .pt-sm-3,
    .py-sm-3 {
      padding-top: 1rem !important;
    }
    .pr-sm-3,
    .px-sm-3 {
      padding-right: 1rem !important;
    }
    .pb-sm-3,
    .py-sm-3 {
      padding-bottom: 1rem !important;
    }
    .pl-sm-3,
    .px-sm-3 {
      padding-left: 1rem !important;
    }
    .p-sm-4 {
      padding: 1.5rem !important;
    }
    .pt-sm-4,
    .py-sm-4 {
      padding-top: 1.5rem !important;
    }
    .pr-sm-4,
    .px-sm-4 {
      padding-right: 1.5rem !important;
    }
    .pb-sm-4,
    .py-sm-4 {
      padding-bottom: 1.5rem !important;
    }
    .pl-sm-4,
    .px-sm-4 {
      padding-left: 1.5rem !important;
    }
    .p-sm-5 {
      padding: 3rem !important;
    }
    .pt-sm-5,
    .py-sm-5 {
      padding-top: 3rem !important;
    }
    .pr-sm-5,
    .px-sm-5 {
      padding-right: 3rem !important;
    }
    .pb-sm-5,
    .py-sm-5 {
      padding-bottom: 3rem !important;
    }
    .pl-sm-5,
    .px-sm-5 {
      padding-left: 3rem !important;
    }
    .m-sm-auto {
      margin: auto !important;
    }
    .mt-sm-auto,
    .my-sm-auto {
      margin-top: auto !important;
    }
    .mr-sm-auto,
    .mx-sm-auto {
      margin-right: auto !important;
    }
    .mb-sm-auto,
    .my-sm-auto {
      margin-bottom: auto !important;
    }
    .ml-sm-auto,
    .mx-sm-auto {
      margin-left: auto !important;
    }
  }

  @media (min-width: 768px) {
    .m-md-0 {
      margin: 0 !important;
    }
    .mt-md-0,
    .my-md-0 {
      margin-top: 0 !important;
    }
    .mr-md-0,
    .mx-md-0 {
      margin-right: 0 !important;
    }
    .mb-md-0,
    .my-md-0 {
      margin-bottom: 0 !important;
    }
    .ml-md-0,
    .mx-md-0 {
      margin-left: 0 !important;
    }
    .m-md-1 {
      margin: 0.25rem !important;
    }
    .mt-md-1,
    .my-md-1 {
      margin-top: 0.25rem !important;
    }
    .mr-md-1,
    .mx-md-1 {
      margin-right: 0.25rem !important;
    }
    .mb-md-1,
    .my-md-1 {
      margin-bottom: 0.25rem !important;
    }
    .ml-md-1,
    .mx-md-1 {
      margin-left: 0.25rem !important;
    }
    .m-md-2 {
      margin: 0.5rem !important;
    }
    .mt-md-2,
    .my-md-2 {
      margin-top: 0.5rem !important;
    }
    .mr-md-2,
    .mx-md-2 {
      margin-right: 0.5rem !important;
    }
    .mb-md-2,
    .my-md-2 {
      margin-bottom: 0.5rem !important;
    }
    .ml-md-2,
    .mx-md-2 {
      margin-left: 0.5rem !important;
    }
    .m-md-3 {
      margin: 1rem !important;
    }
    .mt-md-3,
    .my-md-3 {
      margin-top: 1rem !important;
    }
    .mr-md-3,
    .mx-md-3 {
      margin-right: 1rem !important;
    }
    .mb-md-3,
    .my-md-3 {
      margin-bottom: 1rem !important;
    }
    .ml-md-3,
    .mx-md-3 {
      margin-left: 1rem !important;
    }
    .m-md-4 {
      margin: 1.5rem !important;
    }
    .mt-md-4,
    .my-md-4 {
      margin-top: 1.5rem !important;
    }
    .mr-md-4,
    .mx-md-4 {
      margin-right: 1.5rem !important;
    }
    .mb-md-4,
    .my-md-4 {
      margin-bottom: 1.5rem !important;
    }
    .ml-md-4,
    .mx-md-4 {
      margin-left: 1.5rem !important;
    }
    .m-md-5 {
      margin: 3rem !important;
    }
    .mt-md-5,
    .my-md-5 {
      margin-top: 3rem !important;
    }
    .mr-md-5,
    .mx-md-5 {
      margin-right: 3rem !important;
    }
    .mb-md-5,
    .my-md-5 {
      margin-bottom: 3rem !important;
    }
    .ml-md-5,
    .mx-md-5 {
      margin-left: 3rem !important;
    }
    .p-md-0 {
      padding: 0 !important;
    }
    .pt-md-0,
    .py-md-0 {
      padding-top: 0 !important;
    }
    .pr-md-0,
    .px-md-0 {
      padding-right: 0 !important;
    }
    .pb-md-0,
    .py-md-0 {
      padding-bottom: 0 !important;
    }
    .pl-md-0,
    .px-md-0 {
      padding-left: 0 !important;
    }
    .p-md-1 {
      padding: 0.25rem !important;
    }
    .pt-md-1,
    .py-md-1 {
      padding-top: 0.25rem !important;
    }
    .pr-md-1,
    .px-md-1 {
      padding-right: 0.25rem !important;
    }
    .pb-md-1,
    .py-md-1 {
      padding-bottom: 0.25rem !important;
    }
    .pl-md-1,
    .px-md-1 {
      padding-left: 0.25rem !important;
    }
    .p-md-2 {
      padding: 0.5rem !important;
    }
    .pt-md-2,
    .py-md-2 {
      padding-top: 0.5rem !important;
    }
    .pr-md-2,
    .px-md-2 {
      padding-right: 0.5rem !important;
    }
    .pb-md-2,
    .py-md-2 {
      padding-bottom: 0.5rem !important;
    }
    .pl-md-2,
    .px-md-2 {
      padding-left: 0.5rem !important;
    }
    .p-md-3 {
      padding: 1rem !important;
    }
    .pt-md-3,
    .py-md-3 {
      padding-top: 1rem !important;
    }
    .pr-md-3,
    .px-md-3 {
      padding-right: 1rem !important;
    }
    .pb-md-3,
    .py-md-3 {
      padding-bottom: 1rem !important;
    }
    .pl-md-3,
    .px-md-3 {
      padding-left: 1rem !important;
    }
    .p-md-4 {
      padding: 1.5rem !important;
    }
    .pt-md-4,
    .py-md-4 {
      padding-top: 1.5rem !important;
    }
    .pr-md-4,
    .px-md-4 {
      padding-right: 1.5rem !important;
    }
    .pb-md-4,
    .py-md-4 {
      padding-bottom: 1.5rem !important;
    }
    .pl-md-4,
    .px-md-4 {
      padding-left: 1.5rem !important;
    }
    .p-md-5 {
      padding: 3rem !important;
    }
    .pt-md-5,
    .py-md-5 {
      padding-top: 3rem !important;
    }
    .pr-md-5,
    .px-md-5 {
      padding-right: 3rem !important;
    }
    .pb-md-5,
    .py-md-5 {
      padding-bottom: 3rem !important;
    }
    .pl-md-5,
    .px-md-5 {
      padding-left: 3rem !important;
    }
    .m-md-auto {
      margin: auto !important;
    }
    .mt-md-auto,
    .my-md-auto {
      margin-top: auto !important;
    }
    .mr-md-auto,
    .mx-md-auto {
      margin-right: auto !important;
    }
    .mb-md-auto,
    .my-md-auto {
      margin-bottom: auto !important;
    }
    .ml-md-auto,
    .mx-md-auto {
      margin-left: auto !important;
    }
  }

  @media (min-width: 992px) {
    .m-lg-0 {
      margin: 0 !important;
    }
    .mt-lg-0,
    .my-lg-0 {
      margin-top: 0 !important;
    }
    .mr-lg-0,
    .mx-lg-0 {
      margin-right: 0 !important;
    }
    .mb-lg-0,
    .my-lg-0 {
      margin-bottom: 0 !important;
    }
    .ml-lg-0,
    .mx-lg-0 {
      margin-left: 0 !important;
    }
    .m-lg-1 {
      margin: 0.25rem !important;
    }
    .mt-lg-1,
    .my-lg-1 {
      margin-top: 0.25rem !important;
    }
    .mr-lg-1,
    .mx-lg-1 {
      margin-right: 0.25rem !important;
    }
    .mb-lg-1,
    .my-lg-1 {
      margin-bottom: 0.25rem !important;
    }
    .ml-lg-1,
    .mx-lg-1 {
      margin-left: 0.25rem !important;
    }
    .m-lg-2 {
      margin: 0.5rem !important;
    }
    .mt-lg-2,
    .my-lg-2 {
      margin-top: 0.5rem !important;
    }
    .mr-lg-2,
    .mx-lg-2 {
      margin-right: 0.5rem !important;
    }
    .mb-lg-2,
    .my-lg-2 {
      margin-bottom: 0.5rem !important;
    }
    .ml-lg-2,
    .mx-lg-2 {
      margin-left: 0.5rem !important;
    }
    .m-lg-3 {
      margin: 1rem !important;
    }
    .mt-lg-3,
    .my-lg-3 {
      margin-top: 1rem !important;
    }
    .mr-lg-3,
    .mx-lg-3 {
      margin-right: 1rem !important;
    }
    .mb-lg-3,
    .my-lg-3 {
      margin-bottom: 1rem !important;
    }
    .ml-lg-3,
    .mx-lg-3 {
      margin-left: 1rem !important;
    }
    .m-lg-4 {
      margin: 1.5rem !important;
    }
    .mt-lg-4,
    .my-lg-4 {
      margin-top: 1.5rem !important;
    }
    .mr-lg-4,
    .mx-lg-4 {
      margin-right: 1.5rem !important;
    }
    .mb-lg-4,
    .my-lg-4 {
      margin-bottom: 1.5rem !important;
    }
    .ml-lg-4,
    .mx-lg-4 {
      margin-left: 1.5rem !important;
    }
    .m-lg-5 {
      margin: 3rem !important;
    }
    .mt-lg-5,
    .my-lg-5 {
      margin-top: 3rem !important;
    }
    .mr-lg-5,
    .mx-lg-5 {
      margin-right: 3rem !important;
    }
    .mb-lg-5,
    .my-lg-5 {
      margin-bottom: 3rem !important;
    }
    .ml-lg-5,
    .mx-lg-5 {
      margin-left: 3rem !important;
    }
    .p-lg-0 {
      padding: 0 !important;
    }
    .pt-lg-0,
    .py-lg-0 {
      padding-top: 0 !important;
    }
    .pr-lg-0,
    .px-lg-0 {
      padding-right: 0 !important;
    }
    .pb-lg-0,
    .py-lg-0 {
      padding-bottom: 0 !important;
    }
    .pl-lg-0,
    .px-lg-0 {
      padding-left: 0 !important;
    }
    .p-lg-1 {
      padding: 0.25rem !important;
    }
    .pt-lg-1,
    .py-lg-1 {
      padding-top: 0.25rem !important;
    }
    .pr-lg-1,
    .px-lg-1 {
      padding-right: 0.25rem !important;
    }
    .pb-lg-1,
    .py-lg-1 {
      padding-bottom: 0.25rem !important;
    }
    .pl-lg-1,
    .px-lg-1 {
      padding-left: 0.25rem !important;
    }
    .p-lg-2 {
      padding: 0.5rem !important;
    }
    .pt-lg-2,
    .py-lg-2 {
      padding-top: 0.5rem !important;
    }
    .pr-lg-2,
    .px-lg-2 {
      padding-right: 0.5rem !important;
    }
    .pb-lg-2,
    .py-lg-2 {
      padding-bottom: 0.5rem !important;
    }
    .pl-lg-2,
    .px-lg-2 {
      padding-left: 0.5rem !important;
    }
    .p-lg-3 {
      padding: 1rem !important;
    }
    .pt-lg-3,
    .py-lg-3 {
      padding-top: 1rem !important;
    }
    .pr-lg-3,
    .px-lg-3 {
      padding-right: 1rem !important;
    }
    .pb-lg-3,
    .py-lg-3 {
      padding-bottom: 1rem !important;
    }
    .pl-lg-3,
    .px-lg-3 {
      padding-left: 1rem !important;
    }
    .p-lg-4 {
      padding: 1.5rem !important;
    }
    .pt-lg-4,
    .py-lg-4 {
      padding-top: 1.5rem !important;
    }
    .pr-lg-4,
    .px-lg-4 {
      padding-right: 1.5rem !important;
    }
    .pb-lg-4,
    .py-lg-4 {
      padding-bottom: 1.5rem !important;
    }
    .pl-lg-4,
    .px-lg-4 {
      padding-left: 1.5rem !important;
    }
    .p-lg-5 {
      padding: 3rem !important;
    }
    .pt-lg-5,
    .py-lg-5 {
      padding-top: 3rem !important;
    }
    .pr-lg-5,
    .px-lg-5 {
      padding-right: 3rem !important;
    }
    .pb-lg-5,
    .py-lg-5 {
      padding-bottom: 3rem !important;
    }
    .pl-lg-5,
    .px-lg-5 {
      padding-left: 3rem !important;
    }
    .m-lg-auto {
      margin: auto !important;
    }
    .mt-lg-auto,
    .my-lg-auto {
      margin-top: auto !important;
    }
    .mr-lg-auto,
    .mx-lg-auto {
      margin-right: auto !important;
    }
    .mb-lg-auto,
    .my-lg-auto {
      margin-bottom: auto !important;
    }
    .ml-lg-auto,
    .mx-lg-auto {
      margin-left: auto !important;
    }
  }

  @media (min-width: 1200px) {
    .m-xl-0 {
      margin: 0 !important;
    }
    .mt-xl-0,
    .my-xl-0 {
      margin-top: 0 !important;
    }
    .mr-xl-0,
    .mx-xl-0 {
      margin-right: 0 !important;
    }
    .mb-xl-0,
    .my-xl-0 {
      margin-bottom: 0 !important;
    }
    .ml-xl-0,
    .mx-xl-0 {
      margin-left: 0 !important;
    }
    .m-xl-1 {
      margin: 0.25rem !important;
    }
    .mt-xl-1,
    .my-xl-1 {
      margin-top: 0.25rem !important;
    }
    .mr-xl-1,
    .mx-xl-1 {
      margin-right: 0.25rem !important;
    }
    .mb-xl-1,
    .my-xl-1 {
      margin-bottom: 0.25rem !important;
    }
    .ml-xl-1,
    .mx-xl-1 {
      margin-left: 0.25rem !important;
    }
    .m-xl-2 {
      margin: 0.5rem !important;
    }
    .mt-xl-2,
    .my-xl-2 {
      margin-top: 0.5rem !important;
    }
    .mr-xl-2,
    .mx-xl-2 {
      margin-right: 0.5rem !important;
    }
    .mb-xl-2,
    .my-xl-2 {
      margin-bottom: 0.5rem !important;
    }
    .ml-xl-2,
    .mx-xl-2 {
      margin-left: 0.5rem !important;
    }
    .m-xl-3 {
      margin: 1rem !important;
    }
    .mt-xl-3,
    .my-xl-3 {
      margin-top: 1rem !important;
    }
    .mr-xl-3,
    .mx-xl-3 {
      margin-right: 1rem !important;
    }
    .mb-xl-3,
    .my-xl-3 {
      margin-bottom: 1rem !important;
    }
    .ml-xl-3,
    .mx-xl-3 {
      margin-left: 1rem !important;
    }
    .m-xl-4 {
      margin: 1.5rem !important;
    }
    .mt-xl-4,
    .my-xl-4 {
      margin-top: 1.5rem !important;
    }
    .mr-xl-4,
    .mx-xl-4 {
      margin-right: 1.5rem !important;
    }
    .mb-xl-4,
    .my-xl-4 {
      margin-bottom: 1.5rem !important;
    }
    .ml-xl-4,
    .mx-xl-4 {
      margin-left: 1.5rem !important;
    }
    .m-xl-5 {
      margin: 3rem !important;
    }
    .mt-xl-5,
    .my-xl-5 {
      margin-top: 3rem !important;
    }
    .mr-xl-5,
    .mx-xl-5 {
      margin-right: 3rem !important;
    }
    .mb-xl-5,
    .my-xl-5 {
      margin-bottom: 3rem !important;
    }
    .ml-xl-5,
    .mx-xl-5 {
      margin-left: 3rem !important;
    }
    .p-xl-0 {
      padding: 0 !important;
    }
    .pt-xl-0,
    .py-xl-0 {
      padding-top: 0 !important;
    }
    .pr-xl-0,
    .px-xl-0 {
      padding-right: 0 !important;
    }
    .pb-xl-0,
    .py-xl-0 {
      padding-bottom: 0 !important;
    }
    .pl-xl-0,
    .px-xl-0 {
      padding-left: 0 !important;
    }
    .p-xl-1 {
      padding: 0.25rem !important;
    }
    .pt-xl-1,
    .py-xl-1 {
      padding-top: 0.25rem !important;
    }
    .pr-xl-1,
    .px-xl-1 {
      padding-right: 0.25rem !important;
    }
    .pb-xl-1,
    .py-xl-1 {
      padding-bottom: 0.25rem !important;
    }
    .pl-xl-1,
    .px-xl-1 {
      padding-left: 0.25rem !important;
    }
    .p-xl-2 {
      padding: 0.5rem !important;
    }
    .pt-xl-2,
    .py-xl-2 {
      padding-top: 0.5rem !important;
    }
    .pr-xl-2,
    .px-xl-2 {
      padding-right: 0.5rem !important;
    }
    .pb-xl-2,
    .py-xl-2 {
      padding-bottom: 0.5rem !important;
    }
    .pl-xl-2,
    .px-xl-2 {
      padding-left: 0.5rem !important;
    }
    .p-xl-3 {
      padding: 1rem !important;
    }
    .pt-xl-3,
    .py-xl-3 {
      padding-top: 1rem !important;
    }
    .pr-xl-3,
    .px-xl-3 {
      padding-right: 1rem !important;
    }
    .pb-xl-3,
    .py-xl-3 {
      padding-bottom: 1rem !important;
    }
    .pl-xl-3,
    .px-xl-3 {
      padding-left: 1rem !important;
    }
    .p-xl-4 {
      padding: 1.5rem !important;
    }
    .pt-xl-4,
    .py-xl-4 {
      padding-top: 1.5rem !important;
    }
    .pr-xl-4,
    .px-xl-4 {
      padding-right: 1.5rem !important;
    }
    .pb-xl-4,
    .py-xl-4 {
      padding-bottom: 1.5rem !important;
    }
    .pl-xl-4,
    .px-xl-4 {
      padding-left: 1.5rem !important;
    }
    .p-xl-5 {
      padding: 3rem !important;
    }
    .pt-xl-5,
    .py-xl-5 {
      padding-top: 3rem !important;
    }
    .pr-xl-5,
    .px-xl-5 {
      padding-right: 3rem !important;
    }
    .pb-xl-5,
    .py-xl-5 {
      padding-bottom: 3rem !important;
    }
    .pl-xl-5,
    .px-xl-5 {
      padding-left: 3rem !important;
    }
    .m-xl-auto {
      margin: auto !important;
    }
    .mt-xl-auto,
    .my-xl-auto {
      margin-top: auto !important;
    }
    .mr-xl-auto,
    .mx-xl-auto {
      margin-right: auto !important;
    }
    .mb-xl-auto,
    .my-xl-auto {
      margin-bottom: auto !important;
    }
    .ml-xl-auto,
    .mx-xl-auto {
      margin-left: auto !important;
    }
  }

  .text-monospace {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  }

  .text-justify {
    text-align: justify !important;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text-left {
    text-align: left !important;
  }

  .text-right {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  @media (min-width: 576px) {
    .text-sm-left {
      text-align: left !important;
    }
    .text-sm-right {
      text-align: right !important;
    }
    .text-sm-center {
      text-align: center !important;
    }
  }

  @media (min-width: 768px) {
    .text-md-left {
      text-align: left !important;
    }
    .text-md-right {
      text-align: right !important;
    }
    .text-md-center {
      text-align: center !important;
    }
  }

  @media (min-width: 992px) {
    .text-lg-left {
      text-align: left !important;
    }
    .text-lg-right {
      text-align: right !important;
    }
    .text-lg-center {
      text-align: center !important;
    }
  }

  @media (min-width: 1200px) {
    .text-xl-left {
      text-align: left !important;
    }
    .text-xl-right {
      text-align: right !important;
    }
    .text-xl-center {
      text-align: center !important;
    }
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .font-weight-light {
    font-weight: 300 !important;
  }

  .font-weight-normal {
    font-weight: 400 !important;
  }

  .font-weight-bold {
    font-weight: 700 !important;
  }

  .font-italic {
    font-style: italic !important;
  }

  .text-white {
    color: #fff !important;
  }

  .text-primary {
    color: #663399 !important;
  }

  a.text-primary:hover,
  a.text-primary:focus {
    color: #4d2673 !important;
  }

  .text-secondary {
    color: #52495a !important;
  }

  a.text-secondary:hover,
  a.text-secondary:focus {
    color: #38323e !important;
  }

  .text-success {
    color: #4caf50 !important;
  }

  a.text-success:hover,
  a.text-success:focus {
    color: #3d8b40 !important;
  }

  .text-info {
    color: #003473 !important;
  }

  a.text-info:hover,
  a.text-info:focus {
    color: #001d40 !important;
  }

  .text-warning {
    color: #ffc107 !important;
  }

  a.text-warning:hover,
  a.text-warning:focus {
    color: #d39e00 !important;
  }

  .text-danger {
    color: #f44336 !important;
  }

  a.text-danger:hover,
  a.text-danger:focus {
    color: #ea1c0d !important;
  }

  .text-light {
    color: #bbb !important;
  }

  a.text-light:hover,
  a.text-light:focus {
    color: #a2a2a2 !important;
  }

  .text-dark {
    color: #47404f !important;
  }

  a.text-dark:hover,
  a.text-dark:focus {
    color: #2e2932 !important;
  }

  .text-gray-100 {
    color: #f8f9fa !important;
  }

  a.text-gray-100:hover,
  a.text-gray-100:focus {
    color: #dae0e5 !important;
  }

  .text-gray-200 {
    color: #eee !important;
  }

  a.text-gray-200:hover,
  a.text-gray-200:focus {
    color: #d5d5d5 !important;
  }

  .text-gray-300 {
    color: #dee2e6 !important;
  }

  a.text-gray-300:hover,
  a.text-gray-300:focus {
    color: #c1c9d0 !important;
  }

  .text-gray-400 {
    color: #ced4da !important;
  }

  a.text-gray-400:hover,
  a.text-gray-400:focus {
    color: #b1bbc4 !important;
  }

  .text-gray-500 {
    color: #bbb !important;
  }

  a.text-gray-500:hover,
  a.text-gray-500:focus {
    color: #a2a2a2 !important;
  }

  .text-gray-600 {
    color: #70657b !important;
  }

  a.text-gray-600:hover,
  a.text-gray-600:focus {
    color: #574e5f !important;
  }

  .text-gray-700 {
    color: #665c70 !important;
  }

  a.text-gray-700:hover,
  a.text-gray-700:focus {
    color: #4d4554 !important;
  }

  .text-gray-800 {
    color: #52495a !important;
  }

  a.text-gray-800:hover,
  a.text-gray-800:focus {
    color: #38323e !important;
  }

  .text-gray-900 {
    color: #47404f !important;
  }

  a.text-gray-900:hover,
  a.text-gray-900:focus {
    color: #2e2932 !important;
  }

  .text-body {
    color: #47404f !important;
  }

  .text-muted {
    color: #70657b !important;
  }

  .text-black-50 {
    color: rgba(0, 0, 0, 0.5) !important;
  }

  .text-white-50 {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }

  .visible {
    visibility: visible !important;
  }

  .invisible {
    visibility: hidden !important;
  }

  @media print {
    *,
    *::before,
    *::after {
      text-shadow: none !important;
      box-shadow: none !important;
    }
    a:not(.btn) {
      text-decoration: underline;
    }
    abbr[title]::after {
      content: " (" attr(title) ")";
    }
    pre {
      white-space: pre-wrap !important;
    }
    pre,
    blockquote {
      border: 1px solid #bbb;
      page-break-inside: avoid;
    }
    thead {
      display: table-header-group;
    }
    tr,
    img {
      page-break-inside: avoid;
    }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
    h2,
    h3 {
      page-break-after: avoid;
    }
    @page {
      size: a3;
    }
    body {
      min-width: 992px !important;
    }
    .container {
      min-width: 992px !important;
    }
    .navbar {
      display: none;
    }
    .badge {
      border: 1px solid black;
    }
    .table {
      border-collapse: collapse !important;
    }
    .table td,
    .table th {
      background-color: #fff !important;
    }
    .table-bordered th,
    .table-bordered td {
      border: 1px solid #dee2e6 !important;
    }
    .table-dark {
      color: inherit;
    }
    .table-dark th,
    .table-dark td,
    .table-dark thead th,
    .table-dark tbody + tbody {
      border-color: #dee2e6;
    }
    .table .thead-dark th {
      color: inherit;
      border-color: #dee2e6;
    }
  }

  [dir="rtl"] .text-left {
    text-align: right !important;
  }

  [dir="rtl"] .text-right {
    text-align: left !important;
  }

  @media (min-width: 576px) {
    [dir="rtl"] .text-sm-left {
      text-align: right !important;
    }
    [dir="rtl"] .text-sm-right {
      text-align: left !important;
    }
  }

  @media (min-width: 768px) {
    [dir="rtl"] .text-md-left {
      text-align: right !important;
    }
    [dir="rtl"] .text-md-right {
      text-align: left !important;
    }
  }

  @media (min-width: 992px) {
    [dir="rtl"] .text-lg-left {
      text-align: right !important;
    }
    [dir="rtl"] .text-lg-right {
      text-align: left !important;
    }
  }

  @media (min-width: 1200px) {
    [dir="rtl"] .text-xl-left {
      text-align: right !important;
    }
    [dir="rtl"] .text-xl-right {
      text-align: left !important;
    }
  }

  [dir="rtl"] .float-left {
    float: right !important;
  }

  [dir="rtl"] .float-right {
    float: left !important;
  }

  @media (min-width: 576px) {
    [dir="rtl"] .float-sm-left {
      float: right !important;
    }
    [dir="rtl"] .float-sm-right {
      float: left !important;
    }
  }

  @media (min-width: 768px) {
    [dir="rtl"] .float-md-left {
      float: right !important;
    }
    [dir="rtl"] .float-md-right {
      float: left !important;
    }
  }

  @media (min-width: 992px) {
    [dir="rtl"] .float-lg-left {
      float: right !important;
    }
    [dir="rtl"] .float-lg-right {
      float: left !important;
    }
  }

  @media (min-width: 1200px) {
    [dir="rtl"] .float-xl-left {
      float: right !important;
    }
    [dir="rtl"] .float-xl-right {
      float: left !important;
    }
  }

  [dir="rtl"] .mr-0,
  [dir="rtl"] .mx-0 {
    margin-left: 0 !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-0,
  [dir="rtl"] .mx-0 {
    margin-right: 0 !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-1,
  [dir="rtl"] .mx-1 {
    margin-left: 0.25rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-1,
  [dir="rtl"] .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-2,
  [dir="rtl"] .mx-2 {
    margin-left: 0.5rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-2,
  [dir="rtl"] .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-3,
  [dir="rtl"] .mx-3 {
    margin-left: 1rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-3,
  [dir="rtl"] .mx-3 {
    margin-right: 1rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-4,
  [dir="rtl"] .mx-4 {
    margin-left: 1.5rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-4,
  [dir="rtl"] .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-5,
  [dir="rtl"] .mx-5 {
    margin-left: 3rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-5,
  [dir="rtl"] .mx-5 {
    margin-right: 3rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-0,
  [dir="rtl"] .px-0 {
    padding-left: 0 !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-0,
  [dir="rtl"] .px-0 {
    padding-right: 0 !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-1,
  [dir="rtl"] .px-1 {
    padding-left: 0.25rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-1,
  [dir="rtl"] .px-1 {
    padding-right: 0.25rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-2,
  [dir="rtl"] .px-2 {
    padding-left: 0.5rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-2,
  [dir="rtl"] .px-2 {
    padding-right: 0.5rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-3,
  [dir="rtl"] .px-3 {
    padding-left: 1rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-3,
  [dir="rtl"] .px-3 {
    padding-right: 1rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-4,
  [dir="rtl"] .px-4 {
    padding-left: 1.5rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-4,
  [dir="rtl"] .px-4 {
    padding-right: 1.5rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-5,
  [dir="rtl"] .px-5 {
    padding-left: 3rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-5,
  [dir="rtl"] .px-5 {
    padding-right: 3rem !important;
    margin-left: unset !important;
  }

  @media (min-width: 576px) {
    [dir="rtl"] .mr-sm-0,
    [dir="rtl"] .mx-sm-0 {
      margin-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-0,
    [dir="rtl"] .mx-sm-0 {
      margin-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-1,
    [dir="rtl"] .mx-sm-1 {
      margin-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-1,
    [dir="rtl"] .mx-sm-1 {
      margin-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-2,
    [dir="rtl"] .mx-sm-2 {
      margin-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-2,
    [dir="rtl"] .mx-sm-2 {
      margin-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-3,
    [dir="rtl"] .mx-sm-3 {
      margin-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-3,
    [dir="rtl"] .mx-sm-3 {
      margin-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-4,
    [dir="rtl"] .mx-sm-4 {
      margin-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-4,
    [dir="rtl"] .mx-sm-4 {
      margin-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-5,
    [dir="rtl"] .mx-sm-5 {
      margin-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-5,
    [dir="rtl"] .mx-sm-5 {
      margin-right: 3rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-0,
    [dir="rtl"] .px-sm-0 {
      padding-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-0,
    [dir="rtl"] .px-sm-0 {
      padding-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-1,
    [dir="rtl"] .px-sm-1 {
      padding-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-1,
    [dir="rtl"] .px-sm-1 {
      padding-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-2,
    [dir="rtl"] .px-sm-2 {
      padding-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-2,
    [dir="rtl"] .px-sm-2 {
      padding-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-3,
    [dir="rtl"] .px-sm-3 {
      padding-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-3,
    [dir="rtl"] .px-sm-3 {
      padding-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-4,
    [dir="rtl"] .px-sm-4 {
      padding-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-4,
    [dir="rtl"] .px-sm-4 {
      padding-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-5,
    [dir="rtl"] .px-sm-5 {
      padding-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-5,
    [dir="rtl"] .px-sm-5 {
      padding-right: 3rem !important;
      margin-left: unset !important;
    }
  }

  @media (min-width: 768px) {
    [dir="rtl"] .mr-md-0,
    [dir="rtl"] .mx-md-0 {
      margin-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-0,
    [dir="rtl"] .mx-md-0 {
      margin-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-1,
    [dir="rtl"] .mx-md-1 {
      margin-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-1,
    [dir="rtl"] .mx-md-1 {
      margin-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-2,
    [dir="rtl"] .mx-md-2 {
      margin-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-2,
    [dir="rtl"] .mx-md-2 {
      margin-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-3,
    [dir="rtl"] .mx-md-3 {
      margin-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-3,
    [dir="rtl"] .mx-md-3 {
      margin-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-4,
    [dir="rtl"] .mx-md-4 {
      margin-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-4,
    [dir="rtl"] .mx-md-4 {
      margin-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-5,
    [dir="rtl"] .mx-md-5 {
      margin-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-5,
    [dir="rtl"] .mx-md-5 {
      margin-right: 3rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-0,
    [dir="rtl"] .px-md-0 {
      padding-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-0,
    [dir="rtl"] .px-md-0 {
      padding-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-1,
    [dir="rtl"] .px-md-1 {
      padding-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-1,
    [dir="rtl"] .px-md-1 {
      padding-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-2,
    [dir="rtl"] .px-md-2 {
      padding-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-2,
    [dir="rtl"] .px-md-2 {
      padding-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-3,
    [dir="rtl"] .px-md-3 {
      padding-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-3,
    [dir="rtl"] .px-md-3 {
      padding-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-4,
    [dir="rtl"] .px-md-4 {
      padding-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-4,
    [dir="rtl"] .px-md-4 {
      padding-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-5,
    [dir="rtl"] .px-md-5 {
      padding-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-5,
    [dir="rtl"] .px-md-5 {
      padding-right: 3rem !important;
      margin-left: unset !important;
    }
  }

  @media (min-width: 992px) {
    [dir="rtl"] .mr-lg-0,
    [dir="rtl"] .mx-lg-0 {
      margin-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-0,
    [dir="rtl"] .mx-lg-0 {
      margin-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-1,
    [dir="rtl"] .mx-lg-1 {
      margin-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-1,
    [dir="rtl"] .mx-lg-1 {
      margin-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-2,
    [dir="rtl"] .mx-lg-2 {
      margin-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-2,
    [dir="rtl"] .mx-lg-2 {
      margin-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-3,
    [dir="rtl"] .mx-lg-3 {
      margin-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-3,
    [dir="rtl"] .mx-lg-3 {
      margin-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-4,
    [dir="rtl"] .mx-lg-4 {
      margin-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-4,
    [dir="rtl"] .mx-lg-4 {
      margin-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-5,
    [dir="rtl"] .mx-lg-5 {
      margin-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-5,
    [dir="rtl"] .mx-lg-5 {
      margin-right: 3rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-0,
    [dir="rtl"] .px-lg-0 {
      padding-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-0,
    [dir="rtl"] .px-lg-0 {
      padding-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-1,
    [dir="rtl"] .px-lg-1 {
      padding-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-1,
    [dir="rtl"] .px-lg-1 {
      padding-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-2,
    [dir="rtl"] .px-lg-2 {
      padding-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-2,
    [dir="rtl"] .px-lg-2 {
      padding-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-3,
    [dir="rtl"] .px-lg-3 {
      padding-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-3,
    [dir="rtl"] .px-lg-3 {
      padding-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-4,
    [dir="rtl"] .px-lg-4 {
      padding-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-4,
    [dir="rtl"] .px-lg-4 {
      padding-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-5,
    [dir="rtl"] .px-lg-5 {
      padding-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-5,
    [dir="rtl"] .px-lg-5 {
      padding-right: 3rem !important;
      margin-left: unset !important;
    }
  }

  @media (min-width: 1200px) {
    [dir="rtl"] .mr-xl-0,
    [dir="rtl"] .mx-xl-0 {
      margin-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-0,
    [dir="rtl"] .mx-xl-0 {
      margin-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-1,
    [dir="rtl"] .mx-xl-1 {
      margin-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-1,
    [dir="rtl"] .mx-xl-1 {
      margin-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-2,
    [dir="rtl"] .mx-xl-2 {
      margin-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-2,
    [dir="rtl"] .mx-xl-2 {
      margin-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-3,
    [dir="rtl"] .mx-xl-3 {
      margin-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-3,
    [dir="rtl"] .mx-xl-3 {
      margin-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-4,
    [dir="rtl"] .mx-xl-4 {
      margin-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-4,
    [dir="rtl"] .mx-xl-4 {
      margin-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-5,
    [dir="rtl"] .mx-xl-5 {
      margin-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-5,
    [dir="rtl"] .mx-xl-5 {
      margin-right: 3rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-0,
    [dir="rtl"] .px-xl-0 {
      padding-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-0,
    [dir="rtl"] .px-xl-0 {
      padding-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-1,
    [dir="rtl"] .px-xl-1 {
      padding-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-1,
    [dir="rtl"] .px-xl-1 {
      padding-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-2,
    [dir="rtl"] .px-xl-2 {
      padding-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-2,
    [dir="rtl"] .px-xl-2 {
      padding-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-3,
    [dir="rtl"] .px-xl-3 {
      padding-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-3,
    [dir="rtl"] .px-xl-3 {
      padding-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-4,
    [dir="rtl"] .px-xl-4 {
      padding-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-4,
    [dir="rtl"] .px-xl-4 {
      padding-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-5,
    [dir="rtl"] .px-xl-5 {
      padding-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-5,
    [dir="rtl"] .px-xl-5 {
      padding-right: 3rem !important;
      margin-left: unset !important;
    }
  }

  [dir="rtl"] .input-group > .input-group-prepend > .btn,
  [dir="rtl"] .input-group > .input-group-prepend > .input-group-text,
  [dir="rtl"] .input-group > .input-group-append:not(:last-child) > .btn,
  [dir="rtl"]
    .input-group
    > .input-group-append:not(:last-child)
    > .input-group-text,
  [dir="rtl"]
    .input-group
    > .input-group-append:last-child
    > .btn:not(:last-child):not(.dropdown-toggle),
  [dir="rtl"]
    .input-group
    > .input-group-append:last-child
    > .input-group-text:not(:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  [dir="rtl"] .input-group > .input-group-append > .btn,
  [dir="rtl"] .input-group > .input-group-append > .input-group-text,
  [dir="rtl"] .input-group > .input-group-prepend:not(:first-child) > .btn,
  [dir="rtl"]
    .input-group
    > .input-group-prepend:not(:first-child)
    > .input-group-text,
  [dir="rtl"]
    .input-group
    > .input-group-prepend:first-child
    > .btn:not(:first-child),
  [dir="rtl"]
    .input-group
    > .input-group-prepend:first-child
    > .input-group-text:not(:first-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  [dir="rtl"] .input-group > .form-control:not(:last-child),
  [dir="rtl"] .input-group > .custom-select:not(:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  [dir="rtl"] .input-group > .form-control:not(:first-child),
  [dir="rtl"] .input-group > .custom-select:not(:first-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  [dir="rtl"] .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  [dir="rtl"] .btn-group > .btn-group:not(:last-child) > .btn,
  [dir="rtl"] .btn-group > .btn:not(:first-child),
  [dir="rtl"] .btn-group > .btn-group:not(:first-child) > .btn {
    border-radius: 0;
  }

  .sidebar-gradient-purple-indigo .sidebar-left {
    /* fallback/image non-cover color */
    background-color: #663399;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #663399),
      color-stop(100%, #33214b)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #663399 0%,
      #33214b 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* Standard */
    background: linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .gradient-purple-indigo {
    /* fallback/image non-cover color */
    background-color: #663399;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #663399),
      color-stop(100%, #33214b)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #663399 0%,
      #33214b 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* Standard */
    background: linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .btn.gradient-purple-indigo:active,
  .btn.gradient-purple-indigo.active {
    /* fallback/image non-cover color */
    background-color: #663399;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -90deg,
      right top,
      color-stop(0%, #663399),
      color-stop(100%, #33214b)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* Standard */
    background: linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .sidebar-gradient-black-blue .sidebar-left {
    /* fallback/image non-cover color */
    background-color: #004e92;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #004e92),
      color-stop(100%, #000428)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #004e92 0%,
      #000428 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* Standard */
    background: linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .gradient-black-blue {
    /* fallback/image non-cover color */
    background-color: #004e92;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #004e92),
      color-stop(100%, #000428)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #004e92 0%,
      #000428 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* Standard */
    background: linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .btn.gradient-black-blue:active,
  .btn.gradient-black-blue.active {
    /* fallback/image non-cover color */
    background-color: #004e92;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -90deg,
      right top,
      color-stop(0%, #004e92),
      color-stop(100%, #000428)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* Standard */
    background: linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .sidebar-gradient-black-gray .sidebar-left {
    /* fallback/image non-cover color */
    background-color: #404040;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #404040),
      color-stop(100%, #000000)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #404040 0%,
      #000000 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* Standard */
    background: linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .gradient-black-gray {
    /* fallback/image non-cover color */
    background-color: #404040;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #404040),
      color-stop(100%, #000000)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #404040 0%,
      #000000 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* Standard */
    background: linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .btn.gradient-black-gray:active,
  .btn.gradient-black-gray.active {
    /* fallback/image non-cover color */
    background-color: #404040;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -90deg,
      right top,
      color-stop(0%, #404040),
      color-stop(100%, #000000)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* Standard */
    background: linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .sidebar-gradient-steel-gray .sidebar-left {
    /* fallback/image non-cover color */
    background-color: #616d86;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #616d86),
      color-stop(100%, #1f1c2c)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #616d86 0%,
      #1f1c2c 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* Standard */
    background: linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .gradient-steel-gray {
    /* fallback/image non-cover color */
    background-color: #616d86;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #616d86),
      color-stop(100%, #1f1c2c)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #616d86 0%,
      #1f1c2c 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* Standard */
    background: linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .btn.gradient-steel-gray:active,
  .btn.gradient-steel-gray.active {
    /* fallback/image non-cover color */
    background-color: #616d86;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -90deg,
      right top,
      color-stop(0%, #616d86),
      color-stop(100%, #1f1c2c)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* Standard */
    background: linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .sidebar-blue .sidebar-left {
    background: #003473;
  }

  .blue {
    background: #003473;
  }

  .sidebar-midnight-blue .sidebar-left {
    background: #0c0c3c;
  }

  .midnight-blue {
    background: #0c0c3c;
  }

  .sidebar-indigo .sidebar-left {
    background: #3f51b5;
  }

  .indigo {
    background: #3f51b5;
  }

  .sidebar-dark-purple .sidebar-left {
    background: #322740;
  }

  .dark-purple {
    background: #322740;
  }

  .sidebar-purple .sidebar-left {
    background: #663399;
  }

  .purple {
    background: #663399;
  }

  .sidebar-pink .sidebar-left {
    background: #cb3066;
  }

  .pink {
    background: #cb3066;
  }

  .sidebar-red .sidebar-left {
    background: #f44336;
  }

  .red {
    background: #f44336;
  }

  .sidebar-orange .sidebar-left {
    background: #e97d23;
  }

  .orange {
    background: #e97d23;
  }

  .sidebar-yellow .sidebar-left {
    background: #ffc107;
  }

  .yellow {
    background: #ffc107;
  }

  .sidebar-green .sidebar-left {
    background: #4caf50;
  }

  .green {
    background: #4caf50;
  }

  .sidebar-teal .sidebar-left {
    background: #20c997;
  }

  .teal {
    background: #20c997;
  }

  .sidebar-cyan .sidebar-left {
    background: #9c27b0;
  }

  .cyan {
    background: #9c27b0;
  }

  .sidebar-gray .sidebar-left {
    background: #2d2d33;
  }

  .gray {
    background: #2d2d33;
  }

  .sidebar-slate-gray .sidebar-left {
    background: #405365;
  }

  .slate-gray {
    background: #405365;
  }

  /*
  $full-map: (
    blue: (
      100: #f31312,
      .....,
      900: #f32332
    ),
    red: (
      100: #f31312,
      .....,
      900: #f32332
    )
  )
  */
  .blue-50 {
    background-color: #73b2ff;
  }

  .text-blue-50 {
    color: black;
  }

  .blue-100 {
    background-color: #4096ff;
  }

  .text-blue-100 {
    color: black;
  }

  .blue-200 {
    background-color: #0d7aff;
  }

  .text-blue-200 {
    color: black;
  }

  .blue-300 {
    background-color: #0062d9;
  }

  .text-blue-300 {
    color: black;
  }

  .blue-400 {
    background-color: #004ba6;
  }

  .text-blue-400 {
    color: white;
  }

  .blue-500 {
    background-color: #003473;
  }

  .text-blue-500 {
    color: white;
  }

  .blue-600 {
    background-color: #001d40;
  }

  .text-blue-600 {
    color: white;
  }

  .blue-700 {
    background-color: #00060d;
  }

  .text-blue-700 {
    color: white;
  }

  .blue-800 {
    background-color: black;
  }

  .text-blue-800 {
    color: white;
  }

  .blue-900 {
    background-color: black;
  }

  .text-blue-900 {
    color: white;
  }

  .indigo-50 {
    background-color: #f7f8fc;
  }

  .text-indigo-50 {
    color: black;
  }

  .indigo-100 {
    background-color: #d1d6ef;
  }

  .text-indigo-100 {
    color: black;
  }

  .indigo-200 {
    background-color: #abb4e2;
  }

  .text-indigo-200 {
    color: black;
  }

  .indigo-300 {
    background-color: #8591d5;
  }

  .text-indigo-300 {
    color: black;
  }

  .indigo-400 {
    background-color: #606fc7;
  }

  .text-indigo-400 {
    color: black;
  }

  .indigo-500 {
    background-color: #3f51b5;
  }

  .text-indigo-500 {
    color: black;
  }

  .indigo-600 {
    background-color: #32408f;
  }

  .text-indigo-600 {
    color: white;
  }

  .indigo-700 {
    background-color: #252f69;
  }

  .text-indigo-700 {
    color: white;
  }

  .indigo-800 {
    background-color: #171e44;
  }

  .text-indigo-800 {
    color: white;
  }

  .indigo-900 {
    background-color: #0a0d1e;
  }

  .text-indigo-900 {
    color: white;
  }

  .purple-50 {
    background-color: #e6d9f2;
  }

  .text-purple-50 {
    color: black;
  }

  .purple-100 {
    background-color: #ccb3e6;
  }

  .text-purple-100 {
    color: black;
  }

  .purple-200 {
    background-color: #b38cd9;
  }

  .text-purple-200 {
    color: black;
  }

  .purple-300 {
    background-color: #9966cc;
  }

  .text-purple-300 {
    color: black;
  }

  .purple-400 {
    background-color: #8040bf;
  }

  .text-purple-400 {
    color: black;
  }

  .purple-500 {
    background-color: #663399;
  }

  .text-purple-500 {
    color: white;
  }

  .purple-600 {
    background-color: #4d2673;
  }

  .text-purple-600 {
    color: white;
  }

  .purple-700 {
    background-color: #331a4d;
  }

  .text-purple-700 {
    color: white;
  }

  .purple-800 {
    background-color: #1a0d26;
  }

  .text-purple-800 {
    color: white;
  }

  .purple-900 {
    background-color: black;
  }

  .text-purple-900 {
    color: white;
  }

  .pink-50 {
    background-color: #fefcfd;
  }

  .text-pink-50 {
    color: black;
  }

  .pink-100 {
    background-color: #f4d3de;
  }

  .text-pink-100 {
    color: black;
  }

  .pink-200 {
    background-color: #eba9c0;
  }

  .text-pink-200 {
    color: black;
  }

  .pink-300 {
    background-color: #e180a2;
  }

  .text-pink-300 {
    color: black;
  }

  .pink-400 {
    background-color: #d75784;
  }

  .text-pink-400 {
    color: black;
  }

  .pink-500 {
    background-color: #cb3066;
  }

  .text-pink-500 {
    color: black;
  }

  .pink-600 {
    background-color: #a22651;
  }

  .text-pink-600 {
    color: white;
  }

  .pink-700 {
    background-color: #791c3d;
  }

  .text-pink-700 {
    color: white;
  }

  .pink-800 {
    background-color: #4f1328;
  }

  .text-pink-800 {
    color: white;
  }

  .pink-900 {
    background-color: #260913;
  }

  .text-pink-900 {
    color: white;
  }

  .red-50 {
    background-color: white;
  }

  .text-red-50 {
    color: black;
  }

  .red-100 {
    background-color: #fff8f7;
  }

  .text-red-100 {
    color: black;
  }

  .red-200 {
    background-color: #fccbc7;
  }

  .text-red-200 {
    color: black;
  }

  .red-300 {
    background-color: #f99d97;
  }

  .text-red-300 {
    color: black;
  }

  .red-400 {
    background-color: #f77066;
  }

  .text-red-400 {
    color: black;
  }

  .red-500 {
    background-color: #f44336;
  }

  .text-red-500 {
    color: black;
  }

  .red-600 {
    background-color: #ea1c0d;
  }

  .text-red-600 {
    color: black;
  }

  .red-700 {
    background-color: #ba160a;
  }

  .text-red-700 {
    color: white;
  }

  .red-800 {
    background-color: #891008;
  }

  .text-red-800 {
    color: white;
  }

  .red-900 {
    background-color: #590b05;
  }

  .text-red-900 {
    color: white;
  }

  .orange-50 {
    background-color: white;
  }

  .text-orange-50 {
    color: black;
  }

  .orange-100 {
    background-color: #fcebdc;
  }

  .text-orange-100 {
    color: black;
  }

  .orange-200 {
    background-color: #f7cfae;
  }

  .text-orange-200 {
    color: black;
  }

  .orange-300 {
    background-color: #f2b480;
  }

  .text-orange-300 {
    color: black;
  }

  .orange-400 {
    background-color: #ee9851;
  }

  .text-orange-400 {
    color: black;
  }

  .orange-500 {
    background-color: #e97d23;
  }

  .text-orange-500 {
    color: black;
  }

  .orange-600 {
    background-color: #c56414;
  }

  .text-orange-600 {
    color: black;
  }

  .orange-700 {
    background-color: #974d0f;
  }

  .text-orange-700 {
    color: white;
  }

  .orange-800 {
    background-color: #69350a;
  }

  .text-orange-800 {
    color: white;
  }

  .orange-900 {
    background-color: #3a1e06;
  }

  .text-orange-900 {
    color: white;
  }

  .yellow-50 {
    background-color: white;
  }

  .text-yellow-50 {
    color: black;
  }

  .yellow-100 {
    background-color: #fff4d3;
  }

  .text-yellow-100 {
    color: black;
  }

  .yellow-200 {
    background-color: #ffe7a0;
  }

  .text-yellow-200 {
    color: black;
  }

  .yellow-300 {
    background-color: #ffdb6d;
  }

  .text-yellow-300 {
    color: black;
  }

  .yellow-400 {
    background-color: #ffce3a;
  }

  .text-yellow-400 {
    color: black;
  }

  .yellow-500 {
    background-color: #ffc107;
  }

  .text-yellow-500 {
    color: black;
  }

  .yellow-600 {
    background-color: #d39e00;
  }

  .text-yellow-600 {
    color: black;
  }

  .yellow-700 {
    background-color: #a07800;
  }

  .text-yellow-700 {
    color: white;
  }

  .yellow-800 {
    background-color: #6d5200;
  }

  .text-yellow-800 {
    color: white;
  }

  .yellow-900 {
    background-color: #3a2c00;
  }

  .text-yellow-900 {
    color: white;
  }

  .green-50 {
    background-color: #fcfefc;
  }

  .text-green-50 {
    color: black;
  }

  .green-100 {
    background-color: #d9eeda;
  }

  .text-green-100 {
    color: black;
  }

  .green-200 {
    background-color: #b5dfb7;
  }

  .text-green-200 {
    color: black;
  }

  .green-300 {
    background-color: #92cf94;
  }

  .text-green-300 {
    color: black;
  }

  .green-400 {
    background-color: #6ec071;
  }

  .text-green-400 {
    color: black;
  }

  .green-500 {
    background-color: #4caf50;
  }

  .text-green-500 {
    color: black;
  }

  .green-600 {
    background-color: #3d8b40;
  }

  .text-green-600 {
    color: white;
  }

  .green-700 {
    background-color: #2d682f;
  }

  .text-green-700 {
    color: white;
  }

  .green-800 {
    background-color: #1e441f;
  }

  .text-green-800 {
    color: white;
  }

  .green-900 {
    background-color: #0e210f;
  }

  .text-green-900 {
    color: white;
  }

  .teal-50 {
    background-color: #ecfcf7;
  }

  .text-teal-50 {
    color: black;
  }

  .teal-100 {
    background-color: #c0f5e5;
  }

  .text-teal-100 {
    color: black;
  }

  .teal-200 {
    background-color: #94eed3;
  }

  .text-teal-200 {
    color: black;
  }

  .teal-300 {
    background-color: #68e7c1;
  }

  .text-teal-300 {
    color: black;
  }

  .teal-400 {
    background-color: #3ce0af;
  }

  .text-teal-400 {
    color: black;
  }

  .teal-500 {
    background-color: #20c997;
  }

  .text-teal-500 {
    color: black;
  }

  .teal-600 {
    background-color: #199d76;
  }

  .text-teal-600 {
    color: white;
  }

  .teal-700 {
    background-color: #127155;
  }

  .text-teal-700 {
    color: white;
  }

  .teal-800 {
    background-color: #0b4534;
  }

  .text-teal-800 {
    color: white;
  }

  .teal-900 {
    background-color: #041913;
  }

  .text-teal-900 {
    color: white;
  }

  .cyan-50 {
    background-color: #f4def8;
  }

  .text-cyan-50 {
    color: black;
  }

  .cyan-100 {
    background-color: #e6b5ee;
  }

  .text-cyan-100 {
    color: black;
  }

  .cyan-200 {
    background-color: #d88be5;
  }

  .text-cyan-200 {
    color: black;
  }

  .cyan-300 {
    background-color: #ca61dc;
  }

  .text-cyan-300 {
    color: black;
  }

  .cyan-400 {
    background-color: #bc37d3;
  }

  .text-cyan-400 {
    color: black;
  }

  .cyan-500 {
    background-color: #9c27b0;
  }

  .text-cyan-500 {
    color: black;
  }

  .cyan-600 {
    background-color: #771e86;
  }

  .text-cyan-600 {
    color: white;
  }

  .cyan-700 {
    background-color: #52145d;
  }

  .text-cyan-700 {
    color: white;
  }

  .cyan-800 {
    background-color: #2d0b33;
  }

  .text-cyan-800 {
    color: white;
  }

  .cyan-900 {
    background-color: #080209;
  }

  .text-cyan-900 {
    color: white;
  }

  .white-50 {
    background-color: white;
  }

  .text-white-50 {
    color: black;
  }

  .white-100 {
    background-color: white;
  }

  .text-white-100 {
    color: black;
  }

  .white-200 {
    background-color: white;
  }

  .text-white-200 {
    color: black;
  }

  .white-300 {
    background-color: white;
  }

  .text-white-300 {
    color: black;
  }

  .white-400 {
    background-color: white;
  }

  .text-white-400 {
    color: black;
  }

  .white-500 {
    background-color: #fff;
  }

  .text-white-500 {
    color: black;
  }

  .white-600 {
    background-color: #e6e6e6;
  }

  .text-white-600 {
    color: black;
  }

  .white-700 {
    background-color: #cccccc;
  }

  .text-white-700 {
    color: black;
  }

  .white-800 {
    background-color: #b3b3b3;
  }

  .text-white-800 {
    color: black;
  }

  .white-900 {
    background-color: #999999;
  }

  .text-white-900 {
    color: black;
  }

  .gray-50 {
    background-color: #f0eef1;
  }

  .text-gray-50 {
    color: black;
  }

  .gray-100 {
    background-color: #d6d2da;
  }

  .text-gray-100 {
    color: black;
  }

  .gray-200 {
    background-color: #bdb6c3;
  }

  .text-gray-200 {
    color: black;
  }

  .gray-300 {
    background-color: #a39aac;
  }

  .text-gray-300 {
    color: black;
  }

  .gray-400 {
    background-color: #8a7e95;
  }

  .text-gray-400 {
    color: black;
  }

  .gray-500 {
    background-color: #70657b;
  }

  .text-gray-500 {
    color: black;
  }

  .gray-600 {
    background-color: #574e5f;
  }

  .text-gray-600 {
    color: white;
  }

  .gray-700 {
    background-color: #3d3743;
  }

  .text-gray-700 {
    color: white;
  }

  .gray-800 {
    background-color: #242027;
  }

  .text-gray-800 {
    color: white;
  }

  .gray-900 {
    background-color: #0a090b;
  }

  .text-gray-900 {
    color: white;
  }

  .gray-dark-50 {
    background-color: #d1cdd6;
  }

  .text-gray-dark-50 {
    color: black;
  }

  .gray-dark-100 {
    background-color: #b8b0bf;
  }

  .text-gray-dark-100 {
    color: black;
  }

  .gray-dark-200 {
    background-color: #9e94a8;
  }

  .text-gray-dark-200 {
    color: black;
  }

  .gray-dark-300 {
    background-color: #857891;
  }

  .text-gray-dark-300 {
    color: black;
  }

  .gray-dark-400 {
    background-color: #6b6076;
  }

  .text-gray-dark-400 {
    color: black;
  }

  .gray-dark-500 {
    background-color: #52495a;
  }

  .text-gray-dark-500 {
    color: white;
  }

  .gray-dark-600 {
    background-color: #38323e;
  }

  .text-gray-dark-600 {
    color: white;
  }

  .gray-dark-700 {
    background-color: #1f1c22;
  }

  .text-gray-dark-700 {
    color: white;
  }

  .gray-dark-800 {
    background-color: #050506;
  }

  .text-gray-dark-800 {
    color: white;
  }

  .gray-dark-900 {
    background-color: black;
  }

  .text-gray-dark-900 {
    color: white;
  }

  .purple-50 {
    background-color: #e6d9f2;
  }

  .text-purple-50 {
    color: black;
  }

  .purple-100 {
    background-color: #ccb3e6;
  }

  .text-purple-100 {
    color: black;
  }

  .purple-200 {
    background-color: #b38cd9;
  }

  .text-purple-200 {
    color: black;
  }

  .purple-300 {
    background-color: #9966cc;
  }

  .text-purple-300 {
    color: black;
  }

  .purple-400 {
    background-color: #8040bf;
  }

  .text-purple-400 {
    color: black;
  }

  .purple-500 {
    background-color: #663399;
  }

  .text-purple-500 {
    color: white;
  }

  .purple-600 {
    background-color: #4d2673;
  }

  .text-purple-600 {
    color: white;
  }

  .purple-700 {
    background-color: #331a4d;
  }

  .text-purple-700 {
    color: white;
  }

  .purple-800 {
    background-color: #1a0d26;
  }

  .text-purple-800 {
    color: white;
  }

  .purple-900 {
    background-color: black;
  }

  .text-purple-900 {
    color: white;
  }

  .pink-50 {
    background-color: #fefcfd;
  }

  .text-pink-50 {
    color: black;
  }

  .pink-100 {
    background-color: #f4d3de;
  }

  .text-pink-100 {
    color: black;
  }

  .pink-200 {
    background-color: #eba9c0;
  }

  .text-pink-200 {
    color: black;
  }

  .pink-300 {
    background-color: #e180a2;
  }

  .text-pink-300 {
    color: black;
  }

  .pink-400 {
    background-color: #d75784;
  }

  .text-pink-400 {
    color: black;
  }

  .pink-500 {
    background-color: #cb3066;
  }

  .text-pink-500 {
    color: black;
  }

  .pink-600 {
    background-color: #a22651;
  }

  .text-pink-600 {
    color: white;
  }

  .pink-700 {
    background-color: #791c3d;
  }

  .text-pink-700 {
    color: white;
  }

  .pink-800 {
    background-color: #4f1328;
  }

  .text-pink-800 {
    color: white;
  }

  .pink-900 {
    background-color: #260913;
  }

  .text-pink-900 {
    color: white;
  }

  .red-50 {
    background-color: white;
  }

  .text-red-50 {
    color: black;
  }

  .red-100 {
    background-color: #fff8f7;
  }

  .text-red-100 {
    color: black;
  }

  .red-200 {
    background-color: #fccbc7;
  }

  .text-red-200 {
    color: black;
  }

  .red-300 {
    background-color: #f99d97;
  }

  .text-red-300 {
    color: black;
  }

  .red-400 {
    background-color: #f77066;
  }

  .text-red-400 {
    color: black;
  }

  .red-500 {
    background-color: #f44336;
  }

  .text-red-500 {
    color: black;
  }

  .red-600 {
    background-color: #ea1c0d;
  }

  .text-red-600 {
    color: black;
  }

  .red-700 {
    background-color: #ba160a;
  }

  .text-red-700 {
    color: white;
  }

  .red-800 {
    background-color: #891008;
  }

  .text-red-800 {
    color: white;
  }

  .red-900 {
    background-color: #590b05;
  }

  .text-red-900 {
    color: white;
  }

  .orange-50 {
    background-color: white;
  }

  .text-orange-50 {
    color: black;
  }

  .orange-100 {
    background-color: #fcebdc;
  }

  .text-orange-100 {
    color: black;
  }

  .orange-200 {
    background-color: #f7cfae;
  }

  .text-orange-200 {
    color: black;
  }

  .orange-300 {
    background-color: #f2b480;
  }

  .text-orange-300 {
    color: black;
  }

  .orange-400 {
    background-color: #ee9851;
  }

  .text-orange-400 {
    color: black;
  }

  .orange-500 {
    background-color: #e97d23;
  }

  .text-orange-500 {
    color: black;
  }

  .orange-600 {
    background-color: #c56414;
  }

  .text-orange-600 {
    color: black;
  }

  .orange-700 {
    background-color: #974d0f;
  }

  .text-orange-700 {
    color: white;
  }

  .orange-800 {
    background-color: #69350a;
  }

  .text-orange-800 {
    color: white;
  }

  .orange-900 {
    background-color: #3a1e06;
  }

  .text-orange-900 {
    color: white;
  }

  .yellow-50 {
    background-color: white;
  }

  .text-yellow-50 {
    color: black;
  }

  .yellow-100 {
    background-color: #fff4d3;
  }

  .text-yellow-100 {
    color: black;
  }

  .yellow-200 {
    background-color: #ffe7a0;
  }

  .text-yellow-200 {
    color: black;
  }

  .yellow-300 {
    background-color: #ffdb6d;
  }

  .text-yellow-300 {
    color: black;
  }

  .yellow-400 {
    background-color: #ffce3a;
  }

  .text-yellow-400 {
    color: black;
  }

  .yellow-500 {
    background-color: #ffc107;
  }

  .text-yellow-500 {
    color: black;
  }

  .yellow-600 {
    background-color: #d39e00;
  }

  .text-yellow-600 {
    color: black;
  }

  .yellow-700 {
    background-color: #a07800;
  }

  .text-yellow-700 {
    color: white;
  }

  .yellow-800 {
    background-color: #6d5200;
  }

  .text-yellow-800 {
    color: white;
  }

  .yellow-900 {
    background-color: #3a2c00;
  }

  .text-yellow-900 {
    color: white;
  }

  .green-50 {
    background-color: #fcfefc;
  }

  .text-green-50 {
    color: black;
  }

  .green-100 {
    background-color: #d9eeda;
  }

  .text-green-100 {
    color: black;
  }

  .green-200 {
    background-color: #b5dfb7;
  }

  .text-green-200 {
    color: black;
  }

  .green-300 {
    background-color: #92cf94;
  }

  .text-green-300 {
    color: black;
  }

  .green-400 {
    background-color: #6ec071;
  }

  .text-green-400 {
    color: black;
  }

  .green-500 {
    background-color: #4caf50;
  }

  .text-green-500 {
    color: black;
  }

  .green-600 {
    background-color: #3d8b40;
  }

  .text-green-600 {
    color: white;
  }

  .green-700 {
    background-color: #2d682f;
  }

  .text-green-700 {
    color: white;
  }

  .green-800 {
    background-color: #1e441f;
  }

  .text-green-800 {
    color: white;
  }

  .green-900 {
    background-color: #0e210f;
  }

  .text-green-900 {
    color: white;
  }

  .teal-50 {
    background-color: #ecfcf7;
  }

  .text-teal-50 {
    color: black;
  }

  .teal-100 {
    background-color: #c0f5e5;
  }

  .text-teal-100 {
    color: black;
  }

  .teal-200 {
    background-color: #94eed3;
  }

  .text-teal-200 {
    color: black;
  }

  .teal-300 {
    background-color: #68e7c1;
  }

  .text-teal-300 {
    color: black;
  }

  .teal-400 {
    background-color: #3ce0af;
  }

  .text-teal-400 {
    color: black;
  }

  .teal-500 {
    background-color: #20c997;
  }

  .text-teal-500 {
    color: black;
  }

  .teal-600 {
    background-color: #199d76;
  }

  .text-teal-600 {
    color: white;
  }

  .teal-700 {
    background-color: #127155;
  }

  .text-teal-700 {
    color: white;
  }

  .teal-800 {
    background-color: #0b4534;
  }

  .text-teal-800 {
    color: white;
  }

  .teal-900 {
    background-color: #041913;
  }

  .text-teal-900 {
    color: white;
  }

  .cyan-50 {
    background-color: #f4def8;
  }

  .text-cyan-50 {
    color: black;
  }

  .cyan-100 {
    background-color: #e6b5ee;
  }

  .text-cyan-100 {
    color: black;
  }

  .cyan-200 {
    background-color: #d88be5;
  }

  .text-cyan-200 {
    color: black;
  }

  .cyan-300 {
    background-color: #ca61dc;
  }

  .text-cyan-300 {
    color: black;
  }

  .cyan-400 {
    background-color: #bc37d3;
  }

  .text-cyan-400 {
    color: black;
  }

  .cyan-500 {
    background-color: #9c27b0;
  }

  .text-cyan-500 {
    color: black;
  }

  .cyan-600 {
    background-color: #771e86;
  }

  .text-cyan-600 {
    color: white;
  }

  .cyan-700 {
    background-color: #52145d;
  }

  .text-cyan-700 {
    color: white;
  }

  .cyan-800 {
    background-color: #2d0b33;
  }

  .text-cyan-800 {
    color: white;
  }

  .cyan-900 {
    background-color: #080209;
  }

  .text-cyan-900 {
    color: white;
  }

  .white-50 {
    background-color: white;
  }

  .text-white-50 {
    color: black;
  }

  .white-100 {
    background-color: white;
  }

  .text-white-100 {
    color: black;
  }

  .white-200 {
    background-color: white;
  }

  .text-white-200 {
    color: black;
  }

  .white-300 {
    background-color: white;
  }

  .text-white-300 {
    color: black;
  }

  .white-400 {
    background-color: white;
  }

  .text-white-400 {
    color: black;
  }

  .white-500 {
    background-color: #fff;
  }

  .text-white-500 {
    color: black;
  }

  .white-600 {
    background-color: #e6e6e6;
  }

  .text-white-600 {
    color: black;
  }

  .white-700 {
    background-color: #cccccc;
  }

  .text-white-700 {
    color: black;
  }

  .white-800 {
    background-color: #b3b3b3;
  }

  .text-white-800 {
    color: black;
  }

  .white-900 {
    background-color: #999999;
  }

  .text-white-900 {
    color: black;
  }

  .gray-50 {
    background-color: #f0eef1;
  }

  .text-gray-50 {
    color: black;
  }

  .gray-100 {
    background-color: #d6d2da;
  }

  .text-gray-100 {
    color: black;
  }

  .gray-200 {
    background-color: #bdb6c3;
  }

  .text-gray-200 {
    color: black;
  }

  .gray-300 {
    background-color: #a39aac;
  }

  .text-gray-300 {
    color: black;
  }

  .gray-400 {
    background-color: #8a7e95;
  }

  .text-gray-400 {
    color: black;
  }

  .gray-500 {
    background-color: #70657b;
  }

  .text-gray-500 {
    color: black;
  }

  .gray-600 {
    background-color: #574e5f;
  }

  .text-gray-600 {
    color: white;
  }

  .gray-700 {
    background-color: #3d3743;
  }

  .text-gray-700 {
    color: white;
  }

  .gray-800 {
    background-color: #242027;
  }

  .text-gray-800 {
    color: white;
  }

  .gray-900 {
    background-color: #0a090b;
  }

  .text-gray-900 {
    color: white;
  }

  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-moz-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-ms-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-o-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-webkit-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-moz-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-ms-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-o-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-webkit-keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @-moz-keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @-ms-keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @-o-keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @-moz-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @-ms-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @-o-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-moz-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-ms-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-o-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-webkit-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-moz-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-ms-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-o-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-webkit-keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-moz-keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-ms-keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-o-keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-webkit-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-moz-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-ms-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-o-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-webkit-keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-moz-keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-ms-keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-o-keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-ms-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @-moz-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @-ms-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @-o-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @-webkit-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-moz-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-ms-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-o-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-webkit-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @-moz-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @-ms-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @-o-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @-webkit-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-moz-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-ms-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-o-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-webkit-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @-moz-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @-ms-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @-o-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @-webkit-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-moz-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-ms-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-o-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-webkit-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @-moz-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @-ms-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @-o-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @-webkit-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-moz-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-ms-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-o-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-webkit-keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-moz-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-ms-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-o-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-webkit-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-moz-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-ms-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-o-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-webkit-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-moz-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-ms-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-o-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-webkit-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-moz-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-ms-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-o-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @-moz-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @-ms-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @-o-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @-webkit-keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @-moz-keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @-ms-keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @-o-keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @-webkit-keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @-moz-keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @-ms-keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @-o-keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @-webkit-keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @-moz-keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @-ms-keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @-o-keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @-webkit-keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @-moz-keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @-ms-keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @-o-keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @-webkit-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @-ms-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-moz-keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-ms-keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-o-keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-webkit-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @-moz-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @-ms-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @-o-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @-webkit-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @-moz-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @-ms-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @-o-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @-webkit-keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-moz-keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-ms-keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-o-keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spin {
    animation: spin 2s infinite linear;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .card-title,
  .text-title {
    color: #332e38;
  }

  .text-10 {
    font-size: 10px;
  }

  .text-11 {
    font-size: 11px;
  }

  .text-12 {
    font-size: 12px;
  }

  .text-13 {
    font-size: 13px;
  }

  .text-14 {
    font-size: 14px;
  }

  .text-15 {
    font-size: 15px;
  }

  .text-16 {
    font-size: 16px;
  }

  .text-17 {
    font-size: 17px;
  }

  .text-18 {
    font-size: 18px;
  }

  .text-19 {
    font-size: 19px;
  }

  .text-20 {
    font-size: 20px;
  }

  .text-21 {
    font-size: 21px;
  }

  .text-22 {
    font-size: 22px;
  }

  .text-23 {
    font-size: 23px;
  }

  .text-24 {
    font-size: 24px;
  }

  .text-25 {
    font-size: 25px;
  }

  .text-26 {
    font-size: 26px;
  }

  .text-27 {
    font-size: 27px;
  }

  .text-28 {
    font-size: 28px;
  }

  .text-29 {
    font-size: 29px;
  }

  .text-30 {
    font-size: 30px;
  }

  .text-31 {
    font-size: 31px;
  }

  .text-32 {
    font-size: 32px;
  }

  .text-33 {
    font-size: 33px;
  }

  .text-34 {
    font-size: 34px;
  }

  .text-35 {
    font-size: 35px;
  }

  .text-36 {
    font-size: 36px;
  }

  .text-37 {
    font-size: 37px;
  }

  .text-38 {
    font-size: 38px;
  }

  .text-39 {
    font-size: 39px;
  }

  .text-40 {
    font-size: 40px;
  }

  .text-41 {
    font-size: 41px;
  }

  .text-42 {
    font-size: 42px;
  }

  .text-43 {
    font-size: 43px;
  }

  .text-44 {
    font-size: 44px;
  }

  .text-45 {
    font-size: 45px;
  }

  .text-46 {
    font-size: 46px;
  }

  .text-47 {
    font-size: 47px;
  }

  .text-48 {
    font-size: 48px;
  }

  .text-49 {
    font-size: 49px;
  }

  .text-50 {
    font-size: 50px;
  }

  .text-51 {
    font-size: 51px;
  }

  .text-52 {
    font-size: 52px;
  }

  .text-53 {
    font-size: 53px;
  }

  .text-54 {
    font-size: 54px;
  }

  .text-55 {
    font-size: 55px;
  }

  .text-56 {
    font-size: 56px;
  }

  .text-57 {
    font-size: 57px;
  }

  .text-58 {
    font-size: 58px;
  }

  .text-59 {
    font-size: 59px;
  }

  .text-60 {
    font-size: 60px;
  }

  .text-61 {
    font-size: 61px;
  }

  .text-62 {
    font-size: 62px;
  }

  .text-63 {
    font-size: 63px;
  }

  .text-64 {
    font-size: 64px;
  }

  .text-65 {
    font-size: 65px;
  }

  .text-66 {
    font-size: 66px;
  }

  .text-67 {
    font-size: 67px;
  }

  .text-68 {
    font-size: 68px;
  }

  .text-69 {
    font-size: 69px;
  }

  .text-70 {
    font-size: 70px;
  }

  .text-71 {
    font-size: 71px;
  }

  .text-72 {
    font-size: 72px;
  }

  .text-73 {
    font-size: 73px;
  }

  .text-74 {
    font-size: 74px;
  }

  .text-75 {
    font-size: 75px;
  }

  .text-76 {
    font-size: 76px;
  }

  .text-77 {
    font-size: 77px;
  }

  .text-78 {
    font-size: 78px;
  }

  .font-weight-300 {
    font-weight: 300;
  }

  .font-weight-301 {
    font-weight: 301;
  }

  .font-weight-302 {
    font-weight: 302;
  }

  .font-weight-303 {
    font-weight: 303;
  }

  .font-weight-304 {
    font-weight: 304;
  }

  .font-weight-305 {
    font-weight: 305;
  }

  .font-weight-306 {
    font-weight: 306;
  }

  .font-weight-307 {
    font-weight: 307;
  }

  .font-weight-308 {
    font-weight: 308;
  }

  .font-weight-309 {
    font-weight: 309;
  }

  .font-weight-310 {
    font-weight: 310;
  }

  .font-weight-311 {
    font-weight: 311;
  }

  .font-weight-312 {
    font-weight: 312;
  }

  .font-weight-313 {
    font-weight: 313;
  }

  .font-weight-314 {
    font-weight: 314;
  }

  .font-weight-315 {
    font-weight: 315;
  }

  .font-weight-316 {
    font-weight: 316;
  }

  .font-weight-317 {
    font-weight: 317;
  }

  .font-weight-318 {
    font-weight: 318;
  }

  .font-weight-319 {
    font-weight: 319;
  }

  .font-weight-320 {
    font-weight: 320;
  }

  .font-weight-321 {
    font-weight: 321;
  }

  .font-weight-322 {
    font-weight: 322;
  }

  .font-weight-323 {
    font-weight: 323;
  }

  .font-weight-324 {
    font-weight: 324;
  }

  .font-weight-325 {
    font-weight: 325;
  }

  .font-weight-326 {
    font-weight: 326;
  }

  .font-weight-327 {
    font-weight: 327;
  }

  .font-weight-328 {
    font-weight: 328;
  }

  .font-weight-329 {
    font-weight: 329;
  }

  .font-weight-330 {
    font-weight: 330;
  }

  .font-weight-331 {
    font-weight: 331;
  }

  .font-weight-332 {
    font-weight: 332;
  }

  .font-weight-333 {
    font-weight: 333;
  }

  .font-weight-334 {
    font-weight: 334;
  }

  .font-weight-335 {
    font-weight: 335;
  }

  .font-weight-336 {
    font-weight: 336;
  }

  .font-weight-337 {
    font-weight: 337;
  }

  .font-weight-338 {
    font-weight: 338;
  }

  .font-weight-339 {
    font-weight: 339;
  }

  .font-weight-340 {
    font-weight: 340;
  }

  .font-weight-341 {
    font-weight: 341;
  }

  .font-weight-342 {
    font-weight: 342;
  }

  .font-weight-343 {
    font-weight: 343;
  }

  .font-weight-344 {
    font-weight: 344;
  }

  .font-weight-345 {
    font-weight: 345;
  }

  .font-weight-346 {
    font-weight: 346;
  }

  .font-weight-347 {
    font-weight: 347;
  }

  .font-weight-348 {
    font-weight: 348;
  }

  .font-weight-349 {
    font-weight: 349;
  }

  .font-weight-350 {
    font-weight: 350;
  }

  .font-weight-351 {
    font-weight: 351;
  }

  .font-weight-352 {
    font-weight: 352;
  }

  .font-weight-353 {
    font-weight: 353;
  }

  .font-weight-354 {
    font-weight: 354;
  }

  .font-weight-355 {
    font-weight: 355;
  }

  .font-weight-356 {
    font-weight: 356;
  }

  .font-weight-357 {
    font-weight: 357;
  }

  .font-weight-358 {
    font-weight: 358;
  }

  .font-weight-359 {
    font-weight: 359;
  }

  .font-weight-360 {
    font-weight: 360;
  }

  .font-weight-361 {
    font-weight: 361;
  }

  .font-weight-362 {
    font-weight: 362;
  }

  .font-weight-363 {
    font-weight: 363;
  }

  .font-weight-364 {
    font-weight: 364;
  }

  .font-weight-365 {
    font-weight: 365;
  }

  .font-weight-366 {
    font-weight: 366;
  }

  .font-weight-367 {
    font-weight: 367;
  }

  .font-weight-368 {
    font-weight: 368;
  }

  .font-weight-369 {
    font-weight: 369;
  }

  .font-weight-370 {
    font-weight: 370;
  }

  .font-weight-371 {
    font-weight: 371;
  }

  .font-weight-372 {
    font-weight: 372;
  }

  .font-weight-373 {
    font-weight: 373;
  }

  .font-weight-374 {
    font-weight: 374;
  }

  .font-weight-375 {
    font-weight: 375;
  }

  .font-weight-376 {
    font-weight: 376;
  }

  .font-weight-377 {
    font-weight: 377;
  }

  .font-weight-378 {
    font-weight: 378;
  }

  .font-weight-379 {
    font-weight: 379;
  }

  .font-weight-380 {
    font-weight: 380;
  }

  .font-weight-381 {
    font-weight: 381;
  }

  .font-weight-382 {
    font-weight: 382;
  }

  .font-weight-383 {
    font-weight: 383;
  }

  .font-weight-384 {
    font-weight: 384;
  }

  .font-weight-385 {
    font-weight: 385;
  }

  .font-weight-386 {
    font-weight: 386;
  }

  .font-weight-387 {
    font-weight: 387;
  }

  .font-weight-388 {
    font-weight: 388;
  }

  .font-weight-389 {
    font-weight: 389;
  }

  .font-weight-390 {
    font-weight: 390;
  }

  .font-weight-391 {
    font-weight: 391;
  }

  .font-weight-392 {
    font-weight: 392;
  }

  .font-weight-393 {
    font-weight: 393;
  }

  .font-weight-394 {
    font-weight: 394;
  }

  .font-weight-395 {
    font-weight: 395;
  }

  .font-weight-396 {
    font-weight: 396;
  }

  .font-weight-397 {
    font-weight: 397;
  }

  .font-weight-398 {
    font-weight: 398;
  }

  .font-weight-399 {
    font-weight: 399;
  }

  .font-weight-400 {
    font-weight: 400;
  }

  .font-weight-401 {
    font-weight: 401;
  }

  .font-weight-402 {
    font-weight: 402;
  }

  .font-weight-403 {
    font-weight: 403;
  }

  .font-weight-404 {
    font-weight: 404;
  }

  .font-weight-405 {
    font-weight: 405;
  }

  .font-weight-406 {
    font-weight: 406;
  }

  .font-weight-407 {
    font-weight: 407;
  }

  .font-weight-408 {
    font-weight: 408;
  }

  .font-weight-409 {
    font-weight: 409;
  }

  .font-weight-410 {
    font-weight: 410;
  }

  .font-weight-411 {
    font-weight: 411;
  }

  .font-weight-412 {
    font-weight: 412;
  }

  .font-weight-413 {
    font-weight: 413;
  }

  .font-weight-414 {
    font-weight: 414;
  }

  .font-weight-415 {
    font-weight: 415;
  }

  .font-weight-416 {
    font-weight: 416;
  }

  .font-weight-417 {
    font-weight: 417;
  }

  .font-weight-418 {
    font-weight: 418;
  }

  .font-weight-419 {
    font-weight: 419;
  }

  .font-weight-420 {
    font-weight: 420;
  }

  .font-weight-421 {
    font-weight: 421;
  }

  .font-weight-422 {
    font-weight: 422;
  }

  .font-weight-423 {
    font-weight: 423;
  }

  .font-weight-424 {
    font-weight: 424;
  }

  .font-weight-425 {
    font-weight: 425;
  }

  .font-weight-426 {
    font-weight: 426;
  }

  .font-weight-427 {
    font-weight: 427;
  }

  .font-weight-428 {
    font-weight: 428;
  }

  .font-weight-429 {
    font-weight: 429;
  }

  .font-weight-430 {
    font-weight: 430;
  }

  .font-weight-431 {
    font-weight: 431;
  }

  .font-weight-432 {
    font-weight: 432;
  }

  .font-weight-433 {
    font-weight: 433;
  }

  .font-weight-434 {
    font-weight: 434;
  }

  .font-weight-435 {
    font-weight: 435;
  }

  .font-weight-436 {
    font-weight: 436;
  }

  .font-weight-437 {
    font-weight: 437;
  }

  .font-weight-438 {
    font-weight: 438;
  }

  .font-weight-439 {
    font-weight: 439;
  }

  .font-weight-440 {
    font-weight: 440;
  }

  .font-weight-441 {
    font-weight: 441;
  }

  .font-weight-442 {
    font-weight: 442;
  }

  .font-weight-443 {
    font-weight: 443;
  }

  .font-weight-444 {
    font-weight: 444;
  }

  .font-weight-445 {
    font-weight: 445;
  }

  .font-weight-446 {
    font-weight: 446;
  }

  .font-weight-447 {
    font-weight: 447;
  }

  .font-weight-448 {
    font-weight: 448;
  }

  .font-weight-449 {
    font-weight: 449;
  }

  .font-weight-450 {
    font-weight: 450;
  }

  .font-weight-451 {
    font-weight: 451;
  }

  .font-weight-452 {
    font-weight: 452;
  }

  .font-weight-453 {
    font-weight: 453;
  }

  .font-weight-454 {
    font-weight: 454;
  }

  .font-weight-455 {
    font-weight: 455;
  }

  .font-weight-456 {
    font-weight: 456;
  }

  .font-weight-457 {
    font-weight: 457;
  }

  .font-weight-458 {
    font-weight: 458;
  }

  .font-weight-459 {
    font-weight: 459;
  }

  .font-weight-460 {
    font-weight: 460;
  }

  .font-weight-461 {
    font-weight: 461;
  }

  .font-weight-462 {
    font-weight: 462;
  }

  .font-weight-463 {
    font-weight: 463;
  }

  .font-weight-464 {
    font-weight: 464;
  }

  .font-weight-465 {
    font-weight: 465;
  }

  .font-weight-466 {
    font-weight: 466;
  }

  .font-weight-467 {
    font-weight: 467;
  }

  .font-weight-468 {
    font-weight: 468;
  }

  .font-weight-469 {
    font-weight: 469;
  }

  .font-weight-470 {
    font-weight: 470;
  }

  .font-weight-471 {
    font-weight: 471;
  }

  .font-weight-472 {
    font-weight: 472;
  }

  .font-weight-473 {
    font-weight: 473;
  }

  .font-weight-474 {
    font-weight: 474;
  }

  .font-weight-475 {
    font-weight: 475;
  }

  .font-weight-476 {
    font-weight: 476;
  }

  .font-weight-477 {
    font-weight: 477;
  }

  .font-weight-478 {
    font-weight: 478;
  }

  .font-weight-479 {
    font-weight: 479;
  }

  .font-weight-480 {
    font-weight: 480;
  }

  .font-weight-481 {
    font-weight: 481;
  }

  .font-weight-482 {
    font-weight: 482;
  }

  .font-weight-483 {
    font-weight: 483;
  }

  .font-weight-484 {
    font-weight: 484;
  }

  .font-weight-485 {
    font-weight: 485;
  }

  .font-weight-486 {
    font-weight: 486;
  }

  .font-weight-487 {
    font-weight: 487;
  }

  .font-weight-488 {
    font-weight: 488;
  }

  .font-weight-489 {
    font-weight: 489;
  }

  .font-weight-490 {
    font-weight: 490;
  }

  .font-weight-491 {
    font-weight: 491;
  }

  .font-weight-492 {
    font-weight: 492;
  }

  .font-weight-493 {
    font-weight: 493;
  }

  .font-weight-494 {
    font-weight: 494;
  }

  .font-weight-495 {
    font-weight: 495;
  }

  .font-weight-496 {
    font-weight: 496;
  }

  .font-weight-497 {
    font-weight: 497;
  }

  .font-weight-498 {
    font-weight: 498;
  }

  .font-weight-499 {
    font-weight: 499;
  }

  .font-weight-500 {
    font-weight: 500;
  }

  .font-weight-501 {
    font-weight: 501;
  }

  .font-weight-502 {
    font-weight: 502;
  }

  .font-weight-503 {
    font-weight: 503;
  }

  .font-weight-504 {
    font-weight: 504;
  }

  .font-weight-505 {
    font-weight: 505;
  }

  .font-weight-506 {
    font-weight: 506;
  }

  .font-weight-507 {
    font-weight: 507;
  }

  .font-weight-508 {
    font-weight: 508;
  }

  .font-weight-509 {
    font-weight: 509;
  }

  .font-weight-510 {
    font-weight: 510;
  }

  .font-weight-511 {
    font-weight: 511;
  }

  .font-weight-512 {
    font-weight: 512;
  }

  .font-weight-513 {
    font-weight: 513;
  }

  .font-weight-514 {
    font-weight: 514;
  }

  .font-weight-515 {
    font-weight: 515;
  }

  .font-weight-516 {
    font-weight: 516;
  }

  .font-weight-517 {
    font-weight: 517;
  }

  .font-weight-518 {
    font-weight: 518;
  }

  .font-weight-519 {
    font-weight: 519;
  }

  .font-weight-520 {
    font-weight: 520;
  }

  .font-weight-521 {
    font-weight: 521;
  }

  .font-weight-522 {
    font-weight: 522;
  }

  .font-weight-523 {
    font-weight: 523;
  }

  .font-weight-524 {
    font-weight: 524;
  }

  .font-weight-525 {
    font-weight: 525;
  }

  .font-weight-526 {
    font-weight: 526;
  }

  .font-weight-527 {
    font-weight: 527;
  }

  .font-weight-528 {
    font-weight: 528;
  }

  .font-weight-529 {
    font-weight: 529;
  }

  .font-weight-530 {
    font-weight: 530;
  }

  .font-weight-531 {
    font-weight: 531;
  }

  .font-weight-532 {
    font-weight: 532;
  }

  .font-weight-533 {
    font-weight: 533;
  }

  .font-weight-534 {
    font-weight: 534;
  }

  .font-weight-535 {
    font-weight: 535;
  }

  .font-weight-536 {
    font-weight: 536;
  }

  .font-weight-537 {
    font-weight: 537;
  }

  .font-weight-538 {
    font-weight: 538;
  }

  .font-weight-539 {
    font-weight: 539;
  }

  .font-weight-540 {
    font-weight: 540;
  }

  .font-weight-541 {
    font-weight: 541;
  }

  .font-weight-542 {
    font-weight: 542;
  }

  .font-weight-543 {
    font-weight: 543;
  }

  .font-weight-544 {
    font-weight: 544;
  }

  .font-weight-545 {
    font-weight: 545;
  }

  .font-weight-546 {
    font-weight: 546;
  }

  .font-weight-547 {
    font-weight: 547;
  }

  .font-weight-548 {
    font-weight: 548;
  }

  .font-weight-549 {
    font-weight: 549;
  }

  .font-weight-550 {
    font-weight: 550;
  }

  .font-weight-551 {
    font-weight: 551;
  }

  .font-weight-552 {
    font-weight: 552;
  }

  .font-weight-553 {
    font-weight: 553;
  }

  .font-weight-554 {
    font-weight: 554;
  }

  .font-weight-555 {
    font-weight: 555;
  }

  .font-weight-556 {
    font-weight: 556;
  }

  .font-weight-557 {
    font-weight: 557;
  }

  .font-weight-558 {
    font-weight: 558;
  }

  .font-weight-559 {
    font-weight: 559;
  }

  .font-weight-560 {
    font-weight: 560;
  }

  .font-weight-561 {
    font-weight: 561;
  }

  .font-weight-562 {
    font-weight: 562;
  }

  .font-weight-563 {
    font-weight: 563;
  }

  .font-weight-564 {
    font-weight: 564;
  }

  .font-weight-565 {
    font-weight: 565;
  }

  .font-weight-566 {
    font-weight: 566;
  }

  .font-weight-567 {
    font-weight: 567;
  }

  .font-weight-568 {
    font-weight: 568;
  }

  .font-weight-569 {
    font-weight: 569;
  }

  .font-weight-570 {
    font-weight: 570;
  }

  .font-weight-571 {
    font-weight: 571;
  }

  .font-weight-572 {
    font-weight: 572;
  }

  .font-weight-573 {
    font-weight: 573;
  }

  .font-weight-574 {
    font-weight: 574;
  }

  .font-weight-575 {
    font-weight: 575;
  }

  .font-weight-576 {
    font-weight: 576;
  }

  .font-weight-577 {
    font-weight: 577;
  }

  .font-weight-578 {
    font-weight: 578;
  }

  .font-weight-579 {
    font-weight: 579;
  }

  .font-weight-580 {
    font-weight: 580;
  }

  .font-weight-581 {
    font-weight: 581;
  }

  .font-weight-582 {
    font-weight: 582;
  }

  .font-weight-583 {
    font-weight: 583;
  }

  .font-weight-584 {
    font-weight: 584;
  }

  .font-weight-585 {
    font-weight: 585;
  }

  .font-weight-586 {
    font-weight: 586;
  }

  .font-weight-587 {
    font-weight: 587;
  }

  .font-weight-588 {
    font-weight: 588;
  }

  .font-weight-589 {
    font-weight: 589;
  }

  .font-weight-590 {
    font-weight: 590;
  }

  .font-weight-591 {
    font-weight: 591;
  }

  .font-weight-592 {
    font-weight: 592;
  }

  .font-weight-593 {
    font-weight: 593;
  }

  .font-weight-594 {
    font-weight: 594;
  }

  .font-weight-595 {
    font-weight: 595;
  }

  .font-weight-596 {
    font-weight: 596;
  }

  .font-weight-597 {
    font-weight: 597;
  }

  .font-weight-598 {
    font-weight: 598;
  }

  .font-weight-599 {
    font-weight: 599;
  }

  .font-weight-600 {
    font-weight: 600;
  }

  .font-weight-601 {
    font-weight: 601;
  }

  .font-weight-602 {
    font-weight: 602;
  }

  .font-weight-603 {
    font-weight: 603;
  }

  .font-weight-604 {
    font-weight: 604;
  }

  .font-weight-605 {
    font-weight: 605;
  }

  .font-weight-606 {
    font-weight: 606;
  }

  .font-weight-607 {
    font-weight: 607;
  }

  .font-weight-608 {
    font-weight: 608;
  }

  .font-weight-609 {
    font-weight: 609;
  }

  .font-weight-610 {
    font-weight: 610;
  }

  .font-weight-611 {
    font-weight: 611;
  }

  .font-weight-612 {
    font-weight: 612;
  }

  .font-weight-613 {
    font-weight: 613;
  }

  .font-weight-614 {
    font-weight: 614;
  }

  .font-weight-615 {
    font-weight: 615;
  }

  .font-weight-616 {
    font-weight: 616;
  }

  .font-weight-617 {
    font-weight: 617;
  }

  .font-weight-618 {
    font-weight: 618;
  }

  .font-weight-619 {
    font-weight: 619;
  }

  .font-weight-620 {
    font-weight: 620;
  }

  .font-weight-621 {
    font-weight: 621;
  }

  .font-weight-622 {
    font-weight: 622;
  }

  .font-weight-623 {
    font-weight: 623;
  }

  .font-weight-624 {
    font-weight: 624;
  }

  .font-weight-625 {
    font-weight: 625;
  }

  .font-weight-626 {
    font-weight: 626;
  }

  .font-weight-627 {
    font-weight: 627;
  }

  .font-weight-628 {
    font-weight: 628;
  }

  .font-weight-629 {
    font-weight: 629;
  }

  .font-weight-630 {
    font-weight: 630;
  }

  .font-weight-631 {
    font-weight: 631;
  }

  .font-weight-632 {
    font-weight: 632;
  }

  .font-weight-633 {
    font-weight: 633;
  }

  .font-weight-634 {
    font-weight: 634;
  }

  .font-weight-635 {
    font-weight: 635;
  }

  .font-weight-636 {
    font-weight: 636;
  }

  .font-weight-637 {
    font-weight: 637;
  }

  .font-weight-638 {
    font-weight: 638;
  }

  .font-weight-639 {
    font-weight: 639;
  }

  .font-weight-640 {
    font-weight: 640;
  }

  .font-weight-641 {
    font-weight: 641;
  }

  .font-weight-642 {
    font-weight: 642;
  }

  .font-weight-643 {
    font-weight: 643;
  }

  .font-weight-644 {
    font-weight: 644;
  }

  .font-weight-645 {
    font-weight: 645;
  }

  .font-weight-646 {
    font-weight: 646;
  }

  .font-weight-647 {
    font-weight: 647;
  }

  .font-weight-648 {
    font-weight: 648;
  }

  .font-weight-649 {
    font-weight: 649;
  }

  .font-weight-650 {
    font-weight: 650;
  }

  .font-weight-651 {
    font-weight: 651;
  }

  .font-weight-652 {
    font-weight: 652;
  }

  .font-weight-653 {
    font-weight: 653;
  }

  .font-weight-654 {
    font-weight: 654;
  }

  .font-weight-655 {
    font-weight: 655;
  }

  .font-weight-656 {
    font-weight: 656;
  }

  .font-weight-657 {
    font-weight: 657;
  }

  .font-weight-658 {
    font-weight: 658;
  }

  .font-weight-659 {
    font-weight: 659;
  }

  .font-weight-660 {
    font-weight: 660;
  }

  .font-weight-661 {
    font-weight: 661;
  }

  .font-weight-662 {
    font-weight: 662;
  }

  .font-weight-663 {
    font-weight: 663;
  }

  .font-weight-664 {
    font-weight: 664;
  }

  .font-weight-665 {
    font-weight: 665;
  }

  .font-weight-666 {
    font-weight: 666;
  }

  .font-weight-667 {
    font-weight: 667;
  }

  .font-weight-668 {
    font-weight: 668;
  }

  .font-weight-669 {
    font-weight: 669;
  }

  .font-weight-670 {
    font-weight: 670;
  }

  .font-weight-671 {
    font-weight: 671;
  }

  .font-weight-672 {
    font-weight: 672;
  }

  .font-weight-673 {
    font-weight: 673;
  }

  .font-weight-674 {
    font-weight: 674;
  }

  .font-weight-675 {
    font-weight: 675;
  }

  .font-weight-676 {
    font-weight: 676;
  }

  .font-weight-677 {
    font-weight: 677;
  }

  .font-weight-678 {
    font-weight: 678;
  }

  .font-weight-679 {
    font-weight: 679;
  }

  .font-weight-680 {
    font-weight: 680;
  }

  .font-weight-681 {
    font-weight: 681;
  }

  .font-weight-682 {
    font-weight: 682;
  }

  .font-weight-683 {
    font-weight: 683;
  }

  .font-weight-684 {
    font-weight: 684;
  }

  .font-weight-685 {
    font-weight: 685;
  }

  .font-weight-686 {
    font-weight: 686;
  }

  .font-weight-687 {
    font-weight: 687;
  }

  .font-weight-688 {
    font-weight: 688;
  }

  .font-weight-689 {
    font-weight: 689;
  }

  .font-weight-690 {
    font-weight: 690;
  }

  .font-weight-691 {
    font-weight: 691;
  }

  .font-weight-692 {
    font-weight: 692;
  }

  .font-weight-693 {
    font-weight: 693;
  }

  .font-weight-694 {
    font-weight: 694;
  }

  .font-weight-695 {
    font-weight: 695;
  }

  .font-weight-696 {
    font-weight: 696;
  }

  .font-weight-697 {
    font-weight: 697;
  }

  .font-weight-698 {
    font-weight: 698;
  }

  .font-weight-699 {
    font-weight: 699;
  }

  .font-weight-700 {
    font-weight: 700;
  }

  .font-weight-701 {
    font-weight: 701;
  }

  .font-weight-702 {
    font-weight: 702;
  }

  .font-weight-703 {
    font-weight: 703;
  }

  .font-weight-704 {
    font-weight: 704;
  }

  .font-weight-705 {
    font-weight: 705;
  }

  .font-weight-706 {
    font-weight: 706;
  }

  .font-weight-707 {
    font-weight: 707;
  }

  .font-weight-708 {
    font-weight: 708;
  }

  .font-weight-709 {
    font-weight: 709;
  }

  .font-weight-710 {
    font-weight: 710;
  }

  .font-weight-711 {
    font-weight: 711;
  }

  .font-weight-712 {
    font-weight: 712;
  }

  .font-weight-713 {
    font-weight: 713;
  }

  .font-weight-714 {
    font-weight: 714;
  }

  .font-weight-715 {
    font-weight: 715;
  }

  .font-weight-716 {
    font-weight: 716;
  }

  .font-weight-717 {
    font-weight: 717;
  }

  .font-weight-718 {
    font-weight: 718;
  }

  .font-weight-719 {
    font-weight: 719;
  }

  .font-weight-720 {
    font-weight: 720;
  }

  .font-weight-721 {
    font-weight: 721;
  }

  .font-weight-722 {
    font-weight: 722;
  }

  .font-weight-723 {
    font-weight: 723;
  }

  .font-weight-724 {
    font-weight: 724;
  }

  .font-weight-725 {
    font-weight: 725;
  }

  .font-weight-726 {
    font-weight: 726;
  }

  .font-weight-727 {
    font-weight: 727;
  }

  .font-weight-728 {
    font-weight: 728;
  }

  .font-weight-729 {
    font-weight: 729;
  }

  .font-weight-730 {
    font-weight: 730;
  }

  .font-weight-731 {
    font-weight: 731;
  }

  .font-weight-732 {
    font-weight: 732;
  }

  .font-weight-733 {
    font-weight: 733;
  }

  .font-weight-734 {
    font-weight: 734;
  }

  .font-weight-735 {
    font-weight: 735;
  }

  .font-weight-736 {
    font-weight: 736;
  }

  .font-weight-737 {
    font-weight: 737;
  }

  .font-weight-738 {
    font-weight: 738;
  }

  .font-weight-739 {
    font-weight: 739;
  }

  .font-weight-740 {
    font-weight: 740;
  }

  .font-weight-741 {
    font-weight: 741;
  }

  .font-weight-742 {
    font-weight: 742;
  }

  .font-weight-743 {
    font-weight: 743;
  }

  .font-weight-744 {
    font-weight: 744;
  }

  .font-weight-745 {
    font-weight: 745;
  }

  .font-weight-746 {
    font-weight: 746;
  }

  .font-weight-747 {
    font-weight: 747;
  }

  .font-weight-748 {
    font-weight: 748;
  }

  .font-weight-749 {
    font-weight: 749;
  }

  .font-weight-750 {
    font-weight: 750;
  }

  .font-weight-751 {
    font-weight: 751;
  }

  .font-weight-752 {
    font-weight: 752;
  }

  .font-weight-753 {
    font-weight: 753;
  }

  .font-weight-754 {
    font-weight: 754;
  }

  .font-weight-755 {
    font-weight: 755;
  }

  .font-weight-756 {
    font-weight: 756;
  }

  .font-weight-757 {
    font-weight: 757;
  }

  .font-weight-758 {
    font-weight: 758;
  }

  .font-weight-759 {
    font-weight: 759;
  }

  .font-weight-760 {
    font-weight: 760;
  }

  .font-weight-761 {
    font-weight: 761;
  }

  .font-weight-762 {
    font-weight: 762;
  }

  .font-weight-763 {
    font-weight: 763;
  }

  .font-weight-764 {
    font-weight: 764;
  }

  .font-weight-765 {
    font-weight: 765;
  }

  .font-weight-766 {
    font-weight: 766;
  }

  .font-weight-767 {
    font-weight: 767;
  }

  .font-weight-768 {
    font-weight: 768;
  }

  .font-weight-769 {
    font-weight: 769;
  }

  .font-weight-770 {
    font-weight: 770;
  }

  .font-weight-771 {
    font-weight: 771;
  }

  .font-weight-772 {
    font-weight: 772;
  }

  .font-weight-773 {
    font-weight: 773;
  }

  .font-weight-774 {
    font-weight: 774;
  }

  .font-weight-775 {
    font-weight: 775;
  }

  .font-weight-776 {
    font-weight: 776;
  }

  .font-weight-777 {
    font-weight: 777;
  }

  .font-weight-778 {
    font-weight: 778;
  }

  .font-weight-779 {
    font-weight: 779;
  }

  .font-weight-780 {
    font-weight: 780;
  }

  .font-weight-781 {
    font-weight: 781;
  }

  .font-weight-782 {
    font-weight: 782;
  }

  .font-weight-783 {
    font-weight: 783;
  }

  .font-weight-784 {
    font-weight: 784;
  }

  .font-weight-785 {
    font-weight: 785;
  }

  .font-weight-786 {
    font-weight: 786;
  }

  .font-weight-787 {
    font-weight: 787;
  }

  .font-weight-788 {
    font-weight: 788;
  }

  .font-weight-789 {
    font-weight: 789;
  }

  .font-weight-790 {
    font-weight: 790;
  }

  .font-weight-791 {
    font-weight: 791;
  }

  .font-weight-792 {
    font-weight: 792;
  }

  .font-weight-793 {
    font-weight: 793;
  }

  .font-weight-794 {
    font-weight: 794;
  }

  .font-weight-795 {
    font-weight: 795;
  }

  .font-weight-796 {
    font-weight: 796;
  }

  .font-weight-797 {
    font-weight: 797;
  }

  .font-weight-798 {
    font-weight: 798;
  }

  .font-weight-799 {
    font-weight: 799;
  }

  .font-weight-800 {
    font-weight: 800;
  }

  .font-weight-801 {
    font-weight: 801;
  }

  .font-weight-802 {
    font-weight: 802;
  }

  .font-weight-803 {
    font-weight: 803;
  }

  .font-weight-804 {
    font-weight: 804;
  }

  .font-weight-805 {
    font-weight: 805;
  }

  .font-weight-806 {
    font-weight: 806;
  }

  .font-weight-807 {
    font-weight: 807;
  }

  .font-weight-808 {
    font-weight: 808;
  }

  .font-weight-809 {
    font-weight: 809;
  }

  .font-weight-810 {
    font-weight: 810;
  }

  .font-weight-811 {
    font-weight: 811;
  }

  .font-weight-812 {
    font-weight: 812;
  }

  .font-weight-813 {
    font-weight: 813;
  }

  .font-weight-814 {
    font-weight: 814;
  }

  .font-weight-815 {
    font-weight: 815;
  }

  .font-weight-816 {
    font-weight: 816;
  }

  .font-weight-817 {
    font-weight: 817;
  }

  .font-weight-818 {
    font-weight: 818;
  }

  .font-weight-819 {
    font-weight: 819;
  }

  .font-weight-820 {
    font-weight: 820;
  }

  .font-weight-821 {
    font-weight: 821;
  }

  .font-weight-822 {
    font-weight: 822;
  }

  .font-weight-823 {
    font-weight: 823;
  }

  .font-weight-824 {
    font-weight: 824;
  }

  .font-weight-825 {
    font-weight: 825;
  }

  .font-weight-826 {
    font-weight: 826;
  }

  .font-weight-827 {
    font-weight: 827;
  }

  .font-weight-828 {
    font-weight: 828;
  }

  .font-weight-829 {
    font-weight: 829;
  }

  .font-weight-830 {
    font-weight: 830;
  }

  .font-weight-831 {
    font-weight: 831;
  }

  .font-weight-832 {
    font-weight: 832;
  }

  .font-weight-833 {
    font-weight: 833;
  }

  .font-weight-834 {
    font-weight: 834;
  }

  .font-weight-835 {
    font-weight: 835;
  }

  .font-weight-836 {
    font-weight: 836;
  }

  .font-weight-837 {
    font-weight: 837;
  }

  .font-weight-838 {
    font-weight: 838;
  }

  .font-weight-839 {
    font-weight: 839;
  }

  .font-weight-840 {
    font-weight: 840;
  }

  .font-weight-841 {
    font-weight: 841;
  }

  .font-weight-842 {
    font-weight: 842;
  }

  .font-weight-843 {
    font-weight: 843;
  }

  .font-weight-844 {
    font-weight: 844;
  }

  .font-weight-845 {
    font-weight: 845;
  }

  .font-weight-846 {
    font-weight: 846;
  }

  .font-weight-847 {
    font-weight: 847;
  }

  .font-weight-848 {
    font-weight: 848;
  }

  .font-weight-849 {
    font-weight: 849;
  }

  .font-weight-850 {
    font-weight: 850;
  }

  .font-weight-851 {
    font-weight: 851;
  }

  .font-weight-852 {
    font-weight: 852;
  }

  .font-weight-853 {
    font-weight: 853;
  }

  .font-weight-854 {
    font-weight: 854;
  }

  .font-weight-855 {
    font-weight: 855;
  }

  .font-weight-856 {
    font-weight: 856;
  }

  .font-weight-857 {
    font-weight: 857;
  }

  .font-weight-858 {
    font-weight: 858;
  }

  .font-weight-859 {
    font-weight: 859;
  }

  .font-weight-860 {
    font-weight: 860;
  }

  .font-weight-861 {
    font-weight: 861;
  }

  .font-weight-862 {
    font-weight: 862;
  }

  .font-weight-863 {
    font-weight: 863;
  }

  .font-weight-864 {
    font-weight: 864;
  }

  .font-weight-865 {
    font-weight: 865;
  }

  .font-weight-866 {
    font-weight: 866;
  }

  .font-weight-867 {
    font-weight: 867;
  }

  .font-weight-868 {
    font-weight: 868;
  }

  .font-weight-869 {
    font-weight: 869;
  }

  .font-weight-870 {
    font-weight: 870;
  }

  .font-weight-871 {
    font-weight: 871;
  }

  .font-weight-872 {
    font-weight: 872;
  }

  .font-weight-873 {
    font-weight: 873;
  }

  .font-weight-874 {
    font-weight: 874;
  }

  .font-weight-875 {
    font-weight: 875;
  }

  .font-weight-876 {
    font-weight: 876;
  }

  .font-weight-877 {
    font-weight: 877;
  }

  .font-weight-878 {
    font-weight: 878;
  }

  .font-weight-879 {
    font-weight: 879;
  }

  .font-weight-880 {
    font-weight: 880;
  }

  .font-weight-881 {
    font-weight: 881;
  }

  .font-weight-882 {
    font-weight: 882;
  }

  .font-weight-883 {
    font-weight: 883;
  }

  .font-weight-884 {
    font-weight: 884;
  }

  .font-weight-885 {
    font-weight: 885;
  }

  .font-weight-886 {
    font-weight: 886;
  }

  .font-weight-887 {
    font-weight: 887;
  }

  .font-weight-888 {
    font-weight: 888;
  }

  .font-weight-889 {
    font-weight: 889;
  }

  .font-weight-890 {
    font-weight: 890;
  }

  .font-weight-891 {
    font-weight: 891;
  }

  .font-weight-892 {
    font-weight: 892;
  }

  .font-weight-893 {
    font-weight: 893;
  }

  .font-weight-894 {
    font-weight: 894;
  }

  .font-weight-895 {
    font-weight: 895;
  }

  .font-weight-896 {
    font-weight: 896;
  }

  .font-weight-897 {
    font-weight: 897;
  }

  .font-weight-898 {
    font-weight: 898;
  }

  .font-weight-899 {
    font-weight: 899;
  }

  .font-weight-900 {
    font-weight: 900;
  }

  .pb-80 {
    padding-bottom: 80px;
  }

  .text-small {
    font-size: 0.75rem;
  }

  .p-readable {
    max-width: 650px;
  }

  .section-info {
    font-size: 14px;
    color: #bbb;
  }

  .heading {
    color: #595062;
    font-weight: 700;
  }

  .br {
    margin: 10px 0;
  }

  .text-mute {
    color: #bbb;
  }

  .display-content {
    margin: 20px 0;
  }

  .display-1 {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-2 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-3 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .t-font-bold {
    font-weight: 500 !important;
  }

  .t-font-bolder {
    font-weight: 600 !important;
  }

  .t-font-boldest {
    font-weight: 700 !important;
  }

  .t-font-u {
    text-transform: uppercase;
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .blockquote-footer {
    display: block;
    font-size: 80%;
    color: #bbb;
  }

  a.typo_link {
    position: relative;
  }

  a.typo_link:hover {
    color: #3f51b5;
  }

  a.typo_link:hover:after {
    width: 100%;
  }

  a.typo_link:after {
    display: block;
    position: absolute;
    content: "";
    width: 0%;
    height: 1px;
    left: 0;
    bottom: -4px;
    transition: width 0.3s ease;
  }

  a.typo_link.text-primary:after {
    background-color: #663399;
  }

  a.typo_link.text-secondary:after {
    background-color: #52495a;
  }

  a.typo_link.text-success:after {
    background-color: #4caf50;
  }

  a.typo_link.text-info:after {
    background-color: #003473;
  }

  a.typo_link.text-warning:after {
    background-color: #ffc107;
  }

  a.typo_link.text-danger:after {
    background-color: #f44336;
  }

  a.typo_link.text-light:after {
    background-color: #bbb;
  }

  a.typo_link.text-dark:after {
    background-color: #47404f;
  }

  a.typo_link.text-gray-100:after {
    background-color: #f8f9fa;
  }

  a.typo_link.text-gray-200:after {
    background-color: #eee;
  }

  a.typo_link.text-gray-300:after {
    background-color: #dee2e6;
  }

  a.typo_link.text-gray-400:after {
    background-color: #ced4da;
  }

  a.typo_link.text-gray-500:after {
    background-color: #bbb;
  }

  a.typo_link.text-gray-600:after {
    background-color: #70657b;
  }

  a.typo_link.text-gray-700:after {
    background-color: #665c70;
  }

  a.typo_link.text-gray-800:after {
    background-color: #52495a;
  }

  a.typo_link.text-gray-900:after {
    background-color: #47404f;
  }

  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .divider > span:first-child {
    width: 100%;
    height: 1px;
    background: #eee;
    display: inline-block;
    flex: 1;
  }

  .divider > span:last-child {
    width: 100%;
    height: 1px;
    background: #eee;
    display: inline-block;
    flex: 1;
  }

  .divider > span:not(:first-child):not(:last-child) {
    padding: 0 2rem;
  }

  .box-shadow-1 {
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.04),
      0 1px 6px rgba(0, 0, 0, 0.04);
  }

  .box-shadow-2 {
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.24),
      0 1px 6px rgba(0, 0, 0, 0.04);
  }

  .layout-sidebar-compact .main-header {
    position: absolute !important;
    width: 100%;
    left: 0;
    box-shadow: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: transparent;
    z-index: 100;
    transition: all 0.24s ease-in-out;
  }
  .layout-sidebar-compact .main-header .logo {
    display: none;
  }

  .main-header {
    position: fixed;
    height: 80px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    z-index: 100;
  }
  .main-header .menu-toggle {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;
  }
  .main-header .menu-toggle div {
    width: 24px;
    height: 1px;
    background: #47404f;
    margin: 3px 0;
  }
  .main-header .search-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #f8f9fa;
    border: 1px solid #eee;
    border-radius: 20px;
    position: relative;
    width: 230px;
    height: 40px;
  }
  .main-header .search-bar input {
    background: transparent;
    border: 0;
    color: #212121;
    font-size: 0.8rem;
    line-height: 2;
    height: 100%;
    outline: initial !important;
    padding: 0.5rem 1rem;
    width: calc(100% - 32px);
  }
  .main-header .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .main-header .logo {
    width: 76px;
  }
  .main-header .logo img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .main-header .header-icon {
    font-size: 19px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 0 2px;
  }
  .main-header .header-icon:hover {
    background: #f8f9fa;
  }
  .main-header .header-icon.dropdown-toggle:after {
    display: none;
  }
  .main-header .header-part-right {
    display: flex;
    align-items: center;
  }
  .main-header .header-part-right .user {
    margin-right: 2rem;
  }
  .main-header .header-part-right .user img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .main-header .notification-dropdown {
    padding: 0;
    max-height: 260px;
    cursor: pointer;
  }
  .main-header .notification-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0;
    height: 72px;
    border-bottom: 1px solid #dee2e6;
  }
  .main-header .notification-dropdown .dropdown-item .notification-icon {
    background: #eee;
    height: 100%;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-header .notification-dropdown .dropdown-item .notification-icon i {
    font-size: 18px;
  }
  .main-header .notification-dropdown .dropdown-item .notification-details {
    padding: 0.25rem 0.75rem;
  }
  .main-header .notification-dropdown .dropdown-item:active {
    color: inherit;
    background: inherit;
  }

  @media (max-width: 1024px) {
    .main-header .search-bar {
      width: 180px;
      display: none;
    }
    .main-header .menu-toggle {
      width: 24px;
      margin: 0 36px;
    }
    .main-header .header-part-right .user {
      margin-right: 1rem;
    }
  }

  @media (max-width: 767px) {
    .main-header .search-bar {
      display: none;
    }
    .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 576px) {
    .main-header {
      height: 70px;
      padding: 0 1.5rem;
    }
    .main-header .logo {
      width: 60px;
    }
    .main-header .menu-toggle {
      width: 24px !important;
      margin: 0 10px !important;
    }
    .main-header .header-part-right .user {
      margin-right: 0;
      padding-right: 0;
    }
    .notification-dropdown {
      left: -180px !important;
    }
  }

  @media (max-width: 360px) {
    .main-header .menu-toggle {
      margin: 0;
    }
  }

  .layout-sidebar-compact.app-admin-wrap {
    width: 100%;
  }

  .layout-sidebar-compact.sidenav-open .main-content-wrap {
    width: calc(100% - 76px - 220px);
  }

  .layout-sidebar-compact.sidenav-open .sidebar-left {
    left: 0;
  }

  .layout-sidebar-compact .main-content-wrap {
    width: 100%;
    float: right;
    margin-top: 0;
    transition: all 0.24s ease-in-out;
    padding: 0 2rem;
    position: relative;
    min-height: calc(100vh - 80px);
    background: #fff;
  }

  .layout-sidebar-compact .main-content {
    margin-top: 104px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 104px);
  }

  .layout-sidebar-compact .sidebar-left-secondary,
  .layout-sidebar-compact .sidebar-left {
    position: fixed;
    top: 0;
    height: 100vh;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
    z-index: 101;
  }

  .layout-sidebar-compact .sidebar-left {
    left: calc(-76px - 20px);
    transition: all 0.24s ease-in-out;
  }
  .layout-sidebar-compact .sidebar-left .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 68px;
    border-bottom: 1px solid rgba(248, 249, 250, 0.05);
  }
  .layout-sidebar-compact .sidebar-left .logo img {
    width: 40px;
  }
  .layout-sidebar-compact .sidebar-left .navigation-left {
    list-style: none;
    text-align: center;
    width: 76px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item {
    position: relative;
    display: block;
    width: 100%;
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid rgba(248, 249, 250, 0.05);
  }
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item:focus,
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item:active {
    outline: none;
  }
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item.lvl1 {
    text-align: center;
  }
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item.active {
    color: #fff;
    border-left: 2px solid #fff;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold {
    width: 100%;
    padding: 22px 0;
    display: block;
    color: #ffffff;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold:focus,
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold:active {
    outline: none;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .nav-icon,
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .feather {
    font-size: 24px;
    height: 24px;
    width: 24px;
    display: block;
    margin: 0 auto;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .nav-text {
    display: none;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    a {
    color: #fff;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item.active
    .triangle {
    display: none;
  }

  .layout-sidebar-compact.sidenav-open .sidebar-left-secondary {
    left: 76px;
  }

  .layout-sidebar-compact .sidebar-left-secondary {
    left: calc(-220px - 20px);
    width: 220px;
    padding: 0.75rem 0;
    transition: all 0.24s ease-in-out;
    background: #fff;
  }
  .layout-sidebar-compact .sidebar-left-secondary .sidebar-close {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
    padding: 16px;
  }
  .layout-sidebar-compact .sidebar-left-secondary header {
    padding: 0px 24px;
  }
  .layout-sidebar-compact .sidebar-left-secondary header .logo {
    padding: 10px 0;
    margin-bottom: 14px;
  }
  .layout-sidebar-compact .sidebar-left-secondary header .logo img {
    width: auto;
    height: 24px;
  }
  .layout-sidebar-compact .sidebar-left-secondary header h6 {
    font-size: 18px;
    margin-bottom: 4px;
    font-weight: 600;
  }
  .layout-sidebar-compact .sidebar-left-secondary header p {
    color: #70657b;
    margin-bottom: 12px;
  }
  .layout-sidebar-compact .sidebar-left-secondary .submenu-area {
    display: none;
  }
  .layout-sidebar-compact .sidebar-left-secondary .childNav {
    list-style: none;
    padding: 0;
  }
  .layout-sidebar-compact .sidebar-left-secondary .childNav li.nav-item {
    display: block;
  }
  .layout-sidebar-compact .sidebar-left-secondary .childNav li.nav-item a {
    color: #332e38;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    padding: 12px 24px;
    transition: 0.15s all ease-in;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a:hover {
    background: #eee;
  }
  .layout-sidebar-compact .sidebar-left-secondary .childNav li.nav-item a.open {
    color: #663399;
    background: #eee;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    font-size: 18px;
    margin-right: 8px;
    vertical-align: middle;
    color: #70657b;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .item-name {
    vertical-align: middle;
    font-weight: 400;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: auto;
    font-size: 11px;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    .submenu {
    margin-left: 8px;
  }
  .layout-sidebar-compact .sidebar-left-secondary > .childNav {
    margin: 0;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item.open
    > div
    > a
    > .dd-arrow {
    transform: rotate(90deg);
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item.open
    > div
    > .childNav {
    max-height: 1000px;
    overflow: visible;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item
    > div
    > a
    > .dd-arrow {
    transition: all 0.4s ease-in-out;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item
    > div
    > .childNav {
    max-height: 0;
    overflow: hidden;
    background: #fff;
    transition: all 0.4s ease-in-out;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item
    > div
    > .childNav
    li.nav-item
    a {
    padding: 12px 12px 12px 50px;
  }

  .layout-sidebar-compact .sidebar-overlay {
    display: none !important;
  }

  @media (max-width: 767px) {
    .layout-sidebar-compact.sidenav-open .main-content-wrap {
      width: 100%;
    }
    .layout-sidebar-compact .sidebar-left-secondary .sidebar-close {
      display: block;
    }
  }

  @media (max-width: 576px) {
    .main-content-wrap {
      padding: 1.5rem;
    }
    .main-content-wrap.sidenav-open {
      width: 100%;
    }
    .main-content-wrap {
      margin-top: 70px;
    }
    .sidebar-left-secondary,
    .sidebar-left {
      top: 70px;
      height: calc(100vh - 70px);
    }
    .sidebar-left {
      left: calc(-90px - 20px);
    }
    .sidebar-left .navigation-left {
      width: 90px;
    }
    .sidebar-left .navigation-left .nav-item.active .triangle {
      border-width: 0 0 24px 24px;
    }
    .sidebar-left .navigation-left .nav-item .nav-item-hold {
      padding: 16px 0;
    }
    .sidebar-left-secondary {
      left: calc(-190px - 20px);
      width: 190px;
    }
    .sidebar-left-secondary.open {
      left: 90px;
    }
    .sidebar-overlay {
      height: calc(100vh - 70px);
    }
  }

  [dir="rtl"] .layout-sidebar-compact .sidebar-left {
    left: auto !important;
    right: calc(-76px - 20px);
  }

  [dir="rtl"] .layout-sidebar-compact.sidenav-open .sidebar-left {
    left: auto !important;
    right: 0;
  }

  [dir="rtl"] .layout-sidebar-compact.sidenav-open .sidebar-left-secondary {
    right: 76px;
  }

  [dir="rtl"] .layout-sidebar-compact .sidebar-left-secondary {
    left: auto !important;
    right: calc(-220px - 20px);
  }
  [dir="rtl"] .layout-sidebar-compact .sidebar-left-secondary header {
    text-align: right;
  }
  [dir="rtl"]
    .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: unset !important;
    margin-right: auto;
  }
  [dir="rtl"]
    .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    margin-left: 8px;
    margin-right: 0;
  }

  [dir="rtl"] .layout-sidebar-compact .main-content-wrap {
    float: left;
  }

  .layout-sidebar-large .main-header {
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    z-index: 100;
  }
  .layout-sidebar-large .main-header .menu-toggle {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;
  }
  .layout-sidebar-large .main-header .menu-toggle div {
    width: 24px;
    height: 1px;
    background: #47404f;
    margin: 3px 0;
  }
  .layout-sidebar-large .main-header .search-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #f8f9fa;
    border: 1px solid #eee;
    border-radius: 20px;
    position: relative;
    width: 230px;
    height: 40px;
  }
  .layout-sidebar-large .main-header .search-bar input {
    background: transparent;
    border: 0;
    color: #212121;
    font-size: 0.8rem;
    line-height: 2;
    height: 100%;
    outline: initial !important;
    padding: 0.5rem 1rem;
    width: calc(100% - 32px);
  }
  .layout-sidebar-large .main-header .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .layout-sidebar-large .main-header .logo {
    width: 120px;
  }
  .layout-sidebar-large .main-header .logo img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .layout-sidebar-large .main-header .header-icon {
    font-size: 19px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 0 2px;
  }
  .layout-sidebar-large .main-header .header-icon:hover {
    background: #f8f9fa;
  }
  .layout-sidebar-large .main-header .header-icon.dropdown-toggle:after {
    display: none;
  }
  .layout-sidebar-large .main-header .header-part-right {
    display: flex;
    align-items: center;
  }
  .layout-sidebar-large .main-header .header-part-right .user {
    margin-right: 2rem;
  }
  .layout-sidebar-large .main-header .header-part-right .user img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .layout-sidebar-large .main-header .notification-dropdown {
    padding: 0;
    max-height: 260px;
    cursor: pointer;
  }
  .layout-sidebar-large .main-header .notification-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0;
    height: 72px;
    border-bottom: 1px solid #dee2e6;
  }
  .layout-sidebar-large
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-icon {
    background: #eee;
    height: 100%;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-sidebar-large
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-icon
    i {
    font-size: 18px;
  }
  .layout-sidebar-large
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-details {
    padding: 0.25rem 0.75rem;
  }
  .layout-sidebar-large
    .main-header
    .notification-dropdown
    .dropdown-item:active {
    color: inherit;
    background: inherit;
  }

  @media (max-width: 991px) {
    .layout-sidebar-large .main-header .search-bar {
      width: 180px;
    }
    .layout-sidebar-large .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 767px) {
    .layout-sidebar-large .main-header .search-bar {
      display: none;
    }
    .layout-sidebar-large .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 576px) {
    .layout-sidebar-large .main-header {
      height: 70px;
      padding: 0 1.5rem;
    }
    .layout-sidebar-large .main-header .logo {
      width: 60px;
    }
    .layout-sidebar-large .main-header .search-bar {
      display: none;
    }
    .layout-sidebar-large .main-header .menu-toggle {
      width: 60px;
    }
    .layout-sidebar-large .main-header .header-part-right .user {
      margin-right: 0;
      padding-right: 0;
    }
    .layout-sidebar-large .notification-dropdown {
      left: -0px !important;
    }
  }

  @media (max-width: 360px) {
    .layout-sidebar-large .main-header .menu-toggle {
      margin: 0;
    }
  }

  .app-admin-wrap {
    width: 100%;
  }

  .main-content-wrap {
    width: 100%;
    float: right;
    margin-top: 80px;
    transition: all 0.24s ease-in-out;
    padding: 2rem 2rem 0;
    position: relative;
    min-height: calc(100vh - 80px);
    background: #fff;
  }
  .main-content-wrap.sidenav-open {
    width: calc(100% - 120px);
  }

  .layout-sidebar-large .sidebar-left-secondary,
  .layout-sidebar-large .sidebar-left {
    position: fixed;
    top: 80px;
    height: calc(100vh - 80px);
    background: #fff;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
  }

  .layout-sidebar-large .sidebar-left {
    left: calc(-120px - 20px);
    z-index: 90;
    transition: all 0.24s ease-in-out;
  }
  .layout-sidebar-large .sidebar-left.open {
    left: 0;
  }
  .layout-sidebar-large .sidebar-left .logo {
    display: none;
  }
  .layout-sidebar-large .sidebar-left .navigation-left {
    list-style: none;
    text-align: center;
    width: 120px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item {
    position: relative;
    display: block;
    width: 100%;
    color: #332e38;
    cursor: pointer;
    border-bottom: 1px solid #dee2e6;
  }
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item:focus,
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item:active {
    outline: none;
  }
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item.lvl1 {
    text-align: center;
  }
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item.active {
    color: #663399;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item.active
    .nav-item-hold {
    color: #663399;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold {
    display: block;
    width: 100%;
    padding: 26px 0;
    color: #47404f;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold:focus,
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold:active {
    outline: none;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .nav-icon,
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .feather {
    font-size: 32px;
    height: 32px;
    width: 32px;
    display: block;
    margin: 0 auto 6px;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .nav-text {
    font-size: 13px;
    display: block;
    font-weight: 400;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    a {
    color: #332e38;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item.active
    .triangle {
    position: absolute;
    width: 0;
    height: 0;
    right: 0;
    bottom: 0;
    border-style: solid;
    border-width: 0 0 30px 30px;
    border-color: transparent transparent #663399 transparent;
  }

  .layout-sidebar-large .sidebar-left-secondary {
    left: calc(-220px - 20px);
    z-index: 89;
    width: 220px;
    padding: 0.75rem 0;
    transition: all 0.24s ease-in-out;
    background: #fff;
  }
  .layout-sidebar-large .sidebar-left-secondary.open {
    left: 120px;
  }
  .layout-sidebar-large .sidebar-left-secondary header {
    display: none;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav {
    list-style: none;
    padding: 0;
    display: none;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav li.nav-item {
    display: block;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav li.nav-item a {
    color: #332e38;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    padding: 12px 24px;
    transition: 0.15s all ease-in;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav li.nav-item a:hover {
    background: #eee;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav li.nav-item a.open {
    color: #663399;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    font-size: 18px;
    margin-right: 8px;
    vertical-align: middle;
    color: #70657b;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .item-name {
    vertical-align: middle;
    font-weight: 400;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: auto;
    font-size: 11px;
    transition: all 0.3s ease-in;
  }
  .layout-sidebar-large .sidebar-left-secondary > .childNav {
    margin: 0;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    li.nav-item.open
    > div
    > a
    > .dd-arrow {
    transform: rotate(90deg);
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    li.nav-item.open
    > div
    > .childNav {
    max-height: 1000px;
    overflow: visible;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    li.nav-item
    > div
    > a
    > .dd-arrow {
    transition: all 0.4s ease-in-out;
  }
  .layout-sidebar-large .sidebar-left-secondary li.nav-item > div > .childNav {
    max-height: 0;
    overflow: hidden;
    background: #fff;
    transition: all 0.4s ease-in-out;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    li.nav-item
    > div
    > .childNav
    li.nav-item
    a {
    padding: 12px 12px 12px 50px;
  }

  .layout-sidebar-large .sidebar-overlay {
    display: none;
    position: fixed;
    width: calc(100% - 120px - 220px);
    height: calc(100vh - 80px);
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 101;
    cursor: w-resize;
  }
  .layout-sidebar-large .sidebar-overlay.open {
    display: block;
  }

  .module-loader {
    position: fixed;
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
  }
  .module-loader .loader,
  .module-loader .spinner {
    position: fixed;
    top: 45%;
    left: calc(50% + 56px);
    z-index: inherit;
  }

  @media (max-width: 576px) {
    .main-content-wrap {
      padding: 1.5rem;
    }
    .main-content-wrap.sidenav-open {
      width: 100%;
    }
    .main-content-wrap {
      margin-top: 70px;
    }
    .sidebar-left-secondary,
    .sidebar-left {
      top: 70px !important;
      height: calc(100vh - 70px);
    }
    .sidebar-left {
      left: calc(-90px - 20px);
    }
    .sidebar-left .navigation-left {
      width: 90px;
    }
    .sidebar-left .navigation-left .nav-item.active .triangle {
      border-width: 0 0 24px 24px;
    }
    .sidebar-left .navigation-left .nav-item .nav-item-hold {
      padding: 16px 0;
    }
    .sidebar-left-secondary {
      left: calc(-190px - 20px);
      width: 190px;
    }
    .sidebar-left-secondary.open {
      left: 90px;
    }
    .sidebar-overlay {
      height: calc(100vh - 70px);
    }
  }

  [dir="rtl"] .layout-sidebar-large .sidebar-left {
    left: auto !important;
    right: calc(-120px - 20px);
  }
  [dir="rtl"] .layout-sidebar-large .sidebar-left.open {
    left: auto !important;
    right: 0;
  }
  [dir="rtl"]
    .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .triangle {
    transform: rotate(90deg);
    right: auto;
    left: 0;
  }

  [dir="rtl"] .layout-sidebar-large .sidebar-left-secondary {
    left: auto !important;
    right: calc(-220px - 20px);
  }
  [dir="rtl"] .layout-sidebar-large .sidebar-left-secondary.open {
    left: auto !important;
    right: 120px;
  }
  [dir="rtl"]
    .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: unset !important;
    margin-right: auto;
  }
  [dir="rtl"]
    .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    margin-left: 8px;
    margin-right: 0;
  }

  [dir="rtl"] .layout-sidebar-large .main-content-wrap {
    float: left;
  }

  [dir="rtl"] .layout-sidebar-large .sidebar-overlay {
    right: auto !important;
    left: 0;
    cursor: e-resize;
  }

  .layout-horizontal-bar .main-content-wrap {
    width: 100%;
    float: right;
    margin-top: 140px !important;
    transition: all 0.24s ease-in-out;
    padding: 2rem 2rem 0;
    position: relative;
    min-height: calc(100vh - 160px);
    background: #fff;
  }

  .layout-horizontal-bar .main-header {
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    z-index: 100;
  }
  .layout-horizontal-bar .main-header .menu-toggle {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;
    display: none;
  }
  .layout-horizontal-bar .main-header .menu-toggle div {
    width: 24px;
    height: 1px;
    background: #47404f;
    margin: 3px 0;
  }
  .layout-horizontal-bar .main-header .search-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #f8f9fa;
    border: 1px solid #eee;
    border-radius: 20px;
    position: relative;
    width: 230px;
    height: 40px;
  }
  .layout-horizontal-bar .main-header .search-bar input {
    background: transparent;
    border: 0;
    color: #212121;
    font-size: 0.8rem;
    line-height: 2;
    height: 100%;
    outline: initial !important;
    padding: 0.5rem 1rem;
    width: calc(100% - 32px);
  }
  .layout-horizontal-bar .main-header .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .layout-horizontal-bar .main-header .logo {
    width: 120px;
  }
  .layout-horizontal-bar .main-header .logo img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .layout-horizontal-bar .main-header .header-icon {
    font-size: 19px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 0 2px;
  }
  .layout-horizontal-bar .main-header .header-icon:hover {
    background: #f8f9fa;
  }
  .layout-horizontal-bar .main-header .header-icon.dropdown-toggle:after {
    display: none;
  }
  .layout-horizontal-bar .main-header .header-part-right {
    display: flex;
    align-items: center;
  }
  .layout-horizontal-bar .main-header .header-part-right .user {
    margin-right: 2rem;
  }
  .layout-horizontal-bar .main-header .header-part-right .user img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .layout-horizontal-bar .main-header .notification-dropdown {
    padding: 0;
    max-height: 260px;
    cursor: pointer;
  }
  .layout-horizontal-bar .main-header .notification-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0;
    height: 72px;
    border-bottom: 1px solid #dee2e6;
  }
  .layout-horizontal-bar
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-icon {
    background: #eee;
    height: 100%;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-horizontal-bar
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-icon
    i {
    font-size: 18px;
  }
  .layout-horizontal-bar
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-details {
    padding: 0.25rem 0.75rem;
  }
  .layout-horizontal-bar
    .main-header
    .notification-dropdown
    .dropdown-item:active {
    color: inherit;
    background: inherit;
  }

  @media (max-width: 991px) {
    .layout-horizontal-bar .main-header .search-bar {
      width: 180px;
    }
    .layout-horizontal-bar .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 767px) {
    .layout-horizontal-bar .main-header .search-bar {
      display: none;
    }
    .layout-horizontal-bar .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
      display: block;
    }
    .layout-horizontal-bar .main-content-wrap {
      width: 100%;
      float: right;
      margin-top: 80px !important;
      transition: all 0.24s ease-in-out;
      padding: 2rem 2rem 0;
      position: relative;
      min-height: calc(100vh - 160px);
      background: #fff;
    }
    .layout-horizontal-bar .header-topnav.open {
      left: 0px;
    }
  }

  @media (max-width: 576px) {
    .layout-horizontal-bar .main-header {
      height: 70px;
      padding: 0 1.5rem;
    }
    .layout-horizontal-bar .main-header .logo {
      width: 60px;
    }
    .layout-horizontal-bar .main-header .search-bar {
      display: none;
    }
    .layout-horizontal-bar .main-header .menu-toggle {
      width: 60px;
    }
    .layout-horizontal-bar .main-header .header-part-right .user {
      margin-right: 0;
      padding-right: 0;
    }
    .layout-horizontal-bar .notification-dropdown {
      left: -0px !important;
    }
  }

  @media (max-width: 360px) {
    .layout-horizontal-bar .main-header .menu-toggle {
      margin: 0;
    }
  }

  .app-admin-wrap {
    width: 100%;
  }

  .main-content-wrap {
    width: 100%;
    float: right;
    margin-top: 80px;
    transition: all 0.24s ease-in-out;
    padding: 2rem 2rem 0;
    position: relative;
    min-height: calc(100vh - 80px);
    background: #fff;
  }
  .main-content-wrap.sidenav-open {
    width: calc(100% - 120px);
  }

  .module-loader {
    position: fixed;
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
  }
  .module-loader .loader,
  .module-loader .spinner {
    position: fixed;
    top: 45%;
    left: calc(50% + 56px);
    z-index: inherit;
  }

  @media (max-width: 576px) {
    .main-content-wrap {
      padding: 1.5rem;
    }
    .main-content-wrap.sidenav-open {
      width: 100%;
    }
    .main-content-wrap {
      margin-top: 70px;
    }
  }

  [dir="rtl"] .layout-horizontal-bar .sidebar-left {
    left: auto !important;
    right: calc(-120px - 20px);
  }
  [dir="rtl"] .layout-horizontal-bar .sidebar-left.open {
    left: auto !important;
    right: 0;
  }
  [dir="rtl"]
    .layout-horizontal-bar
    .sidebar-left
    .navigation-left
    .nav-item
    .triangle {
    transform: rotate(90deg);
    right: auto;
    left: 0;
  }

  [dir="rtl"] .layout-horizontal-bar .sidebar-left-secondary {
    left: auto !important;
    right: calc(-220px - 20px);
  }
  [dir="rtl"] .layout-horizontal-bar .sidebar-left-secondary.open {
    left: auto !important;
    right: 120px;
  }
  [dir="rtl"]
    .layout-horizontal-bar
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: unset !important;
    margin-right: auto;
  }
  [dir="rtl"]
    .layout-horizontal-bar
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    margin-left: 8px;
    margin-right: 0;
  }

  [dir="rtl"] .layout-horizontal-bar .main-content-wrap {
    float: left;
  }

  [dir="rtl"] .layout-horizontal-bar .sidebar-overlay {
    right: auto !important;
    left: 0;
    cursor: e-resize;
  }

  .app-footer {
    margin-top: 2rem;
    background: #f8f9fa;
    padding: 1.25rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .app-footer .footer-bottom {
    width: 100%;
  }
  .app-footer .footer-bottom .logo {
    width: 3rem;
    height: auto;
    margin: 4px;
  }

  .layout-sidebar-vertical .main-content-wrap {
    width: 100%;
    min-height: 100vh;
    float: right;
  }
  .layout-sidebar-vertical .main-content-wrap .main-header {
    border-radius: 5px;
    height: 64px;
  }
  .layout-sidebar-vertical .main-content-wrap .main-header .header-toggle {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-toggle
    .sidebar-full-toggle,
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-toggle
    .sidebar-compact-toggle {
    vertical-align: middle;
    padding: 0;
    min-width: 0;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background: none;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-toggle
    .sidebar-full-toggle
    i,
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-toggle
    .sidebar-compact-toggle
    i {
    background-repeat: no-repeat;
    display: inline-block;
    height: 24px;
    width: 24px;
  }
  .layout-sidebar-vertical .main-content-wrap .main-header .search-bar {
    height: 38px;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form {
    position: relative;
    background: #fff;
    border-radius: 40px;
    display: block;
    max-width: 220px;
    margin: 0;
    box-shadow: inset 0 0 2px 2px rgba(136, 136, 136, 0.2);
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 100%;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form
    .bmd-form-group {
    padding: 0;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form
    i {
    padding-left: 8px;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form
    input {
    border: none;
    padding: 0 8px;
    background: transparent;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form
    input:focus {
    outline: none;
  }
  .layout-sidebar-vertical .main-content-wrap .main-header .header-dropdown {
    text-transform: uppercase;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    .notification-badge {
    position: absolute;
    top: 8px;
    right: 14px;
    border-radius: 50%;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    .language-dropdown
    .header-btn-group
    button
    .language-text {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    margin-right: 13px;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    button:hover {
    background: none;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    button
    img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    button
    i {
    color: #111;
    height: 24px;
    width: 24px;
    display: inline-block;
    align-items: center;
    line-height: 1.6;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    .dropdown-menu
    a
    i {
    color: gray;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .profile-dropdown
    .dropdown-menu {
    left: auto !important;
    right: 12px !important;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .profile-dropdown
    .dropdown-menu
    .dropdown-item {
    flex-flow: row;
  }

  .b-none_button {
    border: none;
  }

  .b-none_button {
    box-shadow: none !important;
  }

  .gull-input:focus {
    box-shadow: none !important;
  }

  .avatar-dropdown .user img {
    width: 100px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer !important;
  }

  .cursor-pointer {
    cursor: pointer !important;
  }

  .gull-brand img {
    width: 60px;
    margin-right: 5px;
  }

  .gull-sidebar--width {
    width: 20px;
    margin-right: 15px;
  }

  .layout-sidebar-vertical .sidebar-panel {
    height: 100vh;
    position: fixed;
    top: 0;
    left: -240px;
    width: 240px;
    z-index: 1000;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    background: #fff;
  }
  .layout-sidebar-vertical .sidebar-panel .brand {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-sidebar-vertical .sidebar-panel .brand img {
    height: 20px;
  }
  .layout-sidebar-vertical .sidebar-panel .sidebar-compact-switch {
    position: relative;
    width: 24px;
    height: 12px;
    border-radius: 10px;
    border: 1px solid #70657b;
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
  .layout-sidebar-vertical .sidebar-panel .sidebar-compact-switch span {
    position: absolute;
    left: 1px;
    top: 1px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #bbb;
    transition: all 0.3s ease-in;
  }
  .layout-sidebar-vertical .sidebar-panel .scroll-nav {
    height: calc(100vh - 64px);
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-photo img {
    height: 72px;
    width: 72px;
    border-radius: 50%;
    border: 1px solid #eee;
    padding: 4px;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-name {
    display: block;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-name i {
    font-size: 12px;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-control {
    margin-bottom: 1rem;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-control a {
    color: #47404f;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-control a i {
    font-size: 16px;
    height: 20px;
    width: 20px;
    line-height: 20px;
    display: inline-block;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .icon-menu-title,
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu-title {
    color: #70657b;
    font-size: 12px;
    padding: 16px 0 16px 16px;
    display: block;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .icon-menu .icon-menu-item {
    padding: 0 24px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul {
    padding: 0 12px;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul li {
    list-style: none;
    font-size: 15px;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul li a {
    color: #47404f;
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0px 15px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li
    a
    .nav-icon {
    margin-right: 10px;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li
    a
    .item-name {
    text-transform: capitalize;
    font-size: 15px;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul li a .spacer {
    margin: auto;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul li a:hover {
    text-decoration: none;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li.dropdown
    > .sub-menu {
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease-in;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li.dropdown
    > .sub-menu
    a {
    height: 44px;
    padding-left: 50px;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li.dropdown.open
    > .sub-menu {
    max-height: 1000px;
  }

  .app-admin-wrap.sidebar-full.sidebar-closed .sidebar-panel {
    left: -240px;
  }

  .app-admin-wrap.sidebar-full.sidebar-closed .main-content-wrap {
    width: 100%;
  }

  .app-admin-wrap.sidebar-full .sidebar-panel {
    width: 240px;
    left: 0px;
  }

  .app-admin-wrap.sidebar-full .main-content-wrap {
    width: calc(100% - 240px);
    padding: 1rem 2rem 0rem;
  }

  .app-admin-wrap.sidebar-compact .sidebar-panel {
    width: 75px;
    left: 0;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .app-user,
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-title,
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu-title,
  .app-admin-wrap.sidebar-compact .sidebar-panel .item-badge,
  .app-admin-wrap.sidebar-compact .sidebar-panel .item-name {
    display: none;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .sidebar-compact-switch {
    display: none;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-item {
    flex-direction: column;
    padding: 0;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-item a {
    width: 100%;
    display: contents;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-item a i {
    padding: 5px;
    font-size: 30px;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-item a:hover {
    cursor: pointer;
    padding: 0px 10px;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu ul li a i {
    padding: 0;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu ul li a i a {
    width: 100%;
    display: contents;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu ul li a i a i {
    padding: 5px;
    font-size: 30px;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu ul li a i a:hover {
    cursor: pointer;
    padding: 0px 10px;
  }
  .app-admin-wrap.sidebar-compact
    .sidebar-panel
    .main-menu
    ul
    li
    a
    .main-menu
    ul
    li
    a
    i {
    padding: 0;
  }
  .app-admin-wrap.sidebar-compact
    .sidebar-panel
    .main-menu
    ul
    li
    a
    .main-menu
    .dropdown {
    display: none;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu .dropdown {
    display: none;
  }

  .app-admin-wrap.sidebar-compact .main-content-wrap {
    width: calc(100% - 65px);
    padding: 1rem 2rem 0;
  }

  .app-admin-wrap.sidebar-compact .main-content-wrap .main-header {
    height: 64px;
  }

  .main-content-wrap.sidebar-full-z-index {
    width: calc(100% - 65px) !important;
    z-index: -100;
  }

  ul.metismenu {
    position: relative;
  }

  .Ul_li--hover::before {
    content: "";
    background-color: #663399;
    position: absolute;
    height: 36px;
    width: 225px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    opacity: 0.1;
    left: -233px;
    transition: all 400ms ease;
  }

  .Ul_li--hover:hover::before {
    left: 0px;
    transition: all 300ms ease;
    z-index: -1;
  }

  .metismenu .has-arrow:after {
    right: 2em !important;
    opacity: 0.6 !important;
    width: 0.6em !important;
    height: 0.6em !important;
    border-width: 2px 0 0 2px !important;
  }

  .comp {
    position: absolute;
    top: 69px;
    right: -166px;
  }

  .header-toggle .mobile-menu-icon {
    display: none !important;
  }

  .has-arrow.without-after-element:after {
    content: none !important;
  }

  .sidebar-overlay {
    display: none;
  }

  @media only screen and (max-width: 1150px) {
    .sidebar-switch-open {
      left: 0px !important;
    }
    .app-admin-wrap.sidebar-full .sidebar-panel {
      left: -240px;
    }
    .header-toggle .mobile-menu-icon {
      display: block !important;
    }
    .switch-overlay {
      height: calc(100vh - 70px);
      display: block;
      position: fixed;
      width: calc(100% - 240px);
      height: calc(100vh - 5px);
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0);
      z-index: 20000;
      cursor: w-resize;
    }
    .app-admin-wrap.sidebar-full .main-content-wrap {
      width: calc(100% - 0px);
    }
    .sidebar-compact-switch {
      display: none;
    }
  }

  @media only screen and (max-width: 530px) {
    .mobile-hide {
      display: none !important;
    }
  }

  .has-arrow.without-after-element:after {
    content: none !important;
  }

  [dir="rtl"] .Ul_li--hover::before {
    content: "";
    background-color: #663399;
    position: absolute;
    height: 36px;
    width: 225px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    opacity: 0.1;
    right: -233px;
    transition: all 400ms ease;
  }

  [dir="rtl"] .Ul_li--hover:hover::before {
    right: 0px;
    transition: all 300ms ease;
    z-index: -1;
  }

  [dir="rtl"] .metismenu .has-arrow:after {
    left: 2em !important;
    right: auto !important;
    opacity: 0.6 !important;
    width: 0.6em !important;
    height: 0.6em !important;
    border-width: 2px 0 0 2px !important;
  }

  [dir="rtl"] .comp {
    position: absolute;
    top: 69px;
    left: -166px;
  }

  [dir="rtl"] .layout-sidebar-vertical .ml-auto,
  [dir="rtl"] .layout-sidebar-vertical .mx-auto {
    margin-right: auto !important;
  }

  [dir="rtl"] .layout-sidebar-vertical .sidebar-panel {
    height: 100vh;
    position: fixed;
    top: 0;
    right: -240px;
  }

  [dir="rtl"] .layout-sidebar-vertical .main-content-wrap {
    float: left;
  }

  [dir="rtl"] .layout-sidebar-vertical .side-nav .icon-menu-title,
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu-title {
    color: #70657b;
    font-size: 12px;
    padding: 16px 0 16px 16px;
    display: block;
  }

  [dir="rtl"] .layout-sidebar-vertical .side-nav .icon-menu .icon-menu-item {
    padding: 0 24px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }

  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul {
    padding: 0 12px;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li {
    list-style: none;
    font-size: 15px;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a {
    color: #47404f;
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0px 15px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a .nav-icon {
    margin-left: 10px;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a .item-name {
    text-transform: capitalize;
    font-size: 15px;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a .spacer {
    margin: auto;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a:hover {
    text-decoration: none;
  }
  [dir="rtl"]
    .layout-sidebar-vertical
    .side-nav
    .main-menu
    ul
    li.dropdown
    > .sub-menu {
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease-in;
  }
  [dir="rtl"]
    .layout-sidebar-vertical
    .side-nav
    .main-menu
    ul
    li.dropdown
    > .sub-menu
    a {
    height: 44px;
    padding-right: 50px;
  }
  [dir="rtl"]
    .layout-sidebar-vertical
    .side-nav
    .main-menu
    ul
    li.dropdown.open
    > .sub-menu {
    max-height: 1000px;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-full.sidebar-closed .sidebar-panel {
    right: -240px;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-full.sidebar-closed .main-content-wrap {
    width: 100%;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-full .sidebar-panel {
    width: 240px;
    right: 0px;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-full .main-content-wrap {
    width: calc(100% - 240px);
    padding: 1rem 2rem 0rem;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel {
    width: 75px;
    right: 0;
  }
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .app-user,
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-title,
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu-title,
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .item-badge,
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .item-name {
    display: none;
  }

  .sidebar-panel,
  .main-content-wrap,
  .main-header {
    transition: all 0.2s ease-in;
  }

  .main-content-wrap {
    width: 100%;
    min-height: 100vh;
    float: right;
  }
  .main-content-wrap .main-content-body {
    padding: 0.66rem;
  }

  .app-admin-wrap.sidebar-compact-onhover .sidebar-compact-switch {
    background: #663399;
  }
  .app-admin-wrap.sidebar-compact-onhover .sidebar-compact-switch span {
    left: 14px;
    background: #fff;
  }

  .bg-off-white {
    background-color: #f9f9f9;
  }

  .sidebar-left-secondary .childNav li.nav-item.open > a {
    background: #eee;
  }
  .sidebar-left-secondary .childNav li.nav-item.open > a > .dd-arrow {
    transform: rotate(90deg);
  }

  .sidebar-left-secondary .childNav li.nav-item.open > .submenu {
    max-height: 1000px;
  }

  .sidebar-left-secondary .childNav li.nav-item .submenu {
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in;
  }
  .sidebar-left-secondary .childNav li.nav-item .submenu > li a {
    padding-left: 50px;
  }

  [dir="rtl"] .notification-dropdown .dropdown-item .notification-details {
    text-align: right;
  }

  [dir="rtl"] .main-header .user {
    margin-left: 2rem;
    margin-right: 0;
  }

  .active-color {
    height: 40px;
    padding: 0 12px 0 24px;
    border-radius: 0 35px 35px 0;
    margin-right: 16px;
    background-color: #663399;
    color: #fff !important;
  }

  [role="tab"] .btn {
    width: 100%;
    text-align: left;
  }
  [role="tab"] .btn:hover,
  [role="tab"] .btn:focus {
    text-decoration: none;
  }

  .accordion > .card {
    overflow: hidden;
  }

  .avatar-sm {
    width: 36px;
    height: 36px;
  }

  .avatar-md {
    width: 54px;
    height: 54px;
  }

  .avatar-lg {
    width: 80px;
    height: 80px;
  }

  .avatar-xl {
    width: 150px;
    height: 150px;
  }

  .avatar-sm-table {
    width: 20px;
    height: 20px;
  }

  .border-bottom-primary {
    border-bottom: 1px solid #663399;
  }

  .border-bottom-secondary {
    border-bottom: 1px solid #52495a;
  }

  .border-bottom-success {
    border-bottom: 1px solid #4caf50;
  }

  .border-bottom-info {
    border-bottom: 1px solid #003473;
  }

  .border-bottom-warning {
    border-bottom: 1px solid #ffc107;
  }

  .border-bottom-danger {
    border-bottom: 1px solid #f44336;
  }

  .border-bottom-light {
    border-bottom: 1px solid #bbb;
  }

  .border-bottom-dark {
    border-bottom: 1px solid #47404f;
  }

  .border-bottom-gray-100 {
    border-bottom: 1px solid #f8f9fa;
  }

  .border-bottom-gray-200 {
    border-bottom: 1px solid #eee;
  }

  .border-bottom-gray-300 {
    border-bottom: 1px solid #dee2e6;
  }

  .border-bottom-gray-400 {
    border-bottom: 1px solid #ced4da;
  }

  .border-bottom-gray-500 {
    border-bottom: 1px solid #bbb;
  }

  .border-bottom-gray-600 {
    border-bottom: 1px solid #70657b;
  }

  .border-bottom-gray-700 {
    border-bottom: 1px solid #665c70;
  }

  .border-bottom-gray-800 {
    border-bottom: 1px solid #52495a;
  }

  .border-bottom-gray-900 {
    border-bottom: 1px solid #47404f;
  }

  .border-bottom-dotted-primary {
    border-bottom: 1px dotted #663399;
  }

  .border-bottom-dotted-secondary {
    border-bottom: 1px dotted #52495a;
  }

  .border-bottom-dotted-success {
    border-bottom: 1px dotted #4caf50;
  }

  .border-bottom-dotted-info {
    border-bottom: 1px dotted #003473;
  }

  .border-bottom-dotted-warning {
    border-bottom: 1px dotted #ffc107;
  }

  .border-bottom-dotted-danger {
    border-bottom: 1px dotted #f44336;
  }

  .border-bottom-dotted-light {
    border-bottom: 1px dotted #bbb;
  }

  .border-bottom-dotted-dark {
    border-bottom: 1px dotted #47404f;
  }

  .border-bottom-dotted-gray-100 {
    border-bottom: 1px dotted #f8f9fa;
  }

  .border-bottom-dotted-gray-200 {
    border-bottom: 1px dotted #eee;
  }

  .border-bottom-dotted-gray-300 {
    border-bottom: 1px dotted #dee2e6;
  }

  .border-bottom-dotted-gray-400 {
    border-bottom: 1px dotted #ced4da;
  }

  .border-bottom-dotted-gray-500 {
    border-bottom: 1px dotted #bbb;
  }

  .border-bottom-dotted-gray-600 {
    border-bottom: 1px dotted #70657b;
  }

  .border-bottom-dotted-gray-700 {
    border-bottom: 1px dotted #665c70;
  }

  .border-bottom-dotted-gray-800 {
    border-bottom: 1px dotted #52495a;
  }

  .border-bottom-dotted-gray-900 {
    border-bottom: 1px dotted #47404f;
  }

  .card {
    border-radius: 10px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
    border: 0;
  }
  .card.border-top {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #4caf50;
  }

  .card-header,
  .card-footer {
    border-color: rgba(0, 0, 0, 0.03);
  }

  .card-title {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .card-img-overlay * {
    position: relative;
    z-index: 1;
  }

  .card-img-overlay:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.36);
    z-index: 0;
  }

  .card-img-overlay .separator {
    width: 35px;
    margin: auto;
  }

  .card-img-overlay .card-footer {
    position: absolute;
    bottom: 16px;
    left: 20px;
    border: 0;
    background: transparent;
  }
  .card-img-overlay .card-footer [class^="i-"] {
    font-size: 0.875rem;
    vertical-align: text-bottom;
  }

  .card-icon .card-body {
    padding: 2rem 0.5rem;
  }

  .card-icon [class^="i-"] {
    font-size: 32px;
  }

  .card-icon [class^="i-"],
  .card-icon .lead {
    color: #663399;
  }

  .card-icon-big .card-body {
    padding: 2rem 0.5rem;
  }

  .card-icon-big [class^="i-"] {
    font-size: 48px;
  }

  .card-icon-big [class^="i-"] {
    color: rgba(102, 51, 153, 0.6);
  }

  .card-icon-bg {
    position: relative;
    z-index: 1;
  }
  .card-icon-bg .card-body {
    display: flex;
  }
  .card-icon-bg .card-body .content {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 70px;
  }
  .card-icon-bg [class^="i-"] {
    font-size: 4rem;
    color: rgba(187, 187, 187, 0.28);
  }
  .card-icon-bg .lead {
    line-height: 1;
  }

  .card-icon-bg-primary [class^="i-"] {
    color: rgba(102, 51, 153, 0.28);
  }

  .card-icon-bg-secondary [class^="i-"] {
    color: rgba(82, 73, 90, 0.28);
  }

  .card-icon-bg-success [class^="i-"] {
    color: rgba(76, 175, 80, 0.28);
  }

  .card-icon-bg-info [class^="i-"] {
    color: rgba(0, 52, 115, 0.28);
  }

  .card-icon-bg-warning [class^="i-"] {
    color: rgba(255, 193, 7, 0.28);
  }

  .card-icon-bg-danger [class^="i-"] {
    color: rgba(244, 67, 54, 0.28);
  }

  .card-icon-bg-light [class^="i-"] {
    color: rgba(187, 187, 187, 0.28);
  }

  .card-icon-bg-dark [class^="i-"] {
    color: rgba(71, 64, 79, 0.28);
  }

  .card-icon-bg-gray-100 [class^="i-"] {
    color: rgba(248, 249, 250, 0.28);
  }

  .card-icon-bg-gray-200 [class^="i-"] {
    color: rgba(238, 238, 238, 0.28);
  }

  .card-icon-bg-gray-300 [class^="i-"] {
    color: rgba(222, 226, 230, 0.28);
  }

  .card-icon-bg-gray-400 [class^="i-"] {
    color: rgba(206, 212, 218, 0.28);
  }

  .card-icon-bg-gray-500 [class^="i-"] {
    color: rgba(187, 187, 187, 0.28);
  }

  .card-icon-bg-gray-600 [class^="i-"] {
    color: rgba(112, 101, 123, 0.28);
  }

  .card-icon-bg-gray-700 [class^="i-"] {
    color: rgba(102, 92, 112, 0.28);
  }

  .card-icon-bg-gray-800 [class^="i-"] {
    color: rgba(82, 73, 90, 0.28);
  }

  .card-icon-bg-gray-900 [class^="i-"] {
    color: rgba(71, 64, 79, 0.28);
  }

  .card-profile-1 .avatar {
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin: auto;
    border-radius: 50%;
  }

  .card-ecommerce-1 .card-body [class^="i-"] {
    display: block;
    font-size: 78px;
    color: #663399;
  }

  .card-ecommerce-2 .row {
    margin: 0;
  }

  .card-ecommerce-2 .card-action,
  .card-ecommerce-2 .col {
    padding: 1rem;
  }

  .card-ecommerce-2 .card-action {
    position: relative;
    display: flex;
    align-items: center;
  }
  .card-ecommerce-2 .card-action .icon {
    font-size: 22px;
    height: 24px;
    display: inline-block;
    width: 24px;
    line-height: 24px;
    margin: 0 8px;
    cursor: pointer;
  }
  .card-ecommerce-2 .card-action:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: rgba(71, 64, 79, 0.1);
  }

  .card-ecommerce-3 .card-img-left {
    height: 220px;
    object-fit: cover;
  }

  .card-socials-simple a {
    display: inline-block;
    padding: 4px;
  }

  .card-zoom-in {
    position: relative;
    background-color: white;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .card-zoom-in:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 5px;
    opacity: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .card-zoom-in:hover {
    transform: scale(1.2);
  }

  .card-zoom-in:hover:after {
    opacity: 1;
  }

  @media screen and (max-width: 576px) {
    .card-ecommerce-3 .card-img-left {
      width: 100%;
    }
  }

  #calendar {
    float: right;
    width: 100%;
  }

  #external-events h4 {
    font-size: 16px;
    margin-top: 0;
    padding-top: 1em;
  }

  #external-events .fc-event {
    margin: 2px 0;
    cursor: move;
  }

  .create_event_wrap p {
    margin: 1.5em 0;
    font-size: 11px;
    color: #666;
  }

  .create_event_wrap p input {
    margin: 0;
    vertical-align: middle;
  }

  .fc-event {
    position: relative;
    display: block;
    font-size: 0.85em;
    line-height: 1.3;
    border-radius: 3px;
    border: 0px solid #663399 !important;
  }

  a.fc-day-grid-event {
    background: #663399;
    padding: 5px;
  }

  th.fc-day-header {
    border-bottom-width: 2px;
    padding: 10px 0px;
    display: table-cell;
    background: #f5f5f5;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  td.fc-head-container {
    padding: 0px !important;
  }

  .fc-toolbar h2 {
    margin: 0;
    font-weight: bold;
  }

  span.fa {
    font-family: "iconsmind" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  span.fa.fa-chevron-left:before {
    content: "\f077";
  }

  span.fa.fa-chevron-right:before {
    content: "\f07d";
  }

  .breadcrumb {
    background: transparent;
    align-items: center;
    margin: 0 0 1.25rem;
    padding: 0;
  }
  .breadcrumb h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
  }
  .breadcrumb ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .breadcrumb ul li {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    line-height: 1;
    vertical-align: bottom;
    color: #70657b;
  }
  .breadcrumb ul li:after {
    position: absolute;
    top: -1px;
    right: 0;
    content: "";
    height: 16px;
    width: 1px;
    background: #70657b;
    border-radius: 5px;
  }
  .breadcrumb ul li:last-child:after {
    display: none;
  }
  .breadcrumb ul li a {
    color: #332e38;
  }

  [dir="rtl"] .breadcrumb h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
    margin-left: 0.5rem;
  }

  @media (max-width: 576px) {
    .breadcrumb {
      flex-direction: column;
      align-items: flex-start;
    }
    .breadcrumb ul li:first-child {
      padding-left: 0;
    }
  }

  html [type="button"],
  .btn[type="button"] {
    -webkit-appearance: none !important;
  }

  .btn.rounded,
  .btn.btn-rounded {
    border-radius: 40px !important;
  }

  .btn.btn-xl {
    padding: 0.75rem 2rem;
    font-size: 1.18rem;
  }

  .btn:focus {
    box-shadow: none;
  }

  .btn-secondary,
  .btn-raised-secondary {
    color: #47404f !important;
    background-color: #fff !important;
  }

  .btn-icon [class^="i-"],
  .btn-icon .icon {
    vertical-align: middle;
    margin: 0 2px;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .btn-icon.rounded-circle {
    width: 44px;
    height: 44px;
    padding: 0;
  }

  .btn-icon-text [class^="i-"],
  .btn-icon-text .icon {
    vertical-align: middle;
    margin: 0 2px;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .btn-outline-email {
    background: rgba(238, 238, 238, 0.6);
  }

  .btn-spinner {
    width: 1em;
    height: 1em;
    background: transparent;
    border-radius: 50%;
    margin: 0 16px 0 0;
    border: 2px solid transparent;
  }

  .btn-checkbox .checkbox,
  .btn-checkbox .radio {
    display: inline;
  }

  .btn.btn-outline-light.btn-svg {
    border-color: #665c70;
  }
  .btn.btn-outline-light.btn-svg.active,
  .btn.btn-outline-light.btn-svg:hover {
    background: #663399;
    border-color: #663399;
  }
  .btn.btn-outline-light.btn-svg.active svg,
  .btn.btn-outline-light.btn-svg:hover svg {
    fill: #ffffff;
  }
  .btn.btn-outline-light.btn-svg:focus {
    box-shadow: none !important;
  }

  .btn-raised {
    color: #fff;
  }

  .btn-primary,
  .btn-outline-primary {
    border-color: #663399;
  }
  .btn-primary .btn-spinner,
  .btn-outline-primary .btn-spinner {
    animation: btn-glow-primary 1s ease infinite;
  }
  .btn-primary:hover,
  .btn-outline-primary:hover {
    background: #663399;
    box-shadow: 0 8px 25px -8px #663399;
    border-color: #663399;
  }
  .btn-primary:focus,
  .btn-outline-primary:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #663399;
  }

  .btn-raised.btn-raised-primary {
    background: #663399;
    box-shadow: 0 4px 6px rgba(102, 51, 153, 0.11),
      0 1px 3px rgba(102, 51, 153, 0.08);
  }

  @keyframes btn-glow-primary {
    0% {
      box-shadow: 0 0 0 0.4em #4d2673, 0 0 0 0.1em #4d2673;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #4d2673, 0 0 0 3.6em transparent;
    }
  }

  .btn-secondary,
  .btn-outline-secondary {
    border-color: #52495a;
  }
  .btn-secondary .btn-spinner,
  .btn-outline-secondary .btn-spinner {
    animation: btn-glow-secondary 1s ease infinite;
  }
  .btn-secondary:hover,
  .btn-outline-secondary:hover {
    background: #52495a;
    box-shadow: 0 8px 25px -8px #52495a;
    border-color: #52495a;
  }
  .btn-secondary:focus,
  .btn-outline-secondary:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #52495a;
  }

  .btn-raised.btn-raised-secondary {
    background: #52495a;
    box-shadow: 0 4px 6px rgba(82, 73, 90, 0.11),
      0 1px 3px rgba(82, 73, 90, 0.08);
  }

  @keyframes btn-glow-secondary {
    0% {
      box-shadow: 0 0 0 0.4em #38323e, 0 0 0 0.1em #38323e;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #38323e, 0 0 0 3.6em transparent;
    }
  }

  .btn-success,
  .btn-outline-success {
    border-color: #4caf50;
  }
  .btn-success .btn-spinner,
  .btn-outline-success .btn-spinner {
    animation: btn-glow-success 1s ease infinite;
  }
  .btn-success:hover,
  .btn-outline-success:hover {
    background: #4caf50;
    box-shadow: 0 8px 25px -8px #4caf50;
    border-color: #4caf50;
  }
  .btn-success:focus,
  .btn-outline-success:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #4caf50;
  }

  .btn-raised.btn-raised-success {
    background: #4caf50;
    box-shadow: 0 4px 6px rgba(76, 175, 80, 0.11),
      0 1px 3px rgba(76, 175, 80, 0.08);
  }

  @keyframes btn-glow-success {
    0% {
      box-shadow: 0 0 0 0.4em #3d8b40, 0 0 0 0.1em #3d8b40;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #3d8b40, 0 0 0 3.6em transparent;
    }
  }

  .btn-info,
  .btn-outline-info {
    border-color: #003473;
  }
  .btn-info .btn-spinner,
  .btn-outline-info .btn-spinner {
    animation: btn-glow-info 1s ease infinite;
  }
  .btn-info:hover,
  .btn-outline-info:hover {
    background: #003473;
    box-shadow: 0 8px 25px -8px #003473;
    border-color: #003473;
  }
  .btn-info:focus,
  .btn-outline-info:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #003473;
  }

  .btn-raised.btn-raised-info {
    background: #003473;
    box-shadow: 0 4px 6px rgba(0, 52, 115, 0.11),
      0 1px 3px rgba(0, 52, 115, 0.08);
  }

  @keyframes btn-glow-info {
    0% {
      box-shadow: 0 0 0 0.4em #001d40, 0 0 0 0.1em #001d40;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #001d40, 0 0 0 3.6em transparent;
    }
  }

  .btn-warning,
  .btn-outline-warning {
    border-color: #ffc107;
  }
  .btn-warning .btn-spinner,
  .btn-outline-warning .btn-spinner {
    animation: btn-glow-warning 1s ease infinite;
  }
  .btn-warning:hover,
  .btn-outline-warning:hover {
    background: #ffc107;
    box-shadow: 0 8px 25px -8px #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:focus,
  .btn-outline-warning:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #ffc107;
  }

  .btn-raised.btn-raised-warning {
    background: #ffc107;
    box-shadow: 0 4px 6px rgba(255, 193, 7, 0.11),
      0 1px 3px rgba(255, 193, 7, 0.08);
  }

  @keyframes btn-glow-warning {
    0% {
      box-shadow: 0 0 0 0.4em #d39e00, 0 0 0 0.1em #d39e00;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #d39e00, 0 0 0 3.6em transparent;
    }
  }

  .btn-danger,
  .btn-outline-danger {
    border-color: #f44336;
  }
  .btn-danger .btn-spinner,
  .btn-outline-danger .btn-spinner {
    animation: btn-glow-danger 1s ease infinite;
  }
  .btn-danger:hover,
  .btn-outline-danger:hover {
    background: #f44336;
    box-shadow: 0 8px 25px -8px #f44336;
    border-color: #f44336;
  }
  .btn-danger:focus,
  .btn-outline-danger:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #f44336;
  }

  .btn-raised.btn-raised-danger {
    background: #f44336;
    box-shadow: 0 4px 6px rgba(244, 67, 54, 0.11),
      0 1px 3px rgba(244, 67, 54, 0.08);
  }

  @keyframes btn-glow-danger {
    0% {
      box-shadow: 0 0 0 0.4em #ea1c0d, 0 0 0 0.1em #ea1c0d;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #ea1c0d, 0 0 0 3.6em transparent;
    }
  }

  .btn-light,
  .btn-outline-light {
    border-color: #bbb;
  }
  .btn-light .btn-spinner,
  .btn-outline-light .btn-spinner {
    animation: btn-glow-light 1s ease infinite;
  }
  .btn-light:hover,
  .btn-outline-light:hover {
    background: #bbb;
    box-shadow: 0 8px 25px -8px #bbb;
    border-color: #bbb;
  }
  .btn-light:focus,
  .btn-outline-light:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #bbb;
  }

  .btn-raised.btn-raised-light {
    background: #bbb;
    box-shadow: 0 4px 6px rgba(187, 187, 187, 0.11),
      0 1px 3px rgba(187, 187, 187, 0.08);
  }

  @keyframes btn-glow-light {
    0% {
      box-shadow: 0 0 0 0.4em #a2a2a2, 0 0 0 0.1em #a2a2a2;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #a2a2a2, 0 0 0 3.6em transparent;
    }
  }

  .btn-dark,
  .btn-outline-dark {
    border-color: #47404f;
  }
  .btn-dark .btn-spinner,
  .btn-outline-dark .btn-spinner {
    animation: btn-glow-dark 1s ease infinite;
  }
  .btn-dark:hover,
  .btn-outline-dark:hover {
    background: #47404f;
    box-shadow: 0 8px 25px -8px #47404f;
    border-color: #47404f;
  }
  .btn-dark:focus,
  .btn-outline-dark:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #47404f;
  }

  .btn-raised.btn-raised-dark {
    background: #47404f;
    box-shadow: 0 4px 6px rgba(71, 64, 79, 0.11),
      0 1px 3px rgba(71, 64, 79, 0.08);
  }

  @keyframes btn-glow-dark {
    0% {
      box-shadow: 0 0 0 0.4em #2e2932, 0 0 0 0.1em #2e2932;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #2e2932, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-100,
  .btn-outline-gray-100 {
    border-color: #f8f9fa;
  }
  .btn-gray-100 .btn-spinner,
  .btn-outline-gray-100 .btn-spinner {
    animation: btn-glow-gray-100 1s ease infinite;
  }
  .btn-gray-100:hover,
  .btn-outline-gray-100:hover {
    background: #f8f9fa;
    box-shadow: 0 8px 25px -8px #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-gray-100:focus,
  .btn-outline-gray-100:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #f8f9fa;
  }

  .btn-raised.btn-raised-gray-100 {
    background: #f8f9fa;
    box-shadow: 0 4px 6px rgba(248, 249, 250, 0.11),
      0 1px 3px rgba(248, 249, 250, 0.08);
  }

  @keyframes btn-glow-gray-100 {
    0% {
      box-shadow: 0 0 0 0.4em #dae0e5, 0 0 0 0.1em #dae0e5;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #dae0e5, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-200,
  .btn-outline-gray-200 {
    border-color: #eee;
  }
  .btn-gray-200 .btn-spinner,
  .btn-outline-gray-200 .btn-spinner {
    animation: btn-glow-gray-200 1s ease infinite;
  }
  .btn-gray-200:hover,
  .btn-outline-gray-200:hover {
    background: #eee;
    box-shadow: 0 8px 25px -8px #eee;
    border-color: #eee;
  }
  .btn-gray-200:focus,
  .btn-outline-gray-200:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #eee;
  }

  .btn-raised.btn-raised-gray-200 {
    background: #eee;
    box-shadow: 0 4px 6px rgba(238, 238, 238, 0.11),
      0 1px 3px rgba(238, 238, 238, 0.08);
  }

  @keyframes btn-glow-gray-200 {
    0% {
      box-shadow: 0 0 0 0.4em #d5d5d5, 0 0 0 0.1em #d5d5d5;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #d5d5d5, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-300,
  .btn-outline-gray-300 {
    border-color: #dee2e6;
  }
  .btn-gray-300 .btn-spinner,
  .btn-outline-gray-300 .btn-spinner {
    animation: btn-glow-gray-300 1s ease infinite;
  }
  .btn-gray-300:hover,
  .btn-outline-gray-300:hover {
    background: #dee2e6;
    box-shadow: 0 8px 25px -8px #dee2e6;
    border-color: #dee2e6;
  }
  .btn-gray-300:focus,
  .btn-outline-gray-300:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #dee2e6;
  }

  .btn-raised.btn-raised-gray-300 {
    background: #dee2e6;
    box-shadow: 0 4px 6px rgba(222, 226, 230, 0.11),
      0 1px 3px rgba(222, 226, 230, 0.08);
  }

  @keyframes btn-glow-gray-300 {
    0% {
      box-shadow: 0 0 0 0.4em #c1c9d0, 0 0 0 0.1em #c1c9d0;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #c1c9d0, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-400,
  .btn-outline-gray-400 {
    border-color: #ced4da;
  }
  .btn-gray-400 .btn-spinner,
  .btn-outline-gray-400 .btn-spinner {
    animation: btn-glow-gray-400 1s ease infinite;
  }
  .btn-gray-400:hover,
  .btn-outline-gray-400:hover {
    background: #ced4da;
    box-shadow: 0 8px 25px -8px #ced4da;
    border-color: #ced4da;
  }
  .btn-gray-400:focus,
  .btn-outline-gray-400:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #ced4da;
  }

  .btn-raised.btn-raised-gray-400 {
    background: #ced4da;
    box-shadow: 0 4px 6px rgba(206, 212, 218, 0.11),
      0 1px 3px rgba(206, 212, 218, 0.08);
  }

  @keyframes btn-glow-gray-400 {
    0% {
      box-shadow: 0 0 0 0.4em #b1bbc4, 0 0 0 0.1em #b1bbc4;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #b1bbc4, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-500,
  .btn-outline-gray-500 {
    border-color: #bbb;
  }
  .btn-gray-500 .btn-spinner,
  .btn-outline-gray-500 .btn-spinner {
    animation: btn-glow-gray-500 1s ease infinite;
  }
  .btn-gray-500:hover,
  .btn-outline-gray-500:hover {
    background: #bbb;
    box-shadow: 0 8px 25px -8px #bbb;
    border-color: #bbb;
  }
  .btn-gray-500:focus,
  .btn-outline-gray-500:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #bbb;
  }

  .btn-raised.btn-raised-gray-500 {
    background: #bbb;
    box-shadow: 0 4px 6px rgba(187, 187, 187, 0.11),
      0 1px 3px rgba(187, 187, 187, 0.08);
  }

  @keyframes btn-glow-gray-500 {
    0% {
      box-shadow: 0 0 0 0.4em #a2a2a2, 0 0 0 0.1em #a2a2a2;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #a2a2a2, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-600,
  .btn-outline-gray-600 {
    border-color: #70657b;
  }
  .btn-gray-600 .btn-spinner,
  .btn-outline-gray-600 .btn-spinner {
    animation: btn-glow-gray-600 1s ease infinite;
  }
  .btn-gray-600:hover,
  .btn-outline-gray-600:hover {
    background: #70657b;
    box-shadow: 0 8px 25px -8px #70657b;
    border-color: #70657b;
  }
  .btn-gray-600:focus,
  .btn-outline-gray-600:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #70657b;
  }

  .btn-raised.btn-raised-gray-600 {
    background: #70657b;
    box-shadow: 0 4px 6px rgba(112, 101, 123, 0.11),
      0 1px 3px rgba(112, 101, 123, 0.08);
  }

  @keyframes btn-glow-gray-600 {
    0% {
      box-shadow: 0 0 0 0.4em #574e5f, 0 0 0 0.1em #574e5f;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #574e5f, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-700,
  .btn-outline-gray-700 {
    border-color: #665c70;
  }
  .btn-gray-700 .btn-spinner,
  .btn-outline-gray-700 .btn-spinner {
    animation: btn-glow-gray-700 1s ease infinite;
  }
  .btn-gray-700:hover,
  .btn-outline-gray-700:hover {
    background: #665c70;
    box-shadow: 0 8px 25px -8px #665c70;
    border-color: #665c70;
  }
  .btn-gray-700:focus,
  .btn-outline-gray-700:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #665c70;
  }

  .btn-raised.btn-raised-gray-700 {
    background: #665c70;
    box-shadow: 0 4px 6px rgba(102, 92, 112, 0.11),
      0 1px 3px rgba(102, 92, 112, 0.08);
  }

  @keyframes btn-glow-gray-700 {
    0% {
      box-shadow: 0 0 0 0.4em #4d4554, 0 0 0 0.1em #4d4554;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #4d4554, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-800,
  .btn-outline-gray-800 {
    border-color: #52495a;
  }
  .btn-gray-800 .btn-spinner,
  .btn-outline-gray-800 .btn-spinner {
    animation: btn-glow-gray-800 1s ease infinite;
  }
  .btn-gray-800:hover,
  .btn-outline-gray-800:hover {
    background: #52495a;
    box-shadow: 0 8px 25px -8px #52495a;
    border-color: #52495a;
  }
  .btn-gray-800:focus,
  .btn-outline-gray-800:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #52495a;
  }

  .btn-raised.btn-raised-gray-800 {
    background: #52495a;
    box-shadow: 0 4px 6px rgba(82, 73, 90, 0.11),
      0 1px 3px rgba(82, 73, 90, 0.08);
  }

  @keyframes btn-glow-gray-800 {
    0% {
      box-shadow: 0 0 0 0.4em #38323e, 0 0 0 0.1em #38323e;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #38323e, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-900,
  .btn-outline-gray-900 {
    border-color: #47404f;
  }
  .btn-gray-900 .btn-spinner,
  .btn-outline-gray-900 .btn-spinner {
    animation: btn-glow-gray-900 1s ease infinite;
  }
  .btn-gray-900:hover,
  .btn-outline-gray-900:hover {
    background: #47404f;
    box-shadow: 0 8px 25px -8px #47404f;
    border-color: #47404f;
  }
  .btn-gray-900:focus,
  .btn-outline-gray-900:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #47404f;
  }

  .btn-raised.btn-raised-gray-900 {
    background: #47404f;
    box-shadow: 0 4px 6px rgba(71, 64, 79, 0.11),
      0 1px 3px rgba(71, 64, 79, 0.08);
  }

  @keyframes btn-glow-gray-900 {
    0% {
      box-shadow: 0 0 0 0.4em #2e2932, 0 0 0 0.1em #2e2932;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #2e2932, 0 0 0 3.6em transparent;
    }
  }

  .btn-facebook {
    color: #fff;
    background-color: #3765c9;
    border-color: #3765c9;
  }

  .btn-facebook:hover {
    background-color: #3765c9;
    border-color: #3765c9;
  }

  .btn-google {
    color: #fff;
    background-color: #ec412c;
    border-color: #ec412c;
  }

  .btn-twitter {
    color: #fff;
    background-color: #039ff5;
    border-color: #039ff5;
  }

  .btn-instagram {
    color: #fff;
    background-color: #c13584;
    border-color: #c13584;
  }

  .btn-linkedin {
    color: #fff;
    background-color: #0077b5;
    border-color: #0077b5;
  }

  .btn-dribble {
    color: #fff;
    background-color: #ea4c89;
    border-color: #ea4c89;
  }

  .btn-youtube {
    color: #fff;
    background-color: #c4302b;
    border-color: #c4302b;
  }

  .btn-outline-facebook {
    color: #3765c9 !important;
    border-color: #3765c9;
    background: rgba(238, 238, 238, 0.6);
  }
  .btn-outline-facebook:hover {
    background: #315bb5;
    border-color: #315bb5;
    color: #fff !important;
  }

  .btn-outline-google {
    color: #ec412c !important;
    border-color: #ec412c;
    background: rgba(238, 238, 238, 0.6);
  }
  .btn-outline-google:hover {
    background: #e92c15;
    border-color: #e92c15;
    color: #fff !important;
  }

  .btn-outline-twitter {
    color: #039ff5 !important;
    border-color: #039ff5;
    background: rgba(238, 238, 238, 0.6);
  }
  .btn-outline-twitter:hover {
    background: #038fdc;
    border-color: #038fdc;
  }

  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }

  .nav-tabs {
    border: 0;
  }
  .nav-tabs .nav-item .nav-link {
    border: 0;
    padding: 1rem;
  }
  .nav-tabs .nav-item .nav-link:not(.disabled) {
    color: inherit;
  }
  .nav-tabs .nav-item .nav-link.active {
    border-bottom: 2px solid #663399;
    background: rgba(102, 51, 153, 0.1);
  }
  .nav-tabs .nav-item .dropdown-toggle:after {
    position: absolute;
    top: calc(50% - 2px);
    right: 6px !important;
  }

  .tab-content {
    padding: 1rem;
  }

  ngb-tabset.p-0 .tab-content {
    padding: 1rem 0;
  }

  .dropdown-toggle {
    position: relative;
  }
  .dropdown-toggle.btn {
    padding-right: 28px;
  }
  .dropdown-toggle::after {
    position: absolute;
    top: calc(50% - 2px);
    right: 10px !important;
  }

  .dropdown-menu {
    border: 0;
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.04),
      0 1px 6px rgba(0, 0, 0, 0.08);
  }

  .dropdown-item {
    padding: 0.42rem 1.5rem;
  }

  .menu-icon-grid {
    width: 220px;
    padding: 0 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .menu-icon-grid > a {
    display: inline-flex;
    width: 6rem;
    flex-direction: column;
    align-items: center;
    padding: 18px 12px;
    color: #52495a;
    border-radius: 4px;
  }
  .menu-icon-grid > a i {
    font-size: 28px;
    margin-bottom: 4px;
  }
  .menu-icon-grid > a:hover {
    background: #663399;
    color: #fff;
  }

  .mega-menu {
    position: static;
  }
  .mega-menu .dropdown-menu {
    left: auto;
    right: 0;
    width: calc(100% - 120px);
    max-width: 1200px;
    padding: 0;
    overflow: hidden;
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
  }
  .mega-menu .dropdown-menu .bg-img {
    background: linear-gradient(to right, #663399, #003473);
  }
  .mega-menu .dropdown-menu .bg-img,
  .mega-menu .dropdown-menu .bg-img .title {
    color: #ffffff;
  }
  .mega-menu .dropdown-menu ul.links {
    list-style: none;
    margin: 0;
    padding: 0;
    column-count: 2;
  }
  .mega-menu .dropdown-menu ul.links li a {
    display: inline-block;
    margin-bottom: 8px;
    color: #70657b;
  }
  .mega-menu .dropdown-menu ul.links li a:hover {
    color: #663399;
  }

  .widget_dropdown .dropdown-menu {
    left: auto !important;
    right: 2px !important;
  }

  @media (max-width: 767px) {
    .mega-menu .dropdown-menu {
      width: calc(100% - 10px);
    }
  }

  [dir="rtl"] .mega-menu .dropdown-menu {
    left: 0 !important;
    right: 0 !important;
    margin: auto !important;
  }

  table.dataTable-collapse {
    border-collapse: collapse !important;
  }

  .form-group {
    position: relative;
    margin-bottom: 10px;
  }
  .form-group label {
    font-size: 12px;
    color: #70657b;
    margin-bottom: 4px;
  }

  .form-control {
    border: initial;
    outline: initial !important;
    background: #f8f9fa;
    border: 1px solid #ced4da;
    color: #47404f;
  }
  .form-control::placeholder {
    color: #bbb;
  }
  .form-control.rounded,
  .form-control.form-control-rounded {
    border-radius: 20px;
  }

  select.form-control {
    -webkit-appearance: none;
  }

  .input-group [type="text"].form-control {
    height: 34px;
  }

  .input-group-append .btn {
    height: 34px;
    border: 0;
  }

  [ngbdatepicker] {
    height: 34px;
  }

  /* checkbox-custom */
  .checkbox,
  .radio {
    display: block;
    position: relative;
    padding-left: 28px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
  }
  .checkbox:hover input ~ .checkmark,
  .radio:hover input ~ .checkmark {
    background-color: #bbb;
  }
  .checkbox input,
  .radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkbox input:checked ~ .checkmark,
  .radio input:checked ~ .checkmark {
    background-color: #663399;
  }
  .checkbox input:checked ~ .checkmark:after,
  .radio input:checked ~ .checkmark:after {
    display: block;
  }
  .checkbox input[disabled] ~ *,
  .radio input[disabled] ~ * {
    color: #dee2e6;
  }
  .checkbox .checkmark,
  .radio .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    background-color: #dee2e6;
  }
  .checkbox .checkmark:after,
  .radio .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 0;
    top: 0;
    right: 0;
    width: 4px;
    bottom: 0;
    margin: auto;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .checkbox-primary input:checked ~ .checkmark {
    background-color: #663399 !important;
  }

  .checkbox-secondary input:checked ~ .checkmark {
    background-color: #52495a !important;
  }

  .checkbox-success input:checked ~ .checkmark {
    background-color: #4caf50 !important;
  }

  .checkbox-info input:checked ~ .checkmark {
    background-color: #003473 !important;
  }

  .checkbox-warning input:checked ~ .checkmark {
    background-color: #ffc107 !important;
  }

  .checkbox-danger input:checked ~ .checkmark {
    background-color: #f44336 !important;
  }

  .checkbox-light input:checked ~ .checkmark {
    background-color: #bbb !important;
  }

  .checkbox-dark input:checked ~ .checkmark {
    background-color: #47404f !important;
  }

  .checkbox-gray-100 input:checked ~ .checkmark {
    background-color: #f8f9fa !important;
  }

  .checkbox-gray-200 input:checked ~ .checkmark {
    background-color: #eee !important;
  }

  .checkbox-gray-300 input:checked ~ .checkmark {
    background-color: #dee2e6 !important;
  }

  .checkbox-gray-400 input:checked ~ .checkmark {
    background-color: #ced4da !important;
  }

  .checkbox-gray-500 input:checked ~ .checkmark {
    background-color: #bbb !important;
  }

  .checkbox-gray-600 input:checked ~ .checkmark {
    background-color: #70657b !important;
  }

  .checkbox-gray-700 input:checked ~ .checkmark {
    background-color: #665c70 !important;
  }

  .checkbox-gray-800 input:checked ~ .checkmark {
    background-color: #52495a !important;
  }

  .checkbox-gray-900 input:checked ~ .checkmark {
    background-color: #47404f !important;
  }

  .checkbox-outline-primary:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-primary input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-primary .checkmark {
    background: #fff;
    border: 1px solid #663399;
  }
  .checkbox-outline-primary .checkmark:after {
    border-color: #663399;
  }

  .checkbox-outline-secondary:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-secondary input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-secondary .checkmark {
    background: #fff;
    border: 1px solid #52495a;
  }
  .checkbox-outline-secondary .checkmark:after {
    border-color: #52495a;
  }

  .checkbox-outline-success:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-success input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-success .checkmark {
    background: #fff;
    border: 1px solid #4caf50;
  }
  .checkbox-outline-success .checkmark:after {
    border-color: #4caf50;
  }

  .checkbox-outline-info:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-info input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-info .checkmark {
    background: #fff;
    border: 1px solid #003473;
  }
  .checkbox-outline-info .checkmark:after {
    border-color: #003473;
  }

  .checkbox-outline-warning:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-warning input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-warning .checkmark {
    background: #fff;
    border: 1px solid #ffc107;
  }
  .checkbox-outline-warning .checkmark:after {
    border-color: #ffc107;
  }

  .checkbox-outline-danger:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-danger input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-danger .checkmark {
    background: #fff;
    border: 1px solid #f44336;
  }
  .checkbox-outline-danger .checkmark:after {
    border-color: #f44336;
  }

  .checkbox-outline-light:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-light input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-light .checkmark {
    background: #fff;
    border: 1px solid #bbb;
  }
  .checkbox-outline-light .checkmark:after {
    border-color: #bbb;
  }

  .checkbox-outline-dark:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-dark input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-dark .checkmark {
    background: #fff;
    border: 1px solid #47404f;
  }
  .checkbox-outline-dark .checkmark:after {
    border-color: #47404f;
  }

  .checkbox-outline-gray-100:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-100 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-100 .checkmark {
    background: #fff;
    border: 1px solid #f8f9fa;
  }
  .checkbox-outline-gray-100 .checkmark:after {
    border-color: #f8f9fa;
  }

  .checkbox-outline-gray-200:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-200 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-200 .checkmark {
    background: #fff;
    border: 1px solid #eee;
  }
  .checkbox-outline-gray-200 .checkmark:after {
    border-color: #eee;
  }

  .checkbox-outline-gray-300:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-300 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-300 .checkmark {
    background: #fff;
    border: 1px solid #dee2e6;
  }
  .checkbox-outline-gray-300 .checkmark:after {
    border-color: #dee2e6;
  }

  .checkbox-outline-gray-400:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-400 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-400 .checkmark {
    background: #fff;
    border: 1px solid #ced4da;
  }
  .checkbox-outline-gray-400 .checkmark:after {
    border-color: #ced4da;
  }

  .checkbox-outline-gray-500:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-500 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-500 .checkmark {
    background: #fff;
    border: 1px solid #bbb;
  }
  .checkbox-outline-gray-500 .checkmark:after {
    border-color: #bbb;
  }

  .checkbox-outline-gray-600:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-600 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-600 .checkmark {
    background: #fff;
    border: 1px solid #70657b;
  }
  .checkbox-outline-gray-600 .checkmark:after {
    border-color: #70657b;
  }

  .checkbox-outline-gray-700:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-700 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-700 .checkmark {
    background: #fff;
    border: 1px solid #665c70;
  }
  .checkbox-outline-gray-700 .checkmark:after {
    border-color: #665c70;
  }

  .checkbox-outline-gray-800:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-800 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-800 .checkmark {
    background: #fff;
    border: 1px solid #52495a;
  }
  .checkbox-outline-gray-800 .checkmark:after {
    border-color: #52495a;
  }

  .checkbox-outline-gray-900:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-900 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-900 .checkmark {
    background: #fff;
    border: 1px solid #47404f;
  }
  .checkbox-outline-gray-900 .checkmark:after {
    border-color: #47404f;
  }

  .radio .checkmark {
    border-radius: 50%;
  }
  .radio .checkmark:after {
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: white;
  }

  .radio-primary input:checked ~ .checkmark {
    background-color: #663399;
  }

  .radio-secondary input:checked ~ .checkmark {
    background-color: #52495a;
  }

  .radio-success input:checked ~ .checkmark {
    background-color: #4caf50;
  }

  .radio-info input:checked ~ .checkmark {
    background-color: #003473;
  }

  .radio-warning input:checked ~ .checkmark {
    background-color: #ffc107;
  }

  .radio-danger input:checked ~ .checkmark {
    background-color: #f44336;
  }

  .radio-light input:checked ~ .checkmark {
    background-color: #bbb;
  }

  .radio-dark input:checked ~ .checkmark {
    background-color: #47404f;
  }

  .radio-gray-100 input:checked ~ .checkmark {
    background-color: #f8f9fa;
  }

  .radio-gray-200 input:checked ~ .checkmark {
    background-color: #eee;
  }

  .radio-gray-300 input:checked ~ .checkmark {
    background-color: #dee2e6;
  }

  .radio-gray-400 input:checked ~ .checkmark {
    background-color: #ced4da;
  }

  .radio-gray-500 input:checked ~ .checkmark {
    background-color: #bbb;
  }

  .radio-gray-600 input:checked ~ .checkmark {
    background-color: #70657b;
  }

  .radio-gray-700 input:checked ~ .checkmark {
    background-color: #665c70;
  }

  .radio-gray-800 input:checked ~ .checkmark {
    background-color: #52495a;
  }

  .radio-gray-900 input:checked ~ .checkmark {
    background-color: #47404f;
  }

  .radio-outline-primary:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-primary input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-primary .checkmark {
    background: #fff;
    border: 1px solid #663399;
  }
  .radio-outline-primary .checkmark:after {
    border: 0;
    background: #663399;
  }

  .radio-outline-secondary:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-secondary input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-secondary .checkmark {
    background: #fff;
    border: 1px solid #52495a;
  }
  .radio-outline-secondary .checkmark:after {
    border: 0;
    background: #52495a;
  }

  .radio-outline-success:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-success input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-success .checkmark {
    background: #fff;
    border: 1px solid #4caf50;
  }
  .radio-outline-success .checkmark:after {
    border: 0;
    background: #4caf50;
  }

  .radio-outline-info:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-info input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-info .checkmark {
    background: #fff;
    border: 1px solid #003473;
  }
  .radio-outline-info .checkmark:after {
    border: 0;
    background: #003473;
  }

  .radio-outline-warning:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-warning input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-warning .checkmark {
    background: #fff;
    border: 1px solid #ffc107;
  }
  .radio-outline-warning .checkmark:after {
    border: 0;
    background: #ffc107;
  }

  .radio-outline-danger:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-danger input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-danger .checkmark {
    background: #fff;
    border: 1px solid #f44336;
  }
  .radio-outline-danger .checkmark:after {
    border: 0;
    background: #f44336;
  }

  .radio-outline-light:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-light input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-light .checkmark {
    background: #fff;
    border: 1px solid #bbb;
  }
  .radio-outline-light .checkmark:after {
    border: 0;
    background: #bbb;
  }

  .radio-outline-dark:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-dark input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-dark .checkmark {
    background: #fff;
    border: 1px solid #47404f;
  }
  .radio-outline-dark .checkmark:after {
    border: 0;
    background: #47404f;
  }

  .radio-outline-gray-100:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-100 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-100 .checkmark {
    background: #fff;
    border: 1px solid #f8f9fa;
  }
  .radio-outline-gray-100 .checkmark:after {
    border: 0;
    background: #f8f9fa;
  }

  .radio-outline-gray-200:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-200 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-200 .checkmark {
    background: #fff;
    border: 1px solid #eee;
  }
  .radio-outline-gray-200 .checkmark:after {
    border: 0;
    background: #eee;
  }

  .radio-outline-gray-300:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-300 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-300 .checkmark {
    background: #fff;
    border: 1px solid #dee2e6;
  }
  .radio-outline-gray-300 .checkmark:after {
    border: 0;
    background: #dee2e6;
  }

  .radio-outline-gray-400:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-400 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-400 .checkmark {
    background: #fff;
    border: 1px solid #ced4da;
  }
  .radio-outline-gray-400 .checkmark:after {
    border: 0;
    background: #ced4da;
  }

  .radio-outline-gray-500:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-500 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-500 .checkmark {
    background: #fff;
    border: 1px solid #bbb;
  }
  .radio-outline-gray-500 .checkmark:after {
    border: 0;
    background: #bbb;
  }

  .radio-outline-gray-600:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-600 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-600 .checkmark {
    background: #fff;
    border: 1px solid #70657b;
  }
  .radio-outline-gray-600 .checkmark:after {
    border: 0;
    background: #70657b;
  }

  .radio-outline-gray-700:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-700 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-700 .checkmark {
    background: #fff;
    border: 1px solid #665c70;
  }
  .radio-outline-gray-700 .checkmark:after {
    border: 0;
    background: #665c70;
  }

  .radio-outline-gray-800:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-800 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-800 .checkmark {
    background: #fff;
    border: 1px solid #52495a;
  }
  .radio-outline-gray-800 .checkmark:after {
    border: 0;
    background: #52495a;
  }

  .radio-outline-gray-900:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-900 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-900 .checkmark {
    background: #fff;
    border: 1px solid #47404f;
  }
  .radio-outline-gray-900 .checkmark:after {
    border: 0;
    background: #47404f;
  }

  .switch {
    position: relative;
    display: inline-block;
    padding-left: 50px;
    height: 16px;
  }
  .switch span:not(.slider) {
    position: relative;
    top: -2px;
    cursor: pointer;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .switch .slider {
    position: absolute;
    cursor: pointer;
    width: 42px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    background-color: #dee2e6;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .switch .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: -1px;
    bottom: -4px;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .switch input:checked + .slider {
    background-color: #663399;
  }
  .switch input:focus + .slider {
    box-shadow: 0 0 1px #663399;
  }
  .switch input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  .switch-primary input:checked + .slider {
    background-color: #663399;
  }

  .switch-primary input:focus + .slider {
    box-shadow: 0 0 1px #663399;
  }

  .switch-secondary input:checked + .slider {
    background-color: #52495a;
  }

  .switch-secondary input:focus + .slider {
    box-shadow: 0 0 1px #52495a;
  }

  .switch-success input:checked + .slider {
    background-color: #4caf50;
  }

  .switch-success input:focus + .slider {
    box-shadow: 0 0 1px #4caf50;
  }

  .switch-info input:checked + .slider {
    background-color: #003473;
  }

  .switch-info input:focus + .slider {
    box-shadow: 0 0 1px #003473;
  }

  .switch-warning input:checked + .slider {
    background-color: #ffc107;
  }

  .switch-warning input:focus + .slider {
    box-shadow: 0 0 1px #ffc107;
  }

  .switch-danger input:checked + .slider {
    background-color: #f44336;
  }

  .switch-danger input:focus + .slider {
    box-shadow: 0 0 1px #f44336;
  }

  .switch-light input:checked + .slider {
    background-color: #bbb;
  }

  .switch-light input:focus + .slider {
    box-shadow: 0 0 1px #bbb;
  }

  .switch-dark input:checked + .slider {
    background-color: #47404f;
  }

  .switch-dark input:focus + .slider {
    box-shadow: 0 0 1px #47404f;
  }

  .switch-gray-100 input:checked + .slider {
    background-color: #f8f9fa;
  }

  .switch-gray-100 input:focus + .slider {
    box-shadow: 0 0 1px #f8f9fa;
  }

  .switch-gray-200 input:checked + .slider {
    background-color: #eee;
  }

  .switch-gray-200 input:focus + .slider {
    box-shadow: 0 0 1px #eee;
  }

  .switch-gray-300 input:checked + .slider {
    background-color: #dee2e6;
  }

  .switch-gray-300 input:focus + .slider {
    box-shadow: 0 0 1px #dee2e6;
  }

  .switch-gray-400 input:checked + .slider {
    background-color: #ced4da;
  }

  .switch-gray-400 input:focus + .slider {
    box-shadow: 0 0 1px #ced4da;
  }

  .switch-gray-500 input:checked + .slider {
    background-color: #bbb;
  }

  .switch-gray-500 input:focus + .slider {
    box-shadow: 0 0 1px #bbb;
  }

  .switch-gray-600 input:checked + .slider {
    background-color: #70657b;
  }

  .switch-gray-600 input:focus + .slider {
    box-shadow: 0 0 1px #70657b;
  }

  .switch-gray-700 input:checked + .slider {
    background-color: #665c70;
  }

  .switch-gray-700 input:focus + .slider {
    box-shadow: 0 0 1px #665c70;
  }

  .switch-gray-800 input:checked + .slider {
    background-color: #52495a;
  }

  .switch-gray-800 input:focus + .slider {
    box-shadow: 0 0 1px #52495a;
  }

  .switch-gray-900 input:checked + .slider {
    background-color: #47404f;
  }

  .switch-gray-900 input:focus + .slider {
    box-shadow: 0 0 1px #47404f;
  }

  [dir="rtl"] .checkbox,
  [dir="rtl"] .radio,
  [dir="rtl"] .radio {
    padding-left: 0px;
    padding-right: 28px;
  }
  [dir="rtl"] .checkbox .checkmark,
  [dir="rtl"] .radio .checkmark,
  [dir="rtl"] .radio .checkmark {
    left: auto;
    right: 0;
  }

  .icon-regular {
    font-size: 18px;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .link-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #47404f;
  }
  .link-icon i {
    margin: 0 8px;
  }

  .spinner-glow {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #dee2e6;
    border-radius: 50%;
    margin: 4px auto;
    border: 2px solid transparent;
    animation: glow 1s ease infinite;
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0.4em #a1a2a1, 0 0 0 0.1em #a1a2a1;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #605556;
    }
    100% {
      box-shadow: 0 0 0 0.4em #a1a2a1, 0 0 0 3.6em transparent;
    }
  }

  .spinner-glow-primary {
    background: rgba(102, 51, 153, 0.45);
    animation: glow-primary 1s ease infinite;
  }

  .spinner-glow-secondary {
    background: rgba(82, 73, 90, 0.45);
    animation: glow-secondary 1s ease infinite;
  }

  .spinner-glow-success {
    background: rgba(76, 175, 80, 0.45);
    animation: glow-success 1s ease infinite;
  }

  .spinner-glow-info {
    background: rgba(0, 52, 115, 0.45);
    animation: glow-info 1s ease infinite;
  }

  .spinner-glow-warning {
    background: rgba(255, 193, 7, 0.45);
    animation: glow-warning 1s ease infinite;
  }

  .spinner-glow-danger {
    background: rgba(244, 67, 54, 0.45);
    animation: glow-danger 1s ease infinite;
  }

  .spinner-glow-light {
    background: rgba(187, 187, 187, 0.45);
    animation: glow-light 1s ease infinite;
  }

  .spinner-glow-dark {
    background: rgba(71, 64, 79, 0.45);
    animation: glow-dark 1s ease infinite;
  }

  .spinner-glow-gray-100 {
    background: rgba(248, 249, 250, 0.45);
    animation: glow-gray-100 1s ease infinite;
  }

  .spinner-glow-gray-200 {
    background: rgba(238, 238, 238, 0.45);
    animation: glow-gray-200 1s ease infinite;
  }

  .spinner-glow-gray-300 {
    background: rgba(222, 226, 230, 0.45);
    animation: glow-gray-300 1s ease infinite;
  }

  .spinner-glow-gray-400 {
    background: rgba(206, 212, 218, 0.45);
    animation: glow-gray-400 1s ease infinite;
  }

  .spinner-glow-gray-500 {
    background: rgba(187, 187, 187, 0.45);
    animation: glow-gray-500 1s ease infinite;
  }

  .spinner-glow-gray-600 {
    background: rgba(112, 101, 123, 0.45);
    animation: glow-gray-600 1s ease infinite;
  }

  .spinner-glow-gray-700 {
    background: rgba(102, 92, 112, 0.45);
    animation: glow-gray-700 1s ease infinite;
  }

  .spinner-glow-gray-800 {
    background: rgba(82, 73, 90, 0.45);
    animation: glow-gray-800 1s ease infinite;
  }

  .spinner-glow-gray-900 {
    background: rgba(71, 64, 79, 0.45);
    animation: glow-gray-900 1s ease infinite;
  }

  @keyframes glow-primary {
    0% {
      box-shadow: 0 0 0 0.4em rgba(102, 51, 153, 0.45),
        0 0 0 0.1em rgba(102, 51, 153, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(102, 51, 153, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(102, 51, 153, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-secondary {
    0% {
      box-shadow: 0 0 0 0.4em rgba(82, 73, 90, 0.45),
        0 0 0 0.1em rgba(82, 73, 90, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(82, 73, 90, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(82, 73, 90, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-success {
    0% {
      box-shadow: 0 0 0 0.4em rgba(76, 175, 80, 0.45),
        0 0 0 0.1em rgba(76, 175, 80, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(76, 175, 80, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(76, 175, 80, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-info {
    0% {
      box-shadow: 0 0 0 0.4em rgba(0, 52, 115, 0.45),
        0 0 0 0.1em rgba(0, 52, 115, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(0, 52, 115, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(0, 52, 115, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-warning {
    0% {
      box-shadow: 0 0 0 0.4em rgba(255, 193, 7, 0.45),
        0 0 0 0.1em rgba(255, 193, 7, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(255, 193, 7, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(255, 193, 7, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-danger {
    0% {
      box-shadow: 0 0 0 0.4em rgba(244, 67, 54, 0.45),
        0 0 0 0.1em rgba(244, 67, 54, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(244, 67, 54, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(244, 67, 54, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-light {
    0% {
      box-shadow: 0 0 0 0.4em rgba(187, 187, 187, 0.45),
        0 0 0 0.1em rgba(187, 187, 187, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(187, 187, 187, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(187, 187, 187, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-dark {
    0% {
      box-shadow: 0 0 0 0.4em rgba(71, 64, 79, 0.45),
        0 0 0 0.1em rgba(71, 64, 79, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(71, 64, 79, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(71, 64, 79, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-100 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(248, 249, 250, 0.45),
        0 0 0 0.1em rgba(248, 249, 250, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(248, 249, 250, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(248, 249, 250, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-200 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(238, 238, 238, 0.45),
        0 0 0 0.1em rgba(238, 238, 238, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(238, 238, 238, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(238, 238, 238, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-300 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(222, 226, 230, 0.45),
        0 0 0 0.1em rgba(222, 226, 230, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(222, 226, 230, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(222, 226, 230, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-400 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(206, 212, 218, 0.45),
        0 0 0 0.1em rgba(206, 212, 218, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(206, 212, 218, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(206, 212, 218, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-500 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(187, 187, 187, 0.45),
        0 0 0 0.1em rgba(187, 187, 187, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(187, 187, 187, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(187, 187, 187, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-600 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(112, 101, 123, 0.45),
        0 0 0 0.1em rgba(112, 101, 123, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(112, 101, 123, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(112, 101, 123, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-700 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(102, 92, 112, 0.45),
        0 0 0 0.1em rgba(102, 92, 112, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(102, 92, 112, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(102, 92, 112, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-800 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(82, 73, 90, 0.45),
        0 0 0 0.1em rgba(82, 73, 90, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(82, 73, 90, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(82, 73, 90, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-900 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(71, 64, 79, 0.45),
        0 0 0 0.1em rgba(71, 64, 79, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(71, 64, 79, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(71, 64, 79, 0.75), 0 0 0 3.6em transparent;
    }
  }

  .spinner {
    display: inline-block;
    font-size: 10px;
    margin: auto;
    text-indent: -9999em;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    position: relative;
    -webkit-animation: spin 1.4s infinite linear;
    animation: spin 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before {
    width: 50%;
    height: 50%;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  .spinner:after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .spinner-primary {
    background: #663399;
    background: -moz-linear-gradient(
      left,
      #663399 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #663399 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #663399 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #663399 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #663399 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-primary:before {
    background: #663399;
  }

  .spinner-secondary {
    background: #52495a;
    background: -moz-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #52495a 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-secondary:before {
    background: #52495a;
  }

  .spinner-success {
    background: #4caf50;
    background: -moz-linear-gradient(
      left,
      #4caf50 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #4caf50 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #4caf50 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #4caf50 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #4caf50 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-success:before {
    background: #4caf50;
  }

  .spinner-info {
    background: #003473;
    background: -moz-linear-gradient(
      left,
      #003473 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #003473 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #003473 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #003473 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #003473 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-info:before {
    background: #003473;
  }

  .spinner-warning {
    background: #ffc107;
    background: -moz-linear-gradient(
      left,
      #ffc107 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ffc107 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #ffc107 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #ffc107 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ffc107 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-warning:before {
    background: #ffc107;
  }

  .spinner-danger {
    background: #f44336;
    background: -moz-linear-gradient(
      left,
      #f44336 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #f44336 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #f44336 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #f44336 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #f44336 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-danger:before {
    background: #f44336;
  }

  .spinner-light {
    background: #bbb;
    background: -moz-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: -webkit-linear-gradient(
      left,
      #bbb 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: linear-gradient(to right, #bbb 10%, rgba(67, 236, 76, 0) 42%);
  }
  .spinner-light:before {
    background: #bbb;
  }

  .spinner-dark {
    background: #47404f;
    background: -moz-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #47404f 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-dark:before {
    background: #47404f;
  }

  .spinner-gray-100 {
    background: #f8f9fa;
    background: -moz-linear-gradient(
      left,
      #f8f9fa 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #f8f9fa 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #f8f9fa 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #f8f9fa 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #f8f9fa 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-100:before {
    background: #f8f9fa;
  }

  .spinner-gray-200 {
    background: #eee;
    background: -moz-linear-gradient(left, #eee 10%, rgba(67, 236, 76, 0) 42%);
    background: -webkit-linear-gradient(
      left,
      #eee 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #eee 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(left, #eee 10%, rgba(67, 236, 76, 0) 42%);
    background: linear-gradient(to right, #eee 10%, rgba(67, 236, 76, 0) 42%);
  }
  .spinner-gray-200:before {
    background: #eee;
  }

  .spinner-gray-300 {
    background: #dee2e6;
    background: -moz-linear-gradient(
      left,
      #dee2e6 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #dee2e6 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #dee2e6 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #dee2e6 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #dee2e6 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-300:before {
    background: #dee2e6;
  }

  .spinner-gray-400 {
    background: #ced4da;
    background: -moz-linear-gradient(
      left,
      #ced4da 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ced4da 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #ced4da 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #ced4da 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ced4da 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-400:before {
    background: #ced4da;
  }

  .spinner-gray-500 {
    background: #bbb;
    background: -moz-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: -webkit-linear-gradient(
      left,
      #bbb 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: linear-gradient(to right, #bbb 10%, rgba(67, 236, 76, 0) 42%);
  }
  .spinner-gray-500:before {
    background: #bbb;
  }

  .spinner-gray-600 {
    background: #70657b;
    background: -moz-linear-gradient(
      left,
      #70657b 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #70657b 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #70657b 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #70657b 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #70657b 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-600:before {
    background: #70657b;
  }

  .spinner-gray-700 {
    background: #665c70;
    background: -moz-linear-gradient(
      left,
      #665c70 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #665c70 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #665c70 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #665c70 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #665c70 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-700:before {
    background: #665c70;
  }

  .spinner-gray-800 {
    background: #52495a;
    background: -moz-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #52495a 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-800:before {
    background: #52495a;
  }

  .spinner-gray-900 {
    background: #47404f;
    background: -moz-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #47404f 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-900:before {
    background: #47404f;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spinner-bubble {
    display: inline-block;
    font-size: 8px;
    margin: 30px auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: bubble-circle 1.3s infinite linear;
    animation: bubble-circle 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner-bubble-primary {
    color: #663399;
  }

  .spinner-bubble-secondary {
    color: #52495a;
  }

  .spinner-bubble-success {
    color: #4caf50;
  }

  .spinner-bubble-info {
    color: #003473;
  }

  .spinner-bubble-warning {
    color: #ffc107;
  }

  .spinner-bubble-danger {
    color: #f44336;
  }

  .spinner-bubble-light {
    color: #bbb;
  }

  .spinner-bubble-dark {
    color: #47404f;
  }

  .spinner-bubble-gray-100 {
    color: #f8f9fa;
  }

  .spinner-bubble-gray-200 {
    color: #eee;
  }

  .spinner-bubble-gray-300 {
    color: #dee2e6;
  }

  .spinner-bubble-gray-400 {
    color: #ced4da;
  }

  .spinner-bubble-gray-500 {
    color: #bbb;
  }

  .spinner-bubble-gray-600 {
    color: #70657b;
  }

  .spinner-bubble-gray-700 {
    color: #665c70;
  }

  .spinner-bubble-gray-800 {
    color: #52495a;
  }

  .spinner-bubble-gray-900 {
    color: #47404f;
  }

  @-webkit-keyframes bubble-circle {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }

  @keyframes bubble-circle {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }

  .loader-bubble,
  .loader-bubble:before,
  .loader-bubble:after {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: bubble-horz 1.8s infinite ease-in-out;
    animation: bubble-horz 1.8s infinite ease-in-out;
  }

  .loader-bubble {
    display: inline-block;
    font-size: 6px;
    margin: auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  .loader-bubble-primary {
    color: #663399;
  }

  .loader-bubble-secondary {
    color: #52495a;
  }

  .loader-bubble-success {
    color: #4caf50;
  }

  .loader-bubble-info {
    color: #003473;
  }

  .loader-bubble-warning {
    color: #ffc107;
  }

  .loader-bubble-danger {
    color: #f44336;
  }

  .loader-bubble-light {
    color: #bbb;
  }

  .loader-bubble-dark {
    color: #47404f;
  }

  .loader-bubble-gray-100 {
    color: #f8f9fa;
  }

  .loader-bubble-gray-200 {
    color: #eee;
  }

  .loader-bubble-gray-300 {
    color: #dee2e6;
  }

  .loader-bubble-gray-400 {
    color: #ced4da;
  }

  .loader-bubble-gray-500 {
    color: #bbb;
  }

  .loader-bubble-gray-600 {
    color: #70657b;
  }

  .loader-bubble-gray-700 {
    color: #665c70;
  }

  .loader-bubble-gray-800 {
    color: #52495a;
  }

  .loader-bubble-gray-900 {
    color: #47404f;
  }

  .loader-bubble:before,
  .loader-bubble:after {
    content: "";
    position: absolute;
    top: 0;
  }

  .loader-bubble:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .loader-bubble:after {
    left: 3.5em;
  }

  @-webkit-keyframes bubble-horz {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  @keyframes bubble-horz {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  .alert {
    border-radius: 10px;
  }
  .alert .close:focus {
    outline: 0;
  }

  .alert-card {
    border: none;
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #ced4da;
  }
  .alert-card.alert-success {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #4caf50;
  }
  .alert-card.alert-warning {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #ffc107;
  }
  .alert-card.alert-info {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #003473;
  }
  .alert-card.alert-danger {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #f44336;
  }
  .alert-card.alert-dark {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #70657b;
  }

  .swal2-container .swal2-modal {
    font-family: "Nunito", sans-serif;
  }

  .swal2-container .swal2-spacer {
    margin: 1.5rem 0;
  }

  .swal2-container .swal2-styled:not(.swal2-cancel) {
    background: #663399 !important;
    outline: none;
  }
  .swal2-container .swal2-styled:not(.swal2-cancel):focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }

  .sidebar-container {
    position: relative;
    overflow: hidden;
    min-height: 400px;
  }
  .sidebar-container .sidebar-content {
    position: relative;
    height: 100%;
    transition: all 0.3s ease-in;
  }
  .sidebar-container .sidebar-content:after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .sidebar-container .sidebar {
    position: absolute;
    top: 0;
    transition: all 0.3s ease-in;
    z-index: 60;
  }
  .sidebar-container .sidebar .sidebar-close {
    display: none;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    z-index: 999;
  }

  @media (max-width: 767px) {
    .sidebar-container .sidebar {
      background: #fff;
    }
    .sidebar-container .sidebar .sidebar-close {
      display: block;
    }
  }

  img-cropper input[type="file"] {
    margin-bottom: 1rem;
  }

  .badge {
    font-weight: 600;
  }

  .badge-outline-primary {
    background: unset;
    border: 1px solid #663399;
    color: #663399;
  }

  .badge-outline-secondary {
    background: unset;
    border: 1px solid #52495a;
    color: #52495a;
  }

  .badge-outline-success {
    background: unset;
    border: 1px solid #4caf50;
    color: #4caf50;
  }

  .badge-outline-info {
    background: unset;
    border: 1px solid #003473;
    color: #003473;
  }

  .badge-outline-warning {
    background: unset;
    border: 1px solid #ffc107;
    color: #ffc107;
  }

  .badge-outline-danger {
    background: unset;
    border: 1px solid #f44336;
    color: #f44336;
  }

  .badge-outline-light {
    background: unset;
    border: 1px solid #bbb;
    color: #bbb;
  }

  .badge-outline-dark {
    background: unset;
    border: 1px solid #47404f;
    color: #47404f;
  }

  .badge-outline-gray-100 {
    background: unset;
    border: 1px solid #f8f9fa;
    color: #f8f9fa;
  }

  .badge-outline-gray-200 {
    background: unset;
    border: 1px solid #eee;
    color: #eee;
  }

  .badge-outline-gray-300 {
    background: unset;
    border: 1px solid #dee2e6;
    color: #dee2e6;
  }

  .badge-outline-gray-400 {
    background: unset;
    border: 1px solid #ced4da;
    color: #ced4da;
  }

  .badge-outline-gray-500 {
    background: unset;
    border: 1px solid #bbb;
    color: #bbb;
  }

  .badge-outline-gray-600 {
    background: unset;
    border: 1px solid #70657b;
    color: #70657b;
  }

  .badge-outline-gray-700 {
    background: unset;
    border: 1px solid #665c70;
    color: #665c70;
  }

  .badge-outline-gray-800 {
    background: unset;
    border: 1px solid #52495a;
    color: #52495a;
  }

  .badge-outline-gray-900 {
    background: unset;
    border: 1px solid #47404f;
    color: #47404f;
  }

  .badge-top-container {
    position: relative;
  }
  .badge-top-container .badge {
    position: absolute;
    top: 2px;
    right: 4px;
    border-radius: 10px;
  }

  .ul-badge-pill-primary {
    background: #663399;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-secondary {
    background: #52495a;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-success {
    background: #4caf50;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-info {
    background: #003473;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-warning {
    background: #ffc107;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-danger {
    background: #f44336;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-light {
    background: #bbb;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-dark {
    background: #47404f;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-100 {
    background: #f8f9fa;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-200 {
    background: #eee;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-300 {
    background: #dee2e6;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-400 {
    background: #ced4da;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-500 {
    background: #bbb;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-600 {
    background: #70657b;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-700 {
    background: #665c70;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-800 {
    background: #52495a;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-900 {
    background: #47404f;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .badge-round-primary {
    background: #663399;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-primary.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-primary.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-primary.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-primary.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-secondary {
    background: #52495a;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-secondary.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-secondary.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-secondary.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-secondary.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-success {
    background: #4caf50;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-success.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-success.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-success.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-success.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-info {
    background: #003473;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-info.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-info.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-info.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-info.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-warning {
    background: #ffc107;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-warning.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-warning.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-warning.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-warning.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-danger {
    background: #f44336;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-danger.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-danger.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-danger.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-danger.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-light {
    background: #bbb;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-light.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-light.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-light.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-light.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-dark {
    background: #47404f;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-dark.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-dark.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-dark.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-dark.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-100 {
    background: #f8f9fa;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-100.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-100.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-100.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-100.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-200 {
    background: #eee;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-200.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-200.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-200.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-200.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-300 {
    background: #dee2e6;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-300.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-300.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-300.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-300.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-400 {
    background: #ced4da;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-400.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-400.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-400.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-400.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-500 {
    background: #bbb;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-500.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-500.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-500.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-500.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-600 {
    background: #70657b;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-600.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-600.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-600.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-600.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-700 {
    background: #665c70;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-700.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-700.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-700.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-700.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-800 {
    background: #52495a;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-800.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-800.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-800.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-800.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-900 {
    background: #47404f;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-900.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-900.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-900.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-900.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-dot-primary {
    height: 4px;
    width: 4px;
    background-color: #663399;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-secondary {
    height: 4px;
    width: 4px;
    background-color: #52495a;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-success {
    height: 4px;
    width: 4px;
    background-color: #4caf50;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-info {
    height: 4px;
    width: 4px;
    background-color: #003473;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-warning {
    height: 4px;
    width: 4px;
    background-color: #ffc107;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-danger {
    height: 4px;
    width: 4px;
    background-color: #f44336;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-light {
    height: 4px;
    width: 4px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-dark {
    height: 4px;
    width: 4px;
    background-color: #47404f;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-100 {
    height: 4px;
    width: 4px;
    background-color: #f8f9fa;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-200 {
    height: 4px;
    width: 4px;
    background-color: #eee;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-300 {
    height: 4px;
    width: 4px;
    background-color: #dee2e6;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-400 {
    height: 4px;
    width: 4px;
    background-color: #ced4da;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-500 {
    height: 4px;
    width: 4px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-600 {
    height: 4px;
    width: 4px;
    background-color: #70657b;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-700 {
    height: 4px;
    width: 4px;
    background-color: #665c70;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-800 {
    height: 4px;
    width: 4px;
    background-color: #52495a;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-900 {
    height: 4px;
    width: 4px;
    background-color: #47404f;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .outline-round-primary {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #663399;
    color: #663399;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-secondary {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #52495a;
    color: #52495a;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-success {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #4caf50;
    color: #4caf50;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-info {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #003473;
    color: #003473;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-warning {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #ffc107;
    color: #ffc107;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-danger {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #f44336;
    color: #f44336;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-light {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #bbb;
    color: #bbb;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-dark {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #47404f;
    color: #47404f;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-100 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #f8f9fa;
    color: #f8f9fa;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-200 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #eee;
    color: #eee;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-300 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #dee2e6;
    color: #dee2e6;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-400 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #ced4da;
    color: #ced4da;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-500 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #bbb;
    color: #bbb;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-600 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #70657b;
    color: #70657b;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-700 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #665c70;
    color: #665c70;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-800 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #52495a;
    color: #52495a;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-900 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #47404f;
    color: #47404f;
    line-height: 13px;
    justify-content: center;
  }

  .badge-square-primary {
    background: #663399;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-primary.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-primary.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-secondary {
    background: #52495a;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-secondary.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-secondary.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-success {
    background: #4caf50;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-success.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-success.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-info {
    background: #003473;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-info.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-info.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-warning {
    background: #ffc107;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-warning.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-warning.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-danger {
    background: #f44336;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-danger.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-danger.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-light {
    background: #bbb;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-light.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-light.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-dark {
    background: #47404f;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-dark.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-dark.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-100 {
    background: #f8f9fa;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-100.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-100.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-200 {
    background: #eee;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-200.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-200.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-300 {
    background: #dee2e6;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-300.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-300.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-400 {
    background: #ced4da;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-400.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-400.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-500 {
    background: #bbb;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-500.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-500.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-600 {
    background: #70657b;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-600.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-600.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-700 {
    background: #665c70;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-700.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-700.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-800 {
    background: #52495a;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-800.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-800.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-900 {
    background: #47404f;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-900.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-900.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-round {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }

  .badge-round.badge-round-opacity-primary {
    background: #ccb3e6;
    color: #663399;
  }

  .badge-round.badge-round-opacity-secondary {
    background: #b8b0bf;
    color: #52495a;
  }

  .badge-round.badge-round-opacity-success {
    background: #d9eeda;
    color: #4caf50;
  }

  .badge-round.badge-round-opacity-info {
    background: #4096ff;
    color: #003473;
  }

  .badge-round.badge-round-opacity-warning {
    background: #fff4d3;
    color: #ffc107;
  }

  .badge-round.badge-round-opacity-danger {
    background: #fff8f7;
    color: #f44336;
  }

  .badge-round.badge-round-opacity-light {
    background: white;
    color: #bbb;
  }

  .badge-round.badge-round-opacity-dark {
    background: #ada5b6;
    color: #47404f;
  }

  .badge-round.badge-round-opacity-gray-100 {
    background: white;
    color: #f8f9fa;
  }

  .badge-round.badge-round-opacity-gray-200 {
    background: white;
    color: #eee;
  }

  .badge-round.badge-round-opacity-gray-300 {
    background: white;
    color: #dee2e6;
  }

  .badge-round.badge-round-opacity-gray-400 {
    background: white;
    color: #ced4da;
  }

  .badge-round.badge-round-opacity-gray-500 {
    background: white;
    color: #bbb;
  }

  .badge-round.badge-round-opacity-gray-600 {
    background: #d6d2da;
    color: #70657b;
  }

  .badge-round.badge-round-opacity-gray-700 {
    background: #ccc7d1;
    color: #665c70;
  }

  .badge-round.badge-round-opacity-gray-800 {
    background: #b8b0bf;
    color: #52495a;
  }

  .badge-round.badge-round-opacity-gray-900 {
    background: #ada5b6;
    color: #47404f;
  }

  .badge-square {
    border-radius: 20%;
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }

  .badge-square.badge-square-opacity-primary {
    background: #ccb3e6;
    color: #663399;
  }

  .badge-square.badge-square-opacity-secondary {
    background: #b8b0bf;
    color: #52495a;
  }

  .badge-square.badge-square-opacity-success {
    background: #d9eeda;
    color: #4caf50;
  }

  .badge-square.badge-square-opacity-info {
    background: #4096ff;
    color: #003473;
  }

  .badge-square.badge-square-opacity-warning {
    background: #fff4d3;
    color: #ffc107;
  }

  .badge-square.badge-square-opacity-danger {
    background: #fff8f7;
    color: #f44336;
  }

  .badge-square.badge-square-opacity-light {
    background: white;
    color: #bbb;
  }

  .badge-square.badge-square-opacity-dark {
    background: #ada5b6;
    color: #47404f;
  }

  .badge-square.badge-square-opacity-gray-100 {
    background: white;
    color: #f8f9fa;
  }

  .badge-square.badge-square-opacity-gray-200 {
    background: white;
    color: #eee;
  }

  .badge-square.badge-square-opacity-gray-300 {
    background: white;
    color: #dee2e6;
  }

  .badge-square.badge-square-opacity-gray-400 {
    background: white;
    color: #ced4da;
  }

  .badge-square.badge-square-opacity-gray-500 {
    background: white;
    color: #bbb;
  }

  .badge-square.badge-square-opacity-gray-600 {
    background: #d6d2da;
    color: #70657b;
  }

  .badge-square.badge-square-opacity-gray-700 {
    background: #ccc7d1;
    color: #665c70;
  }

  .badge-square.badge-square-opacity-gray-800 {
    background: #b8b0bf;
    color: #52495a;
  }

  .badge-square.badge-square-opacity-gray-900 {
    background: #ada5b6;
    color: #47404f;
  }

  .w-badge {
    border-radius: 0;
    padding: 4px;
    color: #fff;
  }

  .r-badge {
    padding: 4px;
  }

  .popover {
    border: none;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
  }
  .popover .arrow::before {
    border-color: rgba(0, 0, 0, 0);
  }

  ngb-rating .star {
    position: relative;
    display: inline-block;
  }

  ngb-rating .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
  }

  .rating-primary {
    color: #663399;
  }
  .rating-primary .star {
    color: #bbb;
  }
  .rating-primary .full,
  .rating-primary .half {
    color: #663399;
  }

  .rating-secondary {
    color: #52495a;
  }
  .rating-secondary .star {
    color: #bbb;
  }
  .rating-secondary .full,
  .rating-secondary .half {
    color: #52495a;
  }

  .rating-success {
    color: #4caf50;
  }
  .rating-success .star {
    color: #bbb;
  }
  .rating-success .full,
  .rating-success .half {
    color: #4caf50;
  }

  .rating-info {
    color: #003473;
  }
  .rating-info .star {
    color: #bbb;
  }
  .rating-info .full,
  .rating-info .half {
    color: #003473;
  }

  .rating-warning {
    color: #ffc107;
  }
  .rating-warning .star {
    color: #bbb;
  }
  .rating-warning .full,
  .rating-warning .half {
    color: #ffc107;
  }

  .rating-danger {
    color: #f44336;
  }
  .rating-danger .star {
    color: #bbb;
  }
  .rating-danger .full,
  .rating-danger .half {
    color: #f44336;
  }

  .rating-light {
    color: #bbb;
  }
  .rating-light .star {
    color: #bbb;
  }
  .rating-light .full,
  .rating-light .half {
    color: #bbb;
  }

  .rating-dark {
    color: #47404f;
  }
  .rating-dark .star {
    color: #bbb;
  }
  .rating-dark .full,
  .rating-dark .half {
    color: #47404f;
  }

  .rating-gray-100 {
    color: #f8f9fa;
  }
  .rating-gray-100 .star {
    color: #bbb;
  }
  .rating-gray-100 .full,
  .rating-gray-100 .half {
    color: #f8f9fa;
  }

  .rating-gray-200 {
    color: #eee;
  }
  .rating-gray-200 .star {
    color: #bbb;
  }
  .rating-gray-200 .full,
  .rating-gray-200 .half {
    color: #eee;
  }

  .rating-gray-300 {
    color: #dee2e6;
  }
  .rating-gray-300 .star {
    color: #bbb;
  }
  .rating-gray-300 .full,
  .rating-gray-300 .half {
    color: #dee2e6;
  }

  .rating-gray-400 {
    color: #ced4da;
  }
  .rating-gray-400 .star {
    color: #bbb;
  }
  .rating-gray-400 .full,
  .rating-gray-400 .half {
    color: #ced4da;
  }

  .rating-gray-500 {
    color: #bbb;
  }
  .rating-gray-500 .star {
    color: #bbb;
  }
  .rating-gray-500 .full,
  .rating-gray-500 .half {
    color: #bbb;
  }

  .rating-gray-600 {
    color: #70657b;
  }
  .rating-gray-600 .star {
    color: #bbb;
  }
  .rating-gray-600 .full,
  .rating-gray-600 .half {
    color: #70657b;
  }

  .rating-gray-700 {
    color: #665c70;
  }
  .rating-gray-700 .star {
    color: #bbb;
  }
  .rating-gray-700 .full,
  .rating-gray-700 .half {
    color: #665c70;
  }

  .rating-gray-800 {
    color: #52495a;
  }
  .rating-gray-800 .star {
    color: #bbb;
  }
  .rating-gray-800 .full,
  .rating-gray-800 .half {
    color: #52495a;
  }

  .rating-gray-900 {
    color: #47404f;
  }
  .rating-gray-900 .star {
    color: #bbb;
  }
  .rating-gray-900 .full,
  .rating-gray-900 .half {
    color: #47404f;
  }

  .search-ui {
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 0.75rem 1.5rem 1.5rem 4.5rem;
    z-index: 9999;
    display: none;
  }
  .search-ui.open {
    display: block;
    -webkit-animation-name: slideInDown;
    -moz-animation-name: slideInDown;
    -ms-animation-name: slideInDown;
    -o-animation-name: slideInDown;
    animation-name: slideInDown;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-duration: 0.3s;
    -moz-animation-duration: 0.3s;
    -ms-animation-duration: 0.3s;
    -o-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-delay: 0;
    -moz-animation-delay: 0;
    -ms-animation-delay: 0;
    -o-animation-delay: 0;
    animation-delay: 0;
    -webkit-animation-timing-function: ease;
    -moz-animation-timing-function: ease;
    -ms-animation-timing-function: ease;
    -o-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .search-ui .search-header .logo {
    height: 64px;
    width: auto;
  }
  .search-ui input.search-input {
    font-size: 4rem;
    font-weight: 600;
    border: 0;
    margin-bottom: 1.5rem;
  }
  .search-ui input.search-input:focus {
    outline: 0;
  }
  .search-ui input.search-input::placeholder {
    color: #ced4da;
  }
  .search-ui .search-title {
    margin-bottom: 1.25rem;
  }
  .search-ui .search-title span {
    font-weight: 600;
  }

  @media (max-width: 767px) {
    .search-ui {
      padding: 1rem;
    }
  }

  /* Tagging Basic Style */
  .tagging {
    border: 1px solid #dee2e6;
    font-size: 1em;
    height: auto;
    padding: 10px 10px 15px;
    border-radius: 4px;
  }

  .tagging.editable {
    cursor: text;
  }

  .tag {
    background: none repeat scroll 0 0 #663399;
    border-radius: 2px;
    color: white;
    cursor: default;
    display: inline-block;
    position: relative;
    white-space: nowrap;
    padding: 4px 20px 4px 0;
    margin: 5px 10px 0 0;
  }

  .tag span {
    background: none repeat scroll 0 0 #592d86;
    border-radius: 2px 0 0 2px;
    margin-right: 5px;
    padding: 5px 10px 5px;
  }

  .tag .tag-i {
    color: white;
    cursor: pointer;
    font-size: 1.3em;
    height: 0;
    line-height: 0.1em;
    position: absolute;
    right: 5px;
    top: 0.7em;
    text-align: center;
    width: 10px;
  }

  .tag .tag-i:hover {
    color: black;
    text-decoration: underline;
  }

  .type-zone {
    border: 0 none;
    height: auto;
    width: auto;
    min-width: 20px;
    display: inline-block;
  }

  .type-zone:focus {
    outline: none;
  }

  .customizer {
    position: fixed;
    z-index: 9999;
    top: 100px;
    right: -380px;
    transition: 0.3s all ease-in-out;
    width: 380px;
  }
  .customizer.open {
    right: 0;
  }
  .customizer .handle {
    position: absolute;
    display: flex;
    top: 8px;
    left: -36px;
    background: #663399;
    cursor: pointer;
    padding: 10px 8px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.06);
    color: #fff;
    font-size: 20px;
    transition: 0.3s all ease-in-out;
  }
  .customizer .handle:hover {
    background: #663399;
    color: #fff;
  }
  .customizer .customizer-body {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
    max-height: calc(100vh - 140px);
    overflow-y: scroll;
    overflow-x: visible;
  }
  .customizer .customizer-body .layouts {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }
  .customizer .customizer-body .layouts .layout-box {
    position: relative;
    margin: 0 8px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    width: calc(50% - 16px);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .customizer .customizer-body .layouts .layout-box img {
    width: 180px;
  }
  .customizer .customizer-body .layouts .layout-box i {
    display: none;
    position: absolute;
    top: 0;
    text-align: center;
    right: 0;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
    width: 32px;
    color: #ffffff;
    background: #663399;
    border-radius: 0 0 0 6px;
  }
  .customizer .customizer-body .layouts .layout-box.active {
    border: 1px solid #663399;
  }
  .customizer .customizer-body .layouts .layout-box.active i {
    display: inline-block;
  }
  .customizer .customizer-body .colors {
    display: flex;
    flex-wrap: wrap;
  }
  .customizer .customizer-body .colors .color {
    width: 36px;
    height: 36px;
    display: inline-block;
    border-radius: 50%;
    margin: 8px;
    text-align: center;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.03);
    cursor: pointer;
  }
  .customizer .customizer-body .colors .color.purple {
    background: #663399;
  }
  .customizer .customizer-body .colors .color.blue {
    background: #2f47c2;
  }
  .customizer .customizer-body .colors .color i {
    display: none;
    color: #ffffff;
    font-size: 18px;
    line-height: 36px;
  }
  .customizer .customizer-body .colors .color.active i {
    display: unset;
  }

  @media (max-width: 767px) {
    .customizer {
      width: 280px;
      right: -280px;
    }
  }

  [dir="rtl"] .customizer {
    right: auto;
    left: -380px;
  }
  [dir="rtl"] .customizer.open {
    right: auto;
    left: 0;
  }
  [dir="rtl"] .customizer .handle {
    top: 8px;
    left: auto;
    right: -36px;
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.06);
  }

  .slider-default {
    background: #fafafa !important;
    border-radius: 15px !important;
    border: 0px solid #d3d3d3 !important;
    box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;
    height: 10px !important;
  }
  .slider-default .noUi-value-horizontal {
    display: none;
  }
  .slider-default .noUi-handle {
    width: 20px !important;
    height: 20px !important;
    left: -5px !important;
    top: -5px !important;
    border-radius: 50%;
    border: 5px solid #663399;
    box-shadow: none;
    cursor: pointer;
  }
  .slider-default .noUi-handle:after,
  .slider-default .noUi-handle:before {
    content: none !important;
    display: block;
    position: absolute;
    height: 14px;
    width: 1px;
    background: #e8e7e6;
    left: 14px;
    top: 6px;
  }
  .slider-default .noUi-handle:focus {
    outline: none;
  }
  .slider-default .noUi-connect {
    background: #663399;
    border-radius: 15px !important;
    box-shadow: inset 0 0 3px rgba(51, 51, 51, 0.45);
    -webkit-transition: background 450ms;
    transition: background 450ms;
  }

  .square-default {
    background: #fafafa !important;
    border-radius: 15px !important;
    border: 0px solid #d3d3d3 !important;
    box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;
    height: 10px !important;
  }
  .square-default .noUi-handle {
    width: 20px !important;
    height: 20px !important;
    border: 5px solid #663399;
    box-shadow: none;
    cursor: pointer;
  }
  .square-default .noUi-handle:after,
  .square-default .noUi-handle:before {
    content: " " !important;
    display: none;
    position: absolute;
    height: 14px;
    width: 1px;
    background: #e8e7e6;
    left: 14px;
    top: 6px;
  }
  .square-default .noUi-handle:focus {
    outline: none;
  }
  .square-default .noUi-connect {
    background: #663399;
    border-radius: 15px !important;
    box-shadow: inset 0 0 3px rgba(51, 51, 51, 0.45);
    -webkit-transition: background 450ms;
    transition: background 450ms;
  }

  .slider-primary .noUi-connect {
    background: #663399;
  }

  .slider-primary .noUi-handle {
    border: 5px solid #663399;
  }

  .slider-secondary .noUi-connect {
    background: #52495a;
  }

  .slider-secondary .noUi-handle {
    border: 5px solid #52495a;
  }

  .slider-success .noUi-connect {
    background: #4caf50;
  }

  .slider-success .noUi-handle {
    border: 5px solid #4caf50;
  }

  .slider-info .noUi-connect {
    background: #003473;
  }

  .slider-info .noUi-handle {
    border: 5px solid #003473;
  }

  .slider-warning .noUi-connect {
    background: #ffc107;
  }

  .slider-warning .noUi-handle {
    border: 5px solid #ffc107;
  }

  .slider-danger .noUi-connect {
    background: #f44336;
  }

  .slider-danger .noUi-handle {
    border: 5px solid #f44336;
  }

  .slider-light .noUi-connect {
    background: #bbb;
  }

  .slider-light .noUi-handle {
    border: 5px solid #bbb;
  }

  .slider-dark .noUi-connect {
    background: #47404f;
  }

  .slider-dark .noUi-handle {
    border: 5px solid #47404f;
  }

  .slider-gray-100 .noUi-connect {
    background: #f8f9fa;
  }

  .slider-gray-100 .noUi-handle {
    border: 5px solid #f8f9fa;
  }

  .slider-gray-200 .noUi-connect {
    background: #eee;
  }

  .slider-gray-200 .noUi-handle {
    border: 5px solid #eee;
  }

  .slider-gray-300 .noUi-connect {
    background: #dee2e6;
  }

  .slider-gray-300 .noUi-handle {
    border: 5px solid #dee2e6;
  }

  .slider-gray-400 .noUi-connect {
    background: #ced4da;
  }

  .slider-gray-400 .noUi-handle {
    border: 5px solid #ced4da;
  }

  .slider-gray-500 .noUi-connect {
    background: #bbb;
  }

  .slider-gray-500 .noUi-handle {
    border: 5px solid #bbb;
  }

  .slider-gray-600 .noUi-connect {
    background: #70657b;
  }

  .slider-gray-600 .noUi-handle {
    border: 5px solid #70657b;
  }

  .slider-gray-700 .noUi-connect {
    background: #665c70;
  }

  .slider-gray-700 .noUi-handle {
    border: 5px solid #665c70;
  }

  .slider-gray-800 .noUi-connect {
    background: #52495a;
  }

  .slider-gray-800 .noUi-handle {
    border: 5px solid #52495a;
  }

  .slider-gray-900 .noUi-connect {
    background: #47404f;
  }

  .slider-gray-900 .noUi-handle {
    border: 5px solid #47404f;
  }

  .slider-custom .noUi-connect {
    background: #3fb8af;
  }

  .slider-custom .noUi-handle {
    border: 5px solid #b2dfdb;
  }

  .slider-extra-large {
    height: 14px !important;
  }
  .slider-extra-large .noUi-handle {
    width: 28px !important;
    height: 28px !important;
    top: -7px !important;
  }

  .slider-large {
    height: 12px !important;
  }
  .slider-large .noUi-handle {
    width: 24px !important;
    height: 24px !important;
    top: -6px !important;
  }

  .slider-small {
    height: 6px !important;
  }
  .slider-small .noUi-handle {
    top: -7px !important;
  }

  .slider-extra-small {
    height: 3px !important;
  }
  .slider-extra-small .noUi-handle {
    top: -8px !important;
  }

  .circle-filled.slider-primary .noUi-handle {
    background: #663399;
  }

  .circle-filled.slider-secondary .noUi-handle {
    background: #52495a;
  }

  .circle-filled.slider-success .noUi-handle {
    background: #4caf50;
  }

  .circle-filled.slider-info .noUi-handle {
    background: #003473;
  }

  .circle-filled.slider-warning .noUi-handle {
    background: #ffc107;
  }

  .circle-filled.slider-danger .noUi-handle {
    background: #f44336;
  }

  .circle-filled.slider-light .noUi-handle {
    background: #bbb;
  }

  .circle-filled.slider-dark .noUi-handle {
    background: #47404f;
  }

  .circle-filled.slider-gray-100 .noUi-handle {
    background: #f8f9fa;
  }

  .circle-filled.slider-gray-200 .noUi-handle {
    background: #eee;
  }

  .circle-filled.slider-gray-300 .noUi-handle {
    background: #dee2e6;
  }

  .circle-filled.slider-gray-400 .noUi-handle {
    background: #ced4da;
  }

  .circle-filled.slider-gray-500 .noUi-handle {
    background: #bbb;
  }

  .circle-filled.slider-gray-600 .noUi-handle {
    background: #70657b;
  }

  .circle-filled.slider-gray-700 .noUi-handle {
    background: #665c70;
  }

  .circle-filled.slider-gray-800 .noUi-handle {
    background: #52495a;
  }

  .circle-filled.slider-gray-900 .noUi-handle {
    background: #47404f;
  }

  .square-default.slider-primary .noUi-handle {
    background: #663399;
  }

  .square-default.slider-secondary .noUi-handle {
    background: #52495a;
  }

  .square-default.slider-success .noUi-handle {
    background: #4caf50;
  }

  .square-default.slider-info .noUi-handle {
    background: #003473;
  }

  .square-default.slider-warning .noUi-handle {
    background: #ffc107;
  }

  .square-default.slider-danger .noUi-handle {
    background: #f44336;
  }

  .square-default.slider-light .noUi-handle {
    background: #bbb;
  }

  .square-default.slider-dark .noUi-handle {
    background: #47404f;
  }

  .square-default.slider-gray-100 .noUi-handle {
    background: #f8f9fa;
  }

  .square-default.slider-gray-200 .noUi-handle {
    background: #eee;
  }

  .square-default.slider-gray-300 .noUi-handle {
    background: #dee2e6;
  }

  .square-default.slider-gray-400 .noUi-handle {
    background: #ced4da;
  }

  .square-default.slider-gray-500 .noUi-handle {
    background: #bbb;
  }

  .square-default.slider-gray-600 .noUi-handle {
    background: #70657b;
  }

  .square-default.slider-gray-700 .noUi-handle {
    background: #665c70;
  }

  .square-default.slider-gray-800 .noUi-handle {
    background: #52495a;
  }

  .square-default.slider-gray-900 .noUi-handle {
    background: #47404f;
  }

  .square-default.slider-custom .noUi-handle,
  .circle-filled.slider-custom .noUi-handle {
    background: #b2dfdb;
  }

  .vertical-slider-example {
    display: inline-block;
  }

  .noUi-vertical {
    width: 10px !important;
    height: 150px !important;
  }

  .toast-primary {
    background-color: #663399 !important;
  }

  .toast-secondary {
    background-color: #52495a !important;
  }

  .toast-success {
    background-color: #4caf50 !important;
  }

  .toast-info {
    background-color: #003473 !important;
  }

  .toast-warning {
    background-color: #ffc107 !important;
  }

  .toast-danger {
    background-color: #f44336 !important;
  }

  .toast-light {
    background-color: #bbb !important;
  }

  .toast-dark {
    background-color: #47404f !important;
  }

  .toast-gray-100 {
    background-color: #f8f9fa !important;
  }

  .toast-gray-200 {
    background-color: #eee !important;
  }

  .toast-gray-300 {
    background-color: #dee2e6 !important;
  }

  .toast-gray-400 {
    background-color: #ced4da !important;
  }

  .toast-gray-500 {
    background-color: #bbb !important;
  }

  .toast-gray-600 {
    background-color: #70657b !important;
  }

  .toast-gray-700 {
    background-color: #665c70 !important;
  }

  .toast-gray-800 {
    background-color: #52495a !important;
  }

  .toast-gray-900 {
    background-color: #47404f !important;
  }

  .dropzone {
    min-height: 150px;
    border: 2px dashed #673ab75e !important;
    background: #f5f5f5 !important;
    padding: 20px 20px;
  }

  .nav-tabs {
    border-bottom: 1px solid #663399;
  }

  .nav-tabs .nav-item .nav-link.active {
    border: 1px solid transparent;
    background: rgba(102, 51, 153, 0.1);
    border-color: #663399 #663399 #fff;
  }

  .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    right: 5px;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  #calendar {
    float: right;
    width: 100%;
  }

  #external-events h4 {
    font-size: 16px;
    margin-top: 0;
    padding-top: 1em;
  }

  #external-events .fc-event {
    margin: 2px 0;
    cursor: move;
  }

  .create_event_wrap p {
    margin: 1.5em 0;
    font-size: 11px;
    color: #666;
  }

  .create_event_wrap p input {
    margin: 0;
    vertical-align: middle;
  }

  .fc-event {
    position: relative;
    display: block;
    font-size: 0.85em;
    line-height: 1.3;
    border-radius: 3px;
    border: 0px solid #663399 !important;
  }

  a.fc-day-grid-event {
    background: #663399;
    padding: 5px;
  }

  th.fc-day-header {
    border-bottom-width: 2px;
    padding: 10px 0px;
    display: table-cell;
    background: #f5f5f5;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  td.fc-head-container {
    padding: 0px !important;
  }

  .fc-toolbar h2 {
    margin: 0;
    font-weight: bold;
  }

  span.fa {
    font-family: "iconsmind" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  span.fa.fa-chevron-left:before {
    content: "\f077";
  }

  span.fa.fa-chevron-right:before {
    content: "\f07d";
  }

  .main-header {
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    z-index: 100;
  }
  .main-header .menu-toggle {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;
  }
  .main-header .menu-toggle div {
    width: 24px;
    height: 1px;
    background: #47404f;
    margin: 3px 0;
  }
  .main-header .search-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #f8f9fa;
    border: 1px solid #eee;
    border-radius: 20px;
    position: relative;
    width: 230px;
    height: 40px;
  }
  .main-header .search-bar input {
    background: transparent;
    border: 0;
    color: #212121;
    font-size: 0.8rem;
    line-height: 2;
    height: 100%;
    outline: initial !important;
    padding: 0.5rem 1rem;
    width: calc(100% - 32px);
  }
  .main-header .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .main-header .logo {
    width: 120px;
  }
  .main-header .logo img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .main-header .show .header-icon {
    background: #f8f9fa;
  }
  .main-header .header-icon {
    font-size: 19px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 0 2px;
  }
  .main-header .header-icon:hover {
    background: #f8f9fa;
  }
  .main-header .header-icon.dropdown-toggle:after {
    display: none;
  }
  .main-header .header-part-right {
    display: flex;
    align-items: center;
  }
  .main-header .header-part-right .user {
    margin-right: 2rem;
  }
  .main-header .header-part-right .user img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
  }
  .main-header .notification-dropdown {
    padding: 0;
    max-height: 260px;
    cursor: pointer;
  }
  .main-header .notification-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0;
    height: 72px;
    border-bottom: 1px solid #dee2e6;
  }
  .main-header .notification-dropdown .dropdown-item .notification-icon {
    background: #eee;
    height: 100%;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-header .notification-dropdown .dropdown-item .notification-icon i {
    font-size: 18px;
  }
  .main-header .notification-dropdown .dropdown-item .notification-details {
    padding: 0.25rem 0.75rem;
  }
  .main-header .notification-dropdown .dropdown-item:active {
    color: inherit;
    background: inherit;
  }

  @media (max-width: 991px) {
    .main-header .search-bar {
      width: 180px;
    }
    .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 615px) {
    .main-header .header-part-right .user {
      margin-right: 0rem;
    }
  }

  @media (max-width: 580px) {
    .main-header {
      height: 70px;
      padding: 0 1.5rem;
    }
    .main-header .logo {
      width: 60px;
    }
    .main-header .search-bar {
      display: none;
    }
    .main-header .menu-toggle {
      width: 60px;
    }
    .main-header .header-part-right .user {
      margin-right: 0;
      padding-right: 0;
    }
    .notification-dropdown {
      left: 10px !important;
    }
  }

  @media (max-width: 360px) {
    .main-header .menu-toggle {
      margin: 0;
    }
  }

  .layout-horizontal-bar .header-topnav {
    margin: 0;
    padding: 0;
    background-color: #fff;
    position: relative;
    z-index: 90;
    position: fixed;
    width: 100%;
    /* height: 80px; */
    top: 80px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  }
  .layout-horizontal-bar .header-topnav .container {
    padding: 0;
  }
  .layout-horizontal-bar .header-topnav .topbar-branding {
    float: left;
    height: 48px;
    padding: 8px;
    margin: 0 8px;
  }
  .layout-horizontal-bar .header-topnav .topbar-branding img {
    height: 100%;
    width: auto;
  }
  .layout-horizontal-bar .header-topnav .ps {
    overflow: initial !important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;
  }
  .layout-horizontal-bar .header-topnav .topnav {
    display: flex;
    align-items: center;
    height: auto;
  }
  .layout-horizontal-bar .header-topnav .header-topnav-right {
    float: right;
    height: 48px;
    display: flex;
    align-items: center;
    padding-right: 0.67rem;
  }
  .layout-horizontal-bar .header-topnav .topnav:after {
    content: "";
    display: table;
    clear: both;
  }
  .layout-horizontal-bar .header-topnav .topnav a {
    color: #333 !important;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  .layout-horizontal-bar .header-topnav .topnav label.menu-toggle {
    height: 48px;
    width: 48px;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 50%;
  }
  .layout-horizontal-bar .header-topnav .topnav label.menu-toggle .mat-icon {
    font-size: 24px;
  }
  .layout-horizontal-bar .header-topnav .topnav .toggle,
  .layout-horizontal-bar .header-topnav .topnav [id^="drop"] {
    display: none;
  }
  .layout-horizontal-bar .header-topnav .topnav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
  }
  .layout-horizontal-bar .header-topnav .topnav ul:not(.menu) {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0), 0 4px 8px rgba(0, 0, 0, 0.28);
  }
  .layout-horizontal-bar .header-topnav .topnav ul.menu {
    float: left;
    height: 48px;
    padding-right: 45px;
  }
  .layout-horizontal-bar .header-topnav .topnav ul.menu > li {
    float: left;
  }
  .layout-horizontal-bar .header-topnav .topnav ul.menu > li > div > a,
  .layout-horizontal-bar .header-topnav .topnav ul.menu > li > div > div {
    border-bottom: 2px solid;
    height: 48px;
    box-sizing: border-box;
    border-color: transparent;
    margin: 0 6px;
  }
  .layout-horizontal-bar .header-topnav .topnav ul li {
    margin: 0px;
    display: inline-block;
  }
  .layout-horizontal-bar .header-topnav .topnav a,
  .layout-horizontal-bar .header-topnav .topnav label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px 20px;
    height: 44px;
    font-size: 0.875rem;
    text-decoration: none;
    box-sizing: border-box;
    cursor: pointer;
  }
  .layout-horizontal-bar .header-topnav .topnav ul li ul li:hover,
  .layout-horizontal-bar .header-topnav .topnav ul li ul li.open {
    background: #eeeeee;
  }
  .layout-horizontal-bar .header-topnav .topnav ul ul {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    background: #ffffff;
    color: rgba(0, 0, 0, 0.87);
    /* has to be the same number as the "line-height" of "nav a" */
    top: 48px;
    transform: translateY(-100px);
    transition: all 0.3s ease-in-out;
    z-index: -1;
    border-radius: 5px;
  }
  .layout-horizontal-bar .header-topnav .topnav ul li:hover > div > div > ul,
  .layout-horizontal-bar .header-topnav .topnav ul li:hover > div > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .layout-horizontal-bar .header-topnav .topnav ul ul li {
    width: 170px;
    float: none;
    display: list-item;
    position: relative;
  }
  .layout-horizontal-bar .header-topnav .topnav ul ul ul {
    top: 0;
    left: 170px;
  }
  .layout-horizontal-bar .header-topnav .topnav ul ul ul li {
    position: relative;
    top: 0;
  }
  .layout-horizontal-bar .header-topnav .topnav li > a:after {
    content: " +";
  }
  .layout-horizontal-bar .header-topnav .topnav li > a:only-child:after {
    content: "";
  }

  @media (max-width: 959px) {
    .header-topnav-right {
      position: absolute;
      right: 6px;
      top: 0;
    }
  }

  /* Media Queries
  --------------------------------------------- */
  @media only screen and (max-width: 768px) {
    .layout-horizontal-bar .header-topnav {
      margin: 0;
      padding: 0;
      background-color: #fff;
      position: relative;
      z-index: 10;
      position: fixed;
      width: 200px;
      top: 70px;
      height: 100%;
      padding-top: 20px;
      left: -200px;
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
      transition: all 0.5s ease-in-out;
    }
    .layout-horizontal-bar .header-topnav .ps {
      overflow: hidden !important;
      overflow-anchor: none;
      -ms-overflow-style: none;
      touch-action: auto;
      -ms-touch-action: auto;
    }
    .layout-horizontal-bar .topnav {
      margin: 0;
      max-height: calc(100vh - 80px) !important;
      /* Hide menus on hover */
    }
    .layout-horizontal-bar .topnav .menu {
      height: auto !important;
      padding-right: 0px !important;
      width: 100%;
    }
    .layout-horizontal-bar .topnav .menu li a {
      border: none !important;
    }
    .layout-horizontal-bar .topnav ul.menu {
      float: left;
      padding-left: 0px;
    }
    .layout-horizontal-bar .topnav ul.menu > li {
      float: left;
    }
    .layout-horizontal-bar .topnav ul.menu > li > div > a,
    .layout-horizontal-bar .topnav ul.menu > li > div > div {
      border-bottom: 2px solid;
      height: auto !important;
      box-sizing: border-box;
      border-color: transparent;
      margin: 0 6px;
    }
    .layout-horizontal-bar .topnav .toggle {
      display: flex;
      text-decoration: none;
      border: none;
    }
    .layout-horizontal-bar .topnav ul {
      transform: translateY(0px) !important;
      transition: max-height 0.3s ease-in-out;
    }
    .layout-horizontal-bar .topnav [id^="drop"]:checked + ul {
      opacity: 1;
      visibility: visible;
      max-height: 2000px;
    }
    .layout-horizontal-bar .topnav [id^="drop"]:checked + ul.menu {
      max-height: 300px;
      overflow-y: scroll;
    }
    .layout-horizontal-bar .topnav ul li {
      position: relative;
      opacity: 1;
      visibility: visible;
      width: 100%;
      z-index: 1;
    }
    .layout-horizontal-bar .topnav ul ul .toggle,
    .layout-horizontal-bar .topnav ul ul a {
      padding: 0 40px;
    }
    .layout-horizontal-bar .topnav ul ul ul a {
      padding: 0 80px;
    }
    .layout-horizontal-bar .topnav ul li ul li .toggle,
    .layout-horizontal-bar .topnav ul ul a,
    .layout-horizontal-bar .topnav ul ul ul a {
      padding: 14px 20px;
    }
    .layout-horizontal-bar .topnav ul ul {
      opacity: 1 !important;
      visibility: hidden !important;
      max-height: 0px;
      position: relative !important;
      background: #ffffff;
      color: rgba(0, 0, 0, 0.87);
      /* has to be the same number as the "line-height" of "nav a" */
      top: 0px !important;
      transform: translateY(-100px);
      transition: all 1s ease-in-out !important;
      z-index: 99 !important;
      border-radius: 5px;
      overflow: hidden;
      left: 0px;
    }
    .layout-horizontal-bar .topnav ul li:hover > div > div > ul,
    .layout-horizontal-bar .topnav ul li:hover > div > ul {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(0);
      transition: all 0.3s ease-in-out !important;
      max-height: 400px;
    }
    .layout-horizontal-bar .topnav ul ul li {
      opacity: 1;
      visibility: visible;
      width: 100% !important;
    }
    .layout-horizontal-bar .topnav ul:not(.menu) {
      box-shadow: none !important;
      margin-left: 5px;
      border-left: 1px dashed #eee;
    }
    .layout-horizontal-bar .topnav ul ul ul {
      left: 0;
    }
    .layout-horizontal-bar .topnav ul ul ul li {
      position: static;
    }
  }

  @media all and (max-width: 330px) {
    .topnav ul li {
      display: block;
      width: 94%;
    }
  }

  [dir="rtl"] .topnav a .mat-icon,
  [dir="rtl"] .topnav label .mat-icon {
    margin-right: 0;
    margin-left: 2px;
  }

  .app-footer {
    margin-top: 2rem;
    background: #eee;
    padding: 1.25rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .app-footer .footer-bottom {
    width: 100%;
  }
  .app-footer .footer-bottom .logo {
    width: 3rem;
    height: auto;
    margin: 4px;
  }

  .custom-separator {
    border-bottom: 1px dashed #ebedf2;
    margin: 15px 0;
  }

  div.tab-border {
    border: 1px dashed #ebedf2 !important;
    margin: 30px 0 !important;
  }

  .m-0 {
    margin: 0px !important;
  }

  .mt-0 {
    margin-top: 0px !important;
  }

  .mr-0 {
    margin-right: 0px !important;
  }

  .mb-0 {
    margin-bottom: 0px !important;
  }

  .ml-0 {
    margin-left: 0px !important;
  }

  .mx-0 {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .my-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .p-0 {
    padding: 0px !important;
  }

  .pt-0 {
    padding-top: 0px !important;
  }

  .pr-0 {
    padding-right: 0px !important;
  }

  .pb-0 {
    padding-bottom: 0px !important;
  }

  .pl-0 {
    padding-left: 0px !important;
  }

  .px-0 {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .py-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .m-8 {
    margin: 8px !important;
  }

  .mt-8 {
    margin-top: 8px !important;
  }

  .mr-8 {
    margin-right: 8px !important;
  }

  .mb-8 {
    margin-bottom: 8px !important;
  }

  .ml-8 {
    margin-left: 8px !important;
  }

  .mx-8 {
    margin-left: 8px !important;
    margin-right: 8px !important;
  }

  .my-8 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .p-8 {
    padding: 8px !important;
  }

  .pt-8 {
    padding-top: 8px !important;
  }

  .pr-8 {
    padding-right: 8px !important;
  }

  .pb-8 {
    padding-bottom: 8px !important;
  }

  .pl-8 {
    padding-left: 8px !important;
  }

  .px-8 {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .py-8 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .m-12 {
    margin: 12px !important;
  }

  .mt-12 {
    margin-top: 12px !important;
  }

  .mr-12 {
    margin-right: 12px !important;
  }

  .mb-12 {
    margin-bottom: 12px !important;
  }

  .ml-12 {
    margin-left: 12px !important;
  }

  .mx-12 {
    margin-left: 12px !important;
    margin-right: 12px !important;
  }

  .my-12 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }

  .p-12 {
    padding: 12px !important;
  }

  .pt-12 {
    padding-top: 12px !important;
  }

  .pr-12 {
    padding-right: 12px !important;
  }

  .pb-12 {
    padding-bottom: 12px !important;
  }

  .pl-12 {
    padding-left: 12px !important;
  }

  .px-12 {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .py-12 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  .m-16 {
    margin: 16px !important;
  }

  .mt-16 {
    margin-top: 16px !important;
  }

  .mr-16 {
    margin-right: 16px !important;
  }

  .mb-16 {
    margin-bottom: 16px !important;
  }

  .ml-16 {
    margin-left: 16px !important;
  }

  .mx-16 {
    margin-left: 16px !important;
    margin-right: 16px !important;
  }

  .my-16 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .p-16 {
    padding: 16px !important;
  }

  .pt-16 {
    padding-top: 16px !important;
  }

  .pr-16 {
    padding-right: 16px !important;
  }

  .pb-16 {
    padding-bottom: 16px !important;
  }

  .pl-16 {
    padding-left: 16px !important;
  }

  .px-16 {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .py-16 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .m-24 {
    margin: 24px !important;
  }

  .mt-24 {
    margin-top: 24px !important;
  }

  .mr-24 {
    margin-right: 24px !important;
  }

  .mb-24 {
    margin-bottom: 24px !important;
  }

  .ml-24 {
    margin-left: 24px !important;
  }

  .mx-24 {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .my-24 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .p-24 {
    padding: 24px !important;
  }

  .pt-24 {
    padding-top: 24px !important;
  }

  .pr-24 {
    padding-right: 24px !important;
  }

  .pb-24 {
    padding-bottom: 24px !important;
  }

  .pl-24 {
    padding-left: 24px !important;
  }

  .px-24 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .py-24 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .m-28 {
    margin: 28px !important;
  }

  .mt-28 {
    margin-top: 28px !important;
  }

  .mr-28 {
    margin-right: 28px !important;
  }

  .mb-28 {
    margin-bottom: 28px !important;
  }

  .ml-28 {
    margin-left: 28px !important;
  }

  .mx-28 {
    margin-left: 28px !important;
    margin-right: 28px !important;
  }

  .my-28 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }

  .p-28 {
    padding: 28px !important;
  }

  .pt-28 {
    padding-top: 28px !important;
  }

  .pr-28 {
    padding-right: 28px !important;
  }

  .pb-28 {
    padding-bottom: 28px !important;
  }

  .pl-28 {
    padding-left: 28px !important;
  }

  .px-28 {
    padding-left: 28px !important;
    padding-right: 28px !important;
  }

  .py-28 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }

  .m-32 {
    margin: 32px !important;
  }

  .mt-32 {
    margin-top: 32px !important;
  }

  .mr-32 {
    margin-right: 32px !important;
  }

  .mb-32 {
    margin-bottom: 32px !important;
  }

  .ml-32 {
    margin-left: 32px !important;
  }

  .mx-32 {
    margin-left: 32px !important;
    margin-right: 32px !important;
  }

  .my-32 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  .p-32 {
    padding: 32px !important;
  }

  .pt-32 {
    padding-top: 32px !important;
  }

  .pr-32 {
    padding-right: 32px !important;
  }

  .pb-32 {
    padding-bottom: 32px !important;
  }

  .pl-32 {
    padding-left: 32px !important;
  }

  .px-32 {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  .py-32 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }

  .m-36 {
    margin: 36px !important;
  }

  .mt-36 {
    margin-top: 36px !important;
  }

  .mr-36 {
    margin-right: 36px !important;
  }

  .mb-36 {
    margin-bottom: 36px !important;
  }

  .ml-36 {
    margin-left: 36px !important;
  }

  .mx-36 {
    margin-left: 36px !important;
    margin-right: 36px !important;
  }

  .my-36 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }

  .p-36 {
    padding: 36px !important;
  }

  .pt-36 {
    padding-top: 36px !important;
  }

  .pr-36 {
    padding-right: 36px !important;
  }

  .pb-36 {
    padding-bottom: 36px !important;
  }

  .pl-36 {
    padding-left: 36px !important;
  }

  .px-36 {
    padding-left: 36px !important;
    padding-right: 36px !important;
  }

  .py-36 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }

  .m-40 {
    margin: 40px !important;
  }

  .mt-40 {
    margin-top: 40px !important;
  }

  .mr-40 {
    margin-right: 40px !important;
  }

  .mb-40 {
    margin-bottom: 40px !important;
  }

  .ml-40 {
    margin-left: 40px !important;
  }

  .mx-40 {
    margin-left: 40px !important;
    margin-right: 40px !important;
  }

  .my-40 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .p-40 {
    padding: 40px !important;
  }

  .pt-40 {
    padding-top: 40px !important;
  }

  .pr-40 {
    padding-right: 40px !important;
  }

  .pb-40 {
    padding-bottom: 40px !important;
  }

  .pl-40 {
    padding-left: 40px !important;
  }

  .px-40 {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .py-40 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .m-44 {
    margin: 44px !important;
  }

  .mt-44 {
    margin-top: 44px !important;
  }

  .mr-44 {
    margin-right: 44px !important;
  }

  .mb-44 {
    margin-bottom: 44px !important;
  }

  .ml-44 {
    margin-left: 44px !important;
  }

  .mx-44 {
    margin-left: 44px !important;
    margin-right: 44px !important;
  }

  .my-44 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }

  .p-44 {
    padding: 44px !important;
  }

  .pt-44 {
    padding-top: 44px !important;
  }

  .pr-44 {
    padding-right: 44px !important;
  }

  .pb-44 {
    padding-bottom: 44px !important;
  }

  .pl-44 {
    padding-left: 44px !important;
  }

  .px-44 {
    padding-left: 44px !important;
    padding-right: 44px !important;
  }

  .py-44 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }

  .m-48 {
    margin: 48px !important;
  }

  .mt-48 {
    margin-top: 48px !important;
  }

  .mr-48 {
    margin-right: 48px !important;
  }

  .mb-48 {
    margin-bottom: 48px !important;
  }

  .ml-48 {
    margin-left: 48px !important;
  }

  .mx-48 {
    margin-left: 48px !important;
    margin-right: 48px !important;
  }

  .my-48 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }

  .p-48 {
    padding: 48px !important;
  }

  .pt-48 {
    padding-top: 48px !important;
  }

  .pr-48 {
    padding-right: 48px !important;
  }

  .pb-48 {
    padding-bottom: 48px !important;
  }

  .pl-48 {
    padding-left: 48px !important;
  }

  .px-48 {
    padding-left: 48px !important;
    padding-right: 48px !important;
  }

  .py-48 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  ._dot {
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
  }

  ._inline-dot {
    display: inline-block;
  }

  ._round-button {
    border-radius: 50% !important;
  }

  .progress--height-2 {
    height: 5px;
  }

  .chat-sidebar-container {
    height: calc(100vh - 140px);
    min-height: unset;
  }
  .chat-sidebar-container .chat-topbar {
    height: 52px;
  }
  .chat-sidebar-container .chat-content-wrap .chat-content {
    padding: 1.5rem 1.5rem 0;
    position: relative;
    height: calc(100vh - 335px);
  }
  .chat-sidebar-container .chat-content-wrap .chat-content .message {
    position: relative;
    background: #f8f9fa;
    border-radius: 10px;
    padding: 1rem;
  }
  .chat-sidebar-container .chat-content-wrap .chat-content .message:before {
    position: absolute;
    content: "";
    top: 14px;
    right: -5px;
    background: transparent;
    border-style: solid;
    border-width: 0 10px 10px 0px;
    border-color: transparent transparent #f8f9fa transparent;
    transform: rotate(-135deg);
  }
  .chat-sidebar-container
    .chat-content-wrap
    .chat-content
    .user
    .message:before {
    left: -5px;
    right: auto;
    transform: rotate(45deg);
  }
  .chat-sidebar-container .chat-content-wrap .chat-content .chat-input-area {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .chat-sidebar-container .chat-content-wrap .spinner-glow {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 10px);
  }
  .chat-sidebar-container .chat-sidebar-wrap {
    width: 260px;
  }
  .chat-sidebar-container .chat-sidebar-wrap .contacts-scrollable {
    position: relative;
    height: calc(100vh - 190px);
  }
  .chat-sidebar-container .chat-sidebar-wrap .contacts-scrollable .contact {
    position: relative;
    cursor: pointer;
    transition: 0.15s all ease-in;
  }
  .chat-sidebar-container
    .chat-sidebar-wrap
    .contacts-scrollable
    .contact:hover {
    background: #f8f9fa;
  }
  .chat-sidebar-container
    .chat-sidebar-wrap
    .contacts-scrollable
    .contact:before {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    top: calc(50% - 4px);
    right: 30px;
    background: #bbb;
    border-radius: 50%;
  }
  .chat-sidebar-container
    .chat-sidebar-wrap
    .contacts-scrollable
    .contact.online:before {
    background: #4caf50;
  }

  .invoice-summary {
    width: 220px;
    text-align: right;
    float: right;
  }
  .invoice-summary.invoice-summary-input {
    width: 320px;
  }
  .invoice-summary.invoice-summary-input p span,
  .invoice-summary.invoice-summary-input h5 span {
    width: 180px;
  }
  .invoice-summary p,
  .invoice-summary h5 {
    display: flex;
    justify-content: flex-end;
  }
  .invoice-summary p span,
  .invoice-summary h5 span {
    width: 120px;
  }
  .invoice-summary p span .small-input,
  .invoice-summary h5 span .small-input {
    display: inline-block;
    width: 3rem;
    margin: 0 0.75rem;
  }

  @media print {
    body * {
      visibility: hidden;
    }
    .main-content-wrap {
      width: 100% !important;
    }
    #print-area,
    #print-area * {
      visibility: visible;
    }
    #print-area {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }

  [dir="rtl"] .invoice-summary {
    text-align: left !important;
  }

  .inbox-main-sidebar-container {
    padding: 15px;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar {
    width: 180px;
    height: 100%;
    overflow: hidden;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar .inbox-main-nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar .inbox-main-nav li a {
    padding: 0.66rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #47404f;
  }
  .inbox-main-sidebar-container
    .inbox-main-sidebar
    .inbox-main-nav
    li
    a.active {
    color: #663399;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar .inbox-main-nav li a:hover {
    color: #663399;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar .inbox-main-nav li a i {
    margin-right: 8px;
  }
  .inbox-main-sidebar-container .inbox-secondary-sidebar-container {
    border-radius: 10px;
    min-height: calc(100vh - 150px);
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar-content
    .inbox-topbar {
    height: 52px;
    display: flex;
    flex-direction: row;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar-content
    .inbox-details {
    padding: 1.5rem 2rem;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar {
    overflow: hidden;
    width: 360px;
    height: 100%;
    border-right: 1px solid #eee;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item {
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 1.25rem 1rem;
    cursor: pointer;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item:hover {
    background: #f8f9fa;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item
    .avatar {
    width: 15%;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item
    .details {
    width: 60%;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item
    .date {
    width: 25%;
    font-size: 10px;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item
    .date
    span {
    float: right;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .avatar
    img {
    margin: 4px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .name {
    font-size: 12px;
    display: block;
  }

  @media (max-width: 767px) {
    .mail-item {
      padding: 1rem 0.5rem !important;
    }
    .inbox-secondary-sidebar {
      width: 280px !important;
    }
  }

  [dir="rtl"]
    .inbox-main-sidebar-container
    .inbox-main-sidebar
    .inbox-main-nav
    li
    a
    i {
    margin-right: 0;
    margin-left: 8px;
  }

  .list-horizontal .list-item .list-thumb img {
    height: 74px;
    object-fit: cover;
  }

  .list-horizontal .list-item .item-title {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }

  .list-horizontal .list-item a {
    color: #47404f;
  }

  .list-grid .list-item .list-thumb img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .list-grid .list-item .card-body {
    display: block !important;
  }

  .list-grid .list-item .item-title {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-width: 300px;
  }

  .list-grid .list-item a {
    color: #47404f;
  }

  .list-grid .list-item .item-badges,
  .list-grid .list-item .item-actions {
    position: absolute;
    top: 16px;
  }

  .list-grid .list-item .item-actions {
    right: 16px;
  }

  .list-grid .list-item .item-badges {
    left: 16px;
  }

  .list-grid .list-item .item-select {
    display: none;
  }

  @media (max-width: 991px) {
    .list-horizontal .list-item .list-thumb img {
      height: 100%;
      width: 100px;
    }
    .list-horizontal .list-item .item-title {
      max-width: 200px;
    }
  }

  @media (max-width: 576px) {
    .list-horizontal .list-item .item-title {
      max-width: 150px;
    }
  }

  .user-profile .header-cover {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
  }
  .user-profile .header-cover::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
  }

  .user-profile .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
    z-index: 9;
  }

  .user-profile .profile-picture {
    border-radius: 50%;
    border: 4px solid #fff;
  }

  .user-profile .profile-nav {
    justify-content: center;
  }

  .timeline {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .timeline .timeline-item {
    position: relative;
    width: 50%;
    display: inline-block;
  }
  .timeline .timeline-item:nth-child(even) {
    padding: 0 3rem 3rem 0;
  }
  .timeline .timeline-item:nth-child(even) .timeline-badge {
    left: calc(100% - 24px);
  }
  .timeline .timeline-item:nth-child(odd) {
    float: right;
    padding: 0 0 3rem 3rem;
    margin-top: 6rem;
  }
  .timeline .timeline-item:nth-child(odd) .timeline-badge {
    right: calc(100% - 24px);
  }
  .timeline .timeline-item .timeline-badge {
    position: absolute;
    width: 48px;
    height: 48px;
  }
  .timeline .timeline-item .badge-icon {
    display: inline-block;
    text-align: center;
    font-size: 22px;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    line-height: 48px;
  }
  .timeline .timeline-item .badge-img {
    display: inline-block;
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
  .timeline .timeline-group {
    position: relative;
    z-index: 99;
    padding: 0 0 2rem 0;
  }
  .timeline .timeline-line {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background: #dee2e6;
    left: 0;
    right: 0;
    margin: auto;
  }

  @media (max-width: 767px) {
    .user-profile .header-cover {
      height: 200px;
    }
    .timeline .timeline-item {
      width: 100%;
      padding: 4rem 0 3rem !important;
    }
    .timeline .timeline-item:nth-child(odd) {
      margin-top: 1rem;
    }
    .timeline .timeline-item .timeline-badge {
      left: 0 !important;
      right: 0 !important;
      top: -16px;
      margin: auto;
    }
    .timeline .timeline-group {
      padding: 0 0 3rem;
    }
  }

  .auth-layout-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
  }
  .auth-layout-wrap .auth-content {
    max-width: 660px;
    margin: auto;
  }

  .auth-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .auth-logo img {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1024px) {
    .auth-layout-wrap .auth-content {
      min-width: 660px;
    }
  }

  @media (max-width: 767px) {
    .auth-layout-wrap .auth-content {
      padding: 15px;
    }
    .auth-right {
      padding: 80px 15px;
    }
  }

  .not-found-wrap {
    background-image: url("../../dist-assets/images/page-bg-bottom.png");
    background-position-y: bottom;
    background-size: cover;
    background-size: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    padding: 120px 0;
  }
  .not-found-wrap h1 {
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 1;
  }
  .not-found-wrap .subheading {
    font-weight: 800;
  }

  .main-header {
    position: relative;
  }
  .main-header .topbar .header-nav {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  .main-header .topbar .header-nav .topbar-item ul li {
    padding-right: 40px;
    text-transform: capitalize;
  }

  .homepage {
    padding: 80px 0;
    background: url(https://ui-lib.com/wp-content/uploads/2019/04/bg-1.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
  .homepage .main-content .logo {
    width: 80px;
    margin: auto;
  }
  .homepage .main-content h1 {
    color: #52495a;
    line-height: 1.5;
  }
  .homepage .main-content .btn-raised-primary:hover {
    color: #fff;
  }
  .homepage .main-content .btn-raised {
    transition: all 0.15s ease-in;
  }
  .homepage .main-content .btn-raised:hover {
    transform: translateY(-2px);
  }
  .homepage .main-content .dashboard-photo {
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    max-width: 960px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
  }
  .homepage .main-content .dashboard-photo img {
    width: 100%;
  }

  .features {
    padding-top: 126px;
    padding-bottom: 126px;
    background: #f8fafe;
  }
  .features .section-title {
    margin-bottom: 45px;
  }
  .features .section-title h2 {
    margin-bottom: 5px;
  }
  .features .section-title p {
    max-width: 550px;
    margin: 0 auto;
    opacity: 0.7;
  }
  .features .features-wrap .feature-card {
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0px;
    margin-bottom: 10px;
    background: transparent;
  }
  .features .features-wrap .feature-card .card-icon {
    padding: 15px;
  }
  .features .features-wrap .feature-card .card-title {
    display: flex;
    align-items: center;
    margin: 0px;
    flex-grow: 0.5;
  }
  .features .features-wrap .feature-card .card-title h6 {
    margin: 0px;
  }
  .features .features-wrap .feature-card:hover,
  .features .features-wrap .feature-card.active {
    background: linear-gradient(#8470b9, #473886);
    cursor: pointer;
  }
  .features .features-wrap .feature-card:hover .card-icon,
  .features .features-wrap .feature-card.active .card-icon {
    padding: 15px;
    color: #fff;
  }
  .features .features-wrap .feature-card:hover .card-title h6,
  .features .features-wrap .feature-card.active .card-title h6 {
    color: #fff;
  }
  .features .tab-panel {
    display: none;
    padding: 0 20px;
  }
  .features .tab-panel.active {
    display: block;
  }
  .features .tab-panel img {
    width: 100%;
  }

  .framework {
    padding-top: 126px;
    padding-bottom: 126px;
    background: #f8fafe;
  }
  .framework .section-title {
    padding-bottom: 40px;
  }
  .framework .item-photo {
    height: 180px;
    width: 180px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .framework .item-photo img {
    width: auto;
    height: auto;
    max-width: 64px;
  }
  .framework .item-photo .item-photo-text {
    font-size: 40px;
  }

  .demos {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .demos .section-title {
    padding-bottom: 35px;
  }
  .demos .demo-photo .thumbnail {
    display: block;
  }
  .demos .demo-photo img {
    width: 100%;
  }
  .demos .demo-photo a {
    text-transform: capitalize;
  }
  .demos .demo-photo a:hover {
    color: #ffffff;
  }

  .component {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .component .section-title {
    padding-bottom: 50px;
  }
  .component .component-list {
    margin-bottom: 30px;
  }
  .component .component-list ul .comoponent-list-heading {
    margin-left: 15px;
    text-transform: capitalize;
    margin-top: 2px;
  }
  .component .component-list ul li {
    list-style: none;
    margin-left: 45px;
    opacity: 0.7;
  }

  .clients {
    background-color: #f8fafe;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .clients .section-title {
    padding-bottom: 50px;
    text-align: center;
  }
  .clients .section-title h2 {
    margin-bottom: 10px;
  }
  .clients .section-title p {
    max-width: 550px;
    margin: 0 auto;
  }
  .clients .complement {
    max-width: 900px;
    margin: 0 auto;
  }
  .clients .complement .client-card {
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
  }
  .clients .complement .client-card .user {
    margin-left: 10px;
  }
  .clients .complement .client-card .user .user-photo {
    margin-right: 30px;
  }
  .clients .complement .client-card .user .user-photo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .clients .complement .client-card .user .user-detail {
    margin-top: 5px;
  }
  .clients .complement .client-card .user .user-detail h6 {
    margin: 0px;
  }
  .clients .complement .client-card .user .user-detail p {
    opacity: 0.8;
  }
  .clients .complement .client-card .user-comment {
    margin-left: 10px;
  }
  .clients .complement .client-card .user-comment p {
    max-width: 800px;
    font-style: italic;
    opacity: 0.7;
  }

  .blog {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .blog h2 {
    max-width: 890px;
    margin: 0px 0px 40px 0px;
  }
  .blog p {
    max-width: 890px;
    opacity: 0.7;
  }
  .blog .blog-photo {
    margin: 20px 0px;
  }
  .blog .blog-photo img {
    width: 100%;
  }

  .footer {
    background-color: #f8fafe;
    padding-top: 80px;
  }
  .footer .footer-item {
    margin-bottom: 100px;
  }
  .footer .footer-item .social-media ul li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
  }
  .footer .footer-item .social-media ul li a {
    color: #111111a8;
    background: #fff;
    padding: 7px;
    border-radius: 5px;
  }
  .footer .footer-bootom {
    padding: 10px 0px;
    border-top: 0.2px solid #fffffffa;
  }
  .footer .footer-bootom p {
    margin: 0px;
  }
  .footer .btn-raised-primary:hover {
    color: #fff;
  }
  .footer .btn-raised {
    transition: all 0.15s ease-in;
  }
  .footer .btn-raised:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 960px) {
    .dashboard .dashboard-photo {
      max-width: calc(100% - 80px);
    }
    .dashboard {
      height: 350px;
    }
  }

  @media (max-width: 767px) {
    .main-header .navbar-nav {
      flex-direction: row;
    }
    .main-header .navbar-nav .nav-item {
      margin-right: 8px;
    }
    .main-header .topbar .header-nav {
      display: block;
    }
    .brand {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .navbar-toggler {
      padding: 5px 0px;
      font-size: 1.25rem;
      line-height: 1;
      border: 0px solid #fff;
      border-radius: 0.25rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      display: flex;
      justify-content: center;
    }
    .navbar-toggler .navbar-toggler-icon {
      background: #52495a;
    }
    .navbar-toggler:focus,
    .navbar-toggler:hover {
      text-decoration: none;
      outline: none;
    }
    .navbar-collapse {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-align: center;
      align-items: center;
      background: transparent;
      background-size: auto;
      background-repeat: no-repeat;
      overflow: hidden;
      z-index: 999;
      text-align: center;
    }
    .navbar-toggler-icon {
      display: inline-block;
      width: 25px;
      height: 2px;
      vertical-align: middle;
      content: "";
      background: no-repeat center center;
      background-size: 100% 100%;
      background: #fff;
      margin-top: 4px;
    }
    .dashboard {
      height: 250px;
    }
    .features .features-wrap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .features .features-wrap .feature-card {
      padding: 10px 10px;
      margin: 5px 5px;
    }
    .features .features-wrap .feature-card .card-title {
      margin: 0px;
    }
    .features .features-wrap .feature-card .card-title h6 {
      margin: 0px;
    }
    .features .features-wrap .feature-card .card-icon {
      display: none;
    }
    .framework .item-photo {
      margin-bottom: 30px;
    }
    .component .component-list {
      margin: 0 auto;
    }
    .component .component-list ul {
      text-align: center;
      padding: 0px;
    }
    .component .component-list ul li {
      margin-left: 30px;
    }
    .component .component-list .comoponent-list-heading {
      margin-left: 3px !important;
    }
    .footer .footer-item .social-media {
      margin-top: 18px;
    }
    .footer .footer-item .social-media ul {
      padding: 0px;
    }
    .footer .footer-item .social-media ul li {
      margin-right: 20px;
      margin-left: 0px;
    }
    .footer .footer-item .selling-btn {
      margin-top: 10px;
    }
    .footer .footer-item .btn-arrow {
      margin-top: 10px;
    }
  }

  @media (max-width: 600px) {
    .homepage {
      padding: 80px 0;
    }
    .dashboard {
      height: auto;
      padding: 60px 0;
    }
    .dashboard .dashboard-photo {
      position: unset !important;
    }
  }

  @media only screen and (max-width: 991px) {
    .ul-landing__navbar.collapse:not(.show) {
      display: block !important;
    }
    .ul-landing__brand {
      max-width: 80px !important;
    }
  }

  #task-manager li.nav-item.dropdown {
    padding: 0 8px;
  }

  #task-manager li.nav-item.dropdown {
    margin: 11px 0;
    text-align: left;
  }

  #task-manager .dropdown-menu.show {
    display: block;
    margin: 21px 2px;
  }

  #task-manager .task-manager-button {
    padding: 7px 15px;
  }

  #task-manager .active {
    display: none;
  }

  #task-manager .ul-task-manager__font-date {
    font-size: 10px;
  }

  #task-manager .ul-task-manager__paragraph {
    width: 95%;
    letter-spacing: 0px;
  }

  #task-manager .ul-task-manager__media a {
    color: #3f51b5;
    font-weight: bold;
  }

  #task-manager .ul-task-manager__fonts {
    font-size: 32px;
    position: relative;
    top: 13px;
    color: #70657b;
  }

  #task-manager .ul-task-manager__media p {
    margin-bottom: 0rem;
    font-weight: 700;
  }

  #task-manager .revision-font i {
    margin-right: 15px;
    font-size: 30px;
    color: #3f51b5;
  }

  @media (max-width: 991px) {
    #task-manager .navbar-toggler {
      float: left !important;
    }
    #task-manager .filter-mobile {
      width: 100%;
      text-align: left;
      margin-top: 5px;
    }
    #task-manager li.nav-item.dropdown {
      padding: 0px;
    }
    #task-manager button.task-manager-button.navbar-toggler.text-white {
      background: #663399;
    }
  }

  #task-manager-list .ul-task-manager__dropdown-menu.show {
    display: block;
    margin: 10px 2px;
  }

  #task-manager-list .ul-task-manager__header-inline {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
  }

  #task-manager-list .ul-task-manager__list-icon {
    color: #47404f;
  }

  #task-manager-list .ul-task-manager__list-icon i {
    font-weight: 900;
    padding: 0 4px;
  }

  #task-manager-list .ul-task-manager__select-show {
    display: inline;
  }

  #task-manager-list .ul-task-manager__search-inline {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  #task-manager-list .ul-task-manager__head--width {
    width: 60px;
  }

  #task-manager-list .checkmarks {
    display: inline-block;
    width: 22px;
    height: 22px;
    -ms-transform: rotate(45deg);
    /* IE 9 */
    -webkit-transform: rotate(45deg);
    /* Chrome, Safari, Opera */
    transform: rotate(45deg);
  }

  #task-manager-list .checkmark_stem {
    position: absolute;
    width: 3px;
    height: 9px;
    background-color: #ccc;
    left: 11px;
    top: 6px;
  }

  #task-manager-list .checkmark_kick {
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #ccc;
    left: 8px;
    top: 12px;
  }

  #task-manager-list .task-manager-list-select {
    width: 70%;
  }

  #task-manager-list .calendar i {
    color: #47404f;
    font-size: 16px;
    font-weight: 900;
    margin-right: 6px;
  }

  #task-manager-list .ul-task-manager__avatar {
    width: 36px;
    height: 36px;
  }

  #task-manager-list .ul-task-manager__font-table {
    font-size: 33px;
    position: relative;
    top: 13px;
    color: #665c70;
    cursor: pointer;
  }

  #task-manager-list .ul-task-manager__font-down {
    color: #47404f;
    font-size: 20px;
  }

  #task-manager-list .ul-task-manager__dot {
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
  }

  #task-manager-list .active {
    display: none;
  }

  #task-manager-list ul.pagination.justify-content-end {
    margin-bottom: 0;
  }

  #task-manager-list td.ul-task-manager__align {
    vertical-align: middle;
  }

  @media (max-width: 991px) {
    #task-manager-list .custom-sm-width {
      width: 1000px;
    }
  }

  label.ul-form__label {
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 5px;
    text-align: right;
    padding: 7px 0;
  }

  small.ul-form__text {
    margin-top: 10px;
    color: #bbb;
    font-weight: 400;
  }

  .input-right-icon {
    position: relative;
  }

  span.span-left-input-icon {
    position: absolute;
    top: 9px;
    left: 10px;
  }

  span.span-right-input-icon {
    position: absolute;
    top: 9px;
    /* left: 0; */
    right: 10px;
  }

  i.ul-form__icon {
    color: #70657b;
    font-size: 15px;
    font-weight: 600;
  }

  .ul-form__radio-inline {
    display: flex;
  }

  span.ul-form__radio-font {
    font-size: 14px;
    font-weight: 500;
  }

  .footer-delete-right {
    float: right;
  }

  .ul-card__margin-25 {
    margin: 25px 0;
  }

  @media only screen and (max-width: 991px) {
    label.ul-form--margin {
      text-align: left;
      margin-left: 20px;
    }
  }

  label.action-bar-horizontal-label {
    font-size: 15px;
  }

  .ul-form__radio {
    position: relative;
  }

  span.checkmark.ul-radio__position {
    position: absolute;
    /* bottom: -22px; */
    top: -8px;
    left: 4px;
  }

  #todo_wrap ul {
    padding: 0;
    text-align: left;
    list-style: none;
  }

  #todo_wrap hr {
    border-bottom: 0;
    margin: 15px 0;
  }

  #todo_wrap input[type="checkbox"] {
    width: 30px;
    float: left;
  }

  #todo_wrap .remove {
    float: right;
    cursor: pointer;
  }

  #todo_wrap .completed {
    text-decoration: line-through;
  }

  i.ul-tab__icon {
    font-size: 14px;
    font-weight: 500;
  }

  .ul-tab__border {
    border: 1px dashed #bbb;
    margin: 30px 0;
  }

  .ul-tab__content {
    margin: 0;
    padding-left: 0;
  }

  .ul-dropdown__toggle {
    padding: 8px 25px;
    margin: 0 5px;
  }

  .tab-border {
    border: 1px dashed #ebedf2 !important;
    margin: 30px 0 !important;
  }

  span._r_block-dot {
    display: block;
    margin: 2px 0;
  }

  ._r_btn {
    border: 1px solid #e8ecfa;
  }

  ._r_drop_right {
    padding-right: 14px !important;
  }

  .ul-accordion__link:hover {
    list-style: none;
    text-decoration: none !important;
  }

  button.ul-accordion__link {
    text-decoration: none !important;
  }

  .ul-accordion__font {
    font-size: 16px;
  }

  .ul-cursor--pointer {
    cursor: pointer;
  }

  .ul-border__bottom {
    border-bottom: 1px solid #3f51b5;
  }

  .ul-card__v-space {
    border-radius: 0;
    box-shadow: 0;
    margin: 30px 0;
  }

  .ul-card__border-radius {
    border-radius: 0;
    box-shadow: none;
  }

  .header-elements-inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }

  .ul-card__list--icon-font i {
    font-weight: 700;
    margin: 0 2px;
  }

  .accordion .ul-collapse__icon--size a::before {
    font-family: "iconsmind";
    font-size: 18px;
    font-weight: 700;
    vertical-align: bottom;
    cursor: pointer;
  }

  .accordion .ul-collapse__left-icon a.collapsed:before {
    font-family: "iconsmind";
    content: "\f083";
    margin: 0 8px;
  }

  .accordion .ul-collapse__left-icon a:before {
    font-family: "iconsmind";
    content: "\f072";
    margin: 0 8px;
  }

  .accordion .ul-collapse__right-icon a.collapsed:before {
    font-family: "iconsmind";
    content: "\f083";
    margin: 0 8px;
    float: right;
    position: absolute;
    right: 15px;
  }

  .accordion .ul-collapse__right-icon a:before {
    font-family: "iconsmind";
    content: "\f072";
    margin: 0 8px;
    float: right;
    position: absolute;
    right: 15px;
  }

  .ul-widget__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.07rem dashed #dee2e6;
    padding: 1.1rem 0;
  }

  .ul-widget1__title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #70657b;
  }

  .ul-widget__desc {
    font-size: 0.9rem;
    font-weight: normal;
  }

  .ul-widget__number {
    font-size: 1.4rem;
    font-weight: 700;
  }

  .ul-widget__item:last-child {
    border-bottom: 0;
  }

  .ul-widget__head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    align-items: center;
  }
  .ul-widget__head.--v-margin {
    padding: 10px 0;
  }

  .ul-widget__head-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: #52495a;
  }

  .ul-widget-nav-tabs-line .nav-item .nav-link.active {
    border: 1px solid transparent;
    border-color: #fff #fff #3f51b5 #fff;
  }

  .ul-widget-nav-tabs-line .nav-link {
    font-weight: 700;
  }

  .ul-widget__body {
    margin-top: 10px;
  }

  .ul-widget2__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.4rem;
    align-items: center;
    position: relative;
  }

  .ul-widget2__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 10px;
  }

  .ul-widget2__title {
    font-weight: 600;
    color: #70657b;
  }

  .ul-widget2__username {
    font-size: 0.7rem;
    color: #70657b;
  }

  .ul-widget__link--font i {
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 2px;
  }

  .ul-widget__link--font {
    color: #70657b;
    font-weight: 600;
    font-size: 15px;
  }

  .ul-pl-0 {
    padding-left: 0;
  }

  .ul-checkmark {
    position: absolute;
    top: -4px !important;
    left: 20px !important;
  }

  .ul-widget2__actions {
    opacity: 0;
    visibility: hidden;
  }

  .ul-widget1:hover .ul-widget2__actions {
    opacity: 1;
    visibility: visible;
    transition: 0.3s;
  }

  .pb-20 {
    padding-bottom: 20px;
  }

  .ul-widget-notification-item {
    display: flex;
    align-items: center;
    padding: 2px;
    position: relative;
    border-bottom: 1px solid #eee;
    padding: 10px 0px;
  }

  .ul-widget-notification-item:last-child {
    border-bottom: none;
  }

  .ul-widget-notification-item:hover {
    background-color: #f8f9fa;
  }

  .ul-widget-notification-item-icon {
    /* padding-left: 12px; */
    padding-right: 20px;
  }

  .ul-widget-notification-item-title {
    -webkit-transition: color 0.3s ease;
    transition: color 0.3s ease;
    font-size: 1rem;
    font-weight: 400;
    color: #665c70;
  }

  .ul-widget-notification-item-time {
    font-size: 13px;
    font-weight: 300;
    color: #bbb;
  }

  .ul-widget-notification-item::after {
    content: "\f07d";
    font-family: "iconsmind";
    position: absolute;
    /* top: 16px; */
    right: 0;
  }

  .ul-widget-notification-item i {
    font-size: 27px;
  }

  .ul-widget3-img img {
    width: 3.2rem;
    border-radius: 50%;
  }

  .ul-widget3-item {
    margin-bottom: 1rem;
    border-bottom: 0.07rem dashed #eee;
  }

  .ul-widget3-item:last-child {
    border: none;
  }

  .ul-widget3-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.8rem;
  }

  span.ul-widget3-status {
    flex-grow: 1;
    text-align: right;
  }

  .ul-widget3-info {
    padding-left: 10px;
  }

  .ul-widget4__item {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #dee2e6;
    padding: 15px 0;
  }

  .ul-widget4__item:last-child {
    border-bottom: 0;
  }

  .ul-widget4__pic-icon {
    margin-right: 15px;
    font-size: 25px;
  }

  a.ul-widget4__title {
    color: #70657b;
    font-weight: 700;
    font-size: 15px;
  }

  a.ul-widget4__title:hover {
    color: #3f51b5;
  }

  .ul-widget4__img img {
    width: 2.5rem;
    border-radius: 5px;
    margin-right: 15px;
  }

  .ul-widget4__users {
    justify-content: space-between;
  }

  .ul-widget2__info.ul-widget4__users-info {
    flex-grow: 1;
    width: calc(100% - 135px);
  }

  span.ul-widget4__number.t-font-boldest {
    font-size: 1.1rem;
    /* font-weight: 900; */
  }

  .ul-widget5__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.43rem;
    padding-bottom: 1.57rem;
    border-bottom: 0.07rem dashed #eee;
  }

  .ul-widget5__item:last-child {
    border-bottom: none;
  }

  .ul-widget5__content {
    display: flex;
    align-items: center;
  }

  .ul-widget5__stats {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .ul-widget5__stats:first-child {
    padding-right: 3rem;
  }

  span.ul-widget5__number {
    font-size: 1.3rem;
    font-weight: 600;
    color: #70657b;
  }

  .ul-widget5__pic img {
    padding-right: 1.43rem;
    width: 8.6rem;
    border-radius: 4px;
  }

  p.ul-widget5__desc {
    margin: 0;
    padding: 0.4rem 0;
    font-size: 1rem;
    font-weight: 400;
    color: #ced4da;
  }

  .ul-widget5__info span:nth-child(even) {
    font-weight: 600;
    padding-right: 0.71rem;
  }

  .ul-widget6__head .ul-widget6__item {
    display: flex;
    align-items: center;
    margin-bottom: 1.07rem;
  }

  .ul-widget6__head .ul-widget6__item span {
    flex: 1;
    text-align: left;
    font-size: 0.8rem;
    color: #bbb;
    font-weight: 500;
  }

  .ul-widget6__head .ul-widget6__item span:last-child {
    text-align: right;
  }

  .ul-widget6__body .ul-widget6__item {
    display: flex;
    align-items: center;
    padding: 1.07rem 0;
    border-bottom: 0.07rem dashed #eee;
  }

  .ul-widget6__body .ul-widget6__item:last-child {
    border-bottom: none;
  }

  .ul-widget6__body .ul-widget6__item span {
    flex: 1;
    text-align: left;
    color: #70657b;
    font-weight: 400;
  }

  .ul-widget6__body .ul-widget6__item span:last-child {
    text-align: right;
  }

  .ul-widget6 .ul-widget6-footer {
    text-align: right;
    margin: 0;
  }

  .ul-widget-s5__pic img {
    width: 4rem;
    border-radius: 50%;
  }

  .ul-widget-s5__pic {
    padding-right: 1rem;
  }

  a.ul-widget4__title.ul-widget5__title {
    font-size: 1.1rem;
  }

  .ul-widget-s5__desc {
    margin: 0;
    color: #70657b;
  }

  .ul-widget-s5__item {
    display: flex;
    justify-content: space-between;
  }

  .ul-widget-s5__content {
    display: flex;
    align-items: center;
  }

  .ul-widget-s5__content:last-child {
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
  }

  .ul-widget-s5__progress {
    flex: 1;
    padding-right: 3rem;
  }

  .ul-widget-s5__stats {
    justify-content: space-between;
    display: flex;
    margin-bottom: 0.7rem;
  }

  .ul-widget-s5__stats span {
    font-size: 1rem;
    font-weight: 600;
    color: #665c70;
  }

  .widget-badge {
    margin: 0 !important;
  }

  .ul-widget-s6__items {
    position: relative;
  }

  .ul-widget-s6__items:before {
    content: "";
    position: absolute;
    display: block;
    width: 1px;
    background-color: #dee2e6;
    height: 100%;
    left: 3px;
    top: 14px;
  }

  p.ul-widget6__dot {
    height: 8px;
    width: 8px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .ul-widget-s6__item {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  p.ul-widget-s6__text {
    flex-grow: 1;
    margin-left: 11px;
  }

  span.ul-widget-s6__text {
    display: flex;
    flex-grow: 1;
    /* margin-right: -26px; */
    padding-left: 12px;
    color: #70657b;
    font-weight: 600;
  }

  span.ul-widget-s6__time {
    font-size: 0.77rem;
    color: #bbb;
  }

  .ul-widget6__item--table {
    height: 400px;
    overflow-y: scroll;
  }

  tr.ul-widget6__tr--sticky-th th {
    position: sticky;
    top: 0;
    background-color: #fff;
  }

  .ul-widget-s7__items {
    display: flex;
  }

  .ul-widget-s7__item-circle {
    margin: 0 1rem;
  }

  .ul-widget-s7__item-circle i {
    font-size: 16px;
    font-weight: 900;
  }

  .ul-widget-s7 {
    position: relative;
    padding: 15px 0;
  }

  .ul-widget-s7:before {
    content: "";
    position: absolute;
    width: 1;
    height: 100%;
    background-color: #ced4da;
    width: 0.241rem;
    /* top: 0; */
    left: 72px;
    top: 22px;
  }

  p.ul-widget7__big-dot {
    height: 13px;
    width: 13px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .ul-widget-s7__item-time {
    font-size: 1.2rem;
    font-weight: 500;
    color: #70657b;
  }
  .ul-widget-s7__item-time.ul-middle {
    display: flex;
    align-items: center;
  }

  .ul-widget-s7__item-text {
    font-size: 1rem;
    color: #70657b;
  }

  .ul-widget-s7:last-child:before {
    background-color: #f8f9fa;
  }

  .ul-vertical-line {
    height: 100%;
    width: 7px;
    display: inline-block;
    vertical-align: middle;
  }

  .ul-widget8__tbl-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
  }

  .ul-widget_user-card {
    display: -webkit-box;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 425px) {
    .ul-widget__number {
      font-size: 1.1rem;
      font-weight: 700;
    }
    .ul-widget1__title {
      font-size: 0.9rem;
    }
    .ul-widget__desc {
      font-size: 0.7rem;
    }
    .ul-widget__head {
      flex-direction: column;
    }
    .ul-widget__head-label {
      margin: 10px 0;
    }
    .ul-widget__head.v-margin {
      flex-direction: unset;
    }
  }

  @media only screen and (max-width: 1024px) {
    .ul-widget2__actions {
      opacity: 1;
      visibility: visible;
    }
  }

  @media only screen and (max-width: 768px) {
    .ul-widget-s5__content:last-child {
      width: 100%;
    }
    .ul-widget-s5__item {
      justify-content: space-between;
      display: block;
    }
    .ul-widget-s5__content {
      margin: 15px 0;
    }
  }

  @media only screen and (max-width: 375px) {
    .ul-widget5 {
      overflow-x: auto;
    }
    a.ul-widget4__title {
      font-size: 12px;
      padding-right: 5px;
    }
    a.ul-widget4__title.ul-widget5__title {
      font-size: 11px;
    }
    p.ul-widget-s5__desc {
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 725px) {
    .ul-widget5__item {
      display: block;
      text-align: center !important;
    }
    .ul-widget5__content {
      display: block;
      margin-bottom: 15px;
    }
    .ul-widget5__stats:first-child {
      padding-right: 0;
    }
    .ul-widget5__stats {
      text-align: center;
    }
  }

  .ul-card__widget-chart {
    padding: 0px;
  }

  .ul-widget__chart-info {
    padding: 15px;
  }

  .ul-widget__row {
    align-items: center;
    display: flex;
  }

  .ul-widget__content {
    margin-left: 30px;
  }

  .ul-widget__row-v2 {
    text-align: center;
    text-align: -webkit-center;
  }

  .ul-widget-stat__font i {
    font-size: 35px;
  }

  .ul-widget__content-v4 {
    text-align: center;
  }

  .ul-faq__details {
    margin: 70px 0;
  }

  .ul-faq__list-details ul {
    padding-left: 10px;
    margin: 0;
  }

  .ul-faq__list-details ul li {
    list-style: none;
    color: #665c70;
    padding: 5px 0;
    font-weight: 700;
  }

  .ul-widget-card__info {
    display: flex;
    justify-content: space-between;
  }

  .ul-widget-card__info span p:first-child {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .ul-widget-card__info span p:last-child {
    font-size: 17px;
    margin: 0;
  }

  .ul-widget-card__progress-rate {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    margin-bottom: 5px;
  }

  .ul-widget-card__progress-rate span {
    font-weight: 700;
  }

  .ul-widget-card__progress-rate span:last-child {
    font-weight: 700;
    color: #ced4da;
  }

  .progress--height {
    height: 10px;
  }

  .ul-widget-card__user-info {
    text-align: center;
  }

  .ul-widget-card--line {
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 20px;
  }

  .ul-widget-card--line:last-child {
    border-bottom: none;
  }

  .ul-widget-card__rate-icon {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }
  .ul-widget-card__rate-icon.--version-2 {
    justify-content: flex-start;
  }

  .ul-widget-card__rate-icon.--version-2 span {
    margin-right: 18px;
  }

  .ul-widget-card__rate-icon span i {
    font-size: 14px;
  }

  .ul-widget-card__rate-icon span {
    font-size: 15px;
  }

  .ul-widget-card__rate-icon span i {
    font-size: 16px;
    font-weight: 600;
    margin-right: 2px;
  }

  .ul-widget-card__full-status {
    display: flex;
    justify-content: space-between;
  }

  .ul-widget-card__status1 {
    display: grid;
    text-align: -webkit-center;
    text-align: center;
  }

  .ul-widget-card__status1 span:first-child {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .ul-widget6__dot.ul-widget-card__dot-xl {
    padding: 1.35rem;
  }

  .ul-widget-s6__badge .ul-widget-card__dot {
    position: relative;
  }

  .ul-widget6__dot.ul-widget-card__dot-xl i {
    position: absolute;
    top: 35%;
    content: "";
    left: 35%;
  }

  .ul-widget-s6__items.ul-widget-card__position:before {
    left: 20px;
    top: 0;
  }

  .ul-widget-card__item {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }

  .ul-widget-card__info-v2 {
    display: grid;
    /* margin-right: 2px; */
    margin-left: 20px;
  }

  .ul-widget-card__img-bg {
    background: url("../../../../images/products/watch-2.jpg");
    background-size: cover;
    height: 500px;
    background-repeat: no-repeat, repeat;
  }

  .ul-widget-card__cloud .ul-widget-card__head h1 {
    color: #fff;
  }

  .ul-widget-card__cloud .ul-widget-card__head i {
    color: #fff !important;
  }

  .ul-widget-card__head {
    display: flex;
    justify-content: space-around;
    margin: 60px 0;
    align-items: center;
  }

  .ul-widget-card__weather-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin: 45px 0;
  }

  .ul-b4__box {
    width: 5rem;
    height: 5rem;
    background-color: #ced4da;
    display: inline-block;
    margin: 0 5px;
  }

  .ul-b4__border {
    border: 1px solid #3f51b5;
  }

  .ul-b4__border-top {
    border-top: 1px solid #3f51b5;
  }

  .ul-b4__border-right {
    border-right: 1px solid #3f51b5;
  }

  .ul-b4__border-bottom {
    border-bottom: 1px solid #3f51b5;
  }

  .ul-b4__border-left {
    border-left: 1px solid #3f51b5;
  }

  .ul-b4-utilities__code pre {
    margin: 0;
    padding: 0;
    font-size: 15px;
  }

  .ul-b4-utilities__code {
    padding: 25px 10px;
    background-color: #eee;
  }

  .ul-b4__border-0 {
    border: none;
  }

  .ul-b4__border-top-0 {
    border-top: none;
    border-bottom: 1px solid #3f51b5;
    border-right: 1px solid #3f51b5;
    border-left: 1px solid #3f51b5;
  }

  .ul-b4__border-right-0 {
    border-right: none;
    border-bottom: 1px solid #3f51b5;
    border-left: 1px solid #3f51b5;
    border-top: 1px solid #3f51b5;
  }

  .ul-b4__border-bottom-0 {
    border-bottom: none;
    border-left: 1px solid #3f51b5;
    border-top: 1px solid #3f51b5;
    border-right: 1px solid #3f51b5;
  }

  .ul-b4__border-left-0 {
    border-bottom: 1px solid #3f51b5;
    border-left: none;
    border-top: 1px solid #3f51b5;
    border-right: 1px solid #3f51b5;
  }

  .ul-b4-display__info-1 {
    margin-bottom: 60px;
  }

  .ul-b4-display__info-1 p {
    font-size: 14px;
    color: #70657b;
  }

  .ul-b4-display__table {
    margin-top: 20px;
  }

  .ul-b4-display__table tr th {
    font-size: 17px;
  }

  .ul-b4-display__table tr td {
    font-size: 14px;
  }

  .ul-display__print ul li code {
    font-size: 15px;
  }

  .ul-display__margin {
    margin: 40px 0;
  }

  .ul-display__paragraph {
    font-size: 14px;
  }

  .ul-pricing__table-1 {
    text-align: center;
    border-right: 1px solid #eee;
  }

  .ul-pricing__image {
    margin: 2rem 0;
  }

  .ul-pricing__image i {
    font-size: 7rem;
  }

  .ul-pricing__text {
    font-size: 1.2rem;
  }

  .ul-pricing__list {
    margin-bottom: 2.1rem;
  }

  .ul-pricing__main-number {
    margin: 20px 0;
  }

  .ul-pricing__list p {
    padding: 0 2.1rem;
    line-height: 2;
    font-size: 1rem;
  }

  .ul-pricing__table-list {
    width: 70%;
    margin: 0 auto;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 30px;
  }

  .ul-pricing__table-2 {
    text-align: center;
    border-right: 1px solid #eee;
    padding-bottom: 15px;
  }

  .ul-pricing__month {
    font-size: 18px;
  }

  .ul-pricing__table-2:hover {
    transform: scale(1.1);
    transition: 0.6s ease-in-out;
    position: relative;
    z-index: 2;
    background-color: #f8f9fa;
  }

  .ul-pricing__header {
    margin-bottom: 30px;
    background-color: #f8f9fa;
    border-bottom-left-radius: 210px;
    border-bottom-right-radius: 210px;
    padding-bottom: 12px;
  }

  .ul-pricing__table-listing ul {
    margin: 0;
    padding: 0;
  }

  .ul-pricing__table-listing ul li {
    list-style: none;
    padding: 10px 0;
  }

  @media only screen and (max-width: 1100px) {
    .ul-pricing__main-number h3 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 991px) {
    .ul-pricing__table-1 {
      border-right: none;
    }
  }

  .ul-contact-list__image-title {
    display: flex;
    align-items: center;
  }

  .ul-link-action {
    font-size: 20px;
  }

  .ul-link-action i {
    margin-right: 5px;
  }

  .ul-contact-page__profile {
    display: flex;
    align-items: center;
  }
  .ul-contact-page__profile .user-profile {
    height: 150px;
    width: 150px;
  }

  .ul-contact-page__info {
    /* margin-right: 2px; */
    margin-left: 23px;
    width: calc(100% - 126px);
  }

  .ul-form-input {
    width: 50%;
    transition: 0.5s ease-in-out;
  }

  @media only screen and (max-width: 425px) {
    .ul-contact-page__profile {
      text-align: center;
      display: block;
    }
    .ul-contact-page__info {
      margin-left: 0;
      width: 100%;
    }
  }

  .ul-contact-detail__info-1 {
    margin: 15px 0;
  }

  .ul-contact-detail__info .ul-contact-detail__info-1 {
    margin: 15px 0;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 10px;
  }

  .ul-contact-detail__social-1 {
    display: flex;
    align-items: center;
  }

  .ul-contact-detail__social {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  span.ul-contact-detail__followers {
    font-size: 25px;
  }

  .ul-contact-detail__timeline-image img {
    width: 30%;
    height: 70%;
  }

  .ul-contact-detail__timeline-image {
    display: flex;
    justify-content: space-between;
  }

  .ul-contact-detail__timeline-row {
    margin: 20px 0;
  }

  .ul-contact-detail__timeline-image-2 img {
    width: 20%;
  }

  .ul-contact-detail__timeline-image-info {
    margin-left: 15px;
  }

  .ul-contact-detail__timeline-image-2.mt-3 {
    display: flex;
    /* align-items: center; */
    align-items: flex-end;
  }

  .ul-contact-detail__profile {
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
  }

  .ul-weather-card__img-overlay {
    background: url("../../images/products/weather-2.jpg");
    background-size: cover;
    height: 400px;
    background-position-y: center;
    background-repeat: no-repeat;
  }

  .display-4 {
    font-size: 3.5rem;
  }

  .ul-weather-card__weather-time {
    padding: 30px;
  }

  .ul-weather-card__img-overlay span {
    font-size: 20px;
  }

  .display-5 {
    font-size: 2.5rem !important;
  }

  .ul-weather-card__weather-info i {
    font-size: 25px;
    font-weight: 600;
  }

  .ul-weather-card__weather-info {
    margin: 20px 0;
  }

  .ul-weather-card__font-md {
    font-size: 20px;
    font-weight: 600;
  }

  .ul-weather-card__header {
    display: flex;
    align-items: center;
  }

  .ul-weather-card__header span {
    color: #fff;
    font-size: 18px;
  }

  .ul-weather-card__calendar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ul-weather-card__calendar-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ul-weather-card__both-group {
    padding: 25px;
  }

  .ul-weather-card__inner-card {
    width: 100%;
  }

  .ul-weather-card__info {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  .card .ul-weather-card__bg-img img {
    width: 100%;
    height: 300px;
  }

  .ul-weather-card__img-overlay-2 {
    position: absolute;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
  }

  .ul-weather-card__img-overlay-2 span {
    color: #fff;
  }

  .font-25 {
    font-size: 25px;
  }

  .ul-weather-card__footer-color {
    color: #3f51b5;
    font-weight: 600;
  }

  .ul-weather-card__footer-color-2 {
    color: #cb3066;
  }

  .ul-weather-card__grid-style {
    display: grid;
  }

  .ul-weather-card__weather-s-title {
    font-size: 1rem;
  }

  .ul-weather-card__footer-color-3 h5 {
    color: #20c997;
  }

  .ul-weather-card__footer-color-3 h4 {
    color: #20c997;
  }

  .ul-widget-app__row-comments {
    display: flex;
    align-items: center;
    padding: 14px;
    margin-bottom: 10px;
  }

  .ul-widget-app__row-comments:hover {
    background-color: #eee;
  }

  .ul-widget-app__row-comments:hover .ul-widget-app__icons a i {
    opacity: 1;
    visibility: visible;
  }

  .ul-widget-app__icons a i:hover {
    color: #663399;
  }

  .ul-widget-app__comment {
    width: calc(100% - 86px);
  }

  .ul-widget-app__profile-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ul-widget-app__icons {
    flex-grow: 1;
  }

  .ul-widget-app__icons {
    font-size: 17px;
  }

  .ul-widget-app__icons a i {
    margin: 0 3px;
    font-weight: 600;
    opacity: 0;
    visibility: hidden;
    vertical-align: middle;
  }

  .ul-widget-app__recent-messages {
    height: calc(100vh - 350px);
    overflow-y: scroll;
    cursor: pointer;
  }

  .ul-widget-app__skill-margin span {
    margin: 0 5px;
  }

  .ul-widget-app__profile-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .ul-widget-app__profile-footer-font a span {
    vertical-align: middle;
  }

  .ul-widget-app__profile-footer-font a i {
    vertical-align: middle;
  }

  .ul-widget-app__browser-list-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ul-widget-app__browser-list-1 span {
    flex-grow: 1;
  }

  .ul-widget-app__browser-list-1 span:last-child {
    flex-grow: 0;
  }

  span.ul-widget-app__find-font {
    position: absolute;
    /* left: 0; */
    top: 4px;
    right: 10px;
    color: #663399;
    bottom: 0;
    font-size: 20px;
  }

  .ul-widget-app__small-title {
    display: grid;
  }

  .user-profile.ul-widget-app__profile--position.mb-4 {
    position: absolute;
    top: 40%;
    left: 0;
    margin: 0 auto;
    right: 0;
    transform: translateY(-50%);
  }

  .timeline--align {
    bottom: 8px;
  }

  .ul-contact-list__image-title {
    display: flex;
    align-items: center;
  }

  .ul-link-action {
    font-size: 20px;
  }

  .ul-link-action i {
    margin-right: 5px;
  }

  .ul-product-detail__features ul li {
    list-style: none;
    margin: 8px 0;
  }

  .ul-todo-sidebar {
    float: left;
    min-width: 240px;
    width: 240px;
  }

  .ul-todo-mobile-menu {
    display: none;
  }

  .ul-todo-list-content {
    height: 100vh;
    position: relative;
  }

  .ul-todo-sidebar.open {
    left: 1px;
  }

  i.todo-sidebar-close {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    .ul-todo-list-content {
      overflow-x: hidden;
    }
    i.todo-sidebar-close {
      display: block;
    }
    .ul-todo-sidebar {
      position: absolute;
      z-index: 50;
      left: -260px;
      transition: all 0.2s ease;
    }
    .ul-todo-mobile-menu {
      display: block;
    }
  }

  .ul-contact-list-body {
    margin-top: -60px;
    position: relative;
  }

  .ul-contact-left-side {
    min-width: 230px;
    width: 230px;
    margin-right: 25px;
  }

  .ul-contact-content {
    width: calc(100% - 220px);
    /* margin-right: 30px; */
  }

  .ul-contact-main-content {
    width: 100% !important;
    display: flex;
    position: relative;
    overflow-x: hidden;
    height: 100vh;
  }

  .ul-contact-mobile-icon {
    display: none;
  }

  .contact-open {
    left: 0px !important;
  }

  .contact-close-mobile-icon {
    display: none;
  }

  .ul-contact-list-table--label label {
    display: none !important;
  }

  .ul-contact-list-table {
    min-width: 570px;
  }

  @media only screen and (max-width: 1000px) {
    .contact-close-mobile-icon {
      display: block;
    }
    .ul-contact-left-side {
      position: absolute;
      top: 0;
      z-index: 99;
      left: -235px;
      transition: all 0.2s ease;
    }
    .ul-contact-content {
      width: calc(100% - 0px);
      /* margin-right: 30px; */
    }
    .ul-contact-mobile-icon {
      display: block;
    }
  }

  html {
    font-size: 16px;
  }

  body {
    letter-spacing: 0.3px;
    line-height: 1.6;
    background: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  [tabindex="-1"]:focus {
    outline: none;
  }

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    height: 0;
  }

  select,
  button,
  textarea,
  input {
    vertical-align: baseline;
  }

  div {
    box-sizing: border-box;
  }

  html[dir="rtl"],
  html[dir="ltr"],
  body[dir="rtl"],
  body[dir="ltr"] {
    unicode-bidi: embed;
  }

  bdo[dir="rtl"] {
    direction: rtl;
    unicode-bidi: bidi-override;
  }

  bdo[dir="ltr"] {
    direction: ltr;
    unicode-bidi: bidi-override;
  }

  img {
    max-width: 100%;
  }

  a,
  a:focus,
  a:hover {
    text-decoration: none;
  }

  blockquote {
    border-left: 2px solid #eee;
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-size: 1.01625rem;
  }

  .close:not(:disabled):not(.disabled):hover,
  .close:not(:disabled):not(.disabled):focus {
    outline: none;
  }

  .o-hidden {
    overflow: hidden;
  }

  .separator-breadcrumb {
    margin-bottom: 2rem;
  }

  .line-height-1 {
    line-height: 1;
  }

  .line-height-2 {
    line-height: 2;
  }

  .line-height-3 {
    line-height: 3;
  }

  .line-height-4 {
    line-height: 4;
  }

  .line-height-5 {
    line-height: 5;
  }

  .app-inro-circle {
    text-align: center;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: calc(50% - 150px);
  }
  .app-inro-circle .big-bubble {
    height: 280px;
    width: 280px;
    margin: 0 auto 20px;
    text-align: center;
    background: #663399;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .app-inro-circle .big-bubble i {
    font-size: 108px;
    color: #ffffff;
  }

  .loadscreen {
    text-align: center;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    height: 100vh;
    background: #ffffff;
    z-index: 999;
  }
  .loadscreen .loader {
    position: absolute;
    top: calc(50vh - 50px);
    left: 0;
    right: 0;
    margin: auto;
  }
  .loadscreen .logo {
    display: inline-block !important;
    width: 80px;
    height: 80px;
  }

  .img-preview {
    overflow: hidden;
    float: left;
    background-color: #eee;
    width: 100%;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .preview-lg {
    width: 200px;
    height: 150px;
  }

  .preview-md {
    width: 150px;
    height: 120px;
  }

  .preview-sm {
    width: 100px;
    height: 75px;
  }

  .custom-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  @media (max-width: 576px) {
    .app-inro-circle .big-bubble {
      width: 220px;
      height: 220px;
    }
    button.close {
      float: right;
      font-size: 1.2195rem;
      font-weight: 700;
      line-height: 1;
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.5;
      position: absolute;
      top: 0;
      right: 5px;
    }
  }

  [dir="rtl"] .rtl-ps-none .ps__rail-x,
  [dir="rtl"] .rtl-ps-none .ps__rail-y {
    display: none;
  }

  .dark-theme {
    background: #10163a;
  }
  .dark-theme .sidebar-left,
  .dark-theme .sidebar-left-secondary,
  .dark-theme .main-header,
  .dark-theme .card {
    background: #10163a;
    color: #fff !important;
  }
  .dark-theme .main-content-wrap,
  .dark-theme
    .chat-sidebar-container
    .chat-content-wrap
    .chat-content
    .message {
    background-color: #262c49;
    color: #c2c6dc !important;
  }
  .dark-theme
    .chat-sidebar-container
    .chat-content-wrap
    .chat-content
    .message::before {
    border-color: transparent transparent #262c49 transparent;
  }
  .dark-theme h1,
  .dark-theme h2,
  .dark-theme h3,
  .dark-theme h4,
  .dark-theme h5,
  .dark-theme h6,
  .dark-theme .card-title,
  .dark-theme .text-title {
    color: #c2c6dc;
  }
  .dark-theme .card-title {
    color: #c2c6dc !important;
  }
  .dark-theme a {
    color: #c2c6dc !important;
  }
  .dark-theme input,
  .dark-theme textarea {
    background: #262c49 !important;
    border-color: #10163a;
  }
  .dark-theme .app-footer {
    margin-top: 2rem;
    background: #10163a;
    padding: 1.25rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .dark-theme .app-footer .footer-bottom {
    width: 100%;
  }
  .dark-theme .app-footer .footer-bottom .logo {
    width: 3rem;
    height: auto;
    margin: 4px;
  }
  .dark-theme .navigation-left .nav-item {
    color: #c2c6dc !important;
    border-bottom: 1px solid #262c49 !important;
  }
  .dark-theme .navigation-left .nav-item .nav-item-hold {
    color: #c2c6dc !important;
  }
  .dark-theme .navigation-left .nav-item .nav-item-hold a {
    color: #c2c6dc !important;
  }
  .dark-theme .sidebar-left-secondary .childNav {
    list-style: none;
    padding: 0;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item {
    display: block;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a {
    color: #c2c6dc;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    padding: 12px 24px;
    transition: 0.15s all ease-in;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a:hover {
    background: #262c49;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a.open {
    color: #663399;
    background: #262c49;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a.open a {
    background: #262c49;
  }
  .dark-theme
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a.router-link-active {
    color: #663399;
  }
  .dark-theme
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a.router-link-active
    .nav-icon {
    color: #663399;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a .nav-icon {
    font-size: 18px;
    margin-right: 8px;
    vertical-align: middle;
    color: #c2c6dc;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a .item-name {
    vertical-align: middle;
    font-weight: 400;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a .dd-arrow {
    margin-left: auto;
    font-size: 11px;
    transition: all 0.3s ease-in;
  }
  .dark-theme .search-ui {
    position: fixed;
    background: #262c49;
  }
  .dark-theme .search-ui input.search-input {
    background: #262c49;
  }
  .dark-theme .search-ui input.search-input::placeholder {
    color: #c2c6dc;
  }
  .dark-theme .search-bar {
    background: #10163a !important;
    border: 1px solid #262c49 !important;
  }
  .dark-theme .search-bar input {
    color: #c2c6dc !important;
    background: #10163a !important;
  }
  .dark-theme .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .dark-theme .border-top {
    border-top: 1px solid #10163a !important;
  }
  .dark-theme .tab-border {
    border: 1px dashed #262c49 !important;
    margin: 30px 0 !important;
  }
  .dark-theme table.vgt-table {
    background: #10163a;
  }
  .dark-theme table.tableOne.vgt-table thead tr th {
    background: #10163a;
    border-color: #262c49;
  }
  .dark-theme .list-group-item {
    background-color: #10163a;
    border: 1px solid #262c49;
  }
  .dark-theme .page-link {
    color: #c2c6dc;
    background-color: #262c49;
    border: 1px solid #10163a;
  }
  .dark-theme .dropdown-menu {
    color: #c2c6dc;
    background-color: #262c49;
    border: 1px solid #262c49;
  }
  .dark-theme .table td {
    border-top: 1px solid #262c49;
  }
  .dark-theme .table thead th {
    border-bottom: 2px solid #262c49;
  }
  .dark-theme .table .thead-light th {
    color: #c2c6dc;
    background-color: #262c49;
    border-color: #262c49;
  }
  .dark-theme .apexcharts-xaxis-label {
    fill: #c2c6dc;
  }
  .dark-theme .apexcharts-yaxis-label {
    fill: #c2c6dc;
  }
  .dark-theme .apexcharts-tooltip.light {
    border: 1px solid #10163a;
    background: #262c49;
  }
  .dark-theme .apexcharts-tooltip.light .apexcharts-tooltip-title {
    background: #10163a;
    border-bottom: 1px solid #10163a;
  }
  .dark-theme .apexcharts-legend-text {
    color: #c2c6dc !important;
  }
  .dark-theme .input-group-text {
    color: #c2c6dc;
    background-color: #262c49;
    border: 1px solid #262c49;
  }
  .dark-theme .custom-select {
    color: #c2c6dc;
    background-color: #262c49;
    border: 1px solid #262c49;
  }
  .dark-theme .header-icon:hover {
    background: #262c49 !important;
  }
  .dark-theme .calendar-parent {
    background-color: #10163a;
  }
  .dark-theme .cv-day,
  .dark-theme .cv-event,
  .dark-theme .cv-header-day,
  .dark-theme .cv-header-days,
  .dark-theme .cv-week,
  .dark-theme .cv-weeks {
    border-style: solid;
    border-color: #262c49;
  }
  .dark-theme .theme-default .cv-day.outsideOfMonth,
  .dark-theme .theme-default .cv-day.past {
    background-color: #10163a;
  }
  .dark-theme .theme-default .cv-day.today {
    background-color: #262c49;
  }
  .dark-theme .theme-default .cv-header,
  .dark-theme .theme-default .cv-header-day {
    background-color: #262c49;
  }
  .dark-theme .cv-header,
  .dark-theme .cv-header button {
    border-style: solid;
    border-color: #10163a;
    background: #262c49;
  }
  .dark-theme .vgt-global-search.vgt-clearfix {
    background: #10163a;
  }
  .dark-theme table.tableOne tbody tr th.line-numbers {
    background: #10163a;
  }
  .dark-theme div.vgt-wrap__footer.vgt-clearfix {
    background: #10163a;
  }
  .dark-theme table.vgt-table td {
    border-bottom: 1px solid #262c49;
    color: #c2c6dc;
  }
  .dark-theme table.tableOne tbody tr th.vgt-checkbox-col {
    background: #10163a;
  }
  .dark-theme th.line-numbers {
    border-bottom: 1px solid #10163a;
  }
  .dark-theme th.vgt-checkbox-col {
    border-bottom: 1px solid #10163a;
  }
  .dark-theme .ul-widget__item {
    border-bottom: 0.07rem dashed #262c49;
  }
  .dark-theme .page-item.disabled .page-link {
    background-color: #10163a;
    border-color: #10163a;
  }
  .dark-theme ul.gull-pagination li .page-link {
    border-color: #10163a !important;
  }
  .dark-theme ul.gull-pagination li .page-link:hover {
    background: #10163a;
  }
  .dark-theme .layout-sidebar-vertical .sidebar-panel {
    box-shadow: 0 1px 15px #262c49, 0 1px 6px #262c49;
    background: #10163a;
  }
  .dark-theme .layout-sidebar-vertical .main-content-wrap .main-header {
    background: #10163a !important;
  }
  .dark-theme .layout-horizontal-bar .header-topnav {
    background: #10163a;
    box-shadow: 0 1px 15px transparent, 0 1px 6px transparent;
  }
  .dark-theme .layout-horizontal-bar .header-topnav .topnav a {
    color: #c2c6dc !important;
  }
  .dark-theme .layout-horizontal-bar .header-topnav .topnav ul ul {
    background: #10163a;
    color: #c2c6dc;
  }
  .dark-theme .layout-horizontal-bar .header-topnav .topnav ul li ul li:hover {
    background: #262c49;
  }
  .dark-theme .main-header .show .header-icon {
    background: #262c49;
  }
  .dark-theme .main-header .notification-dropdown {
    color: #c2c6dc;
  }
  .dark-theme .main-header .notification-dropdown .dropdown-item {
    border-bottom: 1px solid #10163a;
    color: #c2c6dc;
  }
  .dark-theme .main-header .notification-dropdown .notification-icon {
    background: #10163a !important;
  }
  .dark-theme .dropdown-item:focus,
  .dark-theme .dropdown-item:hover {
    color: #c2c6dc;
    text-decoration: none;
    background-color: #10163a;
  }
`;
export const Container = styled.div`
  width: 100%;
  position: relative;

  ${GlobalStyles}
`;