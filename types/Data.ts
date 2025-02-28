export type Data = {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export type ModelProps = {
    item: {
        id: string;
        date: string;
        title: string;
        content: string;
    };
}