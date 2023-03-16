import Form from "../components/Form";
import Button from '../components/Button';

const Test = () => {
    return (
        <main>
            <h1>Test</h1>
            <Form />

            <p>----------</p>
            <Form showBtn={true} />
            <Button outline={true} size="sm">
                Click me!
            </Button>
            <Button outline={false} size="md">
                Click me!
            </Button>
            <Button outline={true} size="lg">
                Click me!
            </Button>
        </main>
    );
}

export default Test;