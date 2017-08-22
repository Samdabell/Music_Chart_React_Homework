import React from 'react';

export default (props) => {
  return (
    <div className="song">
      <h3>{props.position}</h3>
      <img id="artwork" src={props.artwork} alt="artwork"/>
      <h4>{props.title}</h4>
      <h5>{props.artist}</h5>
      <audio src={props.sample} controls="controls"/>
    </div>
  )
}
