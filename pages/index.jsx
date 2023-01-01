import React, {useEffect, useState} from "react";
import { Button } from "../components/Button/Button";
import { Text } from "../components/Text/Text";
import { List } from "../components/List/List";


export default function IndexPage({ data }) {
    const [content, setContent] = useState(data);
    const [value, setValue] = useState("");
    const [link, setLink] = useState("");
    const [page, setPage] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        if (!value) return;
        if (!link) return;
        setContent(LastState => [ {title : value, url : link, id: content.length + 1}, ...(LastState || [])]);
        setValue("");
        setLink("");
    }

    return (
        <main>
            <h1 align="center">Gallery</h1>
            <Text>Page {page}</Text>
            <form onSubmit={handleClick}>
                <div className="add-img">
                Alt:<input type="text" value={value} onChange={e => setValue(e.target.value)} /><br/>
                Url:<input type="text" value={link} onChange={e => setLink(e.target.value)} />
                <Button type="submit" title="Add item" />
                </div>
            </form>
            {content && <List content={content?.slice(page * 9, (page + 1) * 9)} />}
            <center>
            <Button type="button" onClick={() => setPage(p => p - 1)}>Prev</Button>
            <Button type="button" onClick={() => setPage(p => p + 1)}>Next</Button><br/>
            </center>
        </main>
    );
}

export async function getStaticProps(context) {
    const obj = await fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json());
    return {
        props: {
            data: obj,
        },
    };
}
