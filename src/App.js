import EL from "./utils/EL.js"
import Form from "./components/From/index.js";

const App = () => {
    const app = EL({
        children: [
            Form(),
        ]
    })
    return app;
}

export default App;