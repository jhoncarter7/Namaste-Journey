//   // we will use createElemet from core react to create element under the root
//   const heading = React.createElement("h1", {id: "heading"}, "Hello from Nikhil");
//   // we use react dom to create root beacuse root is dom where we render(push) the element of core react
//   const root = ReactDOM.createRoot(document.getElementById("root"));

//   root.render(heading);


const heading = React.createElement("div", { id: "parent" },

    [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "h1 tage of first"), React.createElement("h1", {}, "second H1 tag")]), React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "h1 tage of first"), React.createElement("h1", {}, "second H1 tag")])]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);