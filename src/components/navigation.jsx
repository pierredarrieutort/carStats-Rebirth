import React, { Component } from 'react'

export default class Navigation extends Component {

    render() {
        return (
            <>
                <h1>Navigation</h1>
                <div id="contenu">
                    <div className="prettyWrap">
                        <div id="signalWrapper">
                            {/* <img src={require( 'images/signal-satellite.svg' )} alt="Signal-GPS" /> */}
                            <div id="gps_Signal" className="q0 q4">
                                <div className="bar s1"></div>
                                <div className="bar s2"></div>
                                <div className="bar s3"></div>
                                <div className="bar s4"></div>
                                <div className="bar s5"></div>
                            </div>
                        </div>
                    </div>
                    <div className="speedWrap">
                        <svg id="speedGaugeSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.732 243.695">
                            <g id="gaugeTicksWrapper" transform="translate(-49.905 -167.069)">
                                <line className="a" x1="13.063" y2="15.283" transform="translate(99.169 393.31)" />
                                <line className="a" x1="14.202" y2="14.191" transform="translate(91.308 387.13)" />
                                <line className="a" x1="15.293" y2="13.051" transform="translate(84.043 380.404)" />
                                <line className="a" x1="16.262" y2="11.805" transform="translate(77.417 373.238)" />
                                <line className="a" x1="17.117" y2="10.48" transform="translate(71.471 365.657)" />
                                <line className="a" x1="17.9" y2="9.111" transform="translate(66.243 357.68)" />
                                <line className="a" x1="18.54" y2="7.67" transform="translate(61.764 349.394)" />
                                <line className="a" x1="19.091" y2="6.194" transform="translate(58.062 340.822)" />
                                <line className="a" x1="19.53" y2="4.679" transform="translate(55.16 332.029)" />
                                <line className="a" x1="19.824" y2="3.13" transform="translate(53.075 323.074)" />
                                <line className="a" x1="20.047" y2="1.568" transform="translate(51.821 314.002)" />
                                <line className="a" x1="20.078" y1="0.01" transform="translate(51.406 304.869)" />
                                <line className="a" x2="20.045" y2="1.587" transform="translate(51.832 294.17)" />
                                <line className="a" x1="19.823" y1="3.15" transform="translate(53.096 283.536)" />
                                <line className="a" x2="19.524" y2="4.698" transform="translate(55.19 273.034)" />
                                <line className="a" x1="19.087" y1="6.212" transform="translate(58.102 262.729)" />
                                <line className="a" x2="18.531" y2="7.687" transform="translate(61.813 252.685)" />
                                <line className="a" x1="17.892" y1="9.128" transform="translate(66.301 242.962)" />
                                <line className="a" x2="17.109" y2="10.497" transform="translate(71.539 233.622)" />
                                <line className="a" x1="16.25" y1="11.82" transform="translate(77.493 224.721)" />
                                <line className="a" x2="15.281" y2="13.066" transform="translate(84.127 216.315)" />
                                <line className="a" x1="14.189" y1="14.205" transform="translate(91.4 208.456)" />
                                <line className="a" x2="13.048" y2="15.295" transform="translate(99.267 201.191)" />
                                <line className="a" x1="11.802" y1="16.264" transform="translate(107.681 194.566)" />
                                <line className="a" x2="10.477" y2="17.119" transform="translate(116.588 188.622)" />
                                <line className="a" x1="9.108" y1="17.902" transform="translate(125.934 183.395)" />
                                <line className="a" x2="7.667" y2="18.541" transform="translate(135.662 178.918)" />
                                <line className="a" x2="6.191" y2="19.092" transform="translate(145.71 175.217)" />
                                <line className="a" x2="4.676" y2="19.53" transform="translate(156.019 172.317)" />
                                <line className="a" x2="3.127" y2="19.824" transform="translate(166.523 170.234)" />
                                <line className="a" x2="1.565" y2="20.047" transform="translate(177.158 168.982)" />
                                <line className="a" y2="20.076" transform="translate(187.772 168.569)" />
                                <line className="a" x1="1.578" y2="20.046" transform="translate(196.894 168.989)" />
                                <line className="a" x1="3.14" y2="19.823" transform="translate(205.966 170.248)" />
                                <line className="a" x1="4.688" y2="19.527" transform="translate(214.92 172.337)" />
                                <line className="a" x1="6.203" y2="19.089" transform="translate(223.712 175.244)" />
                                <line className="a" x1="7.678" y2="18.535" transform="translate(232.283 178.951)" />
                                <line className="a" x1="9.12" y2="17.896" transform="translate(240.566 183.435)" />
                                <line className="a" x1="10.488" y2="17.114" transform="translate(248.54 188.667)" />
                                <line className="a" x1="11.812" y2="16.256" transform="translate(256.12 194.617)" />
                                <line className="a" x1="13.058" y2="15.287" transform="translate(263.283 201.247)" />
                                <line className="a" x1="14.197" y2="14.195" transform="translate(270.007 208.517)" />
                                <line className="a" x1="15.289" y2="13.056" transform="translate(276.184 216.381)" />
                                <line className="a" x1="16.258" y2="11.81" transform="translate(281.843 224.791)" />
                                <line className="a" x1="17.115" y2="10.486" transform="translate(286.935 233.695)" />
                                <line className="a" x1="17.898" y2="9.117" transform="translate(291.384 243.039)" />
                                <line className="a" x1="18.537" y2="7.676" transform="translate(295.226 252.764)" />
                                <line className="a" x1="19.09" y2="6.2" transform="translate(298.379 262.811)" />
                                <line className="a" x1="19.528" y2="4.686" transform="translate(300.846 273.118)" />
                                <line className="a" x1="19.824" y2="3.137" transform="translate(302.638 283.621)" />
                                <line className="a" x1="20.046" y2="1.575" transform="translate(303.673 294.255)" />
                                <line className="a" x1="20.077" y1="0.003" transform="translate(304.06 304.953)" />
                                <line className="a" x2="20.046" y2="1.581" transform="translate(303.67 314.075)" />
                                <line className="a" x1="19.823" y1="3.143" transform="translate(302.631 323.147)" />
                                <line className="a" x2="19.526" y2="4.692" transform="translate(300.837 332.101)" />
                                <line className="a" x1="19.088" y1="6.206" transform="translate(298.367 340.892)" />
                                <line className="a" x2="18.534" y2="7.681" transform="translate(295.213 349.463)" />
                                <line className="a" x1="17.895" y1="9.122" transform="translate(291.367 357.745)" />
                                <line className="a" x2="17.112" y2="10.491" transform="translate(286.915 365.719)" />
                                <line className="a" x1="16.254" y1="11.815" transform="translate(281.822 373.298)" />
                                <line className="a" x2="15.285" y2="13.061" transform="translate(276.159 380.46)" />
                                <line className="a" x1="14.193" y1="14.2" transform="translate(269.981 387.182)" />
                                <line className="a" x2="13.053" y2="15.291" transform="translate(263.256 393.358)" />
                            </g>
                        </svg>
                        <div className="readoutWrapper">
                            <div id="readout">-</div>
                        </div>
                        <span className="readoutUnit unitWrapper"></span>
                        <div className="backLegal">
                            <span id="legal"></span>
                        </div>
                    </div>
                    {/* <button id="start" onClick="starterButton()">&#x1F511; Start</button> */}
                    <div className="wrapStats">
                        <div>
                            <span className="avgIcon"></span><span id="averageSpeed">-</span>&nbsp;<span className="unitWrapper"></span>
                        </div>
                        <div>
                            <span className="maxIcon"></span><span id="maxSpeed">-</span>&nbsp;<span className="unitWrapper"></span>
                        </div>
                    </div>
                    <div className="wrapStats">
                        <div>
                            <span className="distanceIcon"></span><span id="distance">-</span>&nbsp;<span className="unitDistanceWrapper"></span>
                        </div>
                        <div>
                            <span className="durationIcon"></span><span id="duree">- m</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


  // scripts: initUnits(), initLang(), initStartButton(), initTimes()
