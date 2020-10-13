/**
 * Created by chencheng on 16-10-11.
 */
var tplStr = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>webpack-pipe</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="">
        <link rel="icon" href="/favicon.ico">
        <meta name="description" content="">
        <meta name="keyword" content="">
        <link href="{$publicAppCSS}" rel="stylesheet">
    </head>
    <body>
        <div id="wrapper"></div>
        <script src="{$EnvConfJS}"></script>
        <script src="{$publicAppJS}"></script>
    </body>
</html>
`;

module.exports = tplStr;
