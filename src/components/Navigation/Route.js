import { useEffect, useState } from "react";
//show the child component(ex: Pages/Resume.js or CoverLetter.js) 
//if the adressbar path matches the component route path

//when useEffect hook first renders it sets the state to current path in the adressbar
//The Link component has already changes the url
//so the popstate event is triggred
//because it has changed the useEffect will rerender from the return function and cancel it self

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    return currentPath === path ? children: null;
};
export default Route;