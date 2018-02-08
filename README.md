# hyperapp-standalone-state
Hyperapp without integrated vdom

Some experiment to use hyperapp without the integrated vdom and instead using another solution (here: hyperHTML).
Effectively cut the lib in size and make the state management a standalone solution.

### Example 1
using hyperhtml to render to DOM

### Example 2
using simple 'console.log' to show current state-value + instructions.
functions are called outside the view from returned actions of 'app(..)'
* memo: create future example to use hyperapp in CLI via node
