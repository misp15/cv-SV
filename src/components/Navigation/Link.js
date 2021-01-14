import React from 'react';
//renders the links in header menu
//if <a> was clicked update the window.history
const Link = ({className, href, children}) => {

    const onClick = (event) =>{
        if(event.metaKey || event.ctrlKey){
            return;
            // do nothing if ctrl or cmd keyboard buttons where clicked
            //.metaKey and .ctrlKey returns a boolean        
        }
        event.preventDefault();
        //dont execute the default event behavior
        //(meaning dont reaload and go to <a> tags href link)

        window.history.pushState({}, " ", href);
        //This example inserts a new record into the history, 
        //page title
        //and address bar.
        //see document.location in inspector console tab

        const navEvent = new PopStateEvent('popstate');
        //create popstate event 
        // A popstate event is dispatched to the window 
        // every time the active history entry changes 
        // between two history entries for the same document. 
        // If the history entry being activated was created 
        // by a call to history.pushState() or was affected 
        // by a call to history.replaceState(), the popstate 
        // event's state property contains a copy of the 
        // history entry's state object.
        window.dispatchEvent(navEvent);
        //  The return value is false if event is cancelable
        //  and at least one of the event handlers which 
        //  received event called Event.preventDefault(). 
        //  Otherwise it returns true.
    }
    return(
        <a href={href} onClick={onClick} className={className}>
            {children}
        </a>
    );

};

export default Link;