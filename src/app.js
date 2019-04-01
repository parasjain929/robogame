import React, { Component }from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'



class App extends Component{

	constructor (){
		super()
		this.state ={
			robots: robots,
	       searchfield:''

		}
	}

	onSearchChange = (event) =>{

		this.setState({searchfield: event.target.value})

		

		
	}

		render(){
			const filterRobots = this.state.robots.filter( robots =>{

			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})


	return(
		<div>
		<h1 align="center">ROBOFRIENDS</h1>

		<SearchBox align="center"  searchChange={this.onSearchChange}/>
		<CardList robots={filterRobots} />
		</div>
		);
	}
}

export default App;