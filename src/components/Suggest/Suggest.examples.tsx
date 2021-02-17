import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Suggest } from "./Suggest";
import { fetchData } from "./fetchData";

export default {
    title: "Suggest",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Suggest.md"),
        },
    },
};

export const StaticData = () => {
    const [value, setValue] = React.useState("");

    return (
        <>
            <Suggest
                data={["Каждый", "Охотник", "Желает", "Знать", "Где", "Сидит", "Фазан"]}
                value={value}
                onChange={setValue}
            />
        </>
    );
};

StaticData.story = {
    name: "static-data",
};

export const SuggestAsync = () => {
    const [value, setValue] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (value === "") {
            setData([]);
        } else if (data.length === 0) {
            setLoading(true);
            fetchData().then((response) => {
                // @ts-ignore
                setData(response.map((value) => value.name));
                setLoading(false);
            });
        }
    }, [data.length, value]);

    return (
        <>
            <Suggest data={data} value={value} onChange={setValue} loading={loading} />
        </>
    );
};

SuggestAsync.story = {
    name: "suggest-async",
};
