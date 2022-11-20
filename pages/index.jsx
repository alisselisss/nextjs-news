import React, {useEffect, useState} from "react";
import { Button } from "../components/Button/Button";
import { Text } from "../components/Text/Text";
import { List } from "../components/List/List";


export default function IndexPage() {
    let [content, setContent] = useState(null);
    let [value, setValue] = useState("");
    let [link, setLink] = useState("");
    let [page, setPage] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        if (!value) return;
        if (!link) return;
        setContent(LastState => [ {title : value, url : link}, ...(LastState || [])]);
        setValue("");
        setLink("");
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(obj => setContent(obj));
    }, []);

    return (
        <main>
            <h1>Hello world!</h1>
            <Text>Page {page}</Text>
            <form onSubmit={handleClick}>
                <Button type="button" onClick={() => setPage(p => p - 1)}>Prev</Button>
                <Button type="button" onClick={() => setPage(p => p + 1)}>Next</Button><br/>
                Alt:<input type="text" value={value} onChange={e => setValue(e.target.value)} /><br/>
                Url:<input type="text" value={link} onChange={e => setLink(e.target.value)} />
                <Button type="submit" title="Add item" />
            </form>
            {content && <List content={content?.slice(page * 10, (page + 1) * 10)} />}
        </main>
    );
}