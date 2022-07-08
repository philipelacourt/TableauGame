
gdjs.evtsExt__UntitledExtension__MyBehavior = gdjs.evtsExt__UntitledExtension__MyBehavior || {};

/**
 * Behavior generated from Change
 */
gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior = class MyBehavior extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior.prototype.FunctionContext = {};

gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior.prototype.FunctionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior.prototype.FunctionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior.prototype.FunctionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior.prototype.Function = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};


gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior.prototype.FunctionContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("UntitledExtension::MyBehavior", gdjs.evtsExt__UntitledExtension__MyBehavior.MyBehavior);
