import React from "react";

const LoadStaticResource: React.FC = () => {

    return (
        <div>
            <img src={require("./img/logo512.png").default} style={{width: 100, height: 100}}/>
        </div>
    )
}

export default LoadStaticResource;