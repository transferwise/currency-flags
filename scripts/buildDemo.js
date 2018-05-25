const { buildDemo } = require('create-svg-icon-sprite');

buildDemo({
  title: 'TransferWise icons',
  externalStyleSheetUrls: ['https://bootstrap.transferwise.com/dist/css/bootstrap.min.css'],
  bodyClasses: ['bg-default'],
  headerHtml: `
    <header class="p-t-5 p-b-3">
    <h1>
        TransferWise icons<span class="text-info">.</span>
    </h1>
    </header>
  `,
});
