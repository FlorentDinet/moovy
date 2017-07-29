// Create a circle shaped path with its center at the center
// of the view and a radius of 30:
var path = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'black'
});

var myCircle = new Path.Circle({
	center: view.center,
	radius: 70,
	strokeColor: 'black'
});
myCircle.strokeColor = 'black';


myCircle.removeSegment(0);

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}