# finwo / gsevents

Suckless global-scope events for node & the browser

## Why

another event engine, you ask?

Because all I've found handled object events but none provided a simple way to trigger events on a global scope (within the current process, for if you're using node).

## Installation

Both npm & bower are supported for backend & frontend respectively.

```
# Frontend installation
bower install --save gsevent

# Backend installation
npm install --save gsevent
```

---

## Usage

#### Browser

First, you'll need to include either of these scripts inside your page. If requirejs' `define` function was found, it will register itself under the name `gsevent`.

```
<script type="text/javascript" src="/path/to/bower/components/gsevent/dist/gsevent.js"></script>
<script type="text/javascript" src="/path/to/bower/components/gsevent/dist/gsevent.min.js"></script>
```

After including it on your page, you can add listeners on a named event as follows.

```
gsevent.on('event-name', function( data ) {
  // Code to run on the event
  // Data is the data returned by the previous event
  // The execution of other events can be stopped by returning a false-like value
});
```

To trigger an event, run the following code

```
gsevent('event-name' [, data] );
```

#### Node

Simply load the module through require.

```
var gsevent = require('gsevent');
```

## Contributing

After checking the [Github issues](https://github.com/finwo/node-global-scope-events/issues) and confirming that your request isn't already being worked on, feel free to spawn a new fork of the develop branch & send in a pull request.

The develop branch is merged periodically into the master after confirming it's stable, to make sure the master always contains a production-ready version.
