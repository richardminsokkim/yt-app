import React from 'react';

class SearchBar extends React.Component {
    state= { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
        //TODO Make sure we clal callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search for a Video</label>
                        <input value={this.state.term} type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar