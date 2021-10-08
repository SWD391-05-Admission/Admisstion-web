import React from 'react'
import { useParams } from 'react-router'

export default function UpdateChuyenNganh() {

    const maCN = useParams().maCN;

    return (
        <div>
            {maCN}
        </div>
    )
}
