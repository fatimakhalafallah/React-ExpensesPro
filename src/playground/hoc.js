import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(

  <div>
    <h1> Info page {props.info}</h1>
  </div>
);

const withinfopa = (WrappedComponent)=>{

    return (props)=>(
        <div>
         {  props.Isinfo  && <p> Authorized for Info </p> }
         <WrappedComponent { ...props }/> 
        </div>
    );
};

const withAuthrize = (WrappedComponent)=>{

    return (props)=>(
        <div>
          { props.Isinfo  ? (<p> hiiiii </p>) : ( <WrappedComponent {...props}/>) }
          
          <WrappedComponent {...props}/>
        </div>
    );

};


const InfoComp = withinfopa(Info);
const Authze = withAuthrize(Info);

ReactDOM.render(<Authze Isinfo={true}/>,document.getElementById('app'))