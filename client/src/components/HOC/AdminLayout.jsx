import React from 'react'
import Sidebar from "../admin/Sidebar";

const AdminLayout = (props) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-3 sidebar">
                        <Sidebar />
                    </div>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <div className="dash_body">

                            <div className="alert alert-info text-center" role="alert">
                                <span style={{ marginRight: "15px" }}>Account has not been verified</span> <button id="resend-verification"
                                    className="btn btn-info btn-sm">Resend Verification Link</button>
                            </div>

                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
