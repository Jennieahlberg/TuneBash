

class NewName extends Component {
    state = {
        name: ''
    }

    postDataHandler = () => {
        const data = {
            name: this.state.name
        };

        axios.post('/app/members')
            .then(respone => {
                console.log(response);
            });
    }

    render() {
        return (
        <div>
            <div className="headline">
                <p>Skriv in ditt eller ditt lags namn</p>
            </div>
            <div className="name">
                <form onSubmit={props.onSubmitName}>
                    <input value={this.state.name} id="name" type="text" name="name" placeholder="Namn" autoComplete="off" />
                    <input type="submit" id="startGameButton" value="Kör!" />
                </form>
            </div>
        </div>
        )};
}

