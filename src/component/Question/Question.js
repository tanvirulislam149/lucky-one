import React from 'react';

const Question = () => {
    return (
        <div className='m-5'>
            <h3>(1) Que: How react works?</h3>
            <h3> Ans: React is JavaScript library which has a virtual dom(Document Object Model). When some changes are made in code, there is being made a virtual dom instantly for being compared with the real dom. And here the comparing is being occured by diffing algorithm. It defines the changes between these doms and renders to browser dom and user can see the updates. Because of the virtual dom, react works so much faster no matter how big the codes are. this is how react works under the hood. </h3>
            <h3>(2) Que: Props vs State. </h3>
            <h3>Ans: Props is a object that is used to send data from one component to another. On the otherhand, State is something where user can store data in one component. Props is immutable means user can't change the data only can use them where data of state is mutable means user can change the data of state when it is necessary. Props is read only data. but state can be read and written by the user. Props make the connection between components but state remains in one component and it can be passed to another component by using props.  </h3>
        </div>
    );
};

export default Question;