import { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form>
                <label>
                    <input type="text"/>
                </label>
                <label>
                    <input type="text"/>
                </label>
                <label>
                    <input type="checkbox"/>
                </label>
                <div>
                    <button></button>
                </div>
            </form>
        )
    }
}

export default Form; 