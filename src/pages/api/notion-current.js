import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

function getTitle(property) {
    return (
        property?.title
            ?.map((item) => item.plain_text)
            .join("") ?? ""
    );
}

function getRichText(property) {
    return (
        property?.rich_text
            ?.map((item) => item.plain_text)
            .join("") ?? ""
    );
}

export default async function handler(req, res) {
    try {
        const response = await notion.dataSources.query({
            data_source_id:
                process.env.NOTION_CURRENT_DATASOURCE_ID,

            filter: {
                property: "Active",
                checkbox: {
                    equals: true,
                },
            },
        });

        const items = response.results.map((page) => ({
            id: page.id,
            name: getTitle(page.properties.Name),
            category:
                page.properties.Category?.select?.name ?? "",
            text: getRichText(page.properties.Text),
            url: page.properties.URL?.url ?? "",
            lastEditedTime: page.last_edited_time,
        }));

        const lastUpdated = items.reduce(
            (latest, item) => {
                if (!latest) {
                    return item.lastEditedTime;
                }

                return new Date(item.lastEditedTime) >
                    new Date(latest)
                    ? item.lastEditedTime
                    : latest;
            },
            null
        );

        return res.status(200).json({
            items,
            lastUpdated,
        });
    } catch (error) {
        console.error(
            "Notion currently query failed:",
            error?.body ?? error
        );

        return res.status(500).json({
            error:
                error?.body?.message ??
                error?.message ??
                "Failed to fetch currently data.",
        });
    }
}