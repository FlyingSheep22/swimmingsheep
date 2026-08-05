import Head from "next/head";
import fs from "fs";
import path from "path";
import { imageSize } from "image-size";

import Layout from "@/components/Layout/LayoutNew";
import ArtGrid from "@/components/ArtGrid/ArtGrid";
import styles from "@/stylesheets/creative.module.css";

export async function getStaticProps() {
    const directory = path.join(process.cwd(), "public/art");

    const images = fs
        .readdirSync(directory)
        .filter((file) =>
            /\.(png|jpe?g|webp|gif)$/i.test(file)
        )
        .sort((a, b) =>
            b.localeCompare(a, undefined, { numeric: true })
        )
        .map((file) => {
            const filePath = path.join(directory, file);
            const buffer = fs.readFileSync(filePath);

            const { width, height } = imageSize(buffer);

            return {
                src: `/art/${file}`,
                aspectRatio: width / height,
            };
        });

    return {
        props: {
            images,
        },
    };
}

export default function CreativePage({ images }) {
    return (
        <>
            <Head>
                <title>Creative | Kevin Bai</title>
            </Head>

            <Layout>
                <main className={styles.page}>
                    <h1 className={styles.heading}>Art</h1>

                    <ArtGrid
                        images={images}
                        columns={3}
                        gap="1rem"
                    />
                </main>
            </Layout>
        </>
    );
}