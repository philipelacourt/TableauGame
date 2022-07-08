gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDDesignOneObjects1= [];
gdjs.Untitled_32sceneCode.GDDesignOneObjects2= [];
gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1= [];
gdjs.Untitled_32sceneCode.GDRectangleALeftObjects2= [];
gdjs.Untitled_32sceneCode.GDRectangleASupObjects1= [];
gdjs.Untitled_32sceneCode.GDRectangleASupObjects2= [];
gdjs.Untitled_32sceneCode.GDRectangleAInfObjects1= [];
gdjs.Untitled_32sceneCode.GDRectangleAInfObjects2= [];
gdjs.Untitled_32sceneCode.GDRectangleBLeftObjects1= [];
gdjs.Untitled_32sceneCode.GDRectangleBLeftObjects2= [];
gdjs.Untitled_32sceneCode.GDRectangleBInfObjects1= [];
gdjs.Untitled_32sceneCode.GDRectangleBInfObjects2= [];
gdjs.Untitled_32sceneCode.GDRectangleBSupObjects1= [];
gdjs.Untitled_32sceneCode.GDRectangleBSupObjects2= [];
gdjs.Untitled_32sceneCode.GDColorAObjects1= [];
gdjs.Untitled_32sceneCode.GDColorAObjects2= [];
gdjs.Untitled_32sceneCode.GDColorBObjects1= [];
gdjs.Untitled_32sceneCode.GDColorBObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRectangleALeftObjects1Objects = Hashtable.newFrom({"RectangleALeft": gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("RectangleAInf"), gdjs.Untitled_32sceneCode.GDRectangleAInfObjects1);
gdjs.copyArray(runtimeScene.getObjects("RectangleALeft"), gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("RectangleASup"), gdjs.Untitled_32sceneCode.GDRectangleASupObjects1);
gdjs.copyArray(runtimeScene.getObjects("RectangleBInf"), gdjs.Untitled_32sceneCode.GDRectangleBInfObjects1);
gdjs.copyArray(runtimeScene.getObjects("RectangleBLeft"), gdjs.Untitled_32sceneCode.GDRectangleBLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("RectangleBSup"), gdjs.Untitled_32sceneCode.GDRectangleBSupObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleASupObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleASupObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleAInfObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleAInfObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleBLeftObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleBLeftObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleBInfObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleBInfObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleBSupObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleBSupObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RectangleALeft"), gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRectangleALeftObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[i].toggleVariableBoolean(gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[i].getVariables().getFromIndex(0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RectangleALeft"), gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[k] = gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1[i].setColor("255;0;0");
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDDesignOneObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDesignOneObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleALeftObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleALeftObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleASupObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleASupObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleAInfObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleAInfObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleBLeftObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleBLeftObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleBInfObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleBInfObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleBSupObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleBSupObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDColorAObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDColorAObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDColorBObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDColorBObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
