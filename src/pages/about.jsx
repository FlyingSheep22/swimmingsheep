import React from "react";
import Head from "next/head";

import Layout from "@/components/Layout/LayoutNew";
import Blocks from "@/components/Layout/Blocks"

import ProfileBlock from "@/blocks/ProfileBlock";
import ResumeBlock from "@/blocks/ResumeBlock";
import SeparatorBlock from "@/blocks/SeparatorBlock";

function About(){

    return (
        <>
            <Head>
                <title>About | Kevin Bai</title>
            </Head>

            <Layout>
                <Blocks>
                    <ProfileBlock/>
                    <SeparatorBlock/>
                    <ResumeBlock/>
                    <SeparatorBlock/>
                </Blocks>
            </Layout>
        </>
    )
}

export default About;