import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends React.Component{
	render(){
		return (
			<div>
				<h3>Notes for {this.props.username}</h3>
				<AddNote addNote={this.props.addNote} username={this.props.username} />
				<NotesList notes={this.props.notes} />
			</div>
		)
	}
}

Notes.propTypes = {
	addNote: React.PropTypes.func.isRequired,
	notes: React.PropTypes.array.isRequired,
	username: React.PropTypes.string.isRequired
}

module.exports = Notes;