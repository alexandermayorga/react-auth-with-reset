import React from 'react'
import AdminLayout from "../HOC/AdminLayout";
import Authenticator from "../misc/Authenticator";

export default function Dashboard() {
    return (
        <AdminLayout>
            <div className="h2">Welcome to your dashboard</div>
        </AdminLayout>
    )
}
