import React from 'react';

export default class ThemedParty extends React.Component{
    render(){
        const klass = this.props.theme;
        const childrenWithExtraProp = React.Children.map(this.props.children, child =>{
            return React.cloneElement(child, {className: klass});
        });
        return(
            <div>
                {childrenWithExtraProp}
            </div>    
        );
    }
}
