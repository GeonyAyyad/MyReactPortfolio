import React, { Component } from 'react';
import './App.css';
import { PageHeader } from 'react-bootstrap';
import Hero from './components/Hero';

class App extends Component {
  render() {

		var styles1 = {
			width: '100%',
			height: '100%',
			backgroundColor: 'white',
			paddingRight: '0px',
			paddingLeft: '0px',

			
		};

		var styles2 = {
			width: '100%',
		}

    return (
      <div id="perspective" class="perspective effect-airbnb">
			
			<div class="container" style={styles1}>
	<Hero />
				<div class="wrapper">
					
					<header class="codrops-header">
						<h1>Perspective Page View Navigation <span>Transforms the page in 3D to reveal a menu</span></h1>	
					</header>
					<div class="main clearfix">
						<div class="column">
							<p><button id="showMenu" onClick={window.init}>Show Menu</button></p>
							<p>Click on this button to see the content being pushed away in 3D to reveal a navigation or other items.</p>
							
						</div>
						<div class="column">
							<nav class="codrops-demos">
								
							</nav>
							
						</div>
						
					</div>
				</div>
				
			</div>
			<nav class="outer-nav left vertical">
				<a href="#" class="icon-home">Home</a>
				<a href="#" class="icon-news">News</a>
				<a href="#" class="icon-image">Images</a>
				<a href="#" class="icon-upload">Uploads</a>
				<a href="#" class="icon-star">Favorites</a>
				<a href="#" class="icon-mail">Messages</a>
				<a href="#" class="icon-lock">Security</a>
			</nav>
	

      </div>
		);
  }
}




export default App;
