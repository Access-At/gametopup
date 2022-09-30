import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Guest from "@/Layouts/GuestLayout";

export default function Welcome(props) {
    return (
        <>
            <Guest>
                <div>Hello Laravel React</div>
            </Guest>
        </>
    );
}
