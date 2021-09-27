import React from 'react'
import { Link } from 'react-router-dom';

export default function MainSection() {
    return (
        <div>
            <Link to="/select-template">
                <button className="bg-red-800 flex justify-center items-center w-40 py-6">Go to Editing</button>
            </Link>
        </div>
    );
}
