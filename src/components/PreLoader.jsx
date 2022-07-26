import React from "react";

function PreLoader(props) {

    return (
        <>
            {
                props.myStyle ?
                    <div>
                        <div className="pre-loader1" >&lt; Loadi</div>
                        <div className="pre-loader2" >ng... &gt;</div>
                    </div>
                    :
                    <div>
                        <div className="pre-loader1" style={{ transform: 'translateX(-105%)' }}>&lt; Loadi</div>
                        <div className="pre-loader2" style={{ transform: 'translateX(105%)' }}>ng... &gt;</div>
                    </div>
            }
        </>
    );
}
export default PreLoader;