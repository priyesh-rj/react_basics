    const root= ReactDOM.createRoot(document.getElementById("root")) //this line is coming from 2nd line of react livrary react.dom
//    const heading = React.createElement("h1", {id: "heading"}, "hello this is React")  //this line is coming from 1st line of react library react.developement  //react.createelement is take 3 parameter,(element,attribute,textdata
//    root.render(heading) 

    // console.log(heading.props.children) //heading here is react element and react element is js object,when we go  insid it there we will get many data 

    const parent= React.createElement(
    "div", {id: "parent"},[
    React.createElement("div", {id: "child1"}, 
    [ React.createElement("h1", {}, "I am an h1 tag"),
     React.createElement("h2", {}, "I am an h2 tag") ]),  //if we want to make a siblings  or say same tag below it then put them in a array
   
     React.createElement("div", {id: "child2"}, 
    [ React.createElement("h1", {}, "I am an h1 tag"),
     React.createElement("h2", {}, "I am an h2 tag") ])  //if we want to make a siblings  or say same tag below it then put them in a array
    
    ]);
  root.render(parent)   //this parent is a object ,which is react element it convet in HTML(browser understand) 
  // what this render is doing ,it is replacing the data of inside div which have id root, means if we have any data itself in html then if we render somethng other data in that root id then it will replace the data
  console.log(parent)
 