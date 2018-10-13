import React, { Component } from 'react'

export default class Settings extends Component {

  componentDidMount() {
    if (this.props.callback) this.props.callback();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="menucontainer" id="settingscontent">
        <div className="boxs">
          <select className="mapTypeSelect" lang="fi">
            <option value="roadmap">Google tiekartta</option>
            <option value="satellite">Google satelliitti</option>
            <option value="hybrid">Google hybridi</option>
            <option value="terrain">Google maasto</option>
            <option value="OSM">OpenStreetMap</option>
            <option value="MMLTAUSTA">MML taustakartta</option>
            <option value="MMLMAASTO">MML maastokartta</option>
          </select>
          <select className="mapTypeSelect" lang="sv">
            <option value="roadmap">Google vägkarta</option>
            <option value="satellite">Google satellit</option>
            <option value="hybrid">Google hybrid</option>
            <option value="terrain">Google terräng</option>
            <option value="OSM">OpenStreetMap</option>
            <option value="MMLTAUSTA">LMV bakgrundskarta</option>
            <option value="MMLMAASTO">LMV terrängkarta</option>
          </select>
          <select className="mapTypeSelect" lang="en">
            <option value="roadmap">Google Roadmap</option>
            <option value="satellite">Google Satellite</option>
            <option value="hybrid">Google Hybrid</option>
            <option value="terrain">Google Terrain</option>
            <option value="OSM">OpenStreetMap</option>
            <option value="MMLTAUSTA">NLS Background Map</option>
            <option value="MMLMAASTO">NLS Terrain Map</option>
          </select>
        </div>

        <div className="boxs">
          <button type="button" className="btn btn-secondary" id="toggleFullscreen" style={{width: "100%"}}>
            <span lang="fi">Koko ruutu</span><span lang="sv">Full screen</span><span lang="en">Full screen</span>
          </button>
        </div>
        <div className="boxs">
          <h4 lang="fi">Karttatasot</h4>
          <h4 lang="sv">Kartanivåerna</h4>
          <h4 lang="en">Map Layers</h4>
          <div className="layer">
            <input type="checkbox" id="cbbig" data-target="longdistanceferries"/>
            <label className="layerselector" htmlFor="cbbig">
              <span lang="fi">Suuret autolautat</span><span lang="sv">Stora bilfärjorna</span><span lang="en">Large car ferries</span>
            </label>
          </div>
          <div className="layer">
            <input type="checkbox" id="cbconn2" data-target="roadferries"/>
            <label className="layerselector" htmlFor="cbconn2">
              <span lang="fi">Maantielautat</span><span lang="sv">Landvägsfärjorna</span><span lang="en">Road ferries</span>
            </label>
          </div>
          <div className="layer">
            <input type="checkbox" id="cbconn4" data-target="conn4"/>
            <label className="layerselector" htmlFor="cbconn4">
              <span lang="fi">Yhteysalukset</span><span lang="sv">Förbindelsefartygen</span><span lang="en">Commuter ferries</span>
            </label>
          </div>
          <div className="layer">
            <input type="checkbox" id="cbrist" data-target="conn5"/>
            <label className="layerselector" htmlFor="cbrist">
              <span lang="fi">Risteilyreitit</span><span lang="sv">Kryssningrutterna</span><span lang="en">Cruise routes</span>
            </label>
          </div>
          <div className="layer">
            <input type="checkbox" id="cbring" data-target="ringroads"/>
            <label className="layerselector" htmlFor="cbring">
              <span lang="fi">Rengastiet</span><span lang="sv">Ringvägarna</span><span lang="en">Ring roads</span>
            </label>
          </div>
          <div className="layer">
            <input type="checkbox" id="cbdist" data-target="distances"/>
            <label className="layerselector" htmlFor="cbdist">
              <span lang="fi">Välimatkat</span><span lang="sv">Avstånden</span><span lang="en">Distances</span>
            </label>
          </div>
          <div className="layer">
            <input type="checkbox" id="cblive" data-target="live"/>
            <label className="layerselector" htmlFor="cblive">
              <span lang="fi">Live</span><span lang="sv">Live</span><span lang="en">Live</span>
            </label>
          </div>
        </div>
        <div className="boxs">
          <div className="btn-group" style={{ width: "100%" }}>
            <button type="button" className="btn btn-secondary lang-button" setlang="fi" style={{ width: "33%" }}>FI</button>
            <button type="button" className="btn btn-secondary lang-button" setlang="sv" style={{ width: "34%" }}>SV</button>
            <button type="button" className="btn btn-secondary lang-button" setlang="en" style={{ width: "33%" }}>EN</button>
          </div>
        </div>
      </div>
    );
  }
}
