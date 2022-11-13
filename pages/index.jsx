import { Button } from "../components/Button/Button";
import { Text } from "../components/Text/Text";

export default function IndexPage() {
    return (
        <main>
            <h1>привет мир!</h1>
            <Text>здесь мог бы быть ваш текст.</Text>
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
            <Button>4</Button>
            <Button>5</Button>
        </main>
    );
}