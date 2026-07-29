import React from "react";

import Layout from "@/components/Layout/LayoutNew";
import Blocks from "@/components/Layout/Blocks"

import IntroBlock from "@/blocks/IntroBlock";
import ProjectsBlock from "@/blocks/ProjectsBlock";
import ExploreBlock from "@/blocks/ExploreBlock";
import CurrentlyBlock from "@/blocks/CurrentlyBlock";
import SeparatorBlock from "@/blocks/SeparatorBlock";

import { useState, useEffect } from 'react'
// import Layout from "@/components/Layout.jsx";

function Home(){

    const [notionData, setNotionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch('/api/notion-data')
        .then(res => {
        console.log('Response status:', res.status);
        return res.text(); // Get as text first to see what it is
        })
        .then(text => {
        console.log('Raw response:', text);
        const data = JSON.parse(text); // Try to parse
        setNotionData(data);
        setLoading(false);
        })
        .catch(err => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Layout>
            <Blocks>
                <IntroBlock/>
                <SeparatorBlock/>
                <ProjectsBlock/>
                <SeparatorBlock/>
                <ExploreBlock/>
                <SeparatorBlock/>
                <CurrentlyBlock/>
            </Blocks>
        </Layout>

    )

}

export default Home