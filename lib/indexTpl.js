/**
 * Created by chencheng on 16-10-11.
 */
var tplStr = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="数据可视化,Smart View">
        <link rel="icon" href="/favicon.ico">
        <meta name="description" content="">
        <meta name="keyword" content="">
        <link href="{$publicVendorCSS}" rel="stylesheet">
    </head>
    <body>
        <div id="wrapper"></div>
        <script src="{$EnvConfJS}"></script>
        <script src="{$runtime}"></script>
        <script src="{$publicVendorJS}"></script>
        <script src="{$publicAppJS}"></script>
    </body>
</html>
`;

module.exports = tplStr;
