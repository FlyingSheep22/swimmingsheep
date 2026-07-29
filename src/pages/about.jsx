import React from "react";

import Layout from "@/components/Layout/LayoutNew";
import Blocks from "@/components/Layout/Blocks"

import ProfileBlock from "@/blocks/ProfileBlock";

function About(){

    return (
        <Layout>
            <Blocks>
                <ProfileBlock/>
            </Blocks>
        </Layout>
    )
}

export default About;