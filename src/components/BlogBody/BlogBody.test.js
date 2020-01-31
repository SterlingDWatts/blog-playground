import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import BlogBody from "./BlogBody";

describe(`BlogBody Component`, () => {
  const blog = {
    id: "ck5dihtmc00003z5wdxct2ajt",
    title: "A Long Article About the History of People Grooming Their Cats.",
    content:
      "Mauris ut nibh non nisl ultricies cursus. Praesent ex magna, volutpat et justo id, lobortis condimentum arcu. Curabitur hendrerit dui augue, id faucibus neque dictum nec. Nunc interdum tellus at ipsum tristique, sed rutrum urna dictum. Donec dapibus placerat sapien sed fringilla. Vivamus iaculis dignissim dapibus. Fusce consequat est sed velit euismod finibus. Aenean laoreet laoreet felis, ut pellentesque elit placerat quis. Vestibulum tellus lacus, placerat eget ligula quis, eleifend blandit neque. Vivamus eu odio vel mauris ornare tempus. Morbi sed ornare turpis. Aenean placerat ipsum at viverra efficitur. Suspendisse vitae tellus neque.\nNunc id pretium nulla. Aliquam ultricies est id lorem iaculis ullamcorper. In eu libero nibh. Cras mollis ac est vitae scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus feugiat quam at sem consequat, nec luctus neque dapibus. Donec dapibus, ante non dapibus accumsan, ligula ante facilisis nisl, sit amet egestas ligula leo ut lorem.\nMorbi in augue metus. Donec pellentesque est lacus, in elementum nisi vestibulum et. Phasellus volutpat ligula eu ex faucibus tincidunt. Pellentesque nec lectus in orci vehicula rutrum dignissim eget turpis. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mi mauris, condimentum et fringilla ac, pharetra a turpis. Phasellus auctor molestie diam, eu ullamcorper nisl mollis sed. Aenean non pharetra ante, a mollis urna. Nulla sit amet sapien congue, fringilla mauris quis, vestibulum leo. Quisque eget porta mi. Maecenas consectetur tortor sit amet congue lobortis. Proin et erat nulla. Cras sem eros, imperdiet ut sollicitudin vel, gravida sit amet justo. Nam eleifend maximus efficitur. Praesent sem dui, eleifend vitae eros consequat, semper egestas dui.\nSed eu neque et sapien facilisis ultricies eget sit amet risus. Phasellus dictum rutrum nisl at bibendum. Aliquam cursus semper odio sit amet faucibus. Quisque in fringilla dui. Aenean in ornare justo. In ullamcorper sollicitudin nisi, nec fringilla ante tempus eget. Nullam in leo ex.\nMauris eget porttitor ipsum. Aenean viverra interdum sem, quis imperdiet urna sollicitudin eget. Cras nec magna quis felis congue tempus. Nulla auctor condimentum tortor. Curabitur a elit a urna mattis condimentum at id est. Aliquam ac nisi id dui fermentum sagittis vel ac metus. Pellentesque malesuada nisi et sapien luctus dapibus. Fusce venenatis, leo non mollis accumsan, justo sem interdum magna, non fermentum metus lacus ac ipsum. Nam vel metus a dolor pellentesque varius. Ut at erat urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Brandon Hutchison",
    longPic: "https://picsum.photos/seed/three/450/255",
    squarePic: "https://picsum.photos/seed/three/255/255",
    views: 8,
    date: "December 22, 2019"
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlogBody blog={blog} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<BlogBody blog={blog} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
