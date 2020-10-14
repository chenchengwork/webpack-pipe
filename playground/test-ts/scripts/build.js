const { solution } = require("../../../index");

// 编译打包
solution.antSolution.build({
    buildOptions: {
        proxyPath: "/",
    },
});

