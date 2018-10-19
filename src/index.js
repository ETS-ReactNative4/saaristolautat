import React from 'react';
import ReactDOM from 'react-dom';
import LiveIndicator from './components/LiveIndicator';
import App from './App';
import InfoContent2  from './components/InfoContent2';
import InfoContent  from './components/InfoContent';
import Timetables  from './components/Timetables';
import txtol from './lib/txtol';
import { initMapTypes } from './lib/maptypes';
import { initLiveLayer } from './lib/live';
import { initObjectRenderer } from './lib/objects';
import { initFullscreen } from './lib/fullscreen';
import { loadFerriesData } from './lib/dataloader';
import { initLocalizer } from './lib/localizer';
import { initRoutes } from './lib/routes';
import './lib/uicontrol';
import './lib/mapcontrol';
import { createMap, initMap, initLayers, initSettings, initInfoPage } from './lib/ferries';
import { L2 } from './lib/localizer';

window.initApplication = () => {
	txtol.init();
	const map = createMap();
	initMapTypes(map);
	const objectRenderer = initObjectRenderer(map, txtol);
	initMap(map, objectRenderer, initRoutes, loadFerriesData, initLocalizer);
	initLiveLayer(map, txtol, liveIndicator);
	initLayers();
}

const loadGoogleMaps = () => {
	const googleMapScript = document.createElement('script');
	googleMapScript.setAttribute('src','https://maps.googleapis.com/maps/api/js?key=AIzaSyAX_N6yFjHfac6v9-xiwA31yg1twAMMyGA&v=3.33&callback=initApplication');
	document.body.appendChild(googleMapScript);	
}

const initElements = () => {
	initSettings();
	initInfoPage();
}

//--

ReactDOM.render(<App />, document.getElementById('app'));	
const liveIndicator = ReactDOM.render(<LiveIndicator />, document.getElementById('liveindpos'));

window.setInfoContent1 = function(data) {
	ReactDOM.render(<InfoContent data={data} l2={L2}/>, document.getElementById('infoholder'));
}

window.unsetInfoContent1 = function() {
	ReactDOM.unmountComponentAtNode(document.getElementById('infoholder'));
}

window.setInfoContent2 = function(data) {
	ReactDOM.render(<InfoContent2 names={data.names} contents={data.contents} />, document.getElementById('infoholder'));
}

window.unsetInfoContent2 = function() {
	ReactDOM.unmountComponentAtNode(document.getElementById('infoholder'));
}

window.setTimetables = function(data) {
	ReactDOM.render(<Timetables data={data} l2={L2} />, document.getElementById('timetables'));
}

window.unsetTimetables = function() {
	ReactDOM.unmountComponentAtNode(document.getElementById('timetables'));
}

const toggleFullscreen = initFullscreen(document.getElementById('wrapper'), (isFullScreen) => {
	window.$('#toggleFullscreen').toggleClass('active', isFullScreen);
});

window.toggleFullscreen = toggleFullscreen;

initElements();
loadGoogleMaps();
