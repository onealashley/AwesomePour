import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/api"

Modal.setAppElement('#root')

class Modals extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }
    state = {
        title: "",
        ingredients: [],
        directions: "",
        category: ""
    };

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        ;
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    loadDrinks = () => {
        API.getDrinks()
            .then (res => this.setState({ drinks: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log("submit");
        event.preventDefault();
            API.saveDrink({
                title: this.state.title,
                ingredients: this.state.ingredients.split(','),
                directions: this.state.directions,
                category: this.state.category
            })
                .then(res => this.loadDrinks())
                .catch(err => console.log(err));
    };
    

    render() {
        return (
            <div id="modalDiv">
                <button onClick={this.openModal}>Create A Custom Drink</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="Modal"
                    overlayClassName="Overlay"
                    contentLabel="Example Modal"
                >
                    <h2 >Create Your Own Drink</h2>
                    <form>
                        <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            class="inputBox"
                            name="title"
                            placeholder="Name of the drink"
                        />
                        <br></br>

                        <Input
                            value={this.state.category}
                            onChange={this.handleInputChange}
                            class="inputBox"
                            name="category"
                            placeholder="Category of the drink"
                        />
                        
                        {/* <select value={this.state.category} onChange={this.handleInputChange}>
                        <option value="rum">Rum</option>
                        <option value="bourbon">Vodka</option>
                        <option value="vodka">Vodka</option>
                        <option value="gin">Gin</option>
                        <option value="champagne">Champagne</option>
                        <option value="nonalcoholic">Non-Alcoholic</option>
                        <option value="misc">Miscellaneous</option>
                        </select> */}

                        <br></br>
                        <br></br>

                        <Input
                            value={this.state.ingredients}
                            onChange={this.handleInputChange}
                            class="inputBox"
                            name="ingredients"
                            placeholder="Ingredients for the drink"
                        />
                        <br></br>

                        <TextArea
                            value={this.state.directions}
                            onChange={this.handleInputChange}
                            class="inputBox2"
                            name="directions"
                            placeholder="Directions to make the drink"
                        />

                        <br></br>

                        <FormBtn
                            onClick={this.handleFormSubmit}
                        >
                            Submit drink
                        </FormBtn>
                    </form>
                    <br></br>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </div>
        );
    }
}

export default Modals;